
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">My Journey</h2>
        
        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={item.id} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start`}>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-indigo-600 -translate-x-1/2 z-10 mt-1 shadow-lg shadow-indigo-600/50"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} pl-8 w-full`}>
                  <div className="glass p-8 rounded-3xl hover:border-indigo-500/30 transition-all transform hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      {item.type === 'Experience' ? <Briefcase className="text-indigo-500" size={20} /> : <GraduationCap className="text-indigo-500" size={20} />}
                      <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest">{item.type}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <div className="text-lg font-medium mb-1">{item.organization}</div>
                    <div className="text-sm font-mono opacity-50 mb-4">{item.period}</div>
                    <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
