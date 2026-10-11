import React, { useState } from 'react';
import { 
  Award, 
  Cpu, 
  ExternalLink, 
  GitBranch, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Layers,
  ArrowUpRight,
  TrendingUp,
  FileDown
} from 'lucide-react';
import { featuredProjects, scholarshipsAndAwards, skillsData } from '../data/portfolioData';

export const ProjectsAndAwardsSection = ({ lang, onOpenDoc }) => {
  return (
    <div className="space-y-24">
      
      {/* SECTION 5: FEATURED PROJECTS */}
      <section id="projects" className="py-16 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 text-orange-400 text-xs font-mono mb-3 border border-orange-500/20">
              SECTION 05 • EVIDENCE-BASED APPLIED RESEARCH PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Featured Research & Engineering Systems
            </h2>
            <p className="text-sm text-slate-300">
              Each prototype is deployed with tangible impact metrics, peer validation, and reproducible source code.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((proj) => (
              <div 
                key={proj.id} 
                className="rounded-2xl glass-panel border border-slate-800 overflow-hidden flex flex-col justify-between glass-card-hover"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      SYSTEM PROTOTYPE
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {proj.evidence}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-3">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {proj.abstract}
                  </p>

                  <div className="space-y-3 mb-6 text-xs text-slate-400">
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                      <strong className="text-slate-200">The Problem: </strong>
                      {proj.problem}
                    </div>
                    <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                      <strong className="text-slate-200">Scientific Methodology: </strong>
                      {proj.methodology}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact & Action Bar */}
                <div className="p-4 sm:p-6 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs font-mono text-amber-400 font-semibold">
                    📈 {proj.metrics}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenDoc(`Technical Report - ${proj.title}`)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition"
                    >
                      Report Preview
                    </button>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition"
                    >
                      <GitBranch className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: SCHOLARSHIPS & AWARDS */}
      <section id="scholarships" className="py-16 relative border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-yellow-500/10 text-yellow-400 text-xs font-mono mb-3 border border-yellow-500/20">
              SECTION 06 • SCHOLARSHIPS & HONORS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Scholarships, Grants & Laurels
            </h2>
            <p className="text-sm text-slate-300">
              Recognized at institutional, ministerial, and international levels for scientific leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {scholarshipsAndAwards.map((award, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800/90 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {award.category}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-1">
                    {award.title}
                  </h3>

                  <p className="text-xs font-medium text-amber-300/80 mb-3">
                    {award.organization}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {award.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" /> Official Verification Stored
                  </span>
                  <button
                    onClick={() => onOpenDoc(`Award Certificate - ${award.title}`)}
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 text-[11px]"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 18: SKILLS MATRIX DASHBOARD */}
      <section id="skills" className="py-16 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-3 border border-indigo-500/20">
              SECTION 18 • TECHNICAL & RESEARCH COMPETENCIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Skills & Methodological Toolkit
            </h2>
            <p className="text-sm text-slate-300">
              Demonstrated capabilities in foundational programming, quantitative methodology, and international collaboration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Machine Learning & AI", items: skillsData.dataAndAI, color: "text-amber-400" },
              { title: "Languages & Frameworks", items: skillsData.programming, color: "text-cyan-400" },
              { title: "Scientific Methods", items: skillsData.researchMethods, color: "text-emerald-400" },
              { title: "Leadership & Communication", items: skillsData.leadershipAndImpact, color: "text-purple-400" }
            ].map((cat, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800">
                <h4 className={`text-sm font-bold font-heading mb-4 ${cat.color}`}>
                  {cat.title}
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {cat.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
