import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import FaqAccordion from "@/components/ui/FaqAccordion";
import StatCounter from "@/components/ui/StatCounter";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/services/app-development" },
  title: "AI App & SaaS Development | Idea to Launched Product",
  description:
    "Beast Creative builds real software (SaaS products, web apps, and AI tools) in weeks, not months. We built and launched our own SaaS, TEKSBuilder, in one week. Now we build for you.",
};

const faqs = [
  {
    question: "How can you build an app in weeks when other agencies quote months?",
    answer:
      "AI-assisted development. Our team uses AI agents for the heavy lifting (code generation, testing, iteration) with senior human oversight on architecture, quality, and product decisions. It's the same approach we used to build TEKSBuilder, our own SaaS, in one week. The tooling changed; most agencies' processes didn't.",
  },
  {
    question: "How much does app development cost at Beast Creative?",
    answer:
      "Every project is scoped fixed-price after a free scoping call, with no open-ended hourly billing and no surprises. We define the smallest launchable version, quote it flat, and you know the number before we write a line of code. Book a free scoping call and we'll give you a real figure for your build.",
  },
  {
    question: "What's different about an app built by a marketing agency?",
    answer:
      "It launches ready to sell. Most dev shops hand you code and wish you luck. We build the pricing page, conversion funnel, SEO structure, and AEO markup into the product, because we're the same team that gets brands cited by ChatGPT and ranked in Google. TEKSBuilder shipped with its funnel, free tier, and content strategy on day one.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. You own your codebase, your data, and your product outright. We can host and maintain it for you, or hand it off cleanly whenever you want.",
  },
  {
    question: "Can you take over or fix an existing app?",
    answer:
      "Yes. We audit the codebase first, then quote a fixed-price plan to stabilize, modernize, or rebuild it, so you know exactly what you're getting before we start.",
  },
  {
    question: "What if my idea is bigger than an MVP?",
    answer:
      "That's exactly what the TEKSBuilder rollout proves: we build for scale from the first commit. One codebase became a growing network of platforms, each state mapped to its own teaching standards, branding, and SEO footprint. We scope the MVP so the big version is an expansion, not a rebuild.",
  },
];

const products = [
  {
    name: "SaaS Products",
    desc: "Subscription software with auth, billing, dashboards, and AI features, launched with a pricing page and a funnel, not just a repo.",
  },
  {
    name: "AI-Powered Apps",
    desc: "Tools that generate, summarize, classify, or automate, built on production AI APIs with real guardrails, not demo-ware.",
  },
  {
    name: "MVPs & Validation Builds",
    desc: "A real, usable version of your idea in front of real users in weeks, so you validate with revenue, not a slide deck.",
  },
  {
    name: "Internal Tools",
    desc: "Custom dashboards, portals, and workflow automations that replace the spreadsheet duct tape holding your ops together.",
  },
  {
    name: "E-Commerce & Booking Apps",
    desc: "Custom storefronts, quoting engines, and booking systems for when off-the-shelf tools stopped fitting your business.",
  },
  {
    name: "Multi-Market Rollouts",
    desc: "One codebase, many markets, like the state-by-state platform network we built for TEKSBuilder. Build once, launch everywhere.",
  },
];

const steps = [
  {
    n: "01",
    title: "Scope",
    desc: "One working session. We define the core user, the one job the product must do, and the smallest version worth charging for.",
  },
  {
    n: "02",
    title: "Build",
    desc: "AI-assisted development with senior oversight. Working software in days: you review real screens, not wireframes.",
  },
  {
    n: "03",
    title: "Launch",
    desc: "Domain, billing, analytics, SEO, and AEO structure ship with the product. Launch day is a marketing event, not an IT task.",
  },
  {
    n: "04",
    title: "Scale",
    desc: "New features, new markets, paid traffic, content. The same agency that built it grows it: no handoff, no lost context.",
  },
];

const stack = [
  { name: "Next.js", note: "fast, SEO-ready web apps" },
  { name: "AI APIs", note: "Claude, GPT & production LLM tooling" },
  { name: "Stripe", note: "subscriptions & billing" },
  { name: "Vercel", note: "global edge hosting" },
  { name: "Segundo", note: "our proprietary AI operations agent" },
  { name: "GA4 + tracking", note: "measured from day one" },
];

const oldWay = [
  "6-12 month timelines before anything ships",
  "Five- to six-figure quotes before you've validated the idea",
  "Handoffs between designers, devs, and PMs, plus the drift that comes with them",
  "Launch day is the finish line; marketing is someone else's problem",
];

const beastWay = [
  "Working product in weeks (TEKSBuilder took one)",
  "AI-assisted build process at a fraction of traditional dev cost",
  "One team owns strategy, brand, UX, code, and launch",
  "Built by marketers: SEO, AEO, pricing, and funnel are in the product from day one",
];

export default function AppDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI App & SaaS Development",
              description:
                "Beast Creative Agency builds real software (SaaS products, web apps, AI tools, and MVPs) in weeks, not months, with strategy, brand, code, and launch handled in-house.",
              url: "https://beastcreativeagency.com/services/app-development",
            })
          ),
        }}
      />

      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Service: AI App &amp; SaaS Development</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Your App Idea,{" "}
              <span className="text-beast-pink">Live in Weeks.</span>
            </h1>
            <p className="font-display text-2xl font-bold text-gray-300 mb-4 max-w-2xl">
              We don&apos;t just talk about AI-powered development. We ship with it.
            </p>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-8">
              Traditional dev shops quote six months and six figures. We built and launched our own SaaS (TEKSBuilder, an AI resource generator for Texas teachers) from idea to paying-customer-ready in one week, then replicated it state by state. That&apos;s not a pitch. It&apos;s a product you can use right now.
            </p>
            <div className="flex flex-wrap gap-3">
              <IconButton href="/growth-assessment?type=app">
                Assess My App Opportunity
              </IconButton>
              <IconButton href="/work/teksbuilder" variant="ghost">
                See the TEKSBuilder Case Study
              </IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={1} suffix=" Week" label="Idea to Launch" sublabel="TEKSBuilder, our own SaaS" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={100} suffix="%" label="In-House Build" sublabel="strategy · brand · code · launch" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={4} label="Steps to Revenue" sublabel="scope · build · launch · scale" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={6} label="Product Types We Build" sublabel="SaaS to multi-market rollouts" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      {/* WHY THIS EXISTS — OLD WAY vs BEAST WAY */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-3">Why This Exists</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black mb-4">
              Software Development Just Changed. Most Agencies Didn&apos;t.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mb-12">
              AI-assisted development collapsed the cost and timeline of building real software. Agencies that adapted can ship a production SaaS in the time it used to take to write a proposal. We&apos;re one of them, and we can prove it, because we did it for ourselves first.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <h3 className="font-display text-xl font-bold text-beast-black mb-6">The Old Way</h3>
                <ul className="space-y-4">
                  {oldWay.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-beast-black font-bold shrink-0" aria-hidden="true">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border-2 border-beast-pink/30 h-full">
                <h3 className="font-display text-xl font-bold text-beast-pink mb-6">The Beast Way</h3>
                <ul className="space-y-4">
                  {beastWay.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                      <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-3">What We Build</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-12">
              Real Products. Not Prototypes.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.06}>
                <div className="h-full p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-beast-pink/40 hover:bg-near-black transition-all duration-300 flex flex-col">
                  <div aria-hidden="true" className="font-display text-5xl font-black text-beast-yellow/20 leading-none mb-4 select-none">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEKSBUILDER PROOF */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-3">Proven. Not Promised.</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black mb-12 max-w-3xl">
              We Didn&apos;t Build This For a Client. We Built It For Ourselves.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
                <Image
                  src="/assets/teksbuilder-hero.jpg"
                  alt="TEKSBuilder, an AI resource generator for teachers, built and launched by Beast Creative"
                  width={2000}
                  height={937}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  TEKSBuilder is a full production SaaS: an AI generation engine, a standards database for every K-12 subject, four reading levels of differentiation, Stripe billing, a free-trial funnel, and school licensing tiers.
                </p>
                <p>
                  We took it from idea to launched product in one week. Then we did what agencies pitch but never do: we scaled the same codebase into a network of platforms across the country, each mapped to that state&apos;s own teaching standards.
                </p>
                <p>
                  Naming, pricing, funnel, SEO, AEO, onboarding: every decision you&apos;d pay us to make for your product, we made with our own money on the line.
                </p>
                <div className="pt-2">
                  <IconButton href="/work/teksbuilder" variant="dark">
                    Read the Full Case Study →
                  </IconButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROCESS + STACK */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-3">How We Work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-12">
              Four Steps From Idea to Revenue.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((s, i) => (
              <AnimatedSection key={s.n} delay={i * 0.08}>
                <div className="border-t-2 border-beast-pink pt-6 h-full">
                  <div className="font-display text-4xl font-black text-beast-pink mb-2">{s.n}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-3">Under the Hood</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3">
              Built On a Modern Stack. Shipped With AI Speed.
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl mb-8">
              The same stack behind our client sites and our own products, chosen for speed, SEO, and scale.
            </p>
            <div className="flex flex-wrap gap-3">
              {stack.map((s) => (
                <span key={s.name} className="rounded-full border border-dark-border bg-dark-surface px-5 py-2.5 text-sm text-gray-400">
                  <span className="text-white font-semibold">{s.name}</span>: {s.note}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-3 text-center">Common Questions</p>
            <h2 className="font-display text-4xl font-bold text-beast-black mb-8 text-center">
              Everything You Want to Know.
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 px-6">
              <FaqAccordion faqs={faqs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-beast-black py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              You&apos;ve Had the Idea{" "}
              <span className="text-beast-pink">Long Enough.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Bring it to a free scoping call. We&apos;ll tell you what the smallest launchable version looks like, what it costs, and how fast it can be live. No pitch deck. No six-month roadmap.
            </p>
            <IconButton href="/growth-assessment?type=app">
              Assess My App Opportunity
            </IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
