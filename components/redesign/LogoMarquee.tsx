"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

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
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <div className="overflow-hidden">
      <div className="led-marquee-track gap-4 px-4">
        {[...logos, ...logos].map((l, i) => (
          <Link
            key={i}
            href={l.href}
            onMouseMove={onMove}
            aria-label={`View ${l.alt} case study`}
            className="led-logo-card group flex h-28 w-56 shrink-0 items-center justify-center px-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.src}
              alt={l.alt}
              loading="lazy"
              className="relative z-10 max-h-9 w-auto max-w-[75%] object-contain opacity-55 transition-opacity duration-300 group-hover:opacity-90"
              style={{ filter: "brightness(0)" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
