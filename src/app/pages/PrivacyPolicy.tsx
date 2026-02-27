import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <button className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </button>
        </Link>

        <h1 className="text-4xl md:text-5xl text-foreground mb-8">Politique de confidentialité</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              La présente politique de confidentialité a pour but de vous informer sur la manière dont Allix Dolou 
              collecte, utilise et protège vos données personnelles dans le cadre de l'utilisation de ce site web.
            </p>
            <p className="text-muted-foreground">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
              vous disposez de droits sur vos données personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">2. Responsable du traitement</h2>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-foreground mb-2"><strong>Responsable :</strong></p>
              <p className="text-muted-foreground">Allix Dolou</p>
              <p className="text-muted-foreground">Entrepreneur Individuel</p>
              <p className="text-muted-foreground">SIRET : 98813226200011</p>
              <p className="text-muted-foreground">Email : allix.dolou@gmail.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">3. Données collectées</h2>
            <p className="text-muted-foreground mb-4">
              Dans le cadre de l'utilisation de notre site, nous sommes susceptibles de collecter les données suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Adresse email (lors de la prise de contact)</li>
              <li>Nom et prénom (si communiqués volontairement)</li>
              <li>Données de navigation (cookies techniques si nécessaire)</li>
              <li>Messages envoyés via le formulaire de contact</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">4. Finalités du traitement</h2>
            <p className="text-muted-foreground mb-4">
              Les données personnelles collectées sont utilisées uniquement pour :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Répondre à vos demandes de contact</li>
              <li>Gérer la relation client et les projets</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">5. Base légale du traitement</h2>
            <p className="text-muted-foreground mb-4">
              Le traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Votre consentement lors de la prise de contact</li>
              <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
              <li>Le respect d'obligations légales</li>
              <li>Notre intérêt légitime à gérer notre activité professionnelle</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">6. Durée de conservation</h2>
            <p className="text-muted-foreground mb-4">
              Vos données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Données de contact : pendant la durée de la relation commerciale + 3 ans</li>
              <li>Données contractuelles : durée du contrat + obligations légales de conservation</li>
              <li>Données de prospection : 3 ans maximum à compter du dernier contact</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">7. Destinataires des données</h2>
            <p className="text-muted-foreground mb-4">
              Vos données personnelles sont destinées uniquement à :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Allix Dolou et son équipe (si applicable)</li>
              <li>Les prestataires techniques nécessaires au fonctionnement du site (hébergeur)</li>
              <li>Les autorités compétentes sur demande légale</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Vos données ne sont jamais vendues, louées ou échangées à des tiers à des fins commerciales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">8. Vos droits</h2>
            <p className="text-muted-foreground mb-4">
              Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</li>
              <li><strong>Droit de rectification :</strong> faire corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Pour exercer ces droits, contactez-nous à : <strong>allix.dolou@gmail.com</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">9. Sécurité des données</h2>
            <p className="text-muted-foreground mb-4">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données 
              personnelles contre la destruction, la perte, l'altération, la divulgation non autorisée ou l'accès non autorisé.
            </p>
            <p className="text-muted-foreground">
              Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée. 
              Nous ne pouvons garantir une sécurité absolue.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">10. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Ce site utilise uniquement des cookies techniques essentiels au fonctionnement du site. 
              Aucun cookie de tracking ou publicitaire n'est utilisé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">11. Modifications</h2>
            <p className="text-muted-foreground">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
              Toute modification sera publiée sur cette page avec une date de mise à jour.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">12. Contact et réclamation</h2>
            <p className="text-muted-foreground mb-4">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter à : <strong>allix.dolou@gmail.com</strong>
            </p>
            <p className="text-muted-foreground">
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation 
              auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Dernière mise à jour : 27 février 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}