"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import IconButton from "@/components/ui/IconButton";

const schema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email required").max(254),
  phone: z.string().max(30).optional(),
  company: z.string().min(1, "Brand/company name required").max(200),
  revenue: z.string().min(1, "Please select revenue range").max(50),
  challenge: z.string().min(1, "Please select your biggest challenge").max(100),
  message: z.string().max(2000).optional(),
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export default function CpgLeadForm() {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: "CPG Marketing" }),
      });
      if (!res.ok) throw new Error("Failed");
      setRedirecting(true);
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Text us at (210) 332-0567.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Honeypot */}
      <input
        {...register("website")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cpg-name" className="sr-only">Your Name</label>
          <input
            {...register("name")}
            id="cpg-name"
            type="text"
            placeholder="Your Name *"
            maxLength={100}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "cpg-name-error" : undefined}
            className="form-input"
          />
          {errors.name && (
            <p id="cpg-name-error" role="alert" className="text-red-400 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cpg-email" className="sr-only">Email Address</label>
          <input
            {...register("email")}
            id="cpg-email"
            type="email"
            placeholder="Email Address *"
            maxLength={254}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "cpg-email-error" : undefined}
            className="form-input"
          />
          {errors.email && (
            <p id="cpg-email-error" role="alert" className="text-red-400 text-xs mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cpg-phone" className="sr-only">Phone Number</label>
          <input
            {...register("phone")}
            id="cpg-phone"
            type="tel"
            placeholder="Phone Number"
            maxLength={30}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="cpg-company" className="sr-only">Brand / Company Name</label>
          <input
            {...register("company")}
            id="cpg-company"
            type="text"
            placeholder="Brand / Company Name *"
            maxLength={200}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "cpg-company-error" : undefined}
            className="form-input"
          />
          {errors.company && (
            <p id="cpg-company-error" role="alert" className="text-red-400 text-xs mt-1">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="cpg-revenue" className="sr-only">Annual Revenue Range</label>
        <select
          {...register("revenue")}
          id="cpg-revenue"
          aria-invalid={!!errors.revenue}
          aria-describedby={errors.revenue ? "cpg-revenue-error" : undefined}
          className="form-input"
        >
          <option value="">Annual Revenue Range *</option>
          <option>Under $500K</option>
          <option>$500K-$5M</option>
          <option>$5M-$20M</option>
          <option>$20M-$50M</option>
          <option>$50M+</option>
        </select>
        {errors.revenue && (
          <p id="cpg-revenue-error" role="alert" className="text-red-400 text-xs mt-1">
            {errors.revenue.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="cpg-challenge" className="sr-only">Biggest Marketing Challenge</label>
        <select
          {...register("challenge")}
          id="cpg-challenge"
          aria-invalid={!!errors.challenge}
          aria-describedby={errors.challenge ? "cpg-challenge-error" : undefined}
          className="form-input"
        >
          <option value="">Biggest Marketing Challenge *</option>
          <option>No consumer data</option>
          <option>Low ad performance</option>
          <option>Need retail-ready proof</option>
          <option>Content at scale</option>
          <option>Multi-brand SEO</option>
          <option>Other</option>
        </select>
        {errors.challenge && (
          <p id="cpg-challenge-error" role="alert" className="text-red-400 text-xs mt-1">
            {errors.challenge.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="cpg-message" className="sr-only">Tell us about your brand and goals</label>
        <textarea
          {...register("message")}
          id="cpg-message"
          rows={4}
          placeholder="Tell us about your brand and goals..."
          maxLength={2000}
          className="form-input"
        />
      </div>
      {error && (
        <p role="alert" className="text-red-400 text-sm">{error}</p>
      )}
      <IconButton type="submit" icon="send" disabled={isSubmitting || redirecting} className="w-full justify-center">
        {isSubmitting || redirecting ? "Sending..." : "Send My Message"}
      </IconButton>
      <p className="text-xs text-gray-600 text-center">
        No spam. No commitments. We&apos;ll respond within 1 business day.
      </p>
    </form>
  );
}
