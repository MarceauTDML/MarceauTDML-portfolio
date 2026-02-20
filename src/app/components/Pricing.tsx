import svgPaths from "../../imports/svg-hrs185whpn";

function CheckIcon() {
  return (
    <div className="shrink-0 size-[24px]">
      <svg className="size-full" fill="none" viewBox="0 0 24 24">
        <path
          d={svgPaths.p2b309e80}
          stroke="black"
          strokeLinecap="round"
          strokeOpacity="0.55"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceLabel?: string;
  features: string[];
  buttonText: string;
  buttonStyle: "primary" | "outline";
}

function PricingCard({
  title,
  subtitle,
  price,
  priceLabel,
  features,
  buttonText,
  buttonStyle,
}: PricingCardProps) {
  return (
    <div className="bg-white rounded-2xl relative flex flex-col h-full">
      <div className="overflow-hidden rounded-2xl flex flex-col gap-8 p-6 pt-8 flex-1">
        {/* Header */}
        <div className="flex flex-col">
          <h5 className="font-semibold text-[20px] tracking-[-0.1px] leading-[1.4] text-black">
            {title}
          </h5>
          <p className="font-medium text-[16px] md:text-[18px] tracking-[-0.09px] leading-[1.4] text-[rgba(0,0,0,0.55)]">
            {subtitle}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1.5">
          <span className="font-bold text-[48px] md:text-[56px] tracking-[-1.12px] leading-[1.1] text-[#667eea]">
            {price}
          </span>
          {priceLabel && (
            <span className="font-medium text-[16px] md:text-[18px] tracking-[-0.09px] leading-[1.4] text-[rgba(0,0,0,0.55)]">
              {priceLabel}
            </span>
          )}
        </div>

        {/* Features */}
        <div className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckIcon />
              <span className="font-medium text-[16px] md:text-[18px] tracking-[-0.09px] leading-[1.4] text-black">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className={`block text-center w-full rounded-xl px-4 py-3 font-semibold text-[16px] md:text-[18px] tracking-[-0.09px] leading-[1.45] transition-colors cursor-pointer ${
            buttonStyle === "primary"
              ? "bg-[#667eea] text-white hover:bg-[#5a6fd6]"
              : "bg-transparent text-[#667eea] border-2 border-[#667eea] hover:bg-[#667eea]/5"
          }`}
        >
          {buttonText}
        </a>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-2xl border-[0.5px] border-[rgba(0,0,0,0.1)] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]"
      />
    </div>
  );
}

const pricingData: PricingCardProps[] = [
  {
    title: "Maintenance",
    subtitle: "1 intervention sur le site en 24 à 72h",
    price: "80€",
    priceLabel: "/ intervention",
    features: [
      "Changement de textes et images",
      "Mises à jour de sécurité",
      "Scan de sécurité anti-virus",
      "1 sauvegarde complète",
      "Remise en ligne du site",
      "Prix fixe",
    ],
    buttonText: "Demander une maintenance",
    buttonStyle: "outline",
  },
  {
    title: "Site vitrine",
    subtitle: "Livré sous 10 à 15 jours ouvrés",
    price: "800€",
    features: [
      "Site web sur mesure et sécurisé",
      "Entre 1 à 5 pages avec SEO",
      "Responsive mobile et tablette",
      "Mise en ligne du site",
      "30J de garantie technique*",
      "Prix fixe",
    ],
    buttonText: "Commencer mon projet",
    buttonStyle: "primary",
  },
  {
    title: "Formation",
    subtitle: "Apprenez à gérer votre site en 3h",
    price: "200€",
    features: [
      "Apprendre à modifier vos textes",
      "Changer vos photos vous-même",
      "Sauvegarder votre site",
      "Gérer la sécurité de votre site",
      "Support vidéos elearning",
      "Prix fixe",
    ],
    buttonText: "Demander un accès",
    buttonStyle: "outline",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full bg-[#fafafa] font-['Inter',sans-serif]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-28">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16">
          <h3 className="font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.96px] text-black">
            Une offre simple et transparente
          </h3>
          <p className="font-medium text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.1px] text-[rgba(0,0,0,0.55)]">
            Pas de surprise, pas de frais cachés. Un prix fixe pour une
            prestation complète et de qualité.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((card) => (
            <PricingCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}