import React, { useState } from 'react';
import { Mail, Check, ExternalLink, ArrowUp, Heart, BookOpen, Send, Sparkles } from 'lucide-react';
import { authorInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(authorInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#FAF9F6] text-stone-900 pt-16 pb-12 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Banner */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-xl mb-12 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-amber-400 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Open for Opportunities
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Let&apos;s build clearer, more humane product experiences.
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              Whether you need to untangle complex user flows, reduce support inquiries through plain-language microcopy, or build a scalable content system, I&apos;d love to connect.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${authorInfo.email}`}
                className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all shadow-md flex items-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Send an Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-5 py-3 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-medium transition-all border border-stone-700 flex items-center gap-2 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-stone-400" />
                    <span>{authorInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-200/80 text-xs text-stone-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {authorInfo.name}</span>
            <span>•</span>
            <span>UX Writing & Content Design Portfolio</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.print()}
              className="text-stone-600 hover:text-stone-950 transition-colors flex items-center gap-1"
              title="Print portfolio case studies to PDF"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={scrollToTop}
              className="text-stone-600 hover:text-stone-950 transition-colors flex items-center gap-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
