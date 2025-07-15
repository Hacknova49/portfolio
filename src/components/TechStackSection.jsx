import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStackSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const techStack = [
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E'
    },
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      color: '#E34F26'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      color: '#1572B6'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB'
    },
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    },
    {
      name: 'MongoDB',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248'
    },
    {
      name: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      color: '#181717'
    },
    {
      name: 'VS Code',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: '#007ACC'
    },
    {
      name: 'Vite',
      image: 'https://vitejs.dev/logo.svg',
      color: '#646CFF'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      color: '#06B6D4'
    },
    {
      name: 'npm',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      color: '#CB3837'
    },
    {
      name: 'Express.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      color: '#000000'
    },
    {
      name: 'Pandas',
      image: 'https://pandas.pydata.org/static/img/pandas_mark.svg',
      color: '#130654'
    },
    {
      name: 'NumPy',
      image: 'https://numpy.org/images/logo.svg',
      color: '#4DABCF'
    }
  ];

  // Duplicate the array to create seamless scrolling
  const duplicatedTechStack = [...techStack, ...techStack];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="techstack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life and build amazing applications.
          </p>
        </motion.div>

        {/* Rolling Gallery Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900/30 to-transparent z-10 pointer-events-none" />
          
          {/* Rolling Gallery */}
          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: [0, -50 * techStack.length]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0 group"
              >
                <div className="relative">
                  {/* Tech Logo Card */}
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                      style={{
                        filter: `drop-shadow(0 0 8px ${tech.color}40)`
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 bg-gray-600 rounded flex items-center justify-center text-white text-xs font-bold"
                      style={{ display: 'none' }}
                    >
                      {tech.name}
                    </div>
                  </div>
                  
                  {/* Tech Name */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20"
        >
          {[
            { number: '16', label: 'Technologies' },
            { number: '6', label: 'Categories' },
            { number: '24/7', label: 'Learning' }
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

        {/* Categories Legend */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Categories</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Frontend', 'Backend', 'Programming', 'Data Science', 'Tools', 'Build Tools'].map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-gray-600/50 transition-colors duration-200"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStackSection; 