import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Logo Design San Antonio | Custom Brand Identity | Beast Creative",
  description:
    "Professional logo design in San Antonio, TX. Custom logos built for real brands — not templates. Part of a full brand identity system. (210) 332-0567",
  alternates: { canonical: "https://beastcreativeagency.com/services/logo-design-san-antonio" },
  openGraph: {
    title: "Logo Design San Antonio | Beast Creative Agency",
    description: "Custom logo design for San Antonio businesses. Built as part of a complete brand identity — not just a logo in isolation.",
    url: "https://beastcreativeagency.com/services/logo-design-san-antonio",
    type: "website",
  },
};

const proofPoints = [
  "100% custom — no templates",
  "3 logo concepts presented",
  "All file formats included",
  "Brand standards doc included",
  "San Antonio-based team",
];

const coinlineStats = [
  { stat: "0", label: "Explanation needed", sub: "Name speaks for itself" },
  { stat: "8", label: "Logo variants delivered", sub: "Every context covered" },
  { stat: "6mo", label: "Brand sprint", sub: "Name to full identity" },
  { stat: "100%", label: "From scratch", sub: "No existing brand assets" },
];

const deliverables = [
  { title: "Primary Logo", desc: "Your main mark — designed for use across digital, print, signage, and merchandise. Multiple orientations included." },
  { title: "Logo Variations", desc: "Horizontal, stacked, icon-only, and one-color versions. Every context your brand will appear in, covered." },
  { title: "Color Palette", desc: "Primary and secondary colors with hex, RGB, and CMYK values. Usage rules so the palette stays consistent." },
  { title: "Typography System", desc: "Headline and body fonts that complement your logo and reinforce your brand personality." },
  { title: "Brand Standards Doc", desc: "A one-stop reference for how to use your logo, colors, and fonts correctly. Essential for any growing team." },
  { title: "File Package", desc: "SVG, PNG (transparent), PDF, and EPS — every format you'll ever need, organized and labeled." },
];

const process = [
  { step: "01", name: "Discovery", desc: "We learn your business, your audience, and your competitors. We find the visual gaps your brand can own." },
  { step: "02", name: "Concepts", desc: "We present 3 distinct logo directions — different aesthetics, different approaches. You pick a direction and we refine." },
  { step: "03", name: "Refinement", desc: "Two rounds of revisions included. We adjust until the mark is exactly right — then we build the full system around it." },
  { step: "04", name: "Delivery", desc: "Final files, brand standards doc, and all variations delivered in a single organized package. Ready to use everywhere." },
];

const faqItems = [
  { question: "How much does logo design cost in San Antonio?", answer: "Our logo design projects start at $1,500 for a standalone logo with basic variations and file package. Full brand identity systems (logo + color + typography + standards doc) start at $3,000. Every project is quoted based on scope." },
  { question: "Do you do logo-only projects or is it always a full brand package?", answer: "Both. We do logo-only projects for businesses that have an existing identity system and just need a new mark. For new businesses or rebrands, we recommend the full system — a logo without a color palette and typography system creates inconsistency." },
  { question: "How many concepts do you present?", answer: "Three distinct logo directions. Each one is a different approach — not variations of the same idea. After you choose a direction, we refine it through up to two revision rounds." },
  { question: "What file formats do I get?", answer: "SVG, PNG (with transparent background), PDF, and EPS. That covers every use case — web, print, embroidery, signage, and merchandise." },
  { question: "Can you redesign my existing logo?", answer: "Yes. Redesigns are common — either because the business has grown, the market has shifted, or the original logo was never quite right. We start with an audit of what's working and what isn't before we touch anything." },
  { question: "Do you work with businesses outside San Antonio?", answer: "Yes. We're based in San Antonio and work with clients across the US. Everything can be handled remotely." },
];

const relatedServices = [
  { href: "/services/web-design-san-antonio", title: "Web Design San Antonio", desc: "Custom Next.js + Shopify, Lighthouse 90+ →" },
  { href: "/services/seo-san-antonio", title: "SEO Agency San Antonio", desc: "Rank in Google + AI search results →" },
  { href: "/services/branding", title: "Branding Agency San Antonio", desc: "Full brand identity beyond just the logo →" },
];

const Check = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function LogoDesignSanAntonioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Logo Design San Antonio", description: metadata.description as string, url: "https://beastcreativeagency.com/services/logo-design-san-antonio" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} />

      {/* HERO */}
      <section className="relative bg-beast-black pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">Logo Design · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-display-hero text-white max-w-4xl mb-6">
              Logos Built to Last.<br />
              <span className="text-beast-pink">Not Just Look Good.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl mb-10">
              Beast Creative designs custom logos for San Antonio businesses — built as part of a complete brand identity system, not isolated marks that fall apart in the real world.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer">Book a Free Brand Call</IconButton>
              <IconButton href="/work/coinline" variant="ghost">See Coinline Brand Case Study</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-beast-yellow py-7">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-beast-black text-sm font-bold">
            {proofPoints.map((p) => (
              <span key={p} className="flex items-center gap-2">
                <Check />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* COINLINE PROOF */}
      <section className="bg-beast-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Case Study</p>
              <h2 className="text-display-section text-white mb-6">Coinline. Zero Explanation Needed.</h2>
              <p className="text-[#C8C8C8] leading-relaxed mb-6">
                A barcade came to us with nothing — no name, no identity, no direction. We built everything: the name, the logo, the color system, the voice, the merch strategy, and the go-to-market plan.
              </p>
              <p className="text-[#888888] leading-relaxed mb-8">
                &ldquo;Coinline&rdquo; — named after the arcade practice of placing quarters on a cabinet to reserve your spot — is authentic, ownable, and works across neon signs, apparel, digital, and physical environments without explanation.
              </p>
              <blockquote className="rounded-xl border border-beast-pink/20 bg-beast-pink/5 p-5 mb-8">
                <p className="text-[#C8C8C8] italic text-sm leading-relaxed">&ldquo;I came to Beast Creative with just an idea. They helped turn it into a full brand — logo, voice, website strategy, everything. What I have now isn&apos;t just a product, it&apos;s a brand people connect with.&rdquo;</p>
                <cite className="text-beast-pink text-xs font-semibold mt-3 block not-italic">— Coinline Barcade Founder</cite>
              </blockquote>
              <IconButton href="/work/coinline" variant="ghost">See the Full Case Study</IconButton>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:border-l lg:border-dark-border lg:pl-12">
                {coinlineStats.map((item) => (
                  <div key={item.stat}>
                    <div className="text-stat-hero text-beast-yellow leading-none mb-3">{item.stat}</div>
                    <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                    <div className="text-xs text-[#888888] leading-relaxed">{item.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-section-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-14 max-w-3xl">
            <p className="section-eyebrow text-beast-pink mb-4">What's Included</p>
            <h2 className="text-display-section text-beast-black">A Logo. And Everything Around It.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-light-border">
            {deliverables.map((item, i) => (
              <AnimatedSection key={item.title} className="h-full" delay={(i % 3) * 0.08}>
                <div className="group h-full bg-white p-8 lg:p-10 border-b border-r border-light-border transition-colors duration-300 hover:bg-section-offwhite">
                  <span className="block font-display text-sm text-beast-pink mb-5 tracking-[0.25em]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display uppercase text-xl font-bold tracking-[0.02em] text-beast-black mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#4A4A4A]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-section-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-14 max-w-3xl">
            <p className="section-eyebrow text-beast-pink mb-4">How It Works</p>
            <h2 className="text-display-section text-beast-black">Discovery to Delivery.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-light-border">
            {process.map((step) => (
              <AnimatedSection key={step.step} className="h-full">
                <div className="group h-full bg-white p-8 border-b border-r border-light-border transition-colors duration-300 hover:bg-section-offwhite">
                  <span className="block font-display font-black text-5xl text-beast-pink/20 leading-none mb-4">{step.step}</span>
                  <h3 className="font-display uppercase text-xl font-bold tracking-[0.02em] text-beast-black mb-3">{step.name}</h3>
                  <p className="text-[15px] leading-relaxed text-[#4A4A4A]">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-10">
            <p className="section-eyebrow text-beast-pink mb-4">FAQ</p>
            <h2 className="text-display-section text-beast-black">Logo Design Questions, Answered.</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-light-border px-6">
              <FaqAccordion faqs={faqItems} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-section-offwhite pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">Also in San Antonio</p>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-light-border">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="group bg-white p-7 border-b border-r border-light-border transition-colors duration-300 hover:bg-section-offwhite">
                  <p className="font-display uppercase text-lg font-bold tracking-[0.02em] text-beast-black mb-2 group-hover:text-beast-pink transition-colors">{s.title}</p>
                  <p className="text-sm text-[#717171]">{s.desc}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-near-black py-20 lg:py-28 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Logo Design &middot; San Antonio</p>
            <h2 className="text-display-section text-white mb-6">Ready for a Logo That Actually Works?</h2>
            <p className="text-[#C8C8C8] text-lg mb-8">
              Book a quick brand call. We&apos;ll tell you what your current brand is missing and what a logo redesign would actually get you.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer">Book My Free Brand Call</IconButton>
            <p className="text-[#888888] text-sm mt-4">Or call/text: <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a></p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
