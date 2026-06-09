import type { Metadata } from "next";
import WebsiteLatenMakenClient from "./WebsiteLatenMakenClient";

export const metadata: Metadata = {
  title: "Website laten maken voor ondernemers | Premium webdesign - YousWeb",
  description:
    "Laat een professionele website maken die vertrouwen wekt, snel laadt en gericht is op meer aanvragen. Premium webdesign, SEO-basis en duidelijke pakketten.",
  keywords: [
    "website laten maken",
    "professionele website laten maken",
    "website laten bouwen",
    "webdesign bureau",
    "responsive website",
    "SEO website",
    "website pakketten",
    "premium webdesign",
  ],
  alternates: {
    canonical: "https://www.yousweb.nl/website-laten-maken",
  },
  openGraph: {
    title: "Website laten maken | Professionele websites voor ondernemers",
    description:
      "Laat een professionele website bouwen met premium design, responsive structuur, sterke UX en SEO-basis.",
    url: "https://www.yousweb.nl/website-laten-maken",
    siteName: "YousWeb",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken | YousWeb",
    description:
      "Professionele websites voor ondernemers met premium design, SEO-structuur en conversiegerichte UX.",
  },
};

export default function WebsiteLatenMakenPage() {
  return <WebsiteLatenMakenClient />;
}