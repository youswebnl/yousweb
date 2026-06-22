import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Starter Website Pakket | One-page website laten maken | YousWeb",
  description:
    "Bekijk wat je krijgt binnen het Starter website pakket van YousWeb: een professionele one-page website voor starters en zzp’ers.",
  alternates: {
    canonical: "https://www.yousweb.nl/starter-website-pakket",
  },
  openGraph: {
    title: "Starter Website Pakket | YousWeb",
    description:
      "Een sterke one-page website voor starters en zzp’ers die professioneel online zichtbaar willen worden.",
    url: "https://www.yousweb.nl/starter-website-pakket",
    siteName: "YousWeb",
    type: "website",
  },
};

const linkClass =
  "font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200";

const included = [
  "One-page website",
  "Premium basisdesign",
  "Responsive voor mobiel en tablet",
  "Basis SEO-structuur",
  "Contactformulier",
  "WhatsApp knop",
  "E-mail knop",
  "Professionele aanvraagflow",
];

const suitableFor = [
  "Starters",
  "Zzp’ers",
  "Lokale ondernemers",
  "Dienstverleners",
  "Nieuwe bedrijven",
  "Ondernemers met één duidelijke dienst",
];

const notFor = [
  "Bedrijven die meerdere diensten uitgebreid willen uitleggen",
  "Ondernemers die actief willen groeien met SEO-landingspagina’s",
  "Bedrijven die direct een uitgebreide website structuur nodig hebben",
];

const extras = [
  {
    name: "Extra pagina",
    price: "+ €150",
    description:
      "Voor een extra dienst-, over ons-, werkwijze- of informatiepagina.",
  },
  {
    name: "Premium animatiepakket",
    price: "+ €250",
    description:
      "Premium animaties en interactieve effecten voor de volledige one-page website.",
  },
  {
    name: "Meertalige website NL/ENG",
    price: "+ €450",
    description:
      "Voor een Nederlandse en Engelse versie van de belangrijkste pagina.",
  },
  {
    name: "Onderhoud & support",
    price: "Vanaf €75 p/m",
    description:
      "Voor maandelijkse ondersteuning, kleine updates en technische controle.",
  },
];

export default function StarterWebsitePakketPage() {
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
            Starter website pakket
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Starter pakket voor een professionele one-page website.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Het Starter pakket is bedoeld voor starters en zzp’ers die snel,
            professioneel en betrouwbaar online zichtbaar willen worden met één
            sterke pagina. Wil je direct jouw pakket samenstellen? Gebruik dan
            de{" "}
            <Link href="/website-builder" className={linkClass}>
              Website Builder
            </Link>
            .
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
            Voor wie?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Ideaal voor ondernemers die professioneel willen starten.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-white/60">
          <p>
            Een one-page website is sterk wanneer jouw aanbod duidelijk is en je
            bezoekers snel wilt laten begrijpen wie je bent, wat je doet en hoe
            ze contact kunnen opnemen.
          </p>

          <p>
            Het Starter pakket is bewust compact gehouden. Je krijgt een
            professionele basis zonder onnodige complexiteit, zodat jouw website
            snel online kan staan en direct betrouwbaar aanvoelt. Wil je meer
            ruimte voor pagina’s en vindbaarheid, dan is het{" "}
            <Link href="/growth-website-pakket" className={linkClass}>
              Growth pakket
            </Link>{" "}
            de logische volgende stap.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                Inbegrepen
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Dit krijg je binnen het Starter pakket.
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

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60">
            Wil je dit pakket direct vergelijken met je wensen? Stel jouw
            website samen via de{" "}
            <Link href="/website-builder" className={linkClass}>
              Website Builder
            </Link>{" "}
            en bekijk direct jouw prijsindicatie.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Geschikt voor
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Voor bedrijven met een duidelijke eerste stap online.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Heb je nu nog één duidelijke dienst of aanbod, dan is Starter vaak
            genoeg. Verwacht je snel meerdere diensten, regio’s of zoekwoorden
            te willen targeten? Dan past het{" "}
            <Link href="/growth-website-pakket" className={linkClass}>
              Growth pakket
            </Link>{" "}
            waarschijnlijk beter.
          </p>
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
            Wanneer niet?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Soms is Growth een betere keuze.
          </h2>
        </div>

        <div className="space-y-4">
          {notFor.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-6 text-white/65"
            >
              {item}
            </div>
          ))}

          <p className="pt-3 text-base leading-8 text-white/60">
            Wil je meerdere pagina’s, SEO-landingspagina’s en premium animaties
            op de homepage? Dan past het{" "}
            <Link href="/growth-website-pakket" className={linkClass}>
              Growth pakket
            </Link>{" "}
            waarschijnlijk beter.
          </p>

          <p className="text-base leading-8 text-white/60">
            Wil je direct meerdere diensten, markten of regio’s professioneel
            neerzetten? Bekijk dan ook het{" "}
            <Link href="/agency-website-pakket" className={linkClass}>
              Agency Level pakket
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Mogelijke uitbreidingen
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Kleine uitbreidingen bovenop een compact pakket.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Extra opties zijn bedoeld als aanvulling op het Starter pakket, niet
            als vervanging van een uitgebreider{" "}
            <Link href="/growth-website-pakket" className={linkClass}>
              Growth pakket
            </Link>{" "}
            of{" "}
            <Link href="/agency-website-pakket" className={linkClass}>
              Agency Level pakket
            </Link>
            .
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
            Past Starter bij jouw bedrijf?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Stel jouw website samen in de{" "}
            <Link href="/website-builder" className={linkClass}>
              Website Builder
            </Link>{" "}
            en ontvang direct een duidelijke prijsindicatie.
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
