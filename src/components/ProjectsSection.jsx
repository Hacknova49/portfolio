import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Filter, Star } from 'lucide-react';
import TiltedCard from '../TiltedCard/TiltedCard';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Resume Maker',
      description: 'A comprehensive resume builder application that allows users to create professional resumes with customizable templates and real-time preview.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Hacknova49/Resume-Maker',
      demo: 'https://github.com/Hacknova49/Resume-Maker',
      featured: true
    },
    {
      id: 2,
      title: 'Language Translator',
      description: 'A multi-language translation application that supports real-time text translation between multiple languages with a user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['React', 'JavaScript', 'API Integration', 'CSS'],
      github: 'https://github.com/Hacknova49/Language-Translator',
      demo: 'https://github.com/Hacknova49/Language-Translator',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React, Vite, and Tailwind CSS. Showcases my projects, skills, and contact information in a modern, interactive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'frontend',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Hacknova49/portfolio',
      demo: 'https://github.com/Hacknova49/portfolio',
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'algorithms', name: 'Algorithms' },
    { id: 'development', name: 'Development' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`${
                filter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'border-gray-600 text-gray-300 hover:bg-gray-800'
              } transition-all duration-300`}
            >
              <Filter className="mr-2" size={16} />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <TiltedCard
                      imageSrc={project.image}
                      altText={project.title}
                      captionText={project.title}
                      containerHeight="250px"
                      containerWidth="100%"
                      imageHeight="250px"
                      imageWidth="100%"
                      rotateAmplitude={8}
                      scaleOnHover={1.05}
                      showMobileWarning={false}
                      showTooltip={false}
                    />
                    
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2" size={16} />
                        Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Star className="mr-2" size={16} />
                        Star
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;