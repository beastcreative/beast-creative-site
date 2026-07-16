import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { faqSchema } from "@/lib/schema";
import FaqAccordion from "@/components/ui/FaqAccordion";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "CPG Market Research Methods: Understanding Your Target Consumer",
  description:
    "A practical guide to CPG market research methods: qualitative and quantitative tools, first-party data, personas, and turning consumer insight into decisions.",
};

const faqs = [
  {
    question: "What's the difference between qualitative and quantitative research in CPG, and when do I use each?",
    answer: "Qualitative research (interviews, focus groups, shop-alongs) tells you why consumers behave the way they do and surfaces language, motivations, and unmet needs you didn't know to ask about. Quantitative research (surveys, conjoint, sales data) tells you how many people feel a certain way and whether a pattern holds at scale. The right sequence is usually qualitative first to generate hypotheses, then quantitative to validate them. Skipping the qualitative phase is how brands end up running statistically rigorous studies that measure the wrong things.",
  },
  {
    question: "How much should an emerging CPG brand spend on market research before launch?",
    answer: "Far less than most founders assume: the highest-leverage research is often nearly free. Five to ten in-depth interviews with target buyers, a careful read of competitor reviews on Amazon and retailer sites, and a 100-respondent survey through a low-cost panel will tell you most of what you need before a first production run. The point isn't to buy a Nielsen subscription on day one; it's to replace guesses with evidence on the decisions that are expensive to reverse, like positioning, pricing, and pack format.",
  },
  {
    question: "What sample size do I need for survey research to be trustworthy?",
    answer: "For directional reads on a single segment, 100 to 150 respondents is usually enough to spot strong patterns, though your margin of error will be wide. For confident go/no-go decisions or comparisons between segments, plan for 300 to 400 per segment so each subgroup is large enough to analyze on its own. More important than raw count is sample quality: a smaller sample of genuine category buyers beats a larger sample of people who'll never purchase. Watch for screener fraud and speeders, which quietly corrupt cheap online panels.",
  },
  {
    question: "How do I turn research findings into actual product and marketing decisions?",
    answer: "Translate every insight into a decision it changes: if a finding doesn't move a product, pack, price, or message choice, it's trivia. The most reliable bridge is a jobs-to-be-done framing: define the functional, emotional, and social job the consumer is hiring your product to do, then audit your formula, packaging, and copy against that job. A good research partner doesn't just hand you a deck; they sit in the room when you're choosing claims and tradeoffs and hold the consumer's reality against each option.",
  },
];

export default function CpgMarketResearchMethodsPost() {
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
            headline: "CPG Market Research Methods: Understanding Your Target Consumer",
            description: "A practical guide to CPG market research methods: qualitative and quantitative tools, first-party data, personas, and turning consumer insight into decisions.",
            datePublished: "2026-06-03",
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
              <span className="text-xs text-[#888888]">June 3, 2026 · 9 min read</span>
            </div>
            <h1 className="text-display-hero font-display font-extrabold text-white mb-6 leading-tight">
              CPG Market Research Methods:{" "}
              <span className="text-beast-pink">Understanding Your Target Consumer</span>
            </h1>
            <p className="text-body-lead text-[#C8C8C8] max-w-2xl">
              Every other decision in your business (the formula, the price, the pack, the claim on the front of the box, the channel you fight for) rests on one thing: how well you actually understand the person you expect to buy it. Most brands skip that work or fake it with assumptions. The ones that win treat consumer understanding as a discipline, not a hunch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="bg-beast-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20 space-y-8">
          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Why Consumer Research Is the Foundation, Not a Formality</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">In CPG, the cost of being wrong is unusually concrete. A misjudged formula means a production run you can't sell. A misread price means margins that won't survive trade spend. A claim that doesn't land means shelf presence nobody reaches for. Research exists to move these expensive, hard-to-reverse decisions off of opinion and onto evidence.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Here's the thing most teams get wrong: research isn't a single project you commission once before launch. It's an ongoing practice of staying honest about who your buyer is, what they're actually trying to accomplish, and how their behavior is shifting. The brands that compound advantage are the ones who keep listening after launch, not just before.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">What Good Research Actually Answers</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Before choosing a method, get clear on the question. The strongest research programs are built around decisions, not curiosity. A useful study usually answers at least one of these:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Who is the highest-value buyer, and what occasion brings them to the category?</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> What job are they hiring this product to do, functionally and emotionally?</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> What drives the purchase decision at the shelf or on the product page?</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> What would make them switch from what they buy today?</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> What price feels fair, and where does demand fall off?</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">If a proposed study doesn't change a decision you'd otherwise get wrong, it's interesting at best and a distraction at worst.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Qualitative vs. Quantitative: When Each One Earns Its Keep</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The most common mistake in CPG research is reaching for a method before deciding what kind of truth you need. Qualitative and quantitative research answer fundamentally different questions, and using one where the other belongs produces confident, expensive nonsense.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Qualitative: The “Why” Behind Behavior</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Qualitative work is exploratory. It surfaces motivations, the exact words consumers use, the frustrations they've stopped articulating, and the needs nobody has named yet. You can't count it, and you shouldn't try. Its value is in generating hypotheses and giving you language: the raw material for positioning and copy you couldn't have invented at your desk.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Quantitative: The “How Many” That Confirms It</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Quantitative research tells you whether a pattern holds across a population and how large it is. It's how you size an opportunity, validate a hypothesis, and defend a recommendation to a retail buyer or your own board. It answers “how much,” “how many,” and “which one wins,” but only if you already know the right question to ask, which is usually what the qualitative phase gave you.</p>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The healthy sequence is almost always qualitative to explore, then quantitative to validate. Run them out of order and you get rigor pointed at the wrong target.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Foundational Qualitative Methods</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">These are the workhorses for understanding the human behind the purchase. None of them require a six-figure budget, and the cheapest of them often produce the sharpest insight.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Surveys With Open-Ended Questions</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Surveys are usually thought of as quantitative, but well-written open-ended questions turn them into a scalable qualitative tool. Ask buyers to describe, in their own words, the last time they used the category and what they wished was different. The verbatims become a goldmine of consumer language for messaging.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Focus Groups and In-Depth Interviews</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Focus groups are good for reactions to packaging, concepts, and naming: watching a room respond reveals things a survey can't. But they carry a real risk: groupthink, where one loud participant steers the consensus. One-on-one in-depth interviews avoid that distortion and go deeper. For most emerging brands, five to ten focused interviews beat one focus group.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Ethnographic Research and Shop-Alongs</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">There is a gap between what consumers say they do and what they actually do, and ethnography lives in that gap. Watching someone use your product in their own kitchen, or following them through the aisle on a shop-along, exposes the real friction. People can't always tell you why they reached past your product, but you can see it happen.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Diary Studies</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">For products tied to routines or consumption over time, diary studies, where participants log usage over days or weeks, catch patterns no single interview can. They reveal occasion, frequency, and the moments when intent forms, which is exactly where the next purchase is decided.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Behavioral and Quantitative Methods</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Once you have hypotheses, quantitative and behavioral methods test whether they hold at scale, and increasingly, they let you measure what people do rather than what they claim they'll do.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Concept and Package Testing</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Before you commit to a SKU, test the concept and the pack. Show target buyers the concept statement and measure purchase intent, uniqueness, and believability against category norms. Package testing (often using eye-tracking or simulated-shelf exercises) answers a separate, brutal question: does your design get noticed in a crowded set, and does it communicate the right thing in the two seconds you actually get?</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Conjoint Analysis and Price Sensitivity</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Conjoint analysis forces consumers to make tradeoffs (choosing between bundles of features, sizes, and prices), and from those choices you can model what each attribute is actually worth to them. Paired with price-sensitivity techniques like Van Westendorp, it gives you a defensible read on the price ceiling and the point where demand collapses, rather than a number someone picked because it felt right.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">A/B Tests and Live Experiments</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">DTC and digital ad platforms let you test messaging, imagery, and price with real money on the line. An A/B test on a landing page or ad set is research with the bias removed: nobody is telling you what they'd do, they're showing you. It's one of the most honest tools available, and it's cheap.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Sales, Syndicated, and Panel Data</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">At scale, the truth lives in the numbers. Syndicated data from sources like Nielsen and IRI shows category dynamics, share, and velocity across retailers. Retailer point-of-sale data shows how your specific items move, store by store. Consumer panel data (tracking the same households over time) reveals repeat rates, buyer demographics, and whether you're stealing share or growing the category.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Syndicated data answers “how is the category and my share trending?”</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Retailer POS answers “how do my SKUs move where they're stocked?”</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Panel data answers “who actually buys, and do they come back?”</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Syndicated subscriptions are expensive, so emerging brands often start with retailer-provided data and a panel sample, then graduate as scale justifies the cost.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">First-Party Data, Social Listening, and Search Intent</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The research landscape has shifted. Some of the richest consumer signal now comes from sources that didn't exist as “research” a decade ago, and that you increasingly own outright.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">First-Party Data Is the New Moat</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">As third-party tracking erodes, the data you collect directly (through your site, email list, loyalty program, sweepstakes, and DTC orders) becomes both a research asset and a competitive advantage. It tells you who your real buyers are, what they purchase together, and how they respond to offers. It also happens to be exactly the kind of consumer database that earns attention from retail buyers.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Social Listening</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Consumers describe their problems and praise your competitors in public every day. Monitoring brand mentions, category conversations, and review sentiment across social platforms and retailer review sections gives you unsolicited, unbiased feedback at volume. Reviews on Amazon and retailer pages are an under-used qualitative dataset: they tell you, in the buyer's words, what's working and what isn't.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Search and AI-Query Intent</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">What people type into search engines, and increasingly into AI assistants, is a direct expression of intent and unmet need. Keyword and query analysis reveals the questions your category is actually asked, the problems consumers are trying to solve, and the language they use to solve them. As shopping discovery moves into AI answer engines, understanding how consumers phrase those queries is becoming its own research discipline, and a source of demand signal you can act on quickly.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">From Data to Personas and Jobs-to-Be-Done</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Raw findings don't drive decisions on their own. You need frameworks that compress what you've learned into something a whole team can act on consistently.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Personas Built From Evidence, Not Imagination</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">A useful buyer persona is a synthesis of real research: demographics, yes, but more importantly motivations, occasions, purchase triggers, and barriers grounded in what you actually observed. The failure mode is the invented persona: a stock photo and a list of hobbies that nobody on the team believes. If a persona doesn't change how you write a headline or choose a pack size, it's decoration.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Jobs-to-Be-Done</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The jobs-to-be-done lens reframes the question from “who is the buyer?” to “what is the buyer trying to accomplish?” People don't buy a granola bar; they hire it for the job of a guilt-free 3 p.m. energy fix that fits in a bag. Define the functional, emotional, and social dimensions of that job and you get a clearer compass for the product, the pack, and the message than demographics alone will ever give you.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Functional job: the practical task the product completes</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Emotional job: how the consumer wants to feel in that moment</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Social job: how the choice signals something to others</li>
              </ul>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Sample Size, Bias, and the Traps That Quietly Mislead</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Good research can fail silently. The numbers look clean, the deck looks professional, and the conclusion is wrong because of a flaw nobody caught. A few disciplines protect you.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Getting Sample Size Right</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">For directional reads, 100 to 150 respondents per segment can reveal strong patterns. For go/no-go decisions or comparing segments against each other, plan for 300 to 400 per segment so each subgroup can stand on its own. But raw count matters less than sample quality: a small panel of genuine category buyers beats a large panel of people who'll never purchase.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">The Biases Worth Watching For</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Every method carries its own distortions. Name them up front and you can design around them.</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Selection bias: your sample doesn't reflect your real buyer</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Social desirability: people tell you the flattering answer, not the true one</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Leading questions: the wording steers the response you wanted</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Confirmation bias: you read the data to support the plan you already had</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Panel fraud: speeders and bots quietly poison cheap online samples</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The most dangerous bias is the last one in spirit: hearing what you hoped to hear. The discipline of stating your hypothesis, and what result would disprove it, before you collect data is the cheapest insurance against fooling yourself.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Turning Research Into Product, Packaging, and Messaging Decisions</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Insight that doesn't change a decision is overhead. The discipline is connecting each finding to a specific choice across the things you control.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Product</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Let the job-to-be-done dictate formulation, format, and size. If the research says your buyer's real barrier is portion guilt, a smaller pack may matter more than a new flavor. Research should prune the roadmap as much as it expands it.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Packaging</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">Use shelf and concept testing to decide which single message earns the front of the pack. The shelf is a two-second test, and research tells you which claim or visual cue actually gets noticed and understood, not which one the design team liked best in a quiet conference room.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Messaging</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The verbatims from interviews, reviews, and open-ended surveys are your copy deck. The closer your language tracks the words consumers actually use about their problem, the less your marketing has to work to be believed. This is where qualitative research pays off most directly, and where invented messaging most reliably falls flat.</p>

            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="prose prose-lg max-w-none">

              <h2 className="font-display text-3xl font-bold text-beast-black mt-0 mb-4">Lean Research for Emerging Brands (and the Mistakes to Avoid)</h2>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">You don't need an enterprise research budget to make evidence-based decisions. The highest-leverage work is often the cheapest, and the most damaging mistakes are usually free to avoid.</p>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">A Lean Research Stack</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">An emerging brand can get most of the way there on a modest budget by combining a handful of approachable methods:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Five to ten in-depth interviews with real target buyers</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> A close read of competitor reviews on Amazon and retailer sites</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> A 100 to 200 respondent survey via a low-cost online panel</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> A live A/B test on ads or a landing page before the production run</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> First-party data captured from day one through your own channels</li>
              </ul>

              <h3 className="font-display text-xl font-bold text-beast-black mb-2 mt-6">Common Mistakes</h3>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">The reality is that most research failures aren't about budget. They're about discipline. Watch for these:</p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Researching to confirm a decision you've already made</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Asking what people would do instead of observing what they actually do</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Surveying the general population instead of category buyers</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Treating one focus group as statistically meaningful</li>
                <li className="flex gap-3 text-[#4A4A4A] text-sm leading-relaxed"><span className="text-beast-pink font-bold shrink-0">→</span> Letting insights die in a deck nobody opens again</li>
              </ul>

              <p className="text-[#4A4A4A] leading-relaxed mb-4">That last one is the quiet killer. Research only creates value when it's wired into the rooms where decisions get made, which is exactly where a marketing partner earns its place. The work of translating consumer reality into the product, pack, price, and message is continuous, and it's where the strongest CPG brands separate from the rest. The methods are knowable; the discipline of acting on them, week after week, is what compounds into a brand consumers actually choose.</p>

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
              <a href="/blog/cpg-test-marketing-validating-products-before-national-rollout" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">7 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Test Marketing: Validating Products Before National Rollout</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">How smart CPG brands validate products in controlled markets first, saving millions before a national launch.</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">January 7, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-brand-storytelling-connecting-with-consumers-through-authentic-narratives" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">6 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">CPG Brand Storytelling: Connecting With Consumers Through Authentic Narratives</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Turn the consumer insight you gather into authentic brand narratives that build loyalty and stand out on shelf.</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">February 2, 2026</span>
                  <span className="text-beast-pink text-sm font-semibold">Read →</span>
                </div>
              </a>
              <a href="/blog/cpg-sweepstakes-first-party-data-playbook" className="group block bg-beast-white rounded-2xl border border-light-border p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-light-surface text-[#717171]">CPG</span>
                  <span className="text-xs text-[#717171]">8 min read</span>
                </div>
                <h3 className="font-display text-base font-bold text-beast-black mb-2 leading-snug group-hover:text-beast-pink transition-colors">The CPG Sweepstakes Playbook: How to Build a Consumer Database That Impresses Retail Buyers</h3>
                <p className="text-[#717171] text-sm leading-relaxed mb-4">Use sweepstakes to capture first-party data and build the consumer database retail buyers actually want to see.</p>
                <div className="flex items-center justify-between pt-3 border-t border-light-border">
                  <span className="text-xs text-[#717171]">March 14, 2026</span>
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
