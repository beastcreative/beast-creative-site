import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

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
  { q: "How much does logo design cost in San Antonio?", a: "Our logo design projects start at $1,500 for a standalone logo with basic variations and file package. Full brand identity systems (logo + color + typography + standards doc) start at $3,000. Every project is quoted based on scope." },
  { q: "Do you do logo-only projects or is it always a full brand package?", a: "Both. We do logo-only projects for businesses that have an existing identity system and just need a new mark. For new businesses or rebrands, we recommend the full system — a logo without a color palette and typography system creates inconsistency." },
  { q: "How many concepts do you present?", a: "Three distinct logo directions. Each one is a different approach — not variations of the same idea. After you choose a direction, we refine it through up to two revision rounds." },
  { q: "What file formats do I get?", a: "SVG, PNG (with transparent background), PDF, and EPS. That covers every use case — web, print, embroidery, signage, and merchandise." },
  { q: "Can you redesign my existing logo?", a: "Yes. Redesigns are common — either because the business has grown, the market has shifted, or the original logo was never quite right. We start with an audit of what's working and what isn't before we touch anything." },
  { q: "Do you work with businesses outside San Antonio?", a: "Yes. We're based in San Antonio and work with clients across the US. Everything can be handled remotely." },
];

export default function LogoDesignSanAntonioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-beast-black overflow-hidden">
        <div className="absolute inset-0 bg-beast-black" />
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-20 lg:pt-40 lg:pb-28 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">Logo Design · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-none">
              Logos Built to Last.<br />
              <span className="text-beast-yellow">Not Just Look Good.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              Beast Creative designs custom logos for San Antonio businesses — built as part of a complete brand identity system, not isolated marks that fall apart in the real world.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book a Free Brand Call</IconButton>
              <IconButton href="/work/coinline" icon="eye" variant="ghost">See Coinline Brand Case Study</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-beast-yellow py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-beast-black text-sm font-bold">
            <span>✓ 100% custom — no templates</span>
            <span>✓ 3 logo concepts presented</span>
            <span>✓ All file formats included</span>
            <span>✓ Brand standards doc included</span>
            <span>✓ San Antonio-based team</span>
          </div>
        </div>
      </section>

      {/* COINLINE PROOF */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Case Study</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
                Coinline. Zero Explanation Needed.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                A barcade came to us with nothing — no name, no identity, no direction. We built everything: the name, the logo, the color system, the voice, the merch strategy, and the go-to-market plan.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                &ldquo;Coinline&rdquo; — named after the arcade practice of placing quarters on a cabinet to reserve your spot — is authentic, ownable, and works across neon signs, apparel, digital, and physical environments without explanation.
              </p>
              <blockquote className="border-l-2 border-beast-pink pl-4 mb-8">
                <p className="text-gray-300 italic text-sm leading-relaxed">&ldquo;I came to Beast Creative with just an idea. They helped turn it into a full brand — logo, voice, website strategy, everything. What I have now isn&apos;t just a product, it&apos;s a brand people connect with.&rdquo;</p>
                <cite className="text-beast-pink text-xs font-semibold mt-2 block">— Coinline Barcade Founder</cite>
              </blockquote>
              <IconButton href="/work/coinline" icon="eye" variant="ghost">See the Full Case Study</IconButton>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "0", label: "Explanation needed", sub: "Name speaks for itself" },
                  { stat: "8", label: "Logo variants delivered", sub: "Every context covered" },
                  { stat: "6mo", label: "Brand sprint", sub: "Name to full identity" },
                  { stat: "100%", label: "From scratch", sub: "No existing brand assets" },
                ].map((item) => (
                  <div key={item.stat} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                    <div className="font-display text-3xl font-black text-beast-yellow mb-1">{item.stat}</div>
                    <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What's Included</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              A Logo. And Everything Around It.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                  <h3 className="font-display text-lg font-bold text-beast-black mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">How It Works</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              Discovery to Delivery.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:border-beast-pink hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                  <span className="font-mono text-xs font-bold text-beast-pink tracking-widest mb-3">{step.step}</span>
                  <h3 className="font-display text-xl font-bold text-beast-black mb-3">{step.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-beast-black tracking-normal">
              Logo Design Questions, Answered.
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.06}>
                <details className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-display font-semibold text-beast-black text-base select-none">
                    {faq.q}
                    <svg className="w-5 h-5 text-beast-pink shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-section-offwhite py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-beast-pink mb-6">Also in San Antonio</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/web-design-san-antonio" className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-beast-pink/40 hover:shadow-lg transition-all duration-200">
                <p className="font-display font-bold text-beast-black mb-1 group-hover:text-beast-pink transition-colors">Web Design San Antonio</p>
                <p className="text-sm text-gray-500">Custom Next.js + Shopify, Lighthouse 90+ →</p>
              </Link>
              <Link href="/services/seo-san-antonio" className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-beast-pink/40 hover:shadow-lg transition-all duration-200">
                <p className="font-display font-bold text-beast-black mb-1 group-hover:text-beast-pink transition-colors">SEO Agency San Antonio</p>
                <p className="text-sm text-gray-500">Rank in Google + AI search results →</p>
              </Link>
              <Link href="/services/branding" className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-beast-pink/40 hover:shadow-lg transition-all duration-200">
                <p className="font-display font-bold text-beast-black mb-1 group-hover:text-beast-pink transition-colors">Branding Agency San Antonio</p>
                <p className="text-sm text-gray-500">Full brand identity beyond just the logo →</p>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-near-black py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Logo Design &middot; San Antonio</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
              Ready for a Logo That Actually Works?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free 15-minute brand call. We&apos;ll tell you what your current brand is missing and what a logo redesign would actually get you.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free Brand Call</IconButton>
            <p className="text-gray-600 text-sm mt-4">Or call/text: <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a></p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
