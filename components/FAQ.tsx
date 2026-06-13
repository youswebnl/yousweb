"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Wordt mijn website ook professioneel op mobiel?",
    answer:
      "Ja. Elke website wordt responsive gebouwd, zodat desktop, tablet en mobiel allemaal strak, snel en professioneel aanvoelen.",
  },
  {
    question: "Is SEO inbegrepen bij de website?",
    answer:
      "Ja. De basis wordt direct goed opgebouwd met logische headings, snelle laadtijd, nette structuur en interne links. Bij Growth en Agency Level is er meer ruimte voor SEO-landingspagina’s en lokale vindbaarheid.",
  },
  {
    question: "Welk websitepakket past het beste bij mijn bedrijf?",
    answer:
      "Starter is geschikt voor starters, zzp’ers en ondernemers die professioneel online zichtbaar willen worden met een one-page website. Growth is geschikt voor ondernemers die actief klanten willen aantrekken via Google, met meerdere pagina’s en ruimte voor maximaal 2 SEO-landingspagina’s. Agency Level is geschikt voor bedrijven die serieus willen investeren in online groei, met een uitgebreidere structuur en ruimte voor maximaal 5 SEO-landingspagina’s.",
  },
  {
    question: "Waarom is een website met meerdere pagina’s beter voor SEO?",
    answer:
      "Zoekmachines begrijpen een website beter wanneer belangrijke onderwerpen verdeeld zijn over meerdere pagina’s. Een one-page website is sneller en voordeliger, maar biedt minder ruimte om gevonden te worden op verschillende zoektermen. Daarom biedt een website met meerdere pagina’s vaak meer mogelijkheden voor SEO, lokale vindbaarheid en toekomstige groei.",
  },
  {
    question: "Kan mijn website later meegroeien?",
    answer:
      "Ja. De website wordt schaalbaar opgebouwd, zodat extra pagina’s, cases, video’s, SEO-content, nieuwe functies en extra landingspagina’s later toegevoegd kunnen worden.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Veelgestelde vragen
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Twijfels wegnemen voordat iemand contact opneemt.
        </h2>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`overflow-hidden rounded-3xl border backdrop-blur-xl transition duration-500 ${
                isOpen
                  ? "border-blue-400/30 bg-blue-400/[0.05]"
                  : "border-white/10 bg-white/[0.03] hover:border-blue-400/25 hover:bg-white/[0.05]"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-6 text-left text-lg font-semibold tracking-[-0.02em]"
              >
                <span>{item.question}</span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-2xl text-blue-400"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <p className="max-w-3xl px-6 pb-6 text-base leading-7 text-white/55">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}