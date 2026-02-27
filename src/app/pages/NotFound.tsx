import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl text-primary mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl text-foreground mb-6">Page non trouvée</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </motion.button>
            </Link>
            
            <Link to="/portfolio">
              <motion.button
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-5 h-5" />
                Voir le portfolio
              </motion.button>
            </Link>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </div>
  );
}