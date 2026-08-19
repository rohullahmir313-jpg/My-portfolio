import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Wrench, 
  Terminal, 
  Check, 
  Search, 
  Sparkles 
} from 'lucide-react';
import { skillsData } from '../data/portfolio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    languages: <Terminal className="w-5 h-5 text-brand-400" />,
    frontend: <Layout className="w-5 h-5 text-indigo-400" />,
    tools: <Wrench className="w-5 h-5 text-purple-400" />
  };

  const filteredCategories = skillsData.categories.filter((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) return false;
    return true;
  }).map((cat) => {
    const filteredSkills = cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: filteredSkills };
  }).filter((cat) => cat.skills.length > 0);

  const totalSkillsCount = skillsData.categories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <span>TECH_STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Proficiency
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core programming languages, frontend libraries, and developer tools in my workflow.
          </p>
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-card border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              All Technologies ({totalSkillsCount})
            </button>
            
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-900/90 border border-slate-800 focus:border-brand-500/60 text-white placeholder-slate-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl glass-card border border-slate-800/90 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {categoryIcons[category.id] || <Code2 className="w-5 h-5 text-brand-400" />}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-full">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-semibold text-slate-200 group-hover:text-brand-300 transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                            {skill.tag}
                          </span>
                          <span className="font-mono text-slate-400 text-[11px]">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      
                      {/* Skill progress indicator */}
                      <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full transition-all duration-700 ease-out group-hover:from-brand-400 group-hover:to-cyan-400"
                          style={{ width: `${skill.levelPercent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 p-6 rounded-2xl glass-card border border-slate-800">
            <p className="text-slate-400 text-sm">
              No matching skills found for "{searchQuery}".
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
