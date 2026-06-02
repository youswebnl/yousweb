"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Gebouwd op echte praktijkervaring",
    text: "YousWeb is niet alleen een concept. Er zijn al echte websites gebouwd voor ondernemers, waardoor de aanpak is gebaseerd op praktijk, gebruikservaring en duidelijke online positionering.",
    linkText: "Bekijk portfolio websites",
    linkHref: "/portfolio-websites",
  },
  {
    title: "Persoonlijke samenwerking",
    text: "Je werkt direct samen met de maker van jouw website. Geen tussenpersonen, geen onduidelijk proces en geen standaard oplossing, maar korte lijnen en duidelijke communicatie.",
  },
  {
    title: "Premium kwaliteit zonder agency-overhead",
    text: "Je krijgt een moderne website met sterke UX, responsive design, snelle structuur en premium uitstraling, zonder de hoge kosten van een groot bureau.",
    linkText: "Vergelijk website pakketten",
    linkHref: "#prijzen",
  },
  {
    title: "Gericht op aanvragen en groei",
    text: "Een website moet niet alleen mooi zijn. De structuur, teksten, interne links en call-to-actions worden gebouwd om bezoekers richting vertrouwen, contact en offerte-aanvraag te sturen.",
    linkText: "Stel jouw website samen",
    linkHref: "/website-builder",
  },
];

export default function WhyYousWeb() {
  return (
    <section
      id="waarom-yousweb"
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
          Waarom YousWeb
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Waarom ondernemers kiezen voor een website die vertrouwen wekt en
          aanvragen oplevert.
        </h2>

        <p className="mt-6 text-base leading-7 text-white/55 md:text-lg">
          Een professionele website laten maken gaat verder dan alleen mooi
          design. YousWeb combineert premium uitstraling, responsive webdesign,
          slimme SEO-structuur en een conversiegerichte aanvraagflow.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {reasons.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: index * 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.05]"
          >
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

            <div className="relative">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-400/10 ring-1 ring-blue-400/20 transition duration-500 group-hover:bg-blue-400/20 group-hover:ring-blue-400/35">
                <span className="text-sm font-semibold text-blue-300">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
                {item.text}
              </p>

              {item.linkText && item.linkHref && (
                <a
                  href={item.linkHref}
                  className="mt-6 inline-flex text-sm font-semibold text-blue-300 underline-offset-4 transition hover:text-blue-200 hover:underline"
                >
                  {item.linkText} →
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}