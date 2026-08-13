'use client';

import { useState } from 'react';
import { Compass, Sparkles, Flame, Mountain, Wind, Droplets, Heart, AlertCircle } from 'lucide-react';
import { ZODIAC_SIGNS, ZodiacInfo } from '../../lib/data/zodiacData';

interface ZodiacAstrologySectionProps {
  userZodiac?: ZodiacInfo;
}

export default function ZodiacAstrologySection({ userZodiac }: ZodiacAstrologySectionProps) {
  const [selectedZodiac, setSelectedZodiac] = useState<ZodiacInfo>(
    userZodiac || ZODIAC_SIGNS.Aries
  );

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Fire': return <Flame className="w-4 h-4 text-coral-500" />;
      case 'Earth': return <Mountain className="w-4 h-4 text-emerald-500" />;
      case 'Air': return <Wind className="w-4 h-4 text-sky-500" />;
      case 'Water': return <Droplets className="w-4 h-4 text-purple-500" />;
      default: return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <div id="birth-astrology" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-500 to-coral-500 text-white flex items-center justify-center font-bold text-xs">
            ✨
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
              Birth Astrology Discovery
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Western Zodiac Sun Sign Profile & 12 Signs Directory
            </p>
          </div>
        </div>

        <span className="text-[11px] font-bold text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 px-3 py-1 rounded-full">
          For Entertainment & General Interest
        </span>
      </div>

      {/* Main Selected Zodiac Spotlight Card */}
      <div className="p-6 sm:p-8 rounded-4xl bg-gradient-to-br from-white to-blush-50 dark:from-plum-900 dark:to-plum-950 border border-blush-200 dark:border-plum-800 shadow-cute space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-blush-200 dark:border-plum-800">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-coral-500 via-blush-500 to-purple-500 text-white text-3xl flex items-center justify-center shadow-lg shadow-coral-500/20">
              {selectedZodiac.unicodeSymbol}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-3xl font-extrabold text-plum-900 dark:text-white font-serif">
                  {selectedZodiac.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold ${selectedZodiac.badgeBg}`}>
                  {selectedZodiac.dateRange}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1 flex items-center space-x-2">
                <span className="flex items-center space-x-1">
                  {getElementIcon(selectedZodiac.element)}
                  <span>{selectedZodiac.element} Element</span>
                </span>
                <span>•</span>
                <span>{selectedZodiac.modality} Modality</span>
                <span>•</span>
                <span>Ruled by {selectedZodiac.rulingPlanet}</span>
              </p>
            </div>
          </div>

          {userZodiac && userZodiac.name === selectedZodiac.name && (
            <div className="px-3.5 py-1.5 rounded-full bg-coral-500 text-white text-xs font-extrabold shadow-sm animate-pulse">
              Your Birth Sign 🌟
            </div>
          )}
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
          {selectedZodiac.summary}
        </p>

        {/* Breakdown Grid: Strengths, Challenges, Compatibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Strengths */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900/80 border border-blush-100 dark:border-plum-800 space-y-2">
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
              Core Strengths
            </span>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300">
              {selectedZodiac.strengths.map((s) => (
                <li key={s} className="flex items-center space-x-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Themes */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900/80 border border-blush-100 dark:border-plum-800 space-y-2">
            <span className="font-extrabold text-coral-600 dark:text-coral-400 uppercase tracking-wider block">
              Growth & Traits
            </span>
            <ul className="space-y-1 text-slate-600 dark:text-slate-300">
              {selectedZodiac.challenges.map((c) => (
                <li key={c} className="flex items-center space-x-1.5">
                  <span className="text-coral-400 font-bold">✦</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compatibility */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900/80 border border-blush-100 dark:border-plum-800 space-y-2">
            <span className="font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-wider block">
              Compatible Signs
            </span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {selectedZodiac.compatibleSigns.map((cs) => (
                <span
                  key={cs}
                  className="px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold"
                >
                  {cs}
                </span>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 pt-1">
              Natural harmony in energy and shared element values.
            </p>
          </div>
        </div>
      </div>

      {/* 12 Zodiac Signs Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-plum-900 dark:text-white uppercase tracking-wider font-sans">
          Explore All 12 Zodiac Sun Signs
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {Object.values(ZODIAC_SIGNS).map((z) => {
            const isSelected = selectedZodiac.name === z.name;
            const isUserSign = userZodiac?.name === z.name;
            return (
              <button
                key={z.name}
                type="button"
                onClick={() => setSelectedZodiac(z)}
                className={`p-3.5 rounded-3xl text-left transition-all border ${
                  isSelected
                    ? 'bg-coral-500 text-white border-coral-500 shadow-cute scale-105'
                    : 'bg-white dark:bg-plum-900 text-slate-800 dark:text-slate-200 border-blush-100 dark:border-plum-800 hover:border-coral-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{z.unicodeSymbol}</span>
                  {isUserSign && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  )}
                </div>
                <div className="font-extrabold text-sm mt-1">{z.name}</div>
                <div className={`text-[10px] ${isSelected ? 'text-coral-100' : 'text-slate-400'}`}>
                  {z.dateRange}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Entertainment Disclaimer Callout */}
      <div className="p-4 rounded-3xl bg-blush-100/60 dark:bg-plum-900/40 border border-blush-200/80 dark:border-plum-800 text-xs text-slate-500 dark:text-slate-400 flex items-start space-x-2.5">
        <AlertCircle className="w-4 h-4 text-coral-500 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Astrology Disclaimer:</strong> Zodiac sign details on AgePulse are designed strictly for fun entertainment and general personality discovery. We do not make medical, financial, legal, or guaranteed future predictions.
        </p>
      </div>
    </div>
  );
}
