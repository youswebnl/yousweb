"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Vanaf €749",
    tag: "Voor starters en zzp’ers die professioneel online zichtbaar willen zijn met een sterke one-page website.",
    direction: "left",
    features: [
      "One-page website",
      "Premium basisdesign",
      "Responsive voor mobiel en tablet",
      "Basis SEO-structuur",
      "Professionele aanvraagflow",
    ],
  },
  {
    name: "Growth",
    price: "Vanaf €1.250",
    tag: "Meest gekozen voor ondernemers die actief klanten willen aantrekken via Google.",
    featured: true,
    direction: "bottom",
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
    tag: "Voor bedrijven die serieus willen investeren in online groei, vertrouwen en schaalbaarheid.",
    direction: "right",
    features: [
      "Alles uit Growth",
      "Website tot 6 pagina’s",
      "Tot 5 SEO-landingspagina’s",
      "Premium animaties op volledige website",
      "Strategische conversieflow",
    ],
  },
];

function getInitial(direction: string) {
  if (direction === "left") return { opacity: 0, x: -46, y: 18, scale: 0.97 };
  if (direction === "right") return { opacity: 0, x: 46, y: 18, scale: 0.97 };
  return { opacity: 0, x: 0, y: 52, scale: 0.96 };
}

export default function Pricing() {
  return (
    <section
      id="prijzen"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 max-w-3xl"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Website pakketten
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Kies het pakket dat past bij jouw fase, ambitie en groeidoel.
        </h2>

        <p className="mt-6 text-base leading-7 text-white/55 md:text-lg">
          Van een professionele one-page website tot een complete agency-level
          website met SEO-landingspagina’s, premium animaties en sterke
          conversiestructuur.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={getInitial(plan.direction)}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: plan.featured ? 1.05 : 0.95,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition-colors duration-500 hover:-translate-y-2 hover:scale-[1.015] ${
              plan.featured
                ? "border-blue-400/40 bg-blue-400/[0.08] shadow-[0_0_90px_rgba(59,130,246,0.18)]"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
            }`}
          >
            {plan.featured && (
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)]"
              />
            )}

            <div className="relative">
              {plan.featured && (
                <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-medium text-blue-200">
                  Meest gekozen
                </div>
              )}

              <h3 className="text-3xl font-semibold tracking-[-0.03em]">
                {plan.name}
              </h3>

              <p className="mt-4 text-2xl font-semibold text-white">
                {plan.price}
              </p>

              <p className="mt-4 min-h-[56px] text-sm leading-6 text-white/55">
                {plan.tag}
              </p>

              <div className="my-7 h-px bg-white/10" />

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.45 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25 + featureIndex * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex gap-3 text-sm text-white/65"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="/website-builder"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition duration-300 ${
                  plan.featured
                    ? "bg-white text-black hover:scale-[1.03] hover:bg-white/90"
                    : "border border-white/15 text-white hover:scale-[1.03] hover:bg-white hover:text-black"
                }`}
              >
                Stel jouw website samen
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-10 max-w-2xl text-center text-sm leading-7 text-white/50"
      >
        Twijfel je tussen Growth en Agency Level?{" "}
        <Link
          href="/seo-landingspaginas"
          className="font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200"
        >
          Ontdek hoe SEO-landingspagina’s helpen bij betere vindbaarheid in
          Google
        </Link>
        .
      </motion.p>
    </section>
  );
}
