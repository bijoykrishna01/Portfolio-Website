import React from 'react';
import { 
  FileDown, 
  ExternalLink, 
  ShieldCheck, 
  Mail, 
  GraduationCap, 
  ChevronRight, 
  Award, 
  Sparkles,
  Compass,
  ArrowRight
} from 'lucide-react';
import { candidateProfile } from '../data/portfolioData';

export const HeroSection = ({ lang, onOpenDoc, onOpenGate, currentViewer }) => {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      
      {/* Background modern ambient glow & grid effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-indigo-500/20 rounded-full blur-[120px] opacity-75"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-500/5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>{candidateProfile.badge}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Target: Chevening, DAAD, Commonwealth & Oxford 2026/27</span>
          </div>
        </div>

        {/* Candidate Identity / Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white mb-6">
            Bijoy Krishna Das
          </h1>
          
          <p className="text-lg sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 mb-6">
            {lang === 'en' 
              ? "Aspiring Doctoral Researcher & International Scholarship Candidate" 
              : "আন্তর্জাতিক স্কলারশিপ প্রার্থী এবং উচ্চাভিলাষী গবেষক"}
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            {lang === 'en'
              ? candidateProfile.missionStatement
              : "আন্তর্জাতিক মানের আর্টিফিশিয়াল ইন্টেলিজেন্স, স্বাস্থ্যসেবা প্রযুক্তি এবং টেকসই সিস্টেম উদ্ভাবনের মাধ্যমে বিশ্বমঞ্চে ইতিবাচক পরিবর্তন আনতে নিবেদিতপ্রাণ।"}
          </p>

          {/* Quick Action Dossier Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            
            <a
              href="#executive-summary"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition transform hover:-translate-y-0.5"
            >
              <span>{lang === 'en' ? '5-Min Executive Review' : '৫ মিনিটের এক্সিকিউটিভ সারসংক্ষেপ'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenDoc("Curriculum Vitae (Oxford Academic Format)")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-700 hover:border-amber-500/50 transition transform hover:-translate-y-0.5 shadow-lg"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>{lang === 'en' ? 'Official CV (Watermarked)' : 'অফিসিয়াল সিভি'}</span>
            </button>

            <a
              href="#research-dashboard"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-800 transition"
            >
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'en' ? 'Research Dashboard' : 'রিসার্চ ড্যাশবোর্ড'}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-800 transition"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'en' ? 'Direct Faculty Contact' : 'যোগাযোগ'}</span>
            </a>

          </div>

          {/* Security & Authenticity Footnote */}
          <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Reviewer Cleared: <strong className="text-slate-200 font-mono">{currentViewer.name}</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              100% Evidence Verified: Papers, DOI, sealed transcripts
            </span>
            <span className="font-mono text-slate-500">
              Session Ref: #BKD-2026-CONFIDENTIAL
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export const ExecutiveSummarySection = ({ lang, onOpenDoc }) => {
  return (
    <section id="executive-summary" className="py-20 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-mono mb-3 border border-amber-500/20">
            SECTION 02 • COMMITTEE EXECUTIVE BRIEFING
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
            {lang === 'en' ? 'Executive Summary for Review Committees' : 'সিলেকশন কমিটির জন্য ৫ মিনিটের সারসংক্ষেপ'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {lang === 'en'
              ? 'Designed for faculty deans and fellowship committees with limited review time. Key metrics, academic honors, and foundational pillars at a glance.'
              : 'স্কলারশিপ কমিটি ও অধ্যাপকদের জন্য সংক্ষিপ্ত কিন্তু শক্তিশালী প্রোফাইল রিভিউ।'}
          </p>
        </div>

        {/* 6 Key Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {[
            { title: "Academic Standing", value: "Top 2%", sub: "CGPA 3.92 / 4.00", badge: "Summa Cum Laude" },
            { title: "Publications", value: "6+", sub: "IEEE & Springer Q1", badge: "Peer-Reviewed" },
            { title: "Citations / h-index", value: "85+", sub: "h-index: 4 | i10: 3", badge: "Google Scholar" },
            { title: "Major Awards", value: "12+", sub: "Chancellor Gold Medal", badge: "National Honors" },
            { title: "High-Impact AI", value: "15+", sub: "Healthcare & IoT", badge: "4,500+ Patients" },
            { title: "Community Service", value: "1,200+", sub: "Hours Leadership", badge: "SDG 3 & 4" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="p-5 rounded-2xl glass-panel glass-card-hover border border-slate-800 text-left flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
                  {item.badge}
                </span>
                <p className="text-xs font-medium text-slate-400">{item.title}</p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                  {item.value}
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 font-mono mt-3 border-t border-slate-800/80 pt-2">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Scientific Rigor & Theory",
              desc: "Deep mathematical training in continuous optimization, transformer architectures, and explainable statistical models.",
              evidence: "B.Sc CSE (3.92 GPA) + Mathematics Olympiad Distinction"
            },
            {
              title: "Independent Authorship",
              desc: "First author on Q1/Q2 research papers, actively framing independent research questions with clinical and engineering collaborators.",
              evidence: "IEEE ICAIM, Springer, ACM Transactions"
            },
            {
              title: "Demonstrated Leadership",
              desc: "Led nationwide community technology drives, established collegiate mental health forums, and trained over 1,200 junior scholars.",
              evidence: "UNDP Hackathon Champion & Club President"
            },
            {
              title: "Global Readiness & Ethics",
              desc: "Fully equipped with IELTS 8.0, strong intercultural adaptability, and unwavering commitment to ethical, safe deployment of AI.",
              evidence: "Verified English Proficiency & Global References"
            }
          ].map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800/90 relative">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-mono font-bold text-sm mb-4 border border-amber-500/20">
                0{idx + 1}
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-heading">{pillar.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{pillar.desc}</p>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-400/90 font-mono flex items-center gap-1">
                <span>Proof:</span> {pillar.evidence}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
