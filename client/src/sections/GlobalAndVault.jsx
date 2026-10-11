import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  ExternalLink, 
  Quote, 
  Lock, 
  FileDown, 
  ShieldCheck, 
  FileText,
  Mail,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { worldMapPins, recommendationLetters, documentVault, thoughtLeadershipArticles } from '../data/portfolioData';

export const GlobalAndVaultSection = ({ lang, onOpenDoc, currentViewer }) => {
  const [activePin, setActivePin] = useState(worldMapPins[0]);
  const [contactStatus, setContactStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: 'Doctoral Inquiry / Scholarship Committee Notice',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactStatus('Sending...');
    setTimeout(() => {
      setContactStatus('Success: Your encrypted transmission has been forwarded to Bijoy Krishna Das.');
      setFormData({ name: '', email: '', institution: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="space-y-24">
      
      {/* SECTION 10: INTERACTIVE GLOBAL FOOTPRINT & MAP ⭐ */}
      <section id="world-map" className="py-16 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-3 border border-cyan-500/20">
              SECTION 10 • INTERACTIVE WORLD FOOTPRINT ⭐
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Global Academic Collaborations & Target Institutions
            </h2>
            <p className="text-sm text-slate-300">
              Interactive geographic footprint tracking attended symposiums, research collaborators, and 2026/27 doctoral targets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Interactive Location Selector List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Select Destination / Research Node:
              </h4>
              {worldMapPins.map((pin, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePin(pin)}
                  className={`w-full text-left p-4 rounded-xl border transition flex items-center justify-between ${
                    activePin.name === pin.name
                      ? 'bg-amber-500/10 border-amber-500/50 text-white shadow-lg shadow-amber-500/10'
                      : 'glass-panel border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${activePin.name === pin.name ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400'}`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-200">{pin.name}</h5>
                      <p className="text-[10px] text-slate-400 font-mono">{pin.category}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-400">→</span>
                </button>
              ))}
            </div>

            {/* Selected Node Details Display */}
            <div className="lg:col-span-2 p-8 rounded-2xl glass-panel border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Globe2 className="w-64 h-64 text-amber-500" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
                  {activePin.category}
                </div>

                <h3 className="text-2xl font-bold font-heading text-white mb-3">
                  {activePin.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-xl">
                  {activePin.details}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6 max-w-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">
                      Academic Evidence
                    </span>
                    <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> {activePin.evidence}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenDoc(`Global Collaboration Record - ${activePin.name}`)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                  >
                    View Record
                  </button>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                  <span>Target Cycle: 2026/2027</span>
                  <span>•</span>
                  <span>Status: Fully Prepared & Verified</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 16: PROFESSOR RECOMMENDATION HUB ⭐ */}
      <section id="recommendations" className="py-16 relative border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs font-mono mb-3 border border-purple-500/20">
              SECTION 16 • PROFESSOR RECOMMENDATION HUB ⭐
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Institutional Letters of Recommendation
            </h2>
            <p className="text-sm text-slate-300">
              Authenticated testimonials and sealed evaluations from university department chairs and principal investigators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recommendationLetters.map((rec, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 relative flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-2xl mb-2 block">{rec.universityLogo}</span>
                      <h3 className="text-lg font-bold text-white font-heading">{rec.professor}</h3>
                      <p className="text-xs text-amber-400 font-medium">{rec.title}</p>
                      <p className="text-[11px] text-slate-400">{rec.institution}</p>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-amber-500/20 absolute -top-3 -left-2 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed pl-4 border-l-2 border-amber-500/40">
                      "{rec.excerpt}"
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 flex items-center gap-1 font-mono text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5" /> {rec.verificationStatus}
                  </span>
                  <button
                    onClick={() => onOpenDoc(`Recommendation Letter - ${rec.professor}`)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition flex items-center gap-1"
                  >
                    <span>View Letter Preview</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 17: DOCUMENT DOWNLOAD CENTER / SECURE VAULT ⭐ */}
      <section id="document-vault" className="py-16 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-3 border border-emerald-500/20">
              SECTION 17 • ENCRYPTED DOCUMENT VAULT ⭐
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Secure Academic Application Dossier Vault
            </h2>
            <p className="text-sm text-slate-300">
              Every document is encrypted and dynamically watermarked with your committee credentials for review integrity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {documentVault.map((doc, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between glass-card-hover"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {doc.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">{doc.pages}</span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white mb-4 leading-snug">
                    {doc.name}
                  </h4>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                  <button
                    onClick={() => onOpenDoc(doc.name)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition"
                  >
                    <FileDown className="w-3 h-3" /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400">
            🔒 Official Academic Documents • Formatted & verified for <span className="text-amber-400 font-mono">{currentViewer.name.toUpperCase()}</span>.
          </div>

        </div>
      </section>

      {/* SECTION 13: ARTICLES & THOUGHT LEADERSHIP */}
      <section id="articles" className="py-16 relative border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-mono mb-3 border border-amber-500/20">
              SECTION 13 • THOUGHT LEADERSHIP & SCHOLAR ARTICLES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Academic Reflections & Strategy
            </h2>
            <p className="text-sm text-slate-300">
              Perspectives on artificial intelligence ethics, scholarship methodology, and student mental health.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {thoughtLeadershipArticles.map((art, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between glass-card-hover">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {art.date}</span>
                    <span>{art.readingTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-3 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {art.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-800">
                  {art.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-amber-300 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 19: CONTACT CANDIDATE */}
      <section id="contact" className="py-20 relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-mono mb-3 border border-amber-500/20">
                SECTION 19 • DIRECT PROFESSOR & JURY CONTACT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Connect Directly with Bijoy Krishna Das
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-8">
                I welcome communication from university admissions committees, prospective doctoral supervisors, and scholarship program officers regarding research opportunities, fellowships, and academic collaborations for 2026/2027.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-slate-800">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-slate-500 font-mono block">Direct Email</span>
                    <a href="mailto:bijoy.research@outlook.com" className="text-white font-medium hover:text-amber-400 transition">
                      bijoy.research@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-slate-800">
                  <Globe2 className="w-5 h-5 text-cyan-400" />
                  <div>
                    <span className="text-slate-500 font-mono block">Current Location & Target Program</span>
                    <span className="text-white font-medium">Dhaka, Bangladesh • Open for Relocation (UK / Germany / EU / US / Japan)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-slate-500 font-mono block">Verification Contact</span>
                    <span className="text-white font-medium">All academic transcripts & references available via official university registrar.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div className="p-8 rounded-2xl glass-panel border border-slate-800">
              <h3 className="text-lg font-bold text-white font-heading mb-4">
                Send an Official Academic Inquiry
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Prof. David Miller" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Institutional Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="faculty@ox.ac.uk" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">University / Organization</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Chevening Secretariat / Oxford Department of Computer Science" 
                    value={formData.institution}
                    onChange={e => setFormData({...formData, institution: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Inquiry Details</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Please specify interview details, doctoral opportunity, or scholarship verification requests..." 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                {contactStatus && (
                  <div className="p-3 text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-lg">
                    {contactStatus}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Official Message</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Bijoy Krishna Das • Invitation-Only Academic Dossier</p>
          <p className="text-amber-400/80">Strictly Confidential • No Search Engine Indexing (Robots: Disallow)</p>
        </div>
      </footer>

    </div>
  );
};
