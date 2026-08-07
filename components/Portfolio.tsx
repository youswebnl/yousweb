"use client";

import { motion } from "framer-motion";

const desktopFeatures = [
  "Websitepakket kiezen",
  "Aanvraag versturen",
  "Persoonlijk adviesgesprek",
  "Ontwikkeling & oplevering",
];

const mobileSteps = [
  "Websitepakket kiezen",
  "Aanvraag versturen",
  "Persoonlijk adviesgesprek",
  "Ontwikkeling & oplevering",
];

const videoEmbed =
  "https://player.mediadelivery.net/embed/722358/b2057fc1-279d-4333-b5ef-c7135ff8b85d?autoplay=true&loop=true&muted=true&preload=true&responsive=true";

export default function Portfolio() {
  return (
    <section
      id="werk"
      className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 max-w-3xl lg:mb-14"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Website laten maken proces
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          YousWeb laat precies zien wat klanten straks ook krijgen.
        </h2>

        <p className="mt-6 text-base leading-7 text-white/55 md:text-lg">
          Bekijk hoe een websiteproject bij YousWeb verloopt: van pakketkeuze en
          aanvraag tot persoonlijk contact, ontwikkeling en oplevering.
        </p>
      </motion.div>

      {/* Mobile showcase */}
      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl lg:hidden"
      >
        <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-blue-200">
          Live demo
        </div>

        <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">
          Hoe werkt een website laten maken bij YousWeb?
        </h3>

        <p className="mt-4 text-base leading-7 text-white/55">
          Bekijk hoe je eenvoudig jouw website samenstelt en een professionele
          aanvraag verstuurt.
        </p>

        <div className="mt-8 rounded-[2rem] border border-white/15 bg-[#080808] p-3 shadow-2xl">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <div className="relative aspect-video w-full">
              <iframe
                src={videoEmbed}
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-white/35">
            In deze demo
          </p>

          <div className="grid gap-3">
            {mobileSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{
                  duration: 0.65,
                  delay: 0.12 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-medium text-white/75"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-xs font-semibold text-blue-300">
                  {index + 1}
                </span>
                {step}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Desktop showcase */}
      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="group hidden overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] lg:block"
      >
        <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0B] p-4"
          >
            <div className="relative flex h-full min-h-[490px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-black transition duration-500 group-hover:border-blue-400/20">
              <iframe
                src={videoEmbed}
                loading="lazy"
                className="h-full w-full border-0"
                allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-black/30 p-6"
          >
            <div>
              <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-200">
                Live case study
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                Hoe werkt een website laten maken bij YousWeb?
              </h3>

              <p className="mt-5 text-base leading-7 text-white/55">
                Bekijk hoe je eenvoudig jouw website samenstelt en een
                professionele aanvraag verstuurt.
              </p>
            </div>

            <div className="grid gap-3">
              {desktopFeatures.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.45 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.25 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65 transition hover:border-blue-400/20 hover:bg-blue-400/[0.04]"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-400/[0.06] p-5">
              <p className="text-sm font-medium text-blue-200">
                Van aanvraag naar projectstart
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Na jouw aanvraag nemen we persoonlijk contact op om jouw wensen,
                planning en definitieve prijs te bespreken.
              </p>
            </div>

            <div className="grid gap-3">
              <a
                href="/website-builder"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
              >
                Stel jouw website samen
              </a>

              <a
                href="/portfolio-websites"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white hover:text-black"
              >
                Bekijk portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
