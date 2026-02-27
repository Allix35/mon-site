import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Offers } from '../components/Offers';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Offers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
