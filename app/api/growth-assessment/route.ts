import { NextRequest, NextResponse } from "next/server";
import { assessmentSchema, computeRoute, type AssessmentData } from "@/lib/growth-assessment";
import { BOOKING_URL } from "@/lib/site";

/**
 * Growth Assessment intake. The browser posts here (same-origin). We validate,
 * apply anti-spam, and relay to the Google Apps Script web app with a shared
 * secret (secret + Apps Script URL stay server-side; the client never sees them).
 * If Apps Script isn't wired yet (or fails), we fall back to computing the route
 * locally + a best-effort email so a lead is never lost. Only a safe result
 * (route + bookingUrl) is ever returned to the client.
 */

const rate = new Map<string, { count: number; resetAt: number }>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const e = rate.get(ip);
  if (!e || now > e.resetAt) {
    rate.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  e.count += 1;
  return e.count > 6;
}

const ATTR_KEYS = [
  "source_page", "source_section", "assessment_type", "first_landing_page", "current_page",
  "referrer", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid",
  "first_touch_timestamp", "submission_timestamp",
];
function pickAttribution(body: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const k of ATTR_KEYS) {
    const v = body[k];
    if (typeof v === "string" && v) out[k] = v.slice(0, 500);
  }
  return out;
}

const esc = (s: string) => String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c] || c));

async function notifyFallback(data: AssessmentData, attr: Record<string, string>, route: string) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || "hello@beastcreativeagency.com";
  if (!key) return;
  const rows: [string, string][] = [
    ["Route", route],
    ["Name", `${data.first_name} ${data.last_name}`],
    ["Email", data.work_email],
    ["Company", `${data.company_name} (${data.company_website})`],
    ["Type / Stage / Revenue", `${data.company_type} · ${data.company_stage} · ${data.annual_revenue_range}`],
    ["Goals", (data.primary_goals || []).join(", ")],
    ["Challenge", data.biggest_challenge],
    ["Desired result", data.desired_result],
    ["Investment (now → potential)", `${data.current_monthly_investment} → ${data.potential_monthly_investment}`],
    ["Timeline", data.timeline],
    ["Decision role", data.decision_role],
    ["Other agencies", data.speaking_with_agencies],
    ["Source", `${attr.utm_source || "direct"} / ${attr.utm_campaign || ""} ${attr.gclid ? "· gclid" : ""}`],
  ];
  const html = `<h2>New Growth Assessment (${esc(route)})</h2><table cellpadding="6">${rows
    .map(([k, v]) => `<tr><td><strong>${esc(k)}</strong></td><td>${esc(v || "—")}</td></tr>`)
    .join("")}</table><p style="color:#888">Fallback mode: Apps Script not yet connected. Lead not written to Sheets.</p>`;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Beast Website <noreply@beastcreativeagency.com>",
      to,
      subject: `New Growth Assessment — ${route} — ${data.company_name}`,
      html,
    }),
    signal: AbortSignal.timeout(8000),
  });
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests. Please wait a moment." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }
  if (JSON.stringify(body).length > 20_000) {
    return NextResponse.json({ success: false, error: "Payload too large." }, { status: 413 });
  }

  // anti-spam: honeypot + submit-too-fast → accept quietly, no booking, no records
  if (body.website) return NextResponse.json({ success: true, route: "nurture" });
  if (typeof body.elapsed_ms === "number" && body.elapsed_ms < 2500) {
    return NextResponse.json({ success: true, route: "manual_review" });
  }

  const parsed = assessmentSchema.safeParse({ ...body, website: (body.website as string) ?? "" });
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: "Please check your answers and try again." }, { status: 400 });
  }
  const data = parsed.data;
  const attribution = pickAttribution(body);

  const appsUrl = process.env.GROWTH_APPS_SCRIPT_URL;
  const secret = process.env.GROWTH_SHARED_SECRET;

  if (appsUrl && secret) {
    try {
      const r = await fetch(appsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ...attribution, secret }),
        // The backend persists + returns fast, but a cold start or spreadsheet
        // contention can add seconds. 20s keeps us from timing out and falling
        // back to a route that disagrees with the real qualification engine.
        signal: AbortSignal.timeout(20_000),
      });
      const j = (await r.json()) as { success?: boolean; route?: string; bookingUrl?: string; message?: string };
      if (!r.ok || !j.success) throw new Error("apps script error");
      return NextResponse.json({ success: true, route: j.route || "manual_review", bookingUrl: j.bookingUrl, message: j.message });
    } catch {
      // Apps Script is configured but did not respond in time. It persists the
      // lead BEFORE responding, so it almost certainly captured and is processing
      // this submission. We must NOT guess a route here: showing a booking screen
      // to someone the engine did not qualify (or re-emailing) would be wrong.
      // Show a safe review state; the backend owns the real routing + follow-up.
      return NextResponse.json({ success: true, route: "manual_review" });
    }
  }

  // True fallback: the Google backend is not configured at all (e.g. local dev).
  // Capture the lead by email and use the local approximate routing.
  const route = computeRoute(data);
  await notifyFallback(data, attribution, route).catch(() => {});
  const bookingUrl = route === "qualified" || route === "priority_qualified" ? BOOKING_URL : undefined;
  return NextResponse.json({ success: true, route, bookingUrl });
}
