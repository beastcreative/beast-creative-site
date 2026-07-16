import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import StatCounter from "@/components/ui/StatCounter";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";

export const metadata: Metadata = {
  title: "TEKSBuilder | Idea to Launched SaaS in One Week | Beast Creative Agency",
  description:
    "Beast Creative built TEKSBuilder, an AI resource generator for teachers, from idea to launched SaaS in one week, then scaled the same codebase into a network of state platforms, each mapped to its own teaching standards.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "TEKSBuilder: Idea to Launched SaaS in One Week",
  description:
    "How Beast Creative Agency built and launched TEKSBuilder, an AI resource generator for teachers, from idea to live SaaS in one week, then scaled it into a network of state-specific platforms.",
  image: "https://beastcreativeagency.com/assets/teksbuilder-hero.jpg",
  author: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
  publisher: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
  about: {
    "@type": "SoftwareApplication",
    name: "TEKSBuilder",
    applicationCategory: "EducationApplication",
    operatingSystem: "Web",
    url: "https://teksbuilder.com",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free tier: 10 resources, no credit card" },
  },
};

const tags = ["SaaS Development", "AI Product", "Branding", "UX/UI", "SEO + AEO", "Pricing Strategy"];

const approach = [
  {
    n: "1",
    label: "Scope to the One Job That Matters",
    detail:
      "Teachers don't want an \"AI platform.\" They want tonight's worksheet done. Every scoping decision flowed from that: a few clicks from standard to printout, no prompt-writing, no blank page. Features that didn't serve the core job were cut from v1.",
  },
  {
    n: "2",
    label: "AI-Assisted Development, Senior Oversight",
    detail:
      "The build ran on our AI-assisted development process (the same agentic tooling behind our operations agent, Segundo), with human decisions on architecture, UX, and quality. That's how a full SaaS with auth, billing, a standards database, and a generation engine ships in days instead of months.",
  },
  {
    n: "3",
    label: "Differentiation as the Killer Feature",
    detail:
      "Every generated resource ships in four reading levels (below grade, on grade, above grade, and ELL support), because that's the reality of a real classroom. It's the feature generic AI tools can't match and the one teachers talk about.",
  },
  {
    n: "4",
    label: "Launch-Ready, Not Just Code-Complete",
    detail:
      "TEKSBuilder went live with a conversion-optimized marketing site, a free tier (10 resources, no credit card), teacher and school pricing, GA4 tracking, and SEO/AEO structure targeting how teachers actually search. Launch day was a marketing event, not a deploy.",
  },
  {
    n: "5",
    label: "The State-by-State Playbook",
    detail:
      "Texas has TEKS. Virginia has SOL. Georgia has GSE. Every state names and organizes its standards differently, which means every state is its own search market with its own keywords. We architected one codebase to power a dedicated platform per state, each mapped to its own standards and its own SEO footprint. One week of product; a national footprint behind it.",
  },
];

const results = [
  { label: "Idea → launched SaaS in one week", detail: "vs the 6 to 12 month industry norm for a product of this scope." },
  { label: "Every K-12 standard, all subjects", detail: "a full standards database powering the generation engine." },
  { label: "Six resource types × four reading levels", detail: "worksheets, lesson plans, exit tickets, assessments, and more, with each differentiated below / on / above grade + ELL." },
  { label: "A growing network of state platforms", detail: "one codebase, each state mapped to its own standards, branding, and search footprint." },
  { label: "Launched with its funnel built in", detail: "free tier, teacher and school pricing, analytics, and SEO/AEO structure live on day one." },
];

const statePills = ["TX · TEKS", "VA · SOL", "GA · GSE", "FL · BEST", "+ more states"];

export default function TeksbuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="section-eyebrow text-beast-yellow mb-3">Case Study: TEKSBuilder · 2026 · In-House Product</p>
              <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
                Idea to Launched SaaS{" "}
                <span className="text-beast-pink">In One Week.</span>
              </h1>
              <p className="text-body-lead text-gray-300 max-w-xl">
                TEKSBuilder turns any teaching standard into a print-ready, differentiated classroom resource in seconds. Beast took it from concept to live, revenue-ready SaaS in one week, then scaled the same codebase into a network of state platforms. This is what AI-assisted development looks like when the team building it also knows how to launch it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="flex justify-center lg:justify-end">
              <div className="w-full max-w-xl rounded-2xl overflow-hidden border border-white/10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
                <Image
                  src="/assets/teksbuilder-hero.jpg"
                  alt="TEKSBuilder homepage: turn any standard into a print-ready, differentiated worksheet in seconds"
                  width={2000}
                  height={937}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={7} label="Days to Launch" sublabel="idea → live SaaS" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={6} label="Resource Types" sublabel="worksheets to assessments" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={4} label="Reading Levels" sublabel="below / on / above / ELL" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={100} suffix="%" label="In-House Build" sublabel="strategy · brand · code · launch" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* MAIN COLUMN */}
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">
              {/* THE BRIEF */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-beast-black mb-4">
                  Teachers Were Losing Their Sundays. We Saw a Product.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Teachers spend hours every week translating state standards into worksheets, lesson plans, and assessments. Generic AI chatbots can&apos;t do it well: they don&apos;t know the standards, they don&apos;t format for the classroom, and they don&apos;t differentiate for the range of reading levels in a real classroom.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The product thesis was simple: a teacher picks a grade, subject, and specific standard, chooses a resource type, and gets a clean, print-ready, standards-aligned resource in seconds, with built-in versions for below-grade, on-grade, above-grade, and ELL students.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Instead of pitching the idea to a client, we built it as our own product: every decision made with our own money on the line.
                </p>
                <div className="bg-white rounded-xl p-5 border-l-4 border-beast-pink mt-6">
                  <p className="font-display font-bold text-beast-black text-sm mb-1">The Stakes</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This case study is the proof behind our AI App &amp; SaaS Development service. If we claim we can take a client from idea to launched product in weeks, we should be able to show we&apos;ve done it: publicly, with a product anyone can sign up for and use today.
                  </p>
                </div>
              </AnimatedSection>

              {/* THE APPROACH */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Approach</p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-beast-black mb-6">
                  Build Like a Product Team. Launch Like a Marketing Agency.
                </h2>
                <div className="space-y-6">
                  {approach.map((item) => (
                    <div key={item.n} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-beast-pink/10 border border-beast-pink/20 text-beast-pink font-display font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                        {item.n}
                      </span>
                      <div>
                        <p className="font-display font-bold text-beast-black mb-1">{item.label}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* THE RESULTS */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-beast-black mb-4">
                  Shipped, Live, and Growing.
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  TEKSBuilder launched in 2026 and is live now at teksbuilder.com. Early traction numbers will be published here as they accumulate. Same policy as every Beast case study: real numbers, attributed, documented.
                </p>
                <ul className="space-y-3 mb-8">
                  {results.map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <svg className="w-4 h-4 text-beast-pink shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        <strong className="text-beast-black">{item.label}:</strong> {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
                <blockquote className="border-l-4 border-beast-yellow bg-white rounded-r-xl px-6 py-5">
                  <p className="font-display text-xl font-bold text-beast-black leading-snug mb-3">
                    &ldquo;Every agency says they move fast now because of AI. Fine. Show me the product. Ours is live. Sign up and use it.&rdquo;
                  </p>
                  <cite className="text-sm text-gray-500 not-italic">John Speer, Co-Owner/COO, Beast Creative Agency</cite>
                </blockquote>
              </AnimatedSection>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Project Overview</h3>
                  {[
                    { label: "Product", value: "TEKSBuilder" },
                    { label: "Type", value: "In-house SaaS" },
                    { label: "Launched", value: "2026" },
                    { label: "Build time", value: "~1 week" },
                    { label: "Market", value: "K-12 teachers" },
                    { label: "Model", value: "Freemium → Teacher → School" },
                    { label: "Stack", value: "Next.js · AI APIs · Stripe" },
                    { label: "Services", value: "Strategy, Brand, UX/UI, Full-Stack Dev, Pricing, SEO/AEO" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
                      <span className="text-sm text-gray-500 shrink-0">{item.label}</span>
                      <span className="text-sm font-semibold text-beast-black text-right">{item.value}</span>
                    </div>
                  ))}
                  <div className="mt-5">
                    <IconButton href="https://teksbuilder.com" target="_blank" rel="noopener noreferrer" className="w-full justify-center">
                      Visit TEKSBuilder Live ↗
                    </IconButton>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-near-black rounded-2xl p-6 border border-beast-pink/20">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-2">One Codebase. Every State.</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    Every state names its standards differently. We built once, then launched a dedicated platform per state, each mapped to its own standards.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {statePills.map((sp) => (
                      <span key={sp} className="rounded-full border border-beast-green/40 text-beast-green text-xs px-3 py-1">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">Want This For Your Idea?</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    We built ours in a week. The same team can build and launch yours: see the service, or book a free scoping call.
                  </p>
                  <IconButton href="/services/app-development" variant="dark" className="w-full justify-center">
                    AI App &amp; SaaS Development →
                  </IconButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-2">Inside the Product</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-beast-black mb-4">See It Live.</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-12">
              Not a mockup: this is the shipped product, live now at teksbuilder.com. Standard to printout in four clicks, six resource types, four reading levels, and a full pricing funnel.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-light-border" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
              <Image src="/assets/teksbuilder-flow.jpg" alt="TEKSBuilder: from standard to printout in four clicks" width={2000} height={1139} className="w-full h-auto" />
            </div>
            <p className="text-sm text-gray-500 mt-3">From standard to printout in four clicks, no prompt-writing, no blank page at 9pm.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-light-border aspect-[16/10]" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)", backgroundColor: "#fcf0e2" }}>
                <Image src="/assets/teksbuilder-resources.jpg" alt="TEKSBuilder: six resource types, all mapped to the standard" width={2000} height={1111} className="w-full h-full object-contain" />
              </div>
              <p className="text-sm text-gray-500 mt-3">Six resource types (worksheets to stations), every one mapped to the standard.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-light-border aspect-[16/10]" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)", backgroundColor: "#fef7ed" }}>
                <Image src="/assets/teksbuilder-differentiation.jpg" alt="TEKSBuilder: every resource in four reading levels" width={2000} height={958} className="w-full h-full object-contain" />
              </div>
              <p className="text-sm text-gray-500 mt-3">The killer feature: every resource ships in four reading levels, one click.</p>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-light-border mt-8" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
              <Image src="/assets/teksbuilder-pricing.jpg" alt="TEKSBuilder pricing: free tier, teacher and school plans" width={2000} height={1229} className="w-full h-auto" />
            </div>
            <p className="text-sm text-gray-500 mt-3">Launched with its funnel built in: free tier, teacher and school pricing on day one.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED */}
      <RelatedCaseStudies related={["sweet-sensi", "coinline", "williams-bts"]} />

      {/* CTA */}
      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              We Built Ours in a Week.{" "}
              <span className="text-beast-pink">What&apos;s Yours Waiting On?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Bring your app idea to a free scoping call. We&apos;ll tell you what the smallest launchable version looks like, what it costs, and how fast it can be live.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer">
              Scope My App (Free Call)
            </IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
