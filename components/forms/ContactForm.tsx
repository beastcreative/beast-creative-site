"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import IconButton from "@/components/ui/IconButton";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  dark?: boolean;
  submitLabel?: string;
}

export default function ContactForm({
  dark = true,
  submitLabel = "Send My Message →",
}: ContactFormProps) {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setRedirecting(true);
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or text us at (210) 332-0567.");
    }
  };

  const inputClass = dark ? "form-input" : "form-input-light";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="sr-only">Your Name</label>
          <input
            {...register("name")}
            id="contact-name"
            type="text"
            placeholder="Your Name *"
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <p id="contact-name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">Email Address</label>
          <input
            {...register("email")}
            id="contact-email"
            type="email"
            placeholder="Email Address *"
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          {errors.email && (
            <p id="contact-email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
          <input
            {...register("phone")}
            id="contact-phone"
            type="tel"
            placeholder="Phone Number"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="sr-only">Company or Brand Name</label>
          <input
            {...register("company")}
            id="contact-company"
            type="text"
            placeholder="Company / Brand Name"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-service" className="sr-only">Service you are interested in</label>
        <select
          {...register("service")}
          id="contact-service"
          className={inputClass}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "contact-service-error" : undefined}
        >
          <option value="">What are you most interested in? *</option>
          <option>CPG Marketing &amp; Campaigns</option>
          <option>SEO + Answer Engine Optimization</option>
          <option>Paid Social Media Advertising</option>
          <option>AI Content Production</option>
          <option>Branding &amp; Identity</option>
          <option>Web Design &amp; Development</option>
          <option>App / SaaS Development</option>
          <option>Not sure, let&apos;s talk</option>
        </select>
        {errors.service && (
          <p id="contact-service-error" className="text-red-400 text-xs mt-1" role="alert">{errors.service.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">Tell us about your brand and goals</label>
        <textarea
          {...register("message")}
          id="contact-message"
          rows={4}
          placeholder="Tell us about your brand and goals..."
          className={inputClass}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message.message}</p>
        )}
      </div>
      {error && <p className="text-red-400 text-sm" role="alert">{error}</p>}
      <IconButton type="submit" icon="send" disabled={isSubmitting || redirecting} className="w-full justify-center">
        {isSubmitting || redirecting ? "Sending..." : submitLabel}
      </IconButton>
      <p className={`text-xs text-center ${dark ? "text-gray-600" : "text-gray-400"}`}>
        No spam. No commitments. We&apos;ll respond within 1 business day.
      </p>
    </form>
  );
}
