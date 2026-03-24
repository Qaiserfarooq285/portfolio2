'use client';

import { cvData } from '@/data/cvData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Qaiser Farooq</h3>
            <p className="text-gray-400">{cvData.personal.title}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href={`mailto:${cvData.personal.email}`} className="text-gray-400 hover:text-white transition">{cvData.personal.email}</a></li>
              <li><a href={cvData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
              <li><a href={cvData.personal.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500">
          <p>&copy; {year} Qaiser Farooq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
