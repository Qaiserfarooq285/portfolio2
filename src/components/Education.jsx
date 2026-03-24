'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black/50 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Education</h2>
        <div className="space-y-8">
          {cvData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 p-8 rounded-lg border border-white/10"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.field}</p>
                  <p className="text-gray-500">{edu.university}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{edu.year}</p>
                  <p className="text-gray-400">GPA: {edu.gpa}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
