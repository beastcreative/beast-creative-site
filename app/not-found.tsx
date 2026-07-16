import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Beast Creative Agency",
  description: "The page you're looking for doesn't exist. Head back to Beast Creative Agency.",
};

export default function NotFound() {
  return (
    <section className="min-h-screen bg-beast-black flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="section-eyebrow text-beast-pink mb-4">404</p>
        <h1 className="font-display text-5xl lg:text-7xl font-extrabold text-white uppercase tracking-normal mb-6">
          Page Not Found.
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          This page doesn&apos;t exist. Head back to the work, that&apos;s where the proof is.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="btn-primary">Back to Homepage</a>
          <a href="/work" className="btn-ghost">View Our Work</a>
        </div>
      </div>
    </section>
  );
}
