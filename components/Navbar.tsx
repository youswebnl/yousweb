export default function Navbar() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="text-lg font-semibold tracking-tight">
        Yous<span className="text-blue-400">Web</span>
      </div>

      <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/70 backdrop-blur-xl md:flex">
       <a href="/portfolio-websites" className="transition hover:text-white">
  Portfolio
</a>

<a href="/website-laten-maken" className="transition hover:text-white">
  Website laten maken
</a>



        <a href="#prijzen" className="transition hover:text-white">Pakketten</a>
        <a href="#faq" className="transition hover:text-white">FAQ</a>
        <a href="#/website-builder" className="transition hover:text-white">Stel jouw website samen</a>
      </div>

      <a
        href="/website-builder"
        className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
      >
        Stel jouw website samen
      </a>
    </nav>
  );
}