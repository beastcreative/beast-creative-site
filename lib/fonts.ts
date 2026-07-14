import { Barlow_Condensed, Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Scoped mono for the redesign's "system readout" labels. Applied only via the
// .font-mono-brand class so existing pages are untouched.
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono-brand",
  display: "swap",
});

// Scoped serif accent for the /redesign-2 "Screening Room" route only.
// The variable class is applied on that page's root div — layout.tsx untouched.
export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-accent",
  display: "swap",
});
