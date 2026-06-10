import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress website laten maken | Professionele WordPress websites - YousWeb",
  description:
    "Professionele WordPress website laten maken? YousWeb bouwt snelle, moderne en gebruiksvriendelijke websites met sterke SEO-basis en focus op conversie.",
  alternates: {
    canonical: "https://www.yousweb.nl/wordpress-website-laten-maken",
  },
  openGraph: {
    title: "WordPress website laten maken | YousWeb",
    description:
      "Laat een professionele WordPress website bouwen met premium design, sterke SEO-basis en een conversiegerichte structuur.",
    url: "https://www.yousweb.nl/wordpress-website-laten-maken",
    siteName: "YousWeb",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress website laten maken | YousWeb",
    description:
      "Professionele WordPress websites voor ondernemers die online willen groeien.",
  },
};

const benefits = [
  {
    title: "Gebruiksvriendelijk beheer",
    text: "WordPress maakt het eenvoudig om teksten, afbeeldingen en pagina’s later zelf aan te passen wanneer dat nodig is.",
  },
  {
    title: "Sterke SEO-basis",
    text: "WordPress biedt uitstekende mogelijkheden voor zoekmachineoptimalisatie en vormt een sterke basis voor online groei.",
  },
  {
    title: "Schaalbaar voor de toekomst",
    text: "Van een eenvoudige bedrijfswebsite tot een uitgebreid platform: WordPress groeit mee met jouw onderneming.",
  },
];

const reasons = [
  {
    title: "Professionele uitstraling",
    text: "Een moderne WordPress website helpt om vertrouwen op te bouwen en bezoekers een professionele indruk te geven.",
  },
  {
    title: "Meer online zichtbaarheid",
    text: "Door een sterke structuur en SEO-basis wordt jouw website beter voorbereid op toekomstige vindbaarheid.",
  },
  {
    title: "Meer aanvragen",
    text: "Een goede website helpt bezoekers sneller richting contact, offerteaanvraag of kennismakingsgesprek.",
  },
];

const relatedPages = [
  {
    title: "Website laten maken",
    href: "/website-laten-maken",
    text: "Bekijk hoe YousWeb professionele websites bouwt met premium uitstraling en conversiegerichte structuur.",
  },
  {
    title: "Kosten website laten maken",
    href: "/kosten-website-laten-maken",
    text: "Lees welke factoren invloed hebben op de prijs van een professionele website.",
  },
  {
    title: "Website builder",
    href: "/website-builder",
    text: "Stel jouw website samen en ontvang direct een duidelijke prijsindicatie.",
  },
  {
    title: "Portfolio websites",
    href: "/portfolio-websites",
    text: "Bekijk echte website voorbeelden met premium design, sterke UX en moderne uitstraling.",
  },
];

const faqs = [
  {
    question: "Waarom kiezen voor WordPress?",
    answer:
      "WordPress is wereldwijd het meest gebruikte CMS. Het is flexibel, gebruiksvriendelijk en geschikt voor vrijwel ieder type onderneming.",
  },
  {
    question: "Kan ik mijn WordPress website later uitbreiden?",
    answer:
      "Ja. Extra pagina’s, functies, formulieren en nieuwe onderdelen kunnen later eenvoudig worden toegevoegd.",
  },
  {
    question: "Is WordPress geschikt voor SEO?",
    answer:
      "Ja. WordPress biedt uitstekende mogelijkheden voor zoekmachineoptimalisatie en vormt een sterke basis voor verdere groei.",
  },
  {
    question: "Wat kost een WordPress website?",
    answer:
      "De prijs hangt af van het aantal pagina’s, gewenste functies, designniveau en aanvullende wensen. Professionele websites starten bij YousWeb vanaf €749.",
  },
];

export default function WordPressWebsiteLatenMakenPage() {
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
            WordPress website laten maken
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Professionele WordPress websites voor ondernemers die willen groeien.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Een WordPress website combineert flexibiliteit, gebruiksgemak en
            schaalbaarheid. Wij bouwen moderne websites met premium design,
            sterke structuur en een SEO-basis die klaar is voor groei. Wil je
            eerst breder kijken naar een{" "}
            <a
              href="/website-laten-maken"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              professionele website laten maken
            </a>
            ? Bekijk dan ook onze hoofdservicepagina.
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
            Waarom WordPress?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Eén van de meest gebruikte systemen ter wereld.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            WordPress wordt gebruikt door miljoenen bedrijven en organisaties.
            Het systeem is flexibel, schaalbaar en geschikt voor vrijwel iedere
            ondernemer die online professioneel zichtbaar wil zijn. Benieuwd
            welke investering daarbij past? Bekijk dan ook de{" "}
            <a
              href="/kosten-website-laten-maken"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              kosten van een website laten maken
            </a>
            .
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
            Voordelen voor ondernemers
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Meer dan alleen een mooie website.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Een goede WordPress website moet vertrouwen wekken, snel laden en
            bezoekers richting contact sturen. Bekijk onze{" "}
            <a
              href="/portfolio-websites"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              portfolio websites
            </a>{" "}
            om te zien hoe premium design, structuur en gebruikerservaring
            samenkomen.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((item) => (
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
        <div className="rounded-[2.5rem] border border-blue-400/25 bg-blue-400/[0.07] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Website offerte aanvragen
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Stel jouw WordPress website samen.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                Kies een pakket, voeg extra opties toe en ontvang direct een
                duidelijke prijsindicatie voor jouw nieuwe website. Start via de{" "}
                <a
                  href="/website-builder"
                  className="text-white underline decoration-blue-300/50 underline-offset-4 hover:text-blue-200"
                >
                  offerte builder
                </a>{" "}
                en wij nemen persoonlijk contact met je op.
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
            Veelgestelde vragen over WordPress websites.
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Gerelateerde pagina’s
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
            Verder oriënteren voordat je een WordPress website laat maken?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 transition hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  {page.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {page.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
