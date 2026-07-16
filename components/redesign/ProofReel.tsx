"use client";

import Image from "next/image";
import type { MouseEvent } from "react";

/**
 * Full-bleed auto-scrolling "reel" of real campaign visuals — a kinetic visual
 * break between text sections. Pure-CSS marquee (see .led-marquee-track), hover
 * to pause. Each card flips on hover (desktop) or tap (mobile) to reveal a few
 * real, verified success data points on the back.
 */
const reel = [
  {
    src: "/assets/williams-bts-hero.jpg",
    cap: "Williams · Back-to-School",
    stats: [
      { v: "22,043", l: "entries" },
      { v: "$0.18", l: "cost per click" },
    ],
  },
  {
    src: "/assets/sunbird-ad-green.jpg",
    cap: "Sun-Bird · Bird Herd",
    stats: [
      { v: "7.03%", l: "CTR vs 0.89% avg" },
      { v: "36,581", l: "emails on $6K" },
    ],
  },
  {
    src: "/assets/sweet-sensi-gummies.jpg",
    cap: "Sweet Sensi · CBD Growth",
    stats: [
      { v: "500%+", l: "MRR growth" },
      { v: "SEO", l: "+ social combo" },
    ],
  },
  {
    src: "/assets/teksbuilder-hero.jpg",
    cap: "TEKSBuilder · 1-Week SaaS",
    stats: [
      { v: "1 Week", l: "idea → launched" },
      { v: "Our own", l: "live SaaS product" },
    ],
  },
  {
    src: "/assets/williams-bowl-banner.jpg",
    cap: "Williams · Bowl",
    stats: [
      { v: "6,020", l: "entries" },
      { v: "$1,500", l: "budget" },
    ],
  },
  {
    src: "/assets/allstars-ad-announcement.png",
    cap: "Williams · All-Stars",
    stats: [
      { v: "13,660", l: "contest entries" },
      { v: "Sweeps", l: "first-party data" },
    ],
  },
];

export default function ProofReel() {
  // Tap toggles the flip on touch; desktop uses :hover (see .reel-card CSS).
  const onTap = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle("is-flipped");
  };

  return (
    <div className="overflow-hidden">
      <div className="led-marquee-track gap-5 px-3">
        {[...reel, ...reel].map((it, i) => (
          <div
            key={i}
            onClick={onTap}
            className="reel-card h-52 w-[19rem] shrink-0 lg:h-64 lg:w-[24rem]"
          >
            <div className="reel-inner">
              {/* FRONT — campaign visual */}
              <figure className="reel-face group bg-near-black">
                <Image
                  src={it.src}
                  alt={it.cap}
                  fill
                  sizes="24rem"
                  draggable={false}
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <figcaption className="led-label absolute bottom-3 left-4 text-white/85">{it.cap}</figcaption>
              </figure>

              {/* BACK — the receipts */}
              <div className="reel-face reel-back flex flex-col justify-between bg-beast-black p-6 text-white">
                <div
                  className="pointer-events-none absolute inset-0"
                  aria-hidden="true"
                  style={{ background: "radial-gradient(90% 90% at 100% 0%, rgba(255,17,152,0.14) 0%, transparent 60%)" }}
                />
                <p className="led-label relative text-beast-pink">{it.cap}</p>
                <div className="relative grid grid-cols-2 gap-4">
                  {it.stats.map((s, j) => (
                    <div key={j}>
                      <p className="font-display text-3xl font-black leading-none text-beast-yellow lg:text-4xl">{s.v}</p>
                      <p className="led-label mt-1.5 text-white/55">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p className="led-label relative text-white/30">Beast Creative · Real proof</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
