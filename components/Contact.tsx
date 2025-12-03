import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="scroll-mt-28 py-24 bg-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to build something reliable?
            </h2>
            <p className="text-lg max-w-md mx-auto md:mx-0">
              If you'd like to connect, talk shop, or discuss the future of AI platforms, here's where to find me.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
            <a 
              href={SOCIAL_LINKS.email}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-all hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <div className="flex gap-4 justify-center">
                <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
                >
                <Linkedin className="w-5 h-5" />
                </a>
                <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-all hover:-translate-y-1"
                aria-label="GitHub"
                >
                <Github className="w-5 h-5" />
                </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Tim Trainor. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};