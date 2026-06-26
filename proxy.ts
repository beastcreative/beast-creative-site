import { NextRequest, NextResponse } from "next/server";
import { MEGA_COOKIE, expectedToken } from "@/lib/mega-gate";

// Password-gate the confidential Mega Foods proposal.
// Covers the clean URL, the raw index.html, and every asset beneath it so the
// gate can't be bypassed by requesting the file directly.
export const config = {
  matcher: ["/proposals/megafoods", "/proposals/megafoods/:path*"],
};

export async function proxy(req: NextRequest) {
  const token = await expectedToken();
  if (req.cookies.get(MEGA_COOKIE)?.value === token) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/proposals/megafoods-unlock";
  url.search = "";
  return NextResponse.rewrite(url);
}
