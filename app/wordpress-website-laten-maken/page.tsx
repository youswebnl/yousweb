import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "WordPress website laten maken | Wanneer is WordPress geschikt? | YousWeb",
  description:
    "Ontdek wanneer een WordPress website geschikt is en waarom YousWeb voor premium websites vaak werkt met Next.js, maatwerk design en sterke performance.",
  alternates: {
    canonical: "https://www.yousweb.nl/wordpress-website-laten-maken",
  },
  openGraph: {
    title: "WordPress website laten maken | YousWeb",
    description:
      "Lees wanneer WordPress geschikt is en waarom moderne premium websites vaak sterker worden gebouwd met Next.js.",
    url: "https://www.yousweb.nl/wordpress-website-laten-maken",
    siteName: "YousWeb",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "WordPress website laten maken | YousWeb",
    description:
      "Wanneer kies je WordPress en wanneer is een premium Next.js website sterker?",
  },
};

const wordpressSuitableFor = [
  {
    title: "Blogs en kennisbanken",
    text: "Wanneer je regelmatig artikelen, nieuwsberichten of lange content wilt publiceren, kan WordPress een logische keuze zijn.",
  },
  {
    title: "Websites met veel eigen beheer",
    text: "Voor ondernemers die vaak zelf teksten, pagina’s of afbeeldingen willen aanpassen, biedt WordPress veel vrijheid.",
  },
  {
    title: "Contentgerichte organisaties",
    text: "Denk aan stichtingen, magazines, verenigingen of bedrijven waarbij contentbeheer belangrijker is dan premium maatwerk UX.",
  },
];

const nextjsBenefits = [
  "Premium maatwerk design",
  "Snellere performance",
  "Sterkere animaties",
  "Minder plugin-afhankelijk",
  "Betere controle over UX",
  "Gebouwd voor groei",
];

const comparison = [
  {
    item: "Premium uitstraling",
    wordpress: "Vaak afhankelijk van thema’s",
    nextjs: "Volledig maatwerk rondom jouw merk",
  },
  {
    item: "Animaties en interactie",
    wordpress: "Beperkter door thema’s en plugins",
    nextjs: "Sterk met Framer Motion en maatwerk UX",
  },
  {
    item: "Performance",
    wordpress: "Kan snel zijn, maar plugins maken vaak zwaarder",
    nextjs: "Gebouwd voor snelle, moderne websites",
  },
  {
    item: "Onderhoud",
    wordpress: "Meer plugin- en updatebeheer",
    nextjs: "Minder afhankelijk van externe plugins",
  },
  {
    item: "Schaalbaarheid",
    wordpress: "Sterk voor contentbeheer",
    nextjs: "Sterk voor groei, UX en conversie",
  },
];

const relatedPages = [
  {
    title: "Next.js website laten maken",
    href: "/nextjs-website-laten-maken",
    text: "Ontdek waarom YousWeb voor premium websites vaak werkt met Next.js, Framer Motion en Vercel.",
  },
  {
    title: "Website laten maken",
    href: "/website-laten-maken",
    text: "Bekijk hoe YousWeb professionele websites bouwt met premium uitstraling en conversiegerichte structuur.",
  },
  {
    title: "Website builder",
    href: "/website-builder",
    text: "Stel jouw website samen en ontvang direct een duidelijke prijsindicatie.",
  },
  {
    title: "Portfolio websites",
    href: "/portfolio-websites",
    text: "Bekijk voorbeelden van websites met premium design, sterke UX en moderne uitstraling.",
  },
];

const faqs = [
  {
    question: "Bouwt YousWeb ook WordPress websites?",
    answer:
      "WordPress kan geschikt zijn voor bepaalde situaties, vooral wanneer contentbeheer centraal staat. Voor premium websites met maatwerk design, animaties, snelheid en schaalbaarheid werkt YousWeb meestal liever met Next.js.",
  },
  {
    question: "Voor wie is WordPress vooral geschikt?",
    answer:
      "WordPress is vooral geschikt voor blogs, kennisbanken, contentplatforms, verenigingen en bedrijven die vaak zelf pagina’s of artikelen willen beheren.",
  },
  {
    question: "Waarom kiest YousWeb vaak voor Next.js?",
    answer:
      "Next.js geeft meer vrijheid in design, performance, animaties en gebruikerservaring. Daardoor past het beter bij premium websites die vertrouwen moeten wekken en meer aanvragen moeten opleveren.",
  },
  {
    question: "Wat is beter voor mijn bedrijf: WordPress of Next.js?",
    answer:
      "Dat hangt af van je doel. Wil je vooral zelf veel content beheren, dan kan WordPress logisch zijn. Wil je een snelle, premium website met maatwerk uitstraling en sterke conversie, dan is Next.js vaak de betere keuze.",
  },
];

export default function WordPressWebsiteLatenMakenPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute right-0 top-[38%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </Link>

        <Link
          href="/website-builder"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
        >
          Start project
        </Link>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-20">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            WordPress website laten maken
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            WordPress kan sterk zijn, maar premium websites vragen vaak om meer
            vrijheid.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            WordPress is een bekend en flexibel CMS. Het is vooral interessant
            voor websites waar veel contentbeheer centraal staat. Maar wanneer
            je een premium website wilt met maatwerk design, sterke animaties,
            snelle performance en een professionele gebruikerservaring, kiest
            YousWeb vaak bewust voor een{" "}
            <Link
              href="/nextjs-website-laten-maken"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              Next.js website laten maken
            </Link>
            .
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/nextjs-website-laten-maken"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Waarom wij vaak Next.js gebruiken
            </Link>

            <Link
              href="/website-builder"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
            >
              Stel jouw website samen
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Wanneer is WordPress geschikt?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            WordPress is vooral sterk wanneer contentbeheer belangrijk is.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            WordPress is niet slecht. Het is een tool. Voor bepaalde bedrijven
            en websites kan het juist logisch zijn. Denk aan organisaties die
            regelmatig blogs, artikelen, nieuws of veel pagina’s willen beheren.
            Voor premium websites waar uitstraling, performance en conversie
            centraal staan, is{" "}
            <Link
              href="/nextjs-website-laten-maken"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              een moderne Next.js website
            </Link>{" "}
            vaak sterker.
          </p>
        </div>

        <div className="grid gap-5">
          {wordpressSuitableFor.map((item) => (
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Premium alternatief
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Daarom bouwen wij premium websites meestal met Next.js.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                Bij een premium website wil je niet vastzitten aan de grenzen
                van een thema. Je wilt vrijheid in design, snelle laadtijd,
                sterke animaties, een professionele gebruikerservaring en een
                structuur die klaar is voor groei. Precies daarom is{" "}
                <Link
                  href="/nextjs-website-laten-maken"
                  className="text-white underline decoration-blue-300/50 underline-offset-4 hover:text-blue-200"
                >
                  Next.js website laten maken
                </Link>{" "}
                de richting die beter past bij hoe YousWeb premium websites
                bouwt.
              </p>
            </div>

            <div className="grid gap-3">
              {nextjsBenefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm font-medium text-white/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            WordPress versus Next.js
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Kies niet alleen een systeem. Kies wat past bij je groeidoel.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Wil je vooral zelf content beheren, dan kan WordPress logisch zijn.
            Wil je een snelle, premium website met maatwerk UX, animaties en
            sterke conversie, dan is een{" "}
            <Link
              href="/nextjs-website-laten-maken"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              Next.js website
            </Link>{" "}
            vaak de betere investering.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
            <div className="p-5">Onderdeel</div>
            <div className="p-5 text-white/60">WordPress</div>
            <div className="p-5 text-blue-300">Next.js</div>
          </div>

          {comparison.map((row) => (
            <div
              key={row.item}
              className="grid grid-cols-3 border-b border-white/10 text-sm last:border-b-0"
            >
              <div className="p-5 font-medium text-white">{row.item}</div>
              <div className="p-5 text-white/45">{row.wordpress}</div>
              <div className="p-5 text-white/70">{row.nextjs}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Eerlijke keuze
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Wij verkopen geen systeem. Wij bouwen de oplossing die past bij jouw
            bedrijf.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Voor sommige websites is WordPress praktisch. Maar voor ondernemers
            die premium willen overkomen, sneller willen laden, sterker willen
            converteren en meer controle willen over de gebruikerservaring,
            bouwen wij liever met Next.js.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "WordPress als contentkeuze",
              text: "Geschikt wanneer bloggen, nieuws of veel zelfbeheer belangrijker is dan maatwerk design en animatie.",
            },
            {
              title: "Next.js als premium keuze",
              text: "Sterker wanneer snelheid, uitstraling, conversie, animatie en schaalbaarheid belangrijk zijn.",
            },
            {
              title: "YousWeb als groeipartner",
              text: "Wij kijken niet alleen naar techniek, maar naar uitstraling, vertrouwen, vindbaarheid en aanvragen.",
            },
          ].map((item) => (
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
                Wil je weten welke website het beste past bij jouw bedrijf?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                Stel jouw website samen via de Website Builder. Wij kijken
                daarna persoonlijk mee naar je wensen, doelen en wat technisch
                het beste past: WordPress wanneer contentbeheer centraal staat,
                of Next.js wanneer premium uitstraling, snelheid en groei
                belangrijker zijn.
              </p>
            </div>

            <Link
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-5 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Start jouw aanvraag
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-28">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Veelgestelde vragen
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Veelgestelde vragen over WordPress en Next.js.
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
            Verder oriënteren voordat je een website laat maken?
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedPages.map((page) => (
              <Link
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
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
