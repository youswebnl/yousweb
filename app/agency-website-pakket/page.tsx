import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agency Website Pakket | Premium website laten maken | YousWeb",
  description:
    "Bekijk wat je krijgt binnen het Agency Level website pakket van YousWeb: tot 6 pagina’s, 5 SEO-landingspagina’s en premium animaties op de volledige website.",
  alternates: {
    canonical: "https://www.yousweb.nl/agency-website-pakket",
  },
  openGraph: {
    title: "Agency Website Pakket | YousWeb",
    description:
      "Voor bedrijven die serieus willen investeren in online groei, premium uitstraling, schaalbaarheid en conversie.",
    url: "https://www.yousweb.nl/agency-website-pakket",
    siteName: "YousWeb",
    type: "website",
  },
};

const included = [
  "Alles uit Growth",
  "Website tot 6 pagina’s",
  "Tot 5 SEO-landingspagina’s",
  "Premium animaties op volledige website",
  "Premium maatwerk uitstraling",
  "Strategische conversieflow",
  "Sterkere SEO-structuur",
  "Contactformulier, WhatsApp en e-mail",
];

const suitableFor = [
  "Bedrijven met meerdere diensten",
  "Groeiende MKB-bedrijven",
  "Dienstverleners met sterke concurrentie",
  "Agencies en consultants",
  "Lokale bedrijven met meerdere regio’s",
  "Ondernemers die premium willen positioneren",
];

const pillars = [
  {
    title: "Volledige premium uitstraling",
    text: "Niet alleen de homepage, maar de volledige website krijgt een consistente premium uitstraling.",
  },
  {
    title: "Meer SEO-landingspagina’s",
    text: "Met tot 5 SEO-landingspagina’s kun je meerdere diensten, regio’s of zoekintenties tegelijk targeten.",
  },
  {
    title: "Sterkere conversieflow",
    text: "De website wordt opgebouwd om bezoekers logisch richting vertrouwen, contact en aanvraag te begeleiden.",
  },
];

const extras = [
  {
    name: "Extra pagina",
    price: "+ €150",
    description:
      "Voor een extra dienst-, over ons-, werkwijze- of informatiepagina.",
  },
  {
    name: "Extra SEO-landingspagina",
    price: "+ €200",
    description:
      "Voor een extra pagina gericht op vindbaarheid, relevante zoekwoorden en aanvragen.",
  },
  {
    name: "Meertalige website NL/ENG",
    price: "+ €450",
    description:
      "Voor een Nederlandse en Engelse versie van de belangrijkste pagina’s.",
  },
  {
    name: "Onderhoud & support",
    price: "Vanaf €75 p/m",
    description:
      "Voor maandelijkse ondersteuning, kleine updates en technische controle.",
  },
];

export default function AgencyWebsitePakketPage() {
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
          Stel jouw website samen
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Agency Level website pakket
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Agency Level voor bedrijven die premium willen groeien.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Het Agency Level pakket is bedoeld voor bedrijven die serieus willen
            investeren in online groei, premium uitstraling, sterke
            SEO-structuur en een website die schaalbaar is voor de toekomst.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Stel jouw website samen
            </Link>

            <Link
              href="/website-laten-maken"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              Website laten maken
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Waarom Agency Level?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Voor bedrijven die hun website als groeisysteem willen gebruiken.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-white/60">
          <p>
            Agency Level is sterker dan alleen een grotere website. Het pakket
            is bedoeld voor bedrijven die hun online uitstraling, SEO-structuur
            en conversie serieus willen aanpakken.
          </p>

          <p>
            Je krijgt meer ruimte voor pagina’s, meer SEO-landingspagina’s en
            premium animaties op de volledige website. Daardoor voelt de website
            consistenter, professioneler en schaalbaarder aan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-blue-400/30 bg-blue-400/[0.07] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Inbegrepen
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Dit krijg je binnen het Agency Level pakket.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm font-medium text-white/75"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Premium pijlers
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Agency Level draait om uitstraling, vindbaarheid en schaalbaarheid.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.06]"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Geschikt voor
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Voor bedrijven die meer willen dan een standaard website.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {suitableFor.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Agency versus Growth
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Wanneer is Agency Level beter dan Growth?
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-white/60">
          <p>
            Growth is sterk voor ondernemers die via Google willen groeien met
            meerdere pagina’s, SEO-landingspagina’s en premium homepage
            animaties. Agency Level gaat verder.
          </p>

          <p>
            Agency Level past beter wanneer je meerdere markten, diensten of
            regio’s tegelijk wilt bedienen en de volledige website premium moet
            aanvoelen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Mogelijke uitbreidingen
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Agency bevat al veel. Daarom blijven uitbreidingen beperkt.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Premium animaties zijn binnen Agency Level al inbegrepen op de
            volledige website. Extra opties zijn vooral bedoeld voor extra
            content, extra SEO-pagina’s, meertaligheid of support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {extras.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.06]"
            >
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {item.name}
                </h3>

                <span className="shrink-0 text-sm font-medium text-blue-300">
                  {item.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[2.5rem] border border-blue-400/30 bg-blue-400/[0.07] p-8 text-center backdrop-blur-xl md:p-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
            Volgende stap
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Past Agency Level bij jouw bedrijf?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Stel jouw website samen in de Website Builder en ontvang direct een
            duidelijke prijsindicatie.
          </p>

          <div className="mt-9">
            <Link
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Naar de Website Builder
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
