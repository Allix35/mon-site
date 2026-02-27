import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Zap, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Design moderne',
    description: 'Interfaces élégantes et épurées qui reflètent l\'identité de votre marque',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Sites ultra-rapides optimisés pour Google et l\'expérience utilisateur',
  },
  {
    icon: Target,
    title: 'Conversion',
    description: 'Chaque élément est pensé pour transformer vos visiteurs en clients',
  },
  {
    icon: Heart,
    title: 'Accompagnement',
    description: 'Un suivi personnalisé de la conception à la mise en ligne et au-delà',
  },
];

const stats = [
  { number: '50+', label: 'Projets réalisés' },
  { number: '98%', label: 'Clients satisfaits' },
  { number: '7j', label: 'Délai moyen' },
  { number: '100%', label: 'Passion' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="a-propos" className="py-24 px-6 bg-gradient-to-br from-warm-light/30 via-background to-accent/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-[var(--yellow-light)] text-[var(--secondary-foreground)] px-4 py-2 rounded-full text-sm tracking-widest">À PROPOS</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            Créer des sites qui
            <br />
            <span className="text-primary">font la différence</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative bg-card p-8 rounded-2xl shadow-xl border border-border">
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  <strong className="text-primary">Passionnée par le web depuis plus de 5 ans</strong>, je combine expertise technique et sens du design pour créer des sites web qui ne sont pas seulement beaux, mais aussi performants et stratégiques.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Mon approche ? Comprendre vos objectifs business, votre audience et créer une solution web sur-mesure qui génère des résultats concrets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Que vous soyez entrepreneur, PME ou grande entreprise, je m'engage à livrer un site qui dépasse vos attentes, dans les délais et avec un suivi personnalisé.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all"
                  whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(232, 108, 61, 0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg mb-2 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}