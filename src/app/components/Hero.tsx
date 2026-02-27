import { motion } from 'motion/react';
import { ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Subtle animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl md:text-7xl mb-8 text-foreground"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sites web modernes
          <br />
          <span className="text-primary">optimisés & performants</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Je crée des expériences web qui allient design élégant, 
          performances techniques et conversion optimale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={handleScrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              Démarrer un projet
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
          </motion.button>

          <motion.a
            href="#offres"
            className="px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Découvrir mes offres
          </motion.a>
        </motion.div>
        
        {/* Portfolio Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8"
        >
          <Link to="/portfolio">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-5 h-5" />
              Voir mon portfolio de projets
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}