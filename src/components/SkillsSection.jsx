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
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'JSX', 'Markdown'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Data Science & ML',
      skills: ['Python', 'Statistics', 'Data Analysis', 'Machine Learning', 'Pandas', 'NumPy'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Smartphone,
      title: 'Development Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'npm', 'Package Management'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Cloud,
      title: 'Learning & Projects',
      skills: ['Personal Projects', 'Online Courses', 'Documentation', 'Tutorials', 'Practice'],
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Palette,
      title: 'Problem Solving',
      skills: ['Algorithms', 'Data Structures', 'Competitive Programming', 'Debugging', 'Logic'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JSON'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Academic Focus',
      skills: ['Computer Science', 'Mathematics', 'Statistics', 'Research', 'Analysis'],
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
            { number: '4+', label: 'Projects Built' },
            { number: '2', label: 'Years Learning' },
            { number: '15+', label: 'Technologies' },
            { number: '100%', label: 'Dedication' }
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