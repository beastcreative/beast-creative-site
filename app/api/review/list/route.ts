import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { reviewToken, REVIEW_COOKIE } from "@/lib/review-auth";

export async function GET() {
  const c = await cookies();
  if (c.get(REVIEW_COOKIE)?.value !== reviewToken()) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const appsUrl = process.env.GROWTH_APPS_SCRIPT_URL;
  const secret = process.env.GROWTH_SHARED_SECRET;
  if (!appsUrl || !secret) return NextResponse.json({ success: false, leads: [], error: "Backend not configured." });
  try {
    const r = await fetch(appsUrl, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ list: true, secret }), signal: AbortSignal.timeout(20_000),
    });
    return NextResponse.json(await r.json());
  } catch {
    return NextResponse.json({ success: false, leads: [], error: "Could not reach the backend." }, { status: 502 });
  }
}
