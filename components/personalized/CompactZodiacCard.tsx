'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ZodiacInfo } from '../../lib/data/zodiacData';

interface CompactZodiacCardProps {
  zodiac: ZodiacInfo;
}

export default function CompactZodiacCard({ zodiac }: CompactZodiacCardProps) {
  return (
    <div className="rounded-2xl" style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>
      <div className="px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">

        {/* Big symbol — visual anchor */}
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl shrink-0 font-bold select-none"
          style={{ backgroundColor: '#1D2133', border: '1px solid #252A3D' }}
          aria-hidden="true"
        >
          {zodiac.unicodeSymbol}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <p style={{ color: '#636B8A' }} className="text-xs font-semibold uppercase tracking-widest">Your Zodiac Sign</p>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded"
              style={{ backgroundColor: '#1D2133', color: '#636B8A', border: '1px solid #252A3D' }}>
              For entertainment
            </span>
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-2xl font-extrabold font-serif">
            {zodiac.name}
            <span style={{ color: '#636B8A' }} className="text-base font-medium ml-3 font-sans">
              {zodiac.dateRange}
            </span>
          </h3>
          <p style={{ color: '#9AA3C4' }} className="text-sm leading-relaxed">
            {zodiac.element} · {zodiac.modality} ·{' '}
            {zodiac.personalityThemes.toLowerCase()}
          </p>
        </div>

        {/* Right arrow link */}
        <Link
          href="/zodiac-sign"
          className="shrink-0 hidden sm:flex items-center gap-1 text-xs font-semibold transition-colors"
          style={{ color: '#636B8A' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#E85D36')}
          onMouseLeave={e => (e.currentTarget.style.color = '#636B8A')}
        >
          All 12 signs <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
