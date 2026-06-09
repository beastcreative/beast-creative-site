import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Web Design San Antonio | Custom Websites That Convert | Beast Creative",
  description:
    "San Antonio web design agency building custom Next.js and Shopify sites — mobile-first, Lighthouse 90+, conversion-optimized. No templates. Real results. (210) 332-0567",
  alternates: { canonical: "https://beastcreativeagency.com/services/web-design-san-antonio" },
  openGraph: {
    title: "Web Design San Antonio | Beast Creative Agency",
    description: "Custom websites built for San Antonio businesses — Next.js, Shopify, mobile-first, SEO-ready from day one.",
    url: "https://beastcreativeagency.com/services/web-design-san-antonio",
    type: "website",
  },
};

const proofPoints = [
  "Lighthouse 90+ on every build",
  "Mobile-first architecture",
  "SEO-ready at launch",
  "No templates — 100% custom",
  "San Antonio-based team",
];

const deliverables = [
  { title: "Custom Design", desc: "No templates. Every site designed from scratch around your brand, your customers, and your conversion goals." },
  { title: "Next.js & Shopify", desc: "We build on the best platforms — Next.js for marketing sites and web apps, Shopify for e-commerce. Both blazing fast." },
  { title: "Mobile-First", desc: "Over 70% of your visitors are on mobile. Every Beast site is designed mobile-first, then scaled up." },
  { title: "Lighthouse 90+", desc: "Performance, accessibility, best practices, and SEO scores all 90+. Fast sites rank better and convert better." },
  { title: "SEO-Ready at Launch", desc: "Schema markup, meta structure, Core Web Vitals, and on-page SEO baked in from day one — not bolted on after." },
  { title: "Conversion Architecture", desc: "Every page has a purpose and a next step. We design for leads, calls, and purchases — not design awards." },
];

const stats = [
  { stat: "36,581", label: "Campaign landing page entries", sub: "Sun-Bird Walmart rollout" },
  { stat: "90+", label: "Lighthouse score", sub: "On every build" },
  { stat: "<2s", label: "Target load time", sub: "Mobile first" },
  { stat: "100%", label: "Custom code", sub: "No templates ever" },
];

const process = [
  { step: "01", name: "Discovery", desc: "We audit your current site, study your competitors, and map the gaps. You'll know exactly what's losing you business before we write a single line of code." },
  { step: "02", name: "Design", desc: "Wireframes first, then high-fidelity mockups. You see it before we build it. Revisions are part of the process, not a fee line." },
  { step: "03", name: "Build", desc: "Clean code, component architecture, CMS integration if needed. We move fast without cutting corners." },
  { step: "04", name: "Launch", desc: "We handle deployment, DNS, SSL, and GA4 setup. You get a site that's live, tracked, and ready to grow." },
];

const faqItems = [
  { question: "How much does web design cost in San Antonio?", answer: "Our custom web design projects start at $3,500 for marketing sites and $5,000+ for e-commerce. Pricing depends on scope, number of pages, and integrations. Every quote is itemized — no surprise fees." },
  { question: "How long does a website take to build?", answer: "Most marketing sites take 3–5 weeks from kickoff to launch. E-commerce projects with large catalogs typically run 6–10 weeks. We set a timeline at kickoff and stick to it." },
  { question: "Do you work with businesses outside San Antonio?", answer: "Yes — we work with clients across the US. Our San Antonio roots keep us grounded in local business realities, but distance has never been a barrier." },
  { question: "Will my site rank on Google?", answer: "Every site we build is SEO-ready at launch — proper schema, meta structure, Core Web Vitals optimized, and fast load times. We also offer ongoing SEO if you want to actively grow organic traffic." },
  { question: "Can you redesign my existing site?", answer: "Yes. Redesigns are a big part of what we do. We audit your current site for performance, SEO, and conversion issues before we start — so the new site solves real problems, not just aesthetic ones." },
];

const relatedServices = [
  { href: "/services/seo-san-antonio", title: "SEO Agency San Antonio", desc: "Rank in Google + get cited by AI tools →" },
  { href: "/services/logo-design-san-antonio", title: "Logo Design San Antonio", desc: "Custom logos + full brand identity →" },
  { href: "/services/branding", title: "Branding Agency San Antonio", desc: "Brand naming, identity systems, voice →" },
];

const Check = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function WebDesignSanAntonioPage() {
  return (
    <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Web Design San Antonio", description: metadata.description as string, url: "https://beastcreativeagency.com/services/web-design-san-antonio" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} />

      {/* HERO */}
      <section className="relative bg-beast-black pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">Web Design · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-display-hero text-white max-w-4xl mb-6">
              Websites That Work.<br />
              <span className="text-beast-pink">Not Just Look Good.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl mb-10">
              Beast Creative builds custom websites for San Antonio businesses — Next.js, Shopify, mobile-first, Lighthouse 90+. Every site is designed to rank in Google and turn visitors into customers.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
              <IconButton href="/work" variant="ghost">See Our Work</IconButton>
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

      {/* WHAT WE DELIVER */}
      <section className="bg-section-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-14 max-w-3xl">
            <p className="section-eyebrow text-beast-pink mb-4">What You Get</p>
            <h2 className="text-display-section text-beast-black">Built to Perform From Day One.</h2>
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

      {/* WHY BEAST */}
      <section className="bg-beast-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Why Beast</p>
              <h2 className="text-display-section text-white mb-6">We Build Sites That Have to Perform.</h2>
              <p className="text-[#C8C8C8] leading-relaxed mb-6">
                Our CPG clients run campaigns to hundreds of thousands of people. Those campaigns land on pages we build. When 36,581 people click an ad, the landing page cannot fail. That standard — built to handle real traffic, real pressure, real stakes — is what we bring to every project.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Whether you&apos;re a local San Antonio restaurant, a regional service company, or a national brand, you get the same performance-obsessed build process.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:border-l lg:border-dark-border lg:pl-12">
                {stats.map((item) => (
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

      {/* PROCESS */}
      <section className="bg-section-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-14 max-w-3xl">
            <p className="section-eyebrow text-beast-pink mb-4">How It Works</p>
            <h2 className="text-display-section text-beast-black">From Brief to Live in Weeks.</h2>
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
            <h2 className="text-display-section text-beast-black">Web Design Questions, Answered.</h2>
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
            <p className="section-eyebrow text-beast-pink mb-4">San Antonio Web Design</p>
            <h2 className="text-display-section text-white mb-6">Ready for a Site That Actually Works?</h2>
            <p className="text-[#C8C8C8] text-lg mb-8">
              Book a quick call. We&apos;ll audit your current site and tell you exactly what&apos;s holding it back &mdash; no pitch, no commitment.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
            <p className="text-[#888888] text-sm mt-4">Or call/text: <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a></p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
