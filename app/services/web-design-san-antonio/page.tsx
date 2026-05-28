import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

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

const deliverables = [
  { title: "Custom Design", desc: "No templates. Every site designed from scratch around your brand, your customers, and your conversion goals." },
  { title: "Next.js & Shopify", desc: "We build on the best platforms — Next.js for marketing sites and web apps, Shopify for e-commerce. Both blazing fast." },
  { title: "Mobile-First", desc: "Over 70% of your visitors are on mobile. Every Beast site is designed mobile-first, then scaled up." },
  { title: "Lighthouse 90+", desc: "Performance, accessibility, best practices, and SEO scores all 90+. Fast sites rank better and convert better." },
  { title: "SEO-Ready at Launch", desc: "Schema markup, meta structure, Core Web Vitals, and on-page SEO baked in from day one — not bolted on after." },
  { title: "Conversion Architecture", desc: "Every page has a purpose and a next step. We design for leads, calls, and purchases — not design awards." },
];

const process = [
  { step: "01", name: "Discovery", desc: "We audit your current site, study your competitors, and map the gaps. You'll know exactly what's losing you business before we write a single line of code." },
  { step: "02", name: "Design", desc: "Wireframes first, then high-fidelity mockups. You see it before we build it. Revisions are part of the process, not a fee line." },
  { step: "03", name: "Build", desc: "Clean code, component architecture, CMS integration if needed. We move fast without cutting corners." },
  { step: "04", name: "Launch", desc: "We handle deployment, DNS, SSL, and GA4 setup. You get a site that's live, tracked, and ready to grow." },
];

const faqItems = [
  { q: "How much does web design cost in San Antonio?", a: "Our custom web design projects start at $3,500 for marketing sites and $5,000+ for e-commerce. Pricing depends on scope, number of pages, and integrations. Every quote is itemized — no surprise fees." },
  { q: "How long does a website take to build?", a: "Most marketing sites take 3–5 weeks from kickoff to launch. E-commerce projects with large catalogs typically run 6–10 weeks. We set a timeline at kickoff and stick to it." },
  { q: "Do you work with businesses outside San Antonio?", a: "Yes — we work with clients across the US. Our San Antonio roots keep us grounded in local business realities, but distance has never been a barrier." },
  { q: "Will my site rank on Google?", a: "Every site we build is SEO-ready at launch — proper schema, meta structure, Core Web Vitals optimized, and fast load times. We also offer ongoing SEO if you want to actively grow organic traffic." },
  { q: "Can you redesign my existing site?", a: "Yes. Redesigns are a big part of what we do. We audit your current site for performance, SEO, and conversion issues before we start — so the new site solves real problems, not just aesthetic ones." },
];

export default function WebDesignSanAntonioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-beast-black overflow-hidden">
        <div className="absolute inset-0 bg-beast-black" />
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-20 lg:pt-40 lg:pb-28 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">Web Design · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-none">
              Websites That Work.<br />
              <span className="text-beast-yellow">Not Just Look Good.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              Beast Creative builds custom websites for San Antonio businesses — Next.js, Shopify, mobile-first, Lighthouse 90+. Every site is designed to rank in Google and turn visitors into customers.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</IconButton>
              <IconButton href="/work" icon="eye" variant="ghost">See Our Work</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-beast-yellow py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-beast-black text-sm font-bold">
            <span>✓ Lighthouse 90+ on every build</span>
            <span>✓ Mobile-first architecture</span>
            <span>✓ SEO-ready at launch</span>
            <span>✓ No templates — 100% custom</span>
            <span>✓ San Antonio-based team</span>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What You Get</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              Built to Perform From Day One.
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

      {/* PROOF — CPG context */}
      <section className="bg-beast-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Why Beast</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
                We Build Sites That Have to Perform.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our CPG clients run campaigns to hundreds of thousands of people. Those campaigns land on pages we build. When 36,581 people click an ad, the landing page cannot fail. That standard — built to handle real traffic, real pressure, real stakes — is what we bring to every project.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you&apos;re a local San Antonio restaurant, a regional service company, or a national brand, you get the same performance-obsessed build process.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "36,581", label: "Campaign landing page entries", sub: "Sun-Bird Walmart rollout" },
                  { stat: "90+", label: "Lighthouse score", sub: "On every build" },
                  { stat: "<2s", label: "Target load time", sub: "Mobile first" },
                  { stat: "100%", label: "Custom code", sub: "No templates ever" },
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

      {/* PROCESS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">How It Works</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              From Brief to Live in Weeks.
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
              Web Design Questions, Answered.
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

      {/* CTA */}
      <section className="bg-near-black py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">San Antonio Web Design</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
              Ready for a Site That Actually Works?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free 15-minute call. We&apos;ll audit your current site and tell you exactly what&apos;s holding it back — no pitch, no commitment.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Book My Free Strategy Call</IconButton>
            <p className="text-gray-600 text-sm mt-4">Or call/text: <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a></p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
