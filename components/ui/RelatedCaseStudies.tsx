"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ALL_STUDIES = {
  "sun-bird": {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd: Walmart Rollout",
    stat: "36,581",
    statLabel: "consumer emails",
    category: "CPG Marketing",
    href: "/work/sun-bird",
    gradientFrom: "#0d1a2e",
    gradientTo: "#0a1220",
    glow: "rgba(56,189,248,0.25)",
    image: "/assets/sunbird-ad-green.jpg"
  },
  "williams-bts": {
    client: "Williams Foods",
    campaign: "Back-to-School Sweepstakes",
    stat: "22,043",
    statLabel: "entries on $4K",
    category: "CPG Marketing",
    href: "/work/williams-bts",
    gradientFrom: "#1a1208",
    gradientTo: "#110d00",
    glow: "rgba(251,191,36,0.25)",
    image: "/assets/williams-bts-hero.jpg"
  },
  "williams-allstars": {
    client: "Williams Foods",
    campaign: "All-Stars: March Madness",
    stat: "13,660",
    statLabel: "entries in 24 days",
    category: "Campaign Design",
    href: "/work/williams-allstars",
    gradientFrom: "#0a1a10",
    gradientTo: "#071208",
    glow: "rgba(34,197,94,0.25)",
    image: "/assets/allstars-ad-announcement.png",
  },
  "williams-bowl": {
    client: "Williams Foods",
    campaign: "Williams Bowl: NFL Sweepstakes",
    stat: "6,020",
    statLabel: "entries on $1.5K",
    category: "CPG Marketing",
    href: "/work/williams-bowl",
    gradientFrom: "#1a0808",
    gradientTo: "#0f0404",
    glow: "rgba(239,68,68,0.25)",
    image: "/assets/williams-bowl-banner.jpg",
  },
  "sweet-sensi": {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    stat: "500%+",
    statLabel: "MRR growth",
    category: "SEO + Social",
    href: "/work/sweet-sensi",
    gradientFrom: "#120a1a",
    gradientTo: "#0d0812",
    glow: "rgba(168,85,247,0.25)",
    image: "/assets/sweet-sensi-gummies.jpg"
  },
  "coinline": {
    client: "Coinline",
    campaign: "Brand Naming & Identity",
    stat: "100%",
    statLabel: "built from zero",
    category: "Branding",
    href: "/work/coinline",
    gradientFrom: "#1a0a14",
    gradientTo: "#10060d",
    glow: "rgba(237,21,100,0.25)",
    image: "", // add: "/assets/coinline-hero.jpg"
  },
  "pioneer": {
    client: "Pioneer",
    campaign: "Paid Media & ROAS Campaign",
    stat: "7.03%",
    statLabel: "CTR benchmark",
    category: "Paid Media",
    href: "/work/pioneer",
    gradientFrom: "#0a0a1a",
    gradientTo: "#060612",
    glow: "rgba(99,102,241,0.25)",
    image: "", // add: "/assets/pioneer-hero.jpg"
  },
  "teksbuilder": {
    client: "TEKSBuilder",
    campaign: "Idea to Launched SaaS in One Week",
    stat: "1 Week",
    statLabel: "idea to launch",
    category: "App & SaaS Dev",
    href: "/work/teksbuilder",
    gradientFrom: "#0a1a18",
    gradientTo: "#06110f",
    glow: "rgba(0,247,99,0.22)",
    image: "/assets/teksbuilder-hero.jpg",
  },
};

type StudyKey = keyof typeof ALL_STUDIES;

export default function RelatedCaseStudies({ related }: { related: StudyKey[] }) {
  const studies = related.slice(0, 3).map((key) => ALL_STUDIES[key]);

  return (
    <section className="bg-[#111111] py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <AnimatedSection className="mb-8">
          <p className="section-eyebrow text-beast-pink mb-2">More Work</p>
          <h2 className="font-display text-2xl font-bold text-white">Related Case Studies</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {studies.map((cs, i) => (
            <AnimatedSection key={cs.href} delay={i * 0.08}>
              <Link href={cs.href} className="block">
                <div
                  className="rc-wrap"
                  style={{ "--rc-glow": cs.glow } as React.CSSProperties}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                  }}
                >
                  <article className="rc-card">
                  {/* Top glow */}
                  <div className="rc-glow" />

                  {/* Image / stat area */}
                  <div
                    className="rc-image relative h-32 flex items-center justify-center overflow-hidden"
                    style={!cs.image ? {
                      background: `linear-gradient(135deg, ${cs.gradientFrom} 0%, ${cs.gradientTo} 100%)`,
                    } : { boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}
                  >
                    {cs.image ? (
                      <Image
                        src={cs.image}
                        alt={`${cs.client}: ${cs.campaign} | Beast Creative Agency`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    ) : (
                      /* Ghost watermark stat — shown when no image */
                      <span className="font-display text-5xl font-extrabold text-white/10 select-none tracking-wide">
                        {cs.stat}
                      </span>
                    )}
                    {/* Badge — appears on hover */}
                    <span className="rc-badge absolute top-3 right-3 text-xs font-bold uppercase tracking-widest text-gray-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                      {cs.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-4">
                    <p className="rc-title text-xs font-bold uppercase tracking-widest text-beast-pink mb-1">
                      {cs.client}
                    </p>
                    <h3 className="font-display text-sm font-bold text-white mb-3 leading-tight">
                      {cs.campaign}
                    </h3>
                    <div className="rc-stat flex items-baseline gap-1.5 mb-4">
                      <span className="font-display text-xl font-extrabold text-beast-yellow tracking-wide">
                        {cs.stat}
                      </span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">
                        {cs.statLabel}
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-beast-pink">View Case Study</span>
                      <div
                        className="rc-btn w-7 h-7 rounded-full flex items-center justify-center text-white"
                        style={{ background: "rgba(255,17,152,0.8)" }}
                      >
                        <svg height="14" width="14" viewBox="0 0 24 24" fill="none">
                          <path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  </article>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
