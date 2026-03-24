'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300"
          >
            <p className="mb-6">{cvData.personal.bio}</p>
            <p className="mb-6">
              I specialize in building AI-powered applications and conducting research in machine learning. My passion lies in solving complex problems using cutting-edge technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-3xl font-bold">1+</p>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <p className="text-3xl font-bold">5+</p>
              <p className="text-gray-400">Projects Completed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
