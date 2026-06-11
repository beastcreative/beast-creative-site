import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "Amazon vs. DTC for CPG Brands: Which Channel Should You Prioritize?",
  description:
    "The choice between Amazon and direct-to-consumer (DTC) channels can make or break a CPG brand&apos;s growth trajectory. While 73% of CPG brands sell on Amazon,",
};

const faqs = [
  {
    question: "What are the margin differences between selling on Amazon vs. DTC for a CPG brand?",
    answer: "Amazon typically nets CPG brands 25–40% of retail price after fees, advertising, and fulfillment — comparable to selling through a traditional retailer. DTC gross margins are typically 55–70% but require customer acquisition cost investment that often brings net contribution margins closer to Amazon's in the early years.",
  },
  {
    question: "Which channel is better for launching a new CPG product — Amazon or DTC?",
    answer: "Amazon is better for validating product-market fit quickly because the built-in search intent means you can reach purchase-ready customers without building an audience first. DTC is better for building brand relationship and collecting customer data, but requires significant upfront marketing investment to drive traffic.",
  },
  {
    question: "What is the biggest strategic risk of prioritizing Amazon over DTC for a CPG brand?",
    answer: "Amazon controls the customer relationship entirely — you have no access to buyer emails, no ability to retarget, and Amazon can suppress your listing or introduce a competing private label at any time. Brands that grow almost exclusively on Amazon find themselves in a weak negotiating position and vulnerable to algorithmic changes.",
  },
  {
    question: "Can a CPG brand successfully run both Amazon and DTC without cannibalizing either channel?",
    answer: "Yes — the most effective approach is using Amazon for trial and discovery while DTC converts one-time buyers into subscribers and loyal customers. Price parity between channels is critical; if your DTC site is priced higher than Amazon, most customers will buy on Amazon even after discovering you elsewhere.",
  },
];

export default function AmazonDtcCpgBrandsChannelPrioritizePost() {
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
            headline: "Amazon vs. DTC for CPG Brands: Which Channel Should You Prioritize?",
            description: "The choice between Amazon and direct-to-consumer (DTC) channels can make or break a CPG brand&apos;s growth trajectory. While 73% of CPG brands sell on Amazon,",
            datePublished: "2026-01-14",
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
                CPG Marketing
              </span>
              <span className="text-xs text-[#888888]">January 14, 2026 · 7 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              Amazon vs. DTC for CPG Brands:{" "}
              <span className="text-beast-pink">Which Channel Should You Prioritize?</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              The choice between Amazon and direct-to-consumer (DTC) channels can make or break a CPG brand’s growth trajectory. While 73% of CPG brands sell on Amazon, those prioritizing DTC channels report 40% higher profit margins. The question isn’t whether both channels matter—it’s about finding the right balance for your specific brand goals and market position.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Understanding the Amazon vs. DTC Landscape for CPG Brands</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Consumer packaged goods (CPG) brands face a critical decision that affects everything from profit margins to customer relationships. Amazon offers unparalleled reach and established trust, while DTC channels provide control and higher margins. Here’s the thing—most brands treat this as an either-or decision when it should be about strategic prioritization.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The reality is that each channel serves different purposes in your overall growth strategy. Amazon excels at discovery and volume, while DTC channels build brand loyalty and capture valuable customer data.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The Amazon Advantage: Scale and Discovery</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Massive Market Reach</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Amazon’s dominance in e-commerce is undeniable. With over 300 million active users and Prime membership exceeding 200 million globally, the platform offers CPG brands immediate access to a vast customer base. For new or lesser-known brands, this visibility is invaluable.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The platform’s search-driven discovery means customers actively looking for your product category will find you. This organic discovery is particularly powerful for CPG brands since many purchases happen when consumers search for specific product types rather than brand names.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Built-in Trust and Convenience</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Amazon’s reputation removes friction from the buying process. Customers trust the platform’s return policy, shipping reliability, and customer service. This trust translates to higher conversion rates, especially for first-time buyers of your brand.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The convenience factor can’t be overstated. Prime shipping, easy reordering through Subscribe &amp; Save, and integration with Alexa make repeat purchases effortless. For CPG brands where repeat purchase frequency drives success, this convenience becomes a significant advantage.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Fulfillment and Logistics Support</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Fulfillment by Amazon (FBA) handles storage, packaging, and shipping, allowing brands to scale without massive logistics investments. This is particularly valuable for smaller CPG brands that lack the infrastructure for efficient direct shipping.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The logistics support extends beyond fulfillment. Amazon’s advertising platform, customer reviews system, and analytics provide tools that would be expensive to replicate independently.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The DTC Channel Benefits: Control and Profitability</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Higher Profit Margins</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">DTC channels eliminate Amazon’s fees, which can range from 15-45% depending on your category and fulfillment method. For CPG brands with tight margins, this difference significantly impacts profitability.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">You also avoid the downward price pressure common on Amazon. Without constant competitor price comparisons and algorithmic pressure to match lowest prices, brands can maintain premium positioning more easily.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Customer Data and Relationship Control</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Most businesses miss this crucial advantage: DTC channels provide direct access to customer data. You know who’s buying, when they’re buying, and can track their complete journey. This data enables personalized marketing, better inventory planning, and product development insights.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The relationship control extends to communication. You can email customers directly, create loyalty programs, and build community around your brand—something impossible when Amazon owns the customer relationship.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Brand Experience Control</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Your DTC channel is your brand’s digital flagship. You control every aspect of the customer experience, from product presentation to checkout flow. This control is essential for premium CPG brands where brand perception directly impacts pricing power.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Content marketing opportunities also expand with DTC channels. You can educate customers about product benefits, share usage tips, and build brand authority through valuable content.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Key Factors for Channel Prioritization</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Brand Maturity and Recognition</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Newer CPG brands often benefit from Amazon’s discovery engine and built-in traffic. Established brands with strong recognition can drive traffic to DTC channels more effectively.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Consider your brand’s search volume. If people actively search for your brand name, DTC prioritization makes more sense. If customers primarily discover you through category searches, Amazon’s advantage grows.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Product Characteristics</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Certain product types perform better on specific channels:</p>

              <ul className="space-y-3 mb-6">
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[#4A4A4A] text-sm leading-relaxed"><strong className="text-beast-black">Commodity products:</strong> Amazon’s price comparison makes differentiation challenging</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[#4A4A4A] text-sm leading-relaxed"><strong className="text-beast-black">Premium products:</strong> DTC channels better support premium positioning and storytelling</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[#4A4A4A] text-sm leading-relaxed"><strong className="text-beast-black">Subscription-friendly products:</strong> DTC allows for better subscription experiences and customer lifetime value optimization</span>
                </li>
                <li className="flex gap-3">
                  <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[#4A4A4A] text-sm leading-relaxed"><strong className="text-beast-black">Products requiring education:</strong> DTC provides space for detailed product information and usage guidance</span>
                </li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Customer Acquisition Costs</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Compare the true cost of customer acquisition across channels. Amazon’s fees are transparent, but DTC customer acquisition costs can vary widely based on your marketing effectiveness.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Factor in lifetime value differences. DTC customers often have higher lifetime values due to better retention and upselling opportunities, even if initial acquisition costs are higher.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Operational Capabilities</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Assess your team’s capabilities honestly. DTC success requires skills in:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Digital marketing and paid advertising</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Customer service and support</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Website management and optimization</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Inventory management and fulfillment</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Email marketing and automation</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Amazon requires different skills focused on marketplace optimization, advertising within Amazon’s ecosystem, and inventory management within their system.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Strategic Approaches by Business Stage</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Early-Stage CPG Brands (0-2 Years)</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">For new brands, Amazon often provides the fastest path to revenue and market validation. The platform’s built-in traffic and trust reduce barriers to first sales.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Use Amazon to:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Test product-market fit quickly</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Generate initial customer reviews and social proof</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Understand customer search behavior and preferences</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Build cash flow to fund DTC development</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Start building your DTC presence simultaneously, but don’t expect immediate results. Focus on creating an excellent website and beginning email list building.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Growth-Stage CPG Brands (2-5 Years)</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">This is where the dual-channel approach becomes critical. You should be actively building both channels while identifying which performs better for your specific situation.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Key strategies include:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> A/B testing different customer acquisition approaches</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Developing channel-specific marketing messages</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Building systems to track customer lifetime value by acquisition channel</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Investing in customer retention programs for DTC customers</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Established CPG Brands (5+ Years)</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Mature brands should prioritize based on strategic goals rather than just revenue. If you’re focused on profitability and customer data, DTC deserves priority. If growth and market share are the primary goals, Amazon might deserve more focus.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Consider using Amazon for customer acquisition and DTC for customer retention. This approach captures Amazon’s discovery benefits while maximizing customer lifetime value through direct relationships.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Measurement and Optimization Strategies</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Key Metrics for Amazon Channels</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Track metrics that reflect Amazon-specific success:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Organic ranking for target keywords</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Advertising Cost of Sales (ACoS)</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Buy Box winning percentage</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Customer review velocity and rating</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Inventory turnover rates</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Key Metrics for DTC Channels</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">DTC metrics should focus on long-term customer value:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Customer Lifetime Value (CLV)</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Customer Acquisition Cost (CAC)</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Repeat purchase rate and frequency</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Email engagement and conversion rates</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Website conversion rate by traffic source</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Cross-Channel Analysis</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Don’t analyze channels in isolation. Consider:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> How Amazon presence affects branded search volume</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Whether customers research on DTC sites but purchase on Amazon</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Cross-channel customer behavior and preferences</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Total brand impact rather than channel-specific metrics</li>
              </ul>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Common Pitfalls to Avoid</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Channel Conflict Issues</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Avoid creating conflicts between channels through inconsistent pricing or positioning. Customers notice when your Amazon price is significantly different from your DTC price, and it can damage brand trust.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Instead, create value differentiation. Offer exclusive products, bundles, or services through your DTC channel that justify different positioning.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Resource Spreading Too Thin</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Many brands try to do everything at once and end up doing nothing well. It’s better to excel in one channel before expanding than to be mediocre in both.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Start with your priority channel and achieve consistent success before significantly investing in the second channel.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Ignoring Channel-Specific Best Practices</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Each channel has unique requirements. Amazon success requires understanding SEO within their platform, managing inventory levels, and optimizing for their algorithms. DTC success requires different skills in website optimization, email marketing, and customer service.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Don’t assume that success in one channel automatically translates to the other.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Making the Right Choice for Your Brand</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The decision between prioritizing Amazon or DTC channels isn’t permanent. Your priority should shift based on business stage, market conditions, and strategic goals.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Here’s what works: Start with an honest assessment of your current capabilities, brand recognition, and business goals. If you need cash flow and market validation, Amazon might be your priority. If you have strong brand recognition and want to maximize profitability, DTC could be the better focus.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The most successful CPG brands we work with don’t choose one channel forever. They make strategic decisions about where to focus their energy and resources based on current business needs, then adapt as those needs change.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Your channel strategy should support your overall business strategy, not drive it. Whether you prioritize Amazon’s scale or DTC’s control, the key is executing your chosen approach with focus and expertise.</p>

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
              <a href="/blog/cpg-ad-creative-that-converts-testing-iteration-and-best-practices" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Ad Creative That Converts: Testing, Iteration, and Best Practices</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Learn how to build a systematic CPG creative testing framework — from defining creative buckets to scaling winning eleme</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">December 15, 2025</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-sweepstakes-first-party-data-playbook" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">The CPG Sweepstakes Playbook: First-Party Data Strategy</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">How to design sweepstakes campaigns that build consumer databases retail buyers trust. Includes the exact framework behi</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">March 14, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/influencer-marketing-for-cpg-products-finding-and-working-with-content-creators" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG Marketing</span>
                  <span className="text-xs text-[#717171]">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Influencer Marketing for CPG Products: Finding and Working With Content Creators</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Nearly 92% of consumers trust recommendations from people they don&apos;t personally know over traditional advertising—a stat</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">February 16, 2026</span>
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
              Ready to Grow Your CPG Brand?
            </h2>
            <p className="text-[#C8C8C8] mb-8">
              Beast Creative Agency helps CPG brands build competitive advantages through strategic marketing, content, and brand development. Let&apos;s talk about what&apos;s possible for your brand.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
