import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    offer: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Créer le mailto avec les données du formulaire
    const subject = encodeURIComponent(`Contact de ${formData.name} - ${formData.offer || 'Demande de renseignement'}`);
    const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\nOffre concernée: ${formData.offer || 'Non spécifiée'}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:allix.dolou@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-warm-light/30 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-muted-foreground">
            Discutons de votre projet et trouvons la meilleure solution
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="offer" className="block text-sm font-medium text-foreground mb-2">
                Offre concernée <span className="text-red-500">*</span>
              </label>
              <select
                id="offer"
                name="offer"
                value={formData.offer}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Sélectionnez une offre</option>
                <option value="Audit Flash - 350€ HT">Audit Flash - 350€ HT</option>
                <option value="Landing Page - à partir de 900€ HT">Landing Page - à partir de 900€ HT</option>
                <option value="Site WordPress - à partir de 1 400€ HT">Site WordPress - à partir de 1 400€ HT</option>
                <option value="Site Sur-Mesure React/Next.js - à partir de 2 200€ HT">Site Sur-Mesure React/Next.js - à partir de 2 200€ HT</option>
                <option value="Pack Sérénité - à partir de 300€/mois HT">Pack Sérénité - à partir de 300€/mois HT</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Parlez-moi de votre projet..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              Envoyer le message
            </motion.button>
          </form>

          <div className="border-t border-border pt-8 mt-8">
            <h3 className="text-xl text-foreground mb-4 text-center">Ou contactez-moi directement</h3>
            <div className="flex flex-col items-center gap-4 mb-6">
              <a
                href="mailto:allix.dolou@gmail.com"
                className="text-primary hover:underline text-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                allix.dolou@gmail.com
              </a>
            </div>
            
            <h3 className="text-xl text-foreground mb-4 text-center">Retrouvez-moi sur</h3>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/Allix35"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-foreground/5 hover:bg-primary/10 rounded-xl flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/allix-dolou-17488910a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-foreground/5 hover:bg-primary/10 rounded-xl flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </motion.a>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-6 mt-8">
            <p className="text-center text-foreground">
              <span className="block text-lg mb-2">💡 Prêt(e) à démarrer ?</span>
              Je vous réponds sous 24h !
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}