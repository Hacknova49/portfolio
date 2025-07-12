import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Beams from './Beams/Beams';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Preload critical resources
    const preloadImages = [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      // Add more critical images here
    ];

    Promise.all(
      preloadImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      })
    ).finally(() => {
      // Minimum loading time for better UX
      setTimeout(() => {
        // Loading is handled by LoadingScreen component
      }, 2000);
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="overflow-x-hidden min-h-screen text-white bg-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="loading"
            onComplete={handleLoadingComplete}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Beams Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <Beams
                beamWidth={2}
                beamHeight={15}


                beamNumber={12}
                lightColor="#ffffff"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
              />
            </div>

            {/* Overlay for better content readability */}
            <div className="fixed inset-0 z-[1] bg-black/60 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10">
              <Navigation />

              <main>
                <HeroSection />
                <AboutSection />
                <TechStackSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
              </main>

              <Footer />
            </div>

            {/* Scroll Progress Indicator */}
            <motion.div
              className="fixed top-0 right-0 left-0 z-50 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
              style={{ scaleX: scrollYProgress }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;