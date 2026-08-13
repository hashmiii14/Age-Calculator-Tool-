'use client';

import { Compass, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ZodiacInfo } from '../../lib/data/zodiacData';

interface CompactZodiacCardProps {
  zodiac: ZodiacInfo;
}

export default function CompactZodiacCard({ zodiac }: CompactZodiacCardProps) {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-zinc-800 shadow-subtle space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-coral-50 dark:bg-coral-950/40 text-coral-500 text-2xl flex items-center justify-center font-bold">
            {zodiac.unicodeSymbol}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-serif">
                {zodiac.name}
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 text-[10px] font-extrabold">
                {zodiac.dateRange}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-bold mt-0.5">
              {zodiac.element} Element • {zodiac.modality} Modality
            </p>
          </div>
        </div>

        <span className="text-[10px] font-extrabold text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-200/60 dark:border-purple-800/60">
          Astrology Profile
        </span>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
        {zodiac.name} is traditionally associated with {zodiac.personalityThemes.toLowerCase()}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-zinc-800 text-xs">
        <span className="text-[10px] text-slate-400 font-medium">
          Provided strictly for general interest & fun entertainment.
        </span>

        <Link
          href="/zodiac-sign"
          className="inline-flex items-center space-x-1 text-xs font-extrabold text-coral-500 hover:underline"
        >
          <span>Explore 12 Zodiac signs</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
