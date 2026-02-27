import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function PrivacyPolicy() {
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

        <h1 className="text-4xl mb-8 text-foreground">Politique de confidentialité</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <p className="text-muted-foreground leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi
            Informatique et Libertés, Allix Dolou s'engage à protéger les données personnelles des utilisateurs de
            son site.
          </p>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 1 — Responsable du traitement</h2>
            <ul className="text-muted-foreground space-y-1 list-none">
              <li><strong>Allix Dolou</strong>, Entrepreneur Individuel</li>
              <li>SIRET : 98813226200011 — RCS Marseille</li>
              <li>Email : allix.dolou@gmail.com</li>
              <li>Adresse : <em>[258 boulevard Romain Rolland 13009 Marseille]</em></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 2 — Données collectées</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Les données collectées via le site sont les suivantes :
            </p>
            
            <div className="mb-4">
              <h3 className="text-xl mb-2 text-foreground">Via le formulaire de contact :</h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (si renseigné)</li>
                <li>Contenu du message</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-2 text-foreground">Via la navigation (données techniques) :</h3>
              <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                <li>Adresse IP</li>
                <li>Type de navigateur et appareil</li>
                <li>Pages visitées et durée de visite (via cookies analytiques, si activés)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 3 — Finalités du traitement</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Les données sont collectées pour les finalités suivantes :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-3">
              <li>Répondre aux demandes de contact et de devis</li>
              <li>Assurer la relation commerciale et la facturation</li>
              <li>Améliorer l'expérience utilisateur du site (analytics)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Aucune donnée n'est utilisée à des fins de prospection commerciale non sollicitée, ni cédée à des tiers
              sans consentement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 4 — Base légale</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Les traitements reposent sur les bases légales suivantes :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li><strong>Exécution d'un contrat :</strong> traitement des demandes de devis et gestion de la relation client</li>
              <li><strong>Intérêt légitime :</strong> amélioration du site et sécurité</li>
              <li><strong>Consentement :</strong> utilisation de cookies analytiques (si applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 5 — Durée de conservation</h2>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside">
              <li><strong>Données de contact et devis :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale comptable)</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 6 — Vos droits</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="text-muted-foreground space-y-1 list-disc list-inside mb-3">
              <li><strong>Droit d'accès :</strong> obtenir une copie des données vous concernant</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit d'opposition :</strong> vous opposer à un traitement</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format lisible</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Pour exercer ces droits, contactez : <strong>allix.dolou@gmail.com</strong>. En cas de désaccord, vous pouvez saisir la CNIL
              (www.cnil.fr).
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 7 — Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement, et des cookies
              analytiques pour mesurer l'audience (ex. Google Analytics ou Matomo). Les cookies analytiques ne sont
              déposés qu'avec votre consentement, recueilli via une bannière lors de votre première visite. Vous
              pouvez paramétrer ou refuser les cookies à tout moment dans les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 8 — Sécurité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Allix Dolou met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos
              données contre tout accès non autorisé, perte, altération ou divulgation. Le site est servi en HTTPS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 9 — Mise à jour</h2>
            <p className="text-muted-foreground leading-relaxed">
              La présente politique de confidentialité peut être mise à jour à tout moment. La version en vigueur est
              celle publiée sur le site à la date de votre visite.
            </p>
          </section>

          <footer className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground italic">
            Politique de confidentialité version 1.0 — Juin 2025. Dernière mise à jour : Février 2025.
          </footer>
        </div>
      </div>
    </div>
  );
}
