import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RelatedCaseStudies from "@/components/ui/RelatedCaseStudies";
import StatCounter from "@/components/ui/StatCounter";
import ColorSwatches from "@/components/ui/ColorSwatches";
import IconButton from "@/components/ui/IconButton";
import CoinlineHero from "@/components/ui/CoinlineHero";
import ExpandingFlexCards from "@/components/ui/ExpandingFlexCards";

export const metadata: Metadata = {
  title: "Coinline Barcade Brand Identity | Beast Creative Agency Case Study",
  description:
    "How Beast Creative Agency named, branded, and launched Coinline Barcade — a retro-modern arcade brand built from zero into a full visual identity system with logo, apparel, signage, and digital presence.",
};

export default function CoinlinePage() {
  return (
    <>
      <CoinlineHero />

      {/* STATS BAR */}
      <section className="bg-beast-yellow py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
            <StatCounter value={1} label="Brand Name Created" sublabel="zero-explanation brand" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={8} label="Logo Variations" sublabel="delivered and ready" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={6} label="Month Sprint" sublabel="concept to full launch" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
            <StatCounter value={100} suffix="%" label="Built From Zero" sublabel="name · identity · strategy" valueClassName="text-beast-black" labelClassName="text-beast-black/60" sublabelClassName="text-beast-black/40" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* MAIN — 2/3 */}
            <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">

              {/* The Brief */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Brief</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">Build a Brand That Feels Like the Arcade Smells.</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A new barcade concept was coming to life — a modern bar and arcade fusion built around the authentic 80s and 90s arcade experience. The founders came to Beast with one clear vision: build a brand that doesn&apos;t just look like a retro arcade, but <em>feels</em> like one from the moment someone sees the logo on a t-shirt to the moment they walk through the door.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The brief wasn&apos;t just a logo. It was a full brand universe — name, visual identity, tone of voice, marketing strategy, apparel, signage, social presence, and a website that played like a game. Every consumer touchpoint had to carry the same electric energy: the coins, the cabinets, the crowd, the culture.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The competitive landscape was a clear opportunity. Most arcade bars in the market had minimal visual identity — generic neon signs and stock photography. Beast saw a wide-open lane to build something that dominated visually and set a standard for what a modern arcade brand could look like.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "No name.", detail: "The founders had a concept, a location, and a vision — but no brand name. Beast had to start from zero." },
                    { label: "Dual audience.", detail: "The brand needed to resonate with nostalgia-driven adults who grew up in arcades AND younger audiences discovering arcade culture for the first time." },
                    { label: "Experience brand.", detail: "Unlike a product or service, an arcade barcade is the experience. The brand had to work as environmental design, wearable merchandise, digital content, and a physical space — simultaneously." },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3">
                      <span className="text-beast-pink font-bold mt-0.5 shrink-0">→</span>
                      <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-beast-black">{item.label}</strong> {item.detail}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Logo Animation */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Mark</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">A Logo Built to Move.</h2>
                <p className="text-gray-600 leading-relaxed">
                  The Coinline wordmark was engineered for motion from day one. Every letterform — geometric, modular, and pixel-exact — was designed to animate as fluidly as it prints. This is the logo in its element.
                </p>
              </AnimatedSection>

              <div
                className="rounded-2xl overflow-hidden bg-beast-black"
                style={{ boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.3)" }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Coinline logo animation"
                  className="w-full h-auto block"
                >
                  <source src="/assets/coinline-logo-animation.mp4" type="video/mp4" />
                </video>
              </div>

              {/* The Process */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">Our Approach</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-6">Research First. Then We Named a Brand.</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-2">1. Deep Research Into Arcade Culture</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Before a single logo concept or color palette was touched, Beast went deep into arcade culture — the history, the language, the iconography, the community. What were the authentic signals that dedicated arcade players would recognize? What were the visual codes that defined that era?
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">The research pointed toward three design pillars:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { label: "Pixelated Graphics", detail: "Pay homage to old-school gaming and the art style of the era. A cultural signal, not just decoration." },
                        { label: "Gaming Elements", detail: "Specific, considered references from arcade culture — not generic game controllers slapped on a logo." },
                        { label: "Modern Typeface", detail: "Contemporary typeface design to give the brand an updated feel. Retro-modern, not retro-only." },
                      ].map((p) => (
                        <div key={p.label} className="bg-white rounded-xl p-4 border border-gray-100">
                          <p className="font-display font-bold text-beast-black text-sm mb-1">{p.label}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{p.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-2">2. The Naming Process</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Beast ran through a full naming exercise — dozens of candidates across multiple naming frameworks: descriptive, evocative, abstract, cultural reference, invented. The criteria were strict: relevant without being generic, scalable beyond a single location, memorable and ownable, works visually as a logo, and ambiguous enough to intrigue people who don&apos;t know the reference.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      One name kept rising to the top: <strong className="text-beast-black">Coinline.</strong>
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      A coin line is a line-up system from classic video game arcades — the method by which players reserved their spot on a high-demand machine by placing coins on the cabinet&apos;s bezel. It&apos;s a piece of genuine arcade culture: tactile, competitive, social, and completely specific to the era.
                    </p>
                    <div className="bg-beast-black rounded-xl p-5 mt-4">
                      <p className="font-display font-bold text-beast-pink text-sm uppercase tracking-widest mb-2">Why It Works</p>
                      <p className="text-gray-300 text-sm leading-relaxed">People who know it immediately feel the nostalgia. People who don&apos;t know it still understand the concept instinctively — coins, line, waiting to play. It&apos;s short, brandable, and looks exceptional as a logo wordmark.</p>
                      <p className="font-display font-bold text-white text-lg mt-3">Coin + Line = Coinline.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-2">3. Logo Design System</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      With the name locked, Beast designed a custom logo wordmark built around three forces working together:
                    </p>
                    <div className="space-y-3">
                      {[
                        { label: "Pixel Architecture", detail: "The letterforms incorporate pixel-level geometric cutouts and structural elements that reference 8-bit and 16-bit era graphics without being a literal pixel font. The \"O\" in Coinline features a centered square detail — a subtle coin icon embedded directly into the wordmark." },
                        { label: "Custom Typeface Treatment", detail: "The base letterforms are drawn custom with angular cuts, geometric precision, and a lowercase treatment that feels modern and approachable while the structure feels engineered and sharp. This isn't a font download — it's a designed system." },
                        { label: "Flexibility Built In", detail: "Beast designed the logo to work across every surface the brand would touch: neon signage, embroidered apparel, digital screens, printed tokens, merchandise. Eight logo variants were developed covering every use case." },
                      ].map((item) => (
                        <div key={item.label} className="flex gap-3">
                          <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-beast-black">{item.label}:</strong> {item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-3">The References That Built the Mark.</h3>
                    <p className="text-gray-600 leading-relaxed mb-5">Every creative decision traces back to a specific visual source. Click or tap each card to see what shaped the Coinline logo system and why.</p>
                    <ExpandingFlexCards />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-2">4. Color System</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">The brand color palette was built to capture the visual language of arcade culture at its peak — neon-lit, high-contrast, electric. <span className="text-beast-pink font-semibold">Click any swatch to copy the hex code.</span></p>
                    <ColorSwatches />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-beast-black mb-2">5. Tone of Voice</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The brand voice was defined as: <em className="text-beast-black">Nostalgic but Never Dated. Playful but Never Childish. Confident but Never Exclusive.</em>
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Insert Coin", detail: "Gaming language used naturally, never forced" },
                        { label: "Play Together", detail: "Community-first; arcades are social" },
                        { label: "Level Up", detail: "Growth, improvement, beating the high score" },
                        { label: "Old School Soul", detail: "Authentic reverence for the culture" },
                      ].map((p) => (
                        <div key={p.label} className="bg-white rounded-xl p-4 border border-gray-100">
                          <p className="font-display font-bold text-beast-black text-sm mb-1">{p.label}</p>
                          <p className="text-xs text-gray-500">{p.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* The Solution */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">What We Built</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">A Brand Ready to Own Every Surface It Touches.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  When the six-month brand development sprint was complete, Coinline had a full brand system ready to deploy — not just a logo, but a living identity that could scale.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Brand Name & Strategy", detail: "The name Coinline, its rationale, cultural positioning, and competitive differentiation — documented so every team member and partner can communicate it consistently." },
                    { label: "Complete Logo System (8 Variants)", detail: "Base wordmark, full color with BARCADE descriptor, dark/light versions, B&W, horizontal lockup, CL22 shorthand mark, and stacked variant." },
                    { label: "Visual Identity System", detail: "Color palette with exact values, typography system, graphic texture library (pixel grids, geometric patterns, scan lines, triangle motifs), and photography direction guidelines." },
                    { label: "Apparel & Merchandise", detail: "Launch apparel collection including the signature CRT-inspired geometric triangle pattern — designed to be worn by staff and sold as merch, marketing the brand every time worn in public." },
                    { label: "Digital & Social Foundation", detail: "Platform setup strategy, profile optimization, content pillars, and the foundational 90-day content calendar covering Instagram, Facebook, and gaming-culture platforms." },
                    { label: "Website Architecture & Strategy", detail: "Full site architecture, content strategy, and design direction built to function as an interactive brand experience — not just an information page." },
                    { label: "Go-To-Market Plan", detail: "First six months of brand launch: SEO/SEM foundation, community integration strategy, relationship-building with industry partners including Arcade1Up, and the event framework for opening-week foot traffic." },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-5 border border-gray-100">
                      <p className="font-display font-bold text-beast-black text-sm mb-2">{item.label}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* The Results */}
              <AnimatedSection>
                <p className="section-eyebrow text-beast-pink mb-2">The Results</p>
                <h2 className="font-display text-3xl font-bold text-beast-black mb-4">A Brand With Legs. And Pixels.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Coinline launched with a brand identity strong enough to command attention before a single cabinet was plugged in. The visual system did what great brand design is supposed to do — it communicated the entire promise of the experience in a single glance.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { label: "Zero to Recognizable", detail: "Starting from a concept with no name and no visual identity, Beast delivered a complete brand system that looks like it has been operating for years." },
                    { label: "Community-Ready", detail: "Coinline's grounding in real arcade culture — the coin line system, pixel-era aesthetics, authentic gaming references — gave it immediate credibility with the audience it was designed to serve." },
                    { label: "Scalable System", detail: "The logo variants, color system, and graphic library were built to scale from a single location to a franchise. Every future application has clear direction without requiring another full design engagement." },
                    { label: "Merchandise That Markets", detail: "The apparel design system turns every staff member and loyal customer into a walking billboard. The geometric pattern works as a standalone graphic without the wordmark — a mark of a truly mature brand identity." },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <svg className="w-4 h-4 text-beast-pink shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <p className="text-gray-600 text-sm leading-relaxed"><strong className="text-beast-black">{item.label} —</strong> {item.detail}</p>
                    </li>
                  ))}
                </ul>

                {/* Testimonial */}
                <blockquote className="border border-beast-pink/20 bg-beast-pink/5 rounded-xl px-6 py-4">
                  <p className="text-beast-black font-medium italic text-lg leading-relaxed">
                    &quot;I came to Beast Creative with just an idea. They helped turn it into a full brand — logo, voice, website strategy, everything. What I have now isn&apos;t just a product, it&apos;s a brand people connect with. I couldn&apos;t have built this without them.&quot;
                  </p>
                  <footer className="mt-3 text-sm text-gray-500">— Coinline Barcade Founder</footer>
                </blockquote>
              </AnimatedSection>

            </div>

            {/* SIDEBAR — 1/3 */}
            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-5">Campaign Overview</h3>
                  {[
                    { label: "Client", value: "Coinline Barcade" },
                    { label: "Industry", value: "Entertainment / Hospitality" },
                    { label: "Project Type", value: "Full Brand Identity & Launch Strategy" },
                    { label: "Timeline", value: "6-Month Sprint" },
                    { label: "Year", value: "2022" },
                    { label: "Services", value: "Naming, Logo Design, Visual Identity, Tone of Voice, Marketing Strategy, Apparel, Digital Strategy" },
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
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">Deliverables</h3>
                  <div className="space-y-3">
                    {[
                      "Brand Naming & Strategy",
                      "Custom Logo System (8 Variants)",
                      "Color & Typography System",
                      "Graphic Asset Library",
                      "Apparel & Merch Design",
                      "Digital & Social Strategy",
                      "Website Architecture",
                      "Go-To-Market Plan",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-beast-pink shrink-0" />
                        <span className="text-sm text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-beast-pink mb-4">Brand Pillars</h3>
                  {[
                    { label: "Insert Coin", detail: "Game-aware language, used naturally" },
                    { label: "Play Together", detail: "Community-first messaging" },
                    { label: "Level Up", detail: "Growth and competitive spirit" },
                    { label: "Old School Soul", detail: "Authentic cultural reverence" },
                  ].map((item) => (
                    <div key={item.label} className="mb-4 last:mb-0">
                      <p className="font-display font-bold text-beast-black text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      <RelatedCaseStudies related={["sweet-sensi", "williams-allstars", "sun-bird"]} />

      <section className="bg-beast-black py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to Build Your Brand from Zero?</h2>
            <p className="text-gray-400 mb-8">Whether you have a name or just an idea, Beast builds brand identities designed to last. Let&apos;s talk about where you&apos;re starting and where you want to go.</p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="rocket" target="_blank" rel="noopener noreferrer">See Where You Stand in AI Search</IconButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
