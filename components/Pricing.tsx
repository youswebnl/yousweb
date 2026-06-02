export default function Pricing() {
  return (
    <section
      id="prijzen"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Website pakketten
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Kies het pakket dat past bij jouw fase, ambitie en groeidoel.
        </h2>

        <p className="mt-6 text-base leading-7 text-white/55 md:text-lg">
          Van een professionele basiswebsite tot een complete agency-level website
          met premium uitstraling, sterke structuur en SEO-fundament.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            name: "Starter",
            price: "Vanaf €749",
            tag: "Voor snelle professionele online zichtbaarheid",
            features: [
              "Responsive website",
              "Premium basisdesign",
              "Basis SEO-structuur",
              "Professionele aanvraagflow",
              "Snelle laadtijd",
            ],
          },
          {
            name: "Growth",
            price: "Vanaf €1.250",
            tag: "Meest gekozen voor ondernemers die willen groeien",
            featured: true,
            features: [
              "Alles uit Starter",
              "Sterkere UX/UI structuur",
              "Portfolio of diensten secties",
              "Conversiegerichte opbouw",
              "Betere SEO basis",
            ],
          },
          {
            name: "Agency Level",
            price: "Vanaf €2.250",
            tag: "Voor premium uitstraling en maximale positionering",
            features: [
              "Custom high-end design",
              "Advanced responsive experience",
              "SEO-first pagina structuur",
              "Premium animations",
              "Strategische conversieflow",
            ],
          },
        ].map((plan) => (
          <article
            key={plan.name}
            className={`relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition ${
              plan.featured
                ? "border-blue-400/40 bg-blue-400/[0.08] shadow-[0_0_80px_rgba(59,130,246,0.15)]"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
            }`}
          >
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
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-white/65">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/website-builder"
              className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold transition ${
                plan.featured
                  ? "bg-white text-black hover:scale-[1.02]"
                  : "border border-white/15 text-white hover:bg-white hover:text-black"
              }`}
            >
              Stel jouw website samen
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}