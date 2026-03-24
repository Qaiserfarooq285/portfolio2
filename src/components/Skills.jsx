'use client';

import { motion } from 'framer-motion';
import { cvData } from '@/data/cvData';

export default function Skills() {
  const allSkills = [
    ...cvData.skills.languages,
    ...cvData.skills.ai_ml,
    ...cvData.skills.web,
  ];

  return (
    <section id="skills" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { title: 'Languages', skills: cvData.skills.languages },
            { title: 'AI/ML', skills: cvData.skills.ai_ml },
            { title: 'Web Dev', skills: cvData.skills.web },
            { title: 'Tools', skills: cvData.skills.tools },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
