"use client";

import { motion } from "framer-motion";

const features = [
  "Premium homepage structuur",
  "Website pakketten en prijsrichting",
  "Offerte builder flow",
  "Contact via WhatsApp en e-mail",
];

export default function Portfolio() {
  return (
    <section id="werk" className="relative z-10 mx-auto max-w-7xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-3xl"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Flagship case
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          YousWeb laat precies zien wat klanten straks ook krijgen.
        </h2>

        <p className="mt-6 text-base leading-7 text-white/55 md:text-lg">
          Deze website is gebouwd als live voorbeeld van premium design,
          duidelijke pakketten, een offerte builder en een professionele
          aanvraagflow.
        </p>
      </motion.div>

      <motion.a
        href="/portfolio-websites"
        initial={{ opacity: 0, y: 44, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="group block overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] md:p-7"
      >
        <div className="grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0B] p-4 md:min-h-[520px]"
          >
            <motion.div
              animate={{
                opacity: [0.75, 1, 0.75],
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]"
            />

            <div className="relative flex h-full min-h-[330px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/45 text-center transition duration-500 group-hover:border-blue-400/20 md:min-h-[490px]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                  Desktop preview
                </p>

                <p className="mt-3 text-3xl font-semibold text-white/85">
                  YousWeb website video
                </p>

                <p className="mt-4 text-sm text-white/40">
                  Later: yousweb-desktop-preview.mp4
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-black/30 p-6"
          >
            <div>
              <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-200">
                Live case study
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                Van premium website naar offerte-aanvraag
              </h3>

              <p className="mt-5 text-base leading-7 text-white/55">
                Bezoekers zien niet alleen een mooie website, maar ook hoe ze
                pakketten vergelijken, extra opties kiezen en hun aanvraag
                kunnen verzenden.
              </p>
            </div>

            <div className="grid gap-3">
              {features.map((item, index) => (
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

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto w-full max-w-[210px] rounded-[2rem] border border-white/15 bg-[#080808] p-3 shadow-2xl"
            >
              <div className="flex h-[330px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.03] text-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                    Mobile
                  </p>

                  <p className="mt-3 text-sm text-white/60">
                    Responsive preview
                  </p>

                  <p className="mt-3 px-4 text-xs leading-5 text-white/35">
                    yousweb-mobile-preview.mp4
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
}