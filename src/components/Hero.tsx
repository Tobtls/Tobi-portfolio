import React, { useState, useRef } from 'react';
import { ShieldCheck, Users, HeartHandshake, ArrowRight, ArrowDownRight, Compass, MessageSquareCode, CheckCircle2, Camera, Upload, Link2, RotateCcw, Image } from 'lucide-react';
import { authorInfo, pillars } from '../data/portfolioData';

interface HeroProps {
  onScrollToCaseStudy: (id: string) => void;
  avatarUrl?: string;
  onAvatarChange?: (url: string) => void;
  onResetAvatar?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToCaseStudy,
  avatarUrl = authorInfo.avatar,
  onAvatarChange,
  onResetAvatar,
}) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Please choose an image under 10MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      if (uploadEvent.target?.result) {
        const dataUrl = uploadEvent.target.result as string;
        onAvatarChange?.(dataUrl);
        setShowPhotoModal(false);
        setUploadError(null);
      }
    };
    reader.onerror = () => {
      setUploadError('Failed to load image file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (customUrlInput.trim()) {
      onAvatarChange?.(customUrlInput.trim());
      setShowPhotoModal(false);
      setCustomUrlInput('');
      setUploadError(null);
    }
  };

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
          {/* Author Badge with Small Avatar Image */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="relative group">
              <img
                src={avatarUrl || authorInfo.avatar}
                alt={authorInfo.name}
                referrerPolicy="no-referrer"
                className="w-13 h-13 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-stone-300 group-hover:ring-amber-500 transition-all cursor-pointer"
                onClick={() => setShowPhotoModal(true)}
                title="Click to change profile picture"
              />
              <button
                type="button"
                onClick={() => setShowPhotoModal(true)}
                className="absolute inset-0 bg-stone-900/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"
                title="Change photo"
                aria-label="Change photo"
              >
                <Camera className="w-4 h-4" />
              </button>
              <span
                className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white"
                title="Available for UX writing projects"
              ></span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-stone-900 font-mono text-sm sm:text-base font-semibold tracking-tight">
                  [{authorInfo.name}]
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-stone-100 text-[11px] font-mono text-stone-600 border border-stone-200">
                  {authorInfo.role}
                </span>
                <button
                  type="button"
                  onClick={() => setShowPhotoModal(true)}
                  className="text-xs text-amber-800 hover:text-amber-950 font-medium underline underline-offset-2 flex items-center gap-1 ml-1"
                >
                  <Upload className="w-3 h-3" /> Change Photo
                </button>
              </div>
              <p className="text-xs text-stone-500 font-sans mt-0.5">
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

      {/* Photo Picker / Upload Modal */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-amber-50 text-amber-900 rounded-lg">
                  <Image className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-base">Set Profile Photo</h3>
                  <p className="text-xs text-stone-500">Upload your exact photo or paste an image link</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowPhotoModal(false);
                  setUploadError(null);
                }}
                className="text-stone-400 hover:text-stone-700 p-1 rounded-md text-sm font-semibold"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-4">
              {/* Option A: Direct File Upload */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Option 1: Upload from device
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3 px-4 border-2 border-dashed border-stone-300 hover:border-amber-600 bg-stone-50 hover:bg-amber-50/50 rounded-xl flex items-center justify-center gap-2 text-stone-700 hover:text-amber-950 font-medium text-sm transition-all"
                >
                  <Upload className="w-4 h-4 text-amber-700" />
                  <span>Choose JPEG/PNG from computer</span>
                </button>
              </div>

              {/* Option B: Image URL */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Option 2: Paste image URL
                </label>
                <form onSubmit={handleApplyUrl} className="flex gap-2">
                  <div className="relative flex-1">
                    <Link2 className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      placeholder="https://... photo link"
                      className="w-full pl-9 pr-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-600 focus:bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    Apply
                  </button>
                </form>
              </div>

              {uploadError && (
                <p className="text-xs text-red-600 bg-red-50 p-2 rounded-md">
                  {uploadError}
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              {onResetAvatar && (
                <button
                  type="button"
                  onClick={() => {
                    onResetAvatar();
                    setShowPhotoModal(false);
                  }}
                  className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset default
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setShowPhotoModal(false);
                  setUploadError(null);
                }}
                className="ml-auto px-4 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
