
import React from 'react';
import * as Icons from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Achievements & Highlights</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach) => {
            const IconComponent = (Icons as any)[ach.icon];
            return (
              <div key={ach.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:scale-105 transition-all">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 mb-6">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-xl font-bold mb-2">{ach.title}</h3>
                <div className="text-indigo-500 font-medium text-sm mb-1">{ach.issuer}</div>
                <div className="text-xs font-mono opacity-40 mb-4">{ach.date}</div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
