import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Languages, 
  Menu, 
  X, 
  Lock, 
  Download, 
  Sparkles,
  Award,
  BookOpen,
  FileText
} from 'lucide-react';

export const Navbar = ({ 
  onOpenGate, 
  onOpenSearch, 
  currentViewer, 
  lang, 
  setLang,
  activeSection 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: lang === 'en' ? 'Overview' : 'একনজরে', href: '#executive-summary' },
    { label: lang === 'en' ? 'Journey' : 'যাত্রা', href: '#academic-journey' },
    { label: lang === 'en' ? 'Research' : 'গবেষণা', href: '#research-dashboard' },
    { label: lang === 'en' ? 'Projects' : 'প্রজেক্টস', href: '#projects' },
    { label: lang === 'en' ? 'Scholarships' : 'স্কলারশিপ', href: '#scholarships' },
    { label: lang === 'en' ? 'Publications' : 'পাবলিকেশনস', href: '#publications' },
    { label: lang === 'en' ? 'Map' : 'ওয়ার্ল্ড ম্যাপ', href: '#world-map' },
    { label: lang === 'en' ? 'Letters' : 'সুপারিশপত্র', href: '#recommendations' },
    { label: lang === 'en' ? 'Vault' : 'ডকুমেন্টস', href: '#document-vault' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Candidate Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-[1px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center font-heading font-black text-amber-400 text-lg group-hover:scale-105 transition">
                BK
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-white tracking-wide text-sm sm:text-base">
                  BIJOY KRISHNA DAS
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  2026 DOSSIER
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Invitation-Only Scholar Portal
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-slate-800/60 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools: Search, Language Switcher, Access Status */}
          <div className="flex items-center gap-2">
            
            {/* Quick Search Button (Command+K style) */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500/50 hover:text-white text-xs transition"
              title="Search Portfolio"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.2 bg-slate-800 rounded text-[10px] text-slate-400 border border-slate-700">⌘K</kbd>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition"
              title="Toggle English / Bangla"
            >
              <Languages className="w-3.5 h-3.5 text-amber-400" />
              <span className="uppercase font-mono">{lang}</span>
            </button>

            {/* Access Gate Button */}
            <button
              onClick={onOpenGate}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                currentViewer.authenticated
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20'
              }`}
            >
              {currentViewer.authenticated ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Verified Reviewer</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Private Access</span>
                </>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 py-4 space-y-2 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">Candidate: Bijoy Krishna Das</span>
            <span className="text-xs text-amber-400 font-mono">Top 2% Ranking</span>
          </div>
        </div>
      )}
    </header>
  );
};

export const CommandSearchModal = ({ isOpen, onClose, onSelectDoc }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchableItems = [
    { type: "Publication", title: "Explainable Deep Transfer Learning (IEEE ICAIM 2025)", tag: "Paper", link: "#publications" },
    { type: "Publication", title: "Lightweight Transformer Architectures (Springer Nature Q1)", tag: "Journal", link: "#publications" },
    { type: "Document", title: "Official Curriculum Vitae (Oxford Academic Format)", tag: "CV", link: "#document-vault" },
    { type: "Document", title: "Statement of Purpose (International Scholarships)", tag: "SOP", link: "#document-vault" },
    { type: "Document", title: "Research Proposal on Trustworthy Clinical AI", tag: "Proposal", link: "#document-vault" },
    { type: "Recommendation", title: "Recommendation Letter by Prof. Dr. A. K. Sen", tag: "Letter", link: "#recommendations" },
    { type: "Award", title: "Prime Chancellor Academic Excellence Gold Award", tag: "Honor", link: "#scholarships" },
    { type: "Project", title: "NeuroScan AI - Clinical Diagnostics Framework", tag: "AI Project", link: "#projects" },
    { type: "Skill", title: "PyTorch, Transformers, Vision-Language & Edge IoT", tag: "Tech", link: "#skills" },
  ];

  const filtered = searchableItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-2xl glass-panel border border-amber-500/30 shadow-2xl overflow-hidden">
        
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-900/60">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            placeholder="Search papers, recommendation letters, awards, CV..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-slate-500 font-sans"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-2 max-h-96 overflow-y-auto space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/80 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900 text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200 group-hover:text-white transition">
                      {item.title}
                    </h5>
                    <p className="text-[10px] text-slate-500">{item.type}</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
                  {item.tag}
                </span>
              </a>
            ))
          ) : (
            <p className="text-center py-8 text-xs text-slate-500">
              No matching records found for "{query}".
            </p>
          )}
        </div>

        <div className="p-3 bg-slate-950/60 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between items-center">
          <span>AI-indexed Academic Portfolio</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  );
};
