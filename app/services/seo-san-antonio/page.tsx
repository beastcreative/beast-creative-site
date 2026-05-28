import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import IconButton from "@/components/ui/IconButton";

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

const services = [
  { title: "Technical SEO Audit", desc: "We find every indexing issue, Core Web Vitals failure, and crawl error killing your rankings — then fix them." },
  { title: "Keyword & Topic Strategy", desc: "We identify the exact terms your customers search in San Antonio and build a content strategy around them." },
  { title: "On-Page Optimization", desc: "Title tags, meta descriptions, header structure, schema markup, internal linking — every page optimized." },
  { title: "Local SEO", desc: "Google Business Profile, local citations, and geo-targeted content to dominate San Antonio search results." },
  { title: "Answer Engine Optimization (AEO)", desc: "Structure your content to be cited by ChatGPT, Perplexity, and Google AI Overviews — the new search frontier." },
  { title: "Monthly Reporting", desc: "Real rankings, real traffic, real revenue attribution. No vanity metrics, no pie charts that don't explain anything." },
];

const faqItems = [
  { q: "How long does SEO take to work in San Antonio?", a: "Local SEO results in San Antonio typically start showing within 60–90 days for low-competition terms and 4–6 months for more competitive keywords. We prioritize quick wins first — fixing technical issues and optimizing existing pages — before building new content." },
  { q: "What is AEO and why does it matter?", a: "AEO (Answer Engine Optimization) is structuring your content so AI tools like ChatGPT, Perplexity, and Google AI Overviews reference your brand in their answers. An estimated 30%+ of searches now go to AI tools first. If you're not showing up there, you're invisible to a growing segment of your market." },
  { q: "Do you only do SEO for San Antonio businesses?", a: "No — we work with businesses across the US. But San Antonio local SEO is a specific specialty. We understand the market, the competition, and the search behavior in the SA metro." },
  { q: "How much does SEO cost?", a: "Our SEO retainers start at $1,500/month for local San Antonio businesses and scale from there depending on competition, content needs, and scope. We don't lock you in long-term — we earn your business month to month." },
  { q: "Can you help with both Google and AI search?", a: "Yes — that's what makes Beast different from most San Antonio SEO agencies. We offer both traditional SEO and AEO in one integrated strategy. You don't need two agencies or two strategies." },
];

export default function SEOSanAntonioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-beast-black overflow-hidden">
        <div className="absolute inset-0 bg-beast-black" />
        <div className="hero-ambient-glow" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 pt-28 pb-20 lg:pt-40 lg:pb-28 w-full">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-6">SEO Agency · San Antonio, TX</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-display text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-none">
              Rank in Google.<br />
              <span className="text-beast-yellow">Get Found by AI.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-body-lead text-gray-300 max-w-2xl mb-10">
              Beast Creative is San Antonio&apos;s only agency offering both traditional SEO and Answer Engine Optimization (AEO) — so you show up in Google search results and in AI tools like ChatGPT, Perplexity, and Gemini.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Get a Free SEO Audit</IconButton>
              <IconButton href="/services/seo-aeo" icon="eye" variant="ghost">See Our SEO + AEO Service</IconButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-beast-yellow py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-beast-black text-sm font-bold">
            <span>✓ Google rankings + AI citations</span>
            <span>✓ Local San Antonio SEO specialists</span>
            <span>✓ 11.6x email CTR from organic (Sweet Sensi)</span>
            <span>✓ 500%+ MRR via SEO alone</span>
            <span>✓ No long-term contracts</span>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">What We Do</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-beast-black tracking-normal">
              SEO That Covers Every Channel.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                  <h3 className="font-display text-lg font-bold text-beast-black mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF — Sweet Sensi */}
      <section className="bg-beast-black py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="section-eyebrow text-beast-pink mb-4">Real Results</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
                500%+ MRR Growth. Zero Paid Ads.
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Sweet Sensi sells CBD products. Google won&apos;t run their ads. Facebook bans most CBD promotion. They came to us with a product people wanted and zero digital presence.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We built a full SEO foundation, created organic social content around wellness topics, and structured everything for AI search. The result: 566% MRR growth, 9.5% email click rate (11.6x industry average), and zero dependency on paid advertising.
              </p>
              <blockquote className="border-l-2 border-beast-pink pl-4">
                <p className="text-gray-300 italic text-sm leading-relaxed">&ldquo;Beast improved our monthly recurring revenue — it jumped by 566%, thanks to their SEO and social media strategy. It&apos;s the most impactful marketing investment we&apos;ve made.&rdquo;</p>
                <cite className="text-beast-pink text-xs font-semibold mt-2 block">— Sweet Sensi</cite>
              </blockquote>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "566%", label: "MRR Growth", sub: "Sweet Sensi, via SEO" },
                  { stat: "9.5%", label: "Email click rate", sub: "vs 0.82% industry avg" },
                  { stat: "11.6x", label: "Industry benchmark", sub: "Email CTR" },
                  { stat: "$0", label: "Paid ad spend", sub: "100% organic" },
                ].map((item) => (
                  <div key={item.stat} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                    <div className="font-display text-3xl font-black text-beast-yellow mb-1">{item.stat}</div>
                    <div className="text-sm font-semibold text-white mb-1">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-12">
            <p className="section-eyebrow text-beast-pink mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold text-beast-black tracking-normal">
              SEO Questions, Answered.
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <AnimatedSection key={faq.q} delay={i * 0.06}>
                <details className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-display font-semibold text-beast-black text-base select-none">
                    {faq.q}
                    <svg className="w-5 h-5 text-beast-pink shrink-0 ml-4 transition-transform duration-200 group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
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

      {/* CTA */}
      <section className="bg-near-black py-16 lg:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">San Antonio SEO Agency</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-normal mb-6">
              Ready to Rank in Google and AI Search?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free SEO audit. We&apos;ll show you exactly where you&apos;re leaving organic traffic on the table — no pitch, no commitment.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">Get My Free SEO Audit</IconButton>
            <p className="text-gray-600 text-sm mt-4">Or call/text: <a href="sms:+12103320567" className="text-beast-pink hover:underline">(210) 332-0567</a></p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
