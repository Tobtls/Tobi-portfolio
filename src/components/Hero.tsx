import React from 'react';
import { ShieldCheck, Users, HeartHandshake, ArrowRight, Compass, MessageSquareCode, CheckCircle2 } from 'lucide-react';
import { authorInfo, pillars } from '../data/portfolioData';

interface HeroProps {
  onScrollToCaseStudy: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCaseStudy }) => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'ShieldAlert':
        return <ShieldCheck className="w-5 h-5 text-amber-700" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-emerald-700" />;
      default:
        return <Compass className="w-5 h-5 text-stone-700" />;
    }
  };

  return (
    <section id="hero-section" className="pt-8 pb-16 md:pt-14 md:pb-24 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200/90 text-[11px] font-mono tracking-widest text-stone-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            {authorInfo.headerTag}
          </div>
          <span className="text-xs font-mono text-stone-400 hidden sm:inline">
            3 Production Case Studies
          </span>
        </div>

        {/* Author & Main Title Block */}
        <div className="max-w-4xl">
          {/* Author Badge with Clean Portrait Image */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5">
            <div className="relative shrink-0">
              <img
                src={authorInfo.avatar}
                alt={authorInfo.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-[center_20%] aspect-square border-2 border-white shadow-sm ring-2 ring-stone-300"
              />
              <span
                className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs"
                title="Available for UX writing projects"
              ></span>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-stone-900 font-mono text-sm sm:text-base font-semibold tracking-tight">
                  [{authorInfo.name}]
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 border border-stone-200">
                  {authorInfo.role}
                </span>
              </div>
              <p className="text-xs text-stone-500 font-sans mt-0.5 line-clamp-1 sm:line-clamp-none">
                Product Microcopy • Onboarding Systems • Ethical Retention
              </p>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.08] mb-6">
            UX Writing <br className="hidden sm:inline" />
            <span className="text-stone-700 font-serif italic font-normal">Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-10">
            {authorInfo.heroSubtitle}
          </p>
        </div>

        {/* Portfolio Positioning Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs mb-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-stone-400 to-emerald-500"></div>
          
          <div className="flex items-center gap-2 mb-3">
            <MessageSquareCode className="w-4 h-4 text-amber-700" />
            <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-900">
              Portfolio Positioning
            </h2>
          </div>

          <blockquote className="text-stone-800 text-base sm:text-lg leading-relaxed font-serif italic sm:leading-8 pl-4 border-l-2 border-stone-300">
            &ldquo;{authorInfo.positioning}&rdquo;
          </blockquote>

          <div className="mt-6 pt-5 border-t border-stone-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500 font-medium">
            <span className="flex items-center gap-1.5 text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> User-Centric Microcopy
            </span>
            <span className="flex items-center gap-1.5 text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Anxiety Reduction
            </span>
            <span className="flex items-center gap-1.5 text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Measurable Success Metrics
            </span>
            <span className="flex items-center gap-1.5 text-stone-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Anti-Dark Patterns
            </span>
          </div>
        </div>

        {/* What These Samples Show - 3 Pillar Cards */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold font-mono tracking-wider uppercase text-stone-500">
              What these samples show
            </h3>
            <span className="text-xs text-stone-400 font-mono">Click to jump into study</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                onClick={() => onScrollToCaseStudy(pillar.caseStudyId)}
                className="group cursor-pointer bg-stone-100/70 hover:bg-white p-5 sm:p-6 rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-white rounded-lg border border-stone-200/80 shadow-2xs group-hover:scale-105 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="font-mono text-xs font-semibold text-stone-400 group-hover:text-stone-900 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 mb-2 group-hover:text-amber-900 transition-colors flex items-center justify-between">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 flex items-center text-xs font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
