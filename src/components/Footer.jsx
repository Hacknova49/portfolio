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
              Passionate full-stack developer creating innovative digital solutions 
              with modern technologies and creative design.
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
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 transition-colors duration-200 hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({
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
              <p>contact@hacknova.dev</p>
              <p>+91 12345 67890</p>
              <p>India</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-between items-center pt-8 mt-12 border-t border-gray-800 md:flex-row"
        >
          <div className="flex items-center mb-4 text-gray-400 md:mb-0">
            <span>Made with</span>
            <Heart className="mx-2 text-red-500" size={16} />
            <span>by HACKNOVA</span>
          </div>

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