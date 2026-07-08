"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetStartedModal from "@/components/ui/GetStartedModal";
import IconButton from "@/components/ui/IconButton";

type Client = {
  name: string;
  logo?: { src: string; width: number; height: number };
  href?: string;
};

const clients: Client[] = [
  { name: "Williams Foods", logo: { src: "/assets/logos/williams.png", width: 669, height: 150 }, href: "/work/williams-bts" },
  { name: "Sun-Bird Seasonings", logo: { src: "/assets/logos/sunbird.png", width: 274, height: 150 }, href: "/work/sun-bird" },
  { name: "Sweet Sensi", logo: { src: "/assets/logos/sweetsensi.png", width: 757, height: 150 }, href: "/work/sweet-sensi" },
  { name: "Coinline", logo: { src: "/assets/logos/coinline.png", width: 524, height: 90 }, href: "/work/coinline" },
  { name: "Pioneer", logo: { src: "/assets/logos/pioneer.png", width: 182, height: 117 }, href: "/work/pioneer" },
  { name: "TEKSBuilder", logo: { src: "/assets/logos/teksbuilder.png", width: 1000, height: 135 }, href: "/work/teksbuilder" },
];

const services = [
  "CPG Marketing",
  "Paid Media",
  "SEO + AEO",
  "AI Content Production",
  "Branding & Identity",
  "Web Design & CRO",
  "Social Media",
  "App & SaaS Development",
  "Other",
];

export default function ClientListSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <>
      <section className="bg-beast-black py-16 lg:py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — client grid */}
            <div>
              <p className="section-eyebrow text-gray-600 mb-3">Client List</p>
              <h2 className="font-display text-3xl font-bold text-white mb-6">Proven. Not Promised.</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {clients.map((client) => {
                  const inner = (
                    <div
                      className="rc-wrap group block h-full"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                      }}
                    >
                      <div className="rc-card flex flex-col items-center justify-center gap-3 px-4 py-8 min-h-[128px]">
                        <div className="rc-glow" />
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          {client.logo && (
                            <div className="flex items-center justify-center h-8 sm:h-9">
                              <Image
                                src={client.logo.src}
                                alt={`${client.name} logo`}
                                width={client.logo.width}
                                height={client.logo.height}
                                className="h-auto w-auto max-h-8 max-w-[110px] sm:max-h-9 sm:max-w-[140px] object-contain opacity-55 group-hover:opacity-85 transition-opacity"
                              />
                            </div>
                          )}
                          <span className="font-display font-bold text-sm text-white/40 group-hover:text-white/70 transition-colors text-center leading-tight">
                            {client.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                  return client.href ? (
                    <Link key={client.name} href={client.href} aria-label={`View ${client.name} case study`} className="block h-full">
                      {inner}
                    </Link>
                  ) : (
                    <div key={client.name} className="h-full">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — service selector */}
            <div>
              <p className="section-eyebrow text-gray-600 mb-3">What can we help with?</p>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Select Your Services.
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {services.map((s) => {
                  const active = selected.includes(s);
                  return (
                    <button
                      key={s}
                      onClick={() => toggle(s)}
                      className={`flex items-center gap-2.5 px-3 py-3 rounded-xl border text-sm font-medium text-left transition-all duration-150 ${
                        active
                          ? "bg-beast-pink/15 border-beast-pink text-beast-pink"
                          : "bg-white/4 border-white/10 text-gray-400 hover:border-white/25 hover:text-white active:scale-[0.97]"
                      }`}
                    >
                      <span className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-colors ${
                        active ? "bg-beast-pink border-beast-pink" : "border-gray-600"
                      }`}>
                        {active && (
                          <svg className="w-2.5 h-2.5 text-beast-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      {s}
                    </button>
                  );
                })}
              </div>
              <IconButton onClick={() => setModalOpen(true)} icon="rocket" className="w-full justify-center">
                Get Started
              </IconButton>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <GetStartedModal selected={selected} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
