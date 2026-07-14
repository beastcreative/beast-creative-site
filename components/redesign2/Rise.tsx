"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface RiseProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  activeClass?: string;
}

/**
 * Tiny IntersectionObserver reveal wrapper for the /redesign-2
 * "Screening Room" route. Adds `activeClass` (default "is-in") once
 * the element is 20% in view; reduced-motion users get content
 * painted immediately (CSS also covers this).
 */
export default function Rise({
  children,
  className = "",
  delay = 0,
  activeClass = "is-in",
}: RiseProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add(activeClass);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(activeClass);
            io.unobserve(el);
          }
        });
      },
      // Pre-trigger ~12% below the viewport so sections finish revealing
      // before they scroll into view — no blank-on-arrival on fast scroll.
      { threshold: 0, rootMargin: "0px 0px 12% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [activeClass]);

  return (
    <div
      ref={ref}
      className={`scr-rise ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
