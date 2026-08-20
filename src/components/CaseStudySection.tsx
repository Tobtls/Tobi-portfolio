import React, { useState } from 'react';
import { CaseStudy } from '../types';
import { ScreenSimulator } from './ScreenSimulator';
import { 
  Target, Users2, Sparkles, ArrowRight, CheckCircle2, TrendingUp,
  AlertCircle, ShieldCheck, HelpCircle, FileText, ChevronDown, ChevronUp, Copy, Check
} from 'lucide-react';

interface CaseStudySectionProps {
  study: CaseStudy;
  viewMode: 'rich' | 'document' | 'interactive';
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ study, viewMode }) => {
  const [showRawCopy, setShowRawCopy] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id={study.id}
      className="py-12 sm:py-16 md:py-24 border-b border-stone-200 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Case Study Header & Number */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xl sm:text-2xl font-extrabold text-amber-700">
              {study.number}
            </span>
            <span className="h-4 w-px bg-stone-300"></span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-stone-200/80 text-stone-700">
              {study.domain}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 mb-3">
            {study.title}
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-serif italic max-w-3xl">
            {study.subtitle}
          </p>
        </div>

        {/* 3-Column Context Grid: Challenge, Audience, Content Goal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {/* CHALLENGE */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-stone-900">
                CHALLENGE
              </h3>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* AUDIENCE */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Users2 className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-stone-900">
                AUDIENCE
              </h3>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {study.audience}
            </p>
          </div>

          {/* CONTENT GOAL */}
          <div className="bg-white rounded-xl p-5 sm:p-6 border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-stone-900">
                CONTENT GOAL
              </h3>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {study.contentGoal}
            </p>
          </div>
        </div>

        {/* Key Writing Decisions / Content Strategy */}
        <div className="bg-stone-100/80 rounded-2xl p-6 sm:p-8 border border-stone-200/90 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              {study.id === 'fintech-error-recovery' && 'Key writing decisions'}
              {study.id === 'b2b-analytics-onboarding' && 'Content strategy'}
              {study.id === 'subscription-retention' && 'Content principles'}
            </h3>
            <span className="text-xs font-mono text-stone-500">Core Content Rationale</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.keyDecisions.map((decision, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span>{decision.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-3.5 border-l border-stone-300">
                  {decision.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Screen Simulator (Rich Mode) or Document View */}
        {viewMode !== 'document' ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-stone-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-900"></span>
                Screen Copy & Microcopy Architecture
              </h3>
              <button
                onClick={() => setShowRawCopy(!showRawCopy)}
                className="text-xs font-mono text-stone-600 hover:text-stone-900 underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                {showRawCopy ? 'Hide raw transcript' : 'View raw transcript'}
              </button>
            </div>

            <ScreenSimulator screens={study.screens} caseStudyId={study.id} />

            {/* Optional Raw Copy Accordion for quick copy-pasting */}
            {showRawCopy && (
              <div className="mt-4 p-5 bg-white rounded-xl border border-stone-200 space-y-4">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Raw Screen Copy Specification
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  {study.screens.map((scr) => (
                    <div key={scr.id} className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <div className="text-stone-800 font-bold mb-1 flex justify-between">
                        <span>{scr.label}</span>
                        <span className="text-stone-400 font-normal">{scr.tag}</span>
                      </div>
                      <p className="text-stone-700 font-sans text-sm my-1">&ldquo;{scr.body}&rdquo;</p>
                      {scr.actions?.primary && (
                        <div className="text-[11px] text-stone-500 mt-2">
                          Action: <strong>{scr.actions.primary}</strong>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Document Mode Layout */
          <div className="mb-12 bg-white p-6 sm:p-8 rounded-xl border border-stone-300">
            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-stone-900 mb-6 border-b border-stone-200 pb-2">
              Screen copy
            </h3>
            <div className="space-y-6">
              {study.screens.map((scr) => (
                <div key={scr.id} className="border-b border-stone-100 pb-5 last:border-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-stone-800 uppercase">
                      {scr.label}
                    </span>
                    <span className="font-mono text-xs text-stone-500">
                      {scr.tag}
                    </span>
                  </div>
                  <p className="text-stone-900 text-base leading-relaxed font-sans mb-1">
                    {scr.body}
                  </p>
                  {scr.subtext && (
                    <p className="text-xs text-stone-500">{scr.subtext}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Before / After Comparison */}
        <div className="mb-12">
          <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            {study.beforeAfter.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {/* Generic / Avoid Column */}
            <div className="bg-rose-50/70 rounded-xl p-5 sm:p-6 border border-rose-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-rose-200/80 text-rose-900 text-[11px] font-mono font-bold tracking-wider uppercase">
                    {study.beforeAfter.beforeLabel}
                  </span>
                  <span className="text-xs text-rose-700 font-medium">Problematic</span>
                </div>
                <blockquote className="text-stone-800 font-mono text-sm leading-relaxed p-4 bg-white/80 rounded-lg border border-rose-200">
                  &ldquo;{study.beforeAfter.beforeText}&rdquo;
                </blockquote>
              </div>
              <div className="mt-4 text-xs text-rose-800/90 leading-relaxed font-sans">
                ⚠️ High user anxiety, lack of clear recovery, or manipulative friction.
              </div>
            </div>

            {/* User-Centered / Prefer Column */}
            <div className="bg-emerald-50/70 rounded-xl p-5 sm:p-6 border border-emerald-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded bg-emerald-200/80 text-emerald-950 text-[11px] font-mono font-bold tracking-wider uppercase">
                    {study.beforeAfter.afterLabel}
                  </span>
                  <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> High Trust
                  </span>
                </div>
                <blockquote className="text-stone-900 font-sans font-medium text-sm sm:text-base leading-relaxed p-4 bg-white/90 rounded-lg border border-emerald-200">
                  &ldquo;{study.beforeAfter.afterText}&rdquo;
                </blockquote>
              </div>
              <div className="mt-4 text-xs text-emerald-900 leading-relaxed font-sans">
                ✓ Humane, plain-language solution with transparent consequences and immediate action.
              </div>
            </div>
          </div>

          {/* Rationale explanation text block */}
          {study.beforeAfter.whyItWorks && (
            <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-900">Why this works: </strong>
              {study.beforeAfter.whyItWorks}
            </div>
          )}
        </div>

        {/* Success Signals */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold font-mono tracking-wider uppercase text-stone-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Success signals
            </h3>
            <span className="text-xs font-mono text-stone-400">Measurable Outcomes</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {study.successSignals.map((signal, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3"
              >
                <div className="p-1 rounded bg-emerald-100 text-emerald-800 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                  {signal}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-stone-400 mr-2">Discipline Tags:</span>
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-stone-100 text-[11px] font-mono text-stone-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
