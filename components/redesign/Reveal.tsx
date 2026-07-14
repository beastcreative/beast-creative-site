"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  /** ms delay before the reveal transition starts */
  delay?: number;
  className?: string;
  /** render element, defaults to div */
  as?: ElementType;
}

/**
 * Lightweight scroll reveal. Toggles `.is-in` (see .led-reveal in globals.css)
 * the first time the element enters the viewport, then disconnects.
 * Renders visible immediately if IntersectionObserver is unavailable.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // Pre-trigger ~28% below the viewport so sections finish revealing
      // before they scroll into view — no blank-on-arrival, even on fast scroll.
      { threshold: 0, rootMargin: "0px 0px 28% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={`led-reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
