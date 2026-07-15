"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface WorkItem {
  client: string;
  campaign: string;
  heroStat: string;
  heroStatLabel: string;
  category: string;
  href: string;
  image: string;
}

/**
 * Editorial "Selected Work" index (dark section). A bold condensed list of
 * campaigns; hovering/focusing a row crossfades the persistent preview panel to
 * that campaign's real image — so an image is always on screen, and the work
 * reveals itself as you move. Mobile shows an inline thumbnail per row (no hover).
 */
export default function WorkIndex({ items }: { items: WorkItem[] }) {
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
      {/* Persistent preview (desktop) — crossfades on row hover */}
      <div className="hidden lg:block">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-near-black shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
          {items.map((it, i) => (
            <Image
              key={it.href}
              src={it.image}
              alt={`${it.client} — ${it.campaign}`}
              fill
              sizes="40vw"
              className={`object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
          <span className="led-cross absolute right-3 top-3 text-white/40" aria-hidden="true" />
          <span className="led-label absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1.5 text-white/85 backdrop-blur-sm">
            {cur.category}
          </span>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="led-label text-beast-pink">{cur.client}</p>
            <p className="mt-1.5 font-display text-3xl font-bold uppercase leading-none text-white">{cur.campaign}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-4xl font-black leading-none text-beast-yellow">{cur.heroStat}</span>
              <span className="led-label text-white/50">{cur.heroStatLabel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Index list */}
      <ul className="border-t led-rule-dark">
        {items.map((it, i) => (
          <li key={it.href}>
            <Link
              href={it.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={`group flex items-center gap-4 border-b py-5 transition-colors duration-300 sm:gap-5 ${
                i === active ? "border-beast-pink/50" : "led-rule-dark"
              }`}
            >
              <span
                className={`led-label w-7 shrink-0 transition-colors duration-300 ${
                  i === active ? "text-beast-pink" : "text-white/30"
                }`}
              >
                0{i + 1}
              </span>

              {/* Mobile inline thumbnail */}
              <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border border-white/10 lg:hidden">
                <Image src={it.image} alt="" fill sizes="80px" className="object-cover" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="led-label text-white/45">{it.client}</p>
                <p
                  className={`font-display text-xl font-bold uppercase leading-tight transition-colors duration-300 sm:text-2xl lg:text-[1.75rem] ${
                    i === active ? "text-white" : "text-white/75"
                  }`}
                >
                  {it.campaign}
                </p>
              </div>

              <div className="hidden shrink-0 text-right sm:block">
                <p className="font-display text-3xl font-black leading-none text-beast-yellow lg:text-4xl">{it.heroStat}</p>
                <p className="led-label mt-1 text-white/40">{it.heroStatLabel}</p>
              </div>

              <span
                aria-hidden="true"
                className={`led-label hidden shrink-0 transition-all duration-300 lg:inline ${
                  i === active ? "translate-x-0 text-beast-pink opacity-100" : "-translate-x-2 opacity-0"
                }`}
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
