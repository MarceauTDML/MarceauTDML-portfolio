import svgPaths from "./svg-hrs185whpn";
import imgImage from "figma:asset/3c9e706ef5aadd685e4f2994232a98ef48e8beec.png";
import imgImage1 from "figma:asset/8eef97931d90371f9b7c550e680b141e38c765f5.png";
import imgImage2 from "figma:asset/60303adee7afb98f2b8384a329662f282ea1dee9.png";
import imgImage3 from "figma:asset/0c8e08399e5532016c8fca63fe53b4338a2fe74b.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.1px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Maintenance</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">1 intervention sur le site en 24 à 72h</p>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="content-stretch flex gap-[6px] items-baseline leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Pricing">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#667eea] text-[56px] tracking-[-1.12px]">
        <p className="leading-[1.1]">80€</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px]">
        <p className="leading-[1.4]">/ intervention</p>
      </div>
    </div>
  );
}

function Checkmark() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <rect height="22" rx="11" stroke="var(--stroke-0, white)" strokeWidth="2" width="22" x="1" y="1" />
          <path d={svgPaths.p9cb540} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature 1">
      <Checkmark />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px] whitespace-pre-wrap">Changement de textes et images</p>
    </div>
  );
}

function Checkmark1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <rect height="22" rx="11" stroke="var(--stroke-0, white)" strokeWidth="2" width="22" x="1" y="1" />
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature 2">
      <Checkmark1 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Mises à jour de sécurité</p>
      </div>
    </div>
  );
}

function Checkmark2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature 3">
      <Checkmark2 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Scan de sécurité anti-virus</p>
      </div>
    </div>
  );
}

function Checkmark3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature 4">
      <Checkmark3 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">1 sauvegarde complète</p>
      </div>
    </div>
  );
}

function Checkmark4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature 5">
      <Checkmark4 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Remise en ligne du site</p>
      </div>
    </div>
  );
}

function Checkmark5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature 6">
      <Checkmark5 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Prix fixe</p>
      </div>
    </div>
  );
}

function FeatureList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Feature list">
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
      <Feature6 />
    </div>
  );
}

function Button() {
  return (
    <button className="cursor-pointer h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#667eea] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#667eea] text-[18px] text-left tracking-[-0.09px] whitespace-nowrap">
            <p className="leading-[1.45]">Demander une maintenance</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Card() {
  return (
    <li className="bg-white flex-[1_0_0] min-h-px min-w-[336px] relative rounded-[16px]" data-name="Card 1">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start min-w-[inherit] pb-[24px] pt-[32px] px-[24px] relative w-full">
          <Header />
          <Pricing />
          <FeatureList />
          <Button />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
    </li>
  );
}

function Plan() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Plan">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.1px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Site vitrine</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Livré sous 10 à 15 jours ouvrés</p>
      </div>
    </div>
  );
}

function Pricing1() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0 w-full" data-name="Pricing">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#667eea] text-[56px] tracking-[-0.56px] whitespace-nowrap">
        <p className="leading-[1.1]">800€</p>
      </div>
    </div>
  );
}

function Checkmark6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <rect height="22" rx="11" stroke="var(--stroke-0, white)" strokeWidth="2" width="22" x="1" y="1" />
          <path d={svgPaths.p9cb540} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark6 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px] whitespace-pre-wrap">Site web sur mesure et sécurisé</p>
    </div>
  );
}

function Checkmark7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <rect height="22" rx="11" stroke="var(--stroke-0, white)" strokeWidth="2" width="22" x="1" y="1" />
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark7 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Entre 1 à 5 pages avec SEO</p>
      </div>
    </div>
  );
}

function Checkmark8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark8 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Responsive mobile et tablette</p>
      </div>
    </div>
  );
}

function Checkmark9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark9 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Mise en ligne du site</p>
      </div>
    </div>
  );
}

function Checkmark10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark10 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">30J de garantie technique*</p>
      </div>
    </div>
  );
}

function Checkmark11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark11 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Prix fixe</p>
      </div>
    </div>
  );
}

function FeatureList1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Feature list">
      <Feature />
      <Feature7 />
      <Feature8 />
      <Feature9 />
      <Feature10 />
      <Feature11 />
    </div>
  );
}

function Button1() {
  return (
    <button className="bg-[#667eea] cursor-pointer relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
            <p className="leading-[1.45]">Commencer mon projet</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Card1() {
  return (
    <li className="bg-white flex-[1_0_0] min-h-px min-w-[336px] relative rounded-[16px]" data-name="Card 2">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start min-w-[inherit] pb-[24px] pt-[32px] px-[24px] relative w-full">
          <Plan />
          <Pricing1 />
          <FeatureList1 />
          <Button1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
    </li>
  );
}

function Plan1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Plan">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[20px] text-black tracking-[-0.1px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Formation</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Apprenez à gérer votre site en 3h</p>
      </div>
    </div>
  );
}

function Pricing2() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0 w-full" data-name="Pricing">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#667eea] text-[56px] tracking-[-1.12px] whitespace-nowrap">
        <p className="leading-[1.1]">200€</p>
      </div>
    </div>
  );
}

function Checkmark12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <rect height="22" rx="11" stroke="var(--stroke-0, white)" strokeWidth="2" width="22" x="1" y="1" />
          <path d={svgPaths.p9cb540} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark12 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px] whitespace-pre-wrap">Apprendre à modifier vos textes</p>
    </div>
  );
}

function Checkmark13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <rect height="22" rx="11" stroke="var(--stroke-0, white)" strokeWidth="2" width="22" x="1" y="1" />
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark13 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px]">
        <p className="leading-[1.4] whitespace-pre-wrap">Changer vos photos vous-même</p>
      </div>
    </div>
  );
}

function Checkmark14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark14 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-full leading-[1.4] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px] whitespace-pre-wrap">Sauvegarder votre site</p>
    </div>
  );
}

function Checkmark15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark15 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-full leading-[1.4] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px] whitespace-pre-wrap">Gérer la sécurité de votre site</p>
    </div>
  );
}

function Checkmark16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark16 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-full leading-[1.4] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px] whitespace-pre-wrap">Support vidéos elearning</p>
    </div>
  );
}

function Checkmark17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="checkmark">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkmark">
          <path d={svgPaths.p2b309e80} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Feature17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Feature">
      <Checkmark17 />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium h-full leading-[1.4] min-h-px min-w-px not-italic relative text-[18px] text-black tracking-[-0.09px] whitespace-pre-wrap">Prix fixe</p>
    </div>
  );
}

function FeatureList2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Feature list">
      <Feature12 />
      <Feature13 />
      <Feature14 />
      <Feature15 />
      <Feature16 />
      <Feature17 />
    </div>
  );
}

function Button2() {
  return (
    <button className="cursor-pointer relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#667eea] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#667eea] text-[16px] text-left tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45]">Demander un accès</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Card2() {
  return (
    <li className="bg-white flex-[1_0_0] min-h-px min-w-[336px] relative rounded-[16px]" data-name="Card 3">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start min-w-[inherit] pb-[24px] pt-[32px] px-[24px] relative w-full">
          <Plan1 />
          <Pricing2 />
          <FeatureList2 />
          <Button2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]" />
    </li>
  );
}

function PricingCards() {
  return (
    <ul className="absolute bg-[#fafafa] content-stretch flex gap-[32px] items-start left-0 px-[64px] py-[120px] top-[3256px] w-[1280px]" data-name="Pricing cards 2">
      <Card />
      <Card1 />
      <Card2 />
    </ul>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.45] whitespace-pre-wrap">Fit Club</h5>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">{`Refonte graphique du site d’une salle de sport bordelaise pour améliorer l'expérience utilisateur.​`}</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center leading-[0] not-italic p-[24px] relative w-full">
          <Text />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#667eea] text-[18px] tracking-[-0.09px] w-full">
            <p className="leading-[1.45] whitespace-pre-wrap">{`Voir le projet  →`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <article className="bg-white block rounded-[16px] size-full" data-name="Card 1">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <div aria-hidden="true" className="h-[240px] relative shrink-0 w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
        </div>
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.45] whitespace-pre-wrap">2Be2Art</h5>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Création d’un site de type réseau social où les artistes peuvent publier leurs œuvres.</p>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center leading-[0] not-italic p-[24px] relative w-full">
          <Text1 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#667eea] text-[18px] tracking-[-0.09px] w-full">
            <p className="leading-[1.45] whitespace-pre-wrap">{`Voir le projet  →`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <article className="bg-white block rounded-[16px] size-full" data-name="Card 2">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <div aria-hidden="true" className="h-[240px] relative shrink-0 w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
        </div>
        <Body1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function Body3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.45] whitespace-pre-wrap">Luminea Skin</h5>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">{`Site de blog SEO et d'affiliation pour la promotion de masques LED (luminothérapie).`}</p>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center leading-[0] not-italic p-[24px] relative w-full">
          <Body3 />
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#667eea] text-[18px] tracking-[-0.09px] w-full">
            <p className="leading-[1.45] whitespace-pre-wrap">{`Voir le projet  →`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <article className="bg-white block rounded-[16px] size-full" data-name="Card 3">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <div aria-hidden="true" className="h-[240px] relative shrink-0 w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
        </div>
        <Body2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function FeatureCards() {
  return (
    <ul className="absolute bg-[#fafafa] content-stretch flex gap-[32px] h-[646px] items-start justify-center left-0 px-[64px] py-[120px] top-[1611px] w-[1280px]" data-name="Feature cards 3">
      <li className="relative shrink-0 w-[362.667px]">
        <Card3 />
      </li>
      <li className="relative shrink-0 w-[362.667px]">
        <Card4 />
      </li>
      <li className="relative shrink-0 w-[362.667px]">
        <Card5 />
      </li>
    </ul>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Company">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black tracking-[-0.48px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Marceau TDML</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#667eea] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Me contacter</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <nav className="content-center flex flex-wrap gap-[24px] items-center relative shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">A propos</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Projets</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Tarifs</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Méthode</p>
      </div>
      <PrimaryButton />
    </nav>
  );
}

function Header2() {
  return (
    <header className="absolute bg-[#fafafa] content-stretch flex items-center justify-between left-0 px-[64px] py-[24px] top-0 w-[1280px]" data-name="Header 2">
      <Company />
      <Buttons />
    </header>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center" data-name="Content">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[#fafafa] text-[64px] tracking-[-1.28px] w-[min-content]">
        <h1 className="block leading-[1.1] whitespace-pre-wrap">Attirez plus de clients avec un site web moderne et performant</h1>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.4] relative shrink-0 text-[24px] text-[rgba(250,250,250,0.8)] tracking-[-0.12px] w-[960px] whitespace-pre-wrap">
        <p className="mb-0">Sans frais cachés, sans surprise.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function PrimaryButton1() {
  return (
    <button className="bg-[#fafafa] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#667eea] text-[18px] text-center tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Découvrir mon offre à 800€</p>
      </div>
    </button>
  );
}

function SecondaryButton() {
  return (
    <button className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border-2 border-[#fafafa] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[18px] text-left tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Voir mes réalisations</p>
      </div>
    </button>
  );
}

function Buttons1() {
  return (
    <div className="content-center cursor-pointer flex flex-wrap gap-[16px] items-center relative shrink-0" data-name="Buttons">
      <PrimaryButton1 />
      <SecondaryButton />
    </div>
  );
}

function Hero() {
  return (
    <section className="absolute content-stretch flex flex-col gap-[48px] items-center left-0 px-[64px] py-[120px] top-[95px] w-[1280px]" data-name="Hero 4" style={{ backgroundImage: "linear-gradient(116.434deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 99.943%)" }}>
      <Content />
      <Buttons1 />
    </section>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">A propos</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">{`L'excellence technique au service de votre entreprise`}</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.45)] tracking-[-0.09px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Actuellement à Epitech Paris, l’une des écoles d’informatique les plus exigeantes de France, j’ai fait le choix de mettre mes compétences au service des entreprises et des indépendants. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Mon objectif est simple : vous offrir la qualité d’une agence web, mais avec la flexibilité et la proximité d’un freelance. Ma formation me permet de maîtriser les dernières technologies web pour créer des sites modernes, sécurisés et durables. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>En travaillant avec moi, vous bénéficiez d’un accompagnement 100% personnalisé et d’un site vitrine haut de gamme, à un tarif adapté.</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <Text2 />
    </div>
  );
}

function Feature18() {
  return (
    <section className="absolute bg-[#fafafa] content-stretch flex gap-[64px] items-center left-0 px-[64px] py-[120px] top-[735px] w-[1280px]" data-name="Feature 2">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Content1 />
      </div>
      <div aria-hidden="true" className="flex-[1_0_0] h-[538px] min-h-px min-w-px relative rounded-[16px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
      </div>
    </section>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Un aperçu de mon savoir-faire</h3>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Voici une sélection de réalisations mêlant design soigné, interactivité et code performant.</p>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="absolute bg-[#fafafa] h-[73px] left-0 top-[1538px] w-[1280px]" data-name="Testimonials 3">
      <div className="content-stretch flex flex-col items-start px-[64px] py-[48px] relative size-full">
        <Header1 />
      </div>
    </section>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Header">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[1.2] min-h-px min-w-px not-italic relative text-[48px] text-black tracking-[-0.96px] whitespace-pre-wrap">
        <h3 className="block mb-0">Votre site vitrine en 4 étapes simples</h3>
        <h3 className="block">&nbsp;</h3>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Header">
      <h5 className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.36px]">{`1. Échange & Analyse`}</h5>
    </div>
  );
}

function Row() {
  return (
    <li className="min-w-[324px] relative rounded-[16px] shrink-0 w-full" data-name="Row 1" style={{ backgroundImage: "linear-gradient(110.09deg, rgb(102, 126, 234) 2.1747%, rgb(118, 75, 162) 97.825%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Header4 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(250,250,250,0.8)] tracking-[-0.09px] w-[min-content]">
          <p className="leading-[1.45] whitespace-pre-wrap">Tout projet web commence par une analyse précise. Lors de cet échange initial, en visio Google Meet, je vous pose les questions essentielles pour verrouiller la direction à prendre.</p>
        </div>
      </div>
    </li>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Header">
      <h5 className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.36px]">2. Conception de la maquette</h5>
    </div>
  );
}

function Row1() {
  return (
    <li className="min-w-[324px] relative rounded-[16px] shrink-0 w-full" data-name="Row 5" style={{ backgroundImage: "linear-gradient(116.639deg, rgb(102, 126, 234) 2.1747%, rgb(118, 75, 162) 97.825%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Header5 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(250,250,250,0.8)] tracking-[-0.09px] w-[min-content]">
          <p className="leading-[1.45] whitespace-pre-wrap">Avant de développer le site web, je conçois la maquette interactive de ce dernier.</p>
        </div>
      </div>
    </li>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Header">
      <h5 className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.36px]">{`3. Développement & Optimisation`}</h5>
    </div>
  );
}

function Row2() {
  return (
    <li className="min-w-[324px] relative rounded-[16px] shrink-0 w-full" data-name="Row 6" style={{ backgroundImage: "linear-gradient(112.931deg, rgb(102, 126, 234) 2.1747%, rgb(118, 75, 162) 97.825%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Header6 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(250,250,250,0.8)] tracking-[-0.09px] w-[min-content]">
          <p className="leading-[1.45] whitespace-pre-wrap">C’est la phase de construction. Sur la base de la maquette validée, je fige le design pour garantir la propreté et la stabilité du site.</p>
        </div>
      </div>
    </li>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Header">
      <h5 className="block font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.36px]">4. Livraison</h5>
    </div>
  );
}

function Row3() {
  return (
    <li className="min-w-[324px] relative rounded-[16px] shrink-0 w-full" data-name="Row 7" style={{ backgroundImage: "linear-gradient(116.639deg, rgb(102, 126, 234) 2.1747%, rgb(118, 75, 162) 97.825%)" }}>
      <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] p-[24px] relative w-full">
        <Header7 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(250,250,250,0.8)] tracking-[-0.09px] w-[min-content]">
          <p className="leading-[1.45] whitespace-pre-wrap">Votre site est finalisé. Je procède au déploiement technique sur votre hébergement.</p>
        </div>
      </div>
    </li>
  );
}

function List() {
  return (
    <ul className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="List">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </ul>
  );
}

function TextList() {
  return (
    <section className="absolute bg-[#fafafa] content-stretch flex gap-[48px] items-start left-0 overflow-clip px-[64px] py-[120px] top-[2257px] w-[1280px]" data-name="Text list 2">
      <Header3 />
      <List />
    </section>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h3 className="block leading-[1.2] whitespace-pre-wrap">Une offre simple et transparente</h3>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Pas de surprise, pas de frais cachés. Un prix fixe pour une prestation complète et de qualité.</p>
      </div>
    </div>
  );
}

function Testimonials1() {
  return (
    <section className="absolute bg-[#fafafa] h-[73px] left-0 top-[3183px] w-[1280px]" data-name="Testimonials 4">
      <div className="content-stretch flex flex-col items-start px-[64px] py-[48px] relative size-full">
        <Header8 />
      </div>
    </section>
  );
}

function Company1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]" data-name="Company">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[24px] tracking-[-0.48px] w-[194px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Marceau TDML</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <Company1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[1.45] whitespace-pre-wrap">Votre site professionnel clé en main, simple, efficace et élégant.</p>
      </div>
    </div>
  );
}

function SocialLink() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_433)" id="Social link 1">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_433">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLink1() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_430)" id="Social link 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="#FAFAFA" fillRule="evenodd" />
            <path d={svgPaths.pe7ea00} fill="var(--fill-0, #111827)" />
            <path d={svgPaths.p1ab31680} fill="var(--fill-0, #111827)" />
            <path d={svgPaths.p28c6df0} fill="var(--fill-0, #111827)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_430">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLink2() {
  return <button className="block relative shrink-0 size-[24px]" data-name="Social link 3" />;
}

function SocialLinks() {
  return (
    <nav className="content-stretch cursor-pointer flex gap-[24px] items-center relative shrink-0" data-name="Social links">
      <SocialLink />
      <SocialLink1 />
      <SocialLink2 />
    </nav>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text3 />
      <SocialLinks />
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Contact</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[238px]" data-name="Column 2">
      <Header9 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">marceautdml@gmail.com</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">+33 6 25 15 33 33</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Paris 5e arrondissement</p>
      </div>
    </nav>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[16px] tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Légal</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[166px]" data-name="Column 3">
      <Header10 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">CGU</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">CGV</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Mentions légales</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(250,250,250,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Confidentialité</p>
      </div>
    </nav>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-[461px]" data-name="Nav">
      <Column />
      <Column1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[120px] items-start min-h-px min-w-px py-[80px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(250,250,250,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Content2 />
      <Nav />
    </div>
  );
}

function Footer() {
  return (
    <footer className="absolute bg-[#111827] content-stretch flex items-center justify-center left-0 overflow-clip pb-[120px] px-[64px] top-[4003px] w-[1280px]" data-name="Footer 2">
      <Container />
    </footer>
  );
}

export default function MarceauTdmlHome() {
  return (
    <div className="bg-white relative size-full" data-name="MarceauTDML - Home">
      <PricingCards />
      <FeatureCards />
      <Header2 />
      <Hero />
      <Feature18 />
      <Testimonials />
      <TextList />
      <Testimonials1 />
      <Footer />
    </div>
  );
}