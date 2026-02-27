import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function TermsOfSale() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <button className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </button>
        </Link>

        <h1 className="text-4xl md:text-5xl text-foreground mb-8">Conditions Générales de Vente</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">1. Objet</h2>
            <p className="text-muted-foreground mb-4">
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Allix Dolou, 
              Entrepreneur Individuel (SIRET : 98813226200011, RCS Marseille), et ses clients dans le cadre de la vente de services 
              de développement web et de maintenance de sites internet.
            </p>
            <p className="text-muted-foreground">
              Toute commande de services implique l'acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">2. Services proposés</h2>
            <p className="text-muted-foreground mb-4">Les services proposés comprennent :</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Audit Flash :</strong> Analyse technique et SEO de sites web (350€)</li>
              <li><strong>Landing Page :</strong> Création de page unique optimisée (900€)</li>
              <li><strong>Site WordPress :</strong> Développement de site avec CMS (1400€)</li>
              <li><strong>Application React/Next.js :</strong> Développement d'application web moderne (2200€)</li>
              <li><strong>Pack Sérénité :</strong> Maintenance et support mensuel (300€/mois)</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Les prestations sont détaillées dans un devis personnalisé envoyé avant toute commande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">3. Commandes</h2>
            <p className="text-muted-foreground mb-4">
              Toute commande est précédée d'un devis détaillé envoyé par email. Le devis est valable 30 jours à compter de sa date d'émission.
            </p>
            <p className="text-muted-foreground mb-4">
              La commande devient ferme et définitive après :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Acceptation écrite du devis (signature ou email de confirmation)</li>
              <li>Réception du paiement de l'acompte (si applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">4. Prix</h2>
            <p className="text-muted-foreground mb-4">
              Les prix sont indiqués en euros (€) hors taxes. Les prestations sont exonérées de TVA conformément à l'article 293 B du CGI.
            </p>
            <p className="text-muted-foreground mb-4">
              Les prix sont fermes et définitifs pour la durée mentionnée dans le devis. Toute prestation supplémentaire non prévue 
              au devis initial fera l'objet d'une facturation complémentaire.
            </p>
            <div className="bg-card p-6 rounded-xl border border-border mt-4">
              <p className="text-foreground mb-2"><strong>Tarifs indicatifs :</strong></p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Audit Flash : 350€</li>
                <li>Landing Page : 900€</li>
                <li>Site WordPress : 1400€</li>
                <li>Application React/Next.js : 2200€</li>
                <li>Pack Sérénité : 300€/mois</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">5. Modalités de paiement</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Moyen de paiement accepté :</strong> Virement bancaire uniquement.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Échéancier de paiement :</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Projets inférieurs à 1000€ :</strong> Paiement intégral à la commande</li>
              <li><strong>Projets supérieurs à 1000€ :</strong> 
                <ul className="list-circle list-inside ml-6 mt-2 space-y-1">
                  <li>50% d'acompte à la commande</li>
                  <li>50% à la livraison du projet</li>
                </ul>
              </li>
              <li><strong>Pack Sérénité :</strong> Paiement mensuel à échéance fixe</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Les paiements doivent être effectués dans un délai de 7 jours à compter de la réception de la facture.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">6. Délais de livraison</h2>
            <p className="text-muted-foreground mb-4">
              Les délais indicatifs de livraison sont les suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Audit Flash : 48 heures</li>
              <li>Landing Page : 2 semaines</li>
              <li>Site WordPress : 3 semaines</li>
              <li>Application React/Next.js : 4 semaines</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Ces délais courent à compter de la réception de l'acompte et de tous les éléments nécessaires à la réalisation du projet 
              (contenus, visuels, accès, etc.). Tout retard dans la fourniture des éléments nécessaires entraînera un report équivalent du délai de livraison.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">7. Obligations du client</h2>
            <p className="text-muted-foreground mb-4">
              Le client s'engage à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Fournir tous les éléments nécessaires à la réalisation du projet (textes, images, logos, etc.)</li>
              <li>Garantir qu'il dispose des droits sur tous les éléments fournis</li>
              <li>Respecter les délais de validation et de retours</li>
              <li>Effectuer les paiements aux échéances prévues</li>
              <li>Désigner un interlocuteur unique pour le suivi du projet</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">8. Obligations du prestataire</h2>
            <p className="text-muted-foreground mb-4">
              Allix Dolou s'engage à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Mettre en œuvre tous les moyens nécessaires pour réaliser les prestations conformément au devis</li>
              <li>Respecter les délais convenus (sous réserve de la fourniture des éléments nécessaires)</li>
              <li>Informer le client de tout problème ou retard éventuel</li>
              <li>Garantir la confidentialité des informations communiquées</li>
              <li>Fournir un support technique pendant la durée du projet</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">9. Validation et recette</h2>
            <p className="text-muted-foreground mb-4">
              À la fin du projet, le client dispose d'un délai de 7 jours pour tester et valider le travail réalisé. 
              Passé ce délai sans retour du client, le projet sera considéré comme validé et accepté.
            </p>
            <p className="text-muted-foreground mb-4">
              Le client peut demander des modifications mineures dans la limite de 2 allers-retours inclus dans le tarif initial. 
              Toute modification majeure ou dépassement fera l'objet d'une facturation complémentaire.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">10. Propriété intellectuelle</h2>
            <p className="text-muted-foreground mb-4">
              Le code source et les créations graphiques réalisés dans le cadre de la prestation restent la propriété d'Allix Dolou 
              jusqu'au paiement complet du prix convenu.
            </p>
            <p className="text-muted-foreground mb-4">
              Après paiement intégral, le client devient propriétaire du site web et de ses contenus, à l'exception :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Des frameworks et bibliothèques open-source utilisés</li>
              <li>Des images et contenus fournis par le client</li>
              <li>Des polices de caractères et éléments graphiques sous licence tierce</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Allix Dolou se réserve le droit de mentionner le projet dans son portfolio et ses supports de communication, 
              sauf demande contraire expresse du client.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">11. Garantie et maintenance</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Garantie :</strong> Une garantie de bon fonctionnement de 30 jours est offerte après la livraison du projet. 
              Cette garantie couvre uniquement les bugs et dysfonctionnements liés au code développé.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Maintenance :</strong> Après la période de garantie, toute intervention de maintenance ou de correction 
              sera facturée selon nos tarifs en vigueur, sauf souscription au Pack Sérénité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">12. Responsabilité</h2>
            <p className="text-muted-foreground mb-4">
              Allix Dolou ne peut être tenu responsable :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Des contenus fournis par le client (textes, images, vidéos)</li>
              <li>Des interruptions ou dysfonctionnements liés à l'hébergement</li>
              <li>Des modifications effectuées par le client ou un tiers après livraison</li>
              <li>Des problèmes liés à des services tiers (APIs, plugins, etc.)</li>
              <li>D'événements de force majeure</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              En tout état de cause, la responsabilité d'Allix Dolou est limitée au montant de la prestation facturée.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">13. Résiliation et annulation</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Annulation par le client :</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Avant le début du projet : remboursement de l'acompte déduction faite de 20% de frais de dossier</li>
              <li>Après le début du projet : facturation des travaux réalisés au prorata</li>
              <li>Pack Sérénité : résiliation possible avec préavis d'1 mois</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              <strong>Annulation par le prestataire :</strong> En cas de manquement grave du client à ses obligations, 
              Allix Dolou se réserve le droit de suspendre ou d'annuler la prestation après mise en demeure restée sans effet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">14. Retard de paiement</h2>
            <p className="text-muted-foreground mb-4">
              En cas de retard de paiement, des pénalités de retard égales à 3 fois le taux d'intérêt légal seront automatiquement appliquées, 
              ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
            </p>
            <p className="text-muted-foreground">
              Le défaut de paiement entraîne la suspension immédiate des services et peut donner lieu à une action en recouvrement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">15. Protection des données</h2>
            <p className="text-muted-foreground">
              Les données personnelles collectées dans le cadre de la relation commerciale sont traitées conformément au RGPD. 
              Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">16. Droit applicable et litiges</h2>
            <p className="text-muted-foreground mb-4">
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée 
              avant toute action judiciaire.
            </p>
            <p className="text-muted-foreground mb-4">
              À défaut de résolution amiable, les tribunaux de Marseille seront seuls compétents.
            </p>
            <p className="text-muted-foreground">
              Le client peut également recourir à la médiation de la consommation en contactant un médiateur agréé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">17. Modification des CGV</h2>
            <p className="text-muted-foreground">
              Allix Dolou se réserve le droit de modifier les présentes CGV à tout moment. 
              Les CGV applicables sont celles en vigueur à la date de la commande.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              <strong>Contact :</strong> Pour toute question concernant ces CGV, contactez-nous à : allix.dolou@gmail.com
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              Dernière mise à jour : 27 février 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}