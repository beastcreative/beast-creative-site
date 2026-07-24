export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: "Beast Creative Agency",
    url: "https://beastcreativeagency.com",
    logo: "https://beastcreativeagency.com/images/beast-logo-green.svg",
    description:
      "Beast Creative Agency is a national AI-powered digital marketing agency specializing in CPG marketing, SEO, paid media, and branding.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "+12103509560",
    email: "hello@beastcreativeagency.com",
    sameAs: [
      "https://www.facebook.com/beastcreativeagency",
      "https://www.instagram.com/beastcreativeagency",
      "https://www.linkedin.com/company/beast-creative-agency",
      "https://www.tiktok.com/@beastcreativeagency",
      "https://www.trustpilot.com/review/beastcreativeagency.com",
    ],
    foundingDate: "2020",
    areaServed: "United States",
    serviceType: [
      "CPG Marketing",
      "Digital Marketing",
      "SEO",
      "AEO",
      "Answer Engine Optimization",
      "Paid Media",
      "Branding",
      "Web Design",
      "AI Content Production",
      "Food and Beverage Marketing",
      "Consumer Packaged Goods Marketing",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Beast Creative Agency",
    url: "https://beastcreativeagency.com",
    telephone: "+12103509560",
    email: "hello@beastcreativeagency.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Antonio",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 29.4241,
      longitude: -98.4936,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    foundingDate: "2020",
    serviceArea: {
      "@type": "Country",
      "name": "United States",
    },
    knowsAbout: [
      "CPG Marketing",
      "Food and Beverage Marketing",
      "Walmart Retail Marketing",
      "Search Engine Optimization",
      "Answer Engine Optimization",
      "Sweepstakes Marketing",
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: "Beast Creative Agency",
      url: "https://beastcreativeagency.com",
    },
    areaServed: "United States",
    serviceArea: {
      "@type": "Country",
      "name": "United States",
    },
  };
}
