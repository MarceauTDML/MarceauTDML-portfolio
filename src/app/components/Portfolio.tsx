import imgFitClub from "../../assets/3c9e706ef5aadd685e4f2994232a98ef48e8beec.png";
import imgBe2Art from "../../assets/8eef97931d90371f9b7c550e680b141e38c765f5.png";
import imgLuminea from "../../assets/60303adee7afb98f2b8384a329662f282ea1dee9.png";

const projects = [
  {
    id: 1,
    title: "Fit Club",
    description:
      "Refonte graphique du site d'une salle de sport bordelaise pour améliorer l'expérience utilisateur.\u200B",
    image: imgFitClub,
  },
  {
    id: 2,
    title: "2Be2Art",
    description:
      "Création d'un site de type réseau social où les artistes peuvent publier leurs œuvres.",
    image: imgBe2Art,
  },
  {
    id: 3,
    title: "Luminea Skin",
    description:
      "Site de blog SEO et d'affiliation pour la promotion de masques LED (luminothérapie).",
    image: imgLuminea,
  },
];

export function Portfolio() {
  return (
    <section
      id="projects"
      className="w-full bg-[#fafafa] font-['Inter',sans-serif]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <h3 className="font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.96px] text-black">
            Un aperçu de mon savoir-faire
          </h3>
          <p className="font-medium text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.1px] text-[rgba(0,0,0,0.55)]">
            Voici une sélection de réalisations mêlant design soigné,
            interactivité et code performant.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden relative group hover:shadow-lg transition-shadow"
            >
              <div className="h-[240px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h5 className="font-semibold text-[22px] md:text-[24px] leading-[1.45] tracking-[-0.48px] text-black">
                    {project.title}
                  </h5>
                  <p className="font-medium text-[16px] md:text-[18px] leading-[1.4] tracking-[-0.09px] text-[rgba(0,0,0,0.55)]">
                    {project.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="font-medium text-[18px] leading-[1.45] tracking-[-0.09px] text-[#667eea] hover:text-[#5a6fd6] transition-colors"
                >
                  Voir le projet &rarr;
                </a>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-2xl border border-[rgba(0,0,0,0.1)] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
