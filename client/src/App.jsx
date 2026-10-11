import React, { useState } from 'react';
import { Navbar, CommandSearchModal } from './components/common/Navbar';
import { AccessGateModal, WatermarkModal } from './components/security/SecurityModals';
import { HeroSection, ExecutiveSummarySection } from './sections/HeroAndSummary';
import { ResearchAndJourneySection } from './sections/ResearchAndJourney';
import { ProjectsAndAwardsSection } from './sections/ProjectsAndAwards';
import { GlobalAndVaultSection } from './sections/GlobalAndVault';

export function App() {
  const [lang, setLang] = useState('en');
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Watermark Modal state
  const [activeDocForPreview, setActiveDocForPreview] = useState(null);

  // Authenticated committee reviewer state
  const [currentViewer, setCurrentViewer] = useState({
    name: 'Selection Committee',
    authenticated: true,
    expiresIn: '30 Days',
    accessCode: 'BIJOY2026'
  });

  const handleOpenDocPreview = (docTitle) => {
    setActiveDocForPreview(docTitle);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-300">
      
      {/* 1. Header & Navigation */}
      <Navbar 
        onOpenGate={() => setIsGateOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        currentViewer={currentViewer}
        lang={lang}
        setLang={setLang}
      />

      {/* 2. Main Sections */}
      <main className="relative">
        
        {/* Landing & Executive Summary */}
        <HeroSection 
          lang={lang} 
          onOpenDoc={handleOpenDocPreview}
          onOpenGate={() => setIsGateOpen(true)}
          currentViewer={currentViewer}
        />
        
        <ExecutiveSummarySection 
          lang={lang} 
          onOpenDoc={handleOpenDocPreview} 
        />

        {/* Academic Journey, Research Dashboard & Publications */}
        <ResearchAndJourneySection 
          lang={lang} 
          onOpenDoc={handleOpenDocPreview} 
        />

        {/* Featured Projects, Scholarships & Skills */}
        <ProjectsAndAwardsSection 
          lang={lang} 
          onOpenDoc={handleOpenDocPreview} 
        />

        {/* World Map, Recommendation Hub, Document Vault, Articles & Contact */}
        <GlobalAndVaultSection 
          lang={lang} 
          onOpenDoc={handleOpenDocPreview}
          currentViewer={currentViewer}
        />

      </main>

      {/* 3. Security & Search Modals */}
      <AccessGateModal 
        isOpen={isGateOpen}
        onClose={() => setIsGateOpen(false)}
        onAuthenticated={(viewerData) => setCurrentViewer(viewerData)}
        currentViewer={currentViewer}
      />

      <WatermarkModal 
        isOpen={!!activeDocForPreview}
        onClose={() => setActiveDocForPreview(null)}
        docTitle={activeDocForPreview}
        reviewerName={currentViewer.name}
      />

      <CommandSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectDoc={handleOpenDocPreview}
      />

    </div>
  );
}

export default App;
