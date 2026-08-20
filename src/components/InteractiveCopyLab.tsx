import React, { useState } from 'react';
import { caseStudies } from '../data/portfolioData';
import { Sparkles, Sliders, CheckCircle2, XCircle, ArrowRight, Gauge, HeartHandshake, ShieldAlert } from 'lucide-react';

export const InteractiveCopyLab: React.FC = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [useTobiCopy, setUseTobiCopy] = useState(true);

  const activeCase = caseStudies[selectedCaseIdx];

  // Calculated metrics for visualization
  const metrics = useTobiCopy
    ? {
        clarity: 98,
        anxiety: 12,
        actionability: 96,
        sentimentLabel: 'Calm, Reassuring & Actionable',
        supportRisk: 'Extremely Low',
      }
    : {
        clarity: 34,
        anxiety: 88,
        actionability: 25,
        sentimentLabel: 'Confusing, High Anxiety & Manipulative',
        supportRisk: 'High (Repeated inquiries expected)',
      };

  return (
    <section id="copy-lab" className="py-16 sm:py-24 bg-stone-900 text-stone-100 border-b border-stone-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 border border-stone-700 text-amber-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Microcopy Comparative Lab
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Simulate the Content Shift
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Toggle between standard system copy and Tobi Lawalson’s human-centered microcopy to examine clarity scores and user emotional impact.
          </p>
        </div>

        {/* Case Study Switcher Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseIdx(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCaseIdx === idx
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-lg'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {cs.number} {cs.title}
            </button>
          ))}
        </div>

        {/* Main Comparison Sandbox Card */}
        <div className="bg-stone-950 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-2xl">
          {/* Toggle Switch */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono text-stone-400 uppercase">Context Scenario:</div>
              <div className="text-base font-bold text-white mt-0.5">{activeCase.subtitle}</div>
            </div>

            <div className="inline-flex items-center bg-stone-900 p-1.5 rounded-xl border border-stone-700">
              <button
                onClick={() => setUseTobiCopy(false)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  !useTobiCopy
                    ? 'bg-rose-900/80 text-rose-100 shadow-xs font-semibold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Generic System Copy
              </button>
              <button
                onClick={() => setUseTobiCopy(true)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  useTobiCopy
                    ? 'bg-emerald-600 text-white shadow-xs font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Tobi Lawalson Copy
              </button>
            </div>
          </div>

          {/* Active Copy Rendering Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Rendered Copy Box (7 cols) */}
            <div className="lg:col-span-7">
              <div className={`p-6 rounded-xl border transition-all ${
                useTobiCopy
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-100'
                  : 'bg-rose-950/20 border-rose-500/40 text-rose-100'
              }`}>
                <div className="flex items-center justify-between text-xs font-mono mb-4 pb-3 border-b border-white/10">
                  <span className={useTobiCopy ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {useTobiCopy ? activeCase.beforeAfter.afterLabel : activeCase.beforeAfter.beforeLabel}
                  </span>
                  <span className="text-stone-400">Production Simulation</span>
                </div>

                <p className="text-lg sm:text-xl font-serif leading-relaxed text-white">
                  &ldquo;{useTobiCopy ? activeCase.beforeAfter.afterText : activeCase.beforeAfter.beforeText}&rdquo;
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-stone-300">
                  <strong>User Takeaway: </strong>
                  {useTobiCopy
                    ? activeCase.beforeAfter.whyItWorks
                    : 'Leaves the user uncertain, stranded, or emotionally coerced.'}
                </div>
              </div>
            </div>

            {/* Right: Cognitive Impact Telemetry (5 cols) */}
            <div className="lg:col-span-5 space-y-4 bg-stone-900/80 p-5 sm:p-6 rounded-xl border border-stone-800">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                Simulated Cognitive Impact
              </div>

              {/* Clarity Bar */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-stone-300">Clarity & Understanding</span>
                  <span className={useTobiCopy ? 'text-emerald-400' : 'text-rose-400'}>
                    {metrics.clarity}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      useTobiCopy ? 'bg-emerald-500 w-[98%]' : 'bg-rose-500 w-[34%]'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Anxiety Level Bar */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-stone-300">Cognitive Anxiety / Friction</span>
                  <span className={useTobiCopy ? 'text-emerald-400' : 'text-rose-400'}>
                    {metrics.anxiety}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      useTobiCopy ? 'bg-emerald-500 w-[12%]' : 'bg-rose-500 w-[88%]'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Actionability Bar */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1">
                  <span className="text-stone-300">Self-Service Actionability</span>
                  <span className={useTobiCopy ? 'text-emerald-400' : 'text-rose-400'}>
                    {metrics.actionability}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      useTobiCopy ? 'bg-emerald-500 w-[96%]' : 'bg-rose-500 w-[25%]'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Overall Tone Tag */}
              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-400">Support Risk:</span>
                <span className={useTobiCopy ? 'text-emerald-400 font-medium' : 'text-rose-400 font-medium'}>
                  {metrics.supportRisk}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
