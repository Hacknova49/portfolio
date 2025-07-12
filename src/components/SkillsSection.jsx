import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import GitHubStats from './githubstats';
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'GraphQL', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase', 'Supabase', 'AWS S3'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android', 'PWA'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Netlify'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Palette,
      title: 'Design & UI/UX',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'Principle'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Tools & Frameworks',
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Storybook'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      skills: ['JWT', 'OAuth', 'Unit Testing', 'Integration Testing', 'Security Audits', 'OWASP'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs hover:bg-gray-600/50 transition-colors duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats Section */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            GitHub Statistics
          </h3>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GitHubStats />
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '4+', label: 'Years Experience' },
            { number: '20+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;