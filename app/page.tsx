import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import WhyYousWeb from "@/components/WhyYousWeb";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "YousWeb | Professionele websites die klanten opleveren",
  description:
    "Laat een professionele website maken die vertrouwen wekt, snel laadt en gericht is op meer aanvragen. Premium webdesign voor ondernemers.",

  alternates: {
    canonical: "https://www.yousweb.nl",
  },

  openGraph: {
    title: "YousWeb | Professionele websites die klanten opleveren",
    description:
      "Premium webdesign voor ondernemers. Moderne websites met sterke uitstraling, snelle laadtijd en focus op meer aanvragen.",
    url: "https://www.yousweb.nl",
    siteName: "YousWeb",
    type: "website",
    locale: "nl_NL",
  },

  twitter: {
    card: "summary_large_image",
    title: "YousWeb | Professionele websites die klanten opleveren",
    description:
      "Laat een professionele website maken met premium design, SEO-basis en conversiegerichte UX.",
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]" />

      <Navbar />

      <Hero />

      <Portfolio />

      <WhyYousWeb />

      <Pricing />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}