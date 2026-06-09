import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio websites | Professionele website voorbeelden | YousWeb",
  description:
    "Bekijk professionele website voorbeelden van YousWeb. Premium websites voor ondernemers met responsive design, sterke structuur en conversiegerichte opbouw.",
  alternates: {
    canonical: "https://www.yousweb.nl/portfolio-websites",
  },
  openGraph: {
    title: "Portfolio websites | YousWeb",
    description:
      "Bekijk professionele website voorbeelden met premium design, responsive ervaring en conversiegerichte structuur.",
    url: "https://www.yousweb.nl/portfolio-websites",
    siteName: "YousWeb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio websites | YousWeb",
    description:
      "Professionele website voorbeelden voor ondernemers die online vertrouwen willen opbouwen.",
  },
};

export default function PortfolioWebsitesPage() {
  return <PortfolioClient />;
}
