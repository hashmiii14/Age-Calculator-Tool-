'use client';

import Link from 'next/link';
import { History, ArrowRight } from 'lucide-react';
import { DateHistoryRecord } from '../../lib/data/historyData';

interface DateDiscoveriesCardProps {
  discoveries: DateHistoryRecord;
}

export default function DateDiscoveriesCard({ discoveries }: DateDiscoveriesCardProps) {
  return (
    <div className="rounded-2xl p-6 space-y-5"
      style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#1D2133', color: '#E85D36' }}>
            <History className="w-4 h-4" />
          </div>
          <div>
            <span className="section-label">Factual Date Discoveries</span>
            <h3 style={{ color: '#F2F4FB' }} className="text-xl font-extrabold font-serif leading-tight">
              Recorded On Your Date
            </h3>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: '#1D2133', color: '#636B8A', border: '1px solid #252A3D' }}>
          Verified Historical Data
        </span>
      </div>

      {/* Historical Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {discoveries.events.slice(0, 2).map((ev) => (
          <div key={ev.title} className="rounded-xl p-4 space-y-2"
            style={{ backgroundColor: '#1D2133', border: '1px solid #252A3D' }}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono font-extrabold text-sm" style={{ color: '#E85D36' }}>
                {ev.year}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                style={{ backgroundColor: '#252A3D', color: '#636B8A' }}>
                {ev.category}
              </span>
            </div>
            <h4 style={{ color: '#F2F4FB' }} className="font-extrabold text-sm leading-snug">{ev.title}</h4>
            <p style={{ color: '#9AA3C4' }} className="text-xs leading-relaxed">{ev.description}</p>
          </div>
        ))}
      </div>

      {/* Famous Birthdays */}
      <div className="pt-1 space-y-2">
        <p style={{ color: '#636B8A' }} className="text-[11px] font-bold uppercase tracking-wider">Famous Birthdays On This Date</p>
        <div className="flex flex-wrap gap-2">
          {discoveries.famousBirthdays.map((p) => (
            <div key={p.name} className="px-3 py-1.5 rounded-xl text-xs font-semibold"
              style={{ backgroundColor: '#1D2133', color: '#9AA3C4', border: '1px solid #252A3D' }}>
              <span style={{ color: '#F2F4FB' }} className="font-extrabold">{p.name}</span>
              {' '}
              <span style={{ color: '#636B8A' }}>({p.birthYear})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-1">
        <Link href="/on-this-date"
          className="inline-flex items-center gap-1 text-xs font-bold hover:underline"
          style={{ color: '#E85D36' }}>
          Explore date history <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
