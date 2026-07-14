import type { Metadata } from "next";
import { barlowCondensed, inter, jetbrainsMono } from "@/lib/fonts";
import "@/styles/globals.css";
import Nav from "@/components/layout/Nav";
import ConsoleBranding from "@/components/ui/ConsoleBranding";
import Footer from "@/components/layout/Footer";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "Web Design & Marketing Agency in San Antonio, TX | Beast Creative",
    template: "%s | Beast Creative Agency",
  },
  description:
    "San Antonio's full-service marketing agency — web design, SEO, paid media & branding. CPG-proven results. Serving local businesses and national brands from San Antonio, TX.",
  metadataBase: new URL("https://beastcreativeagency.com"),
  openGraph: {
    siteName: "Beast Creative Agency",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{overflowX:"hidden"}}
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CF0F42XVH5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CF0F42XVH5',{page_path:window.location.pathname});`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="font-body bg-beast-black text-white antialiased overflow-x-hidden">
        <ConsoleBranding />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[200] focus:bg-beast-pink focus:text-white focus:px-6 focus:py-3 focus:rounded-full focus:font-bold focus:text-sm focus:tracking-wide">Skip to main content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
