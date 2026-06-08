import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "YousWeb | Professionele websites voor ondernemers",
    template: "%s | YousWeb",
  },

  description:
    "Professionele websites met premium design, sterke SEO-structuur en gericht op meer aanvragen en klanten.",

metadataBase: new URL("https://www.yousweb.nl"),

  openGraph: {
    title: "YousWeb | Professionele websites voor ondernemers",
    description:
      "Premium websites met sterke SEO-structuur, moderne uitstraling en focus op meer aanvragen.",
    url: "https://www.yousweb.nl",
    siteName: "YousWeb",
    images: [
      {
        url: "https://www.yousweb.nl/og-image.png",
        width: 1200,
        height: 630,
        alt: "YousWeb - Professionele websites voor ondernemers",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YousWeb | Professionele websites voor ondernemers",
    description:
      "Premium websites met sterke SEO-structuur, moderne uitstraling en focus op meer aanvragen.",
    images: ["https://www.yousweb.nl/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "YousWeb",
        url: "https://yousweb.nl",
        areaServed: "Netherlands",
        serviceType: "Webdesign en website ontwikkeling",
        description:
          "YousWeb bouwt professionele websites met premium design, responsive structuur, SEO-basis en conversiegerichte UX.",
        sameAs: [
          "https://www.instagram.com/",
          "https://www.tiktok.com/",
          "https://x.com/",
        ],
      }),
    }}
  />

  {children}

  <Script id="microsoft-clarity" strategy="afterInteractive">
    {`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "x2tt7hp1te");
    `}
  </Script>

<GoogleAnalytics gaId="G-8E5F4EVSS5" />



</body>
    </html>
  );
}
