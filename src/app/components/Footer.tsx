import { Link } from 'react-router';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4 text-white">
              <div className="text-2xl font-mono">
                <span className="text-primary">allix.</span>
                <span className="text-white">dolou</span>
                <span className="text-primary">()</span>
              </div>
            </div>
            <p className="text-white/70">
              Développeuse web freelance spécialisée dans la création de sites modernes et performants.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#offres" className="text-white/70 hover:text-white transition-colors">
                  Mes offres
                </a>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-white/70 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-white/70 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-white/70 hover:text-white transition-colors">
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>© 2025 Allix Dolou - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}