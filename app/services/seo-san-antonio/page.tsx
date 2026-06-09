import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO Agency San Antonio | Google Rankings + AI Search | Beast Creative",
  description:
    "San Antonio SEO agency specializing in Google rankings AND AI search visibility (ChatGPT, Perplexity, Gemini). Real results, named clients. (210) 332-0567",
  alternates: { canonical: "https://beastcreativeagency.com/services/seo-san-antonio" },
  openGraph: {
    title: "SEO Agency San Antonio | Beast Creative Agency",
    description: "San Antonio SEO that ranks in Google and gets cited by AI. Traditional SEO + AEO from one team.",
    url: "https://beastcreativeagency.com/services/seo-san-antonio",
    type: "website",
  },
};

const proofPoints = [
  "Google rankings + AI citations",
  "Local San Antonio SEO specialists",
  "11.6x email CTR from organic (Sweet Sensi)",
  "500%+ MRR via SEO alone",
  "No long-term contracts",
];

const services = [
  { title: "Technical SEO Audit", desc: "We find every indexing issue, Core Web Vitals failure, and crawl error killing your rankings — then fix them." },
  { title: "Keyword & Topic Strategy", desc: "We identify the exact terms your customers search in San Antonio and build a content strategy around them." },
  { title: "On-Page Optimization", desc: "Title tags, meta descriptions, header structure, schema markup, internal linking — every page optimized." },
  { title: "Local SEO", desc: "Google Business Profile, local citations, and geo-targeted content to dominate San Antonio search results." },
  { title: "Answer Engine Optimization (AEO)", desc: "Structure your content to be cited by ChatGPT, Perplexity, and Google AI Overviews — the new search frontier." },
  { title: "Monthly Reporting", desc: "Real rankings, real traffic, real revenue attribution. No vanity metrics, no pie charts that don't explain anything." },
];

const stats = [
  { stat: "566%", label: "MRR Growth", sub: "Sweet Sensi, via SEO" },
  { stat: "9.5%", label: "Email click rate", sub: "vs 0.82% industry avg" },
  { stat: "11.6x", label: "Industry benchmark", sub: "Email CTR" },
  { stat: "$0", label: "Paid ad spend", sub: "100% organic" },
];

const faqItems = [
  { question: "How long does SEO take to work in San Antonio?", answer: "Local SEO results in San Antonio typically start showing within 60–90 days for low-competition terms and 4–6 months for more competitive keywords. We prioritize quick wins first — fixing technical issues and optimizing existing pages — before building new content." },
  { question: "What is AEO and why does it matter?", answer: "AEO (Answer Engine Optimization) is structuring your content so AI tools like ChatGPT, Perplexity, and Google AI Overviews reference your brand in their answers. An estimated 30%+ of searches now go to AI tools first. If you're not showing up there, you're invisible to a growing segment of your market." },
  { question: "Do you only do SEO for San Antonio businesses?", answer: "No — we work with businesses across the US. But San Antonio local SEO is a specific specialty. We understand the market, the competition, and the search behavior in the SA metro." },
  { question: "How much does SEO cost?", answer: "Our SEO retainers start at $1,500/month for local San Antonio businesses and scale from there depending on competition, content needs, and scope. We don't lock you in long-term — we earn your business month to month." },
  { question: "Can you help with both Google and AI search?", answer: "Yes — that's what makes Beast different from most San Antonio SEO agencies. We offer both traditional SEO and AEO in one integrated strategy. You don't need two agencies or two strategies." },
];

const relatedServices = [
  { href: "/services/web-design-san-antonio", title: "Web Design San Antonio", desc: "Custom Next.js + Shopify builds, Lighthouse 90+ →" },
  { href: "/services/logo-design-san-antonio", title: "Logo Design San Antonio", desc: "Custom logos + full brand identity →" },
  { href: "/services/branding", title: "Branding Agency San Antonio", desc: "Brand naming, identity systems, voice →" },
];

const Check = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function SEOSanAntonioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "SEO Agency San Antonio", description: metadata.description as string, url: "https://beastcreativeagency.com/services/seo-san-antonio" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} />

      {/* HERO */}
      <section className="relative bg-beast-black pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">SEO Agency · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-display-hero text-white max-w-4xl mb-6">
              Rank in Google.<br />
              <span className="text-beast-pink">Get Found by AI.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl mb-10">
              Beast Creative is San Antonio&apos;s only agency offering both traditional SEO and Answer Engine Optimization (AEO) — so you show up in Google search results and in AI tools like ChatGPT, Perplexity, and Gemini.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer">Get a Free SEO Audit</IconButton>
              <IconButton href="/services/seo-aeo" variant="ghost">See Our SEO + AEO Service</IconButton>
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

      {/* SERVICES GRID */}
      <section className="bg-section-offwhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-14 max-w-3xl">
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h2 className="text-display-section text-beast-black">SEO That Covers Every Channel.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-light-border">
            {services.map((item, i) => (
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

      {/* PROOF — Sweet Sensi */}
      <section className="bg-beast-black py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Real Results</p>
              <h2 className="text-display-section text-white mb-6">500%+ MRR Growth. Zero Paid Ads.</h2>
              <p className="text-[#C8C8C8] leading-relaxed mb-6">
                Sweet Sensi sells CBD products. Google won&apos;t run their ads. Facebook bans most CBD promotion. They came to us with a product people wanted and zero digital presence.
              </p>
              <p className="text-[#888888] leading-relaxed mb-8">
                We built a full SEO foundation, created organic social content around wellness topics, and structured everything for AI search. The result: 566% MRR growth, 9.5% email click rate (11.6x industry average), and zero dependency on paid advertising.
              </p>
              <blockquote className="rounded-xl border border-beast-pink/20 bg-beast-pink/5 p-5">
                <p className="text-[#C8C8C8] italic text-sm leading-relaxed">&ldquo;Beast improved our monthly recurring revenue — it jumped by 566%, thanks to their SEO and social media strategy. It&apos;s the most impactful marketing investment we&apos;ve made.&rdquo;</p>
                <cite className="text-beast-pink text-xs font-semibold mt-3 block not-italic">— Sweet Sensi</cite>
              </blockquote>
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

      {/* FAQ */}
      <section className="bg-section-offwhite py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="mb-10">
            <p className="section-eyebrow text-beast-pink mb-4">FAQ</p>
            <h2 className="text-display-section text-beast-black">SEO Questions, Answered.</h2>
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
            <p className="section-eyebrow text-beast-pink mb-4">San Antonio SEO Agency</p>
            <h2 className="text-display-section text-white mb-6">Ready to Rank in Google and AI Search?</h2>
            <p className="text-[#C8C8C8] text-lg mb-8">
              Book a free SEO audit. We&apos;ll show you exactly where you&apos;re leaving organic traffic on the table &mdash; no pitch, no commitment.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer">Get My Free SEO Audit</IconButton>
            <p className="text-[#888888] text-sm mt-4">Or call/text: <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a></p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
