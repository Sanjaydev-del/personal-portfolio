
import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl font-bold mb-8">Let's work together.</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                Have a project in mind or looking for a full-time engineer? Reach out, and let's build something extraordinary.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hello@sanjay.dev" className="flex items-center gap-4 text-lg font-bold hover:text-indigo-500 transition-colors">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  hello@sanjay.dev
                </a>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-60">Your Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold opacity-60">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold opacity-60">Message</label>
                <textarea 
                  required 
                  rows={4} 
                  placeholder="How can I help you?" 
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl ${
                  status === 'success' ? 'bg-emerald-500 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
                }`}
              >
                {status === 'idle' && <><Send size={20} /> Send Message</>}
                {status === 'sending' && "Sending..."}
                {status === 'success' && "Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
