import React from 'react';
import { Award, Trophy, Code, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/portfolio';

export default function Achievements() {
  if (!achievementsData || achievementsData.length === 0) return null;

  const tagIcons = {
    Certification: <Award className="w-5 h-5 text-indigo-400" />,
    Hackathon: <Trophy className="w-5 h-5 text-amber-400" />,
    Competitive: <Code className="w-5 h-5 text-brand-400" />,
    'Open Source': <Sparkles className="w-5 h-5 text-cyan-400" />
  };

  return (
    <section id="achievements" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
            <span>RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Professional certifications, hackathon accomplishments, and competitive programming milestones.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-3xl glass-card border border-slate-800 hover:border-slate-700/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-brand-500/40 transition-colors">
                      {tagIcons[item.tag] || <Award className="w-5 h-5 text-brand-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">
                        {item.issuer} • {item.date}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 shrink-0">
                    {item.tag}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Link Footer */}
              {item.link && item.link !== '#' && (
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
