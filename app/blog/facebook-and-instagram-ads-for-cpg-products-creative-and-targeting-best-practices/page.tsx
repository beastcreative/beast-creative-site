import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/blog/facebook-and-instagram-ads-for-cpg-products-creative-and-targeting-best-practices" },
  title: "Facebook and Instagram Ads for CPG Products: Creative and Targeting Best Practices",
  description:
    "Learn how to build Facebook and Instagram campaigns that convert CPG consumers, from video hooks and UGC strategies to advanced targeting and seasonal campaign optimization.",
};

const faqs = [
  {
    question: "Why is advertising CPG products on Facebook and Instagram different from other categories?",
    answer: "CPG consumers aren't actively problem-solving when they see your ad. They're browsing entertainment. You're interrupting a habit (not solving a problem), and you need to break through with content that earns attention before it sells. Additionally, most CPG purchases happen in stores, creating an attribution gap that requires dedicated measurement strategies.",
  },
  {
    question: "Does UGC really outperform professional creative for CPG on social?",
    answer: "Often yes, especially on Instagram and TikTok. Structured UGC (where you give creators light brand guidelines but let them produce in their natural style) consistently outperforms both fully polished brand content and unguided UGC. It carries authenticity signals that professional ads don't.",
  },
  {
    question: "What's the best video structure for CPG social ads?",
    answer: "Hook (0 to 3 seconds) to create curiosity or show an immediate benefit, Problem/Solution (3 to 8 seconds) showing a relatable challenge with your product as the answer, Proof (8 to 12 seconds) with results or testimonials, and CTA (12 to 15 seconds) with a clear next step. Most brands waste the opening 3 seconds: that's where campaigns are won or lost.",
  },
  {
    question: "How should CPG brands target on Facebook and Instagram?",
    answer: "Move beyond basic demographics. Stack interests to build qualified segments: rather than 'fitness,' combine 'meal prep,' 'time management,' and 'health supplements.' Build lookalike audiences from your highest-value customers, not just website visitors. Test broad targeting and let Facebook's algorithm find your buyers.",
  },
  {
    question: "How do you handle iOS attribution changes for CPG brands?",
    answer: "Prioritize first-party data collection and post-purchase surveys asking how customers discovered your brand. Use Conversions API alongside the pixel for more complete event data. Track brand search volume as a proxy for awareness. Accept that some attribution is permanently lost and focus on blended efficiency metrics rather than platform-reported ROAS alone.",
  },
];

export default function FacebookInstagramPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Facebook and Instagram Ads for CPG Products: Creative and Targeting Best Practices",
            description: "Learn how to build Facebook and Instagram campaigns that convert CPG consumers, from video hooks and UGC strategies to advanced targeting and seasonal campaign optimization.",
            datePublished: "2025-08-14",
            author: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
            publisher: { "@type": "Organization", name: "Beast Creative Agency", url: "https://beastcreativeagency.com" },
          }),
        }}
      />

      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                Social Media Ads
              </span>
              <span className="text-xs text-[#888888]">August 14, 2025 · 10 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              Facebook and Instagram Ads for CPG Products:{" "}
              <span className="text-beast-pink">Creative and Targeting Best Practices</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              CPG ads on social must earn attention before they sell. Consumers are scrolling for entertainment, not solutions. Here&apos;s the creative and targeting framework that converts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e53537149-1-1024x585.png"
                  alt="Facebook and Instagram ads for CPG brands"
                  width={1024}
                  height={585}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The CPG Social Media Challenge</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                CPG brands face a distinct obstacle on social platforms: consumers aren&apos;t actively problem-solving when they see your ad. They&apos;re consuming entertainment. You&apos;re not meeting intent. You&apos;re interrupting a habit. Research consistently shows audiences respond better to platform-native content than overtly promotional material. UGC-style content frequently outperforms professional product photography.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                The purchasing dynamic adds another layer: most CPG products involve short consideration periods but extended repurchase cycles. Someone who sees an energy drink ad today won&apos;t need another purchase for weeks, requiring a fundamentally different approach than direct-response advertising for high-consideration products.
              </p>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Creative Best Practices That Drive CPG Conversions</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Lead With Benefits, Not Features</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                &quot;Fuel your 6 AM workout without the afternoon crash&quot; converts better than &quot;Contains advanced amino acid technology.&quot; Launch videos with end results, not products. Use conversational customer language, not marketing terminology. Emphasize emotional outcomes over technical attributes.
              </p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Video Structure That Actually Converts</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">The opening 3 seconds determine campaign success. Most CPG brands waste this interval with logo animations. Instead:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Hook (0 to 3 seconds): Generate curiosity or demonstrate an immediate benefit",
                  "Problem/Solution (3 to 8 seconds): Present a relatable challenge with your product as the answer",
                  "Proof (8 to 12 seconds): Display results, testimonials, or demonstrations",
                  "CTA (12 to 15 seconds): Clear next step with urgency",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e53e3cbdb-1.png"
                  alt="CPG social media targeting strategies"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Platform-Specific Creative</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">Facebook and Instagram demand different creative despite reaching similar audiences:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Facebook: longer-form educational content, product-as-solution framing, detailed explanations",
                  "Instagram: instant visual impact, lifestyle-focused material, aspirational integration",
                  "Both: platform-native look, not transplanted print advertising",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Advanced Targeting Strategies</h2>
              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Interest Stacking for Precision Targeting</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">
                Single interests create excessively broad audiences. Stack them to build qualified segments. Rather than targeting &quot;fitness,&quot; combine &quot;meal prep,&quot; &quot;time management,&quot; and &quot;health supplements&quot; to find their intersection.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Beauty Products: skincare routines + anti-aging + premium beauty brands",
                  "Snack Foods: healthy eating + busy lifestyle + specific dietary preferences",
                  "Beverages: energy + productivity + specific activities or sports",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2">Lookalike Audiences That Actually Work</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Don&apos;t build lookalikes from website visitors: they demonstrated interest, not purchase behavior. Build from your highest-value customer segments: repeat purchasers, above-average spenders, or LTV-qualified customers. These seed audiences produce significantly better-performing lookalikes.
              </p>

              <div className="rounded-2xl overflow-hidden mb-10" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/assets/blog/contentcraft-6944e54730dd0-1.png"
                  alt="CPG seasonal campaign strategy on social media"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Budget Distribution and Seasonal Strategy</h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">Allocate budgets as follows:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "60% to proven winners (campaigns hitting target ROAS)",
                  "30% for scaling successful campaigns to new audiences",
                  "10% for completely novel approaches and creative experiments",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#4A4A4A] leading-relaxed mb-4">Align seasonal campaigns with retail calendars. Category-specific patterns to plan around:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Health and wellness products: peak January, September, and pre-summer",
                  "Food and beverages: holidays, weather shifts, and cultural events",
                  "Beauty products: fashion seasons and special occasion calendars",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed">
                    <span className="text-beast-pink font-bold shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-beast-black rounded-2xl p-8 mb-8">
                <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-3">Beast Creative Agency</p>
                <p className="text-[#C8C8C8] text-sm leading-relaxed mb-4">
                  We&apos;ve run Facebook and Instagram campaigns for CPG brands including Sun-Bird Seasonings, Williams Foods, and Sweet Sensi, generating hundreds of thousands of consumer entries and significant revenue growth through data-driven creative and targeting.
                </p>
                <IconButton href="/work" icon="arrow">See Our CPG Work</IconButton>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-section-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="text-beast-pink text-xs font-bold uppercase tracking-widest mb-3 text-center">FAQ</p>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-10 text-center">Common Questions</h2>
            <FaqAccordion faqs={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* RELATED POSTS */}
      <section className="bg-section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-beast-black mb-8">More From the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="/blog/ai-content-production-cpg-brands" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">AI Marketing</span>
                  <span className="text-xs text-[#717171]">5 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">AI Content Production for CPG Brands</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">How CPG brands can create 30x more content without 30x the budget using AI-powered content pipelines. Includes Beast&apos;s a</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">February 22, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/amazon-advertising-for-cpg-brands-ppc-strategies-to-win-the-buy-box" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">Amazon Ads</span>
                  <span className="text-xs text-[#717171]">9 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Amazon Advertising for CPG Brands: PPC Strategies to Win the Buy Box</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">The Buy Box drives 82% of Amazon sales. Learn how CPG brands can use Sponsored Products, Sponsored Brands, and strategic</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">July 11, 2025</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-ad-creative-that-converts-testing-iteration-and-best-practices" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Ad Creative That Converts: Testing, Iteration, and Best Practices</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Learn how to build a systematic CPG creative testing framework, from defining creative buckets to scaling winning eleme</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">December 15, 2025</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to Build CPG Campaigns That Actually Convert?
            </h2>
            <p className="text-[#C8C8C8] mb-8">
              Beast builds data-driven Facebook and Instagram campaigns for CPG brands: creative that earns attention and targeting that finds buyers.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
