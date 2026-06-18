"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const linkClass =
  "font-medium text-blue-300 underline underline-offset-4 transition hover:text-blue-200";

const faqs = [
  {
    question: "Wordt mijn website ook professioneel op mobiel?",
    answer: (
      <>
        Ja. Elke website wordt responsive gebouwd, zodat desktop, tablet en
        mobiel strak, snel en professioneel aanvoelen.
      </>
    ),
  },
  {
    question: "Is SEO inbegrepen bij de website?",
    answer: (
      <>
        Ja. Elke website krijgt een sterke SEO-basis met logische headings,
        snelle laadtijd, nette structuur en interne links. Bij Growth en Agency
        Level is er extra ruimte voor{" "}
        <Link href="/seo-landingspaginas" className={linkClass}>
          SEO-landingspagina’s
        </Link>{" "}
        en lokale vindbaarheid.
      </>
    ),
  },
  {
    question: "Welk websitepakket past het beste bij mijn bedrijf?",
    answer: (
      <>
        Starter past bij een professionele one-page website. Growth is sterker
        wanneer je actief klanten wilt aantrekken via Google. Agency Level past
        bij bedrijven die willen investeren in premium uitstraling, groei en
        schaalbaarheid. Bekijk ook waarom wij vaak kiezen voor een{" "}
        <Link href="/nextjs-website-laten-maken" className={linkClass}>
          Next.js website laten maken
        </Link>
        .
      </>
    ),
  },
  {
    question: "Waarom is een website met meerdere pagina’s beter voor SEO?",
    answer: (
      <>
        Google begrijpt aparte, gerichte pagina’s vaak beter dan één lange
        pagina. Daardoor kun je gevonden worden op meerdere zoektermen, diensten
        of regio’s. Lees hoe dit werkt met{" "}
        <Link href="/seo-landingspaginas" className={linkClass}>
          SEO-landingspagina’s voor betere vindbaarheid
        </Link>
        .
      </>
    ),
  },
  {
    question: "Kan mijn website later meegroeien?",
    answer: (
      <>
        Ja. De website wordt schaalbaar opgebouwd, zodat extra pagina’s, cases,
        video’s, SEO-content, functies en landingspagina’s later toegevoegd
        kunnen worden. Dat is één van de voordelen van een{" "}
        <Link href="/nextjs-website-laten-maken" className={linkClass}>
          moderne Next.js website
        </Link>
        .
      </>
    ),
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
                    <div className="max-w-3xl px-6 pb-6 text-base leading-7 text-white/55">
                      {item.answer}
                    </div>
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
