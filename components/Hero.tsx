"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "Responsive",
    title: "Perfect op elk scherm",
    text: "Elke website wordt premium opgebouwd voor desktop, tablet en mobiel.",
  },
  {
    label: "SEO Focused",
    title: "Gebouwd voor zichtbaarheid",
    text: "Slimme structuur en performance voor een sterke online basis.",
    featured: true,
  },
  {
    label: "Agency Level",
    title: "Premium uitstraling",
    text: "Moderne visuals, luxe spacing en sterke gebruikerservaring.",
  },
];

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 backdrop-blur-xl"
      >
        <motion.div
          animate={{ scale: [1, 1.35, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-blue-400"
        />
        Premium websites voor moderne ondernemers
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 max-w-5xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl lg:text-[96px]"
      >
        High-end websites die professioneel ogen, converteren en groeien.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
      >
        Moderne websites met premium uitstraling, sterke structuur en slimme UX
        voor ondernemers die online serieus willen groeien.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="/website-builder"
          className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.04] hover:bg-white/90"
        >
          Stel jouw website samen
        </a>

        <a
          href="#werk"
          className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.04] hover:bg-white/10"
        >
          Bekijk portfolio
        </a>
      </motion.div>

      <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 1.15,
              delay: index * 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`rounded-3xl border p-6 text-left backdrop-blur-xl transition duration-1500 hover:-translate-y-2 hover:scale-[1.02] ${
              card.featured
                ? "border-blue-500/25 bg-blue-500/[0.06] shadow-[0_0_70px_rgba(59,130,246,0.08)]"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
            }`}
          >
            <p
              className={`text-sm ${
                card.featured ? "text-blue-300/70" : "text-white/40"
              }`}
            >
              {card.label}
            </p>

            <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>

            <p className="mt-3 text-sm leading-7 text-white/50">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}