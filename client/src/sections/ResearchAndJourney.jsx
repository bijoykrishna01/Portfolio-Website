import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  ExternalLink, 
  FileCheck2, 
  Copy, 
  Check, 
  TrendingUp, 
  Binary, 
  Sparkles,
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { researchDashboard, publications, academicJourney } from '../data/portfolioData';

export const ResearchAndJourneySection = ({ lang, onOpenDoc }) => {
  const [copiedBibId, setCopiedBibId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleCopyBibtex = (id, bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibId(id);
    setTimeout(() => setCopiedBibId(null), 2000);
  };

  const filteredPublications = selectedFilter === 'All' 
    ? publications 
    : publications.filter(p => p.type === selectedFilter);

  return (
    <div className="space-y-24">
      
      {/* SECTION 3: ACADEMIC JOURNEY */}
      <section id="academic-journey" className="py-16 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-mono mb-3 border border-blue-500/20">
              SECTION 03 • ACADEMIC TIMELINE & PEDIGREE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              {lang === 'en' ? 'Academic Journey & Milestones' : 'শিক্ষাজীবন ও গুরুত্বপূর্ণ মাইলফলক'}
            </h2>
            <p className="text-sm text-slate-300">
              Consistent record of scholarly distinction from foundational science to undergraduate capstone thesis.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
            {academicJourney.map((step, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                
                {/* Year Marker on Left for Desktop */}
                <div className="hidden sm:block absolute -left-36 top-0 text-right w-28 font-mono text-sm font-bold text-amber-400">
                  {step.year}
                </div>

                {/* Timeline Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 transition"></div>

                <div className="p-6 rounded-2xl glass-panel border border-slate-800 group-hover:border-slate-700 transition">
                  <div className="sm:hidden font-mono text-xs font-bold text-amber-400 mb-1">
                    {step.year}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white font-heading">{step.degree}</h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {step.gpa}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">{step.institution}</h4>
                  <p className="text-xs text-amber-300/90 font-medium mb-3">{step.honors}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{step.summary}</p>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-[11px]">
                    <span className="text-slate-500 font-mono">Evidence: {step.evidenceType}</span>
                    <button
                      onClick={() => onOpenDoc(`Academic Record - ${step.institution}`)}
                      className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                    >
                      <span>Verify Transcript</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: RESEARCH DASHBOARD ⭐ */}
      <section id="research-dashboard" className="py-16 relative border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-mono mb-3 border border-amber-500/20">
              SECTION 04 • RESEARCH DASHBOARD ⭐
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Scientific Domains & Research Roadmap
            </h2>
            <p className="text-sm text-slate-300">
              Theoretical focus, laboratory metrics, and strategic doctoral research vision.
            </p>
          </div>

          {/* Research Metrics & Scholarly Profiles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { name: "Google Scholar", val: "85+ Citations", sub: "h-index 4 | i10-index 3", link: "https://scholar.google.com" },
              { name: "ORCID Registry", val: "0000-0002-1825-0097", sub: "Authenticated ID", link: "https://orcid.org" },
              { name: "ResearchGate", val: "Score: 14.8", sub: "Top 15% Percentile", link: "https://researchgate.net" },
              { name: "GitHub Science", val: "220+ Commits", sub: "Reproducible AI Models", link: "https://github.com" },
            ].map((prof, i) => (
              <a 
                key={i} 
                href={prof.link} 
                target="_blank" 
                rel="noreferrer" 
                className="p-5 rounded-2xl glass-panel glass-card-hover border border-slate-800 flex items-center justify-between group"
              >
                <div>
                  <span className="text-xs text-slate-400 font-mono">{prof.name}</span>
                  <h4 className="text-base font-bold text-white mt-1 group-hover:text-amber-400 transition">{prof.val}</h4>
                  <p className="text-[11px] text-slate-500">{prof.sub}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
              </a>
            ))}
          </div>

          {/* Research Focus Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {researchDashboard.interests.map((area, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/20">
                    <Binary className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{area.name}</h4>
                  <p className="text-xs text-slate-400 mb-4">{area.focus}</p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-mono">
                  {area.papers} Peer-Reviewed Articles
                </div>
              </div>
            ))}
          </div>

          {/* Research Roadmap */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/20">
            <h4 className="text-sm font-bold font-mono uppercase tracking-wider text-amber-400 mb-6 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> 2026 - 2029 Strategic Doctoral & Post-Graduate Roadmap
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              {researchDashboard.roadmap.map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-400 font-semibold mb-2">
                    {step.phase}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.goal}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: PUBLICATIONS */}
      <section id="publications" className="py-16 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-3 border border-emerald-500/20">
                SECTION 07 • PEER-REVIEWED SCIENTIFIC PUBLICATIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                Publications & Conference Proceedings
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-2">
              {['All', 'Conference', 'Journal'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    selectedFilter === filter
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <div key={pub.id} className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800/90 glass-card-hover transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {pub.venue}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span>Year: {pub.year}</span>
                    <span>•</span>
                    <span className="text-amber-400 font-bold">{pub.citations} Citations</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs text-amber-300/90 font-mono mb-4">
                  {pub.authors}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 bg-slate-900/50 p-4 rounded-xl border border-slate-800/60">
                  <strong className="text-slate-200">Abstract: </strong> {pub.abstract}
                </p>

                {/* Actions: PDF preview, DOI, BibTeX */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenDoc(pub.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition"
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Confidential PDF Preview</span>
                    </button>

                    <button
                      onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 hover:text-white transition"
                    >
                      {copiedBibId === pub.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedBibId === pub.id ? 'Copied BibTeX' : 'Cite BibTeX'}</span>
                    </button>
                  </div>

                  <span className="text-xs font-mono text-slate-500">
                    DOI: {pub.doi}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
