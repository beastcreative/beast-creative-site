import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { faqSchema } from "@/lib/schema";
import { instrumentSerif } from "@/lib/fonts";
import StatCounter from "@/components/ui/StatCounter";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/forms/ContactForm";
import InstantContact from "@/components/ui/InstantContact";
import ReviewBadges from "@/components/ui/ReviewBadges";
import IconButton from "@/components/ui/IconButton";
import Rise from "@/components/redesign2/Rise";
import LiveFrame from "@/components/redesign2/LiveFrame";
import CinemaVideo from "@/components/redesign2/CinemaVideo";

export const metadata: Metadata = {
  title: "Redesign Preview 2 — Beast Creative",
  robots: { index: false, follow: false },
};

/* ── DATA (copy frozen — identical to app/page.tsx) ───────────────── */

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
    image: "/assets/teksbuilder-hero.jpg",
  },
  {
    client: "Williams Foods",
    campaign: "Back-to-School Sweepstakes",
    heroStat: "22,043",
    heroStatLabel: "entries on $4K budget",
    description: "Precision targeting + low-friction mechanic drove 2.2x over the 10,000-entry goal at $0.18 CPC.",
    category: "CPG Marketing",
    href: "/work/williams-bts",
    image: "/assets/williams-bts-hero.jpg",
  },
  {
    client: "Sun-Bird Seasonings",
    campaign: "Bird Herd — Walmart Rollout",
    heroStat: "7.03%",
    heroStatLabel: "CTR vs 0.89% avg",
    description: "36,581 consumer emails collected on $6,000 — nearly 8x industry benchmark CTR.",
    category: "CPG Marketing",
    href: "/work/sun-bird",
    image: "/assets/sunbird-ad-green.jpg",
  },
  {
    client: "Sweet Sensi",
    campaign: "CBD E-Commerce Growth",
    heroStat: "500%+",
    heroStatLabel: "MRR growth",
    description: "SEO + social combo cracked the code on CBD marketing restrictions — monthly revenue up 500%+.",
    category: "SEO + Social",
    href: "/work/sweet-sensi",
    image: "/assets/sweet-sensi-gummies.jpg",
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

const process = [
  { step: "01", name: "Discover", desc: "Deep-dive audit and competitor gap analysis. We find where your brand is losing ground and where the fastest wins are hiding." },
  { step: "02", name: "Strategize", desc: "A campaign plan built around your specific goals, audience, and budget — not a template pulled from a drawer." },
  { step: "03", name: "Execute", desc: "Creative launches. Media runs. Content goes live. We move fast and optimize faster — daily monitoring, real-time pivots." },
  { step: "04", name: "Optimize", desc: "Monthly reporting, A/B testing, and continuous refinement. We don't set it and forget it." },
];

/* ── Route-only presentation data (no new marketing copy) ─────────── */

const clientLogos = [
  { src: "/assets/logos/williams.png", alt: "Williams Foods logo" },
  { src: "/assets/logos/sunbird.png", alt: "Sun-Bird Seasonings logo" },
  { src: "/assets/logos/sweetsensi.png", alt: "Sweet Sensi logo" },
  { src: "/assets/logos/coinline.png", alt: "Coinline logo" },
  { src: "/assets/logos/pioneer.png", alt: "Pioneer logo" },
  { src: "/assets/logos/teksbuilder.png", alt: "TEKSBuilder logo" },
];

// Media + anchors for the four reel frames — aligned 1:1 with caseStudies.
const reels = [
  {
    id: "reel-teksbuilder",
    alt: "TEKSBuilder — the AI lesson-planning SaaS for Texas teachers that Beast Creative built and launched in one week",
  },
  {
    id: "reel-williams",
    alt: "Williams Foods Back-to-School Sweepstakes campaign creative",
  },
  {
    id: "reel-sunbird",
    alt: "Sun-Bird Seasonings Bird Herd campaign ad from the national Walmart rollout",
  },
  {
    id: "reel-sweetsensi",
    alt: "Sweet Sensi CBD gummies product film from the e-commerce growth campaign",
    video: "/assets/sweet-sensi-hero.mp4",
  },
];

const statTone = {
  valueClassName: "text-beast-black",
  labelClassName: "text-beast-black/60",
  sublabelClassName: "text-beast-black/40",
};

const d = (ms: number) => ({ "--d": `${ms}ms` } as CSSProperties);

/* ═══════════════════════════════════════════════════════════════════ */

export default function Redesign2Page() {
  const faqJsonLd = faqSchema(homepageFaqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className={`${instrumentSerif.variable} screening bg-beast-white text-beast-black`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ═══ 1 · HERO — The Opening Frame (light) ═══ */}
      <section className="bg-beast-white">
        <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-20 lg:pt-40 lg:pb-24">
          <p className="scr-eyebrow text-beast-pink">San Antonio SEO · AEO · GEO Agency</p>

          <h1 className="scr-h1 mt-6 max-w-5xl text-beast-black">
            San Antonio SEO &amp; AEO{" "}
            <span className="scr-serif text-beast-pink">for the AI Search Era</span>
          </h1>

          <h2 className="mt-6 font-display text-2xl font-bold text-beast-black/45 lg:text-3xl">
            Marketing that shows its work.
          </h2>

          <p className="text-body-lead mt-6 max-w-[42rem] text-beast-black/60">
            The way people search is changing fast — more of your customers now get answers straight from AI instead of clicking to websites. We make sure San Antonio businesses show up in that new layer: cited and recommended by ChatGPT, Google&apos;s AI Overviews, and Perplexity, not left behind by it. It&apos;s the same approach that drove 7x results for national brands, pointed at your market.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <IconButton
              href="https://calendar.app.google/9q1mcYgEdXNyjK8G6"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Where You Stand in AI Search
            </IconButton>
            <IconButton href="/work" variant="ghost" className="scr-ghost-onlight">
              See Our Work
            </IconButton>
          </div>

          {/* Cinematic media panel — .scr-screen opens from a letterbox slit
              (clip-path) when Rise flips .is-in */}
          <Rise className="mt-14 lg:mt-20">
            <div className="scr-screen relative aspect-video w-full overflow-hidden rounded-3xl bg-beast-black">
              <CinemaVideo
                src="/assets/williams-bowl-hero.mp4"
                poster="/assets/williams-bts-hero.jpg"
                alt="Williams Foods campaign film — a bowl of chili prepared with Williams seasoning, from Beast Creative's Back-to-School Sweepstakes campaign"
              />
            </div>
          </Rise>
        </div>
      </section>

      {/* ═══ 2 · STATS BAND — The Numbers Are Citations (yellow) ═══ */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <Rise delay={0}>
              <a
                className="scr-statlink text-center"
                href="#reel-sunbird"
                aria-label="36,581 contest entries — jump to the Sun-Bird Seasonings case study"
              >
                <StatCounter value={36581} label="Contest Entries" sublabel="vs 10K goal — 3.6x" {...statTone} />
                <span className="scr-cite" aria-hidden="true">Sun-Bird Seasonings ↓</span>
              </a>
            </Rise>
            <Rise delay={80}>
              <a
                className="scr-statlink text-center"
                href="#reel-sunbird"
                aria-label="7.03% CTR achieved — jump to the Sun-Bird Seasonings case study"
              >
                <StatCounter value={7.03} suffix="%" decimals={2} label="CTR Achieved" sublabel="vs 0.89% industry avg" {...statTone} />
                <span className="scr-cite" aria-hidden="true">Sun-Bird Seasonings ↓</span>
              </a>
            </Rise>
            <Rise delay={160}>
              {/* No matching case study on the reel — plain cell, no citation */}
              <StatCounter value={0.12} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" {...statTone} />
            </Rise>
            <Rise delay={240}>
              <a
                className="scr-statlink text-center"
                href="#reel-sweetsensi"
                aria-label="500%+ MRR growth — jump to the Sweet Sensi case study"
              >
                <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="Sweet Sensi" {...statTone} />
                <span className="scr-cite" aria-hidden="true">Sweet Sensi ↓</span>
              </a>
            </Rise>
          </div>
        </div>
      </section>

      {/* ═══ 3 · LOGO STRIP (light, quiet) ═══ */}
      <section className="bg-beast-white py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:gap-x-16">
            {clientLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="scr-logo h-7 w-auto lg:h-8"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4 · WHO WE ARE (off-white) ═══ */}
      <section className="bg-section-offwhite py-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
            <Rise>
              <p className="scr-eyebrow text-beast-pink">Who We Are</p>
              <h2 className="scr-h2 mt-4 mb-6 text-beast-black">Beast Creative.</h2>
              <p className="text-body-lead mb-4 text-beast-black/60">
                At Beast Creative Agency — San Antonio&apos;s SEO, AEO &amp; GEO team — we don&apos;t hide behind strategy decks and vanity metrics. We show you the numbers, the work, and the results — every single month.
              </p>
              <p className="leading-[1.7] text-beast-black/60">
                Founded in 2020 in San Antonio, TX, we&apos;re a team of strategists, creatives, and AI-powered operators. We work with local San Antonio businesses, regional brands, and national CPG clients — the same rigor, the same standards, regardless of size. Our CPG campaigns have averaged 7x industry-average performance. That&apos;s the bar we hold ourselves to for every client.
              </p>
            </Rise>

            <Rise delay={120}>
              <div className="rounded-3xl bg-white p-8 shadow-[0_8px_40px_rgba(10,10,10,0.08)]">
                <p className="mb-5 font-display text-lg font-bold text-beast-black">Who We Serve:</p>
                <ul className="space-y-4">
                  {[
                    "San Antonio businesses that need a real agency, not a freelancer",
                    "Restaurants, service companies, and local brands ready to grow",
                    "Regional brands going national — CPG, retail, e-commerce",
                    "Any ambitious business tired of agencies that talk more than they deliver",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 text-lg font-bold leading-none text-beast-pink" aria-hidden="true">→</span>
                      <span className="text-sm leading-relaxed text-beast-black/60">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-beast-black/10 pt-6">
                  <Link href="/about" className="btn-ghost-pink text-sm">
                    More About Beast →
                  </Link>
                </div>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      <ReviewBadges />

      {/* ═══ 5 · THE THEATER — Work (the one continuous black band) ═══ */}
      <section className="bg-beast-black">
        {/* 5a — title band */}
        <div className="py-20 lg:py-28">
          <Rise className="mx-auto max-w-3xl px-6 text-center">
            <p className="scr-eyebrow text-beast-pink">Proven Results</p>
            <h2 className="scr-h2 mt-4 mb-4 text-white">Work That Speaks For Itself.</h2>
            <p className="text-lg leading-[1.7] text-white/60">
              Not projections. Not case studies from other agencies. These are our campaigns, our clients, and our real numbers.
            </p>
          </Rise>
        </div>

        {/* 5b — the reel stack */}
        <div className="scr-stack">
          {caseStudies.map((cs, i) => {
            const reel = reels[i];
            return (
              <LiveFrame key={cs.href} id={reel.id}>
                {/* media layer — full-viewport fill on desktop, 4:3 block on mobile */}
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
                  {reel.video ? (
                    <div className="absolute inset-0">
                      <CinemaVideo src={reel.video} poster={cs.image} alt={reel.alt} />
                    </div>
                  ) : (
                    <div className="scr-kb absolute inset-0">
                      <Image
                        src={cs.image}
                        alt={reel.alt}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-beast-black via-beast-black/45 to-beast-black/15"
                    aria-hidden="true"
                  />
                </div>

                {/* content — bottom-left on desktop, below the image on mobile */}
                <div className="px-6 py-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mx-auto lg:max-w-7xl lg:px-20 lg:py-0 lg:pb-16">
                  <div className="scr-risein flex flex-wrap items-center gap-3" style={d(0)}>
                    <p className="text-sm font-bold text-beast-pink">{cs.client}</p>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/60">
                      {cs.category}
                    </span>
                  </div>
                  <div className="scr-settle mt-4">
                    <div className="scr-frame-stat text-stat-jumbo text-beast-yellow">{cs.heroStat}</div>
                    <div className="mt-1 text-sm font-semibold text-white/50">{cs.heroStatLabel}</div>
                  </div>
                  <h3 className="scr-h3 scr-risein mt-4 text-white" style={d(100)}>
                    {cs.campaign}
                  </h3>
                  <p className="scr-risein mt-3 max-w-[38rem] leading-[1.7] text-white/70" style={d(200)}>
                    {cs.description}
                  </p>
                  <div className="scr-risein mt-5" style={d(300)}>
                    <Link href={cs.href} className="btn-ghost-pink">
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </LiveFrame>
            );
          })}
        </div>

        {/* 5c — stack close */}
        <Rise className="py-16 text-center">
          <IconButton href="/work" variant="white">View All Case Studies</IconButton>
        </Rise>
      </section>

      {/* ═══ 6 · GOOGLE ZERO — the closing title card (same black band) ═══ */}
      <section className="bg-beast-black py-24 lg:py-40">
        <Rise className="mx-auto max-w-3xl px-6 text-center">
          <p className="scr-eyebrow text-beast-pink">Why Now</p>
          <h2 className="scr-h2 mt-4 mb-6 text-white">
            Google Is Keeping the Click.{" "}
            <span className="scr-serif text-beast-pink">Get Cited Instead.</span>
          </h2>
          <p className="mb-6 text-lg leading-[1.7] text-white/70">
            AI now answers your customers before they ever reach a website — Google&apos;s AI Overviews, ChatGPT, Perplexity. The industry calls it &ldquo;Google Zero,&rdquo; and it&apos;s already changing who gets found. Ranking #1 matters a little less every month. Being the source AI cites matters a lot more.
          </p>
          <p className="mx-auto mb-10 max-w-[38rem] leading-[1.7] text-white/45">
            We get San Antonio businesses into that answer layer — structured, credible, and recommended — so you stay visible as search gets rewritten. The early movers win this, and most of your competitors haven&apos;t started.
          </p>
          <IconButton href="/services/seo-aeo">See How AEO Works</IconButton>
        </Rise>
      </section>

      {/* ═══ 7 · SERVICES (light — hard cut back) ═══ */}
      <section className="bg-beast-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Rise>
            <p className="scr-eyebrow text-beast-pink">What We Do</p>
            <h2 className="scr-h2 mt-4 mb-12 text-beast-black">Full-Service. Full Commitment.</h2>
          </Rise>

          {/* Flagship — the one dark "screen" hanging in the light room */}
          <Rise>
            <Link href="/services/seo-aeo" className="group block">
              <div className="flex flex-col justify-between gap-8 rounded-3xl bg-beast-black p-8 ring-beast-pink/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-2 lg:flex-row lg:items-end lg:p-12">
                <div>
                  <span className="mb-5 inline-flex rounded-full bg-beast-yellow px-3 py-1 text-xs font-bold text-beast-black">
                    Get Cited by AI
                  </span>
                  <h3 className="scr-h3 text-white lg:text-5xl">SEO, AEO &amp; GEO</h3>
                </div>
                <div className="shrink-0 lg:max-w-sm">
                  <p className="mb-6 leading-[1.7] text-white/70">
                    Rank in Google and get cited by ChatGPT, Gemini, and Perplexity. As AI answers more of every search, we make sure San Antonio businesses are the answer — not an afterthought.
                  </p>
                  <span className="inline-flex items-center gap-2 font-bold text-white transition-[gap] duration-200 group-hover:gap-4">
                    Explore Service <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </Rise>

          {/* Six tiles — no numbers of any kind. Idle "screens": on hover /
              keyboard focus a tile switches on (flips to black) to match the
              always-on flagship screen above. */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(1).map((svc, i) => (
              <Rise key={svc.href} delay={i * 70} className="h-full">
                <Link
                  href={svc.href}
                  className="group flex h-full flex-col rounded-3xl border border-light-border bg-white p-7 shadow-[0_8px_40px_rgba(10,10,10,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-beast-black hover:bg-beast-black focus-visible:border-beast-black focus-visible:bg-beast-black"
                >
                  <h3 className="mb-2 font-display text-xl font-bold text-beast-black transition-colors duration-300 group-hover:text-white group-focus-visible:text-white">
                    {svc.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-beast-black/60 transition-colors duration-300 group-hover:text-white/65 group-focus-visible:text-white/65">
                    {svc.desc}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-beast-pink transition-colors duration-300 group-hover:text-beast-yellow group-focus-visible:text-beast-yellow">
                    Learn More →
                  </span>
                </Link>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 8 · CPG CALLOUT (off-white) ═══ */}
      <section className="relative overflow-hidden bg-section-offwhite py-20 lg:py-28">
        {/* quiet evidence — decorative, xl+ only (at lg widths they'd slide
            under the centered copy) */}
        <div
          className="absolute left-[3%] top-1/2 hidden -translate-y-1/2 -rotate-3 opacity-30 xl:block"
          aria-hidden="true"
        >
          <Image src="/assets/sunbird-ad-green.jpg" alt="" width={200} height={250} className="rounded-2xl" />
        </div>
        <div
          className="absolute right-[3%] top-1/2 hidden -translate-y-1/2 rotate-3 opacity-30 xl:block"
          aria-hidden="true"
        >
          <Image src="/assets/sweet-sensi-gummies.jpg" alt="" width={200} height={250} className="rounded-2xl" />
        </div>

        <Rise className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="scr-eyebrow text-beast-pink">Our Track Record</p>
          <h2 className="scr-h2 mt-4 mb-6 text-beast-black">
            Enterprise-Level Proof.{" "}
            <span className="scr-serif text-beast-pink">Local Business Availability.</span>
          </h2>
          <p className="mb-10 text-lg leading-[1.7] text-beast-black/60">
            We ran a 7.03% CTR campaign for a national Walmart rollout on a $6,000 budget. We collected 36,581 consumer emails for a CPG brand in 38 days. That&apos;s the caliber of thinking we bring to every client — whether you&apos;re a San Antonio restaurant or a regional brand going national.
          </p>
          <IconButton href="/cpg">See Our CPG Playbook</IconButton>
        </Rise>
      </section>

      {/* ═══ 9 · PROCESS — The Production Schedule (light) ═══ */}
      <section className="bg-beast-white py-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Rise className="text-center">
            <p className="scr-eyebrow text-beast-pink">How We Work</p>
            <h2 className="scr-h2 mt-4 text-beast-black">Four Steps to Data-Driven Results.</h2>
          </Rise>

          {/* one line, four nodes — vertical on mobile, horizontal on desktop */}
          <div className="relative mt-16 space-y-12 border-l-2 border-light-border pl-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-10">
            {process.map((step, i) => (
              <Rise key={step.step} delay={i * 100} className="relative">
                <span
                  className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-beast-pink lg:hidden"
                  aria-hidden="true"
                />
                <span
                  className="absolute -top-[46px] left-0 hidden h-3 w-3 rounded-full bg-beast-pink lg:block"
                  aria-hidden="true"
                />
                <span className="scr-serif text-xl text-beast-pink">{step.step}</span>
                <h3 className="mt-2 mb-3 font-display text-xl font-bold text-beast-black">{step.name}</h3>
                <p className="text-sm leading-relaxed text-beast-black/60">{step.desc}</p>
              </Rise>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10 · FAQ (off-white) ═══ */}
      <section className="bg-section-offwhite py-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Rise className="text-center">
            <p className="scr-eyebrow text-beast-pink">Common Questions</p>
            <h2 className="scr-h2 mt-4 mb-12 text-beast-black">Everything You Want to Know.</h2>
          </Rise>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-white px-6 shadow-[0_8px_40px_rgba(10,10,10,0.08)]">
              <FaqAccordion faqs={homepageFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 11 · FINAL CTA (near-black — hard cut) ═══ */}
      <section className="bg-near-black py-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Rise>
              <p className="scr-eyebrow text-beast-pink">Let&apos;s Talk</p>
              <h2 className="scr-h2 mt-4 mb-6 text-white">
                Ready to Stop Guessing and{" "}
                <span className="scr-serif text-beast-pink">Start Growing?</span>
              </h2>
              <p className="mb-8 text-lg leading-[1.7] text-white/70">
                Tell us about your business and we&apos;ll show you exactly where you stand in AI search: what&apos;s working, what&apos;s missing, and what it&apos;d take to own your San Antonio market. No pitch, no pressure.
              </p>
              <InstantContact message="Hi Beast — I saw your site and want to talk about my brand's search visibility." />
              <div className="mt-6">
                <p className="mb-3 text-sm text-white/45">Prefer a scheduled call?</p>
                <IconButton
                  href="https://calendar.app.google/9q1mcYgEdXNyjK8G6"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Where You Stand in AI Search
                </IconButton>
              </div>
            </Rise>
            <Rise delay={120}>
              <ContactForm />
            </Rise>
          </div>
        </div>
      </section>
    </div>
  );
}
