export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-16 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 backdrop-blur-xl">
        <div className="h-2 w-2 rounded-full bg-blue-400" />
        Premium websites voor moderne ondernemers
      </div>

      <h1 className="mt-10 max-w-5xl text-5xl font-semibold leading-none tracking-[-0.06em] md:text-7xl lg:text-[96px]">
        High-end websites die professioneel ogen, converteren en groeien.
      </h1>

      <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
        Moderne websites met premium uitstraling, sterke structuur en slimme UX
        voor ondernemers die online serieus willen groeien.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="/website-builder"
          className="rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
        >
          Stel jouw website samen
        </a>

        <a
          href="#werk"
          className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
        >
          Bekijk portfolio
        </a>
      </div>

      <div className="mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-white/40">Responsive</p>

          <h3 className="mt-3 text-xl font-semibold">
            Perfect op elk scherm
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/50">
            Elke website wordt premium opgebouwd voor desktop, tablet en mobiel.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-blue-300/70">SEO Focused</p>

          <h3 className="mt-3 text-xl font-semibold">
            Gebouwd voor zichtbaarheid
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/50">
            Slimme structuur en performance voor een sterke online basis.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-xl">
          <p className="text-sm text-white/40">Agency Level</p>

          <h3 className="mt-3 text-xl font-semibold">
            Premium uitstraling
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/50">
            Moderne visuals, luxe spacing en sterke gebruikerservaring.
          </p>
        </div>
      </div>
    </section>
  );
}