'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black/50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {cvData.experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-gray-400">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500">{job.duration}</span>
              </div>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
