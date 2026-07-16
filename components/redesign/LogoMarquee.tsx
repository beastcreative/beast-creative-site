"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import DragScroll from "@/components/redesign/DragScroll";

/**
 * Trusted-by logos as clickable light "cards" in an auto-scrolling marquee,
 * each with the pink cursor-spotlight hover from the old homepage's client wall
 * (kept light-themed). Hovering the strip pauses it (.led-marquee-track:hover);
 * each card links to its case study. Williams → the All-Stars campaign.
 */
const logos = [
  { src: "/assets/logos/teksbuilder.png", alt: "TEKSBuilder", href: "/work/teksbuilder" },
  { src: "/assets/logos/williams.png", alt: "Williams Foods", href: "/work/williams-allstars" },
  { src: "/assets/logos/sunbird.png", alt: "Sun-Bird Seasonings", href: "/work/sun-bird" },
  { src: "/assets/logos/sweetsensi.png", alt: "Sweet Sensi", href: "/work/sweet-sensi" },
  { src: "/assets/logos/coinline.png", alt: "Coinline", href: "/work/coinline" },
  { src: "/assets/logos/pioneer.png", alt: "Pioneer", href: "/work/pioneer" },
];

export default function LogoMarquee() {
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const lx = e.clientX - r.left;
    const ly = e.clientY - r.top;
    // glow position (px)
    el.style.setProperty("--x", `${lx}px`);
    el.style.setProperty("--y", `${ly}px`);
    // subtle cursor-following tilt (normalized -0.5..0.5 → small degrees)
    el.style.setProperty("--roty", `${((lx / r.width - 0.5) * 10).toFixed(2)}deg`);
    el.style.setProperty("--rotx", `${((0.5 - ly / r.height) * 8).toFixed(2)}deg`);
  };

  const onLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--roty", "0deg");
    el.style.setProperty("--rotx", "0deg");
  };

  return (
    <DragScroll speed={0.5} gapClass="gap-4" className="py-4" ariaLabel="Trusted brands — drag to explore">
      {[...logos, ...logos].map((l, i) => (
        <Link
          key={i}
          href={l.href}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          aria-label={`View ${l.alt} case study`}
          className="led-logo-wrap group block h-28 w-56 shrink-0"
        >
          <div className="led-logo-inner flex items-center justify-center px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.src}
              alt={l.alt}
              loading="lazy"
              draggable={false}
              className="max-h-9 w-auto max-w-[75%] object-contain opacity-55 transition-opacity duration-300 group-hover:opacity-90"
              style={{ filter: "brightness(0)" }}
            />
          </div>
        </Link>
      ))}
    </DragScroll>
  );
}
