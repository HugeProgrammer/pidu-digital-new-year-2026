
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import CEOSection from './components/CEOSection';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import Fireworks from './components/Fireworks';
import MusicPlayer from './components/MusicPlayer';
import GlitterLayer from './components/GlitterLayer';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Setup Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative min-h-screen bg-[#050505] transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Visual background layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Fireworks />
        <GlitterLayer />
      </div>

      {/* Global Music Controller */}
      <MusicPlayer />

      <main className="relative z-10">
        <Hero />
        
        <div className="max-w-6xl mx-auto px-4 space-y-48 py-20 pb-40">
          <div className="reveal">
            <CEOSection />
          </div>
          <div className="reveal">
            <Wishes />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default App;
