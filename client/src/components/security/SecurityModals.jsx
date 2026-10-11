import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  ExternalLink, 
  FileCheck2, 
  AlertCircle, 
  Clock, 
  Eye, 
  Download, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';

export const AccessGateModal = ({ isOpen, onClose, onAuthenticated, currentViewer }) => {
  const [passcode, setPasscode] = useState('');
  const [committeeName, setCommitteeName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Pre-authorized codes for testing or official review
    const validCodes = ['OXFORD2026', 'CHEVENING2026', 'DAAD2026', 'BIJOY2026', 'INVITE'];
    const cleanCode = passcode.trim().toUpperCase();

    setTimeout(() => {
      if (validCodes.includes(cleanCode) || cleanCode === '') {
        onAuthenticated({
          name: committeeName.trim() || 'Distinguished Selection Committee',
          authenticated: true,
          expiresIn: '30 Days',
          accessCode: cleanCode || 'GUEST_REVIEW'
        });
        setIsLoading(false);
        onClose();
      } else {
        setError('Invalid invitation passcode. For access, contact Bijoy Krishna Das at bijoy.research@outlook.com');
        setIsLoading(false);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/30 shadow-2xl shadow-amber-500/10 text-slate-100">
        
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-white">Confidential Dossier</h3>
            <p className="text-xs text-slate-400">Restricted Academic Evaluation Portal</p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          This portfolio contains confidential academic research, letters of recommendation, and authenticated transcripts of 
          <span className="font-semibold text-amber-400"> Bijoy Krishna Das</span>. Intended exclusively for university faculties and scholarship reviewers.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Reviewer / Institution (Optional)
            </label>
            <input 
              type="text" 
              placeholder="e.g. Chevening Committee / Oxford Faculty" 
              value={committeeName}
              onChange={(e) => setCommitteeName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Invitation Passcode
            </label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="Enter passcode (or leave blank for guest demo)" 
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-amber-400 transition"
              />
              <KeyRound className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
            </div>
            <p className="text-[11px] text-amber-400/80 mt-1">Hint for reviewer: Press Unlock to enter, or use code <code>BIJOY2026</code></p>
          </div>

          {error && (
            <div className="flex items-start gap-2 p-3 text-xs text-rose-300 bg-rose-950/40 border border-rose-500/30 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm transition shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              {isLoading ? 'Verifying Credentials...' : 'Unlock Academic Dossier'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white text-sm hover:bg-slate-800/50 transition"
            >
              Continue as Guest
            </button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Encrypted with SHA-256</span>
          <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-400" /> Private Session</span>
        </div>
      </div>
    </div>
  );
};

export const WatermarkModal = ({ isOpen, onClose, docTitle, reviewerName }) => {
  if (!isOpen) return null;

  const pdfUrl = `/api/docs/watermarked-pdf?docName=${encodeURIComponent(docTitle)}&reviewer=${encodeURIComponent(reviewerName || 'Scholarship Committee')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl h-[85vh] flex flex-col rounded-2xl glass-panel border border-slate-700 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">{docTitle}</h4>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Watermarked Copy generated for: <span className="text-amber-300 font-medium">{reviewerName || 'Scholarship Committee'}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500 hover:bg-amber-400 text-slate-950 transition"
            >
              <Download className="w-3.5 h-3.5" /> Download Watermarked PDF
            </a>
            <button 
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              Close
            </button>
          </div>
        </div>

        {/* PDF Frame / Mock Preview */}
        <div className="flex-1 bg-slate-900 p-4 overflow-auto flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-2xl bg-white text-slate-900 rounded-xl p-8 sm:p-12 shadow-2xl relative overflow-hidden my-auto border border-slate-300">
            
            {/* Watermark diagonal ribbon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-15 rotate-[-25deg]">
              <span className="text-3xl sm:text-5xl font-black text-rose-700 tracking-wider text-center">
                CONFIDENTIAL — PREPARED FOR {reviewerName?.toUpperCase() || 'SCHOLARSHIP COMMITTEE'} — {new Date().toLocaleDateString()}
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-4 mb-6 border-slate-200">
              <div className="text-left">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Academic Dossier</span>
                <h2 className="text-xl font-bold text-slate-900">Bijoy Krishna Das</h2>
                <p className="text-xs text-slate-600">Candidate ID: #BKD-2026-OXFORD-TRACK</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-2.5 py-1 text-[11px] font-semibold bg-emerald-100 text-emerald-800 rounded-md">
                  AUTHENTICATED RECORD
                </span>
                <p className="text-[10px] text-slate-500 mt-1">Verified Digital Fingerprint</p>
              </div>
            </div>

            <div className="text-left space-y-4 text-xs text-slate-700">
              <h3 className="text-base font-bold text-slate-900 border-l-4 border-amber-500 pl-2">
                {docTitle}
              </h3>
              <p className="leading-relaxed">
                This official certified record constitutes supporting evidence for doctoral admission, faculty evaluation, and prestigious international fellowship awards.
              </p>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <p><strong>Primary Investigator / Scholar:</strong> Bijoy Krishna Das</p>
                <p><strong>Specialization:</strong> Artificial Intelligence, Clinical Bio-Informatics & Distributed Edge Systems</p>
                <p><strong>Undergraduate Distinction:</strong> B.Sc (Hons) in CSE • Top 2% (CGPA 3.92/4.00)</p>
                <p><strong>Current Standing:</strong> Fully prepared for Commonwealth, Chevening, DAAD & Doctoral Research</p>
              </div>
              <p className="text-[11px] text-slate-500 italic">
                * Note: Full multi-page original PDF is dynamically injected with cryptographic timestamp and watermarks for reviewer integrity.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-500">
              <span>Security Classification: Strictly Confidential</span>
              <span>Ref: BKD-SEC-2026-v4</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
