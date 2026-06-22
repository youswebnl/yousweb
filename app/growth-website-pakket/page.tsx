import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Growth Website Pakket | Website voor groei via Google | YousWeb",
  description:
    "Bekijk wat je krijgt binnen het Growth website pakket van YousWeb: tot 3 pagina’s, 2 SEO-landingspagina’s en premium animaties op de homepage.",
  alternates: {
    canonical: "https://www.yousweb.nl/growth-website-pakket",
  },
  openGraph: {
    title: "Growth Website Pakket | YousWeb",
    description:
      "Voor ondernemers die actief klanten willen aantrekken via Google met een sterkere website structuur, SEO-landingspagina’s en premium homepage animaties.",
    url: "https://www.yousweb.nl/growth-website-pakket",
    siteName: "YousWeb",
    type: "website",
  },
};

const linkClass =
  "font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200";

const included = [
  "Alles uit Starter",
  "Website tot 3 pagina’s",
  "Tot 2 SEO-landingspagina’s",
  "Premium animaties op homepage",
  "Sterkere UX/UI structuur",
  "Conversiegerichte opbouw",
  "Contactformulier, WhatsApp en e-mail",
  "Basis SEO-structuur",
];

const suitableFor = [
  "Ondernemers die willen groeien via Google",
  "Zzp’ers met meerdere diensten",
  "Lokale bedrijven",
  "Coaches en consultants",
  "Dienstverleners met groeiambitie",
  "Bedrijven die meer aanvragen willen",
];

const reasons = [
  {
    title: "Meer pagina’s",
    text: "Je hebt ruimte om jouw diensten, werkwijze en vertrouwen beter uit te leggen dan op één lange pagina.",
  },
  {
    title: "SEO-landingspagina’s",
    text: "Je kunt gerichte zoekwoorden, diensten of regio’s beter aanspreken met aparte pagina’s.",
  },
  {
    title: "Premium homepage animaties",
    text: "De homepage krijgt extra beweging en interactie, omdat dit vaak de belangrijkste pagina is voor eerste indruk en conversie.",
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
    name: "Extra animatiepagina",
    price: "+ €250",
    description:
      "Voeg premium animaties toe aan één extra pagina naast de homepage.",
  },
  {
    name: "Website offerte systeem",
    price: "+ €250",
    description:
      "Voor een geavanceerde offerteflow met meerdere stappen, prijsindicaties, automatische e-mails en WhatsApp meldingen.",
  },
  {
    name: "Online afsprakenplanner",
    price: "+ €250",
    description:
      "Voor afspraken via Calendly of Google Calendar inclusief bevestigingen en herinneringen.",
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

export default function GrowthWebsitePakketPage() {
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
          <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-200">
            Meest gekozen
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Growth website pakket
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Growth pakket voor ondernemers die actief willen groeien via Google.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Het Growth pakket is bedoeld voor ondernemers die meer willen dan
            alleen online zichtbaar zijn. Je krijgt meer pagina’s, gerichte
            SEO-landingspagina’s en premium animaties op de homepage. Wil je
            direct jouw pakket samenstellen? Gebruik dan de{" "}
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
            Waarom Growth?
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Niet alleen een website, maar een sterkere groeistructuur.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-white/60">
          <p>
            Growth is geschikt wanneer je website meer moet doen dan alleen
            professioneel ogen. Dit pakket helpt je om diensten duidelijker uit
            te leggen, meer vertrouwen op te bouwen en beter gevonden te worden.
            Door de combinatie met{" "}
            <Link href="/seo-landingspaginas" className={linkClass}>
              SEO-landingspagina’s
            </Link>{" "}
            krijgt je website meer zoekkansen dan een compacte one-page website.
          </p>

          <p>
            De combinatie van meerdere pagina’s, SEO-landingspagina’s en premium
            homepage animaties maakt Growth de logische keuze voor ondernemers
            die actief meer aanvragen willen ontvangen. Wil je direct nóg meer
            pagina’s, markten en premium uitstraling? Dan is het{" "}
            <Link href="/agency-website-pakket" className={linkClass}>
              Agency Level pakket
            </Link>{" "}
            de volgende stap.
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
                Dit krijg je binnen het Growth pakket.
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
            Wil je zien hoe deze onderdelen samenkomen in jouw aanvraag? Stel
            jouw website samen via de{" "}
            <Link href="/website-builder" className={linkClass}>
              Website Builder
            </Link>{" "}
            en ontvang direct een prijsindicatie.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Waarom dit werkt
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Growth geeft meer ruimte voor SEO, vertrouwen en conversie.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Wil je naast vindbaarheid ook een interactief aanvraagproces of
            prijsindicatie op je website? Dan kan Growth worden uitgebreid met
            een{" "}
            <Link href="/website-offerte-systeem" className={linkClass}>
              website offerte systeem
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item) => (
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
            Voor ondernemers die klanten willen aantrekken, niet alleen online
            aanwezig willen zijn.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Growth is vooral interessant wanneer je website een actieve rol moet
            spelen in vindbaarheid, vertrouwen en conversie. Wil je meteen een
            grotere premium structuur neerzetten, bekijk dan het{" "}
            <Link href="/agency-website-pakket" className={linkClass}>
              Agency Level pakket
            </Link>
            .
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
            Growth versus Starter
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Wanneer is Growth beter dan Starter?
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-white/60">
          <p>
            Starter is sterk wanneer je snel professioneel online wilt staan met
            één duidelijke pagina. Growth is beter wanneer je meerdere diensten,
            meer uitleg, SEO-landingspagina’s en een sterkere homepage ervaring
            nodig hebt.
          </p>

          <p>
            Growth is daarom vaak de meest logische keuze voor ondernemers die
            willen groeien via Google en meer aanvragen uit hun website willen
            halen. Wil je nog meer SEO-landingspagina’s, meer pagina’s en
            premium animaties op de volledige website? Dan past het{" "}
            <Link href="/agency-website-pakket" className={linkClass}>
              Agency Level pakket
            </Link>{" "}
            waarschijnlijk beter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Mogelijke uitbreidingen
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Uitbreidingen die passen bij groei.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Extra opties zijn bedoeld als aanvulling op het Growth pakket, zodat
            je website verder kan meegroeien met jouw doelen. Wil je minder
            losse uitbreidingen en direct een completere premium structuur? Dan
            is{" "}
            <Link href="/agency-website-pakket" className={linkClass}>
              Agency Level
            </Link>{" "}
            vaak logischer.
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
            Past Growth bij jouw groeidoel?
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
