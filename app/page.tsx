import Link from "next/link";
import type { Metadata } from "next";
import { faqSchema } from "@/lib/schema";
import StatCounter from "@/components/ui/StatCounter";
import AnimatedSection from "@/components/ui/AnimatedSection";
import HeroHeadline from "@/components/ui/HeroHeadline";
import MagneticButton from "@/components/ui/MagneticButton";
import ContactForm from "@/components/forms/ContactForm";
import ClientListSection from "@/components/ui/ClientListSection";
import IconButton from "@/components/ui/IconButton";
import InstantContact from "@/components/ui/InstantContact";
import ReviewBadges from "@/components/ui/ReviewBadges";

export const metadata: Metadata = {
  title: "San Antonio SEO & AEO Agency | Beast Creative",
  description:
    "Beast Creative is a San Antonio SEO, AEO & GEO agency. We get local businesses found — and cited — by Google, ChatGPT, Perplexity, and AI search. Real results, documented.",
  openGraph: {
    title: "San Antonio SEO & AEO Agency | Beast Creative",
    description:
      "Beast Creative is a San Antonio SEO, AEO & GEO agency. We get local businesses found — and cited — by Google, ChatGPT, Perplexity, and AI search. Real results, documented.",
    type: "website",
    url: "https://beastcreativeagency.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Antonio SEO & AEO Agency | Beast Creative",
    description:
      "Beast Creative is a San Antonio SEO, AEO & GEO agency. We get local businesses found — and cited — by Google, ChatGPT, Perplexity, and AI search. Real results, documented.",
  },
  alternates: {
    canonical: "https://beastcreativeagency.com",
  },
};


const homepageFaqs = [
  {
    q: "What services does Beast Creative offer?",
    a: "Beast Creative is a full-service marketing agency based in San Antonio, TX. We offer web design and development, SEO and Answer Engine Optimization (AEO), paid media management, branding and identity, AI content production, and CPG marketing. Most clients start with web design or SEO and expand from there.",
  },
  {
    q: "Do you work with local San Antonio businesses?",
    a: "Yes — and it's a big part of what we do. We work with local San Antonio restaurants, service companies, startups, and regional businesses alongside national CPG brands. If you're in San Antonio and need a real agency with documented results, not just a freelancer, we're built for that.",
  },
  {
    q: "How much does web design cost in San Antonio?",
    a: "Our web design projects typically start at $3,500 for marketing sites and $5,000+ for e-commerce. Every site is built on Next.js or Shopify — mobile-first, performance-optimized, and SEO-ready from day one. We don't use templates; every build is custom to your brand and conversion goals.",
  },
  {
    q: "What's the difference between SEO and AEO?",
    a: "SEO (Search Engine Optimization) helps your brand rank in Google's traditional search results. AEO (Answer Engine Optimization) goes further — structuring your content so AI tools like ChatGPT, Perplexity, and Google AI Overviews cite your brand when consumers ask questions. Both are essential for modern visibility, and Beast is one of the few San Antonio agencies offering both.",
  },
  {
    q: "What makes Beast Creative different from other San Antonio agencies?",
    a: "We publish our results by name. No anonymous case studies, no inflated projections. Every number on our site — 7.03% CTR, 36,581 entries, 500%+ MRR growth — is attributed to a real client. We also run AI-assisted operations through our proprietary agent Segundo, which lets us move faster and cost less than traditional agencies.",
  },
  {
    q: "Do you work outside San Antonio?",
    a: "Yes. Beast Creative is headquartered in San Antonio, TX and works with brands across the United States. All of our CPG case study clients are national brands. We collaborate fully remotely and are comfortable with any market.",
  },
];

const caseStudies = [
  {
    client: "TEKSBuilder",
    campaign: "Idea to Launched SaaS in One Week",
    heroStat: "1 Week",
    heroStatLabel: "idea to launched SaaS",
    description: "We built and launched our own AI SaaS for teachers — full product, billing, and funnel — in one week, then scaled it state by state.",
    category: "App & SaaS Dev",
    href: "/work/teksbuilder",
  },
  {
    client: "Williams Foods",
    campaign: "Back-to-School Sweepstakes",
    heroStat: "22,043",
    heroStatLabel: "entries on $4K budget",
    description: "Precision targeting + low-friction mechanic drove 2.2x over the 10,000-entry goal at $0.18 CPC.",
    category: "CPG Marketing",
    href: "/work/williams-bts",
  },
  {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd — Walmart Rollout",
    heroStat: "7.03%",
    heroStatLabel: "CTR vs 0.89% avg",
    description: "36,581 consumer emails collected on $6,000 — nearly 8x industry benchmark CTR.",
    category: "CPG Marketing",
    href: "/work/sun-bird",
  },
  {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    heroStat: "500%+",
    heroStatLabel: "MRR growth",
    description: "SEO + social combo cracked the code on CBD marketing restrictions — monthly revenue up 500%+.",
    category: "SEO + Social",
    href: "/work/sweet-sensi",
  },
];

const services = [
  {
    name: "SEO, AEO & GEO",
    desc: "Rank in Google and get cited by ChatGPT, Gemini, and Perplexity. As AI answers more searches, we make sure San Antonio businesses are the answer.",
    href: "/services/seo-aeo",
    featured: true,
  },
  {
    name: "Web Design & Development",
    desc: "Custom Next.js and Shopify builds — mobile-first, Lighthouse 90+, conversion-optimized. Built to rank and built to sell.",
    href: "/services/web-design",
  },
  {
    name: "AI App & SaaS Development",
    desc: "SaaS products, AI apps, and MVPs — from idea to launched product in weeks. We built TEKSBuilder, our own live SaaS, in one.",
    href: "/services/app-development",
  },
  {
    name: "Paid Media",
    desc: "AI-optimized Facebook, Instagram, TikTok, and Google campaigns. $0.12 CPC vs $0.28 industry average.",
    href: "/services/paid-media",
  },
  {
    name: "Branding & Identity",
    desc: "Brand naming, visual systems, and identities built for instant recognition. We created Coinline from zero.",
    href: "/services/branding",
  },
  {
    name: "AI Content Production",
    desc: "Social content, video, and copy at scale — produced with AI at 90%+ lower cost than traditional production.",
    href: "/services/content-production",
  },
  {
    name: "CPG Marketing",
    desc: "Sweepstakes, first-party data, and retail-ready campaigns. 36,581 entries on $6K. 7.03% CTR. Real numbers.",
    href: "/services/cpg-marketing",
  },
];
// TODO: Add Email Marketing service page at /services/email-marketing
// TODO: Add Social Media service page at /services/social-media

// TODO: Consider promoting Williams All-Stars (13,660 entries), Williams Bowl ($1,500 budget),
// Pioneer (ROAS), or Coinline (branding) to homepage grid when 4-column layout is desired

const process = [
  { step: "01", name: "Discover", desc: "Deep-dive audit and competitor gap analysis. We find where your brand is losing ground and where the fastest wins are hiding." },
  { step: "02", name: "Strategize", desc: "A campaign plan built around your specific goals, audience, and budget — not a template pulled from a drawer." },
  { step: "03", name: "Execute", desc: "Creative launches. Media runs. Content goes live. We move fast and optimize faster — daily monitoring, real-time pivots." },
  { step: "04", name: "Optimize", desc: "Monthly reporting, A/B testing, and continuous refinement. We don't set it and forget it." },
];

export default function HomePage() {
  const faqJsonLd = faqSchema(homepageFaqs.map((f) => ({ question: f.q, answer: f.a })));
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-beast-black overflow-hidden">
        <div className="absolute inset-0 bg-beast-black" />
        <div className="hero-ambient-glow" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-24 lg:pt-40 lg:pb-32 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">
              San Antonio SEO · AEO · GEO Agency
            </p>
          </AnimatedSection>

          <HeroHeadline />

          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white/60 max-w-3xl mb-6">
              Marketing that shows its work.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              The way people search is changing fast — more of your customers now get answers straight from AI instead of clicking to websites. We make sure San Antonio businesses show up in that new layer: cited and recommended by ChatGPT, Google&apos;s AI Overviews, and Perplexity, not left behind by it. It&apos;s the same approach that drove 7x results for national brands, pointed at your market.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
              </MagneticButton>
              <IconButton href="/work" icon="eye" variant="ghost">See Our Work</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TODO: Add agency-level stats bar when verified: total clients served, team headcount, total articles published */}
      {/* STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0} variant="fadeUp">
              <StatCounter value={36581} label="Contest Entries" sublabel="vs 10K goal — 3.6x" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
            <AnimatedSection delay={0.08} variant="fadeUp">
              <StatCounter value={7.03} suffix="%" decimals={2} label="CTR Achieved" sublabel="vs 0.89% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
            <AnimatedSection delay={0.16} variant="fadeUp">
              <StatCounter value={0.12} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
            <AnimatedSection delay={0.24} variant="fadeUp">
              <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="Sweet Sensi" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ClientListSection />

      <ReviewBadges />

      {/* INTRO COPY */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Who We Are</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal mb-6">
                Beast Creative.
              </h2>
              <p className="text-body-lead text-gray-600 mb-4">
                At Beast Creative Agency — San Antonio&apos;s SEO, AEO &amp; GEO team — we don&apos;t hide behind strategy decks and vanity metrics. We show you the numbers, the work, and the results — every single month.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020 in San Antonio, TX, we&apos;re a team of strategists, creatives, and AI-powered operators. We work with local San Antonio businesses, regional brands, and national CPG clients — the same rigor, the same standards, regardless of size. Our CPG campaigns have averaged 7x industry-average performance. That&apos;s the bar we hold ourselves to for every client.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="font-display font-semibold text-beast-black text-sm uppercase tracking-widest mb-5">Who We Serve:</p>
                <ul className="space-y-4">
                  {[
                    "San Antonio businesses that need a real agency, not a freelancer",
                    "Restaurants, service companies, and local brands ready to grow",
                    "Regional brands going national — CPG, retail, e-commerce",
                    "Any ambitious business tired of agencies that talk more than they deliver",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-beast-pink mt-0.5 font-bold text-lg leading-none" aria-hidden="true">→</span>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link href="/about" className="btn-ghost-pink text-sm">
                    More About Beast →
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">Proven Results</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal mb-4">
              Work That Speaks For Itself.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Not projections. Not case studies from other agencies. These are our campaigns, our clients, and our real numbers.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.href} delay={i * 0.1} className="h-full">
                <Link href={cs.href} className="group block h-full">
                  <article className="h-full bg-beast-black rounded-2xl overflow-hidden border border-white/10 hover:border-beast-pink/50 hover:shadow-[0_0_40px_rgba(255,17,152,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-beast-pink">
                          {cs.client}
                        </p>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/8 text-gray-400 border border-white/10">
                          {cs.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-6 leading-tight">
                        {cs.campaign}
                      </h3>
                      <div className="mb-5">
                        <div className="font-display text-5xl font-extrabold text-beast-yellow tracking-wide leading-none mb-1">
                          {cs.heroStat}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                          {cs.heroStatLabel}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed flex-1">{cs.description}</p>
                      <div className="mt-6 pt-5 border-t border-white/8 flex items-center justify-between">
                        <span className="text-sm font-bold text-beast-pink group-hover:text-white transition-colors">
                          View Case Study
                        </span>
                        <span className="w-8 h-8 rounded-full bg-beast-pink/15 border border-beast-pink/30 flex items-center justify-center group-hover:bg-beast-pink transition-all duration-200" aria-hidden="true">
                          <svg className="w-3.5 h-3.5 text-beast-pink group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <IconButton href="/work" icon="work" variant="white">View All Case Studies</IconButton>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal">
              Full-Service. Full Commitment.
            </h2>
          </AnimatedSection>

          {/* SEO, AEO & GEO — Flagship featured card */}
          <AnimatedSection className="mb-4">
            <Link href="/services/seo-aeo" className="group block">
              <div className="relative rounded-2xl overflow-hidden bg-beast-pink p-8 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-2 border-transparent transition-all duration-300 group-hover:-translate-y-1 group-hover:border-beast-yellow">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/25 mb-5">
                    Get Cited by AI
                  </span>
                  <div aria-hidden="true" className="font-display text-8xl lg:text-[10rem] font-black text-beast-black leading-none -mb-2 select-none">01</div>
                  <h3 className="font-display text-3xl lg:text-5xl font-black text-white leading-tight">SEO, AEO &amp; GEO</h3>
                </div>
                <div className="lg:max-w-sm shrink-0">
                  <p className="text-white/80 leading-relaxed mb-6">
                    Rank in Google and get cited by ChatGPT, Gemini, and Perplexity. As AI answers more of every search, we make sure San Antonio businesses are the answer — not an afterthought.
                  </p>
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
              <AnimatedSection key={svc.href} delay={(i + 1) * 0.07}>
                <Link href={svc.href} className="group block h-full">
                  <div className="h-full p-6 rounded-2xl bg-dark-surface border border-dark-border hover:border-beast-pink/40 hover:bg-near-black transition-all duration-300 flex flex-col">
                    <div aria-hidden="true" className="font-display text-5xl font-black text-beast-yellow leading-none mb-4 select-none">
                      0{i + 2}
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{svc.name}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{svc.desc}</p>
                    <span className="text-beast-pink text-sm font-semibold group-hover:text-white transition-colors">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* THE SHIFT — GOOGLE ZERO */}
      <section className="bg-beast-black relative overflow-hidden py-16 lg:py-24 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,17,152,0.06)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Why Now</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6 max-w-3xl mx-auto">
              Google Is Keeping the Click.{" "}
              <span className="text-beast-pink">Get Cited Instead.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              AI now answers your customers before they ever reach a website — Google&apos;s AI Overviews, ChatGPT, Perplexity. The industry calls it &ldquo;Google Zero,&rdquo; and it&apos;s already changing who gets found. Ranking #1 matters a little less every month. Being the source AI cites matters a lot more.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              We get San Antonio businesses into that answer layer — structured, credible, and recommended — so you stay visible as search gets rewritten. The early movers win this, and most of your competitors haven&apos;t started.
            </p>
            <IconButton href="/services/seo-aeo" icon="eye">See How AEO Works</IconButton>
          </AnimatedSection>
        </div>
      </section>

      {/* CPG CALLOUT BANNER */}
      <section className="bg-section-near-dark relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,204,64,0.06)_0%,transparent_70%)]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Our Track Record</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6 max-w-3xl mx-auto">
              Enterprise-Level Proof.{" "}
              <span className="text-beast-pink">Local Business Availability.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              We ran a 7.03% CTR campaign for a national Walmart rollout on a $6,000 budget. We collected 36,581 consumer emails for a CPG brand in 38 days. That&apos;s the caliber of thinking we bring to every client — whether you&apos;re a San Antonio restaurant or a regional brand going national.
            </p>
            <IconButton href="/cpg" icon="cpg">See Our CPG Playbook</IconButton>
          </AnimatedSection>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">How We Work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              Four Steps to Data-Driven Results.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1} className="h-full">
                <div className="h-full bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:border-beast-pink hover:shadow-lg transition-all duration-200 flex flex-col">
                  <span className="font-mono text-xs font-bold text-beast-pink tracking-widest mb-3">{step.step}</span>
                  <h3 className="font-display text-xl font-bold text-beast-black mb-3">{step.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ — AEO + AI RANKING */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">Common Questions</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              Everything You Want to Know.
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {homepageFaqs.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.06}>
                <details className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-display font-semibold text-beast-black text-base select-none">
                    {faq.q}
                    <svg
                      className="w-5 h-5 text-beast-pink shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
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

      {/* FINAL CTA */}
      <section className="bg-near-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Let&apos;s Talk</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
                Ready to Stop Guessing and Start Growing?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Tell us about your business and we&apos;ll show you exactly where you stand in AI search: what&apos;s working, what&apos;s missing, and what it&apos;d take to own your San Antonio market. No pitch, no pressure.
              </p>
              <InstantContact message="Hi Beast — I saw your site and want to talk about my brand's search visibility." />
              <div className="mt-6">
                <p className="text-gray-500 text-sm mb-3">Prefer a scheduled call?</p>
                <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" variant="ghost" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
