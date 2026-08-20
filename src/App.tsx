import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudySection } from './components/CaseStudySection';
import { InteractiveCopyLab } from './components/InteractiveCopyLab';
import { PrinciplesSection } from './components/PrinciplesSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { caseStudies, authorInfo } from './data/portfolioData';

const AVATAR_STORAGE_KEY = 'tobi_portfolio_avatar_custom';

export default function App() {
  const [viewMode, setViewMode] = useState<'rich' | 'document' | 'interactive'>('rich');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    return localStorage.getItem(AVATAR_STORAGE_KEY) || authorInfo.avatar || '';
  });

  const handleAvatarChange = (newUrl: string) => {
    setAvatarUrl(newUrl);
    try {
      localStorage.setItem(AVATAR_STORAGE_KEY, newUrl);
    } catch (e) {
      console.warn('Could not save avatar to localStorage:', e);
    }
  };

  const handleResetAvatar = () => {
    localStorage.removeItem(AVATAR_STORAGE_KEY);
    setAvatarUrl(authorInfo.avatar || '');
  };

  const filteredCaseStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter((cs) => cs.id === activeFilter);

  const handleScrollToCaseStudy = (id: string) => {
    setActiveFilter('all');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 selection:bg-amber-200 selection:text-amber-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Header Navigation */}
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        avatarUrl={avatarUrl}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main>
        {/* Editorial Hero Banner */}
        <Hero
          avatarUrl={avatarUrl}
          onAvatarChange={handleAvatarChange}
          onResetAvatar={handleResetAvatar}
          onScrollToCaseStudy={handleScrollToCaseStudy}
        />

        {/* Case Studies Category / Quick Jump Filter Bar */}
        <section className="bg-white border-b border-stone-200 py-4 sticky top-16 sm:top-20 z-30 shadow-2xs">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                Case Studies:
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeFilter === 'all'
                      ? 'bg-stone-900 text-white font-semibold shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  All (3)
                </button>
                {caseStudies.map((cs) => (
                  <button
                    key={cs.id}
                    onClick={() => {
                      setActiveFilter(cs.id);
                      handleScrollToCaseStudy(cs.id);
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      activeFilter === cs.id
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {cs.number} {cs.title.split(' ')[0]}...
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-stone-500 hidden md:block">
              Focus: Microcopy • Error Recovery • Onboarding • Retention
            </div>
          </div>
        </section>

        {/* Case Studies Sections */}
        <div id="case-studies-container">
          {filteredCaseStudies.map((study) => (
            <CaseStudySection
              key={study.id}
              study={study}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Interactive Copy Simulation Sandbox */}
        <InteractiveCopyLab />

        {/* UX Writing Principles & Content Strategy */}
        <PrinciplesSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
