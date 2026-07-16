import Image from "next/image";
import DragScroll from "@/components/redesign/DragScroll";

/**
 * Full-bleed auto-scrolling "reel" of real campaign visuals — a kinetic visual
 * break between text sections. Pure-CSS marquee (see .led-marquee-track), hover
 * to pause. Reduced-motion users get a paused, statically-offset strip.
 */
const reel = [
  { src: "/assets/williams-bts-hero.jpg", cap: "Williams · Back-to-School" },
  { src: "/assets/sunbird-ad-green.jpg", cap: "Sun-Bird · Bird Herd" },
  { src: "/assets/sweet-sensi-gummies.jpg", cap: "Sweet Sensi · CBD Growth" },
  { src: "/assets/teksbuilder-hero.jpg", cap: "TEKSBuilder · 1-Week SaaS" },
  { src: "/assets/williams-bowl-banner.jpg", cap: "Williams · Bowl" },
  { src: "/assets/allstars-ad-announcement.png", cap: "Williams · All-Stars" },
  { src: "/assets/sunbird-ad-yellow.jpg", cap: "Sun-Bird · Retail" },
  { src: "/assets/sweet-sensi-store.jpg", cap: "Sweet Sensi · Retail" },
];

export default function ProofReel() {
  return (
    <DragScroll speed={0.55} gapClass="gap-5" className="px-3 py-1" ariaLabel="Campaign reel — drag to explore">
      {[...reel, ...reel].map((it, i) => (
        <figure
          key={i}
          className="group relative h-52 w-[19rem] shrink-0 overflow-hidden rounded-xl border border-black/10 bg-near-black lg:h-64 lg:w-[24rem]"
        >
          <Image
            src={it.src}
            alt={it.cap}
            fill
            sizes="24rem"
            draggable={false}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <figcaption className="led-label absolute bottom-3 left-4 text-white/85">{it.cap}</figcaption>
        </figure>
      ))}
    </DragScroll>
  );
}
