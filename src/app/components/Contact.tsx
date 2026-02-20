import { useState, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:marceautdml@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Expéditeur : ${formData.email}\n\nMessage :\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
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
          noValidate
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
            <label htmlFor="phone" className="font-semibold text-[16px] tracking-[-0.09px] text-card-foreground">
              Téléphone <span className="text-[#667eea]">(facultatif)</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="rounded-xl border border-border bg-transparent px-4 py-3 font-medium text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-all"
              placeholder="Ex: 06 25 15 33 33"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-semibold text-[16px] tracking-[-0.09px] text-card-foreground">
              Objet <span aria-hidden="true" className="text-[#667eea]">*</span>
              <span className="sr-only">(Requis)</span>
            </label>
            <input
              type="text"
              id="subject"
              required
              aria-required="true"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="rounded-xl border border-border bg-transparent px-4 py-3 font-medium text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-all"
              placeholder="Ex: Demande de création de site vitrine"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold text-[16px] tracking-[-0.09px] text-card-foreground">
              Message <span aria-hidden="true" className="text-[#667eea]">*</span>
              <span className="sr-only">(Requis)</span>
            </label>
            <textarea
              id="message"
              required
              aria-required="true"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="rounded-xl border border-border bg-transparent px-4 py-3 font-medium text-[16px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#667eea] focus:ring-1 focus:ring-[#667eea] transition-all resize-y"
              placeholder="Expliquez-moi votre besoin en quelques mots..."
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 rounded-xl px-4 py-3 font-semibold text-[16px] md:text-[18px] tracking-[-0.09px] leading-[1.45] transition-colors cursor-pointer bg-[#667eea] text-white hover:bg-[#5a6fd6] outline-none focus-visible:ring-2 focus-visible:ring-[#667eea] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background"
          >
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}