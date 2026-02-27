import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Medal, Trophy, Award } from 'lucide-react';

const offers = [
  {
    id: 'starter',
    icon: Medal,
    name: 'STARTER',
    subtitle: 'Landing Page',
    price: 'À partir de 900€ HT',
    target: 'Indépendants · Lancement',
    tags: ['HTML/CSS', 'JS'],
    features: [
      { category: 'Structure', text: '1 page unique, sections pensées pour convaincre' },
      { category: 'UX', text: 'CTA clairs, hiérarchie visuelle soignée' },
      { category: 'SEO', text: 'Balises Hn, meta, bonne sémantique HTML' },
      { category: 'Perf', text: 'Score Lighthouse 85+ visé' },
      { category: 'Mobile-first', text: 'Responsive complet' },
    ],
    practicalInfo: {
      delay: '7-12 jours',
      revisions: '2 révisions',
      support: '30 jours',
      extra: 'Site en ligne',
    },
    highlight: false,
  },
  {
    id: 'essentiel',
    icon: Trophy,
    name: 'ESSENTIEL',
    subtitle: 'Site Vitrine PME',
    price: 'À partir de 1 400€ HT',
    target: 'PME · Artisans · Consultants · Petits commerces',
    tags: ['WordPress', 'HTML/CSS', 'JS'],
    features: [
      { category: 'Structure', text: '4-5 pages + Blog optionnel' },
      { category: 'Gestion', text: 'WordPress — modifiez vos contenus seul' },
      { category: 'UX', text: 'Parcours clair, formulaire de contact intégré' },
      { category: 'SEO', text: 'Pages optimisées mots-clés locaux, Yoast configuré' },
      { category: 'Perf', text: 'Core Web Vitals corrects, score 88+ visé' },
      { category: 'Bonus', text: 'Appel découverte 30 min + conseils hébergement' },
    ],
    practicalInfo: {
      delay: '3-4 semaines',
      revisions: '3 révisions',
      support: '60 jours',
      extra: 'Site WordPress en ligne',
    },
    highlight: true,
  },
  {
    id: 'pro',
    icon: Award,
    name: 'PRO',
    subtitle: 'Site React / Next.js',
    price: 'À partir de 2 200€ HT',
    target: 'Startups · Produits digitaux · Projets techniques',
    tags: ['React', 'Next.js', 'Tailwind'],
    features: [
      { category: 'Structure', text: 'App React/Next.js sur-mesure, composants réutilisables' },
      { category: 'UX', text: 'Tunnel de conversion, animations, micro-interactions' },
      { category: 'SEO', text: 'SSR/SSG Next.js, metadata avancée' },
      { category: 'Perf', text: 'Optimisation images, lazy loading, score 90+' },
      { category: 'Code', text: 'Propre, commenté, facilement maintenable' },
    ],
    practicalInfo: {
      delay: '4-6 semaines',
      revisions: '3 révisions',
      support: '90 jours',
      extra: 'Code source + déploiement',
    },
    highlight: false,
  },
];

function OfferCard({ offer, index }: { offer: typeof offers[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = offer.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="h-full"
    >
      <motion.div
        className={`relative h-full bg-card rounded-2xl p-8 border-2 transition-all duration-300 ${
          offer.highlight
            ? 'border-primary shadow-2xl scale-105'
            : 'border-border shadow-lg hover:border-primary/50'
        }`}
        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(232, 108, 61, 0.15)' }}
      >
        {offer.highlight && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--yellow)] text-[var(--secondary-foreground)] px-6 py-1.5 rounded-full">
            Plus populaire
          </div>
        )}

        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
              offer.highlight ? 'bg-primary' : 'bg-accent'
            }`}
            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className={`w-8 h-8 ${offer.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
          </motion.div>
          
          <h3 className="text-2xl mb-2 text-foreground">{offer.name}</h3>
          <p className="text-muted-foreground mb-4">{offer.target}</p>
          <div className="text-4xl text-primary mb-2">{offer.price}</div>
        </div>

        <div className="space-y-3">
          {offer.features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 text-left"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.15 + i * 0.05 }}
            >
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="text-foreground">
                  <strong>{feature.category}:</strong> {feature.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practical Info Cards */}
        <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 gap-3">
          <div className="bg-accent/30 rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Délais</div>
            <div className="text-sm text-foreground">{offer.practicalInfo.delay}</div>
          </div>
          <div className="bg-accent/30 rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Révisions</div>
            <div className="text-sm text-foreground">{offer.practicalInfo.revisions}</div>
          </div>
          <div className="bg-accent/30 rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Support & bugs</div>
            <div className="text-sm text-foreground">{offer.practicalInfo.support}</div>
          </div>
          <div className="bg-accent/30 rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">Livrable</div>
            <div className="text-sm text-foreground">{offer.practicalInfo.extra}</div>
          </div>
        </div>

        <motion.button
          className={`w-full mt-6 py-3 rounded-xl transition-colors ${
            offer.highlight
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'border-2 border-primary text-primary hover:bg-primary/5'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Choisir cette offre
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export function Offers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="offres" className="py-5 px-6 bg-warm-light/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-primary text-sm tracking-widest">MES OFFRES</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            Des formules adaptées
            <br />
            <span className="text-primary">à vos besoins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Du lancement rapide à la stratégie complète, choisissez la solution qui vous correspond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {offers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}