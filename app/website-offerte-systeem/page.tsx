import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website offerte systeem laten maken | YousWeb",
  description:
    "Laat een slim website offerte systeem maken waarmee bezoekers opties kiezen, een prijsindicatie zien en eenvoudig een aanvraag versturen.",
  alternates: {
    canonical: "https://www.yousweb.nl/website-offerte-systeem",
  },
  openGraph: {
    title: "Website offerte systeem laten maken | YousWeb",
    description:
      "Van offerteflow tot online afsprakenplanner: YousWeb bouwt maatwerk aanvraagprocessen voor meer aanvragen en minder handmatig werk.",
    url: "https://www.yousweb.nl/website-offerte-systeem",
    siteName: "YousWeb",
    type: "website",
  },
};

const included = [
  "Contactpagina",
  "Contactformulier",
  "WhatsApp knop",
  "E-mail knop",
];

const processSteps = [
  "Kies pakket",
  "Selecteer opties",
  "Bekijk prijsindicatie",
  "Verstuur aanvraag",
];

const automation = [
  "WhatsApp melding",
  "E-mail notificatie",
  "CRM koppeling",
  "Interne opvolging",
  "Automatische workflows",
];

const booking = [
  "Calendly koppeling",
  "Google Calendar koppeling",
  "Beschikbare tijdsloten",
  "Intakeformulieren",
  "Automatische bevestigingen",
  "Herinneringen",
];

const businesses = [
  "Coaches",
  "Therapeuten",
  "Marketingbureaus",
  "Webdesigners",
  "Consultants",
  "Vastgoedbedrijven",
  "Montagebedrijven",
  "Zakelijke dienstverleners",
];

const benefits = [
  "Meer aanvragen",
  "Betere kwaliteit leads",
  "Minder handmatig werk",
  "Professionele uitstraling",
  "Hogere conversie",
  "Efficiëntere opvolging",
];

export default function WebsiteOfferteSysteemPage() {
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
          Start project
        </Link>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Website offerte systeem
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Website offerte systeem laten maken
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Laat bezoekers stap voor stap hun wensen selecteren, direct een
            prijsindicatie ontvangen en eenvoudig een aanvraag versturen. Bekijk
            onze{" "}
            <Link
              href="/website-builder"
              className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
            >
              Website Builder
            </Link>{" "}
            als voorbeeld van een slimme offerteflow in de praktijk.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Website Builder bekijken
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
            Wat is het?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Meer dan een standaard contactformulier.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-white/60">
          <p>
            Een online offerte systeem begeleidt bezoekers van interesse naar
            een complete aanvraag. In plaats van één los formulier doorloopt de
            bezoeker meerdere logische stappen.
          </p>

          <p>
            Denk aan pakketkeuze, extra opties, een prijsindicatie en
            automatische opvolging. Dit soort maatwerk bouwen wij vooral binnen
            een{" "}
            <Link
              href="/nextjs-website-laten-maken"
              className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
            >
              moderne Next.js website
            </Link>{" "}
            omdat snelheid, flexibiliteit en gebruikerservaring belangrijk zijn.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                Standaard inbegrepen
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Dit zit standaard al in jouw website.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/60">
                Bij een professionele{" "}
                <Link
                  href="/website-laten-maken"
                  className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
                >
                  website laten maken
                </Link>{" "}
                traject horen basiscontactmogelijkheden standaard inbegrepen.
              </p>
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
            Geavanceerd aanvraagproces
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Wanneer bezoekers meer keuzes moeten maken.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Een geavanceerd aanvraagproces is interessant wanneer bezoekers een
            pakket, opties of voorkeuren moeten selecteren voordat zij een
            aanvraag versturen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.06]"
            >
              <p className="text-sm text-blue-300">Stap {index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {step}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {automation.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm text-white/65"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Online afsprakenplanner
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Laat bezoekers direct een afspraak plannen.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Voor sommige bedrijven is een afspraak waardevoller dan een offerte.
            Een online planner kan onderdeel zijn van een groter{" "}
            <Link
              href="/website-offerte-systeem"
              className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
            >
              website offerte systeem
            </Link>{" "}
            of als losse boekingsflow worden geïntegreerd.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {booking.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Voor welke bedrijven?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Vooral interessant voor bedrijven die actief aanvragen willen
            ontvangen.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            In combinatie met sterke{" "}
            <Link
              href="/seo-landingspaginas"
              className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
            >
              SEO-landingspagina’s
            </Link>{" "}
            kan een offerteflow zorgen voor meer relevante bezoekers én betere
            aanvragen.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-blue-400/30 bg-blue-400/[0.07] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Maatwerk offerteflow
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Een formulier verzamelt informatie. Een offerteflow begeleidt
                bezoekers naar actie.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm font-medium text-white/75"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/65">
            Daarom bouwen wij dit soort interactieve oplossingen vaak met{" "}
            <Link
              href="/nextjs-website-laten-maken"
              className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
            >
              Next.js websites voor premium maatwerk
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl md:p-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Volgende stap
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Klaar voor een slimmer aanvraagproces?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Wil je bezoekers automatisch begeleiden van interesse naar aanvraag
            of afspraak? Bekijk de{" "}
            <Link
              href="/website-builder"
              className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
            >
              Website Builder
            </Link>{" "}
            of ontdek hoe wij jouw website professioneel kunnen opbouwen.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/website-builder"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Website Builder bekijken
            </Link>

            <Link
              href="/website-laten-maken"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white hover:text-black"
            >
              Offerte aanvragen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
