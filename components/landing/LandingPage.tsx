import Image from "next/image";
import StatCounter from "@/components/ui/StatCounter";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/redesign/Reveal";
import DiagnosticCTA from "@/components/landing/DiagnosticCTA";
import TrackedLink from "@/components/landing/TrackedLink";
import HeroProofVisual from "@/components/landing/HeroProofVisual";

export interface LandingData {
  pageType: string; // analytics lp_type, e.g. "ecommerce"
  eyebrow: string;
  h1Pre: string;
  h1Accent: string;
  sub: string;
  primaryCta: string;
  secondaryCta: { label: string; href: string };
  heroVisual: { label: string; note: string };
  proof: {
    value: number;
    label: string;
    sublabel?: string;
    prefix?: string;
    suffix?: string;
    decimals?: number;
  }[];
  problem: { headingPre: string; headingAccent: string; intro: string; items: { t: string; d: string }[] };
  system: { steps: { step: string; name: string; desc: string }[] };
  capabilities: { heading: string; items: { outcome: string; caps: string }[] };
  cases: { client: string; result: string; resultLabel: string; proves: string; href: string; image: string }[];
  faqs: { question: string; answer: string }[];
  finalHeadingPre: string;
  finalHeadingAccent: string;
  finalCopy: string;
  // Optional keyword-bearing prose block (SEO/Ads message-match). Headings carry
  // the target phrases at the requested levels; bodies keep it reading naturally.
  seo?: { eyebrow: string; items: { level: "h2" | "h3"; heading: string; body: string }[] };
}

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className="led-label flex items-center gap-2.5 text-beast-pink">
      <span className={`inline-block h-px w-6 ${dark ? "bg-white/30" : "bg-black/25"}`} aria-hidden="true" />
      {children}
    </span>
  );
}

export default function LandingPage({ data }: { data: LandingData }) {
  return (
    <div className="ledger bg-off-white text-beast-black">
      {/* ═══ HERO (light) ═══ */}
      <section className="relative overflow-hidden bg-off-white">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 50% at 85% 15%, rgba(255,17,152,0.07) 0%, transparent 60%), radial-gradient(50% 45% at 10% 90%, rgba(255,255,0,0.10) 0%, transparent 60%)",
          }}
        />
        <span className="led-cross text-black/30" style={{ top: 96, left: 24 }} aria-hidden="true" />
        <span className="led-cross text-black/30" style={{ top: 96, right: 24 }} aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-14 lg:px-20 lg:pt-32 lg:pb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Label>{data.eyebrow}</Label>
              <h1 className="mt-6 font-display text-[3rem] font-extrabold uppercase leading-[0.92] tracking-tight text-beast-black sm:text-6xl lg:text-[4.75rem]">
                {data.h1Pre} <span>{data.h1Accent}</span>
              </h1>
              <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-black/65">{data.sub}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <DiagnosticCTA label={data.primaryCta} location="hero" pageType={data.pageType} variant="pink" />
                <a href={data.secondaryCta.href} className="btn-ghost-pink justify-center text-sm sm:justify-start">
                  {data.secondaryCta.label}<span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <Reveal delay={120} className="mt-2 lg:mt-0">
              <HeroProofVisual proof={data.proof} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ PROOF BAR (dark) ═══ */}
      <section id="proof" className="relative overflow-hidden bg-beast-black py-14 text-white lg:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(65% 70% at 50% 0%, rgba(255,17,152,0.12) 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b led-rule-dark pb-6">
            <div>
              <Label dark>Named proof. Real outcomes.</Label>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-none tracking-tight lg:text-5xl">
                Proof the System Works.
              </h2>
            </div>
            <p className="led-label text-white/40">Verified · Attributed to real clients</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border led-rule-dark bg-white/[0.07] lg:grid-cols-4">
            {data.proof.map((s, i) => (
              <Reveal key={i} delay={i * 70} className="relative bg-beast-black px-6 py-9 lg:py-11">
                <span className="led-label absolute right-4 top-4 text-white/25">[0{i + 1}]</span>
                <StatCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                  label={s.label}
                  sublabel={s.sublabel}
                  valueClassName="text-beast-yellow lg:!text-6xl"
                  labelClassName="text-white/70"
                  sublabelClassName="text-white/40"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM (light) ═══ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="max-w-3xl">
            <Label>The real problem</Label>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-beast-black lg:text-5xl">
              {data.problem.headingPre} <span>{data.problem.headingAccent}</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-black/65">{data.problem.intro}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.problem.items.map((it, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="h-full rounded-2xl border border-black/10 bg-off-white p-6">
                  <span className="led-label text-beast-pink">[{String(i + 1).padStart(2, "0")}]</span>
                  <p className="mt-3 font-display text-xl font-bold uppercase leading-tight text-beast-black">{it.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{it.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GROWTH SYSTEM (dark) ═══ */}
      <section className="bg-beast-black py-14 text-white lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-10 border-b led-rule-dark pb-6">
            <Label dark>How Beast builds growth</Label>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight lg:text-6xl">
              Diagnose. Design. Build. Grow.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border led-rule-dark bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {data.system.steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 70} className="bg-beast-black p-7">
                <span aria-hidden="true" className="led-ghost font-display text-5xl text-white/10">{step.step}</span>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-none text-white">{step.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES → OUTCOMES (light hairline list) ═══ */}
      <section className="bg-off-white py-14 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-8">
            <Label>Capabilities as growth tools</Label>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-beast-black lg:text-5xl">
              {data.capabilities.heading}
            </h2>
          </Reveal>
          <div className="border-t led-rule">
            {data.capabilities.items.map((it, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="grid grid-cols-1 gap-2 border-b led-rule py-6 md:grid-cols-[0.9fr_1.1fr] md:items-baseline md:gap-8">
                  <p className="font-display text-2xl font-bold uppercase leading-none text-beast-black">{it.outcome}</p>
                  <p className="text-sm leading-relaxed text-black/60">{it.caps}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STORIES (dark) ═══ */}
      <section className="bg-beast-black py-14 text-white lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
          <Reveal className="mb-10 border-b led-rule-dark pb-6">
            <Label dark>Proven results</Label>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight lg:text-6xl">
              Business Stories, Not Portfolio Tiles.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {data.cases.map((cs, i) => (
              <Reveal key={cs.href} delay={i * 80}>
                <TrackedLink
                  href={cs.href}
                  event="case_study_click"
                  params={{ case_study_name: cs.client, page_type: data.pageType }}
                  className="group block h-full"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-near-black transition-all duration-300 hover:border-beast-pink/50 hover:shadow-[0_0_50px_rgba(255,17,152,0.16)]">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={cs.image}
                        alt={`${cs.client} campaign work`}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <p className="led-label absolute bottom-3 left-4 text-beast-pink">{cs.client}</p>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-display text-4xl font-black leading-none text-beast-yellow">{cs.result}</p>
                      <p className="led-label mt-2 text-white/50">{cs.resultLabel}</p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">{cs.proves}</p>
                      <span className="led-label mt-5 inline-flex items-center gap-2 text-beast-pink transition-all group-hover:gap-3.5 group-hover:text-white">
                        View Case Study →
                      </span>
                    </div>
                  </article>
                </TrackedLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SEO / who-we-are (keyword-bearing prose) ═══ */}
      {data.seo && (
        <section className="border-t led-rule bg-off-white py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-20">
            <Reveal><Label>{data.seo.eyebrow}</Label></Reveal>
            <div className="mt-7 flex flex-col gap-8">
              {data.seo.items.map((it, i) => (
                <Reveal key={i} delay={i * 60}>
                  {it.level === "h2" ? (
                    <h2 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-beast-black lg:text-3xl">{it.heading}</h2>
                  ) : (
                    <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-beast-black">{it.heading}</h3>
                  )}
                  <p className="mt-3 max-w-2xl leading-relaxed text-black/65">{it.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ FAQ (light) ═══ */}
      <section className="border-t led-rule bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-20">
          <Reveal className="mb-10 text-center">
            <div className="flex justify-center">
              <Label>Common questions</Label>
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-beast-black lg:text-5xl">
              Before You Book.
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-black/10 bg-off-white px-6">
              <FaqAccordion faqs={data.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA (dark) ═══ */}
      <section className="relative overflow-hidden bg-near-black py-16 text-white lg:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 55% 60% at 50% 45%, rgba(255,17,152,0.12) 0%, transparent 70%)" }}
        />
        <span className="led-cross text-white/20" style={{ top: 40, left: 40 }} aria-hidden="true" />
        <span className="led-cross text-white/20" style={{ bottom: 40, right: 40 }} aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-20">
          <Reveal>
            <h2 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight lg:text-6xl">
              {data.finalHeadingPre} <span>{data.finalHeadingAccent}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">{data.finalCopy}</p>
            <div className="mt-9 flex justify-center">
              <DiagnosticCTA label={data.primaryCta} location="final" pageType={data.pageType} variant="pink" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
