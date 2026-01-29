
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>

      <div className="text-center max-w-4xl">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-500 text-sm font-mono tracking-wider animate-in fade-in slide-in-from-bottom duration-1000">
          AVAILABLE FOR INTERNSHIPS & ROLES
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Sanjay</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-400 leading-relaxed">
          Aspiring Software Developer | Problem Solver | Tech Enthusiast.
          <br />
          <span className="italic">Building scalable solutions with clean code and modern design.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <a
            href="#projects"
            className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-indigo-600/20"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-bold transition-all transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
