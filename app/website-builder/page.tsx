"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const packages = [
  { name: "Starter", price: 749, pages: "One-page website", description: "Voor snelle professionele online zichtbaarheid." },
  { name: "Growth", price: 1250, pages: "Tot 3 pagina’s", description: "Voor ondernemers die willen groeien met betere structuur.", featured: true },
  { name: "Agency Level", price: 2250, pages: "Tot 6 pagina’s", description: "Voor premium positionering en maximale uitstraling." },
];

const extras = [
  { name: "SEO landingspagina", price: 150 },
  { name: "Premium animations", price: 175 },
  { name: "SEO uitbreiding", price: 250 },
  { name: "Meertalige website (NL / ENG)", price: 250 },
  { name: "Onderhoud pakket", price: 150 },
  { name: "Booking/contact systeem", price: 300 },
];

const steps = ["Pakket", "Extra’s", "Prijs", "Gegevens", "Verzenden"];






export default function WebsiteBuilderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactErrors, setShowContactErrors] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(packages[1]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

const [formData, setFormData] = useState({
  naam: "",
  bedrijf: "",
  email: "",
  telefoon: "",
  wensen: "",
});

const updateFormData = (field: string, value: string) => {
  setFormData((current) => ({
    ...current,
    [field]: value,
  }));
};


const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
const phoneIsValid =
  /^[0-9+\s()-]{10,15}$/.test(formData.telefoon);
const isContactStepValid =
  formData.naam.trim() !== "" &&
  emailIsValid &&
  phoneIsValid;

const canGoNext = currentStep !== 3 || isContactStepValid;
const fieldHasError = (field: string) => {
  if (!showContactErrors) return false;

  if (field === "naam") return formData.naam.trim() === "";
  if (field === "email") return !emailIsValid;
  if (field === "telefoon") return !phoneIsValid;

  return false;
};

const getFieldErrorMessage = (field: string) => {
  if (field === "naam") return "Vul je naam in.";
  if (field === "email") return "Vul een geldig e-mailadres in.";
  if (field === "telefoon") return "Vul een geldig telefoonnummer in.";

  return "";
};

  const totalPrice = useMemo(() => {
    const extrasTotal = extras
      .filter((extra) => selectedExtras.includes(extra.name))
      .reduce((sum, extra) => sum + extra.price, 0);

    return selectedPackage.price + extrasTotal;
  }, [selectedPackage, selectedExtras]);

  const toggleExtra = (name: string) => {
    setSelectedExtras((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

const nextStep = () => {
  if (currentStep === 3 && !isContactStepValid) {
    setShowContactErrors(true);
    return;
  }

  setShowContactErrors(false);
  setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
};

  const previousStep = () => setCurrentStep((step) => Math.max(step - 1, 0));
const submitApplication = async () => {
  setIsSubmitting(true);
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      naam: formData.naam,
      bedrijf: formData.bedrijf,
      email: formData.email,
      telefoon: formData.telefoon,
      wensen: formData.wensen,
      pakket: selectedPackage.name,
      paginas: selectedPackage.pages,
      extras: selectedExtras,
      prijs: totalPrice,
    }),
  });

if (response.ok) {
  setSubmitted(true);
} else {
  setIsSubmitting(false);
  alert("Er ging iets mis. Probeer opnieuw.");
}
};

if (submitted) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-2xl text-center">
        <div className="mb-6 text-6xl">✓</div>

        <h1 className="text-5xl font-semibold tracking-[-0.04em]">
          Aanvraag ontvangen
        </h1>

       <p className="mt-6 text-lg leading-8 text-white/60">
  Bedankt voor jouw aanvraag.

  <br />
  <br />

  We hebben jouw aanvraag succesvol ontvangen en nemen
  binnen 24 uur persoonlijk contact met je op.

  <br />
  <br />

  Controleer eventueel ook jouw spamfolder wanneer je
  geen reactie ziet.
</p>

<div className="mt-8 inline-flex rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-5 py-3 text-sm text-blue-200">
  Reactie binnen 24 uur
</div>

        <a
          href="/"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-[1.03]"
        >
          Terug naar homepage
        </a>
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-lg font-semibold tracking-tight">
          Yous<span className="text-blue-400">Web</span>
        </a>

        <a href="/website-laten-maken" className="text-sm text-white/60 hover:text-white">
          Terug naar website laten maken
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Offerte builder
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
            Stel jouw professionele website samen.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
            Kies een pakket, voeg extra opties toe en ontvang een duidelijke prijsindicatie.
          </p>
        </div>

        <div className="mb-10">
  <div className="mb-5 h-1 overflow-hidden rounded-full bg-white/10">
    <div
      className="h-full rounded-full bg-blue-400 transition-all duration-500"
      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
    />
  </div>

  <div className="grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => (
          <div
  key={step}
  className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                index === currentStep
  ? "border-blue-400/50 bg-blue-400/[0.08] text-white shadow-[0_0_30px_rgba(59,130,246,0.10)]"
                  :index < currentStep
  ? "border-blue-400/20 bg-blue-400/[0.04] text-white/65"
                  : "border-white/10 bg-white/[0.03] text-white/45"
              }`}
            >
              <p className="text-xs">Stap 0{index + 1}</p>
              <p className="mt-1 font-medium">{step}</p>
            </div>
          ))}
        </div>
</div>
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
       <motion.div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">


<AnimatePresence mode="wait">
  <motion.div
    key={currentStep}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.35 }}
  >

            {currentStep === 0 && (
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                  01. Kies jouw website pakket
                </h2>

                <div className="mt-7 grid gap-5 md:grid-cols-3">
                  {packages.map((pack) => {
                    const isSelected = selectedPackage.name === pack.name;

                    return (
                      <button
                        key={pack.name}
                        onClick={() => setSelectedPackage(pack)}
                        className={`rounded-[2rem] border p-6 text-left transition hover:scale-[1.02] ${
                          isSelected
                            ? "border-blue-400 bg-blue-400/[0.12] shadow-[0_0_70px_rgba(59,130,246,0.18)]"
                            : pack.featured
                            ? "border-blue-400/40 bg-blue-400/[0.08]"
                            : "border-white/10 bg-black/25 hover:border-white/20"
                        }`}
                      >
                        {pack.featured && (
                          <div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">
                            Meest gekozen
                          </div>
                        )}

                        <h3 className="text-2xl font-semibold">{pack.name}</h3>
                        <p className="mt-3 text-xl font-semibold">€{pack.price.toLocaleString("nl-NL")}</p>
                        <p className="mt-3 text-sm text-blue-300">{pack.pages}</p>
                        <p className="mt-4 text-sm leading-6 text-white/55">{pack.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                  02. Kies extra opties
                </h2>

                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  {extras.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.name);

                    return (
                      <button
                        key={extra.name}
                        onClick={() => toggleExtra(extra.name)}
                        className={`rounded-2xl border px-5 py-4 text-left text-sm transition ${
                          isSelected
                            ? "border-blue-400/50 bg-blue-400/[0.1] text-white"
                            : "border-white/10 bg-black/25 text-white/70 hover:border-blue-400/30 hover:bg-blue-400/[0.06]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span>{extra.name}</span>
                          <span className="text-blue-300">+ €{extra.price.toLocaleString("nl-NL")}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                  03. Bekijk jouw prijsindicatie
                </h2>

                <div className="mt-7 rounded-[2rem] border border-blue-400/30 bg-blue-400/[0.08] p-8">
                  <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Totaal vanaf
                  </p>

                  <p className="mt-4 text-6xl font-semibold tracking-[-0.05em]">
                    €{totalPrice.toLocaleString("nl-NL")}
                  </p>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
                    Dit is een prijsindicatie. Na jouw aanvraag bespreken we jouw wensen persoonlijk en bevestigen we de definitieve prijs.
                  </p>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                  04. Contactgegevens & extra wensen
                </h2>

               <div className="mt-7 grid gap-4 md:grid-cols-2">
  {[
    { label: "Naam", key: "naam" },
    { label: "Bedrijf", key: "bedrijf" },
    { label: "E-mail", key: "email" },
    { label: "Telefoonnummer", key: "telefoon" },
  ].map((field) => (
<div key={field.key}>
  <input
    type={
      field.key === "email"
        ? "email"
        : field.key === "telefoon"
        ? "tel"
        : "text"
    }
    placeholder={field.label}
    value={formData[field.key as keyof typeof formData]}
    onChange={(event) => updateFormData(field.key, event.target.value)}
    className={`w-full rounded-2xl border bg-black/25 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 ${
      fieldHasError(field.key)
        ? "border-red-400/70 bg-red-500/[0.06] focus:border-red-400"
        : "border-white/10 focus:border-blue-400/50"
    }`}
  />

  {fieldHasError(field.key) && (
    <p className="mt-2 px-2 text-xs text-red-300">
      {getFieldErrorMessage(field.key)}
    </p>
  )}
</div>
  ))}

  <textarea
    placeholder="Extra wensen of functies"
    value={formData.wensen}
    onChange={(event) => updateFormData("wensen", event.target.value)}
    className="min-h-[160px] rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-400/50 md:col-span-2"
  />
</div>
              </div>
            )}
            {currentStep === 4 && (
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.03em]">
                  05. Verzend jouw aanvraag
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                  Controleer jouw pakket, extra opties en prijsindicatie. Daarna verzend je jouw aanvraag en nemen we persoonlijk contact op.
                </p>

               <button
  onClick={submitApplication}
  disabled={isSubmitting}
  className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
>
  {isSubmitting ? "Aanvraag wordt verzonden..." : "Aanvraag verzenden"}
</button>
              </div>
            )}

  </motion.div>
</AnimatePresence>


            <div className="mt-10 flex justify-between gap-4">
              <button
                onClick={previousStep}
            disabled={currentStep === 0}
                className="rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Terug
              </button>

              {currentStep < steps.length - 1 && (
               
            <button
  onClick={nextStep}

  className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
>
  Volgende stap
</button>
              )}
            </div>
         </motion.div>

          <aside className="h-fit rounded-[2rem] border border-blue-400/30 bg-blue-400/[0.07] p-6 backdrop-blur-xl lg:sticky lg:top-6">
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300">
              Prijsindicatie
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em]">
              Vanaf €{totalPrice.toLocaleString("nl-NL")}
            </h2>

            <div className="my-7 h-px bg-white/10" />

            <div className="space-y-4 text-sm text-white/65">
              <div className="flex justify-between gap-6">
                <span>Pakket</span>
                <span>{selectedPackage.name}</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Pagina’s</span>
                <span>{selectedPackage.pages}</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Extra opties</span>
                <span>{selectedExtras.length}</span>
              </div>
            </div>

            {selectedExtras.length > 0 && (
              <div className="mt-6 space-y-2">
                {selectedExtras.map((extra) => (
                  <p key={extra} className="text-sm text-white/45">
                    + {extra}
                  </p>
                ))}
              </div>
            )}

            <p className="mt-7 text-xs leading-6 text-white/40">
              Na verzending nemen we persoonlijk contact op. De definitieve prijs wordt bevestigd na het bespreken van jouw wensen.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}