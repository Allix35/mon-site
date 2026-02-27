import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Github, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import profileImg from 'figma:asset/b4807f414c56ada8c8c61dfa17bc7e38fa5562ad.png';
import argentBankImg from 'figma:asset/3f06a5c552ddc2f6b3d200dfd70644624b061f5a.png';
import kasaImg from 'figma:asset/9b2a536b45689f587e9d92acfd184f267ca5258e.png';
import sophieBluelImg from 'figma:asset/1c3d395517b20cf45fdb9bdd588b20862ede94d8.png';
import bookiImg from 'figma:asset/ec928febefc5378ad59c8ca77096f71536456294.png';
import ohmyfoodImg from 'figma:asset/1ebe4c946ff468970dd8e6d521508e1f6408edbd.png';

const projects = [
  {
    title: "Argent Bank",
    description: "Application bancaire fullstack développée avec React, Redux et Sass. L'authentification est sécurisée via JWT.",
    tech: ["React", "Redux", "Node.js", "Swagger"],
    image: argentBankImg,
  },
  {
    title: "Kasa",
    description: "Application web de location immobilière développée avec React, utilisant React Router pour la navigation et un design responsive basé sur SASS.",
    tech: ["React", "SASS", "JavaScript"],
    image: kasaImg,
  },
  {
    title: "OhMyFood",
    description: "Site de réservation de menus de restaurants gastronomiques avec animations CSS3 et design mobile-first.",
    tech: ["HTML5", "CSS3", "SASS"],
    image: ohmyfoodImg,
  },
  {
    title: "Sophie Bluel",
    description: "Site web responsive de présentation pour une architecte d'intérieur, développé en JavaScript avec gestion dynamique des contenus via API REST.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    image: sophieBluelImg,
  },
  {
    title: "Booki",
    description: "Refonte d'une page d'agence de voyage avec HTML5 et CSS3, en respectant la maquette Figma et le responsive design.",
    tech: ["HTML5", "CSS3"],
    image: bookiImg,
    link: "https://allix35.github.io/Booki/",
  },
];

const skills = [
  { name: "HTML / CSS", percent: 80, color: "#FF9A76" },
  { name: "SASS", percent: 80, color: "#FF9A76" },
  { name: "React", percent: 60, color: "#A8D8EA" },
  { name: "JavaScript", percent: 60, color: "#A8D8EA" },
  { name: "Node.js / npm", percent: 60, color: "#A8D8EA" },
  { name: "Git / GitHub", percent: 70, color: "#FFD98E" },
  { name: "Figma", percent: 80, color: "#FF9A76" },
  { name: "Redux", percent: 40, color: "#A8D8EA" },
];

function PortfolioHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link to="/">
          <motion.button
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </motion.button>
        </Link>
      </div>

      {/* Floating decoration */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-primary shadow-2xl">
              <img
                src={profileImg}
                alt="Allix Dolou"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <motion.h1
              className="text-5xl md:text-6xl mb-6 text-foreground"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Allix Dolou
            </motion.h1>
            
            <p className="text-2xl text-muted-foreground mb-6">Développeuse Web</p>
            
            <p className="text-base leading-relaxed text-foreground mb-8 max-w-2xl">
              Issue d'un parcours en communication et webmarketing, j'ai développé une sensibilité
              pour la stratégie digitale et l'expérience utilisateur. Après une reconversion en
              développement web chez OpenClassrooms, je conçois aujourd'hui des interfaces modernes,
              performantes et centrées sur l'utilisateur.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-secondary to-primary text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Me contacter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-warm-light/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-4xl md:text-5xl text-center mb-16 text-foreground"
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-medium text-foreground">{skill.name}</span>
                <span className="text-lg font-semibold text-primary">{skill.percent}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative overflow-hidden"
                  style={{
                    background: `linear-gradient(to right, ${skill.color}, #FFAB91, #FF7043)`,
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl mb-3 text-foreground">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            Voir le site
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-warm-light/30 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-foreground mb-4 relative inline-block">
            Mes Réalisations
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-warm-medium rounded-full" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioFooter() {
  return (
    <footer id="contact" className="py-12 px-6 bg-gradient-to-br from-foreground to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-8">
          <motion.a
            href="mailto:allix.dolou@gmail.com"
            whileHover={{ scale: 1.1, y: -4 }}
            className="w-16 h-16 bg-white/5 hover:bg-primary/20 rounded-2xl flex items-center justify-center text-white hover:text-primary transition-all duration-300"
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://github.com/Allix35"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -4 }}
            className="w-16 h-16 bg-white/5 hover:bg-primary/20 rounded-2xl flex items-center justify-center text-white hover:text-primary transition-all duration-300"
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/allix-dolou-17488910a/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -4 }}
            className="w-16 h-16 bg-white/5 hover:bg-primary/20 rounded-2xl flex items-center justify-center text-white hover:text-primary transition-all duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
        </div>
        <p className="text-muted-foreground">© 2025 Allix Dolou. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <PortfolioHero />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}