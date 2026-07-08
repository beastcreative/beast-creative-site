"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const caseStudies = [
  { name: "TEKSBuilder",             href: "/work/teksbuilder",      stat: "50+ sites" },
  { name: "Sun-Bird Seasonings",     href: "/work/sun-bird",         stat: "36,581"  },
  { name: "Williams — BTS",          href: "/work/williams-bts",     stat: "22,043"  },
  { name: "Williams — All-Stars",    href: "/work/williams-allstars",stat: "13,660"  },
  { name: "Williams Bowl",           href: "/work/williams-bowl",    stat: "6,020"   },
  { name: "Sweet Sensi",             href: "/work/sweet-sensi",      stat: "500%+"   },
  { name: "Coinline",                href: "/work/coinline",         stat: "Branding"},
  { name: "Pioneer",                 href: "/work/pioneer",          stat: "ROAS"    },
];

const services = [
  { name: "Web Design & Development", href: "/services/web-design",                      badge: "Most Requested" },
  { name: "AI App & SaaS Development", href: "/services/app-development" },
  { name: "SEO + AEO",               href: "/services/seo-aeo"                                                   },
  { name: "Paid Media",              href: "/services/paid-media"                                                },
  { name: "Branding & Identity",     href: "/services/branding"                                                  },
  { name: "AI Content Production",   href: "/services/content-production"                                        },
  { name: "CPG Marketing",           href: "/services/cpg-marketing"                                             },
];

const localServices = [
  { name: "Web Design San Antonio",        href: "/services/web-design-san-antonio" },
  { name: "SEO Agency San Antonio",        href: "/services/seo-san-antonio"         },
  { name: "Logo Design San Antonio",       href: "/services/logo-design-san-antonio" },
];

const aboutLinks = [
  { name: "About",  href: "/about" },
  { name: "Blog",   href: "/blog"  },
];


export default function Nav() {
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [workOpen, setWorkOpen]         = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen]       = useState(false);
  const pathname = usePathname();
  const workRef     = useRef<HTMLLIElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);
  const aboutRef    = useRef<HTMLLIElement>(null);

  useEffect(() => { setMobileOpen(false); }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const dropdownGlass: React.CSSProperties = {
    background: "rgba(18, 18, 18, 0.80)",
    backdropFilter: "blur(28px) saturate(180%)",
    WebkitBackdropFilter: "blur(28px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    boxShadow: "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
  };

  return (
    <>
      {/* ── Desktop floating pill ── */}
      <div className="fixed top-4 left-0 right-0 z-50 hidden lg:flex justify-center pointer-events-none">
        <nav
          aria-label="Main navigation"
          className="pointer-events-auto relative flex items-center h-14 px-3 gap-1 w-full max-w-7xl"
          style={{
            borderRadius: "999px",
            background: "rgba(12, 12, 12, 0.28)",
            backdropFilter: "blur(48px) saturate(220%) brightness(108%)",
            WebkitBackdropFilter: "blur(48px) saturate(220%) brightness(108%)",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.12)",
          }}
        >
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center px-3 py-1 focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 rounded-full"
              onClick={(e) => {
                if (pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }
              }}
            >
              <Image src="/assets/beast-logo.svg" alt="Beast Creative Agency" width={100} height={34} className="h-7 w-auto" />
            </Link>

            <div className="w-px h-4 bg-white/15 mx-1 shrink-0" />

            <ul className="flex items-center flex-1">
              {/* Work */}
              <li
                ref={workRef}
                className="relative"
                onMouseEnter={() => setWorkOpen(true)}
                onMouseLeave={() => setWorkOpen(false)}
                onKeyDown={(e) => { if (e.key === "Escape") setWorkOpen(false); }}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-3 text-sm font-semibold transition-colors rounded-full min-h-[44px] focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 ${pathname.startsWith("/work") ? "text-beast-yellow border border-beast-pink" : "text-white/80 hover:text-beast-yellow hover:bg-white/8"}`}
                  onClick={() => setWorkOpen(!workOpen)}
                  aria-expanded={workOpen}
                  aria-haspopup="true"
                >
                  Work
                  <span className={`nav-chevron${workOpen ? " open" : ""}`} aria-hidden="true"><span /></span>
                </button>
                {workOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                    <div style={dropdownGlass} className="overflow-hidden">
                      <Link href="/work" className="flex items-center justify-between px-5 py-3 text-sm font-semibold text-white hover:bg-white/8 transition-colors border-b border-white/8 focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-[-2px]">
                        All Case Studies <span className="text-xs bg-white/10 text-white px-2 py-0.5 rounded-full">7</span>
                      </Link>
                      {caseStudies.map((cs) => (
                        <Link key={cs.href} href={cs.href} className={`flex items-center justify-between px-5 py-2.5 hover:bg-white/8 transition-colors group focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-[-2px] ${pathname === cs.href ? "bg-white/8" : ""}`}>
                          <span className={`text-sm transition-colors truncate pr-3 ${pathname === cs.href ? "text-white font-semibold" : "text-white group-hover:text-white"}`}>{cs.name}</span>
                          <span className="text-xs text-beast-yellow font-bold shrink-0">{cs.stat}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Services */}
              <li
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onKeyDown={(e) => { if (e.key === "Escape") setServicesOpen(false); }}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-3 text-sm font-semibold transition-colors rounded-full min-h-[44px] focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 ${pathname.startsWith("/services") ? "text-beast-yellow border border-beast-pink" : "text-white/80 hover:text-beast-yellow hover:bg-white/8"}`}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <span className={`nav-chevron${servicesOpen ? " open" : ""}`} aria-hidden="true"><span /></span>
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                    <div style={dropdownGlass} className="overflow-hidden">
                      {services.map((s) => (
                        <Link key={s.href} href={s.href} className={`flex items-center justify-between px-5 py-3 text-sm hover:text-beast-yellow hover:bg-white/8 transition-colors focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-[-2px] ${pathname === s.href ? "text-white bg-white/8 font-semibold" : "text-white"}`}>
                          {s.name}
                          {s.badge && <span className="text-xs bg-beast-pink/20 text-beast-pink border border-beast-pink/25 px-2 py-0.5 rounded-full font-semibold">{s.badge}</span>}
                        </Link>
                      ))}
                      <div className="border-t border-white/8 px-5 py-2">
                        <p className="text-xs text-beast-pink uppercase tracking-widest font-semibold mb-1">San Antonio</p>
                      </div>
                      {localServices.map((s) => (
                        <Link key={s.href} href={s.href} className={`flex items-center px-5 py-2.5 text-sm hover:text-beast-yellow hover:bg-white/8 transition-colors focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-[-2px] ${pathname === s.href ? "text-white bg-white/8 font-semibold" : "text-white"}`}>
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* CPG plain link */}
              <li>
                <Link
                  href="/cpg"
                  className={`block px-3.5 py-3 text-sm font-semibold transition-colors rounded-full min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 ${pathname === "/cpg" ? "text-beast-yellow border border-beast-pink" : "text-white/80 hover:text-beast-yellow hover:bg-white/8"}`}
                >
                  CPG
                </Link>
              </li>

              {/* About dropdown */}
              <li
                ref={aboutRef}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
                onKeyDown={(e) => { if (e.key === "Escape") setAboutOpen(false); }}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-3 text-sm font-semibold transition-colors rounded-full min-h-[44px] focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 ${(pathname === "/about" || pathname.startsWith("/blog")) ? "text-beast-yellow border border-beast-pink" : "text-white/80 hover:text-beast-yellow hover:bg-white/8"}`}
                  onClick={() => setAboutOpen(!aboutOpen)}
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                >
                  About
                  <span className={`nav-chevron${aboutOpen ? " open" : ""}`} aria-hidden="true"><span /></span>
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-44">
                    <div style={dropdownGlass} className="overflow-hidden">
                      {aboutLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={`flex items-center px-5 py-3 text-sm hover:text-beast-yellow hover:bg-white/8 transition-colors focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-[-2px] ${pathname === link.href ? "text-white bg-white/8 font-semibold" : "text-white"}`}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              {/* Contact plain link */}
              <li>
                <Link
                  href="/contact"
                  className={`block px-3.5 py-3 text-sm font-semibold transition-colors rounded-full min-h-[44px] flex items-center focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 ${pathname === "/contact" ? "text-beast-yellow border border-beast-pink" : "text-white/80 hover:text-beast-yellow hover:bg-white/8"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="w-px h-4 bg-white/15 mx-1 shrink-0" />

            <Link href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 ml-1 !py-2.5 !px-5 !text-[10px] !tracking-[2px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
              See Where You Stand
            </Link>
        </nav>
      </div>

      {/* ── Mobile top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden flex items-center justify-between px-5 h-14" style={{ background: "rgba(12,12,12,0.35)", backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", borderBottom: "1px solid rgba(255,255,255,0.10)", boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)" }}>
        <Link href="/" onClick={(e) => { if (pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }}>
          <Image src="/assets/beast-logo.svg" alt="Beast Creative Agency" width={90} height={30} className="h-6 w-auto" />
        </Link>
        <button
          className={`mob-menu-btn${mobileOpen ? " mob-open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <span className="mob-bars-clip" aria-hidden="true">
            <span className="mob-bar-top" />
            <span className="mob-bar-mid" />
            <span className="mob-bar-bot" />
          </span>
          <span className="mob-menu-text" aria-hidden="true">CLOSE</span>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-beast-black flex flex-col transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex-1 overflow-y-auto px-8 pt-20 pb-8">
          <nav aria-label="Mobile navigation" className="space-y-1">

            {/* Work accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full font-display text-4xl font-bold text-white py-2 focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 rounded"
                onClick={() => setWorkOpen(!workOpen)}
                aria-expanded={workOpen}
              >
                Work
                <span className={`nav-chevron scale-150 mr-1 transition-transform duration-300${workOpen ? " open" : ""}`} aria-hidden="true"><span /></span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${workOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-2 pb-3 space-y-0.5 pl-2 ml-1 mt-1">
                  <Link href="/work" className="block text-sm font-semibold text-white hover:text-white py-3 px-3 transition-colors focus-visible:outline-2 focus-visible:outline-beast-pink rounded">
                    All Case Studies
                  </Link>
                  {caseStudies.map((cs) => (
                    <Link key={cs.href} href={cs.href} className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-white/5 transition-colors group focus-visible:outline-2 focus-visible:outline-beast-pink">
                      <span className="text-sm text-white group-hover:text-white transition-colors">{cs.name}</span>
                      <span className="text-xs text-beast-yellow font-bold ml-3">{cs.stat}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

              {/* Services accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full font-display text-4xl font-bold text-white py-2 focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 rounded"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <span className={`nav-chevron scale-150 mr-1 transition-transform duration-300${servicesOpen ? " open" : ""}`} aria-hidden="true"><span /></span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pl-2 pb-3 space-y-0.5 ml-1 mt-1">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-white/5 transition-colors group focus-visible:outline-2 focus-visible:outline-beast-pink">
                        <span className="text-sm text-white group-hover:text-white transition-colors">{s.name}</span>
                        {s.badge && <span className="text-xs bg-beast-pink/20 text-beast-pink border border-beast-pink/25 px-2 py-0.5 rounded-full font-semibold">{s.badge}</span>}
                      </Link>
                    ))}
                    <div className="px-3 pt-3 pb-1">
                      <p className="text-xs text-beast-pink uppercase tracking-widest font-semibold">San Antonio</p>
                    </div>
                    {localServices.map((s) => (
                      <Link key={s.href} href={s.href} className="flex items-center py-3 px-3 rounded-lg hover:bg-white/5 transition-colors group focus-visible:outline-2 focus-visible:outline-beast-pink">
                        <span className="text-sm text-white group-hover:text-white transition-colors">{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            {/* CPG plain link */}
            <Link href="/cpg" className="block font-display text-4xl font-bold text-white hover:text-beast-pink transition-colors py-2 focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 rounded">
              CPG
            </Link>

            {/* About accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full font-display text-4xl font-bold text-white py-2 focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 rounded"
                onClick={() => setAboutOpen(!aboutOpen)}
                aria-expanded={aboutOpen}
              >
                About
                <span className={`nav-chevron scale-150 mr-1 transition-transform duration-300${aboutOpen ? " open" : ""}`} aria-hidden="true"><span /></span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${aboutOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-2 pb-3 space-y-0.5 ml-1 mt-1">
                  {aboutLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block py-3 px-3 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-beast-pink">
                      <span className="text-sm text-white hover:text-white transition-colors">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact plain link */}
            <Link href="/contact" className="block font-display text-4xl font-bold text-white hover:text-beast-pink transition-colors py-2 focus-visible:outline-2 focus-visible:outline-beast-pink focus-visible:outline-offset-2 rounded">
              Contact
            </Link>
          </nav>

          <div className="mt-10 space-y-4">
            <Link href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" target="_blank" rel="noopener noreferrer" className="btn-yellow w-full justify-center !py-4 !px-6 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
              See Where You Stand in AI Search
            </Link>
            <a href="sms:+12103320567" className="block text-center text-sm text-white hover:text-beast-pink transition-colors focus-visible:outline-2 focus-visible:outline-beast-pink rounded">(210) 332-0567 — text or call</a>
          </div>
        </div>
      </div>
    </>
  );
}
