
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">Quality over quantity. Each project represents a unique challenge.</p>
          </div>
          <a href="#" className="text-indigo-500 font-bold hover:underline">View All Projects →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col h-full border border-slate-200 dark:border-slate-800">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <div className="mb-4 text-sm font-medium text-indigo-500 italic">
                  "{project.problem}"
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                   <div className="text-sm font-medium">
                    <span className="text-emerald-500">Outcome:</span> {project.outcome}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl} 
                      className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="flex-1 px-4 py-2 glass hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
