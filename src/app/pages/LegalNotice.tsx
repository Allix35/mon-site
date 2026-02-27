import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function LegalNotice() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <button className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </button>
        </Link>

        <h1 className="text-4xl md:text-5xl text-foreground mb-8">Mentions légales</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">1. Informations légales</h2>
            <p className="text-muted-foreground mb-4">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, 
              il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
            </p>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-foreground mb-2"><strong>Éditeur du site :</strong></p>
              <p className="text-muted-foreground">Allix Dolou</p>
              <p className="text-muted-foreground">Entrepreneur Individuel</p>
              <p className="text-muted-foreground">SIRET : 98813226200011</p>
              <p className="text-muted-foreground">RCS Marseille</p>
              <p className="text-muted-foreground">Email : allix.dolou@gmail.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">2. Hébergement</h2>
            <div className="bg-card p-6 rounded-xl border border-border">
              <p className="text-foreground mb-2"><strong>Hébergeur :</strong></p>
              <p className="text-muted-foreground">Vercel Inc.</p>
              <p className="text-muted-foreground">340 S Lemon Ave #4133</p>
              <p className="text-muted-foreground">Walnut, CA 91789, USA</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">3. Propriété intellectuelle</h2>
            <p className="text-muted-foreground mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="text-muted-foreground">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
              sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">4. Responsabilité</h2>
            <p className="text-muted-foreground mb-4">
              Les informations contenues sur ce site sont aussi précises que possibles et le site est périodiquement remis à jour, 
              mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
            </p>
            <p className="text-muted-foreground">
              Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email 
              à l'adresse allix.dolou@gmail.com, en décrivant le problème de la manière la plus précise possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">5. Liens hypertextes</h2>
            <p className="text-muted-foreground mb-4">
              Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
              Les liens vers ces autres ressources vous font quitter le site.
            </p>
            <p className="text-muted-foreground">
              Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l'éditeur. 
              Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl text-foreground mb-4">6. Protection des données personnelles</h2>
            <p className="text-muted-foreground mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
              de rectification et de suppression des données vous concernant.
            </p>
            <p className="text-muted-foreground">
              Pour exercer ce droit, vous pouvez nous contacter par email à l'adresse : allix.dolou@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-foreground mb-4">7. Droit applicable</h2>
            <p className="text-muted-foreground">
              Tout litige en relation avec l'utilisation du site est soumis au droit français. 
              L'utilisateur ainsi que l'éditeur acceptent de se soumettre à la compétence exclusive des tribunaux français.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}