const projects = [
  {
    title: "Project 01",
    type: "Premium business website",
    description:
      "Een moderne website met sterke uitstraling, duidelijke structuur en een professionele eerste indruk.",
    desktopVideo: "project-1-desktop.mp4",
    mobileVideo: "project-1-mobile.mp4",
  },
  {
    title: "Project 02",
    type: "Conversion focused website",
    description:
      "Een responsive website met focus op vertrouwen, overzicht en bezoekers richting actie sturen.",
    desktopVideo: "project-2-desktop.mp4",
    mobileVideo: "project-2-mobile.mp4",
  },
  {
    title: "YousWeb",
    type: "Live agency case study",
    description:
      "Deze website zelf: gebouwd als high-end voorbeeld van premium design, SEO-structuur en offerteflow.",
    desktopVideo: "yousweb-desktop-preview.mp4",
    mobileVideo: "yousweb-mobile-preview.mp4",
  },
];

export default function PortfolioWebsitesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[150px]" />

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </a>

        <a
          href="/#contact"
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white hover:text-black"
        >
          Start project
        </a>
      </nav>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Portfolio websites
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Geselecteerde websites met premium uitstraling en duidelijke structuur.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Bekijk projecten waarin design, responsive ervaring en conversiegerichte
            opbouw samenkomen. Elke case laat zien hoe een professionele website
            vertrouwen kan opbouwen.
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 pb-28">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:p-7"
          >
            <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0B] p-4 md:min-h-[500px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]" />

                <div className="relative flex h-full min-h-[290px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/45 text-center md:min-h-[470px]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-white/35">
                      Desktop preview
                    </p>

                    <p className="mt-3 text-2xl font-semibold text-white/85">
                      {project.desktopVideo}
                    </p>

                    <p className="mt-4 text-sm text-white/40">
                      Video wordt later toegevoegd
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-black/30 p-6">
                <div>
                  <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/55">
                    Case 0{index + 1}
                  </div>

                  <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm font-medium text-blue-400">
                    {project.type}
                  </p>

                  <p className="mt-5 text-base leading-7 text-white/55">
                    {project.description}
                  </p>
                </div>

                <div className="mx-auto w-full max-w-[210px] rounded-[2rem] border border-white/15 bg-[#080808] p-3 shadow-2xl">
                  <div className="flex h-[330px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/[0.03] text-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                        Mobile preview
                      </p>

                      <p className="mt-3 px-4 text-sm leading-6 text-white/60">
                        {project.mobileVideo}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Ik wil ook zo’n website
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}