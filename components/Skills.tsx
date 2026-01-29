
import React from 'react';
import * as Icons from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-slate-600 dark:text-slate-400">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="glass p-8 rounded-3xl group hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-bold mb-8 text-indigo-500">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill) => {
                  const IconComponent = (Icons as any)[skill.icon];
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          {IconComponent && <IconComponent size={18} className="opacity-70" />}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono opacity-50">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500 rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
