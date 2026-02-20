export function Confidentialite() {
  return (
    <div className="max-w-[800px] mx-auto px-6 py-24 md:py-32 flex flex-col gap-10">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
        Politique de confidentialité (RGPD)
      </h1>
      <div className="flex flex-col gap-8 text-[16px] md:text-[18px] leading-[1.7] text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 1 : Préambule</h2>
          <p>La présente politique de confidentialité a pour but d’informer les utilisateurs du site https://marceautdml.com sur la manière dont leurs données personnelles sont collectées, traitées et conservées, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 2 : Responsable du traitement</h2>
          <p>Le responsable du traitement des données à caractère personnel est Marceau Timbal-Duclaux de Martin–Loury, exerçant sous le statut de Entrepreneur Individuel, dont le siège est situé au 25 rue Broca, 75005 Paris. Il peut être contacté à l’adresse e-mail suivante : marceautdml@gmail.com ou par téléphone au +33 6 25 15 33 33.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 3 : Nature des données collectées</h2>
          <p className="mb-2">Lors de la navigation sur le site et de l’utilisation de ses services, plusieurs types de données personnelles peuvent être collectés :</p>
          <ul className="list-disc pl-6 flex flex-col gap-1">
            <li><strong>Données de contact :</strong> Nom, prénom, adresse e-mail, numéro de téléphone, transmis volontairement par l’utilisateur via le formulaire de contact.</li>
            <li><strong>Données d’interaction :</strong> Historique des conversations, questions posées et requêtes saisies par l’utilisateur lors de son utilisation de l’assistant virtuel « Clyde » (Chatbot IA).</li>
            <li><strong>Données de navigation :</strong> Adresse IP, navigateur utilisé, durée de la visite et pages consultées, recueillies automatiquement à des fins statistiques et de sécurité.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 4 : Finalité du traitement</h2>
          <p className="mb-2">La collecte et le traitement de ces données répondent aux finalités suivantes :</p>
          <ul className="list-disc pl-6 flex flex-col gap-1">
            <li>La gestion des demandes de contact, l’élaboration de devis et la relation commerciale (B2B).</li>
            <li>Le fonctionnement optimal et l’amélioration continue de l’assistant virtuel « Clyde » pour répondre aux questions des visiteurs.</li>
            <li>L’amélioration de l’expérience utilisateur, la maintenance technique et la sécurisation du site web.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 5 : Hébergement et transmission des données</h2>
          <p>Le site est hébergé par O2Switch, situé au Chemin des Pardiaux 63000 Clermont-Ferrand. Les données collectées sont stockées sur les serveurs de cet hébergeur. Concernant l’assistant virtuel « Clyde », les requêtes textuelles de l’utilisateur sont traitées de manière sécurisée via l’API de Google. Marceau Timbal-Duclaux de Martin–Loury s’engage à ne jamais vendre, louer ou céder les données personnelles de ses utilisateurs à des tiers à des fins commerciales. <strong>Avertissement :</strong> Il est expressément demandé aux utilisateurs de ne saisir aucune donnée à caractère sensible (données de santé, mots de passe, informations bancaires) dans les espaces de saisie libre ou le chatbot.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 6 : Durée de conservation</h2>
          <p className="mb-2">Les données personnelles sont conservées uniquement pour le temps nécessaire à l’accomplissement des finalités visées :</p>
          <ul className="list-disc pl-6 flex flex-col gap-1">
            <li><strong>Données issues du formulaire de contact :</strong> 3 ans à compter du dernier contact émanant du prospect.</li>
            <li><strong>Historique des conversations du Chatbot « Clyde » :</strong> 30 jours.</li>
            <li><strong>Documents de facturation (si la demande aboutit à une prestation) :</strong> 10 ans (obligation légale comptable).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 7 : Politique en matière de Cookies</h2>
          <p>Le site https://marceautdml.com utilise des cookies pour garantir son bon fonctionnement technique. L’utilisateur a la possibilité de configurer son navigateur pour refuser l’installation des cookies, sachant que le refus d’installation d’un cookie fonctionnel peut entraîner l’impossibilité d’accéder à certains services (comme le chatbot).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 8 : Droits des utilisateurs</h2>
          <p className="mb-2">Conformément à la réglementation en vigueur, tout utilisateur dispose des droits suivants concernant ses données personnelles :</p>
          <ul className="list-disc pl-6 mb-2 flex flex-col gap-1">
            <li>Droit d’accès et de rectification.</li>
            <li>Droit à l’effacement (droit à l’oubli).</li>
            <li>Droit à la limitation du traitement et droit d’opposition.</li>
            <li>Droit à la portabilité des données.</li>
          </ul>
          <p>Pour exercer ces droits, l’utilisateur doit adresser sa demande par e-mail à marceautdml@gmail.com, en précisant l’objet de sa demande. Une réponse lui sera adressée dans un délai maximum d’un mois. Si l’utilisateur estime que ses droits ne sont pas respectés, il peut introduire une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL).</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">Article 9 : Modification de la politique de confidentialité</h2>
          <p>L’éditeur se réserve le droit de modifier la présente politique de confidentialité à tout moment afin de garantir sa conformité avec le droit en vigueur. Les utilisateurs sont invités à la consulter régulièrement.</p>
        </section>
      </div>
    </div>
  );
}