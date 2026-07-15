import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { faqSchema } from "@/lib/schema";
import StatCounter from "@/components/ui/StatCounter";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ContactForm from "@/components/forms/ContactForm";
import InstantContact from "@/components/ui/InstantContact";
import ReviewBadges from "@/components/ui/ReviewBadges";
import IconButton from "@/components/ui/IconButton";
import Reveal from "@/components/redesign/Reveal";
import SystemBar from "@/components/redesign/SystemBar";
import HeroProof from "@/components/redesign/HeroProof";
import WorkIndex from "@/components/redesign/WorkIndex";
import ProofReel from "@/components/redesign/ProofReel";

export const metadata: Metadata = {
  title: "Redesign Preview — Beast Creative",
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

const trustedLogos = [
  { src: "/assets/logos/williams.png", alt: "Williams Foods" },
  { src: "/assets/logos/sunbird.png", alt: "Sun-Bird Seasonings" },
  { src: "/assets/logos/sweetsensi.png", alt: "Sweet Sensi" },
  { src: "/assets/logos/coinline.png", alt: "Coinline" },
  { src: "/assets/logos/pioneer.png", alt: "Pioneer" },
  { src: "/assets/logos/teksbuilder.png", alt: "TEKSBuilder" },
];

const heroStats = [
  { value: "36,581", label: "Emails / $6K" },
  { value: "7.03%", label: "CTR achieved" },
  { value: "500%+", label: "MRR growth" },
];

/* ── Small server helpers ─────────────────────────────────────────── */

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`led-label ${dark ? "text-beast-pink" : "text-beast-pink"} flex items-center gap-2.5`}>
      <span className={`inline-block h-px w-6 ${dark ? "bg-white/30" : "bg-black/25"}`} aria-hidden="true" />
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */

export default function RedesignPage() {
  const faqJsonLd = faqSchema(homepageFaqs.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <main id="main-content" className="ledger bg-off-white text-beast-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ═══ 1 · HERO (light) ═══ */}
      <section className="relative overflow-hidden bg-off-white">
        {/* soft brand wash */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 50% at 85% 15%, rgba(255,17,152,0.07) 0%, transparent 60%), radial-gradient(50% 45% at 10% 90%, rgba(255,255,0,0.10) 0%, transparent 60%)",
          }}
        />
        {/* corner crosshairs */}
        <span className="led-cross text-black/30" style={{ top: 96, left: 24 }} aria-hidden="true" />
        <span className="led-cross text-black/30" style={{ top: 96, right: 24 }} aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-12 lg:px-20 lg:pt-32 lg:pb-16">
          <SystemBar />

          <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Left — copy (rendered static: above the fold, best LCP) */}
            <div>
              <Label>San Antonio SEO · AEO · GEO Agency</Label>

              <h1 className="mt-6 font-display text-[3.25rem] font-extrabold uppercase leading-[0.92] tracking-tight text-beast-black sm:text-7xl lg:text-[5.25rem]">
                San Antonio SEO &amp; AEO{" "}
                <span className="text-beast-pink">for the AI Search Era</span>
              </h1>

              <p className="mt-6 font-display text-2xl font-bold text-black/45 lg:text-3xl">
                Marketing that shows its work.
              </p>

              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-black/65">
                The way people search is changing fast — more of your customers now get answers straight from AI instead of clicking to websites. We make sure San Antonio businesses show up in that new layer: cited and recommended by ChatGPT, Google&apos;s AI Overviews, and Perplexity, not left behind by it. It&apos;s the same approach that drove 7x results for national brands, pointed at your market.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <IconButton
                  href="https://calendar.app.google/9q1mcYgEdXNyjK8G6"
                  variant="white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Where You Stand in AI Search
                </IconButton>
                <Link href="/work" className="btn-ghost-pink justify-center text-sm sm:justify-start">
                  See Our Work →
                </Link>
              </div>
            </div>

            {/* Right — floating proof-card stack with pointer parallax (signature visual) */}
            <div className="hidden lg:block">
              <HeroProof />
            </div>

            {/* Mobile proof row (compact) */}
            <div className="grid grid-cols-3 gap-3 lg:hidden">
              {heroStats.map((s) => (
                <div key={s.label} className="rounded-xl border border-black/10 bg-white p-3 text-center">
                  <p className="font-display text-2xl font-black leading-none text-beast-black">{s.value}</p>
                  <p className="led-label mt-2 text-[9px] text-black/45">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2 · THE RECEIPTS (dark stats) ═══ */}
      <section className="relative overflow-hidden bg-beast-black py-14 text-white lg:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(65% 70% at 50% 0%, rgba(255,17,152,0.12) 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b led-rule-dark pb-6">
            <div>
              <Label dark>The Receipts</Label>
              <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight lg:text-6xl">
                Real Numbers.{" "}
                <span className="text-beast-yellow">Named Clients.</span>
              </h2>
            </div>
            <p className="led-label text-white/40">No projections · No anonymous case studies</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border led-rule-dark bg-white/[0.07] lg:grid-cols-4">
            {[
              { node: <StatCounter value={36581} label="Contest Entries" sublabel="vs 10K goal — 3.6x" valueClassName="text-beast-yellow lg:!text-6xl" labelClassName="text-white/70" sublabelClassName="text-white/40" />, idx: "01" },
              { node: <StatCounter value={7.03} suffix="%" decimals={2} label="CTR Achieved" sublabel="vs 0.89% industry avg" valueClassName="text-beast-yellow lg:!text-6xl" labelClassName="text-white/70" sublabelClassName="text-white/40" />, idx: "02" },
              { node: <StatCounter value={0.12} prefix="$" decimals={2} label="Cost Per Click" sublabel="vs $0.28 industry avg" valueClassName="text-beast-yellow lg:!text-6xl" labelClassName="text-white/70" sublabelClassName="text-white/40" />, idx: "03" },
              { node: <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="Sweet Sensi" valueClassName="text-beast-yellow lg:!text-6xl" labelClassName="text-white/70" sublabelClassName="text-white/40" />, idx: "04" },
            ].map((s, i) => (
              <Reveal key={s.idx} delay={i * 70} className="group relative bg-beast-black px-6 py-9 transition-colors duration-300 hover:bg-white/[0.03] lg:py-11">
                <span className="led-label absolute right-4 top-4 text-white/25 transition-colors duration-300 group-hover:text-beast-pink">[{s.idx}]</span>
                {s.node}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3 · TRUSTED BY (light logo wall) ═══ */}
      <section className="border-b led-rule bg-off-white py-12 lg:py-16">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal>
            <p className="led-label text-center text-black/40">Trusted by national brands &amp; local businesses</p>
          </Reveal>
        </div>
        <Reveal delay={100} className="mt-8 overflow-hidden">
          <div className="led-marquee-track gap-16 px-8">
            {[...trustedLogos, ...trustedLogos].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-6 w-auto shrink-0 opacity-45 transition-opacity duration-300 hover:opacity-80 lg:h-7"
                style={{ filter: "brightness(0)" }}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══ 4 · WHO WE ARE (light, ghost type) ═══ */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20">
        <div className="led-ghost pointer-events-none absolute -top-4 left-0 w-full select-none text-center text-[22vw] leading-none text-black/[0.035] lg:text-[16rem]" aria-hidden="true">
          BEAST
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* LEFT — image panel. TODO: swap for a real team/office photo when John sends one. */}
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                <Image
                  src="/assets/williams-bts-hero.jpg"
                  alt="Beast Creative campaign work — Williams Foods back-to-school"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <span className="led-cross absolute right-3 top-3 text-white/60" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <p className="led-label absolute bottom-4 left-4 text-white/85">Selected work · Williams Foods</p>
              </div>
            </Reveal>

            {/* RIGHT — copy + who we serve */}
            <Reveal delay={120}>
              <Label>Who We Are</Label>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-beast-black lg:text-5xl">
                Beast Creative.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-black/70">
                At Beast Creative Agency — San Antonio&apos;s SEO, AEO &amp; GEO team — we don&apos;t hide behind strategy decks and vanity metrics. We show you the numbers, the work, and the results — every single month.
              </p>
              <p className="mt-4 leading-relaxed text-black/60">
                Founded in 2020 in San Antonio, TX, we&apos;re a team of strategists, creatives, and AI-powered operators. We work with local San Antonio businesses, regional brands, and national CPG clients — the same rigor, the same standards, regardless of size. Our CPG campaigns have averaged 7x industry-average performance. That&apos;s the bar we hold ourselves to for every client.
              </p>

              <p className="led-label mt-8 text-beast-black">Who We Serve</p>
              <ul className="mt-4 border-t led-rule">
                {[
                  "San Antonio businesses that need a real agency, not a freelancer",
                  "Restaurants, service companies, and local brands ready to grow",
                  "Regional brands going national — CPG, retail, e-commerce",
                  "Any ambitious business tired of agencies that talk more than they deliver",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 border-b led-rule py-3">
                    <span className="led-label mt-0.5 text-beast-pink">[{String(i + 1).padStart(2, "0")}]</span>
                    <span className="text-sm leading-relaxed text-black/75">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/about" className="btn-ghost-pink text-sm">
                  More About Beast →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 5 · REVIEWS (light trust strip) ═══ */}
      <ReviewBadges />

      {/* ═══ 6 · WORK (dark, numbered image cards) ═══ */}
      <section className="bg-beast-black py-14 text-white lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b led-rule-dark pb-6">
            <div>
              <Label dark>Proven Results</Label>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight lg:text-6xl">
                Work That Speaks{" "}
                <span className="text-beast-pink">For Itself.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              Not projections. Not case studies from other agencies. These are our campaigns, our clients, and our real numbers.
            </p>
          </Reveal>

          <Reveal>
            <WorkIndex items={caseStudies} />
          </Reveal>

          <div className="mt-12 text-center">
            <IconButton href="/work" variant="pink">View All Case Studies</IconButton>
          </div>
        </div>
      </section>

      {/* ═══ 7 · SERVICES (light, big ghost numbers) ═══ */}
      <section className="bg-off-white py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-10">
            <Label>What We Do</Label>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-beast-black lg:text-6xl">
              Full-Service. Full Commitment.
            </h2>
          </Reveal>

          {/* Flagship SEO/AEO card */}
          <Reveal>
            <Link href="/services/seo-aeo" className="group mb-4 block">
              <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl bg-beast-pink p-8 transition-all duration-300 group-hover:-translate-y-1 lg:flex-row lg:items-end lg:p-12">
                <div className="relative z-10">
                  <span className="led-label inline-flex rounded-full bg-beast-yellow px-3 py-1.5 text-beast-black">
                    Get Cited by AI
                  </span>
                  <div aria-hidden="true" className="led-ghost mt-4 text-8xl text-beast-black lg:text-[10rem]">01</div>
                  <h3 className="font-display text-3xl font-black uppercase leading-tight text-white lg:text-5xl">
                    SEO, AEO &amp; GEO
                  </h3>
                </div>
                <div className="relative z-10 shrink-0 lg:max-w-sm">
                  <p className="leading-relaxed text-white/85">
                    Rank in Google and get cited by ChatGPT, Gemini, and Perplexity. As AI answers more of every search, we make sure San Antonio businesses are the answer — not an afterthought.
                  </p>
                  <span className="led-label mt-6 inline-flex items-center gap-2 text-white transition-all group-hover:gap-3.5">
                    Explore Service →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Remaining 6 — hairline list with big ghost numbers */}
          <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {services.slice(1).map((svc, i) => (
              <Reveal key={svc.href} delay={i * 60}>
                <Link href={svc.href} className="group flex items-start gap-6 border-b led-rule py-7 transition-colors hover:border-beast-pink">
                  <span aria-hidden="true" className="led-ghost w-16 shrink-0 font-display text-5xl text-black/15 transition-colors group-hover:text-beast-pink lg:text-6xl">
                    0{i + 2}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-bold uppercase leading-none text-beast-black">{svc.name}</h3>
                      <span className="text-black/25 transition-all group-hover:translate-x-1 group-hover:text-beast-pink" aria-hidden="true">→</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-black/60">{svc.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7.5 · PROOF REEL (kinetic visual break) ═══ */}
      <section className="overflow-hidden border-y led-rule bg-off-white py-12 lg:py-16">
        <div className="mx-auto mb-8 w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-3">
            <Label>In the Wild</Label>
            <p className="led-label text-black/40">Real campaigns · Real brands</p>
          </Reveal>
        </div>
        <Reveal>
          <ProofReel />
        </Reveal>
      </section>

      {/* ═══ 8 · THE SHIFT / GOOGLE ZERO (dark editorial) ═══ */}
      <section className="relative overflow-hidden bg-beast-black py-16 text-white lg:py-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(ellipse 55% 55% at 50% 45%, rgba(255,17,152,0.10) 0%, transparent 70%)" }} />
        <span className="led-cross text-white/20" style={{ top: 40, left: 40 }} aria-hidden="true" />
        <span className="led-cross text-white/20" style={{ bottom: 40, right: 40 }} aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-20">
          <Reveal>
            <div className="flex justify-center"><Label dark>Why Now</Label></div>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight lg:text-6xl">
              Google Is Keeping the Click.{" "}
              <span className="text-beast-pink">Get Cited Instead.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
              AI now answers your customers before they ever reach a website — Google&apos;s AI Overviews, ChatGPT, Perplexity. The industry calls it &ldquo;Google Zero,&rdquo; and it&apos;s already changing who gets found. Ranking #1 matters a little less every month. Being the source AI cites matters a lot more.
            </p>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/55">
              We get San Antonio businesses into that answer layer — structured, credible, and recommended — so you stay visible as search gets rewritten. The early movers win this, and most of your competitors haven&apos;t started.
            </p>
            <div className="mt-10">
              <IconButton href="/services/seo-aeo" variant="pink">See How AEO Works</IconButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 9 · CPG CALLOUT (light, green accent) ═══ */}
      <section className="relative overflow-hidden bg-white py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: "radial-gradient(50% 60% at 80% 20%, rgba(0,247,99,0.08) 0%, transparent 60%)" }} />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* LEFT — copy */}
            <Reveal>
              <Label>Our Track Record</Label>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-beast-black lg:text-5xl">
                Enterprise-Level Proof.{" "}
                <span className="text-beast-pink">Local Business Availability.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black/65">
                We ran a 7.03% CTR campaign for a national Walmart rollout on a $6,000 budget. We collected 36,581 consumer emails for a CPG brand in 38 days. That&apos;s the caliber of thinking we bring to every client — whether you&apos;re a San Antonio restaurant or a regional brand going national.
              </p>
              <div className="mt-8">
                <IconButton href="/cpg" variant="white">See Our CPG Playbook</IconButton>
              </div>
            </Reveal>

            {/* RIGHT — campaign image */}
            <Reveal delay={120} className="lg:order-last">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                <Image
                  src="/assets/sunbird-ad-yellow.jpg"
                  alt="Sun-Bird Seasonings national Walmart rollout campaign"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <span className="led-cross absolute right-3 top-3 text-white/60" aria-hidden="true" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p className="led-label absolute bottom-4 left-4 text-white/85">Sun-Bird · Walmart Rollout</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ 10 · PROCESS (light, numbered) ═══ */}
      <section className="bg-off-white py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-8 border-b led-rule pb-6">
            <Label>How We Work</Label>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-beast-black lg:text-6xl">
              Four Steps to Data-Driven Results.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border led-rule bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 80} className="bg-white p-8">
                <span aria-hidden="true" className="led-ghost font-display text-6xl text-black/10">{step.step}</span>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-none text-beast-black">{step.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11 · FAQ (light accordion) ═══ */}
      <section className="border-t led-rule bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-20">
          <Reveal className="mb-8 text-center">
            <div className="flex justify-center"><Label>Common Questions</Label></div>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-beast-black lg:text-5xl">
              Everything You Want to Know.
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-black/10 bg-off-white px-6">
              <FaqAccordion faqs={homepageFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 12 · FINAL CTA + CONTACT (dark) ═══ */}
      <section className="bg-near-black py-14 text-white lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Label dark>Let&apos;s Talk</Label>
              <h2 className="mt-5 font-display text-4xl font-bold uppercase tracking-tight lg:text-5xl">
                Ready to Stop Guessing and Start Growing?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                Tell us about your business and we&apos;ll show you exactly where you stand in AI search: what&apos;s working, what&apos;s missing, and what it&apos;d take to own your San Antonio market. No pitch, no pressure.
              </p>
              <div className="mt-8">
                <InstantContact message="Hi Beast — I saw your site and want to talk about my brand's search visibility." />
              </div>
              <div className="mt-6">
                <p className="led-label mb-3 text-white/45">Prefer a scheduled call?</p>
                <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" variant="ghost" target="_blank" rel="noopener noreferrer">
                  See Where You Stand in AI Search
                </IconButton>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
