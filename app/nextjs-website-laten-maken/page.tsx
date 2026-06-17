import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js website laten maken | Premium websites | YousWeb",
  description:
    "Laat een snelle, premium en schaalbare Next.js website maken door YousWeb. Voor ondernemers die meer vertrouwen, betere UX en meer aanvragen willen.",
  alternates: {
    canonical: "https://www.yousweb.nl/nextjs-website-laten-maken",
  },
  openGraph: {
    title: "Next.js website laten maken | YousWeb",
    description:
      "Professionele Next.js websites met premium design, sterke performance, SEO-basis en conversiegerichte opbouw.",
    url: "https://www.yousweb.nl/nextjs-website-laten-maken",
    siteName: "YousWeb",
    type: "website",
  },
};

const benefits = [
  "Snellere laadtijd",
  "Premium maatwerk design",
  "Sterkere gebruikerservaring",
  "Minder afhankelijk van plugins",
  "Schaalbaar gebouwd voor groei",
  "Sterke SEO-basis",
];

const comparison = [
  {
    item: "Snelheid",
    nextjs: "Zeer sterk",
    wordpress: "Afhankelijk van thema en plugins",
  },
  {
    item: "Premium animaties",
    nextjs: "Veel vrijheid met maatwerk",
    wordpress: "Vaak beperkt door thema’s",
  },
  {
    item: "Maatwerk design",
    nextjs: "Volledig op maat",
    wordpress: "Vaak template-gericht",
  },
  {
    item: "Onderhoud",
    nextjs: "Minder plugin-afhankelijk",
    wordpress: "Regelmatige plugin-updates",
  },
  {
    item: "Schaalbaarheid",
    nextjs: "Sterk voor groei",
    wordpress: "Kan, maar vraagt meer beheer",
  },
];

const idealFor = [
  "ZZP’ers die premium willen overkomen",
  "Dienstverleners die meer aanvragen willen",
  "Coaches, bureaus en specialisten",
  "Lokale bedrijven die willen groeien via Google",
  "Bedrijven die geen standaard template willen",
];

export default function NextjsWebsitePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </Link>

        <Link
          href="/website-builder"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
        >
          Stel website samen
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Next.js website laten maken
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Premium websites die sneller laden, sterker voelen en gebouwd zijn
            voor groei.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Een moderne website moet meer doen dan alleen online staan. Met
            Next.js bouwt YousWeb websites die professioneel ogen, snel laden,
            prettig aanvoelen en bezoekers sneller richting contact of aanvraag
            brengen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Stel jouw website samen
            </Link>

            <Link
              href="/portfolio-websites"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              Bekijk portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.06]"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-400/10 text-blue-300">
                ✓
              </div>

              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                {benefit}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Waarom Next.js?
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Een premium website begint niet met een standaard thema.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              Veel websites beginnen met een template en worden daarna gevuld
              met plugins om functies, animaties en optimalisaties toe te
              voegen. Dat kan werken, maar bij premium websites loop je vaak
              sneller tegen grenzen aan.
            </p>

            <p>
              Met Next.js bouwen we de website rondom jouw bedrijf, doelgroep en
              groeidoelen. Daardoor ontstaat er meer vrijheid in design,
              animatie, performance en conversie.
            </p>

            <p>
              Het resultaat is geen standaard website, maar een moderne digitale
              ervaring die vertrouwen wekt en professioneel aanvoelt.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Next.js versus WordPress
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            WordPress is een tool. Next.js is onze specialisatie.
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
            <div className="p-5">Onderdeel</div>
            <div className="p-5 text-blue-300">Next.js</div>
            <div className="p-5 text-white/60">WordPress</div>
          </div>

          {comparison.map((row) => (
            <div
              key={row.item}
              className="grid grid-cols-3 border-b border-white/10 text-sm last:border-b-0"
            >
              <div className="p-5 font-medium text-white">{row.item}</div>
              <div className="p-5 text-white/70">{row.nextjs}</div>
              <div className="p-5 text-white/45">{row.wordpress}</div>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50">
          WordPress kan nog steeds geschikt zijn voor blogs, grote
          contentplatformen of websites waarbij de klant zelf veel pagina’s wil
          beheren. Maar voor premium maatwerk, animatie, snelheid en
          conversiegerichte websites kiezen wij bewust voor Next.js.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-blue-400/30 bg-blue-400/[0.07] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Waarom YousWeb hiermee werkt
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Wij bouwen geen website rondom een thema. Wij bouwen rondom jouw
                groeidoel.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/65">
              <p>
                Een website moet vertrouwen wekken, snel laden, duidelijk
                aanvoelen en bezoekers helpen om sneller actie te nemen. Daarom
                bouwen wij met Next.js, TypeScript, TailwindCSS, Framer Motion
                en Vercel.
              </p>

              <p>
                Die combinatie geeft ons meer controle over design,
                gebruikerservaring, performance en schaalbaarheid. Precies wat
                je nodig hebt wanneer je een website wilt die premium voelt.
              </p>

              <p>
                Voor klanten betekent dat: een professionelere uitstraling, een
                betere ervaring voor bezoekers en een sterker fundament voor
                toekomstige groei.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Voor wie is dit ideaal?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Voor ondernemers die meer willen dan een standaard website.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {idealFor.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-white/70 transition hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl md:p-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Volgende stap
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Klaar voor een snelle, premium website die gebouwd is voor groei?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Stel jouw website samen en ontdek welk pakket past bij jouw fase,
            uitstraling en groeidoel.
          </p>

          <Link
            href="/website-builder"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
          >
            Stel jouw website samen
          </Link>
        </div>
      </section>
    </main>
  );
}
