"use client";

import { pushEvent } from "@/lib/analytics";

type Variant = "pink" | "white" | "ghost";

/**
 * Primary "Start Your … Growth Assessment" button. Links to the on-site
 * assessment form with a hidden ?type= so leads are segmented by page/vertical,
 * and fires a start_assessment_click event (with attribution) to the dataLayer.
 * (Booking the actual Growth Diagnostic happens after the visitor qualifies.)
 */
export default function DiagnosticCTA({
  label,
  location,
  pageType,
  variant = "pink",
  href,
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
  const finalHref = href ?? `/growth-assessment?type=${pageType}`;
  return (
    <a
      href={finalHref}
      onClick={() =>
        pushEvent("start_assessment_click", {
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
