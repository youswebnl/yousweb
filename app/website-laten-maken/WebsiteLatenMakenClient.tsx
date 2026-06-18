"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PortfolioProject = {
  title: string;
  type: string;
  videoEmbed: string | null;
  description: string;
};

type PricingPlan = {
  name: "Starter" | "Growth" | "Agency Level";
  price: string;
  featured?: boolean;
  description: string;
  detailHref: string;
  detailLabel: string;
  features: string[];
};

type FAQItem = {
  question: string;
  answer: ReactNode;
};

const linkClass =
  "font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200";

const portfolioProjects: PortfolioProject[] = [
  {
    title: "Zaanse Montage",
    type: "Montage & renovatie website",
    videoEmbed:
      "https://player.mediadelivery.net/embed/686200/0051a90d-7bd6-4cca-a761-b18e937afe00?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
    description:
      "Een professionele bedrijfswebsite met duidelijke dienstenstructuur, sterke eerste indruk en een contactgerichte opbouw.",
  },
  {
    title: "Your Soul Therapist",
    type: "Therapie & coaching website",
    videoEmbed:
      "https://player.mediadelivery.net/embed/686200/8299c1b4-6812-433e-84ce-82898b0cb262?autoplay=true&loop=true&muted=true&preload=true&responsive=true",
    description:
      "Een rustige premium website met zachte uitstraling, heldere gebruikerservaring en focus op vertrouwen.",
  },
  {
    title: "Volgende case study",
    type: "Binnenkort toegevoegd",
    videoEmbed: null,
    description:
      "Binnenkort voegen we hier een nieuwe website case toe met premium design, sterke UX en conversiegerichte structuur.",
  },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Vanaf €749",
    detailHref: "/starter-website-pakket",
    detailLabel: "Starter pakket",
    description:
      "Voor starters en zzp’ers die professioneel online zichtbaar willen worden met een sterke one-page website.",
    features: [
      "One-page website",
      "Premium basisdesign",
      "Responsive voor mobiel en tablet",
      "Basis SEO-structuur",
      "Contactformulier, WhatsApp en e-mail",
    ],
  },
  {
    name: "Growth",
    price: "Vanaf €1.250",
    featured: true,
    detailHref: "/growth-website-pakket",
    detailLabel: "Growth pakket",
    description:
      "Meest gekozen voor ondernemers die actief klanten willen aantrekken via Google en sterker willen converteren.",
    features: [
      "Alles uit Starter",
      "Website tot 3 pagina’s",
      "Tot 2 SEO-landingspagina’s",
      "Premium animaties op homepage",
      "Conversiegerichte opbouw",
    ],
  },
  {
    name: "Agency Level",
    price: "Vanaf €2.250",
    detailHref: "/agency-website-pakket",
    detailLabel: "Agency Level pakket",
    description:
      "Voor bedrijven die serieus willen investeren in online groei, vertrouwen en schaalbaarheid.",
    features: [
      "Alles uit Growth",
      "Website tot 6 pagina’s",
      "Tot 5 SEO-landingspagina’s",
      "Premium animaties op volledige website",
      "Strategische conversieflow",
    ],
  },
];

const faqs: FAQItem[] = [
  {
    question: "Wat kost een professionele website laten maken?",
    answer: (
      <>
        Een professionele website laten maken bij YousWeb start vanaf €749 voor
        het Starter pakket. De prijs hangt af van je groeidoel, het aantal
        pagina’s, SEO-landingspagina’s, animaties en eventuele maatwerkfuncties.
        Een compacte one-page website is voordeliger dan een uitgebreidere
        website met meerdere pagina’s, conversiestructuur en extra vindbaarheid.
        Via de{" "}
        <Link href="/website-builder" className={linkClass}>
          Website Builder
        </Link>{" "}
        stel je jouw website stap voor stap samen en krijg je direct een
        duidelijke prijsindicatie. Daarna bespreken we persoonlijk wat het beste
        past bij jouw bedrijf, doelgroep en budget.
      </>
    ),
  },
  {
    question: "Welk websitepakket past het beste bij mijn bedrijf?",
    answer: (
      <>
        Het beste pakket hangt af van jouw fase. Het{" "}
        <Link href="/starter-website-pakket" className={linkClass}>
          Starter pakket
        </Link>{" "}
        past bij ondernemers die professioneel online zichtbaar willen worden
        met één sterke pagina. Growth is sterker wanneer je actief klanten wilt
        aantrekken via Google met meerdere pagina’s, SEO-landingspagina’s en
        premium animaties op de homepage. Agency Level past bij bedrijven die
        willen investeren in een volledige premium website met meer pagina’s,
        meer SEO-structuur en animaties op de volledige website.
      </>
    ),
  },
  {
    question: "Zit SEO inbegrepen bij een website?",
    answer: (
      <>
        Ja. Elke professionele website krijgt een sterke SEO-basis met logische
        headings, nette paginastructuur, responsive opbouw, snelle performance
        en interne links. Dat betekent niet dat elke website automatisch op
        tientallen zoekwoorden rankt; daarvoor heb je gerichte content en
        pagina’s nodig. Bij Growth en Agency Level is er extra ruimte voor{" "}
        <Link href="/seo-landingspaginas" className={linkClass}>
          SEO-landingspagina’s
        </Link>
        , waardoor je beter kunt inspelen op specifieke diensten, regio’s en
        zoekintenties. Zo bouw je niet alleen een mooie website, maar ook een
        fundament voor vindbaarheid in Google.
      </>
    ),
  },
  {
    question: "Waarom is een website met meerdere pagina’s beter voor SEO?",
    answer: (
      <>
        Een one-page website kan sterk zijn voor een compacte start, maar voor
        SEO is meerdere pagina’s vaak sterker. Google begrijpt aparte, gerichte
        pagina’s beter dan één lange pagina waarin alle onderwerpen door elkaar
        staan. Met meerdere pagina’s kun je jouw diensten, werkwijze,
        veelgestelde vragen en lokale zoekwoorden duidelijker verdelen. Daarom
        is het{" "}
        <Link href="/growth-website-pakket" className={linkClass}>
          Growth pakket
        </Link>{" "}
        interessant voor ondernemers die niet alleen online zichtbaar willen
        zijn, maar ook meer zoekkansen en aanvragen willen creëren.
      </>
    ),
  },
  {
    question: "Wordt mijn website ook goed op mobiel gebouwd?",
    answer: (
      <>
        Ja. Elke website wordt responsive ontwikkeld voor desktop, tablet en
        mobiel. We werken desktop-first, omdat de premium uitstraling en
        structuur daar het beste zichtbaar worden. Daarna vertalen we die
        ervaring naar mobiel, zodat bezoekers ook op hun telefoon duidelijk
        kunnen lezen, navigeren en contact opnemen. Mobiel is belangrijk voor
        oriëntatie en snelle actie, maar desktop blijft vaak belangrijk voor
        vertrouwen en beoordeling. In onze{" "}
        <Link href="/portfolio-websites" className={linkClass}>
          portfolio websites
        </Link>{" "}
        kun je zien hoe desktop en mobiel samen één professionele ervaring
        vormen.
      </>
    ),
  },
  {
    question: "Waarom bouwt YousWeb veel websites met Next.js?",
    answer: (
      <>
        Voor premium websites gebruiken wij vaak Next.js omdat het veel vrijheid
        geeft in design, animaties, performance en schaalbaarheid. Je zit minder
        vast aan standaard thema’s, overbodige plugins of beperkingen van een
        template. Daardoor kunnen we websites bouwen die sneller voelen,
        strakker bewegen en beter aansluiten op jouw merk en conversiedoel. Voor
        ondernemers die meer willen dan een standaard website is een{" "}
        <Link href="/nextjs-website-laten-maken" className={linkClass}>
          Next.js website laten maken
        </Link>{" "}
        vaak de beste keuze.
      </>
    ),
  },
  {
    question: "Kan ik later extra functies toevoegen?",
    answer: (
      <>
        Ja. De websites worden schaalbaar opgebouwd, zodat je later extra
        pagina’s, case studies, video’s, SEO-content of maatwerkfuncties kunt
        toevoegen. Denk bijvoorbeeld aan extra SEO-landingspagina’s, een online
        afsprakenplanner, CRM-koppeling of een{" "}
        <Link href="/website-offerte-systeem" className={linkClass}>
          website offerte systeem
        </Link>{" "}
        waarmee bezoekers stap voor stap opties kiezen en een prijsindicatie
        ontvangen. Zo groeit je website mee met je bedrijf zonder dat alles
        opnieuw gebouwd hoeft te worden.
      </>
    ),
  },
  {
    question: "Hoe werkt het offerteproces?",
    answer: (
      <>
        Het offerteproces is bewust simpel gehouden. Je kiest eerst een pakket,
        voegt alleen relevante extra opties toe en vult daarna je gegevens en
        wensen in. De prijs die je ziet is een indicatie, zodat je direct weet
        waar je ongeveer aan toe bent. Na je aanvraag nemen we persoonlijk
        contact op om jouw doelen, planning, pagina’s en definitieve prijs te
        bespreken. De interactieve{" "}
        <Link href="/website-builder" className={linkClass}>
          Website Builder
        </Link>{" "}
        laat direct zien hoe dit werkt: van pakketkeuze tot aanvraag en
        persoonlijke opvolging.
      </>
    ),
  },
];

export default function WebsiteLatenMakenClient() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute right-0 top-[38%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </Link>

        <Link
          href="/website-builder"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
        >
          Start project
        </Link>
      </motion.nav>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pb-28 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Website laten maken
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Professionele websites laten maken voor ondernemers die serieus
            willen groeien.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Een{" "}
            <strong className="font-semibold text-white">
              professionele website laten maken
            </strong>{" "}
            betekent meer dan alleen mooi design. Wij bouwen moderne websites
            met responsive design, premium animaties, snelle performance en een
            slimme SEO-structuur. Bekijk ook onze{" "}
            <Link href="/portfolio-websites" className={linkClass}>
              portfolio websites
            </Link>{" "}
            of stel direct jouw website samen via de{" "}
            <Link href="/website-builder" className={linkClass}>
              Website Builder
            </Link>
            .
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/website-builder"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Stel jouw website samen
            </Link>

            <Link
              href="/portfolio-websites"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
            >
              Bekijk portfolio websites
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              label: "Responsive design",
              title: "Perfect op desktop en mobiel",
              text: "Elke website wordt gebouwd voor een premium ervaring op elk schermformaat.",
            },
            {
              label: "SEO structuur",
              title: "Slim opgebouwd voor Google",
              text: "Van headings tot performance en interne structuur: alles wordt SEO-first opgebouwd.",
              featured: true,
            },
            {
              label: "Premium animaties",
              title: "Gebouwd voor vertrouwen",
              text: "Moderne layouts, beweging en duidelijke flow zorgen voor een sterkere eerste indruk.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 34, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.95,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-[2rem] border p-6 backdrop-blur-xl transition hover:-translate-y-2 ${
                item.featured
                  ? "border-blue-400/20 bg-blue-400/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <p
                className={`text-sm ${
                  item.featured ? "text-blue-300/70" : "text-white/40"
                }`}
              >
                {item.label}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Waarom een professionele website belangrijk is
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Een moderne website is vaak de eerste indruk van jouw bedrijf.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Ondernemers worden online binnen seconden beoordeeld. Een
            professionele website helpt om vertrouwen op te bouwen, sterker over
            te komen en bezoekers sneller richting contact of aanvraag te
            sturen.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
            Daarom bouwen wij moderne websites met responsive design, premium
            animaties, duidelijke structuur en een sterke SEO-basis. Voor
            bedrijven die meer willen dan een standaard website is een{" "}
            <Link href="/nextjs-website-laten-maken" className={linkClass}>
              Next.js website laten maken
            </Link>{" "}
            vaak de sterkste keuze.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {[
            "Premium ervaring op elk scherm",
            "Slim opgebouwd voor vindbaarheid",
            "Vertrouwen binnen enkele seconden",
          ].map((title, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
            >
              <p className="text-sm text-blue-300/70">
                {index === 0
                  ? "Responsive websites"
                  : index === 1
                    ? "SEO structuur"
                    : "Premium animaties"}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">{title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {index === 0
                  ? "Elke website wordt geoptimaliseerd voor desktop, tablet en mobiel zodat bezoekers overal een professionele ervaring krijgen."
                  : index === 1
                    ? "Van headings tot performance en interne structuur: alles wordt opgebouwd met een sterke SEO-basis voor toekomstige groei."
                    : "Moderne layouts, duidelijke hiërarchie en premium animaties zorgen voor een professionele eerste indruk bij bezoekers."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Recente websites
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Bekijk professionele portfolio websites met premium uitstraling en
              moderne gebruikerservaring.
            </h2>
          </div>

          <Link
            href="/portfolio-websites"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Bekijk volledige portfolio
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 42, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.95,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="relative min-h-[240px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0B0B0B]">
                {project.videoEmbed ? (
                  <iframe
                    src={project.videoEmbed}
                    loading="lazy"
                    className="h-[240px] w-full border-0"
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.14),transparent_35%)]" />

                    <div className="relative flex h-[240px] items-center justify-center text-center">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                          Binnenkort
                        </p>

                        <p className="mt-3 text-lg font-semibold text-white/80">
                          Nieuwe case study
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-blue-400">{project.type}</p>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {project.description} Bekijk de volledige{" "}
                  <Link href="/portfolio-websites" className={linkClass}>
                    portfolio websites
                  </Link>{" "}
                  voor meer voorbeelden en inspiratie.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-4xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Website pakketten
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Professionele website laten maken met een pakket dat past bij jouw
            bedrijf en groeifase.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Via onze interactieve offerte builder stel je eenvoudig jouw
            professionele website samen. Kies een pakket, voeg logische extra
            opties toe en ontvang direct een prijsindicatie.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 42, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.95,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-[2rem] border p-7 backdrop-blur-xl transition hover:-translate-y-2 ${
                plan.featured
                  ? "border-blue-400/30 bg-blue-400/[0.07]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.featured && (
                <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-200">
                  Meest gekozen
                </div>
              )}

              <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                {plan.name}
              </h3>

              <p className="mt-4 text-2xl font-semibold text-white">
                {plan.price}
              </p>

              <p className="mt-5 min-h-[84px] text-sm leading-7 text-white/55">
                {plan.description}
              </p>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Wil je precies weten wat je krijgt binnen het{" "}
                <Link href={plan.detailHref} className={linkClass}>
                  {plan.detailLabel}
                </Link>
                ?
              </p>

              <div className="my-7 h-px bg-white/10" />

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-white/65"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/website-builder"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Stel jouw website samen
              </Link>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-white/50">
          Twijfel je tussen Growth en Agency Level?{" "}
          <Link href="/seo-landingspaginas" className={linkClass}>
            Ontdek hoe SEO-landingspagina’s helpen bij betere vindbaarheid in
            Google
          </Link>
          .
        </p>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Veelgestelde vragen
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Alles rondom een professionele website laten maken.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Antwoorden op veelgestelde vragen over responsive websites, SEO,
            prijzen, ontwikkeling en het offerteproces.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold tracking-[-0.02em]">
                {item.question}

                <span className="text-2xl text-blue-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-5 max-w-3xl text-base leading-7 text-white/55">
                {item.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </section>
    </main>
  );
}
