"use client";

import { motion } from "framer-motion";

const items = [
  {
    label: "Aanvraag",
    value: "Offerte builder",
  },
  {
    label: "Betaling",
    value: "50% aanbetaling",
  },
  {
    label: "Contact",
    value: "WhatsApp + e-mail",
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-14 text-center backdrop-blur-xl transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.045] md:rounded-[2.5rem] md:px-12 md:py-24"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.65, 0.95, 0.65],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[110px] md:h-[420px] md:w-[420px] md:blur-[130px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="absolute bottom-0 right-0 h-[240px] w-[240px] rounded-full bg-purple-500/10 blur-[100px] md:h-[320px] md:w-[320px] md:blur-[120px]"
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400"
          >
            Start jouw project
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl lg:text-7xl"
          >
            Klaar voor een website die premium voelt en klanten overtuigt?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:mt-7 md:text-lg"
          >
            Kies jouw pakket, voeg extra opties toe en verzend jouw aanvraag.
            Daarna ontvang je persoonlijk contact over jouw websiteproject.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:mt-10"
          >
            <a
              href="/website-builder"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.04] hover:bg-white/90"
            >
              Stel jouw website samen
            </a>

            <a
              href="mailto:info@yousweb.nl"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-[1.04] hover:bg-white/10"
            >
              Mail direct
            </a>
          </motion.div>

          <div className="mt-12 hidden gap-4 text-left md:grid md:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-3xl border border-white/10 bg-black/25 p-5 transition-colors duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
              >
                <p className="text-sm text-white/40">{item.label}</p>

                <p className="mt-2 text-base font-medium text-white">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}