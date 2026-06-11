"use client";

import { useRef, useState } from "react";
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

const mobileReasons = [
  {
    title: "Echte praktijkervaring",
    text: "YousWeb is gebouwd vanuit echte projecten, duidelijke structuur en ervaring met wat ondernemers online nodig hebben.",
    linkText: "Bekijk portfolio",
    linkHref: "/portfolio-websites",
  },
  {
    title: "Persoonlijke samenwerking",
    text: "Je werkt direct samen met de maker van jouw website. Geen tussenpersonen, maar korte lijnen en duidelijke communicatie.",
  },
  {
    title: "Gericht op aanvragen",
    text: "Design, teksten, interne links en call-to-actions worden opgebouwd om bezoekers richting vertrouwen en contact te sturen.",
    linkText: "Stel jouw website samen",
    linkHref: "/website-builder",
  },
];

export default function WhyYousWeb() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToCard(index: number) {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[index] as HTMLElement | undefined;
    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft - 24,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }

  function handleScroll() {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children) as HTMLElement[];

    const closestIndex = cards.reduce((closest, card, index) => {
      const cardDistance = Math.abs(card.offsetLeft - slider.scrollLeft - 24);
      const closestCard = cards[closest];
      const closestDistance = Math.abs(
        closestCard.offsetLeft - slider.scrollLeft - 24
      );

      return cardDistance < closestDistance ? index : closest;
    }, 0);

    setActiveIndex(closestIndex);
  }

  return (
    <section
      id="waarom-yousweb"
      className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 max-w-3xl md:mb-14"
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

      {/* Mobile premium swipe cards */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="-mx-6 overflow-hidden"
        >
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3"
          >
            {mobileReasons.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative min-h-[420px] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 ring-1 ring-blue-400/25">
                    <span className="text-sm font-semibold text-blue-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-white/55">
                    {item.text}
                  </p>

                  {item.linkText && item.linkHref && (
                    <a
                      href={item.linkHref}
                      className="mt-auto inline-flex pt-8 text-sm font-semibold text-blue-300 underline-offset-4 transition hover:text-blue-200 hover:underline"
                    >
                      {item.linkText} →
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2">
            {mobileReasons.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Ga naar kaart ${index + 1}`}
                onClick={() => scrollToCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-blue-400"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Vorige kaart"
              onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-blue-400/30 hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Volgende kaart"
              onClick={() =>
                scrollToCard(Math.min(activeIndex + 1, mobileReasons.length - 1))
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-blue-400/30 hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Desktop grid stays the same */}
      <div className="hidden gap-5 md:grid md:grid-cols-2">
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