import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden animate-fade-up">
        
        {/* Top Header Banner with Gradient */}
        <div className={`h-36 bg-gradient-to-r ${project.gradient} p-6 flex items-start justify-between relative`}>
          <div className="space-y-1 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-black/30 backdrop-blur-md text-white border border-white/20">
              {project.badge || project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Subtitle & Full Description */}
          <div className="space-y-2">
            <p className="text-xs font-mono text-brand-400 uppercase tracking-wider">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                Key Features & Architecture
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-brand-400 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-800 border border-slate-700 text-brand-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/20 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
            
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
