import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TextPressure from '../TextPressure/TextPressure';
import { Button } from './ui/button';
import { ArrowDown, Code, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="flex overflow-hidden relative justify-center items-center min-h-screen"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/40" />
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8"
      >
        {/* Main Title */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="flex justify-center items-center h-32 sm:h-48 md:h-64">
            <TextPressure
              text="HACKNOVA"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="white"
              minFontSize={40}
              className="text-responsive"
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h2 className="mb-4 text-xl font-light text-gray-300 sm:text-2xl md:text-3xl lg:text-4xl">
            Full Stack Developer & Creative Technologist
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
            Crafting digital experiences with cutting-edge technologies and innovative design. 
            Passionate about creating solutions that make a difference.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-4 justify-center items-center mb-12 sm:flex-row"
        >
          <Button
            size="lg"
            className="px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 transform hover:from-blue-700 hover:to-purple-700 hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code className="mr-2" size={20} />
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-white rounded-full border-white transition-all duration-300 transform hover:bg-white hover:text-black hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="mr-2" size={20} />
            Get In Touch
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer text-white/60"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="hidden mb-2 text-sm sm:block">Scroll Down</span>
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;