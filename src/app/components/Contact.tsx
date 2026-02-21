import { useState, useRef, FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!captchaToken) {
      alert("Veuillez cocher la case 'Je suis humain'.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9ff159f3-d4de-4b1a-9cb4-1790c59e71cf",
          email: formData.email,
          subject: formData.subject,
          message: `Nouveau message de : ${formData.email}\nTéléphone : ${formData.phone || "Non renseigné"}\n\nMessage :\n${formData.message}`,
          "h-captcha-response": captchaToken, 
        }),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({ email: "", phone: "", subject: "", message: "" });
        
        setCaptchaToken("");
        captchaRef.current?.resetCaptcha();
      } else {
        alert("Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" aria-labelledby="contact-heading" className="w-full bg-background font-['Inter',sans-serif] pb-16 md:pb-20 lg:pb-28 transition-colors duration-300">
        <div className="max-w-[768px] mx-auto px-6 md:px-10">
          
          <div className="flex flex-col gap-4 mb-10 text-center">
            <h3 id="contact-heading" className="font-bold text-[32px] sm:text-[38px] md:text-[44px] leading-[1.2] tracking-[-0.96px] text-foreground">
              Vous avez un projet ?
            </h3>
            <p className="font-medium text-[18px] md:text-[20px] leading-[1.45] tracking-[-0.1px] text-muted-foreground">
              Je vous répondrai et vous proposerai un rendez-vous en moins de 24h.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card p-6 md:p-8 rounded-2xl flex flex-col gap-6 relative border-[0.5px] border-border shadow-[0px_0px_4.4px_0px_rgba(0,0,0,0.06),0px_5px_19px_0px_rgba(0,0,0,0.08)]"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-[16px] tracking-[-0.09px] text-card-foreground">
                Email <span aria-hidden="true" className="text-[#667eea]">*</span>
                <span className="sr-only">(Requis)</span>
              </label>
              <input
                type="email"
                id="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl border border-border bg-transparent px-4 py-3 font-medium text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-all"
                placeholder="exemple@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold text-[16px] tracking-[-0.09px] text-card-foreground flex justify-between">
                <span>Téléphone <span className="text-[#667eea]">(facultatif)</span></span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                pattern="[0-9\s\+\-\.()]{10,20}"
                title="Veuillez entrer un numéro de téléphone valide (ex: 06 12 34 56 78 ou +33 6...)"
                className="rounded-xl border border-border bg-transparent px-4 py-3 font-medium text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-all"
                placeholder="Ex: 06 25 15 33 33"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-semibold text-[16px] tracking-[-0.09px] text-card-foreground flex justify-between">
                <span>Objet <span aria-hidden="true" className="text-[#667eea]">*</span></span>
                <span className="text-xs text-muted-foreground font-normal self-end">{formData.subject.length}/100</span>
              </label>
              <input
                type="text"
                id="subject"
                required
                aria-required="true"
                maxLength={100} 
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="rounded-xl border border-border bg-transparent px-4 py-3 font-medium text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-all"
                placeholder="Ex: Demande de création de site vitrine"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-[16px] tracking-[-0.09px] text-card-foreground flex justify-between">
                <span>Message <span aria-hidden="true" className="text-[#667eea]">*</span></span>
                <span className="text-xs text-muted-foreground font-normal self-end">{formData.message.length}/2000</span>
              </label>
              <textarea
                id="message"
                required
                aria-required="true"
                rows={5}
                maxLength={2000} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl border border-border bg-transparent px-4 py-3 font-medium text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-all resize-y"
                placeholder="Expliquez-moi votre besoin en quelques mots..."
              />
            </div>

            <div className="flex justify-center my-2">
              <HCaptcha
                ref={captchaRef}
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                onVerify={(token) => setCaptchaToken(token)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 rounded-xl px-4 py-3 font-semibold text-[16px] md:text-[18px] tracking-[-0.09px] leading-[1.45] transition-colors cursor-pointer bg-[#667eea] text-white hover:bg-[#5a6fd6] disabled:opacity-50 disabled:cursor-not-allowed outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-card p-8 rounded-2xl max-w-md w-full text-center shadow-xl border border-border">
            <div className="w-16 h-16 bg-green-100/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-2">Message envoyé !</h4>
            <p className="text-muted-foreground mb-6">Merci pour votre message. Je vous recontacterai très rapidement.</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-[#667eea] text-white py-3 rounded-xl font-semibold hover:bg-[#5a6fd6] transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}