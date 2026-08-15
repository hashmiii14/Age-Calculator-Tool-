'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ZodiacInfo } from '../../lib/data/zodiacData';

interface CompactZodiacCardProps {
  zodiac: ZodiacInfo;
}

export default function CompactZodiacCard({ zodiac }: CompactZodiacCardProps) {
  return (
    <div className="rounded-3xl sm:rounded-4xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 shadow-cute overflow-hidden transition-all">
      <div className="px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">

        {/* Big symbol */}
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl shrink-0 font-bold select-none bg-blush-100 dark:bg-plum-950 border border-blush-200 dark:border-plum-800 text-coral-500"
          aria-hidden="true"
        >
          {zodiac.unicodeSymbol}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Your Zodiac Sign</p>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              Astrology Profile
            </span>
          </div>
          <h3 className="text-2xl font-extrabold font-serif text-plum-900 dark:text-white">
            {zodiac.name}
            <span className="text-base font-medium text-coral-500 ml-3 font-sans">
              {zodiac.dateRange}
            </span>
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            {zodiac.element} · {zodiac.modality} ·{' '}
            {zodiac.personalityThemes.toLowerCase()}
          </p>
        </div>

        {/* Right arrow link */}
        <Link
          href="/zodiac-sign"
          className="shrink-0 hidden sm:flex items-center gap-1 text-xs font-extrabold text-coral-500 hover:text-coral-600 transition-colors"
        >
          All 12 Signs <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

