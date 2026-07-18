import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import IconButton from "@/components/ui/IconButton";
import SweetSensiHero from "@/components/ui/SweetSensiHero";
import TradingCard from "@/components/ui/TradingCard";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/work/sweet-sensi" },
  title: "Sweet Sensi CBD E-Commerce | 500%+ MRR Growth",
  description:
    "Beast Creative Agency grew Sweet Sensi's monthly recurring revenue by over 500% through a precision SEO and social media strategy in the highly regulated CBD industry, without relying on traditional paid advertising.",
};

export default function SweetSensiPage() {
  return (
    <>
      <SweetSensiHero />

      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={500} suffix="%+" label="MRR Growth" sublabel="e-commerce revenue" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={9.5} suffix="%" decimals={1} label="Email Click Rate" sublabel="vs 0.82% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={2} label="Channels Combined" sublabel="SEO + Social as one system" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={0} label="Paid Ad Dependency" sublabel="built to work without them" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Grow Sales in an Industry Where Most Marketing Roads Are Closed.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sweet Sensi came to Beast with a real problem: one that most CBD brands face and most agencies don&apos;t know how to solve. Their products were good. Their brand was compelling. But the CBD industry operates under some of the most restrictive advertising conditions in digital marketing.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Google won&apos;t run CBD ads. Facebook and Instagram ban most direct CBD product promotion. Traditional paid acquisition channels, the backbone of e-commerce growth for almost every other product category, were largely off the table.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-display font-bold text-beast-black text-sm mb-2">The Real Opportunity</p>
                  <p className="text-gray-600 text-sm leading-relaxed">The CBD market is one of the fastest-growing wellness categories in the US, but the brands that win aren&apos;t the ones with the biggest ad budgets. They&apos;re the ones that show up where consumers are looking, build genuine community, and earn trust in a category where consumers are understandably cautious. Beast had to build a marketing engine that worked without the most common tools. That constraint produced a strategy more durable, more cost-efficient, and more compounding than a standard paid approach would have been.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Product Line</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Elevated Edibles. Built to Stand Out.</h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Sweet Sensi&apos;s Elevated Edibles line, premium THC and CBD drinks crafted with full-spectrum rosin, gave Beast&apos;s content strategy something genuinely worth talking about. Products this distinct make every piece of organic content more credible. When the product is legitimately elevated, the marketing compounds faster.
                </p>
                <div className="flex flex-row items-start justify-center gap-8">
                  <div className="w-56 lg:w-64">
                    <TradingCard
                      front="/assets/sweet-sensi-can-melon.jpg"
                      back="/assets/sweet-sensi-can-purple.jpg"
                      alt="Sweet Sensi Elevated Edibles cans"
                      rotation={-4}
                      floatDelay="0s"
                      noFloat
                    />
                  </div>
                  <div className="w-56 lg:w-64">
                    <TradingCard
                      front="/assets/sweet-sensi-can-pineapple-a.jpg"
                      back="/assets/sweet-sensi-can-pineapple-b.jpg"
                      alt="Sweet Sensi Pineapple Kiwi Express"
                      rotation={3}
                      floatDelay="0.4s"
                      noFloat
                    />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-400 mt-6 md:hidden">Tap a card to flip it</p>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Strategy</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">When You Can&apos;t Buy Attention, You Have to Earn It.</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", label: "The Diagnosis", detail: "Beast started with a full audit of Sweet Sensi's digital presence: website technical health, content depth, keyword positioning, social media performance, and conversion funnel from traffic to purchase. The audit revealed the pattern Beast sees across most small e-commerce brands: significant organic search traffic being left on the table, social media presence without a clear content strategy, no tested messaging framework, and two channels that could work, SEO and organic social, being used without coordination." },
                    { step: "2", label: "The SEO Foundation", detail: "Beast built Sweet Sensi's SEO strategy around one core insight: CBD consumers are searchers, not browsers. When someone wants to try CBD for sleep, anxiety, pain, or wellness, they search. They research. They read. Beast delivered: technical optimization (speed, mobile, structured data), a keyword strategy around high-purchase-intent queries, content development building trust and depth, and domain authority signals that told search engines Sweet Sensi was legitimate, not a fly-by-night operation in a category full of low-quality players." },
                    { step: "3", label: "The Social Media Strategy", detail: "Social media for a CBD brand requires a completely different playbook. Direct product promotion is restricted on most platforms. Beast developed a content strategy built around wellness content that genuinely served Sweet Sensi's audience (sleep, stress, recovery) without hitting CBD advertising policy tripwires. Brand storytelling that built the trust CBD consumers need before they buy. User-generated content amplification within platform guidelines. Community building that converts, not just vanity follower counts." },
                    { step: "4", label: "The A/B Testing Engine", detail: "Beast ran continuous A/B tests across both channels, identifying the combinations of message, creative, and audience that drove actual purchases rather than just traffic. Which SEO content drove the highest purchase-intent traffic. Which social content formats drove website clicks. Which product page variations converted best. Which email follow-up sequences turned site visitors into buyers. This rigorous, iterative approach is what separated Beast's results from what most agencies deliver." },
                    { step: "5", label: "The Compounding Effect", detail: "The most important discovery was what Beast came to call the SEO + Social combo effect. SEO content that ranks and drives traffic also gets shared on social. Social content builds brand awareness that increases branded search volume, which improves SEO signals. Email capture from SEO-driven traffic gets nurtured through social retargeting. Brand trust built through social content increases the conversion rate of organic search visitors. Each channel amplified the other. The longer the system ran, the more efficient it got." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-beast-pink/10 border border-beast-pink/20 text-beast-pink font-display font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">{item.step}</span>
                      <div>
                        <p className="font-display font-bold text-beast-black mb-1">{item.label}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brand</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">A Premium Product That Deserved a Premium Presence.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sweet Sensi wasn&apos;t just a CBD brand. They were a premium wellness company with a distinct aesthetic and a genuine product story to tell. Beast&apos;s strategy leaned into that. Rather than defaulting to the generic wellness tropes that flood the CBD space, the work centered on what made Sweet Sensi different: carefully crafted formulations, boutique retail placement, and a brand identity that communicated quality at every touchpoint.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  That foundation made every piece of content more credible. Consumers researching CBD don&apos;t just buy products, they buy brands they trust. When the brand signals quality at the shelf and on the screen, SEO traffic converts. Social content resonates. Email gets opened. The visuals below are a reflection of what Beast was working to amplify: a brand already worth discovering. The job was making sure people found it.
                </p>
              </AnimatedSection>

              <style>{`
                @keyframes sensiFloat1 {
                  0%, 100% { transform: rotate(-4deg) translateY(0px); }
                  50% { transform: rotate(-4deg) translateY(-14px); }
                }
                @keyframes sensiFloat2 {
                  0%, 100% { transform: rotate(3deg) translateY(0px); }
                  50% { transform: rotate(3deg) translateY(-14px); }
                }
                @keyframes sensiFloat3 {
                  0%, 100% { transform: rotate(-3deg) translateY(0px); }
                  50% { transform: rotate(-3deg) translateY(-12px); }
                }
                @keyframes sensiFloat4 {
                  0%, 100% { transform: rotate(4deg) translateY(0px); }
                  50% { transform: rotate(4deg) translateY(-16px); }
                }
              `}</style>
              <AnimatedSection>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 py-4">
                  <div style={{ animation: "sensiFloat1 5s ease-in-out infinite" }}>
                    <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
                      <Image
                        src="/assets/sweet-sensi-store.jpg"
                        alt="Sweet Sensi in-store product display"
                        width={288}
                        height={288}
                        className="w-64 lg:w-72 h-64 lg:h-72 object-cover"
                      />
                    </div>
                  </div>
                  <div style={{ animation: "sensiFloat2 5.8s ease-in-out infinite" }}>
                    <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
                      <Image
                        src="/assets/sweet-sensi-tincture.jpg"
                        alt="Sweet Sensi Pet Tincture product"
                        width={288}
                        height={288}
                        className="w-64 lg:w-72 h-64 lg:h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-10 py-4">
                  <div style={{ animation: "sensiFloat3 6.2s ease-in-out infinite" }}>
                    <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
                      <Image
                        src="/assets/sweet-sensi-storefront.jpg"
                        alt="Sweet Sensi storefront at night"
                        width={288}
                        height={288}
                        className="w-64 lg:w-72 h-64 lg:h-72 object-cover"
                      />
                    </div>
                  </div>
                  <div style={{ animation: "sensiFloat4 5.4s ease-in-out infinite" }}>
                    <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}>
                      <Image
                        src="/assets/sweet-sensi-shirt.jpg"
                        alt="Sweet Sensi brand ambassador"
                        width={288}
                        height={288}
                        className="w-64 lg:w-72 h-64 lg:h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Over 500% MRR Growth. In the Industry That Said It Couldn&apos;t Be Done With Ads.</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 mb-6">
                  <table className="w-full text-sm">
<caption className="sr-only">Sweet Sensi Performance Results</caption>
                    <thead>
                      <tr className="bg-beast-black">
                        <th scope="col" className="text-left px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Metric</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-yellow text-xs uppercase tracking-wide">Result</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">vs Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "E-Commerce MRR Growth", result: "+500%+", benchmark: "—" },
                        { metric: "Email Click Rate", result: "9.5%", benchmark: "11.6x vs 0.82% avg" },
                        { metric: "Strategy", result: "SEO + Social", benchmark: "dual-channel compounding" },
                        { metric: "Paid Ad Dependency", result: "0%", benchmark: "built around organic" },
                      ].map((row, i) => (
                        <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-section-offwhite"}>
                          <td className="px-4 py-3 text-gray-700 font-medium">{row.metric}</td>
                          <td className="px-4 py-3 text-right font-display font-bold text-beast-black">{row.result}</td>
                          <td className="px-4 py-3 text-right text-beast-pink text-xs font-semibold">{row.benchmark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-near-black rounded-xl p-5 mb-6">
                  <p className="font-display font-bold text-beast-pink text-xs uppercase tracking-widest mb-2">The Durability Advantage</p>
                  <p className="text-gray-300 text-sm leading-relaxed">Paid advertising stops working the moment you stop paying. A well-executed SEO strategy keeps generating organic traffic and revenue for years after the initial investment. Sweet Sensi&apos;s content rankings, domain authority, and social community are assets that continue to compound, making each future dollar of marketing investment more efficient than the last. Beast built Sweet Sensi an engine, not a campaign. That&apos;s the difference.</p>
                </div>

                <blockquote className="border border-beast-pink/20 bg-beast-pink/5 rounded-xl px-6 py-4">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;Beast improved our monthly recurring revenue. It jumped by 566%, thanks to their SEO and social media strategy. They didn&apos;t just drive traffic. They brought the right people to us consistently. It&apos;s the most impactful marketing investment we&apos;ve made.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">Sweet Sensi</footer>
                </blockquote>
              </AnimatedSection>

            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Sweet Sensi" },
                    { label: "Industry", value: "CBD / Wellness / E-Commerce" },
                    { label: "Years", value: "2023 to 2024" },
                    { label: "Challenge", value: "Growth without paid ads (CBD restrictions)" },
                    { label: "Services", value: "SEO, Technical SEO, Content, Social Media, A/B Testing, CRO" },
                    { label: "Result", value: "500%+ MRR growth" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between py-3 border-b border-gray-100 last:border-0 gap-3">
                      <span className="text-sm text-white shrink-0">{item.label}</span>
                      <span className="text-sm font-semibold text-beast-black text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-near-black rounded-2xl p-6 border border-beast-pink/20">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">Channel Performance</h3>
                  {[
                    { metric: "MRR Growth", beast: "566%", industry: "baseline", lift: "5.66x" },
                    { metric: "Email CTR", beast: "9.5%", industry: "0.82%", lift: "11.6x" },
                    { metric: "Paid Ad Spend", beast: "$0", industry: "standard", lift: "∞ ROAS" },
                  ].map((row) => (
                    <div key={row.metric} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-white/5 last:border-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-white uppercase tracking-widest">{row.metric}</span>
                        <span className="text-xs font-bold text-beast-pink">{row.lift}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-display font-bold text-beast-yellow text-lg">{row.beast}</span>
                        <span className="text-xs text-white/70 self-end pb-0.5">{row.industry}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        {/* Mobile: text in gray block above image */}
        <div className="lg:hidden bg-[#F4F4F4] py-10 px-6 text-center">
          <p className="section-eyebrow text-beast-pink mb-2">The Creative</p>
          <h2 className="font-display text-3xl font-bold text-beast-black mb-3">Product Photography That Sold the Brand.</h2>
          <p className="text-beast-black/60 max-w-xl mx-auto text-sm leading-relaxed">Premium visuals built to communicate quality at a glance: the kind of creative that earns consumer trust before a single word is read.</p>
        </div>

        <Image
          src="/assets/sweet-sensi-gummies.jpg"
          alt="Sweet Sensi Elevated Edibles gummy product line"
          className="w-full h-auto lg:h-[650px] lg:object-cover lg:object-[center_40%]"
        
          width={1920}
          height={650}
          sizes="100vw"
        />

        {/* Desktop: text overlaid on blank top portion of image */}
        <div className="hidden lg:block absolute top-0 left-0 right-0 pt-20 px-6 text-center">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-2">The Creative</p>
            <h2 className="font-display text-3xl font-bold text-beast-black mb-3">Product Photography That Sold the Brand.</h2>
            <p className="text-beast-black/60 max-w-xl mx-auto text-sm leading-relaxed">Premium visuals built to communicate quality at a glance: the kind of creative that earns consumer trust before a single word is read.</p>
          </AnimatedSection>
        </div>
      </section>

      <RelatedCaseStudies related={["coinline", "sun-bird", "williams-bts"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Build Revenue That Doesn&apos;t Stop When the Budget Does?</h2>
            <p className="text-gray-400 mb-8">Whether you&apos;re in a restricted industry or just tired of paying for traffic you don&apos;t own, Beast builds marketing assets that compound over time.</p>
            <IconButton href="/growth-assessment" icon="calendar">Start Your Growth Assessment</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
