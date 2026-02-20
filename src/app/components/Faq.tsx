import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Y a-t-il des frais mensuels cachés ?",
    answer: "Non, aucun frais cachés de ma part. Mon offre à 800€ est un paiement fixe (200€ d’acompte + 600€ une fois le site livré). Cependant, pour que votre site soit en ligne, vous devez payer un hébergement web et un nom de domaine (environ 30€ à 70€ par an, payés directement à l’hébergeur comme O2Switch ou OVH)."
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Pour lancer le projet, je demande un acompte de 200€ à la signature du devis. Le solde restant de 600€ est à régler uniquement une fois le site terminé, validé par vos soins et mis en ligne. Cela garantit une sécurité pour les deux parties. Le paiement sera effectué par virement bancaire, mon RIB/IBAN seront disponibles sur la facture."
  },
  {
    question: "Puis-je modifier le site moi-même après ?",
    answer: "Absolument. Je développe votre site sur une base saine pour que vous soyez autonome. Si vous souhaitez apprendre à tout gérer vous-même (modifier des textes, changer des photos), je propose une formation dédiée de 3h (200€) pour vous donner les clés de votre site. Sinon, mon forfait maintenance à 80€ par intervention est là pour ça."
  },
  {
    question: "Mon site sera-t-il visible sur Google ?",
    answer: "Oui. Je construis votre site avec les meilleures pratiques techniques SEO (structure, vitesse, balises, version mobile). Google pourra lire et indexer votre site parfaitement dès le premier jour."
  },
  {
    question: "Je n'ai pas encore de logo ni de photos, c'est grave ?",
    answer: "Pas de panique. Pour les photos, je peux utiliser des banques d’images libres de droits très professionnelles pour habiller votre site en attendant les vôtres. Pour le logo, je peux intégrer votre nom avec une typographie simple et élégante comme pour mon site."
  }
];

export function Faq() {
  return (
    <section
      id="faq"
      className="w-full bg-[#fafafa] font-['Inter',sans-serif]" 
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-28 flex flex-col gap-12 lg:gap-16">
        
        {/* En-tête de la section */}
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="font-bold text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.96px] text-black max-w-2xl">
            Questions fréquentes
          </h2>
          <p className="font-medium text-[18px] md:text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] leading-[1.45]">
            FAQ
          </p>
        </div>

        {/* Accordéon des questions */}
        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-[16px] sm:text-[18px] font-semibold text-black hover:no-underline hover:text-[rgba(0,0,0,0.7)] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-medium text-[15px] sm:text-[16px] leading-[1.6] tracking-[-0.09px] text-[rgba(0,0,0,0.6)] pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}