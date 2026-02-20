const steps = [
  {
    id: 1,
    title: "1. Échange & Analyse",
    description: "Tout projet web commence par une analyse précise. Lors de cet échange initial, en visio Google Meet, je vous pose les questions essentielles pour verrouiller la direction à prendre.",
  },
  {
    id: 2,
    title: "2. Conception de la maquette",
    description: "Avant de développer le site web, je conçois la maquette interactive de ce dernier.",
  },
  {
    id: 3,
    title: "3. Développement & Optimisation",
    description: "C'est la phase de construction. Sur la base de la maquette validée, je fige le design pour garantir la propreté et la stabilité du site.",
  },
  {
    id: 4,
    title: "4. Livraison",
    description: "Votre site est finalisé. Je procède au déploiement technique sur votre hébergement.",
  },
];

export function Process() {
  return (
    <section
      id="method"
      className="w-full bg-background font-['Inter',sans-serif] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-28 flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
        {/* Header */}
        <div className="flex-1 shrink-0">
          <h3 className="font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.96px] text-foreground">
            Votre site vitrine en 4 étapes simples
          </h3>
        </div>

        {/* Steps list */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl p-6 flex flex-col gap-4 min-w-0"
              style={{
                backgroundImage:
                  "linear-gradient(116.639deg, rgb(102, 126, 234) 2.1747%, rgb(118, 75, 162) 97.825%)",
              }}
            >
              <h5 className="font-semibold text-[20px] md:text-[24px] leading-none tracking-[-0.36px] text-[#fafafa]">
                {step.title}
              </h5>
              <p className="font-medium text-[16px] md:text-[18px] leading-[1.45] tracking-[-0.09px] text-[rgba(250,250,250,0.8)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}