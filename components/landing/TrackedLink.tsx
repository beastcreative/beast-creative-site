"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { pushEvent } from "@/lib/analytics";

/** next/link that fires a dataLayer event on click (e.g. case_study_click). */
export default function TrackedLink({
  href,
  event,
  params = {},
  className = "",
  children,
}: {
  href: string;
  event: string;
  params?: Record<string, string | number | boolean | undefined>;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} onClick={() => pushEvent(event, params)} className={className}>
      {children}
    </Link>
  );
}
