
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-extrabold tracking-tighter">
          SANJAY<span className="text-indigo-500">.</span>
        </div>
        
        <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Sanjay. Built with React & Passion.
        </div>

        <div className="flex gap-8 text-sm font-bold opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Resume</a>
          <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-100 transition-opacity">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
