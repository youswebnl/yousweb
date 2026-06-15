"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    title: "Zaanse Montage",
    type: "Montage & renovatie website",
    description:
      "Een professionele website voor een montagebedrijf, gebouwd om vertrouwen te wekken, diensten duidelijk te presenteren en bezoekers richting contact te sturen.",
    desktopVideo:
      "https://cqvozahseaepel7p.public.blob.vercel-storage.com/zaansemontage-desktop.mp4",
    mobileVideo:
      "https://cqvozahseaepel7p.public.blob.vercel-storage.com/zaansemontage-mobile.mp4",
    highlights: [
      "Sterke eerste indruk",
      "Duidelijke dienstenstructuur",
      "Responsive ervaring",
      "Contactgericht ontwerp",
    ],
  },
  {
    title: "Your Soul Therapist",
    type: "Therapie & persoonlijke begeleiding",
    description:
      "Een zachte, rustige en professionele website voor een therapeutische praktijk, met focus op vertrouwen, helderheid en een prettige gebruikerservaring.",
    desktopVideo:
      "https://cqvozahseaepel7p.public.blob.vercel-storage.com/yoursoultherapist-desktop.mp4",
    mobileVideo:
      "https://cqvozahseaepel7p.public.blob.vercel-storage.com/yoursoultherapist-mobile.mp4",
    highlights: [
      "Rustige premium uitstraling",
      "Heldere pagina-opbouw",
      "Mobiel geoptimaliseerd",
      "Vertrouwen en begeleiding",
    ],
  },
  {
    title: "YousWeb",
    type: "Live agency case study",
    description:
      "Deze website zelf: gebouwd als high-end voorbeeld van premium design, duidelijke pakketten, SEO-structuur en een werkende offerteflow.",
    desktopVideo:
      "https://cqvozahseaepel7p.public.blob.vercel-storage.com/yousweb-desktop.mp4",
    mobileVideo: "/videos/yousweb-mobile.mp4",
    highlights: [
      "Premium homepage",
      "Website builder flow",
      "Pakketten en prijsindicatie",
      "E-mail en WhatsApp aanvraag",
    ],
  },
];

export default function PortfolioClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />
      <div className="absolute right-0 top-[45%] h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[140px]" />

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
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition-colors duration-500 hover:bg-white hover:text-black"
        >
          Start project
        </a>
      </motion.nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Portfolio websites
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Websites die laten zien hoe premium online vertrouwen voelt.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Bekijk live previews van websites waarin uitstraling, structuur,
            responsive ervaring en conversiegerichte opbouw samenkomen.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-28">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.05] md:p-7"
          >
            <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-4">
                <button
                  type="button"
                  onClick={() => setActiveVideo(project.desktopVideo)}
                  className="group relative block w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0B0B0B] text-left"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_35%)]" />

                  <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-black/45">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-contain"
                    >
                      <source src={project.desktopVideo} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-colors duration-500 group-hover:bg-black/35 group-hover:opacity-100">
                      <div className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl">
                        Bekijk fullscreen
                      </div>
                    </div>
                  </div>
                </button>

                <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                  <div>
                    <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/55">
                      Case 0{index + 1}
                    </div>

                    <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-sm font-medium text-blue-400">
                      {project.type}
                    </p>
                  </div>

                  <div>
                    <p className="text-base leading-7 text-white/55">
                      {project.description}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {project.highlights.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65 transition-colors duration-500 hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-black/30 p-6">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                    Mobile preview
                  </p>

                  <p className="mt-4 text-base leading-7 text-white/55">
                    Elke website wordt responsive opgebouwd, zodat de ervaring
                    ook op mobiel professioneel en overtuigend blijft.
                  </p>
                </div>

                <div className="mx-auto w-full max-w-[220px] rounded-[2rem] border border-white/15 bg-[#080808] p-3 shadow-2xl">
                  <div className="h-[350px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    >
                      <source src={project.mobileVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>

                <a
                  href="/website-builder"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition-colors duration-500 hover:bg-white hover:text-black"
                >
                  Ik wil ook zo’n website
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:p-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Website laten maken
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Waarom een professionele website belangrijk is.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/60">
              Een{" "}
              <a
                href="/website-builder"
                className="text-white underline decoration-blue-400/40 underline-offset-4 transition-colors duration-500 hover:text-blue-300"
              >
                professionele website
              </a>{" "}
              helpt ondernemers vertrouwen op te bouwen, beter gevonden te
              worden in Google en meer aanvragen te ontvangen. De voorbeelden
              hierboven laten zien hoe premium design, responsive ervaring,
              snelheid en conversiegerichte structuur samenkomen.
            </p>

            <p className="mt-5 text-base leading-8 text-white/60">
              Wil je zelf een{" "}
              <a
                href="/website-builder"
                className="text-white underline decoration-blue-400/40 underline-offset-4 transition-colors duration-500 hover:text-blue-300"
              >
                website laten maken
              </a>{" "}
              die professioneel oogt en bezoekers richting actie stuurt? Bekijk
              dan onze{" "}
              <a
                href="/#prijzen"
                className="text-white underline decoration-blue-400/40 underline-offset-4 transition-colors duration-500 hover:text-blue-300"
              >
                website pakketten
              </a>{" "}
              of stel direct jouw website samen.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/website-builder"
                className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-colors duration-500 hover:bg-blue-400 hover:text-black"
              >
                Website offerte samenstellen
              </a>

              <a
                href="/#prijzen"
                className="rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition-colors duration-500 hover:border-white hover:bg-white hover:text-black"
              >
                Website pakketten bekijken
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/50">
              <span>Gerelateerde pagina&apos;s:</span>

              <a
                href="/website-builder"
                className="text-white/70 transition-colors duration-500 hover:text-blue-300"
              >
                Website builder
              </a>

              <span className="text-white/25">•</span>

              <a
                href="/#prijzen"
                className="text-white/70 transition-colors duration-500 hover:text-blue-300"
              >
                Website pakketten
              </a>

              <span className="text-white/25">•</span>

              <a
                href="/#contact"
                className="text-white/70 transition-colors duration-500 hover:text-blue-300"
              >
                Contact opnemen
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                question: "Wat kost een professionele website?",
                answer:
                  "Bij YousWeb starten websites vanaf €749. De uiteindelijke prijs hangt af van het pakket, het aantal pagina’s, extra functies en de gewenste uitstraling.",
              },
              {
                question: "Hoe lang duurt het om een website te laten maken?",
                answer:
                  "Een basiswebsite kan vaak relatief snel worden opgebouwd. Grotere websites met meerdere pagina’s, extra content en premium afwerking vragen meer voorbereiding en afstemming.",
              },
              {
                question: "Is SEO inbegrepen bij de website?",
                answer:
                  "Ja. Elke website krijgt een sterke SEO-basis met nette structuur, headings, interne links, snelle laadtijd en responsive opbouw. Extra SEO-landingspagina’s kunnen later worden toegevoegd.",
              },
              {
                question: "Werkt mijn website goed op mobiel?",
                answer:
                  "Ja. Elke website wordt responsive gebouwd, zodat desktop, tablet en mobiel professioneel aanvoelen en bezoekers eenvoudig contact kunnen opnemen.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-white/10 bg-black/25 p-5 transition-colors duration-500 hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em]">
                  {item.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808] p-3"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute right-5 top-5 z-10 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
              >
                Sluiten
              </button>

              <div className="aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="h-full w-full object-contain"
                >
                  <source src={activeVideo} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
