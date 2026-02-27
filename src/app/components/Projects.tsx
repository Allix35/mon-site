import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'E-commerce Mode',
    category: 'E-commerce',
    description: 'Boutique en ligne optimisée avec système de paiement sécurisé et gestion de stock',
    image: 'https://images.unsplash.com/photo-1612703769284-0103b1e5ef70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZS1jb21tZXJjZSUyMG9ubGluZSUyMHNob3B8ZW58MXx8fHwxNzcwNjUxMjE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['WordPress', 'WooCommerce', 'SEO'],
    color: 'from-primary/20 to-secondary/20',
  },
  {
    id: 2,
    title: 'Portfolio Créatif',
    category: 'Portfolio',
    description: 'Site portfolio moderne avec animations fluides et système de gestion de contenu',
    image: 'https://images.unsplash.com/photo-1720293049481-c0299876d90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzcwNTU0ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Motion', 'Performance'],
    color: 'from-secondary/20 to-accent/30',
  },
  {
    id: 3,
    title: 'Site Corporate',
    category: 'Entreprise',
    description: 'Site institutionnel multilingue avec blog intégré et espace presse',
    image: 'https://images.unsplash.com/photo-1603201667493-4c2696de0b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdlYnNpdGV8ZW58MXx8fHwxNzcwNjUxMjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['WordPress', 'Multilangue', 'Accessibilité'],
    color: 'from-accent/20 to-primary/10',
  },
  {
    id: 4,
    title: 'Landing Page SaaS',
    category: 'Landing Page',
    description: 'Page de conversion haute performance avec A/B testing et analytics avancés',
    image: 'https://images.unsplash.com/photo-1706700392626-5279fb90ae73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wfGVufDF8fHx8MTc3MDU2ODkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Tailwind', 'Conversion'],
    color: 'from-primary/10 to-secondary/10',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer"
        whileHover={{ y: -12 }}
        transition={{ duration: 0.3 }}
      >
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
            animate={{ opacity: isHovered ? 0.85 : 0.3 }}
            transition={{ duration: 0.3 }}
          />

          {/* Hover content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-4">
              <motion.button
                className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-sm text-primary">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl mb-2 text-foreground">{project.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-accent text-accent-foreground rounded-lg text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom line animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="realisations" className="py-24 px-6 bg-background">
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
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-[var(--yellow)] text-sm tracking-widest">MES RÉALISATIONS</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-6 text-foreground">
            Projets qui ont fait
            <br />
            <span className="text-primary">leur preuve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une sélection de sites web créés pour des clients satisfaits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Voir tous les projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}