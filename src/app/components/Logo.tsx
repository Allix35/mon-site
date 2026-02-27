import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <motion.div
      className={`flex flex-col ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="font-mono tracking-tight">
        <span className="text-foreground text-2xl">allix</span>
        <span className="text-primary text-2xl">.dolou()</span>
      </div>
      <span className="text-muted-foreground text-sm tracking-wide mt-1">
        Développeuse web
      </span>
    </motion.div>
  );
}

// Logo showcase component for testing
export function LogoShowcase() {
  return (
    <div className="fixed bottom-6 right-6 bg-white p-6 rounded-2xl shadow-2xl border border-border z-50">
      <Logo />
    </div>
  );
}