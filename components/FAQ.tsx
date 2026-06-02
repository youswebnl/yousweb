export default function FAQ() {
  return (
    <section id="faq" className="relative z-10 mx-auto max-w-5xl px-6 py-28">
      <div className="mb-12 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Veelgestelde vragen
        </p>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
          Twijfels wegnemen voordat iemand contact opneemt.
        </h2>
      </div>

      <div className="space-y-4">
        {[
          {
            question: "Is mijn website ook goed op mobiel?",
            answer:
              "Ja. Elke website wordt responsive gebouwd, zodat desktop en mobiel allebei professioneel aanvoelen.",
          },
          {
            question: "Zit SEO inbegrepen?",
            answer:
              "Ja. We bouwen vanaf de basis met SEO-structuur, goede headings, snelle laadtijd en logische interne links.",
          },
          {
            question: "Hoe weet ik welk pakket ik nodig heb?",
            answer:
              "Starter is voor snelle zichtbaarheid, Growth voor groei en Agency Level voor een premium merkervaring.",
          },
          {
            question: "Kan mijn website later uitgebreid worden?",
            answer:
              "Ja. De website wordt schaalbaar opgebouwd, zodat nieuwe pagina’s, cases, video’s en SEO-content later toegevoegd kunnen worden.",
          },
        ].map((item) => (
          <details
            key={item.question}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.05]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold tracking-[-0.02em]">
              {item.question}

              <span className="text-2xl text-blue-400 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/55">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}