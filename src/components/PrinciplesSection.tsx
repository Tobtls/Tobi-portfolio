import React from 'react';
import { uxPrinciples, authorInfo } from '../data/portfolioData';
import { Compass, Sparkles, CheckCircle2, BookOpen, Quote, Shield } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  return (
    <section id="principles" className="py-16 sm:py-24 border-b border-stone-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 text-stone-700 text-xs font-mono mb-3">
              <Compass className="w-3.5 h-3.5" />
              Content Strategy Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
              UX Writing Philosophy
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-md">
            How plain language, empathy, and product logic combine to build intuitive software experiences.
          </p>
        </div>

        {/* 4 Core UX Writing Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {uxPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-[11px] font-mono font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-stone-400">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Content Design Manifesto Callout */}
        <div className="bg-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-300/80 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-800 shrink-0">
            <Quote className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
              Words are user interface components.
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              Every button label, error message, and tooltip either guides a person forward or stops them in their tracks. Great content design doesn’t decorate a completed UI; it defines the mental model that makes the UI obvious.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
