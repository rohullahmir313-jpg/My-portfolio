import React from 'react';
import { 
  User, 
  BookOpen, 
  Cpu, 
  Sparkles, 
  Rocket, 
  Target, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Code2 
} from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolio';

export default function About() {
  const infoCards = [
    {
      icon: <User className="w-5 h-5 text-brand-400" />,
      title: "Who I Am",
      content: aboutMe.intro
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
      title: "What I'm Studying",
      content: aboutMe.study
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "Technical Interests",
      content: aboutMe.interests
    },
    {
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      title: "Currently Learning",
      content: aboutMe.learning
    },
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: "Projects I Build",
      content: aboutMe.projectPhilosophy
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      title: "Career Goals",
      content: aboutMe.careerGoal
    }
  ];

  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-brand-400" />,
      title: "Clean Architecture",
      desc: "Modular, reusable component patterns with explicit data flow and clean separation of concerns."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Performance First",
      desc: "Lighthouse-optimized rendering, asset management, and responsive layout performance."
    },
    {
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      title: "Modern Ecosystem",
      desc: "Building with React, Tailwind CSS, modern ES modules, and industry standard tooling."
    }
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-mono text-brand-300">
            <span>ABOUT_ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background & Focus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Get to know my engineering principles, current studies, and developer journey.
          </p>
        </div>

        {/* Info Grid (6 Core Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/60 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Development Philosophy Bar */}
        <div className="p-8 rounded-3xl glass-card border border-brand-500/20 bg-gradient-to-br from-[#0f172a] via-[#131e36] to-[#090d16]">
          <h3 className="text-base font-semibold text-slate-300 mb-6 flex items-center gap-2 font-mono">
            <CheckCircle2 className="w-5 h-5 text-brand-400" />
            <span>CORE DEVELOPMENT PRINCIPLES</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
