'use client';

import { motion } from 'framer-motion';
import Typewriter from '@/components/Typewriter';
import { cvData } from '@/data/cvData';

export default function Hero() {
  const typewriterTexts = [
    'AI Engineer',
    'ML Researcher',
    'Full Stack Developer',
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {cvData.personal.name}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <p className="text-xl md:text-2xl text-gray-400">I&rsquo;m a</p>
            <Typewriter texts={typewriterTexts} />
          </div>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            {cvData.personal.bio}
          </p>
          <div className="flex gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg"
            >
              View My Work
            </motion.a>
            <motion.a
              href={`mailto:${cvData.personal.email}`}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 border border-white text-white font-semibold rounded-lg"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
