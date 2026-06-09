"use client";

import { motion } from "framer-motion";

const portfolioProjects = [
  {
    title: "Zaanse Montage",
    type: "Montage & renovatie website",
    video:
      "https://cqvozahseaepel7p.public.blob.vercel-storage.com/zaansemontage-desktop.mp4",
    description:
      "Een professionele bedrijfswebsite met duidelijke dienstenstructuur, sterke eerste indruk en een contactgerichte opbouw.",
  },
  {
    title: "Your Soul Therapist",
    type: "Therapie & coaching website",
    video:
      "https://cqvozahseaepel7p.public.blob.vercel-storage.com/yoursoultherapist-desktop.mp4",
    description:
      "Een rustige premium website met zachte uitstraling, heldere gebruikerservaring en focus op vertrouwen.",
  },
  {
    title: "Volgende case study",
    type: "Binnenkort toegevoegd",
    video: null,
    description:
      "Binnenkort voegen we hier een nieuwe website case toe met premium design, sterke UX en conversiegerichte structuur.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Vanaf €749",
    description:
      "Voor ondernemers die snel professioneel online zichtbaar willen worden.",
  },
  {
    name: "Growth",
    price: "Vanaf €1.250",
    featured: true,
    description:
      "Voor bedrijven die sterker willen groeien met betere UX, structuur en conversie.",
  },
  {
    name: "Agency Level",
    price: "Vanaf €2.250",
    description:
      "Voor premium positionering, moderne uitstraling en maximale impact.",
  },
];

const faqs = [
  {
    question: "Wat kost een professionele website laten maken?",
    answer:
      "Dat hangt af van de structuur, functies en premium opties. Daarom werken wij met website pakketten en een offerte builder voor een duidelijke prijsindicatie.",
  },
  {
    question: "Hoe lang duurt het bouwen van een website?",
    answer:
      "Kleinere websites kunnen sneller worden opgeleverd, terwijl grotere premium websites meer tijd nodig hebben voor design, structuur en optimalisatie.",
  },
  {
    question: "Wordt mijn website ook goed op mobiel gebouwd?",
    answer:
      "Ja. Elke website wordt responsive ontwikkeld voor desktop, tablet en mobiel zodat bezoekers overal een professionele ervaring krijgen.",
  },
  {
    question: "Zit SEO inbegrepen bij een website?",
    answer:
      "Ja. Elke professionele website wordt opgebouwd met een sterke SEO-basis zoals duidelijke headings, responsive design, snelle performance en slimme interne links.",
  },
  {
    question: "Kan ik later extra functies toevoegen?",
    answer:
      "Ja. De websites worden schaalbaar opgebouwd zodat later extra pagina’s, animaties, portfolio’s of premium functies toegevoegd kunnen worden.",
  },
  {
    question: "Hoe werkt het offerteproces?",
    answer:
      "Je kiest eerst een website pakket, voegt extra opties toe en verzendt daarna jouw aanvraag. Vervolgens nemen we persoonlijk contact op om jouw website, planning en prijsindicatie samen te bespreken.",
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
        <a href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </a>

        <a
          href="/website-builder"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
        >
          Start project
        </a>
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
            met responsive design, sterke UX, snelle performance en een slimme
            SEO-structuur. Bekijk ook onze{" "}
            <a
              href="/portfolio-websites"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              portfolio websites
            </a>{" "}
            of vergelijk direct de{" "}
            <a
              href="/#prijzen"
              className="text-blue-400 underline-offset-4 hover:underline"
            >
              website pakketten
            </a>
            .
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/website-builder"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Stel jouw website samen
            </a>

            <a
              href="/portfolio-websites"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
            >
              Bekijk portfolio websites
            </a>
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
              label: "Premium UX",
              title: "Gebouwd voor vertrouwen",
              text: "Moderne layouts, duidelijke flow en sterke gebruikerservaring voor hogere conversie.",
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
            Daarom bouwen wij{" "}
            <strong className="font-semibold text-white">
              moderne websites
            </strong>{" "}
            met responsive design, premium UX, duidelijke structuur en een
            sterke SEO-basis. Zo wordt jouw website niet alleen mooi, maar ook
            strategisch opgebouwd als website die past bij jouw groeifase.
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
                    : "Premium uitstraling"}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">{title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {index === 0
                  ? "Elke website wordt geoptimaliseerd voor desktop, tablet en mobiel zodat bezoekers overal een professionele ervaring krijgen."
                  : index === 1
                    ? "Van headings tot performance en interne structuur: alles wordt opgebouwd met een sterke SEO-basis voor toekomstige groei."
                    : "Moderne layouts, duidelijke hiërarchie en sterke UX zorgen voor een professionele eerste indruk bij bezoekers."}
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
              Bekijk professionele portfolio websites met premium uitstraling
              en moderne gebruikerservaring.
            </h2>
          </div>

          <a
            href="/portfolio-websites"
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Bekijk volledige portfolio
          </a>
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
                {project.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-[240px] w-full object-contain"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
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
                  <a
                    href="/portfolio-websites"
                    className="text-blue-400 underline-offset-4 hover:underline"
                  >
                    portfolio websites
                  </a>{" "}
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
            Via onze interactieve offerte builder stel je eenvoudig jouw{" "}
            <strong className="font-semibold text-white">
              professionele website
            </strong>{" "}
            samen. Kies een pakket, voeg premium opties toe en ontvang direct
            een prijsindicatie.
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

              <p className="mt-5 text-sm leading-7 text-white/55">
                {plan.description}
              </p>

              <div className="my-7 h-px bg-white/10" />

              <p className="text-sm leading-7 text-white/45">
                Stel jouw website samen via de offerte builder en ontvang een
                duidelijke prijsindicatie op basis van jouw wensen.
              </p>

              <a
                href="/website-builder"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Stel jouw website samen
              </a>
            </motion.article>
          ))}
        </div>
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

              <p className="mt-5 max-w-3xl text-base leading-7 text-white/55">
                {item.answer}
              </p>
            </motion.details>
          ))}
        </div>
      </section>
    </main>
  );
}