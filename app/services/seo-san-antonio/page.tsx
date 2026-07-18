import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";
import StatCounter from "@/components/ui/StatCounter";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Marquee from "@/components/ui/Marquee";
import { serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "SEO Agency San Antonio | Google Rankings + AI Search | Beast Creative",
  description:
    "San Antonio SEO agency specializing in Google rankings AND AI search visibility (ChatGPT, Perplexity, Gemini). Real results, named clients. (210) 332-0567",
  alternates: { canonical: "https://beastcreativeagency.com/services/seo-san-antonio" },
  openGraph: {
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
    title: "SEO Agency San Antonio | Beast Creative Agency",
    description: "San Antonio SEO that ranks in Google and gets cited by AI. Traditional SEO + AEO from one team.",
    url: "https://beastcreativeagency.com/services/seo-san-antonio",
    type: "website",
  },
};

const services = [
  { title: "Technical SEO Audit", desc: "We find every indexing issue, Core Web Vitals failure, and crawl error killing your rankings, then fix them." },
  { title: "Keyword & Topic Strategy", desc: "We identify the exact terms your customers search in San Antonio and build a content strategy around them." },
  { title: "On-Page Optimization", desc: "Title tags, meta descriptions, header structure, schema markup, internal linking: every page optimized." },
  { title: "Local SEO", desc: "Google Business Profile, local citations, and geo-targeted content to dominate San Antonio search results." },
  { title: "Answer Engine Optimization (AEO)", desc: "Structure your content to be cited by ChatGPT, Perplexity, and Google AI Overviews: the new search frontier." },
  { title: "Monthly Reporting", desc: "Real rankings, real traffic, real revenue attribution. No vanity metrics, no pie charts that don't explain anything." },
];

const faqItems = [
  { question: "How long does SEO take to work in San Antonio?", answer: "Local SEO results in San Antonio typically start showing within 60 to 90 days for low-competition terms and 4 to 6 months for more competitive keywords. We prioritize quick wins first, fixing technical issues and optimizing existing pages, before building new content." },
  { question: "What is AEO and why does it matter?", answer: "AEO (Answer Engine Optimization) is structuring your content so AI tools like ChatGPT, Perplexity, and Google AI Overviews reference your brand in their answers. An estimated 30%+ of searches now go to AI tools first. If you're not showing up there, you're invisible to a growing segment of your market." },
  { question: "Do you only do SEO for San Antonio businesses?", answer: "No, we work with businesses across the US. But San Antonio local SEO is a specific specialty. We understand the market, the competition, and the search behavior in the SA metro." },
  { question: "How much does SEO cost?", answer: "Our SEO retainers start at $1,500/month for local San Antonio businesses and scale from there depending on competition, content needs, and scope. We don't lock you in long-term. We earn your business month to month." },
  { question: "Can you help with both Google and AI search?", answer: "Yes, that's what makes Beast different from most San Antonio SEO agencies. We offer both traditional SEO and AEO in one integrated strategy. You don't need two agencies or two strategies." },
];

const relatedServices = [
  { href: "/services/web-design-san-antonio", title: "Web Design San Antonio", desc: "Custom Next.js + Shopify builds, Lighthouse 90+ →" },
  { href: "/services/logo-design-san-antonio", title: "Logo Design San Antonio", desc: "Custom logos + full brand identity →" },
  { href: "/services/branding", title: "Branding Agency San Antonio", desc: "Brand naming, identity systems, voice →" },
];

const marqueeItems = [
  "Google rankings + AI citations",
  "Local San Antonio SEO specialists",
  "11.6x email CTR from organic (Sweet Sensi)",
  "500%+ MRR via SEO alone",
  "No long-term contracts",
];

export default function SEOSanAntonioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema({ name: "SEO Agency San Antonio", description: metadata.description as string, url: "https://beastcreativeagency.com/services/seo-san-antonio" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-beast-black overflow-hidden">
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-24 lg:pt-40 lg:pb-32 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">SEO Agency · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-4xl mb-6 leading-tight">
              Rank in Google.{" "}
              <span className="text-beast-pink">Get Found by AI.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              Beast Creative is San Antonio&apos;s only agency offering both traditional SEO and Answer Engine Optimization (AEO), so you show up in Google search results and in AI tools like ChatGPT, Perplexity, and Gemini.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="/growth-assessment">Get a Free SEO Audit</IconButton>
              <IconButton href="/services/seo-aeo" variant="ghost">See Our SEO + AEO Service</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={566} suffix="%" label="MRR Growth" sublabel="Sweet Sensi, via SEO" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={9.5} decimals={1} suffix="%" label="Email click rate" sublabel="vs 0.82% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={11.6} decimals={1} suffix="x" label="Industry benchmark" sublabel="Email CTR" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0} prefix="$" label="Paid ad spend" sublabel="100% organic" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">SEO That Covers Every Channel.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
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

      {/* PROOF — Sweet Sensi */}
      <section className="bg-beast-black py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="section-eyebrow text-beast-pink mb-4">Real Results</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">500%+ MRR Growth. Zero Paid Ads.</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Sweet Sensi sells CBD products. Google won&apos;t run their ads. Facebook bans most CBD promotion. They came to us with a product people wanted and zero digital presence.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We built a full SEO foundation, created organic social content around wellness topics, and structured everything for AI search. The result: 566% MRR growth, 9.5% email click rate (11.6x industry average), and zero dependency on paid advertising.
              </p>
              <blockquote className="rounded-xl border border-beast-pink/20 bg-beast-pink/5 p-6">
                <p className="text-gray-300 italic leading-relaxed">&ldquo;Beast improved our monthly recurring revenue: it jumped by 566%, thanks to their SEO and social media strategy. It&apos;s the most impactful marketing investment we&apos;ve made.&rdquo;</p>
                <cite className="text-beast-pink text-sm font-semibold mt-3 block not-italic">Sweet Sensi</cite>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-beast-black tracking-normal">SEO Questions, Answered.</h2>
          </AnimatedSection>
          <div className="bg-white rounded-2xl border border-gray-100 px-6">
            <FaqAccordion faqs={faqItems} />
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-[#F5F5F5] py-16 lg:py-24">
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
            <p className="section-eyebrow text-beast-pink mb-4">San Antonio SEO Agency</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">Ready to Rank in Google and AI Search?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free SEO audit. We&apos;ll show you exactly where you&apos;re leaving organic traffic on the table. No pitch, no commitment.
            </p>
            <IconButton href="/growth-assessment">Get My Free SEO Audit</IconButton>
            <p className="text-gray-500 text-sm mt-4">Or call/text: <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a></p>
          </AnimatedSection>
        </div>
      </section>

      <Marquee items={marqueeItems} />
    </>
  );
}
