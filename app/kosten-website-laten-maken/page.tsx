import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kosten website laten maken | Website prijzen uitgelegd - YousWeb",
  description:
    "Wat kost een website laten maken? Bekijk duidelijke prijsindicaties, pakketten en factoren die invloed hebben op de kosten van een professionele website.",
  alternates: {
    canonical: "https://www.yousweb.nl/kosten-website-laten-maken",
  },
  openGraph: {
    title: "Kosten website laten maken | YousWeb",
    description:
      "Bekijk wat een professionele website kost, welke pakketten er zijn en welke keuzes invloed hebben op de prijs.",
    url: "https://www.yousweb.nl/kosten-website-laten-maken",
    siteName: "YousWeb",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosten website laten maken | YousWeb",
    description:
      "Duidelijke uitleg over website prijzen, pakketten en kosten voor ondernemers.",
  },
};

const priceFactors = [
  {
    title: "Aantal pagina’s",
    text: "Een one-page website is goedkoper dan een website met meerdere dienstenpagina’s, over-ons pagina, portfolio en uitgebreide content.",
  },
  {
    title: "Designniveau",
    text: "Een basisdesign vraagt minder tijd dan een premium website met maatwerk uitstraling, sterke visuele hiërarchie en verfijnde afwerking.",
  },
  {
    title: "SEO-structuur",
    text: "Een goede SEO-basis zit standaard in elke website. Extra SEO-landingspagina’s of uitgebreidere zoekwoordstructuur verhogen de investering.",
  },
  {
    title: "Extra functies",
    text: "Denk aan formulieren, aanvraagflows, meertaligheid, animaties, booking systemen of extra conversie-elementen.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "Vanaf €749",
    text: "Voor ondernemers die snel professioneel online zichtbaar willen worden met een sterke basiswebsite.",
  },
  {
    name: "Growth",
    price: "Vanaf €1.250",
    text: "Voor ondernemers die willen groeien met betere structuur, meerdere pagina’s en sterkere conversie.",
    featured: true,
  },
  {
    name: "Agency Level",
    price: "Vanaf €2.250",
    text: "Voor premium positionering, uitgebreide uitstraling en een website die voelt als een professioneel merk.",
  },
];

const faqs = [
  {
    question: "Wat kost een website laten maken gemiddeld?",
    answer:
      "Bij YousWeb starten professionele websites vanaf €749. De uiteindelijke prijs hangt af van het pakket, aantal pagina’s, extra functies, designniveau en gewenste SEO-structuur.",
  },
  {
    question: "Waarom verschillen website prijzen zo veel?",
    answer:
      "Een simpele template website kost minder dan een premium website met sterke UX, snelle performance, SEO-basis, conversiegerichte opbouw en maatwerk uitstraling.",
  },
  {
    question: "Is SEO inbegrepen bij de prijs?",
    answer:
      "Ja. Elke website krijgt een sterke SEO-basis met duidelijke headings, snelle structuur, responsive opbouw en interne links. Extra SEO-landingspagina’s kunnen los worden toegevoegd.",
  },
  {
    question: "Kan ik vooraf een prijsindicatie krijgen?",
    answer:
      "Ja. Via de website builder kun je jouw pakket en extra opties kiezen. Daarna ontvang je een duidelijke prijsindicatie en nemen we persoonlijk contact op.",
  },
];

export default function KostenWebsiteLatenMakenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute right-0 top-[38%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </a>

        <a
          href="/website-builder"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
        >
          Bereken prijs
        </a>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-20">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Kosten website laten maken
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Wat kost een professionele website laten maken?
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            De kosten van een website hangen af van jouw doelen, het aantal
            pagina’s, het designniveau en extra functies. Bij YousWeb starten
            professionele websites vanaf <strong className="text-white">€749</strong>,
            met duidelijke pakketten en een transparante prijsindicatie.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/website-builder"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Bereken jouw website prijs
            </a>

            <a
              href="/website-laten-maken"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
            >
              Website laten maken
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Prijsindicatie
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Website prijzen verschillen per doel, structuur en gewenste
            uitstraling.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`rounded-[2rem] border p-7 backdrop-blur-xl transition hover:-translate-y-2 ${
                item.featured
                  ? "border-blue-400/30 bg-blue-400/[0.07]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {item.featured && (
                <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-200">
                  Meest gekozen
                </div>
              )}

              <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                {item.name}
              </h3>

              <p className="mt-4 text-2xl font-semibold text-white">
                {item.price}
              </p>

              <p className="mt-5 text-sm leading-7 text-white/55">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Wat bepaalt de prijs?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            De goedkoopste website is niet altijd de beste investering.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Een goede website moet niet alleen mooi zijn. De website moet snel
            laden, vertrouwen wekken, logisch opgebouwd zijn en bezoekers helpen
            om contact op te nemen of een aanvraag te doen.
          </p>
        </div>

        <div className="grid gap-5">
          {priceFactors.map((factor) => (
            <div
              key={factor.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {factor.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {factor.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2.5rem] border border-blue-400/25 bg-blue-400/[0.07] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Website prijs berekenen
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Stel jouw website samen en ontvang direct een prijsindicatie.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                Kies een pakket, voeg extra opties toe en bekijk meteen wat jouw
                website ongeveer gaat kosten. Daarna nemen we persoonlijk
                contact op om jouw wensen door te spreken.
              </p>
            </div>

            <a
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-5 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Start prijsindicatie
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-28">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Veelgestelde vragen
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Veelgestelde vragen over website kosten.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold tracking-[-0.02em]">
                {item.question}

                <span className="text-2xl text-blue-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 max-w-3xl text-base leading-7 text-white/55">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}