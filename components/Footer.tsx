export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Yous<span className="text-blue-400">Web</span>
          </h3>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
            Premium websites voor ondernemers die online professioneel willen groeien
            met sterke UX, responsive design en moderne uitstraling.
          </p>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/35">
            Navigatie
          </p>

          <div className="flex flex-col gap-4 text-sm text-white/60">
            <a href="#" className="transition hover:text-white">
              Home
            </a>

<a href="/website-laten-maken" className="transition hover:text-white">
  Website laten maken
</a>


            <a href="#prijzen" className="transition hover:text-white">
              Website pakketten
            </a>

            <a href="/portfolio-websites" className="transition hover:text-white">
  Portfolio websites
</a>

            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/35">
            Socials
          </p>

          <div className="flex flex-col gap-4 text-sm text-white/60">
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>

            <a href="#" className="transition hover:text-white">
              Twitter / X
            </a>

            <a href="#" className="transition hover:text-white">
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 YousWeb. All rights reserved.</p>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            <p>KvK nummer volgt</p>

            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}