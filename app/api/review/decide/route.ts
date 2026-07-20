import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { reviewToken, REVIEW_COOKIE } from "@/lib/review-auth";

export async function POST(req: NextRequest) {
  const c = await cookies();
  if (c.get(REVIEW_COOKIE)?.value !== reviewToken()) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  let body: { lead?: string; action?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  if (!body.lead || (body.action !== "approve" && body.action !== "decline")) {
    return NextResponse.json({ success: false, error: "Missing lead or action." }, { status: 400 });
  }
  const appsUrl = process.env.GROWTH_APPS_SCRIPT_URL;
  const secret = process.env.GROWTH_SHARED_SECRET;
  if (!appsUrl || !secret) return NextResponse.json({ success: false, error: "Backend not configured." }, { status: 503 });
  try {
    const r = await fetch(appsUrl, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ decide: body.action, lead: body.lead, secret }), signal: AbortSignal.timeout(20_000),
    });
    return NextResponse.json(await r.json());
  } catch {
    return NextResponse.json({ success: false, error: "Could not reach the backend." }, { status: 502 });
  }
}
