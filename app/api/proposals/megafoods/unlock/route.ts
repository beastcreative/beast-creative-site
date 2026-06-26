import { NextResponse } from "next/server";
import { MEGA_COOKIE, expectedToken, sha256Hex } from "@/lib/mega-gate";

// Verifies the submitted password and, on success, sets the gate cookie.
export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const token = await expectedToken();
  const { origin } = new URL(req.url);

  if (password && (await sha256Hex(password)) === token) {
    const res = NextResponse.redirect(`${origin}/proposals/megafoods`, {
      status: 303,
    });
    res.cookies.set(MEGA_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/proposals/megafoods",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return res;
  }

  return NextResponse.redirect(
    `${origin}/proposals/megafoods-unlock?error=1`,
    { status: 303 },
  );
}
