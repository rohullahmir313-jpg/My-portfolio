import React from 'react';
import { X, Printer, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, aboutMe, skillsData, educationData, projectsData, achievementsData } from '../data/portfolio';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadMarkdown = () => {
    const mdContent = `# ${personalInfo.name} - Resume
Role: ${personalInfo.title}
Location: ${personalInfo.location} | Email: ${personalInfo.email}
GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

---

## Summary
${aboutMe.intro}
${aboutMe.study}

---

## Technical Skills
${skillsData.categories.map(cat => `### ${cat.title}\n${cat.skills.map(s => `- ${s.name} (${s.level})`).join('\n')}`).join('\n\n')}

---

## Education
${educationData.map(edu => `### ${edu.degree} - ${edu.institution} (${edu.duration})
${edu.grade ? `Grade: ${edu.grade}\n` : ''}Coursework: ${edu.coursework.join(', ')}
${edu.achievements ? edu.achievements.map(a => `- ${a}`).join('\n') : ''}`).join('\n\n')}

---

## Featured Projects
${projectsData.map(p => `### ${p.title}
${p.description}
Tech: ${p.tech.join(', ')}
Live Demo: ${p.liveUrl} | Code: ${p.githubUrl}`).join('\n\n')}

---

## Achievements & Certifications
${achievementsData.map(a => `- ${a.title} (${a.issuer}, ${a.date}): ${a.description}`).join('\n')}
`;

    const blob = new Blob([mdContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    if (onShowToast) {
      onShowToast('Resume markdown file downloaded!', 'success');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0b1120] border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Curriculum Vitae / Resume</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
              Interactive Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              id="resume-download-md-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-xs font-medium text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.md)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#090d16] text-slate-200 print:bg-white print:text-black print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base font-semibold text-brand-400 print:text-gray-800">
                {personalInfo.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-slate-400 print:text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {personalInfo.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" /> {personalInfo.email}
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3 h-3" /> {personalInfo.github.replace('https://', '')}
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3 h-3" /> {personalInfo.linkedin.replace('https://', '')}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 print:text-black">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {aboutMe.intro} {aboutMe.study} {aboutMe.projectPhilosophy}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 print:text-black">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {skillsData.categories.map((cat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 print:border-gray-300">
                  <h3 className="font-bold text-white print:text-black mb-1.5">{cat.title}</h3>
                  <p className="text-slate-400 print:text-gray-700 leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 print:text-black">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((edu, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white print:text-black">{edu.degree}</span>
                    <span className="font-mono text-slate-400 print:text-gray-600 text-xs">{edu.duration}</span>
                  </div>
                  <div className="text-xs text-brand-300 print:text-gray-700">{edu.institution} — {edu.location} ({edu.grade})</div>
                  {edu.coursework && (
                    <p className="text-[11px] text-slate-400 print:text-gray-600">
                      <strong>Coursework:</strong> {edu.coursework.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 print:text-black">
              Featured Software Projects
            </h2>
            <div className="space-y-3">
              {projectsData.slice(0, 3).map((p, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 print:border-gray-200 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">{p.title}</h3>
                    <span className="text-[10px] font-mono text-slate-400">{p.tech.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-gray-800">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-400 print:text-black">
              Honors & Certifications
            </h2>
            <ul className="text-xs text-slate-300 print:text-gray-800 space-y-1 list-disc list-inside">
              {achievementsData.map((a, i) => (
                <li key={i}>
                  <strong>{a.title}</strong> — {a.issuer} ({a.date})
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
