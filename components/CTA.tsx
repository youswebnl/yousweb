export default function CTA() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-16 text-center backdrop-blur-xl md:px-12 md:py-24">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[130px]" />

        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Start jouw project
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Klaar voor een website die premium voelt en klanten overtuigt?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Kies jouw pakket, voeg extra opties toe en verzend jouw aanvraag.
            Daarna ontvang je persoonlijk contact over jouw websiteproject.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/website-builder"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-white/90"
            >
              Stel jouw website samen
            </a>

            <a
              href="mailto:info@yousweb.nl"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10"
            >
              Mail direct
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-left md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-white/40">Aanvraag</p>

              <p className="mt-2 text-base font-medium text-white">
                Offerte builder
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-white/40">Betaling</p>

              <p className="mt-2 text-base font-medium text-white">
                50% aanbetaling
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-white/40">Contact</p>

              <p className="mt-2 text-base font-medium text-white">
                WhatsApp + e-mail
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}