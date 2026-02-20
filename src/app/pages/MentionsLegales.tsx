export function MentionsLegales() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-24 md:py-32 flex flex-col gap-10">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
        Mentions légales
      </h1>
      <div className="flex flex-col gap-8 text-[16px] md:text-[18px] leading-[1.7] text-[rgba(0,0,0,0.7)]">
        <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet https://marceautdml.com l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>

        <section>
          <h2 className="text-xl font-semibold text-black mb-2">1. Éditeur du site</h2>
          <p>Le site https://marceautdml.com est édité par :</p>
          <ul className="mt-2 flex flex-col gap-1">
            <li><strong>Nom / Prénom :</strong> Marceau Timbal-Duclaux de Martin–Loury</li>
            <li><strong>Statut juridique :</strong> Entrepreneur individuel (Micro-entreprise)</li>
            <li><strong>Siège social :</strong> 25 rue Broca, 75005 Paris</li>
            <li><strong>Numéro SIRET :</strong> 99944301300019</li>
            <li><strong>Numéro de téléphone :</strong> +33 6 25 15 33 33</li>
            <li><strong>Adresse e-mail :</strong> marceautdml@gmail.com</li>
            <li><strong>Directeur de la publication :</strong> Marceau Timbal-Duclaux de Martin–Loury</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-2">2. Hébergement du site</h2>
          <p>Le site est hébergé par :</p>
          <ul className="mt-2 flex flex-col gap-1">
            <li><strong>Nom de l’hébergeur :</strong> O2Switch</li>
            <li><strong>Adresse de l’hébergeur :</strong> Chemin des Pardiaux 63000 Clermont-Ferrand</li>
            <li><strong>Contact de l’hébergeur :</strong> <a href="https://www.o2switch.fr/support-hebergeur/" className="text-[#667eea] hover:underline" target="_blank" rel="noopener noreferrer">https://www.o2switch.fr/support-hebergeur/</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-2">3. Propriété intellectuelle et contrefaçons</h2>
          <p className="mb-2">Marceau TDML est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture et icônes.</p>
          <p className="mb-2">Certaines images ou éléments graphiques utilisés dans les maquettes présentées (notamment « Fit Club », « 2Be2Art », « Luminea Skin ») proviennent de la plateforme Canva et sont utilisés sous licence.</p>
          <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Marceau TDML.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-2">4. Limitations de responsabilité</h2>
          <p>Marceau Timbal-Duclaux de Martin–Loury ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://marceautdml.com. Marceau Timbal-Duclaux de Martin–Loury décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://marceautdml.com. Des espaces interactifs (formulaire de contact, chatbot IA « Clyde ») sont à la disposition des utilisateurs. Marceau Timbal-Duclaux de Martin–Loury se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-2">5. Gestion des données personnelles</h2>
          <p>L’utilisateur est informé des réglementations concernant la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des Données (RGPD : n° 2016-679). Pour en savoir plus sur la façon dont https://marceautdml.com traite vos données personnelles, veuillez consulter notre Politique de confidentialité.</p>
        </section>
      </div>
    </div>
  );
}