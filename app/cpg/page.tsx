import type { Metadata } from "next";
import Link from "next/link";
import StatCounter from "@/components/ui/StatCounter";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CpgLeadForm from "@/components/forms/CpgLeadForm";
import IconButton from "@/components/ui/IconButton";
import Marquee from "@/components/ui/Marquee";
import ReviewBadges from "@/components/ui/ReviewBadges";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/cpg" },
  title: "CPG Marketing Agency | Beast Creative Agency San Antonio",
  description:
    "Beast Creative Agency helps CPG food and beverage brands grow from regional to national with AI-powered campaigns. 36,581 entries, 7.03% CTR, $0.12 CPC: real results for real brands.",
  openGraph: {
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
    title: "The CPG Agency That Turns Ad Spend Into Retail Proof",
    description:
      "We helped Sun-Bird collect 36,581 consumer emails on $6,000. We helped Williams get 22,043 sweepstakes entries on $4,000. Now let's talk about your brand.",
  },
};

const faqs = [
  {
    question: "What is CPG marketing and how is it different from regular digital marketing?",
    answer:
      "CPG (Consumer Packaged Goods) marketing focuses on building consumer databases, driving retail pull-through, and creating the proof that retail buyers require. Unlike general digital marketing, CPG marketing is designed to generate first-party consumer data, build brand equity with retail buyers, and create campaigns that can be used as evidence of consumer demand when pitching Walmart, Target, or Kroger.",
  },
  {
    question: "How do you build first-party consumer data?",
    answer:
      "We primarily use contest and sweepstakes mechanics designed to maximize entry volume at the lowest cost. Every entry captures consumer name, email, and zip code. We've collected 36,581+ emails on a $6,000 budget for Sun-Bird Seasonings. This data becomes your retail readiness proof: geographic maps of where your consumers are, demographic profiles, and engagement metrics.",
  },
  {
    question: "How much does a sweepstakes campaign cost?",
    answer:
      "Campaign production (strategy, landing page, creative, management) starts at $2,500 to $5,000 one-time. Ad spend is client-direct to platforms. We recommend $3,000 to $10,000 for meaningful data volume. Total investment for a first campaign: $6,000 to $15,000 typically. This generates a consumer database worth multiples of that cost.",
  },
  {
    question: "How long before we see results?",
    answer:
      "Sweepstakes campaigns deliver data in real-time: you can see entries within hours of launch. Our Williams BTS campaign hit 22,043 entries in the campaign window on $4,000. SEO and AEO results build over 3 to 6 months. Paid media results typically stabilize within 60 to 90 days as we optimize targeting.",
  },
  {
    question: "Do you work with brands across the country?",
    answer:
      "Absolutely. We work with brands nationally. Sun-Bird's campaign was a national Walmart rollout announcement. All our digital services are fully location-agnostic, and we've run campaigns for brands across the US.",
  },
  {
    question: "What makes Beast different from other CPG marketing agencies?",
    answer:
      "Three things: real numbers from named brands (not 'a CPG client'), AI-native operations that cut costs and improve performance, and radical transparency, meaning you see everything in real time. We've also built a proprietary AI agent (Segundo) that gives Scale-tier clients automated content, analysis, and campaign intelligence.",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "$1,500–$3,000",
    period: "/mo",
    best: "Emerging CPG brands & local SMBs",
    features: [
      "One active campaign at a time",
      "Paid social management (1 platform)",
      "Monthly performance report",
      "Slack communication channel",
      "Campaign strategy + creative",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    tier: "Growth",
    price: "$3,000–$7,000",
    period: "/mo",
    best: "Regional brands going national",
    features: [
      "Sweepstakes + paid social campaigns",
      "Multi-platform management",
      "First-party data strategy",
      "SEO + AEO foundation",
      "Weekly Loom updates",
      "Looker performance dashboard",
    ],
    cta: "Let's Grow",
    highlight: true,
  },
  {
    tier: "Scale",
    price: "$7,000–$20,000",
    period: "/mo",
    best: "Multi-brand holding companies",
    features: [
      "Everything in Growth",
      "Multi-brand SEO architecture",
      "Segundo AI agent integration",
      "AI content production pipeline",
      "Retail readiness deck",
      "Quarterly campaign roadmap",
      "Direct access to Kyle + John",
    ],
    cta: "Let's Scale",
    highlight: false,
  },
];

export default function CpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-beast-black overflow-hidden">
        <div className="absolute inset-0 bg-beast-black" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-24 lg:pt-40 lg:pb-32 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">
              CPG Marketing Agency · National
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              The CPG Agency That Turns{" "}
              <span className="text-beast-pink">Ad Spend Into Retail Proof.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              We help food and beverage brands build first-party consumer databases, outperform industry benchmarks by 8x, and walk into Walmart with data instead of hope.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <IconButton href="/growth-assessment" icon="chart">Get My Free CPG Marketing Audit</IconButton>
          </AnimatedSection>
        </div>
      </section>

      <ReviewBadges />

      {/* CPG STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={36581} label="Consumer Emails Collected" sublabel="Sun-Bird, $6K budget" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={7.03} suffix="%" decimals={2} label="CTR Achieved" sublabel="vs 0.89% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0.12} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={22043} label="Entries on $4K Budget" sublabel="Williams Foods, 2.2x goal" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">The Problem We Solve</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal max-w-3xl mx-auto">
              Your Brand is Ready to Scale.{" "}
              <span className="text-beast-pink">Your Marketing Isn&apos;t.</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                n: "01",
                title: "No Consumer Data",
                desc: "You've been running ads, but you don't own the audience. Platform algorithms change, ad costs spike, and you have nothing to show a retail buyer.",
              },
              {
                n: "02",
                title: "Benchmarks You Can't Hit",
                desc: "Industry average CTR is 0.89%. If you're paying that, you're overpaying. Our campaigns regularly hit 7x that benchmark, and we can show you exactly how.",
              },
              {
                n: "03",
                title: "Retail Buyers Want Proof",
                desc: '"We think our customers want this product" doesn\'t win shelf space. "Here are 36,000 consumers in your distribution territory who opted in" does.',
              },
              {
                n: "04",
                title: "Content at Scale is Impossible",
                desc: "You have 50 SKUs and 900 recipes but post twice a week. We build AI content pipelines that turn your existing assets into months of social content automatically.",
              },
            ].map((pain) => (
              <AnimatedSection key={pain.n}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-6">
                  <span className="font-mono text-beast-pink font-bold text-sm shrink-0 mt-1">{pain.n}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-2">{pain.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{pain.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO FOR CPG */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">Our CPG Services</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal">
              Everything a CPG Brand Needs to Go National.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Sweepstakes & Campaigns",
                desc: "Our proven contest architecture builds first-party consumer databases at a fraction of traditional list-buying costs. Williams: 22,043 entries on $4K. Sun-Bird: 36,581 on $6K.",
              },
              {
                title: "Performance Paid Social",
                desc: "AI-optimized Facebook, Instagram, and TikTok campaigns with real-time creative testing. Our CPG campaigns average $0.12 CPC vs $0.28 industry average.",
              },
              {
                title: "SEO + Answer Engine Optimization",
                desc: "Your brand needs to appear in Google results AND in AI search answers. We optimize for both, and for multi-brand portfolios, our unified domain strategy multiplies SEO power.",
              },
              {
                title: "AI Content Production Pipeline",
                desc: "Recipe videos, product demos, and social content at scale, produced with AI at 90%+ lower cost than traditional production. We've processed 900+ recipe assets for CPG clients.",
              },
              {
                title: "First-Party Data Strategy",
                desc: "Every campaign captures and enriches consumer data. We segment it, map it geographically, and help you tell a compelling story to your retail partners.",
              },
              {
                title: "Retail Readiness Deck",
                desc: "A data-backed consumer demand report your team can take into Walmart, Target, or Kroger meetings, built from real campaign data and geographic purchase intent mapping.",
              },
            ].map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.07}>
                <div className="p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-beast-pink/30 transition-colors h-full">
                  <h3 className="font-display text-lg font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{svc.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WILLIAMS CASE STUDY FEATURE */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Case Study: CPG Marketing</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal mb-6">
                  13,660 Entries in 24 Days.{" "}
                  <span className="text-beast-pink">March Madness. One Seasoning Brand.</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Williams Foods came to Beast with a seasonal window and a creative challenge: make March Madness feel authentic for a CPG seasoning brand, and build a first-party consumer database while doing it.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Beast designed a digital trading card collectible campaign: 8 unique sneaker-themed cards dropped over 24 days, each tied to a Williams flavor. The mechanic drove repeat engagement and a <strong className="text-beast-black">9.5% email click rate</strong> (11x the industry average) with <strong className="text-beast-black">200,475 total reach</strong> across Facebook and Instagram.
                </p>
                <IconButton href="/work/williams-allstars" icon="eye">Read the Full Case Study</IconButton>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "13,660", label: "Total Entries", sub: "across 8 card drops" },
                  { value: "9.5%", label: "Email Click Rate", sub: "vs 0.82% industry avg" },
                  { value: "200,475", label: "Total Reach", sub: "Facebook + Instagram" },
                  { value: "24", label: "Day Campaign", sub: "March Madness window" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                    <div className="font-display text-3xl font-extrabold text-beast-black tracking-normal mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-beast-pink">{stat.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CPG GROWTH JOURNEY */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">The Roadmap</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal">
              Three Stages. One Direction: National.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                stage: "Stage 1",
                period: "Months 1 to 3",
                title: "Foundation",
                desc: "Brand infrastructure, first sweepstakes campaign, baseline SEO, performance marketing foundation.",
                deliverable: "A consumer database, functioning email system, and first campaign data.",
              },
              {
                stage: "Stage 2",
                period: "Months 4 to 9",
                title: "Growth",
                desc: "Scale proven audiences, second campaign mechanic, email automation, AEO content strategy, AI content at volume.",
                deliverable: "Multiple consumer touchpoints and a retail-ready data story.",
              },
              {
                stage: "Stage 3",
                period: "Months 10 to 18",
                title: "Scale",
                desc: "Quarterly campaigns, national SEO, influencer/UGC programs, Segundo AI integration, national launch assets.",
                deliverable: "A brand that markets like a national player.",
              },
            ].map((stage, i) => (
              <AnimatedSection key={stage.stage} delay={i * 0.1}>
                <div className="bg-dark-surface rounded-2xl p-8 border border-dark-border h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">
                      {stage.stage}
                    </span>
                    <span className="text-xs text-gray-500">{stage.period}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{stage.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{stage.desc}</p>
                  <div className="border-t border-dark-border pt-4">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-2">Key Deliverable</p>
                    <p className="text-sm text-beast-pink">{stage.deliverable}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              Two Types of CPG Brands. Both Welcome.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700 mb-6">
                  Path A
                </span>
                <h3 className="font-display text-2xl font-bold text-beast-black mb-4">The Emerging Founder</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You&apos;re building something real. Maybe it&apos;s at farmers markets, maybe it&apos;s in regional grocery. You&apos;re ready to get serious about digital marketing but you need proof before commitment.
                </p>
                <p className="text-beast-pink font-medium text-sm mb-8">
                  → Start with our Starter tier. One sweepstakes campaign. Real data. Real results. Then we&apos;ll talk about what&apos;s next.
                </p>
                <div className="mt-auto">
                  <IconButton href="/growth-assessment" icon="rocket">I&apos;m an Emerging Brand</IconButton>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-beast-black rounded-2xl p-8 border border-dark-border h-full flex flex-col">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/15 text-beast-pink border border-beast-pink/20 mb-6">
                  Path B
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-4">The Regional Brand Going National</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  You have traction. A retail conversation is happening. Your buyer needs consumer pull-through data and you need a partner who knows how to build it.
                </p>
                <p className="text-beast-pink font-medium text-sm mb-8">
                  → Our Growth and Scale tiers are built for this exact moment.
                </p>
                <div className="mt-auto">
                  <IconButton href="/growth-assessment" icon="chart">I&apos;m Ready to Scale</IconButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SAGUNDO */}
      <section className="bg-near-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="section-eyebrow text-beast-pink mb-4">Our Proprietary AI</p>
              <h2 className="font-display text-4xl font-bold text-white tracking-normal mb-6">
                Meet Segundo: Beast&apos;s In-House AI Agent.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Segundo isn&apos;t a chatbot. It&apos;s an internally-deployed AI agent that handles content updates, campaign analysis, meeting intelligence, and workflow automation for Beast and our Scale-tier clients. It&apos;s what makes our team faster, our content cheaper, and our campaigns smarter than agencies twice our size.
              </p>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">
                Available for Scale-tier CPG clients as a self-hosted deployment
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="contact" className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-10">
            <p className="section-eyebrow text-beast-pink mb-4">Let&apos;s Talk</p>
            <h2 className="font-display text-4xl font-bold text-white tracking-normal mb-4">
              Let&apos;s Talk About Your Brand.
            </h2>
            <p className="text-gray-400 text-lg">
              Tell us where you are and where you want to go. We&apos;ll come back with a clear picture of what we&apos;d do for you, no charge, no commitment.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <CpgLeadForm />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-beast-black tracking-normal">
              Common Questions
            </h2>
          </AnimatedSection>
          <div className="bg-white rounded-2xl border border-gray-100 px-6">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <Marquee
        items={["CPG Marketing", "First-Party Data", "Retail Readiness", "National Growth", "Proven Results"]}
      />
    </>
  );
}
