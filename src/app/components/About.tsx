import imgAbout from "../../assets/0c8e08399e5532016c8fca63fe53b4338a2fe74b.png";

export function About() {
  return (
    <section
      id="about"
      className="w-full bg-background font-['Inter',sans-serif] transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-28 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <p className="font-medium text-[18px] md:text-[20px] text-muted-foreground tracking-[-0.1px] leading-[1.45]">
            A propos
          </p>
          <h2 className="font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.96px] text-foreground">
            L'excellence technique au service de votre entreprise
          </h2>
          <div className="font-medium text-[16px] md:text-[18px] leading-[1.45] tracking-[-0.09px] text-muted-foreground flex flex-col gap-4">
            <p>
              Actuellement à Epitech Paris, l'une des écoles d'informatique les
              plus exigeantes de France, j'ai fait le choix de mettre mes
              compétences au service des entreprises et des indépendants.
            </p>
            <p>
              Mon objectif est simple : vous offrir la qualité d'une agence web,
              mais avec la flexibilité et la proximité d'un freelance. Ma
              formation me permet de maîtriser les dernières technologies web
              pour créer des sites modernes, sécurisés et durables.
            </p>
            <p>
              En travaillant avec moi, vous bénéficiez d'un accompagnement 100%
              personnalisé et d'un site vitrine haut de gamme, à un tarif
              adapté.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto">
          <img
            src={imgAbout}
            alt="Marceau TDML"
            className="w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[538px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}