"use client";

import { usePathname } from "next/navigation";

/** Hides marketing chrome (nav, footer, chat) on the internal /review tool. */
export default function HideOnReview({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/review")) return null;
  return <>{children}</>;
}
