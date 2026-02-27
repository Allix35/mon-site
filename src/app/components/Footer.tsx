import { motion } from 'motion/react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';
import { Logo } from './Logo';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:allix.dolou@gmail.com', label: 'Email' },
];

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Offres', href: '#offres' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Création de site', href: '#offres' },
      { name: 'Refonte', href: '#contact' },
      { name: 'Maintenance', href: '#contact' },
      { name: 'Consulting', href: '#contact' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { name: 'Mentions légales', href: '/mentions-legales' },
      { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
      { name: 'CGV', href: '/cgv' },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo className="[&_span]:text-background [&_.text-primary]:text-primary [&_.text-muted-foreground]:text-background/60" />
            </div>
            <p className="text-background/80 mb-6">
              Créons ensemble le site web qui fera grandir votre activité.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg mb-4 text-background">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors inline-block"
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-background/20 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom - Copyright only */}
        <div className="text-center text-background/60">
          <p>© {currentYear} Allix Dolou - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}