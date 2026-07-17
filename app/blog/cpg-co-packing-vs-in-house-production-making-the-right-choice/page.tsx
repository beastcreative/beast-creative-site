import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/blog/cpg-co-packing-vs-in-house-production-making-the-right-choice" },
  title: "CPG Co-Packing vs. In-House Production: Making the Right Choice",
  description:
    "Own the plant or outsource the make? A plainspoken guide to co-packing vs. in-house CPG production: the real cost math, when to switch, and how to vet a co-man.",
};

const faqs = [
  {
    question: "At what volume does it make sense to bring production in-house?",
    answer: "There's no universal number, but the trigger is when your co-pack tolling fees plus margin give-up exceed the fully loaded cost of running your own line, including labor, overhead, depreciation, and the cost of capital. For many shelf-stable categories that crossover lands somewhere in the low-to-mid seven figures of annual revenue, but a high-margin or highly differentiated product can justify it much earlier. The honest answer is to build the model with real quotes from both a co-packer and an equipment vendor before you fall in love with either path.",
  },
  {
    question: "How do I protect my recipe or formula when using a co-packer?",
    answer: "Start with a strong mutual NDA and a manufacturing agreement that explicitly assigns ownership of your IP, formula, and specs to you, not the co-packer. Where possible, split the formula so no single supplier holds the complete picture, or have a proprietary pre-blend made elsewhere and shipped in. Reputable co-packers run hundreds of brands and have no interest in stealing yours, but contracts and supplier segmentation are how you sleep at night anyway.",
  },
  {
    question: "What is tolling, and how is it different from turnkey co-packing?",
    answer: "Tolling (or toll manufacturing) means you supply the raw materials and packaging, and the co-packer charges you only for the labor and machine time to convert them into finished goods. Turnkey is the opposite: the co-packer sources everything, and you pay a single per-unit price for a finished case delivered. Tolling gives you more control over inputs and often better unit economics at scale, while turnkey is simpler and faster to launch with, which is why most early brands start there.",
  },
  {
    question: "Can I use both co-packing and in-house production at the same time?",
    answer: "Yes, and many of the smartest CPG operators do exactly that. A common hybrid is running your hero SKUs in-house where volume and margin justify owning the line, while keeping seasonal items, new launches, or volume spikes on a co-packer. This protects you from single-point capacity risk, lets you test new products without capex, and gives you a pressure-release valve when demand outruns your own four walls.",
  },
];

export default function CpgCoPackingVsInHousePost() {
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
            headline: "CPG Co-Packing vs. In-House Production: Making the Right Choice",
            description: "Own the plant or outsource the make? A plainspoken guide to co-packing vs. in-house CPG production: the real cost math, when to switch, and how to vet a co-man.",
            datePublished: "2026-05-11",
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
              <span className="text-xs text-[#888888]">May 11, 2026 · 9 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG Co-Packing vs. In-House Production:{" "}
              <span className="text-beast-pink">Making the Right Choice</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              One of the biggest structural decisions a CPG brand ever makes is deceptively simple to ask and brutally complex to answer: do you own the plant, or do you outsource the make? That single choice shapes your capital requirements, your margins, your speed, and how much control you actually have over the thing customers put in their mouths. Get it right and you scale cleanly. Get it wrong and you either bleed cash on idle equipment or watch your margins evaporate one tolling fee at a time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">What Co-Packing Actually Is (And the Spectrum It Covers)</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Co-packing (short for contract packaging, and often used interchangeably with contract manufacturing) means paying an outside facility to make and pack your product. You own the brand, the formula, and the relationship with the retailer. They own the line, the labor, and the food-safety certifications. It’s how the vast majority of emerging CPG brands get their first cases onto a shelf without building a factory.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">But “co-packing” isn’t one thing. It’s a spectrum, and where you land on it changes everything about your economics and your control.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">The Turnkey End</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">At the full-turnkey end, the co-packer does everything. They source the ingredients, buy the packaging, run the line, and hand you finished, palletized cases. You give them a spec and a purchase order; they give you a per-unit price. It’s the lowest-friction way to launch: you can go from concept to retail-ready inventory without ever touching a piece of equipment.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">The Bill-of-Materials End</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">At the other end is tolling, sometimes called bill-of-materials or BOM co-packing. Here you supply some or all of the inputs (your proprietary blend, your custom packaging, sometimes the raw ingredients) and pay the co-packer only for conversion: the labor and machine time to turn your materials into finished goods. You take on more procurement work and more inventory risk, but you keep more control over inputs and often a better unit cost.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Most brands move along this spectrum as they grow, starting turnkey for simplicity, then shifting toward tolling as volume gives them the leverage and the appetite to manage their own supply chain.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The Case for Co-Packing</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">For most brands under a certain scale, co-packing isn’t the compromise. It’s the correct answer. Here’s why it wins so often.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Low Capital, Fast Speed</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">A production line is a seven-figure commitment before you’ve sold a single case. A co-packer turns that capex into a variable per-unit cost. Your money goes into marketing, distribution, and inventory (the things that actually grow a young brand) instead of into stainless steel that sits idle while you build demand. And you launch in weeks or months, not the year-plus it takes to commission a facility.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> No upfront equipment investment or facility lease tying up your capital</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Faster path from formula to first retail-ready inventory</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Production becomes a variable cost that scales with actual orders</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Flexibility and Borrowed Expertise</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">A good co-packer has already solved problems you don’t even know you have yet: allergen segregation, shelf-life validation, line speeds for your viscosity, the quirks of a particular fill weight. You’re renting decades of operational knowledge along with the equipment. And when a retailer suddenly wants a club pack or a limited seasonal run, a co-packer can flex into it without you buying a single new machine.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Access to certifications, food-safety systems, and process knowledge on day one</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Ability to test new SKUs and formats without committing to equipment</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Headroom to absorb demand spikes by buying more line time</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The honest summary: co-packing lets a small team punch far above its weight. It’s how a three-person brand competes for shelf space against companies with their own factories.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The Case for In-House Production</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">There’s a reason every co-packed brand eventually asks itself whether it should bring the make in-house. Past a certain scale, the advantages of owning your own production become hard to ignore.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Control, Margin, and IP</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">When you own the line, you own the schedule. No waiting in a co-packer’s queue behind their bigger clients. No surprise when they decide your volume is too small to prioritize. And at scale, the tolling fees and margin you were handing the co-packer flow back to your own P&L, which is exactly why so many brands make the move once volume is high enough to amortize the fixed cost of a plant.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Full control over production scheduling, priorities, and lead times</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> The co-packer’s margin and tolling fees stay inside your own business</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Your formula and process never leave your four walls</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Quality and R&D Agility</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">When the line is yours, quality is a standard you set and enforce directly rather than negotiate through a contract. You can run a small experimental batch on a Tuesday afternoon, taste it, tweak it, and run it again instead of scheduling a costly trial run with a co-packer months out. For brands whose edge is the product itself, that R&D velocity is worth a lot.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Direct, daily ownership of quality rather than contracted oversight</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Rapid formulation and packaging iteration without external trial fees</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Protection of proprietary process knowledge as a competitive moat</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The catch, of course, is that all of this control comes with the weight of fixed cost and the operational burden of actually running a manufacturing operation, which is where the real comparison begins.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">The Real Cost Comparison</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">This is where most brands either fool themselves or do the work. The headline trade-off is capex versus per-unit cost, but the details are what actually decide the call.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Capex vs. Per-Unit</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">In-house is a fixed-cost game. You pay for the building, the equipment, the labor, and the overhead whether you run one shift or three, so your cost per unit falls as volume climbs and you spread that fixed cost over more cases. Co-packing is a variable-cost game: a relatively flat per-unit price, no matter the volume. Plot both lines on a chart and they cross. Below the crossover, co-packing is cheaper. Above it, in-house wins. The entire decision is figuring out where that crossover sits for your specific product and how fast you’re approaching it.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">MOQs and Tolling</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Co-packers have minimum order quantities, and they exist because a changeover (cleaning, sanitizing, and re-spec’ing a line for your product) is expensive for them. A high MOQ means you might be forced to produce more inventory than you can sell, tying up cash and risking spoilage. Tolling can lower your per-case cost but shifts procurement and inventory risk onto you. Don’t just compare the per-unit numbers; model the working capital each approach demands.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Minimum order quantities can force overproduction and stranded inventory</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Changeover and setup fees stack on top of the per-unit conversion cost</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> In-house adds depreciation, maintenance, and the cost of capital to your model</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Idle capacity is a real cost: a half-used line still carries full overhead</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The mistake brands make is comparing a co-packer’s per-unit price against the marginal cost of running their own line, ignoring the fixed overhead. Compare fully loaded against fully loaded, or the math will lie to you.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">When to Make the Switch</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Bringing production in-house is one of the most consequential moves a CPG brand can make, and timing is everything. Too early and you’re carrying a factory you can’t fill. Too late and you’ve handed away years of margin you could have kept.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Volume Thresholds</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The clearest signal is when your sustained, predictable volume would keep an in-house line running at healthy utilization. A line that runs one shift a few days a week will almost never beat a co-packer on cost. You want demand consistent enough that the equipment earns its keep, and a credible forecast that it stays that way, not a single seasonal spike that flatters the numbers.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">The Margin Math</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Add up everything you pay your co-packer over a year: tolling fees, changeover charges, and the margin baked into their price. Compare it to the fully loaded annual cost of running your own line at your real volume, including the cost of the capital you’d sink in. When the savings comfortably clear the operational risk and management burden of running a plant, you have a case. When it’s close, stay co-packed. The simplicity is worth real money.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Demand is high, predictable, and would keep a line at strong utilization</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Annual co-pack spend clearly exceeds fully loaded in-house cost</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> You have the operational talent to actually run a manufacturing facility</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Your product or process is differentiated enough that control creates real value</li>
              </ul>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">How to Find, Vet, and Manage a Co-Packer</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">If co-packing is your answer (and for most brands it is, at least for now), the quality of your co-packer relationship will quietly determine whether your brand thrives or stalls. Treat the selection like the strategic partnership it is, not a vendor transaction.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Sourcing and Auditing</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Find candidates through industry directories, broker referrals, and trade shows, then narrow fast based on whether they actually run your format and category. Before you sign anything, audit the facility in person. Walk the floor. Check their food-safety certification (SQF, BRC, or equivalent), their sanitation practices, their record on recalls and audits. A clean facility with a strong quality culture is worth more than a slightly cheaper one that cuts corners.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Contracts and Quality Agreements</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Your manufacturing agreement should nail down ownership of your IP and formula, MOQs, lead times, pricing and how it can change, and what happens if they miss a deadline or blow a spec. Pair it with a separate quality agreement that spells out specs, testing protocols, hold-and-release procedures, and who eats the cost when a batch fails. The vague handshake deal works right up until it doesn’t: usually during a recall, which is the worst possible time to discover what your contract didn’t say.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Audit the facility in person before signing: certifications and floor practices both</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Put IP ownership, MOQs, pricing, and lead times in writing</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Use a dedicated quality agreement covering specs, testing, and batch failure</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Manage the relationship actively: visit, communicate, and review performance</li>
              </ul>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Understanding the Risks of Each Path</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Neither path is safe. They just carry different risks. Knowing them in advance is how you build the contracts, contingencies, and capacity to manage them.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Co-Packing Risks</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The big one is dependence. If you rely on a single co-packer and they lose a line, get acquired, deprioritize you, or simply go out of business, your supply can stop overnight, and your retailers won’t care why. There’s also IP exposure: your formula and process live inside someone else’s building. And you’re always one of many clients, which means your urgent run may sit behind a bigger brand’s.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Single-point dependence: one co-packer failing can halt your supply</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> IP and formula exposure inside a facility you don’t control</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Competing for priority against the co-packer’s larger accounts</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">In-House Risks</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">In-house trades dependence risk for capacity and operating risk. If demand softens, you’re stuck with a fixed-cost plant running half-empty, and idle capacity is pure loss. You also now own every operational headache: labor, maintenance, compliance, downtime. The flexibility you gain in control you give back in commitment. A factory is very hard to un-build.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Capacity risk: soft demand leaves you carrying an underused line</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Full ownership of labor, maintenance, compliance, and downtime</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Low flexibility: a plant is a heavy, hard-to-reverse commitment</li>
              </ul>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Hybrid Models and Common Mistakes</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The framing of co-pack “versus” in-house is useful for thinking, but the smartest operators rarely live at either extreme. They build a hybrid.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">The Hybrid Playbook</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">A common and powerful setup is to run your hero SKUs in-house (the high-volume, high-margin products where owning the line pays off) while keeping new launches, seasonal items, and demand overflow on a co-packer. This gives you margin where it matters, a low-risk lab for innovation, and a relief valve when your own capacity is maxed. You get most of the upside of both models and dilute the worst risks of each.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Run high-volume hero SKUs in-house, co-pack the long tail and new items</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Keep a co-packer as overflow capacity to absorb demand spikes</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Maintain a second qualified supplier so you’re never single-sourced</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">The Mistakes That Hurt Most</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The most common errors are predictable. Brands build a plant chasing a vanity milestone before volume justifies it. They single-source for the small discount and get caught when that one co-packer stumbles. They compare costs on the wrong basis (marginal versus fully loaded) and talk themselves into a bad call. And they treat the co-packer like a faceless vendor instead of the strategic partner who literally makes their product.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Bringing production in-house before sustained volume justifies the fixed cost</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Single-sourcing for a small saving and absorbing all the dependence risk</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Comparing costs on inconsistent bases and trusting a flawed model</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Under-investing in the contract and quality agreement until a crisis hits</li>
              </ul>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Aligning the Brand Promise With How You Make It</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Here’s the part that gets overlooked in the spreadsheet-driven version of this decision: your production model and your brand promise have to tell the same story. If your marketing leans hard on “small-batch, made by hand, obsessively controlled,” a faceless co-pack arrangement can quietly undercut the claim, and savvy consumers, and increasingly the AI engines summarizing your brand, will notice the gap. If your promise is value and ubiquity, the efficiency of the right manufacturing setup is part of how you keep that promise believable.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">This is where a marketing partner earns its place at the table well before the product ships. The job isn’t just to advertise what you make. It’s to make sure the way you make it, the story you tell about it, and the proof points you can credibly stand behind all line up. A co-packed product can absolutely carry a premium story, but only if the narrative is honest and the operational reality backs it.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Whichever path you choose (co-pack, in-house, or hybrid), make the decision with both the P&L and the brand promise in front of you. The right answer is rarely the one that only the finance model likes or only the marketing deck likes. It’s the one where the math works, the story is true, and you can scale without breaking either.</p>

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
              <a href="/blog/cpg-supply-chain-disruptions-building-resilience-and-flexibility" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">9 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Supply Chain Disruptions: Building Resilience and Flexibility</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Co-packing and in-house choices live inside a larger supply chain. Here’s how to build resilience and flexibility into it.</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">January 16, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/consumer-packaged-goods-guide-complete-industry-overview-for-brands-retailers-and-investors" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">12 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">Consumer Packaged Goods (CPG): A Complete Industry Overview for Brands, Retailers &amp; Investors</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Where production strategy fits in the bigger picture: a full overview of the CPG industry for brands, retailers, and investors.</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">June 10, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-distribution-channels-choosing-between-retail-dtc-and-hybrid-models" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">10 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Distribution Channels: Choosing Between Retail, DTC, and Hybrid Models</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">The make decision pairs with the sell decision: choosing between retail, DTC, and hybrid distribution models.</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">June 5, 2026</span>
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
              Beast creates strategies that build brands and drive measurable results for CPG brands.
            </p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
