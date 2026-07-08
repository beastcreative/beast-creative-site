import Link from "next/link";
import Image from "next/image";
import IconButton from "@/components/ui/IconButton";

export default function Footer() {
  return (
    <footer className="bg-footer-black pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/assets/beast-logo.svg"
              alt="Beast Creative Agency"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-gray-500 leading-relaxed mb-4 max-w-xs">
              AI-powered marketing that actually moves the needle. CPG and digital marketing for brands scaling nationally.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/beastcreativeagency" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-beast-pink transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a href="https://www.instagram.com/beastcreativeagency" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-beast-pink transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/beast-creative-agency/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-beast-pink transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@beastcreativeagency" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-600 hover:text-beast-pink transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              Beast Creative Agency · San Antonio, TX
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-white font-semibold text-xs tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/services/web-design" className="hover:text-beast-pink transition-colors">Web Design & Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-beast-pink transition-colors">AI App & SaaS Development</Link></li>
              <li><Link href="/services/seo-aeo" className="hover:text-beast-pink transition-colors">SEO + AEO</Link></li>
              <li><Link href="/services/paid-media" className="hover:text-beast-pink transition-colors">Paid Media</Link></li>
              <li><Link href="/services/branding" className="hover:text-beast-pink transition-colors">Branding & Identity</Link></li>
              <li><Link href="/services/content-production" className="hover:text-beast-pink transition-colors">AI Content Production</Link></li>
              <li><Link href="/services/cpg-marketing" className="hover:text-beast-pink transition-colors">CPG Marketing</Link></li>
            </ul>
          </div>

          {/* Col 3: San Antonio */}
          <div>
            <h4 className="font-display text-white font-semibold text-xs tracking-widest uppercase mb-5">San Antonio</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/services/web-design-san-antonio" className="hover:text-beast-pink transition-colors">Web Design San Antonio</Link></li>
              <li><Link href="/services/seo-san-antonio" className="hover:text-beast-pink transition-colors">SEO Agency San Antonio</Link></li>
              <li><Link href="/services/logo-design-san-antonio" className="hover:text-beast-pink transition-colors">Logo Design San Antonio</Link></li>
              <li><Link href="/services/branding" className="hover:text-beast-pink transition-colors">Branding Agency San Antonio</Link></li>
              <li><Link href="/services/paid-media" className="hover:text-beast-pink transition-colors">Social Media Marketing San Antonio</Link></li>
              <li><Link href="/cpg" className="hover:text-beast-pink transition-colors">CPG Marketing Agency</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 className="font-display text-white font-semibold text-xs tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-beast-pink transition-colors">About Us</Link></li>
              <li><Link href="/work" className="hover:text-beast-pink transition-colors">Our Work</Link></li>
              <li><Link href="/blog" className="hover:text-beast-pink transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-beast-pink transition-colors">Contact</Link></li>
            </ul>
            <div className="mt-6 pt-5 border-t border-gray-800">
              <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-3">Reviews</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://clutch.co/profile/beast-creative-agency" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-beast-pink transition-colors">Clutch.co ↗</a></li>
                <li><a href="https://www.google.com/search?q=Beast+Creative+Agency+San+Antonio" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-beast-pink transition-colors">Google Reviews ↗</a></li>
              </ul>
            </div>
          </div>

          {/* Col 4: Get Started */}
          <div>
            <h4 className="font-display text-white font-semibold text-xs tracking-widest uppercase mb-5">Get Started</h4>
            <p className="text-sm text-gray-500 mb-5">No commitments. Just a free strategy conversation.</p>
            <IconButton href="https://calendar.app.google/9q1mcYgEdXNyjK8G6" icon="calendar" target="_blank" rel="noopener noreferrer" className="mb-6 max-w-full text-center !whitespace-normal !leading-tight">Free 15min Strategy Call</IconButton>
            <div className="mt-4 text-sm text-gray-600 space-y-1">
              <div>
                <a href="sms:+12103320567" className="hover:text-beast-pink transition-colors">
                  (210) 332-0567
                </a>
              </div>
              <div>San Antonio, TX</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2026 Beast Creative Agency. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
