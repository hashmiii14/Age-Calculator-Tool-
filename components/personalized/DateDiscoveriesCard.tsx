'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DateHistoryRecord } from '../../lib/data/historyData';

interface DateDiscoveriesCardProps {
  discoveries: DateHistoryRecord;
}

export default function DateDiscoveriesCard({ discoveries }: DateDiscoveriesCardProps) {
  return (
    <div className="rounded-2xl" style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      {/* Header */}
      <div className="px-6 pt-6 pb-5 border-b border-[#1D2133] flex items-end justify-between gap-3">
        <div>
          <p style={{ color: '#636B8A' }} className="text-xs font-semibold uppercase tracking-widest mb-1">On Your Birthday</p>
          <h3 style={{ color: '#F2F4FB' }} className="text-2xl font-extrabold font-serif leading-tight">
            History Made This Day
          </h3>
        </div>
        <span style={{ color: '#636B8A' }} className="text-[11px] font-medium shrink-0 pb-1">
          Verified sources
        </span>
      </div>

      {/* Events — list style, not nested cards */}
      <div className="divide-y divide-[#1D2133]">
        {discoveries.events.slice(0, 3).map((ev, i) => (
          <div key={ev.title} className="px-6 py-5 flex items-start gap-4">
            {/* Year accent on the left */}
            <div className="shrink-0 w-14 text-right">
              <span className="text-sm font-extrabold font-mono" style={{ color: '#E85D36' }}>{ev.year}</span>
            </div>
            <div className="flex-1 min-w-0 space-y-0.5">
              <p style={{ color: '#F2F4FB' }} className="text-sm font-semibold leading-snug">{ev.title}</p>
              <p style={{ color: '#9AA3C4' }} className="text-xs leading-relaxed">{ev.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Famous birthdays */}
      <div className="px-6 py-5 border-t border-[#1D2133]">
        <p style={{ color: '#636B8A' }} className="text-[11px] uppercase tracking-widest font-semibold mb-3">
          Famous birthdays on this date
        </p>
        <div className="flex flex-wrap gap-2">
          {discoveries.famousBirthdays.map(p => (
            <span key={p.name} className="text-xs px-3 py-1.5 rounded-lg font-medium"
              style={{ backgroundColor: '#1D2133', color: '#9AA3C4', border: '1px solid #252A3D' }}>
              {p.name} <span style={{ color: '#636B8A' }}>b.{p.birthYear}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 pb-5">
        <Link href="/on-this-date" className="inline-flex items-center gap-1 text-xs font-semibold transition-colors"
          style={{ color: '#636B8A' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#E85D36')}
          onMouseLeave={e => (e.currentTarget.style.color = '#636B8A')}>
          Explore more dates <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
