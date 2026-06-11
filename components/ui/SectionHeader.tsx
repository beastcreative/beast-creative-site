import { ReactNode } from "react";

/**
 * SectionHeader — the canonical way to introduce a section.
 *
 * A small accent (text eyebrow OR a gold star row) above a bold font-display
 * title, with an optional pink-highlighted word and supporting subtitle.
 * Use this for every section intro so headings stay consistent site-wide.
 *
 * Examples:
 *   <SectionHeader eyebrow="Who We Are" title="Beast Creative." />
 *   <SectionHeader accent="stars" title="Reviewed & Recognized." align="center" />
 *   <SectionHeader title="Marketing that" highlight="shows its work." />
 */

type Align = "left" | "center";
type Variant = "light" | "dark";

interface SectionHeaderProps {
  /** Small uppercase pink eyebrow above the title (classic site pattern). */
  eyebrow?: string;
  /** Visual accent above the title (gold 5-star row). Pairs with or replaces eyebrow. */
  accent?: "stars";
  title: string;
  /** Substring of `title` rendered in beast-pink. */
  highlight?: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
  align?: Align;
  /** Dark sections need a light title. */
  variant?: Variant;
  /** Outer spacing / layout hook (e.g. "mb-12"). */
  className?: string;
  /** Override the default title size. */
  titleClassName?: string;
}

function StarRow({ align }: { align: Align }) {
  return (
    <span
      className={`mb-3 inline-flex items-center gap-1 ${align === "center" ? "justify-center" : ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[#FFB400]">
          <path d="M10 1.5l2.47 5.36 5.88.62-4.4 3.95 1.23 5.78L10 14.9l-5.18 2.81 1.23-5.78-4.4-3.95 5.88-.62L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function renderTitle(title: string, highlight?: string): ReactNode {
  if (!highlight || !title.includes(highlight)) return title;
  const idx = title.indexOf(highlight);
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-beast-pink">{highlight}</span>
      {title.slice(idx + highlight.length)}
    </>
  );
}

export default function SectionHeader({
  eyebrow,
  accent,
  title,
  highlight,
  subtitle,
  align = "left",
  variant = "light",
  className = "",
  titleClassName = "text-4xl lg:text-5xl",
}: SectionHeaderProps) {
  const isDark = variant === "dark";

  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {accent === "stars" && <StarRow align={align} />}
      {eyebrow && (
        <p className="section-eyebrow mb-4 text-beast-pink">{eyebrow}</p>
      )}
      <h2
        className={`font-display ${titleClassName} font-bold tracking-normal ${
          isDark ? "text-white" : "text-beast-black"
        }`}
      >
        {renderTitle(title, highlight)}
      </h2>
      {subtitle && (
        <p className={`text-body-lead mt-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
