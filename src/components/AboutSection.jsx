import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import TiltedCard from '../TiltedCard/TiltedCard';
import img1 from '../img/img1.JPG';
import { User, Briefcase, GraduationCap, Heart } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 65 },
  ];

  const experiences = [
    {
      title: 'College Student',
      company: 'Computer Science Program',
      period: '2024 - Present',
      description: 'Studying computer science fundamentals, algorithms, data structures, and programming languages. Participating in coding competitions and hackathons.'
    },
    {
      title: 'Student Developer',
      company: 'Personal Projects & Learning',
      period: '2023 - Present',
      description: 'Exploring web development, building projects with React, JavaScript, and Python. Learning data science fundamentals and machine learning concepts.'
    },
    {
      title: 'Beginner Programmer',
      company: 'Self-Taught',
      period: '2019 - Present',
      description: 'Started learning programming fundamentals through online courses and tutorials. Building basic applications and learning core programming concepts.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <div className="flex justify-center">
              <TiltedCard
                imageSrc={img1}
                altText="Swagata Mandal"
                captionText="Swagata Mandal"
                containerHeight="400px"
                containerWidth="350px"
                imageHeight="400px"
                imageWidth="350px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="mr-2" size={24} />
                  Personal Info
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  I'm a passionate second-year college student exploring various technologies and programming languages. 
                  I love experimenting with different tools and frameworks, and my ultimate goal is to become a data scientist. 
                  I'm constantly learning and building projects to expand my skills.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Location:</strong> India
                  </div>
                  <div>
                    <strong>Education:</strong> Second Year Student
                  </div>
                  <div>
                    <strong>Email:</strong> swagatamandal16029@gmail.com
                  </div>
                  <div>
                    <strong>Goal:</strong> Data Scientist
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800/50">
              <TabsTrigger value="skills" className="text-white">Skills</TabsTrigger>
              <TabsTrigger value="experience" className="text-white">Experience</TabsTrigger>
              <TabsTrigger value="interests" className="text-white">Interests</TabsTrigger>
            </TabsList>

            <TabsContent value="skills" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-8">
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center">
                          <Briefcase className="mr-2" size={20} />
                          {exp.title}
                        </CardTitle>
                        <div className="text-blue-400 font-medium">{exp.company}</div>
                        <div className="text-gray-400 text-sm">{exp.period}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interests" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: GraduationCap, title: 'Data Science', desc: 'Learning machine learning, statistics, and data analysis techniques' },
                  { icon: Heart, title: 'Problem Solving', desc: 'Enjoying coding challenges and algorithmic problem solving' },
                  { icon: User, title: 'Continuous Learning', desc: 'Always exploring new technologies and frameworks' }
                ].map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="bg-gray-800/50 border-gray-700 text-center">
                      <CardHeader>
                        <div className="flex justify-center mb-2">
                          <interest.icon size={32} className="text-blue-400" />
                        </div>
                        <CardTitle className="text-white">{interest.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{interest.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;