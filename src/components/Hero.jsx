import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Download, 
  FolderGit2, 
  Send, 
  Sparkles, 
  MapPin, 
  GraduationCap 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolio';

export default function Hero({ onOpenResume, onShowToast }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    if (onShowToast) {
      onShowToast('Email copied to clipboard: ' + personalInfo.email, 'success');
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-primary-600/15 via-brand-500/15 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-7">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-brand-500/30 text-xs font-medium text-brand-300 shadow-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Hero Heading */}
          <div className="space-y-3">
            <p className="text-slate-400 font-mono text-sm sm:text-base tracking-wide">
              Hello, World! I am
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
              <span className="text-white">{personalInfo.name}</span>
            </h1>
            
            {/* Dynamic Role Rotator */}
            <div className="h-10 sm:h-12 flex items-center justify-center overflow-hidden">
              <p className="text-xl sm:text-3xl font-bold text-gradient transition-all duration-500">
                {personalInfo.roles[roleIndex]}
              </p>
            </div>
          </div>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {personalInfo.bioHeadline}
          </p>

          {/* Quick Details Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <GraduationCap className="w-4 h-4 text-brand-400" />
              {personalInfo.college}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/60 border border-slate-800">
              <MapPin className="w-4 h-4 text-brand-400" />
              {personalInfo.location}
            </span>
          </div>

          {/* Main Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-primary-600 hover:from-brand-500 hover:to-primary-500 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-download-resume-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 hover:border-slate-600 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-brand-400" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              id="hero-contact-me-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links & Direct Email Copy */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              id="hero-github-link"
              className="p-3 rounded-xl glass-card border border-slate-800 text-slate-300 hover:text-white hover:border-brand-500/40 hover:bg-slate-800/80 transition-all hover:scale-110 shadow-sm"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              id="hero-linkedin-link"
              className="p-3 rounded-xl glass-card border border-slate-800 text-slate-300 hover:text-white hover:border-brand-500/40 hover:bg-slate-800/80 transition-all hover:scale-110 shadow-sm"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy Email Address"
              id="hero-copy-email-btn"
              className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl glass-card border border-slate-800 text-slate-300 hover:text-white hover:border-brand-500/40 hover:bg-slate-800/80 text-xs font-mono transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4 text-brand-400" />
              <span>{personalInfo.email}</span>
            </button>
          </div>

          {/* Key Metrics / Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-8 border-t border-slate-800/80">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl glass-card border border-slate-800/80 hover:border-brand-500/30 transition-colors flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
