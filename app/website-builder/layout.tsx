export const metadata = {
  title: "Website prijs berekenen | Stel jouw website samen - YousWeb",

  description:
    "Stel jouw professionele website samen met de YousWeb offerte builder. Kies een pakket, voeg extra opties toe en ontvang direct een prijsindicatie.",

  alternates: {
    canonical: "/website-builder",
  },

  openGraph: {
    title: "Website prijs berekenen | YousWeb",
    description:
      "Gebruik de offerte builder van YousWeb om jouw website pakket samen te stellen en een prijsindicatie te ontvangen.",
    url: "/website-builder",
    siteName: "YousWeb",
    type: "website",
    locale: "nl_NL",
  },

  twitter: {
    card: "summary_large_image",
    title: "Website prijs berekenen | YousWeb",
    description:
      "Stel jouw professionele website samen en ontvang direct een prijsindicatie.",
  },
};

export default function WebsiteBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}