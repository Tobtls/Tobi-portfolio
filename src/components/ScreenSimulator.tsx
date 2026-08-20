import React, { useState } from 'react';
import { ScreenCopyItem } from '../types';
import { Sparkles, Info, Check, RefreshCw, ArrowRight, Shield, AlertTriangle, CheckCircle, Mail, HelpCircle, XCircle } from 'lucide-react';

interface ScreenSimulatorProps {
  screens: ScreenCopyItem[];
  caseStudyId: string;
}

export const ScreenSimulator: React.FC<ScreenSimulatorProps> = ({ screens, caseStudyId }) => {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null);
  const [simulatedState, setSimulatedState] = useState<'normal' | 'processing' | 'error' | 'success'>('normal');

  const currentScreen = screens[activeScreenIndex] || screens[0];

  return (
    <div className="bg-stone-900 text-stone-100 rounded-2xl p-4 sm:p-6 lg:p-8 border border-stone-800 shadow-xl overflow-hidden">
      {/* Top Header & Screen Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono tracking-wider uppercase text-stone-400">
              Interactive Screen Flow
            </span>
          </div>
          <p className="text-sm text-stone-300">
            Select a state to inspect the contextual microcopy and UX writing rationales.
          </p>
        </div>

        {/* Screen Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => {
                setActiveScreenIndex(idx);
                setActiveAnnotation(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeScreenIndex === idx
                  ? 'bg-stone-800 text-amber-300 shadow-xs border border-stone-700'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
              }`}
            >
              {screen.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Container: Split View (Device UI Mockup + Copy Annotation Inspector) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
        {/* Simulated UI Component Box (7 cols) */}
        <div className="lg:col-span-7 bg-stone-950 rounded-xl p-5 sm:p-7 border border-stone-800/90 shadow-inner flex flex-col justify-between min-h-[360px]">
          {/* Mockup Topbar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-800/80 text-xs font-mono text-stone-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
            </div>
            <span className="px-2 py-0.5 rounded bg-stone-900 text-stone-400 text-[10px] tracking-widest uppercase">
              {currentScreen.tag}
            </span>
          </div>

          {/* Screen Content Renderings */}
          <div className="py-2 space-y-4">
            {/* Specific Visual Renderings based on Case Study & State */}
            {caseStudyId === 'fintech-error-recovery' && (
              <div className="space-y-4">
                {currentScreen.label === 'REVIEW TRANSFER' && (
                  <div className="bg-stone-900/90 rounded-xl p-5 border border-stone-800 space-y-3">
                    <div className="flex justify-between items-center text-xs text-stone-400 border-b border-stone-800 pb-2">
                      <span>Recipient</span>
                      <span className="text-stone-200 font-medium">Alex Morgan</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-stone-400 border-b border-stone-800 pb-2">
                      <span>Amount</span>
                      <span className="text-xl font-bold text-white">$850.00</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-stone-400 mb-3">{currentScreen.subtext}</p>
                      <button className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2">
                        {currentScreen.body}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {currentScreen.label === 'PROCESSING STATE' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto">
                      <RefreshCw className="w-6 h-6 text-amber-400 animate-spin" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {currentScreen.heading}
                      </h4>
                      <p className="text-sm text-stone-300 max-w-sm mx-auto leading-relaxed">
                        {currentScreen.body}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-stone-800/80 text-xs text-stone-400">
                      {currentScreen.subtext}
                    </div>
                  </div>
                )}

                {currentScreen.label === 'RECOVERABLE ERROR' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-rose-900/40 text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 shrink-0">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white mb-1">
                          {currentScreen.heading}
                        </h4>
                        <p className="text-sm text-stone-300 leading-relaxed font-medium">
                          {currentScreen.body}
                        </p>
                      </div>
                    </div>
                    <div className="bg-stone-950/70 p-3 rounded-lg border border-stone-800/80 text-xs text-stone-400">
                      {currentScreen.subtext}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <button className="flex-1 py-2 bg-stone-100 hover:bg-white text-stone-900 font-bold text-xs rounded-lg transition-colors">
                        Try again
                      </button>
                      <button className="flex-1 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs rounded-lg transition-colors border border-stone-700">
                        Choose another payment method
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {caseStudyId === 'b2b-analytics-onboarding' && (
              <div className="space-y-4">
                {currentScreen.label === 'ONBOARDING LANDING' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-stone-800 text-[11px] font-mono text-amber-300">
                      Step 1 of 3
                    </div>
                    <h4 className="text-lg font-bold text-white leading-snug">
                      {currentScreen.heading}
                    </h4>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      {currentScreen.body}
                    </p>
                    <div className="flex items-center gap-3 pt-3">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors">
                        Connect data source
                      </button>
                      <button className="px-3 py-2 text-stone-400 hover:text-stone-200 text-xs">
                        Explore sample data
                      </button>
                    </div>
                  </div>
                )}

                {currentScreen.label === 'INVITE TEAMMATES' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 space-y-4">
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {currentScreen.heading}
                      </h4>
                      <p className="text-xs text-stone-400">
                        {currentScreen.body}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="colleague@company.com"
                        readOnly
                        className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-300 focus:outline-hidden"
                      />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors">
                        Send invitations
                      </button>
                      <button className="text-xs text-stone-400 hover:text-stone-200 underline">
                        I’ll do this later
                      </button>
                    </div>
                  </div>
                )}

                {currentScreen.label === 'ROLE HELPER' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                      <HelpCircle className="w-4 h-4" />
                      <span>{currentScreen.heading}</span>
                    </div>
                    <div className="space-y-2 text-xs text-stone-300 pt-1">
                      <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-800">
                        <strong className="text-white">Viewer:</strong> can explore dashboards and export reports.
                      </div>
                      <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-800">
                        <strong className="text-white">Editor:</strong> can create and update dashboards.
                      </div>
                      <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-800">
                        <strong className="text-white">Admin:</strong> can manage people, billing, and workspace settings.
                      </div>
                    </div>
                  </div>
                )}

                {currentScreen.label === 'SKIP STATE' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 space-y-4">
                    <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {currentScreen.heading}
                      </h4>
                      <p className="text-sm text-stone-300 leading-relaxed">
                        {currentScreen.body}
                      </p>
                    </div>
                    <div className="pt-2">
                      <button className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-white font-medium text-xs rounded-lg transition-colors border border-stone-700">
                        Continue to dashboard
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {caseStudyId === 'subscription-retention' && (
              <div className="space-y-4">
                {currentScreen.label === 'CANCELLATION CHOICE' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 space-y-4">
                    <h4 className="text-base font-bold text-white leading-snug">
                      {currentScreen.heading}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <button className="p-3 bg-stone-950 hover:bg-stone-800/80 rounded-lg border border-stone-800 text-left transition-colors">
                        <div className="text-xs font-bold text-white mb-1">Pause plan</div>
                        <div className="text-[11px] text-stone-400">Pause for up to 3 months</div>
                      </button>
                      <button className="p-3 bg-stone-950 hover:bg-stone-800/80 rounded-lg border border-stone-800 text-left transition-colors">
                        <div className="text-xs font-bold text-white mb-1">Change frequency</div>
                        <div className="text-[11px] text-stone-400">Switch to bi-weekly or monthly</div>
                      </button>
                    </div>
                    <div className="pt-2 text-center">
                      <button className="text-xs text-stone-400 hover:text-stone-200 underline">
                        Continue to cancellation
                      </button>
                    </div>
                  </div>
                )}

                {currentScreen.label === 'FINAL CONFIRMATION' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 space-y-4">
                    <h4 className="text-base font-bold text-white">
                      {currentScreen.heading}
                    </h4>
                    <div className="p-3.5 bg-stone-950 rounded-lg border border-stone-800 text-xs text-stone-300 leading-relaxed">
                      {currentScreen.body}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <button className="flex-1 py-2.5 bg-rose-600/90 hover:bg-rose-600 text-white font-bold text-xs rounded-lg transition-colors">
                        Cancel subscription
                      </button>
                      <button className="flex-1 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-lg transition-colors border border-stone-700">
                        Keep my plan
                      </button>
                    </div>
                  </div>
                )}

                {currentScreen.label === 'SUCCESS MESSAGE' && (
                  <div className="bg-stone-900/90 rounded-xl p-6 border border-stone-800 text-center space-y-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">
                        {currentScreen.heading}
                      </h4>
                      <p className="text-xs text-stone-300 max-w-sm mx-auto leading-relaxed">
                        {currentScreen.body}
                      </p>
                    </div>
                    <div className="flex justify-center gap-2 pt-2">
                      <button className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs rounded-lg border border-stone-700">
                        View account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer of simulated component */}
          <div className="pt-4 mt-3 border-t border-stone-900 flex items-center justify-between text-[11px] text-stone-500 font-mono">
            <span>Flow Component {activeScreenIndex + 1} of {screens.length}</span>
            <span className="text-amber-400/80">Humane Microcopy Pattern</span>
          </div>
        </div>

        {/* Microcopy & Rationale Inspector (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-stone-900/70 rounded-xl p-5 sm:p-6 border border-stone-800">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-300">
                Microcopy Breakdown & Rationale
              </h4>
            </div>

            {/* Exact Copy Text Quotation */}
            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800/90 mb-5">
              <div className="text-[11px] font-mono text-stone-500 uppercase mb-1">
                Documented Screen Copy:
              </div>
              <div className="text-sm font-serif italic text-amber-100 leading-relaxed">
                &ldquo;{currentScreen.body}&rdquo;
              </div>
            </div>

            {/* Clickable Annotations */}
            {currentScreen.annotations && currentScreen.annotations.length > 0 && (
              <div className="space-y-3">
                <div className="text-xs font-medium text-stone-400 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-stone-500" />
                  <span>Key decisions in this screen:</span>
                </div>
                <div className="space-y-2">
                  {currentScreen.annotations.map((ann, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveAnnotation(ann.phrase)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        activeAnnotation === ann.phrase
                          ? 'bg-amber-950/40 border-amber-500/60 text-amber-200 shadow-xs'
                          : 'bg-stone-950/60 border-stone-800/80 text-stone-300 hover:border-stone-700'
                      }`}
                    >
                      <div className="text-xs font-mono font-semibold text-amber-300 mb-1 flex items-center justify-between">
                        <span>&ldquo;{ann.phrase}&rdquo;</span>
                        <span className="text-[10px] text-stone-500 font-sans">Why this matters</span>
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed font-normal">
                        {ann.rationale}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-500 font-mono">
            <span>Tobi Lawalson UX Writing</span>
            <span className="text-emerald-400">Tested in Production</span>
          </div>
        </div>
      </div>
    </div>
  );
};
