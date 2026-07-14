# BRIEFS.md — Homepage Redesign Constitution ("The Ledger")

Signature Build Workflow constitution for the beastcreativeagency.com homepage redesign.
Built on the isolated `/redesign` route. Same copy as the live homepage — design/layout/motion only.

## North Star
"Marketing that shows its work." The redesign makes that ethos **literal**: Beast's real
numbers are treated as live, on-screen proof — mono system readouts, a visible grid, and an
editorial "ledger" of receipts. Concept name: **The Ledger**.

## Non-negotiables (apply to every section)
1. **Copy is frozen.** Every headline, stat, service description, FAQ, and CTA is word-for-word
   from the current `app/page.tsx`. No new marketing claims, no fabricated numbers.
2. **Light-first, dark as punctuation.** Default sections are light (off-white/white). Dark bands
   only where they hit hardest: the stats ("Receipts"), "Google Zero" shift, and final CTA.
3. **Beast tokens only.** pink `#FF1198`, yellow `#FFFF00`, green `#00F763`, black `#0A0A0A`,
   off-white `#FAFAFA`. Named token utilities — never raw hex or generic grays.
4. **Mobile-first, verified at 375px.** No horizontal scroll. Everything reflows.
5. **Fast + clean.** CSS + IntersectionObserver reveals over heavy JS. Reduced-motion safe.
   No new heavy dependencies (GSAP/framer already present, use sparingly).
6. **EEAT + AEO preserved.** One `<h1>`, correct `<h2>` hierarchy, SSR primary content, FAQPage
   + Organization + LocalBusiness JSON-LD intact, descriptive alt text, founder/experience signals.

## Signature techniques (the visual language)
- **Mono system labels** (`font-mono-brand`, JetBrains Mono): micro-readouts in uppercase —
  live San Antonio time, coordinates `29.42°N 98.49°W`, status dots, index numbers `[01]`.
- **Visible grid**: crosshair `+` corner markers, hairline dividers, vertical rules.
- **Oversized condensed display** (Barlow Condensed 800/900): hero + section headings, big ghost
  index numbers behind content (Anubi/RightClick).
- **Kinetic reveals**: staggered fade/rise on scroll via IntersectionObserver; a floating tilted
  proof card in the hero. Tasteful, not everywhere.

## Reference distillation
- **Datalands** → giant display anchor, mono micro-labels, live clock, minimal negative space.
- **Anubi** → light/dark alternation, ghost oversized type behind headings, hairline service lists,
  numbered image project cards w/ category + "explore" microlabel.
- **RightClick** → condensed yellow display on dark, mono body, big ghost numbers, floating tilt card.
- **Haoqi** → airy light hero, mono system readouts (clock/coords), grid crosshairs, refined restraint.

## Section map (client journey — same copy, new design)
1. **Hero** — LIGHT. System bar + mono eyebrow + giant condensed h1 (pink highlight) + subhead +
   lead + 2 CTAs. Signature: floating tilted "proof card" stack of real numbers + grid crosshairs.
2. **The Receipts** (stats) — DARK. 4 real stats as a ledger readout, big condensed numbers,
   hairline dividers, index labels. The credibility punch.
3. **Trusted by** — LIGHT. Client logo wall (existing greyscale logos).
4. **Who We Are** — LIGHT. Ghost "BEAST" display behind; founded-2020 / team EEAT copy.
5. **Reviews** — LIGHT. Existing ReviewBadges strip (trust).
6. **Work** — DARK. Anubi-style numbered case-study cards with real images (teksbuilder, williams-bts,
   sun-bird, sweet-sensi) + category + "view case study" microlabel.
7. **Services** — LIGHT. Flagship SEO/AEO card + big ghost-number hairline list (6 more).
8. **The Shift / Google Zero** — DARK. Editorial "why now" statement.
9. **CPG callout** — LIGHT (green accent). Track-record proof.
10. **Process** — LIGHT. 4 numbered steps.
11. **FAQ** — LIGHT. Accordion (FAQPage schema).
12. **Final CTA + Contact** — DARK. InstantContact + ContactForm.

Rhythm: L · D · L · L · L · D · L · D · L · L · L · D — light-dominant, dark punctuation.

## Reused primitives (don't rebuild)
`StatCounter`, `FaqAccordion`, `ContactForm`, `InstantContact`, `ReviewBadges`, `IconButton`.

## New components (`components/redesign/`)
`SystemBar` (live mono readout), `Reveal` (IO scroll reveal), plus inline grid/crosshair CSS.

## Isolation & ship
- Route `app/redesign/page.tsx`, `robots: { index:false, follow:false }`, not in nav/sitemap.
- Nothing touches `app/page.tsx` until John approves. Swap-in is a later, one-move step.
