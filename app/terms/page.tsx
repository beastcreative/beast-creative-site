import { generateMetadata as genMeta } from "@/lib/seo";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = genMeta({
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Beast Creative Agency website.",
  path: "/terms",
});

const LAST_UPDATED = "June 2, 2026";

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
};

const sections: Section[] = [
  {
    heading: "Acceptance of These Terms",
    body: [
      "These Terms of Service (“Terms”) govern your access to and use of beastcreativeagency.com (the “Site”), operated by Beast Creative Agency (“Beast Creative,” “we,” “us,” or “our”). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
    ],
  },
  {
    heading: "Use of the Site",
    body: [
      "You may use the Site for lawful purposes only. You agree not to use the Site in any way that could damage, disable, or impair it, interfere with another party’s use of it, or attempt to gain unauthorized access to any systems or data connected to it.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "The Site and its content, including text, graphics, logos, case studies, images, and design, are owned by Beast Creative or its licensors and are protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of the Site without our prior written permission.",
    ],
  },
  {
    heading: "Submissions and Communications",
    body: [
      "When you submit information through our contact form or otherwise communicate with us, you confirm that the information is accurate and that you have the right to share it. Submitting an inquiry does not create a client relationship; any engagement is governed by a separate written agreement.",
      "Your submissions are handled in accordance with our Privacy Policy.",
    ],
  },
  {
    heading: "Case Studies and Results",
    body: [
      "Any metrics, case studies, or results described on the Site reflect outcomes for specific clients under specific conditions. They are provided for illustration and are not a guarantee or promise of similar results for any other business.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "The Site may contain links to third-party websites or services that we do not control. We are not responsible for the content, policies, or practices of those third parties, and linking to them does not imply our endorsement.",
    ],
  },
  {
    heading: "Disclaimer of Warranties",
    body: [
      "The Site is provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied, including any implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Beast Creative and its owners, employees, and contractors will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or related to your use of the Site, even if we have been advised of the possibility of such damages.",
    ],
  },
  {
    heading: "Indemnification",
    body: [
      "You agree to indemnify and hold harmless Beast Creative and its owners, employees, and contractors from any claims, damages, or expenses arising out of your use of the Site or your violation of these Terms.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws rules. Any dispute arising under these Terms will be subject to the exclusive jurisdiction of the state and federal courts located in Bexar County, Texas.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. When we do, we will revise the “Last updated” date above. Your continued use of the Site after changes take effect means you accept the updated Terms.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "Questions about these Terms? Reach out:",
      "Beast Creative Agency, San Antonio, TX",
      "Email: hello@beastcreativeagency.com",
      "Phone: (210) 350-9560",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-beast-black pt-28 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-near-black to-beast-black" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <AnimatedSection>
            <p className="section-eyebrow text-beast-pink mb-4">Legal</p>
            <h1 className="text-display-hero font-display font-extrabold text-white max-w-3xl mb-6">
              Terms of Service
            </h1>
            <p className="text-body-lead text-gray-300 max-w-2xl">
              The terms that govern your use of this website.
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
