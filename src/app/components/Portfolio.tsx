import imgFitClub from "../../assets/3c9e706ef5aadd685e4f2994232a98ef48e8beec.png";
import imgBe2Art from "../../assets/8eef97931d90371f9b7c550e680b141e38c765f5.png";
import imgLuminea from "../../assets/60303adee7afb98f2b8384a329662f282ea1dee9.png";

const projects = [
  {
    id: 1,
    title: "Fit Club",
    description: "Refonte graphique du site d'une salle de sport bordelaise pour améliorer l'expérience utilisateur.\u200B",
    image: imgFitClub,
    link: "https://www.figma.com/proto/Dn62T1Xukfa61MDjXCp9CB/Fit-Club-maquette?node-id=1-2&viewport=208%2C363%2C0.15&t=EYosW9fTqXejCCwH-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 2,
    title: "2Be2Art",
    description: "Création d'un site de type réseau social où les artistes peuvent publier leurs œuvres.",
    image: imgBe2Art,
    link: "https://www.figma.com/proto/My2Zjn4G7ar07bNfP55Zid/2Be2Art-maquette?node-id=1-3&viewport=549%2C293%2C0.27&t=bT7b5efEhrJgfpnB-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1", 
  },
  {
    id: 3,
    title: "Luminea Skin",
    description: "Site de blog SEO et d'affiliation pour la promotion de masques de luminothérapie.",
    image: imgLuminea,
    link: "https://www.figma.com/proto/vi9tN1tIZneLAyHHWBXvOO/Luminea-Skin-maquette?node-id=1-2&viewport=620%2C261%2C0.39&t=aCpGHrUISBdvXcuL-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1", 
  },
];

export function Portfolio() {
  return (
    <section
      id="projects"
      className="w-full bg-background font-['Inter',sans-serif] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <h3 className="font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.96px] text-foreground">
            Un aperçu de mon savoir-faire
          </h3>
          <p className="font-medium text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.1px] text-muted-foreground">
            Voici une sélection de réalisations mêlant design soigné,
            interactivité et code performant.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-card rounded-2xl overflow-hidden relative group hover:shadow-lg transition-shadow"
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
                  <h5 className="font-semibold text-[22px] md:text-[24px] leading-[1.45] tracking-[-0.48px] text-card-foreground">
                    {project.title}
                  </h5>
                  <p className="font-medium text-[16px] md:text-[18px] leading-[1.4] tracking-[-0.09px] text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[18px] leading-[1.45] tracking-[-0.09px] text-[#667eea] hover:text-[#5a6fd6] transition-colors"
                >
                  Voir le projet &rarr;
                </a>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none rounded-2xl border border-border shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}