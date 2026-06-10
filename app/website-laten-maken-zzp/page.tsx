import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website laten maken voor ZZP'ers | YousWeb",
  description:
    "Professionele website laten maken als zzp'er? YousWeb bouwt moderne websites die vertrouwen wekken, goed vindbaar zijn en meer aanvragen opleveren.",
  alternates: {
    canonical: "https://www.yousweb.nl/website-laten-maken-zzp",
  },
  openGraph: {
    title: "Website laten maken voor ZZP'ers | YousWeb",
    description:
      "Laat als zzp'er een professionele website maken met premium design, SEO-basis en conversiegerichte opbouw.",
    url: "https://www.yousweb.nl/website-laten-maken-zzp",
    siteName: "YousWeb",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website laten maken voor ZZP'ers | YousWeb",
    description:
      "Professionele websites voor zzp'ers die online vertrouwen willen opbouwen en meer aanvragen willen ontvangen.",
  },
};

const benefits = [
  {
    title: "Sterke eerste indruk",
    text: "Als zzp'er wil je direct professioneel overkomen. Een goede website laat zien wie je bent, wat je doet en waarom klanten jou kunnen vertrouwen.",
  },
  {
    title: "Gericht op aanvragen",
    text: "De website wordt logisch opgebouwd zodat bezoekers sneller begrijpen wat je aanbiedt en makkelijker contact opnemen.",
  },
  {
    title: "SEO-basis vanaf het begin",
    text: "Je website krijgt een nette structuur, duidelijke headings, snelle opbouw en interne links zodat je later beter kunt groeien in Google.",
  },
];

const examples = [
  "Coach of therapeut",
  "Freelancer",
  "Montagebedrijf",
  "Consultant",
  "Personal trainer",
  "Creatieve ondernemer",
];

const faqs = [
  {
    question: "Wat kost een website laten maken voor een zzp'er?",
    answer:
      "Bij YousWeb starten professionele websites vanaf €749. De uiteindelijke prijs hangt af van het pakket, aantal pagina's, gewenste uitstraling en extra functies.",
  },
  {
    question: "Is een website belangrijk als zzp'er?",
    answer:
      "Ja. Een professionele website helpt om vertrouwen op te bouwen, duidelijk uit te leggen wat je aanbiedt en bezoekers richting contact of aanvraag te sturen.",
  },
  {
    question: "Kan ik klein beginnen en later uitbreiden?",
    answer:
      "Ja. Je kunt starten met een sterke basiswebsite en later extra pagina's, SEO-landingspagina's, animaties of aanvullende functies toevoegen.",
  },
  {
    question: "Is SEO inbegrepen?",
    answer:
      "Ja. Elke website krijgt een sterke SEO-basis met duidelijke structuur, responsive opbouw, snelle performance en slimme interne links.",
  },
];

export default function WebsiteLatenMakenZzpPage() {
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
          Start project
        </a>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-20">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Website laten maken voor zzp&apos;ers
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Professionele websites voor zzp&apos;ers die serieus willen groeien.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Als zzp&apos;er heb je een website nodig die vertrouwen wekt,
            duidelijk laat zien wat je aanbiedt en bezoekers helpt om contact op
            te nemen. YousWeb bouwt moderne websites met premium design, sterke
            SEO-basis en een conversiegerichte structuur.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/website-builder"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Stel jouw website samen
            </a>

            <a
              href="/kosten-website-laten-maken"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
            >
              Bekijk website kosten
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Waarom een website als zzp&apos;er?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Je website is vaak het eerste moment waarop klanten jou beoordelen.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Potentiële klanten willen snel begrijpen wie je bent, wat je doet en
            waarom jij betrouwbaar bent. Een professionele website helpt je om
            sterker over te komen en meer aanvragen te ontvangen.
          </p>
        </div>

        <div className="grid gap-5">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Voor wie is dit geschikt?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Voor zzp&apos;ers en kleine ondernemers die professioneel zichtbaar
            willen zijn.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-sm text-white/65 backdrop-blur-xl transition hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2.5rem] border border-blue-400/25 bg-blue-400/[0.07] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Website offerte voor zzp&apos;ers
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Stel jouw website samen en ontvang direct een prijsindicatie.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                Kies een pakket, voeg extra opties toe en bekijk meteen wat jouw
                website ongeveer gaat kosten. Daarna nemen we persoonlijk
                contact op om jouw project te bespreken.
              </p>
            </div>

            <a
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-5 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Start jouw aanvraag
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
            Veelgestelde vragen over websites voor zzp&apos;ers.
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