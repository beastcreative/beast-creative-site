import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { checkReviewPassword, reviewToken, REVIEW_COOKIE } from "@/lib/review-auth";

export async function POST(req: NextRequest) {
  let body: { password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!checkReviewPassword(body.password || "")) {
    return NextResponse.json({ ok: false, error: "Incorrect password." }, { status: 401 });
  }
  const c = await cookies();
  c.set(REVIEW_COOKIE, reviewToken(), {
    httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7,
  });
  return NextResponse.json({ ok: true });
}
