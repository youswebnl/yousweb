import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.yousweb.nl/#business",
    name: "YousWeb",
    legalName: "YousWeb",
    url: "https://www.yousweb.nl",
    logo: "https://www.yousweb.nl/YousWeb-logo-in-modern-design.png",
    image: "https://www.yousweb.nl/og-image.png",
    description:
      "YousWeb bouwt professionele websites met premium design, responsive structuur, SEO-basis en conversiegerichte UX voor ondernemers.",
    identifier: {
      "@type": "PropertyValue",
      name: "KVK",
      value: "87206757",
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
      addressRegion: "Noord-Holland",
      addressLocality: "Amsterdam",
    },
    serviceType: [
      "Webdesign",
      "Website laten maken",
      "Website ontwikkeling",
      "SEO website structuur",
      "Conversiegerichte website",
      "Responsive webdesign",
    ],
    sameAs: [
      "https://www.instagram.com/youswebnl",
      "https://www.facebook.com/share/18GZb6QM2R/",
      "https://www.google.com/search?kgmid=/g/11npxm9kyl&hl=nl-NL&q=Yousweb",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.yousweb.nl/#website",
    name: "YousWeb",
    url: "https://www.yousweb.nl",
    publisher: {
      "@id": "https://www.yousweb.nl/#business",
    },
    inLanguage: "nl-NL",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.yousweb.nl/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
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