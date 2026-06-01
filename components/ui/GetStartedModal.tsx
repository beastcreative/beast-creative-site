"use client";

import { useState, useEffect, useRef } from "react";
import IconButton from "@/components/ui/IconButton";
import AnimatedCheckmark from "@/components/ui/AnimatedCheckmark";

const services = [
  "CPG Marketing",
  "Paid Media",
  "SEO + AEO",
  "AI Content Production",
  "Branding & Identity",
  "Web Design & CRO",
  "Social Media",
  "Email Marketing",
  "Other",
];

interface Props {
  selected: string[];
  onClose: () => void;
}

export default function GetStartedModal({ selected, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Initial focus + Escape key
  useEffect(() => {
    titleRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Focus trap — re-runs when submitted changes (different focusable set after success)
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = Array.from(
      modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, services: selected }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or text us at (210) 332-0567.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gs-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div ref={modalRef} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 lg:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-beast-pink/10 flex items-center justify-center mx-auto mb-4">
                <AnimatedCheckmark className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-beast-black mb-2">You&apos;re on our radar.</h3>
              <p className="text-gray-500">We&apos;ll reach out within one business day.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 ref={titleRef} id="gs-modal-title" tabIndex={-1} className="font-display text-3xl font-bold text-beast-black mb-2 outline-none">
                  Let&apos;s Talk About Better Results.
                </h2>
                <p className="text-gray-500 text-sm">
                  Tell us about your brand and we&apos;ll reach out within one business day.
                </p>
                {selected.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {selected.map((s) => (
                      <span key={s} className="text-xs font-semibold px-3 py-1 rounded-full bg-beast-pink/10 text-beast-pink border border-beast-pink/20">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="sr-only"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label htmlFor="gs-name" className="sr-only">Full Name</label>
                  <input
                    id="gs-name"
                    required
                    maxLength={100}
                    className="form-input-light"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <label htmlFor="gs-email" className="sr-only">Email Address</label>
                  <input
                    id="gs-email"
                    required
                    type="email"
                    maxLength={254}
                    className="form-input-light"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label htmlFor="gs-company" className="sr-only">Company or Brand</label>
                  <input
                    id="gs-company"
                    maxLength={200}
                    className="form-input-light"
                    placeholder="Company / Brand"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                  <label htmlFor="gs-phone" className="sr-only">Phone Number</label>
                  <input
                    id="gs-phone"
                    type="tel"
                    maxLength={30}
                    className="form-input-light"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <label htmlFor="gs-budget" className="sr-only">Monthly Marketing Budget</label>
                <select
                  id="gs-budget"
                  className="form-input-light"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  <option value="">Monthly Marketing Budget</option>
                  <option>Under $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
                <label htmlFor="gs-message" className="sr-only">Tell us about your brand and goals</label>
                <textarea
                  id="gs-message"
                  maxLength={2000}
                  className="form-input-light resize-none"
                  rows={3}
                  placeholder="Tell us about your brand and goals (optional)"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {error && (
                  <p className="text-red-500 text-sm text-center" role="alert">{error}</p>
                )}
                <IconButton type="submit" icon="calendar" disabled={loading} className="w-full justify-center">
                  {loading ? "Sending..." : "See Where You Stand in AI Search"}
                </IconButton>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
