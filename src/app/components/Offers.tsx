import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Check, Search, FileText, Code, Shield, ChevronDown } from 'lucide-react';

const offers = [
  {
    name: 'Audit Flash',
    price: '350€',
    priceLabel: 'HT - tarif fixe',
    icon: Search,
    tagline: 'Idéal pour savoir exactement où en est votre site avant d\'investir',
    features: [
      'Analyse SEO technique : balises, structure, mots-clés',
      'Score Lighthouse commenté (performance, accessibilité)',
      'Audit UX : parcours utilisateur, CTA, lisibilité',
      'Rapport PDF actionnable avec priorités claires',
      '3 recommandations concrètes à appliquer immédiatement',
    ],
    details: [
      { label: 'Délai', value: '48h' },
      { label: 'Format', value: 'Rapport PDF' },
      { label: 'Échanges', value: '1 appel 30 min inclus' },
      { label: 'Secteurs', value: 'PME, tourisme, e-commerce' },
    ],
    bonus: 'Si vous me confiez ensuite une création ou une maintenance, les 350€ sont déduits de la prestation.',
  },
  {
    name: 'Landing Page',
    price: '900€',
    priceLabel: 'HT - à partir de',
    icon: FileText,
    tagline: 'Pour les guides, artisans et PME qui veulent une présence en ligne rapide et efficace',
    features: [
      '1 page unique optimisée',
      'CTA clairs, hiérarchie visuelle soignée',
      'SEO : balises Hn, meta, sémantique HTML correcte',
      'Score Lighthouse 85+ visé',
      'Mobile-first - Responsive complet',
    ],
    details: [
      { label: 'Délai', value: '7 à 12 jours' },
      { label: 'Révisions', value: '2 incluses' },
      { label: 'Support bugs', value: '30 jours' },
      { label: 'Livrable', value: 'Site en ligne' },
    ],
  },
  {
    name: 'Site WordPress',
    price: '1 400€',
    priceLabel: 'HT - à partir de',
    icon: FileText,
    tagline: 'Pour les PME locales et acteurs du tourisme qui veulent gérer leur contenu en autonomie',
    features: [
      '4 à 5 pages + Blog optionnel',
      'WordPress : modifiez vos contenus seul, sans technique',
      'Parcours clair, formulaire de contact intégré',
      'SEO local : mots-clés, Yoast configuré',
      'Core Web Vitals corrects, score 88+ visé',
      'Conseils hébergement personnalisés',
    ],
    details: [
      { label: 'Délai', value: '3 à 4 semaines' },
      { label: 'Révisions', value: '3 incluses' },
      { label: 'Support bugs', value: '60 jours' },
      { label: 'Livrable', value: 'Site WordPress en ligne' },
    ],
    bonus: 'Appel découverte 30 min offert + formation rapide pour prendre en main votre site.',
  },
  {
    name: 'Site Sur-Mesure React / Next.js',
    price: '2 200€',
    priceLabel: 'HT - à partir de',
    icon: Code,
    tagline: 'Pour les startups et entreprises qui veulent un site ultra-rapide, unique et évolutif',
    features: [
      'Application sur-mesure, impossible à copier',
      'Composants réutilisables qui s\'adaptent à votre croissance',
      'Tunnel de conversion, animations, micro-interactions',
      'SEO avancé (rendu serveur Next.js, metadata complète)',
      'Optimisation images, lazy loading, score 90+ visé',
      'Code propre, commenté, facilement maintenable',
    ],
    details: [
      { label: 'Délai', value: '4 à 6 semaines' },
      { label: 'Révisions', value: '3 incluses' },
      { label: 'Support bugs', value: '90 jours' },
      { label: 'Livrable', value: 'Code source + déploiement' },
    ],
  },
  {
    name: 'Pack Sérénité',
    price: '300€',
    priceLabel: 'HT/mois - à partir de',
    icon: Shield,
    tagline: 'Votre site évolue, votre activité aussi – je m\'occupe de tout le reste',
    sections: [
      {
        title: 'WORDPRESS',
        features: [
          'Mises à jour WordPress, plugins, thème',
          'Ajout et mise en forme de contenus / articles',
          'Modifications techniques et visuelles mineures',
          'Suivi et rapport SEO mensuel simplifié',
          'Corrections de bugs prioritaires',
        ],
      },
      {
        title: 'SHOPIFY',
        features: [
          'Intégration et mise à jour des fiches produits',
          'Gestion des collections, tags et métadonnées',
          'Modifications du thème (visuel, sections, mise en page)',
          'SEO : balises produits, textes alternatifs, structure',
          'Mise en place et suivi d\'actions marketing (promotions, bannières, emails)',
          'Installation et configuration d\'apps Shopify',
        ],
      },
    ],
    modalites: [
      { label: 'Engagement', value: '3 mois minimum' },
      { label: 'Compatible', value: 'Shopify & WordPress' },
      { label: 'Rapport', value: 'Mensuel par email' },
    ],
    ideal: 'boutiques Shopify qui ont besoin d\'un œil technique et marketing régulier, et PME WordPress qui veulent déléguer la gestion de leur site.',
  },
];

function OfferAccordion({ offer, index }: { offer: typeof offers[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = offer.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutCubic for smooth animation
      }}
      className="bg-card rounded-2xl border-2 border-warm-light hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between gap-4 text-left hover:bg-warm-light/20 transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-md flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-foreground mb-1">{offer.name}</h3>
            <p className="text-sm text-muted-foreground truncate">{offer.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{offer.price}</div>
            <div className="text-xs text-muted-foreground">{offer.priceLabel}</div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-muted-foreground"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </button>

      {/* Expandable content */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94] // easeOutCubic for smooth expansion
        }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-border">
          <div className="pt-6 space-y-6">
            {/* Features */}
            {offer.features && (
              <div>
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Prestations incluses
                </h4>
                <ul className="space-y-2">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections (for Pack Sérénité) */}
            {offer.sections && (
              <div className="space-y-4">
                {offer.sections.map((section, sIdx) => (
                  <div key={sIdx} className="bg-warm-light/30 rounded-xl p-4">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Details */}
            {offer.details && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {offer.details.map((detail, i) => (
                  <div key={i} className="bg-warm-light/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">{detail.label}</div>
                    <div className="text-sm text-foreground font-medium">{detail.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Modalités */}
            {offer.modalites && (
              <div className="grid grid-cols-3 gap-3">
                {offer.modalites.map((modalite, i) => (
                  <div key={i} className="bg-warm-light/50 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground mb-1">{modalite.label}</div>
                    <div className="text-sm text-foreground font-medium">{modalite.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Bonus */}
            {offer.bonus && (
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm">
                  <span className="text-primary font-semibold">💡 Bon à savoir : </span>
                  <span className="text-foreground">{offer.bonus}</span>
                </p>
              </div>
            )}

            {/* Ideal */}
            {offer.ideal && (
              <div className="bg-gradient-to-r from-secondary/10 to-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm">
                  <span className="text-primary font-semibold">🎯 Idéal pour : </span>
                  <span className="text-foreground">{offer.ideal}</span>
                </p>
              </div>
            )}

            {/* CTA */}
            <motion.button
              className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choisir cette offre
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Offers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="offres" className="py-20 px-6 bg-gradient-to-b from-background to-warm-light/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Mes offres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins, de l'audit à la création complète
          </p>
        </motion.div>

        <div className="space-y-4">
          {offers.map((offer, index) => (
            <OfferAccordion key={offer.name} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}