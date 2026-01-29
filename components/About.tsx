
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/sanjay/800/800" 
                alt="Sanjay" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-2xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Professional Storytelling</h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I am a driven software enthusiast currently pursuing my final year in Computer Science. My journey began with a curiosity about how things work, which quickly evolved into a <span className="text-indigo-500 font-semibold">passion for engineering digital solutions</span> that solve real-world problems.
              </p>
              <p>
                I believe in <span className="text-indigo-500 font-semibold underline decoration-2 underline-offset-4">consistency over intensity</span>. Whether it's mastering a new JavaScript framework or optimizing a complex SQL query, I approach every challenge with a learning mindset and a commitment to code quality.
              </p>
              <p>
                My experience at <span className="text-white bg-indigo-600 px-2 py-0.5 rounded">TechFlow Systems</span> has taught me the importance of collaboration, scalability, and performance. I thrive in environments that challenge me to think outside the box and deliver polished, user-centric products.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-extrabold text-indigo-500">20+</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-60">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-indigo-500">1.2k+</div>
                <div className="text-sm font-medium uppercase tracking-wider opacity-60">Git Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
