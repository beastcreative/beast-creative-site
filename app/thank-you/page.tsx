import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCheckmark from "@/components/ui/AnimatedCheckmark";
import IconButton from "@/components/ui/IconButton";

export const metadata: Metadata = {
  alternates: { canonical: "https://beastcreativeagency.com/thank-you" },
  title: "Thank You",
  description: "We got your message and we'll be in touch within one business day.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ThankYouPage() {
  return (
    <section className="relative bg-beast-black pt-28 pb-24 lg:pt-44 lg:pb-32 overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-20 text-center w-full">
        <AnimatedSection>
          <div className="w-16 h-16 rounded-full bg-beast-pink/15 border border-beast-pink/30 flex items-center justify-center mx-auto mb-6">
            <AnimatedCheckmark className="w-8 h-8" />
          </div>
          <p className="section-eyebrow text-beast-pink mb-4">Message Received</p>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-white tracking-normal mb-6">
            Thank You.
          </h1>
          <p className="text-body-lead text-gray-300 max-w-xl mx-auto mb-10">
            We got your message. A real person on our team will read it and reach
            out within one business day. Need us sooner? Text us at (210) 350-9560.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <IconButton href="/">Back to Home</IconButton>
            <IconButton href="/blog" variant="ghost">
              Read the Blog
            </IconButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
