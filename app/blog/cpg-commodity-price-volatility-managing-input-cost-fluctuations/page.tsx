import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Commodity Price Volatility: Managing Input Cost Fluctuations",
  description:
    "Raw material costs for consumer packaged goods jumped 23% in the past year alone, turning profit margins into moving targets for even the most established",
};

const faqs = [
  {
    question: "What is the most practical hedging strategy for a mid-size CPG brand facing commodity price swings?",
    answer: "Forward contracts with your primary ingredient suppliers — locking in price and volume 6–12 months out — are the most accessible hedging tool for brands without treasury departments. Formal commodity futures markets are typically too complex and capital-intensive for brands under $50M in revenue.",
  },
  {
    question: "How do you pass commodity cost increases to retail customers without losing shelf space?",
    answer: "Lead with data — present cost-build analysis showing the specific input cost increase and its direct margin impact before asking for a price increase. Timing price increases to coincide with category resets or new packaging introductions reduces buyer resistance because there is a visual rationale for the change.",
  },
  {
    question: "What reformulation strategies help CPG brands manage input cost volatility?",
    answer: "Reducing the fill weight or portion size (\"shrinkflation\") is the most common consumer-packaged response, but it carries reputational risk if consumers notice and publicize it. Substituting a lower-cost but functionally equivalent ingredient is lower visibility but requires careful consumer testing to ensure the product experience holds.",
  },
  {
    question: "How should CPG brands structure supplier contracts to protect against unexpected cost spikes?",
    answer: "Include a price escalation clause with a defined cap (e.g., no more than 5% increase per quarter without 60-day notice) and a corresponding de-escalation clause for when commodity prices fall — the latter is often skipped and costs brands significantly in down cycles. Index-linked pricing tied to a published commodity index is the most transparent and defensible structure.",
  },
];

export default function CpgCommodityPriceVolatilityInputCostPost() {
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
            headline: "CPG Commodity Price Volatility: Managing Input Cost Fluctuations",
            description: "Raw material costs for consumer packaged goods jumped 23% in the past year alone, turning profit margins into moving targets for even the most established",
            datePublished: "2026-01-15",
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
                CPG
              </span>
              <span className="text-xs text-[#888888]">January 15, 2026 · 6 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG Commodity Price Volatility:{" "}
              <span className="text-beast-pink">Managing Input Cost Fluctuations</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              Raw material costs for consumer packaged goods jumped 23% in the past year alone, turning profit margins into moving targets for even the most established brands. While commodity price swings have always existed, today’s volatility reaches unprecedented levels, demanding sophisticated strategies that go far beyond traditional cost management approaches.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Understanding the New Reality of Commodity Price Volatility</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The CPG industry faces a perfect storm of factors driving input cost fluctuations. Supply chain disruptions, geopolitical tensions, climate change impacts, and shifting consumer demands create a landscape where wheat prices can spike 40% in three months, or aluminum costs can double seemingly overnight.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Here’s what makes today’s volatility different: it’s not just about one commodity anymore. CPG companies now deal with synchronized price movements across multiple raw materials, from packaging materials to active ingredients. This interconnected volatility means traditional hedging strategies often fall short.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">The Ripple Effect on Brand Strategy</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Smart CPG leaders recognize that commodity price management isn’t just a procurement issue—it’s a marketing challenge. When input costs fluctuate dramatically, brands face tough decisions about pricing, positioning, and product formulation that directly impact consumer perception and market share.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Most businesses miss this connection between commodity management and brand equity. They treat cost fluctuations as purely financial problems, missing opportunities to strengthen customer relationships through transparent communication and innovative solutions.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Strategic Approaches to Input Cost Management</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Dynamic Pricing Models</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The days of set-and-forget pricing are over. Forward-thinking CPG companies now use dynamic pricing models that adjust based on input cost changes while maintaining competitive positioning. This approach requires:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Real-time cost tracking systems that monitor commodity prices across all inputs</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Automated pricing algorithms that factor in competitor responses and market conditions</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Clear communication strategies that explain price changes to retail partners and consumers</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Buffer zones that prevent constant price fluctuations from disrupting market relationships</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The key is building flexibility without appearing unstable. Successful brands establish pricing corridors that allow for adjustments while maintaining predictability for their retail partners.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Portfolio Diversification Strategies</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Smart CPG companies don’t just diversify their product lines—they diversify their commodity exposure. This means:</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Geographic Sourcing Spread: Working with suppliers across different regions reduces exposure to localized price shocks. When drought affects one region, alternative sources can maintain supply stability.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Commodity Substitution Planning: Developing formulations that can switch between similar raw materials gives companies flexibility when prices spike. For example, food manufacturers might alternate between different oils or sweeteners based on cost efficiency.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Vertical Integration Opportunities: Some companies find value in controlling critical parts of their supply chain, especially for unique or high-impact ingredients.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Financial Hedging and Risk Management</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Modern commodity hedging goes beyond basic futures contracts. Sophisticated CPG companies use:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Options strategies that provide price protection while maintaining upside potential</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Commodity swaps that exchange variable costs for fixed payments</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Weather derivatives for companies affected by climate-sensitive raw materials</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Currency hedging to manage foreign exchange impacts on imported commodities</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The reality is that no single hedging strategy works for every situation. The most effective approach combines multiple tools based on specific risk tolerance and business objectives.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Operational Excellence in Volatile Markets</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Demand Forecasting Integration</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Here’s what works: connecting commodity price forecasts with demand planning. When raw material costs are expected to rise, companies can adjust production schedules to build inventory at lower costs. When prices are falling, they can reduce inventory to avoid carrying high-cost materials.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">This integration requires sophisticated planning systems that can model multiple scenarios and adjust quickly as conditions change. The payoff comes in the form of improved margins and reduced waste.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Supplier Relationship Management</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Long-term supplier partnerships become even more valuable during volatile periods. Strong relationships provide:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Early warning systems about upcoming price changes</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Collaborative problem-solving when supply issues arise</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Preferential treatment during shortage periods</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Joint innovation opportunities to reduce commodity dependence</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The best CPG companies treat their key suppliers as strategic partners, sharing forecasts and market intelligence to mutual benefit.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Innovation as a Volatility Buffer</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Reformulation Strategies</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Product innovation becomes a powerful tool for managing input costs. This might surprise you, but some of the most successful cost management strategies come from R&amp;D departments, not procurement teams.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Effective reformulation strategies include:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Developing recipes that use lower-cost alternatives without compromising quality</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Creating concentrated formulas that reduce packaging and shipping costs</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Engineering products that use more stable, less volatile commodities</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Building flexibility into formulations to allow ingredient substitution</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Packaging Innovation</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Packaging represents a significant portion of CPG costs and offers substantial opportunities for volatility management. Smart companies explore:</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Material Optimization: Using less material through improved design or concentrating products to require smaller packages.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Alternative Materials: Developing packaging solutions that use different raw materials, especially renewable or recycled options that may have more stable pricing.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Multi-Use Designs: Creating packaging that serves multiple functions or can be easily recycled, adding consumer value while managing costs.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Technology Solutions for Cost Management</h2>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Predictive Analytics</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Advanced analytics help CPG companies anticipate commodity price movements and adjust strategies accordingly. Modern systems can analyze weather patterns, political developments, economic indicators, and historical trends to provide early warnings about potential price volatility.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">These tools work best when integrated with existing ERP systems, providing real-time insights that inform procurement, production, and pricing decisions.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Automation and Efficiency</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">When raw material costs rise, operational efficiency becomes even more important. Automated systems can help reduce waste, optimize production schedules, and minimize handling costs that compound commodity price impacts.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Smart manufacturing systems can adjust production parameters in real-time to maximize yield and minimize waste, providing crucial margin protection during cost spikes.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Communication and Brand Protection</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Here’s the thing about commodity volatility: how you communicate about it matters as much as how you manage it operationally. Successful CPG companies develop clear communication strategies that:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Explain price changes in terms customers understand</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Emphasize value delivered rather than just cost increases</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Provide alternatives or solutions that help customers manage their own budgets</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Maintain transparency about market conditions affecting the industry</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The goal is maintaining trust and loyalty even when prices must increase due to input cost pressures.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Building Organizational Resilience</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Managing commodity volatility requires organizational capabilities that extend beyond traditional procurement functions. Companies need:</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Cross-Functional Teams: Bringing together procurement, finance, marketing, and operations to make integrated decisions about cost management strategies.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Scenario Planning: Developing contingency plans for different volatility scenarios, from mild fluctuations to severe market disruptions.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Cultural Adaptability: Building organizational comfort with change and uncertainty, so teams can pivot quickly when market conditions shift.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Measuring Success in Volatile Markets</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Traditional cost management metrics may not tell the full story during volatile periods. Smart companies track:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Margin stability over time, not just absolute margin levels</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Market share maintenance during price adjustment periods</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Customer satisfaction scores during cost management initiatives</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Supply chain reliability metrics, not just cost efficiency</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Innovation pipeline strength for cost reduction opportunities</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The most important metric might be organizational learning: how quickly the company adapts to new volatility patterns and applies lessons from previous disruptions.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Conclusion</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Commodity price volatility isn’t going away—if anything, it’s becoming the new normal for CPG companies. The winners will be those who build systematic approaches to managing input cost fluctuations while maintaining strong brands and customer relationships.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Success requires more than just financial hedging or supplier negotiations. It demands integrated strategies that span operations, innovation, marketing, and organizational development. Companies that master this integration don’t just survive volatile markets—they use volatility as a competitive advantage.</p>

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
              <a href="/blog/cpg-regulatory-changes-staying-compliant-in-evolving-markets" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">7 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Regulatory Changes: Staying Compliant in Evolving Markets</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Federal regulatory shifts in the CPG industry have accelerated by 400% over the past three years, leaving many brands sc</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">January 17, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-counterfeit-products-protecting-your-brand-from-fraud" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Counterfeit Products: Protecting Your Brand from Fraud</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Global counterfeit trade reached $509 billion in 2019, with consumer packaged goods representing the largest target cate</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">January 16, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-supply-chain-disruptions-building-resilience-and-flexibility" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">9 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Supply Chain Disruptions: Building Resilience and Flexibility</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Recent data reveals that 73% of CPG companies experienced at least one major supply chain disruption in the past two yea</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">January 16, 2026</span>
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
