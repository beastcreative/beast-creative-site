import { generateMetadata as genMeta } from "@/lib/seo";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = genMeta({
  title: "Privacy Policy",
  description:
    "How Beast Creative Agency collects, uses, and protects the information you share through our website and contact form.",
  path: "/privacy",
});

const LAST_UPDATED = "June 2, 2026";

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
};

const sections: Section[] = [
  {
    heading: "Who We Are",
    body: [
      "Beast Creative Agency (“Beast Creative,” “we,” “us,” or “our”) is a marketing agency based in San Antonio, Texas, serving brands nationwide. This Privacy Policy explains how we handle information collected through beastcreativeagency.com (the “Site”).",
      "By using the Site or submitting information through it, you agree to the practices described here.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Information you provide directly: When you fill out our contact form, you may give us your name, email address, phone number, company name, the services you are interested in, and any message you choose to send.",
      "Information collected automatically: When you visit the Site, we and our analytics providers may automatically collect your IP address, browser type, device information, pages viewed, referring URLs, and similar usage data through cookies and comparable technologies.",
    ],
  },
  {
    heading: "How We Use Your Information",
    list: [
      "Respond to your inquiries and follow up about our services.",
      "Provide, operate, and improve the Site and our services.",
      "Understand how visitors use the Site so we can make it better.",
      "Send you information you have requested or that relates to a project we are discussing.",
      "Protect the Site, prevent abuse, and comply with legal obligations.",
    ],
  },
  {
    heading: "Cookies and Analytics",
    body: [
      "We use Google Analytics (GA4) to understand Site traffic and usage. Google Analytics sets cookies that help us measure how visitors interact with the Site. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on, and most browsers let you block or delete cookies through their settings.",
      "We do not use this data to identify you personally; it is used in aggregate to improve the Site.",
    ],
  },
  {
    heading: "How We Share Information",
    body: [
      "We do not sell your personal information. We share information only with service providers who help us operate the Site and respond to you, and only as needed for them to perform those functions:",
    ],
    list: [
      "Hosting and infrastructure (e.g., our website host) to serve the Site.",
      "Email delivery (e.g., our transactional email provider) to receive and respond to your contact form messages.",
      "Analytics (e.g., Google Analytics) to measure Site usage.",
      "When required by law, to comply with legal process, or to protect our rights, safety, or property.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "We keep the information you submit for as long as needed to respond to your inquiry, provide our services, and meet our legal and business requirements. When it is no longer needed, we delete or anonymize it.",
    ],
  },
  {
    heading: "Your Rights and Choices",
    body: [
      "Depending on where you live, you may have the right to access, correct, or delete the personal information we hold about you, and to opt out of certain uses. To make a request, contact us using the details below and we will respond as required by applicable law.",
      "California residents: We do not sell personal information. You may request access to or deletion of your personal information and will not be discriminated against for exercising these rights.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We use reasonable administrative and technical safeguards to protect the information we collect. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Children’s Privacy",
    body: [
      "The Site is not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us and we will delete it.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above. Your continued use of the Site after changes take effect means you accept the updated policy.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your information, reach out:",
      "Beast Creative Agency, San Antonio, TX",
      "Email: hello@beastcreativeagency.com",
      "Phone: (210) 332-0567",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Legal</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-3xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              How we collect, use, and protect the information you share with us.
            </p>
            <p className="text-sm text-gray-500 mt-6">Last updated: {LAST_UPDATED}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-section-offwhite py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-20">
          {sections.map((section, i) => (
            <AnimatedSection key={section.heading} delay={i * 0.03}>
              <div className="mb-12">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-beast-black tracking-normal mb-4">
                  {section.heading}
                </h2>
                {section.body?.map((p, j) => (
                  <p key={j} className="text-gray-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed">
                    {section.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
