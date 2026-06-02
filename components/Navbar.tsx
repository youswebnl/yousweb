"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6"
    >
      <motion.div
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="text-lg font-semibold tracking-tight"
      >
        Yous<span className="text-blue-400">Web</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/70 backdrop-blur-xl md:flex"
      >
        <a href="/portfolio-websites" className="transition hover:-translate-y-0.5 hover:text-white">
          Portfolio
        </a>

        <a href="/website-laten-maken" className="transition hover:-translate-y-0.5 hover:text-white">
          Website laten maken
        </a>

        <a href="#prijzen" className="transition hover:-translate-y-0.5 hover:text-white">
          Pakketten
        </a>

        <a href="#faq" className="transition hover:-translate-y-0.5 hover:text-white">
          FAQ
        </a>
      </motion.div>

      <motion.a
        href="/website-builder"
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:-translate-y-0.5 hover:bg-white hover:text-black"
      >
        Stel jouw website samen
      </motion.a>
    </motion.nav>
  );
}