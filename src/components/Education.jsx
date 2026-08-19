import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookCheck } from 'lucide-react';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <span>ACADEMIC_BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal education, core computer science coursework, and academic honors.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-500 via-indigo-500 to-slate-800" />

          {educationData.map((item, index) => (
            <div
              key={index}
              className="relative md:pl-20 group"
            >
              {/* Timeline Bullet Point */}
              <div className="hidden md:flex absolute left-5 top-6 -translate-x-1/2 w-7 h-7 rounded-full bg-[#090d16] border-2 border-brand-400 items-center justify-center group-hover:scale-125 transition-transform z-10">
                <span className="w-2 h-2 rounded-full bg-brand-400"></span>
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 hover:border-brand-500/30 transition-all duration-300 space-y-5">
                
                {/* Header: Degree & Duration */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                      <span className="font-semibold text-brand-300 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4" />
                        {item.institution}
                      </span>
                      {item.affiliation && (
                        <span className="text-xs text-indigo-300 font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                          {item.affiliation}
                        </span>
                      )}
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-brand-400" />
                      {item.duration}
                    </span>
                    {item.grade && (
                      <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5">
                        {item.grade}
                      </span>
                    )}
                  </div>
                </div>

                {/* Coursework Tags */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <BookCheck className="w-3.5 h-3.5 text-indigo-400" />
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 font-mono"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements List */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      Honors & Activities
                    </h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          className="text-xs sm:text-sm text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-amber-400 mt-0.5">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
