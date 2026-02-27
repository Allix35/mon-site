import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function TermsOfSale() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl mb-8 text-foreground">Conditions Générales de Vente</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <p className="text-muted-foreground leading-relaxed">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
            Allix Dolou et ses clients pour toute prestation de développement web.
          </p>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 1 — Champ d'application</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes CGV s'appliquent à l'ensemble des prestations de création, refonte, maintenance et conseil
              en développement web proposées par Allix Dolou. Toute commande de prestation implique l'acceptation sans
              réserve des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 2 — Devis et commande</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Chaque projet fait l'objet d'un devis personnalisé détaillant :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-3">
              <li>La description détaillée de la prestation</li>
              <li>Le délai de réalisation indicatif</li>
              <li>Le prix total HT et TTC (TVA non applicable)</li>
              <li>Les conditions de paiement</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Le devis est valable 30 jours. La commande est considérée comme ferme et définitive après signature
              du devis par le client et réception de l'acompte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 3 — Prix et modalités de paiement</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Les prix sont exprimés en euros HT. TVA non applicable, article 293B du CGI (auto-entrepreneur).
            </p>
            <div className="mb-4">
              <h3 className="text-xl mb-2 text-foreground">Tarifs indicatifs :</h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li><strong>STARTER</strong> (Landing Page) : À partir de 900€ HT</li>
                <li><strong>ESSENTIEL</strong> (Site Vitrine PME) : À partir de 1 400€ HT</li>
                <li><strong>PRO</strong> (Site React / Next.js) : À partir de 2 200€ HT</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl mb-2 text-foreground">Modalités de paiement :</h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li><strong>Acompte :</strong> 30% à la signature du devis</li>
                <li><strong>Solde :</strong> 70% à la livraison du projet</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Moyens de paiement acceptés : virement bancaire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En cas de retard de paiement, des pénalités de 3 fois le taux d'intérêt légal seront appliquées,
              ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 4 — Délais de réalisation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les délais de réalisation indiqués dans le devis sont donnés à titre indicatif. Ils courent à compter
              de la réception de l'acompte et de l'ensemble des éléments nécessaires au projet (contenus, maquettes,
              accès serveur, etc.). Un retard de livraison ne peut donner lieu à annulation de la commande ou à
              versement de dommages et intérêts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 5 — Révisions et modifications</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Chaque offre inclut un nombre de révisions défini dans le devis :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-3">
              <li><strong>STARTER :</strong> 2 révisions incluses</li>
              <li><strong>ESSENTIEL :</strong> 3 révisions incluses</li>
              <li><strong>PRO :</strong> 3 révisions incluses</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Les révisions supplémentaires seront facturées séparément. Les demandes de modifications majeures
              après validation d'une étape donnent lieu à un nouveau devis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 6 — Support et maintenance</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Une période de support & bugs est incluse après livraison :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-3">
              <li><strong>STARTER :</strong> 30 jours</li>
              <li><strong>ESSENTIEL :</strong> 60 jours</li>
              <li><strong>PRO :</strong> 90 jours</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Ce support couvre les corrections de bugs et dysfonctionnements liés au code livré. Les nouvelles
              fonctionnalités ou évolutions majeures ne sont pas couvertes et feront l'objet d'un devis séparé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 7 — Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Le code source et les éléments graphiques créés dans le cadre du projet restent la propriété d'Allix Dolou
              jusqu'au paiement intégral du projet.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Après paiement complet, les droits d'exploitation sont transférés au client pour l'utilisation prévue
              dans le devis. Allix Dolou conserve le droit de présenter le projet dans son portfolio, sauf mention
              contraire écrite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 8 — Obligations du client</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Le client s'engage à :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li>Fournir tous les éléments nécessaires à la réalisation du projet dans les délais convenus</li>
              <li>Valider ou formuler ses remarques dans un délai de 7 jours après chaque livraison partielle</li>
              <li>Respecter les lois en vigueur concernant le contenu publié sur son site</li>
              <li>Souscrire un hébergement adapté et maintenir à jour les logiciels (CMS, extensions, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 9 — Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Allix Dolou met tout en œuvre pour réaliser le projet dans les meilleures conditions. Toutefois,
              sa responsabilité ne peut être engagée en cas de force majeure, de défaillance de l'hébergeur,
              ou de problèmes liés au contenu fourni par le client. La responsabilité d'Allix Dolou est limitée
              au montant total de la prestation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 10 — Annulation et résiliation</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              En cas d'annulation du projet par le client après signature du devis :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-3">
              <li>L'acompte versé reste acquis à Allix Dolou</li>
              <li>Les travaux déjà réalisés seront facturés en sus si nécessaire</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              En cas de manquement grave du client à ses obligations (non-paiement, non-fourniture des éléments,
              comportement inapproprié), Allix Dolou se réserve le droit de suspendre ou d'annuler le projet
              sans remboursement des sommes déjà versées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 11 — Droit de rétractation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne s'applique
              pas aux prestations de services pleinement exécutées avant la fin du délai de rétractation et dont
              l'exécution a commencé après accord préalable exprès du consommateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 12 — Données personnelles</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les données personnelles collectées dans le cadre de la relation commerciale sont traitées conformément
              à la Politique de Confidentialité disponible sur le site. Le client dispose d'un droit d'accès,
              de rectification et de suppression de ses données.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 13 — Droit applicable et litiges</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera
              recherchée en priorité. À défaut, les tribunaux compétents seront ceux du ressort de Marseille.
            </p>
          </section>

          <footer className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground italic">
            Conditions Générales de Vente version 1.0 — Février 2025.
          </footer>
        </div>
      </div>
    </div>
  );
}