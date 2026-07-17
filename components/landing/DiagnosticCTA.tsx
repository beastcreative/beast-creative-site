"use client";

import { pushEvent } from "@/lib/analytics";
import { BOOKING_URL } from "@/lib/site";

type Variant = "pink" | "white" | "ghost";

/**
 * Primary "Book a … Growth Diagnostic" button. Links to the central booking URL
 * and fires a book_diagnostic_click event (with attribution) to the dataLayer.
 */
export default function DiagnosticCTA({
  label,
  location,
  pageType,
  variant = "pink",
  href = BOOKING_URL,
  className = "",
}: {
  label: string;
  location: string;
  pageType: string;
  variant?: Variant;
  href?: string;
  className?: string;
}) {
  const base = variant === "ghost" ? "btn-ghost" : variant === "white" ? "btn-light" : "btn-primary";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        pushEvent("book_diagnostic_click", {
          cta_label: label,
          cta_location: location,
          page_type: pageType,
        })
      }
      className={`${base} ${className}`}
    >
      {label}
    </a>
  );
}
