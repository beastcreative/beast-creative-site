import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import StatCounter from "@/components/ui/StatCounter";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Marquee from "@/components/ui/Marquee";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Web Design San Antonio | Custom Websites That Convert | Beast Creative",
  description:
    "San Antonio web design agency building custom Next.js and Shopify sites: mobile-first, Lighthouse 90+, conversion-optimized. No templates. Real results. (210) 350-9560",
  alternates: { canonical: "https://beastcreativeagency.com/services/web-design-san-antonio" },
  openGraph: {
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
    title: "Web Design San Antonio | Beast Creative Agency",
    description: "Custom websites built for San Antonio businesses: Next.js, Shopify, mobile-first, SEO-ready from day one.",
    url: "https://beastcreativeagency.com/services/web-design-san-antonio",
    type: "website",
  },
};

const deliverables = [
  { title: "Custom Design", desc: "No templates. Every site designed from scratch around your brand, your customers, and your conversion goals." },
  { title: "Next.js & Shopify", desc: "We build on the best platforms: Next.js for marketing sites and web apps, Shopify for e-commerce. Both blazing fast." },
  { title: "Mobile-First", desc: "Over 70% of your visitors are on mobile. Every Beast site is designed mobile-first, then scaled up." },
  { title: "Lighthouse 90+", desc: "Performance, accessibility, best practices, and SEO scores all 90+. Fast sites rank better and convert better." },
  { title: "SEO-Ready at Launch", desc: "Schema markup, meta structure, Core Web Vitals, and on-page SEO baked in from day one, not bolted on after." },
  { title: "Conversion Architecture", desc: "Every page has a purpose and a next step. We design for leads, calls, and purchases, not design awards." },
];

const process = [
  { step: "01", name: "Discovery", desc: "We audit your current site, study your competitors, and map the gaps. You'll know exactly what's losing you business before we write a single line of code." },
  { step: "02", name: "Design", desc: "Wireframes first, then high-fidelity mockups. You see it before we build it. Revisions are part of the process, not a fee line." },
  { step: "03", name: "Build", desc: "Clean code, component architecture, CMS integration if needed. We move fast without cutting corners." },
  { step: "04", name: "Launch", desc: "We handle deployment, DNS, SSL, and GA4 setup. You get a site that's live, tracked, and ready to grow." },
];

const faqItems = [
  { question: "How much does web design cost in San Antonio?", answer: "Our custom web design projects start at $3,500 for marketing sites and $5,000+ for e-commerce. Pricing depends on scope, number of pages, and integrations. Every quote is itemized, with no surprise fees." },
  { question: "How long does a website take to build?", answer: "Most marketing sites take 3 to 5 weeks from kickoff to launch. E-commerce projects with large catalogs typically run 6 to 10 weeks. We set a timeline at kickoff and stick to it." },
  { question: "Do you work with businesses outside San Antonio?", answer: "Yes, we work with clients across the US. Our San Antonio roots keep us grounded in local business realities, but distance has never been a barrier." },
  { question: "Will my site rank on Google?", answer: "Every site we build is SEO-ready at launch: proper schema, meta structure, Core Web Vitals optimized, and fast load times. We also offer ongoing SEO if you want to actively grow organic traffic." },
  { question: "Can you redesign my existing site?", answer: "Yes. Redesigns are a big part of what we do. We audit your current site for performance, SEO, and conversion issues before we start, so the new site solves real problems, not just aesthetic ones." },
];

const relatedServices = [
  { href: "/services/seo-san-antonio", title: "SEO Agency San Antonio", desc: "Rank in Google + get cited by AI tools →" },
  { href: "/services/logo-design-san-antonio", title: "Logo Design San Antonio", desc: "Custom logos + full brand identity →" },
  { href: "/services/branding", title: "Branding Agency San Antonio", desc: "Brand naming, identity systems, voice →" },
];

const marqueeItems = [
  "Lighthouse 90+ on every build",
  "Mobile-first architecture",
  "SEO-ready at launch",
  "No templates, 100% custom",
  "San Antonio-based team",
];

export default function WebDesignSanAntonioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "Web Design San Antonio", description: metadata.description as string, url: "https://beastcreativeagency.com/services/web-design-san-antonio" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-beast-black overflow-hidden">
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-24 lg:pt-40 lg:pb-32 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">Web Design · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Websites That Work.{" "}
              <span>Not Just Look Good.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              Your website is the conversion engine of your growth system. Beast Creative builds custom sites for San Antonio businesses on Next.js, Shopify, mobile-first, Lighthouse 90+, engineered to turn local search traffic into leads, calls, and revenue, not just to look good.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="/growth-assessment?type=web">Start Your Growth Assessment</IconButton>
              <IconButton href="/work" variant="ghost">See Our Work</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={36581} label="Campaign landing page entries" sublabel="Sun-Bird Walmart rollout" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={90} suffix="+" label="Lighthouse score" sublabel="On every build" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={2} prefix="<" suffix="s" label="Target load time" sublabel="Mobile first" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={100} suffix="%" label="Custom code" sublabel="No templates ever" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What You Get</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">Built to Perform From Day One.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, i) => (
              <AnimatedSection key={item.title} delay={(i % 3) * 0.07}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-5 h-full">
                  <span className="font-mono text-beast-pink font-bold text-sm shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BEAST */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="section-eyebrow text-beast-pink mb-4">Why Beast</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">We Build Sites That Have to Perform.</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Our CPG clients run campaigns to hundreds of thousands of people. Those campaigns land on pages we build. When 36,581 people click an ad, the landing page cannot fail. That standard is what we bring to every project: built to handle real traffic, real pressure, real stakes.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether you&apos;re a local San Antonio restaurant, a regional service company, or a national brand, you get the same performance-obsessed build process.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">How It Works</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">From Brief to Live in Weeks.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step) => (
              <AnimatedSection key={step.step}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                  <span className="font-mono text-beast-pink font-bold text-sm">{step.step}</span>
                  <h3 className="font-display text-xl font-bold text-beast-black mt-3 mb-2">{step.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-beast-black tracking-normal">Web Design Questions, Answered.</h2>
          </AnimatedSection>
          <div className="bg-white rounded-2xl border border-gray-100 px-6">
            <FaqAccordion faqs={faqItems} />
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">Also in San Antonio</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-beast-pink/30 transition-colors">
                  <p className="font-display text-lg font-bold text-beast-black mb-1 group-hover:text-beast-pink transition-colors">{s.title}</p>
                  <p className="text-sm text-gray-500">{s.desc}</p>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-near-black py-16 lg:py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">San Antonio Web Design</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">Ready for a Site That Actually Works?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a quick call. We&apos;ll audit your current San Antonio site and show you exactly where it&apos;s losing leads and revenue. No pitch, no commitment.
            </p>
            <IconButton href="/growth-assessment?type=web">Start Your Growth Assessment</IconButton>
            <p className="text-gray-500 text-sm mt-4">Or call/text: <a href="sms:+12103509560" className="text-beast-pink hover:underline">(210) 350-9560</a></p>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={marqueeItems} />
    </>
  );
}
