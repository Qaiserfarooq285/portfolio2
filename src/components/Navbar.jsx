'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-40"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold hover:text-gray-300"
        >
          QF
        </button>
        <div className="hidden md:flex gap-8">
          {['about', 'experience', 'projects', 'education', 'skills'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-sm hover:text-gray-300 transition-colors"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => document.location.hash = '#chatbot'}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            Chat
          </button>
        </div>
        <div className="flex gap-4">
          <a
            href={cvData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={cvData.personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
