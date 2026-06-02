export default function WhyYousWeb() {
  return (
    <section
      id="waarom-yousweb"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-14 max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Waarom YousWeb
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Niet alleen een mooie website, maar een digitale ervaring die vertrouwen wekt.
        </h2>

        <p className="mt-6 text-base leading-7 text-white/55 md:text-lg">
          Elke keuze in design, structuur en tekst heeft een doel: bezoekers sneller
          laten begrijpen wie je bent, wat je aanbiedt en waarom ze contact moeten opnemen.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {[
          {
            title: "Strategie vóór design",
            text: "We starten niet met kleuren, maar met positionering, doelgroep en conversiedoel.",
          },
          {
            title: "Responsive websites",
            text: "Je website voelt premium op desktop én mobiel, zonder losse of rommelige ervaring.",
          },
          {
            title: "SEO vanaf de basis",
            text: "Structuur, headings, interne links en content worden vanaf het begin slim opgebouwd.",
          },
          {
            title: "Conversiegericht ontwerp",
            text: "Elke sectie helpt bezoekers richting vertrouwen, actie en uiteindelijk een aanvraag.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.05]"
          >
            <div className="mb-8 h-10 w-10 rounded-2xl bg-blue-400/10 ring-1 ring-blue-400/20 transition group-hover:bg-blue-400/20" />

            <h3 className="text-2xl font-semibold tracking-[-0.03em]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}