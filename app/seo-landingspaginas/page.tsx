import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO-landingspagina’s voor meer aanvragen | YousWeb",
  description:
    "Ontdek waarom SEO-landingspagina’s belangrijk zijn voor lokale vindbaarheid, concurrentievoordeel en meer aanvragen via Google.",
  alternates: {
    canonical: "https://www.yousweb.nl/seo-landingspaginas",
  },
  openGraph: {
    title: "SEO-landingspagina’s voor meer aanvragen | YousWeb",
    description:
      "Leer hoe SEO-landingspagina’s bedrijven helpen om beter gevonden te worden, meer vertrouwen op te bouwen en meer aanvragen te krijgen.",
    url: "https://www.yousweb.nl/seo-landingspaginas",
    siteName: "YousWeb",
    type: "website",
  },
};

const situations = [
  {
    title: "Je wilt gevonden worden in meerdere steden",
    text: "Bijvoorbeeld Amsterdam, Haarlem, Utrecht of Rotterdam. Elke stad heeft eigen zoekgedrag en concurrentie.",
  },
  {
    title: "Je biedt meerdere diensten aan",
    text: "Een coach, aannemer, webdesigner of specialist wordt vaak op verschillende diensten gezocht.",
  },
  {
    title: "Je concurrenten hebben meer SEO-pagina’s",
    text: "Als zij voor meerdere zoektermen aparte pagina’s hebben en jij niet, hebben zij meer kansen om zichtbaar te zijn.",
  },
];

const nicheExamples = [
  {
    niche: "Coach of therapeut",
    pages: ["Coaching Amsterdam", "Loopbaancoach Amsterdam"],
    advice: "Vaak is Growth genoeg met 2 sterke SEO-landingspagina’s.",
  },
  {
    niche: "Dakdekker of aannemer",
    pages: ["Dakdekker Amsterdam", "Dakreparatie Amsterdam", "Dakdekker Haarlem"],
    advice: "Agency Level is slimmer door meerdere diensten en regio’s.",
  },
  {
    niche: "Webdesign bureau",
    pages: [
      "Website laten maken Amsterdam",
      "Website laten maken Utrecht",
      "Website laten maken Haarlem",
    ],
    advice: "Meer SEO-pagina’s geven meer kansen op lokale vindbaarheid.",
  },
];

const packages = [
  {
    name: "Starter",
    pages: "One-page website",
    seo: "Basis SEO-structuur",
    bestFor: "Voor wie vooral professioneel online zichtbaar wil zijn.",
  },
  {
    name: "Growth",
    pages: "Tot 3 pagina’s",
    seo: "Tot 2 SEO-landingspagina’s",
    bestFor:
      "Voor ondernemers die gericht meer aanvragen uit Google willen halen.",
  },
  {
    name: "Agency Level",
    pages: "Tot 6 pagina’s",
    seo: "Tot 5 SEO-landingspagina’s",
    bestFor:
      "Voor bedrijven die meerdere diensten, regio’s of doelgroepen willen aanvallen.",
  },
];

export default function SeoLandingspaginasPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </Link>

        <Link
          href="/website-builder"
          className="text-sm text-white/60 transition hover:text-white"
        >
          Stel website samen
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            SEO-landingspagina’s
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Meer pagina’s betekent meer kansen om gevonden te worden.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Een mooie website zorgt voor vertrouwen. Maar als jouw concurrent
            voor meerdere diensten en steden aparte SEO-pagina’s heeft, krijgt
            hij vaak meer kansen om zichtbaar te zijn in Google. Met
            SEO-landingspagina’s bouw je niet alleen een website, maar een
            groeisysteem voor meer bezoekers, meer vertrouwen en meer aanvragen.
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
              Bekijk website laten maken
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {situations.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.06]"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Waarom niet alles op één pagina?
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Google begrijpt aparte, gerichte pagina’s vaak beter.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              Stel dat iemand zoekt op “website laten maken Haarlem”. Als die
              informatie alleen kort op je homepage staat, is het signaal voor
              Google minder sterk.
            </p>

            <p>
              Een aparte SEO-landingspagina over die zoekterm geeft Google veel
              duidelijker context: deze pagina gaat specifiek over deze dienst,
              voor deze doelgroep of in deze regio.
            </p>

            <p>
              Daarom gebruiken sterke websites vaak meerdere gerichte pagina’s.
              Niet om de website groter te maken, maar om meer zoekkansen te
              creëren.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Voorbeelden per bedrijf
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Hoeveel SEO-landingspagina’s heb jij nodig?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {nicheExamples.map((item) => (
            <div
              key={item.niche}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {item.niche}
              </h3>

              <div className="my-6 h-px bg-white/10" />

              <div className="space-y-3">
                {item.pages.map((page) => (
                  <p
                    key={page}
                    className="rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-4 py-3 text-sm text-blue-200"
                  >
                    {page}
                  </p>
                ))}
              </div>

              <p className="mt-6 text-sm leading-7 text-white/55">
                {item.advice}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-blue-400/30 bg-blue-400/[0.07] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Concurrentievoordeel
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Als je concurrent meer relevante pagina’s heeft, heeft hij meer
                ingangen naar Google.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/65">
              <p>
                Veel ondernemers denken dat één mooie website genoeg is. Maar in
                competitieve markten wint vaak niet alleen de mooiste website,
                maar de website met de beste structuur.
              </p>

              <p>
                Elke sterke SEO-landingspagina werkt als een digitale verkoper:
                gericht op één dienst, één regio of één zoekvraag. Hoe beter die
                pagina aansluit op wat iemand zoekt, hoe groter de kans op een
                aanvraag.
              </p>

              <p>
                Daarom is Growth geschikt wanneer je gericht wilt groeien, en
                Agency Level sterker wanneer je meerdere markten tegelijk wilt
                aanvallen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Pakketadvies
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Kies niet op aantal pagina’s. Kies op groeidoel.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                {item.name}
              </h3>

              <div className="my-6 h-px bg-white/10" />

              <p className="text-sm text-blue-300">{item.pages}</p>
              <p className="mt-3 text-sm font-medium text-white">{item.seo}</p>

              <p className="mt-5 text-sm leading-7 text-white/55">
                {item.bestFor}
              </p>
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
            Wil je alleen online staan, of wil je actief gevonden worden?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Stel jouw website samen en kies het pakket dat past bij jouw
            concurrentie, regio, diensten en groeidoel.
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