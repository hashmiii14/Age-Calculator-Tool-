'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ZodiacInfo } from '../../lib/data/zodiacData';

interface CompactZodiacCardProps {
  zodiac: ZodiacInfo;
}

export default function CompactZodiacCard({ zodiac }: CompactZodiacCardProps) {
  return (
    <div className="rounded-2xl p-6 space-y-4"
      style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {/* Zodiac symbol */}
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 font-bold"
            style={{ backgroundColor: 'rgba(232,93,54,0.1)', border: '1px solid rgba(232,93,54,0.2)' }}>
            {zodiac.unicodeSymbol}
          </div>
          <div>
            <span className="section-label">Your Zodiac Sign</span>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 style={{ color: '#F2F4FB' }} className="text-xl font-extrabold font-serif leading-tight">
                {zodiac.name}
              </h3>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                style={{ backgroundColor: '#1D2133', color: '#9AA3C4', border: '1px solid #252A3D' }}>
                {zodiac.dateRange}
              </span>
            </div>
            <p style={{ color: '#636B8A' }} className="text-xs mt-0.5 font-semibold">
              {zodiac.element} Element · {zodiac.modality} Modality
            </p>
          </div>
        </div>

        <span className="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: 'rgba(139,92,246,0.1)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.2)' }}>
          Entertainment Only
        </span>
      </div>

      <p style={{ color: '#9AA3C4' }} className="text-sm leading-relaxed">
        {zodiac.name} is traditionally associated with {zodiac.personalityThemes.toLowerCase()}.
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-[#252A3D] text-xs">
        <span style={{ color: '#636B8A' }}>
          Astrology content is for general interest only.
        </span>
        <Link href="/zodiac-sign"
          className="inline-flex items-center gap-1 font-bold hover:underline"
          style={{ color: '#E85D36' }}>
          Explore all 12 signs <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
