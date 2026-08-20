import React, { useState, useEffect } from 'react';
import { Mail, Check, ExternalLink, BookOpen, Layers, Sparkles, Menu, X, MessageSquare } from 'lucide-react';
import { authorInfo } from '../data/portfolioData';

interface HeaderProps {
  viewMode: 'rich' | 'document' | 'interactive';
  setViewMode: (mode: 'rich' | 'document' | 'interactive') => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ viewMode, setViewMode, onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(authorInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const navLinks = [
    { label: '01 Fintech', href: '#fintech-error-recovery' },
    { label: '02 Onboarding', href: '#b2b-analytics-onboarding' },
    { label: '03 Cancellation', href: '#subscription-retention' },
    { label: 'UX Principles', href: '#principles' },
    { label: 'Copy Lab', href: '#copy-lab' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-[#FAF9F6] border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand / Name */}
          <a
            href="#"
            className="group flex flex-col focus:outline-hidden focus-visible:ring-2 focus-visible:ring-stone-800 rounded-sm"
          >
            <span className="font-semibold tracking-tight text-base sm:text-lg text-stone-900 group-hover:text-amber-900 transition-colors flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-600"></span>
              {authorInfo.name}
            </span>
            <span className="text-xs font-mono tracking-wider text-stone-500 uppercase">
              {authorInfo.role}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-xs tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-stone-600 hover:text-stone-950 hover:bg-stone-200/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & View Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Mode Switcher */}
            <div className="hidden sm:inline-flex items-center bg-stone-200/70 p-1 rounded-full text-xs font-medium text-stone-600">
              <button
                id="view-mode-rich"
                onClick={() => setViewMode('rich')}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === 'rich'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'hover:text-stone-900'
                }`}
                title="Full Rich Visual Layout"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Rich View</span>
              </button>
              <button
                id="view-mode-document"
                onClick={() => setViewMode('document')}
                className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                  viewMode === 'document'
                    ? 'bg-white text-stone-900 shadow-xs font-semibold'
                    : 'hover:text-stone-900'
                }`}
                title="Minimalist PDF Document View"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Doc Mode</span>
              </button>
            </div>

            {/* Email / Contact Button */}
            <button
              id="copy-email-button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 transition-colors shadow-xs active:scale-95"
              title={`Click to copy: ${authorInfo.email}`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-stone-500" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <button
              id="open-contact-button"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white transition-colors shadow-xs active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200 flex flex-col gap-2">
            <div className="flex gap-2 p-1 bg-stone-100 rounded-lg mb-2 text-xs">
              <button
                onClick={() => {
                  setViewMode('rich');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-1.5 rounded text-center ${viewMode === 'rich' ? 'bg-white font-semibold text-stone-900 shadow-xs' : 'text-stone-600'}`}
              >
                Rich View
              </button>
              <button
                onClick={() => {
                  setViewMode('document');
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-1.5 rounded text-center ${viewMode === 'document' ? 'bg-white font-semibold text-stone-900 shadow-xs' : 'text-stone-600'}`}
              >
                Document Mode
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-stone-700 hover:bg-stone-100 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
