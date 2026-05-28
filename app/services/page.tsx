import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Beast Creative Agency | National",
  description:
    "Full-service digital marketing from Beast Creative Agency: CPG marketing, SEO + AEO, paid social, AI content production, branding, and web design.",
};

const services = [
  {
    name: "Web Design & Development",
    badge: "Most Requested",
    pitch: "Custom Next.js and Shopify builds — mobile-first, Lighthouse 90+, conversion-focused. Built to rank in Google and built to turn visitors into customers.",
    href: "/services/web-design",
    stats: "Lighthouse 90+ · Next.js · Shopify",
    featured: true,
  },
  {
    name: "SEO + AEO",
    pitch: "Rank in Google AND get cited by ChatGPT, Gemini, and Perplexity. Traditional search meets AI search — both in one strategy, from one team.",
    href: "/services/seo-aeo",
    stats: "11.6x email CTR lift",
  },
  {
    name: "Paid Media",
    pitch: "AI-optimized Facebook, Instagram, TikTok, and Google campaigns with real-time creative testing and daily optimization.",
    href: "/services/paid-media",
    stats: "$0.12 CPC achieved",
  },
  {
    name: "Branding & Identity",
    pitch: "Brand naming, visual systems, logo design, and identities that create instant recognition. We built Coinline from zero — name, logo, voice, and market position.",
    href: "/services/branding",
    stats: "Coinline — zero explanation needed",
  },
  {
    name: "AI Content Production",
    pitch: "Social content, video, and copy at scale — produced with AI at 90%+ lower cost than traditional production. 900+ assets processed for CPG clients.",
    href: "/services/content-production",
    stats: "900+ assets processed",
  },
  {
    name: "CPG Marketing",
    pitch: "Sweepstakes, first-party data, and retail-ready campaigns. Our CPG results — 36,581 entries on $6K, 7.03% CTR — set the standard for every client we take on.",
    href: "/services/cpg-marketing",
    stats: "36,581 entries on $6K",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mx-auto mb-6">
              Full-Service. No Excuses.
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl mx-auto">
              Web design, SEO, paid media, branding, and content — one agency, documented results, no runaround.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-section-offwhite py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">

          {/* Web Design — Featured card */}
          <AnimatedSection className="mb-6">
            <Link href="/services/web-design" className="group block">
              <div className="relative rounded-2xl overflow-hidden bg-beast-pink p-8 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/25 mb-5">
                    Most Requested
                  </span>
                  <div aria-hidden="true" className="font-display text-8xl lg:text-[10rem] font-black text-white/10 leading-none -mb-2 select-none">01</div>
                  <h2 className="font-display text-3xl lg:text-5xl font-black text-white leading-tight">Web Design &amp; Development</h2>
                </div>
                <div className="lg:max-w-sm shrink-0">
                  <p className="text-white/80 leading-relaxed mb-4">
                    Custom Next.js and Shopify builds — mobile-first, Lighthouse 90+, and built to convert. Every page has a purpose and a next step.
                  </p>
                  <p className="font-mono text-xs font-semibold text-white/60 mb-6">Lighthouse 90+ · Next.js · Shopify</p>
                  <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-[gap] duration-200">
                    Explore Service <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Remaining 5 services — numbered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(1).map((svc, i) => (
              <AnimatedSection key={svc.href} delay={(i + 1) * 0.08}>
                <Link href={svc.href} className="group block h-full">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div aria-hidden="true" className="font-display text-5xl font-black text-beast-pink/15 leading-none mb-4 select-none">
                      0{i + 2}
                    </div>
                    <h2 className="font-display text-xl font-bold text-beast-black mb-3">{svc.name}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{svc.pitch}</p>
                    <div className="border-t border-gray-100 pt-4 mt-2 flex items-center justify-between">
                      <span className="text-xs font-mono text-beast-pink font-semibold">{svc.stats}</span>
                      <span className="btn-ghost-pink text-sm group-hover:gap-3 transition-[gap]">Learn More →</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beast-black py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-bold text-white tracking-normal mb-4">Not Sure Where to Start?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free 15-minute strategy call. We&apos;ll tell you exactly which service would move the needle most for your brand — no pitch, no commitment.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free 15-Minute Strategy Call</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
