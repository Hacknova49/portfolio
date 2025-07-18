import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white"
            >
              HACKNOVA
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md text-gray-400"
            >
              Second-year college student exploring programming and technology. 
              Building projects and learning new skills on the path to becoming a data scientist.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white"
            >
              Quick Links
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              {['Home', 'About', 'Tech Stack', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  className="block text-gray-400 transition-colors duration-200 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase().replace(' ', ''))?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white"
            >
              Get In Touch
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 text-gray-400"
            >
              <p>swagatamandal16029@gmail.com</p>
              <p>India</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div>     
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;