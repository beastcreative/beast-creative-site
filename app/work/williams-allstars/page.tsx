import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import TradingCard from "@/components/ui/TradingCard";
import IconButton from "@/components/ui/IconButton";
import PhoneTilt from "@/components/ui/PhoneTilt";

export const metadata: Metadata = {
  title: "Williams All-Stars March Madness Campaign | 13,660 Entries in 24 Days | Beast Creative",
  description:
    "How Beast Creative Agency designed a digital trading card collection campaign for Williams Foods that generated 13,660 entries, 200,475 reach, and a 9.5% email click rate across a 24-day March Madness window.",
};

export default function WilliamsAllstarsPage() {
  return (
    <>
      <section className="relative bg-beast-black pt-28 pb-20 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <AnimatedSection>
              <div className="flex flex-wrap gap-2 mb-4">
                {["CPG Marketing", "Sweepstakes", "Creative Campaign", "Paid Social", "Email Marketing"].map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-beast-pink/15 text-beast-pink border border-beast-pink/20">{tag}</span>
                ))}
              </div>
              <p className="section-eyebrow text-beast-yellow mb-3">Case Study — Williams Foods · 2022</p>
              <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
                Digital Trading Cards.{" "}
                <span className="text-beast-pink">Real Fan Frenzy.</span>
              </h1>
              <p className="text-body-lead text-gray-300 max-w-xl">
                13,660 entries across 8 card drops in 24 days. 9.5% email click rate — 11x the industry average.
              </p>
            </AnimatedSection>

            {/* Shoe GIF */}
            <AnimatedSection delay={0.15} className="flex justify-center lg:justify-end">
              <div className="relative w-72 lg:w-96 xl:w-[440px]">
                <Image
                  src="/assets/williams-allstars-shoe.gif"
                  alt="Williams All-Stars Spicy Wings trading card shoe"
                  width={440}
                  height={440}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  unoptimized
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={13660} label="Total Entries" sublabel="across 8 card drops" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={200475} label="Total Reach" sublabel="Facebook + Instagram" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={9.5} suffix="%" decimals={1} label="Email Click Rate" sublabel="vs 0.82% industry avg" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={24} label="Day Campaign" sublabel="March Madness window" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Make March Madness Mean Something for Williams Fans.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Williams Foods came to Beast with a clear seasonal opportunity and a creative challenge: March Madness is one of the biggest cultural moments of the year in American households. How do you tap into that energy authentically for a seasoning brand, drive meaningful consumer engagement, and build a first-party database at the same time?
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The previous Williams campaigns had proven the model — Beast&apos;s sweepstakes architecture reliably outperformed industry benchmarks. But this time the brief pushed further. The client wanted something collectible, something that rewarded loyal fans across the full tournament window, and something that made Williams feel like a cultural participant in March Madness.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-display font-bold text-beast-black text-sm mb-2">The Challenge</p>
                  <p className="text-gray-600 text-sm leading-relaxed">Standard sweepstakes create a single touchpoint and then go cold. Williams needed a mechanism that brought fans back multiple times across the 24-day window, rewarded participation, and made the brand feel genuinely fun to interact with — not just transactional.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Idea</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Take It Back to Where Sneakers and Trading Cards Were the Culture.</h2>
                <div className="space-y-6">
                  {[
                    { step: "1", label: "The Creative Concept", detail: "Beast's answer was rooted in nostalgia — the same cultural territory that makes March Madness resonate. Digital sneaker trading cards: custom Williams-branded Chuck Taylor-style sneakers, each featuring a different Williams seasoning flavor, designed as collectible digital trading cards that fans could unlock over the course of the campaign. Basketball and sneaker culture are deeply intertwined — it's authentic to the March Madness moment." },
                    { step: "2", label: "The Mechanic — 8 Card Drops", detail: "Every entry earned a digital trading card — a unique, downloadable collectible. One new card dropped every three days across 8 windows: Chili, Spicy Wings, Sloppy Joe, Spaghetti, Gravy, Taco, Meatloaf, and Tex-Mex Chili. Each card window was a new entry opportunity. The more cards a fan collected, the more times they entered — driving repeat engagement and a sense of genuine progression through the campaign." },
                    { step: "3", label: "The Prize Architecture", detail: "Grand Prize (1 winner): $500 gift card, custom Williams sneakers (winner's choice from 8 designs), physical pack of all 8 Williams trading cards printed like real cards, winner's favorite basketball team's jersey, and Williams Seasonings product bundle. Superfan Prizes (25 winners): selected based on social media engagement throughout the campaign — a deliberate mechanic that incentivized shares, comments, and organic social amplification beyond the entry form." },
                    { step: "4", label: "Email Strategy", detail: "Using Constant Contact, Beast deployed email campaigns to the growing Williams subscriber list to announce each new card release and drive repeat traffic. Total sends: 26,413. Open rate: 29.1% (vs. 24% industry avg). Click rate: 9.5% (vs. 0.82% industry avg — 11.6x the benchmark). When Beast sent an email announcing a new card drop, nearly 1 in 10 recipients clicked through immediately." },
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

              {/* Trading Cards Section — inserted between process and results */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Cards</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Collectible. Digital. Theirs to Keep.</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Each entry earned fans a digital trading card — a custom Williams-branded sneaker design they could download and share. Here are three from the 8-card set. Hover to flip.
                </p>
                <div className="grid grid-cols-3 gap-8 py-4 overflow-visible">
                  <TradingCard
                    front="/assets/card-chili-front.png"
                    back="/assets/card-chili-back.png"
                    alt="Williams All-Stars Chili trading card — Beast Creative Agency"
                    rotation={-4}
                    floatDelay="0s"
                  />
                  <TradingCard
                    front="/assets/card-taco-front.png"
                    back="/assets/card-taco-back.png"
                    alt="Williams All-Stars Taco trading card — Beast Creative Agency"
                    defaultFlipped={true}
                    rotation={2}
                    floatDelay="0.4s"
                  />
                  <TradingCard
                    front="/assets/card-sloppyjoe-front.png"
                    back="/assets/card-sloppyjoe-back.png"
                    alt="Williams All-Stars Sloppy Joe trading card — Beast Creative Agency"
                    rotation={-2}
                    floatDelay="0.8s"
                  />
                </div>
                <p className="text-xs text-gray-400 text-center mt-4 md:hidden">Tap to flip</p>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">24 Days. 13,660 Fans. A Database That Belongs to Williams.</h2>
                <div className="overflow-hidden rounded-xl border border-gray-100 mb-6">
                  <table className="w-full text-sm">
<caption className="sr-only">Williams All-Stars Campaign Results</caption>
                    <thead>
                      <tr className="bg-beast-black">
                        <th scope="col" className="text-left px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">Metric</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-beast-yellow text-xs uppercase tracking-wide">Result</th>
                        <th scope="col" className="text-right px-4 py-3 font-display font-bold text-gray-400 text-xs uppercase tracking-wide">vs Benchmark</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Total Entries", result: "13,660", benchmark: "—" },
                        { metric: "Total Reach", result: "200,475", benchmark: "—" },
                        { metric: "Total Link Clicks", result: "3,273", benchmark: "—" },
                        { metric: "Email Open Rate", result: "29.1%", benchmark: "+21% vs 24% avg" },
                        { metric: "Email Click Rate", result: "9.5%", benchmark: "11.6x vs 0.82% avg" },
                        { metric: "Email Total Sends", result: "26,413", benchmark: "—" },
                        { metric: "Website Sessions", result: "6,399", benchmark: "—" },
                        { metric: "New Website Users", result: "4,632", benchmark: "90.4% of all users" },
                        { metric: "Superfan Winners", result: "25", benchmark: "—" },
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

                <blockquote className="border border-beast-pink/20 bg-beast-pink/5 rounded-xl px-6 py-4">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;Working with Beast was a game changer. Their custom social media campaign didn&apos;t just build awareness — it delivered over 13,000 real email subscribers.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— Williams Foods / C.H. Guenther &amp; Son</footer>
                </blockquote>
              </AnimatedSection>

              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">Live In The Feed</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">What Fans Actually Saw.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">Each card drop was announced via Facebook and Instagram — showing off the new design, reminding fans they had another chance to enter, and keeping the campaign alive for the full 24-day March Madness window. This is what it looked like in the feed.</p>
                <PhoneTilt />
              </AnimatedSection>

            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Williams Foods" },
                    { label: "Campaign", value: "All-Stars — March Madness" },
                    { label: "Dates", value: "Mar 14 – Apr 6, 2022" },
                    { label: "Duration", value: "24 days" },
                    { label: "Card Drops", value: "8 unique designs" },
                    { label: "Platforms", value: "Facebook, Instagram" },
                    { label: "Services", value: "Strategy, Creative Design, Landing Page, Paid Social, Email Marketing" },
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
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">Email Performance</h3>
                  {[
                    { metric: "Open Rate", beast: "29.1%", industry: "24%", lift: "+21%" },
                    { metric: "Click Rate", beast: "9.5%", industry: "0.82%", lift: "11.6x" },
                    { metric: "Total Sends", beast: "26,413", industry: "—", lift: "—" },
                  ].map((row) => (
                    <div key={row.metric} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-white/5 last:border-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-white uppercase tracking-widest">{row.metric}</span>
                        <span className="text-xs font-bold text-beast-pink">{row.lift}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-display font-bold text-beast-yellow text-lg">{row.beast}</span>
                        <span className="text-xs text-white/70 self-end pb-0.5">{row.industry !== "—" ? `avg: ${row.industry}` : ""}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Creative — Scattered Ad Showcase */}
      <section className="bg-[#F4F4F4] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection className="text-center mb-14">
            <p className="section-eyebrow text-beast-pink mb-3">Campaign Creative</p>
            <h2 className="font-display text-4xl font-extrabold text-beast-black mb-4">The Ads Fans Couldn&apos;t Scroll Past.</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Bold creative built to stop thumbs mid-scroll. These ran across Facebook and Instagram throughout the 24-day campaign window.</p>
          </AnimatedSection>

          {/* Scattered layout */}
          <div className="flex flex-col items-center lg:flex-row lg:items-end justify-center gap-8 lg:gap-6">

            {/* Ad 1 — Announcement, tilted left */}
            <AnimatedSection delay={0.05} className="w-full max-w-[340px] shrink-0">
              <div
                className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:lg:rotate-0 lg:[transform:rotate(-4deg)]"
              >
                <Image
                  src="/assets/allstars-ad-announcement.png"
                  alt="Williams All-Stars campaign announcement ad"
                  width={680}
                  height={680}
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <span className="inline-flex items-center gap-2 bg-beast-pink rounded-full px-4 py-1.5 text-sm font-bold text-white font-display">
                  <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse shrink-0" />
                  General Announcement
                </span>
              </div>
            </AnimatedSection>

            {/* Center — Chili Shoe video */}
            <AnimatedSection delay={0.1} className="w-full max-w-[360px] shrink-0">
              <div
                className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 lg:[transform:rotate(2deg)]"
              >
                <video
                  src="/assets/allstars-ad-chili.mp4"
                  aria-hidden="true"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <span className="inline-flex items-center gap-2 bg-beast-pink rounded-full px-4 py-1.5 text-sm font-bold text-white font-display">
                  <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse shrink-0" />
                  Chili Shoe — Motion Ad
                </span>
              </div>
            </AnimatedSection>

            {/* Ad 2 — Prizes, tilted right */}
            <AnimatedSection delay={0.15} className="w-full max-w-[340px] shrink-0">
              <div
                className="rounded-2xl overflow-hidden shadow-[0px_5px_15px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:lg:rotate-0 lg:[transform:rotate(4deg)]"
              >
                <Image
                  src="/assets/allstars-ad-prizes.png"
                  alt="Williams All-Stars prizes ad — Become an All-Star"
                  width={680}
                  height={680}
                  className="w-full h-auto block"
                />
              </div>
              <div className="flex items-center justify-center mt-6">
                <span className="inline-flex items-center gap-2 bg-beast-pink rounded-full px-4 py-1.5 text-sm font-bold text-white font-display">
                  <span className="w-2 h-2 rounded-full bg-beast-green animate-pulse shrink-0" />
                  Prize Reveal
                </span>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      <RelatedCaseStudies related={["sun-bird", "williams-bts", "williams-bowl"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Turn Your Next Campaign Into a Collector&apos;s Item?</h2>
            <p className="text-gray-400 mb-8">Beast builds campaign mechanics that keep fans coming back. Let&apos;s build something your audience will actually want to collect.</p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="rocket" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
