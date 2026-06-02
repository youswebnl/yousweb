import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

  metadataBase: new URL("https://yousweb.nl"),

  openGraph: {
    title: "YousWeb",
    description:
      "Professionele websites met premium design, sterke SEO-structuur en gericht op meer aanvragen.",
    siteName: "YousWeb",
    locale: "nl_NL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YousWeb",
    description:
      "Professionele websites voor ondernemers die online willen groeien.",
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
</body>
    </html>
  );
}
