import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function LegalNotice() {
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

        <h1 className="text-4xl mb-8 text-foreground">Mentions légales</h1>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 1 — Éditeur du site</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est édité par :
            </p>
            <ul className="text-muted-foreground space-y-1 list-none">
              <li><strong>Allix Dolou</strong>, Entrepreneur Individuel</li>
              <li>SIREN : 988 132 262</li>
              <li>SIRET : 98813226200011</li>
              <li>Code NAF : 6201Z — Programmation informatique</li>
              <li>RCS Marseille — Immatriculé le 17/06/2025</li>
              <li>TVA non applicable, article 293B du CGI</li>
              <li>Adresse : <em>[258 boulevard Romain Rolland 13009 Marseille]</em></li>
              <li>Email : allix.dolou@gmail.com</li>
              <li>Téléphone : <em>[0671820112]</em></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 2 — Directeur de la publication</h2>
            <p className="text-muted-foreground leading-relaxed">
              Allix Dolou, en qualité d'Entrepreneur Individuel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 3 — Hébergement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Le site est hébergé par :
            </p>
            <ul className="text-muted-foreground space-y-1 list-none">
              <li>Raison sociale : Vercel Inc.</li>
              <li>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
              <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 4 — Propriété intellectuelle</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, code) sont la propriété
              exclusive d'Allix Dolou, sauf mentions contraires. Toute reproduction, représentation ou diffusion, totale
              ou partielle, sans autorisation préalable et écrite est interdite et constituerait une contrefaçon sanctionnée
              par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 5 — Responsabilité</h2>
            <p className="text-muted-foreground leading-relaxed">
              Allix Dolou s'efforce de maintenir les informations publiées sur ce site aussi précises et à jour que
              possible. Toutefois, la responsabilité du site ne peut être engagée en cas d'omission, d'inexactitude ou
              de lacune dans les informations disponibles. Les liens hypertextes présents sur le site peuvent renvoyer
              vers des sites tiers. Allix Dolou ne saurait être responsable du contenu de ces sites externes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-foreground">Article 6 — Droit applicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux
              compétents seront ceux du ressort de Marseille.
            </p>
          </section>

          <footer className="mt-12 pt-6 border-t border-border text-sm text-muted-foreground italic">
            Mentions légales version 1.0 — Juin 2025. Dernière mise à jour : Février 2025.
          </footer>
        </div>
      </div>
    </div>
  );
}