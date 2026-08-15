'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DateHistoryRecord } from '../../lib/data/historyData';

interface DateDiscoveriesCardProps {
  discoveries: DateHistoryRecord;
}

export default function DateDiscoveriesCard({ discoveries }: DateDiscoveriesCardProps) {
  return (
    <div className="rounded-3xl sm:rounded-4xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 shadow-cute overflow-hidden transition-all">

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-blush-200 dark:border-plum-800 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">On Your Birthday</p>
          <h3 className="text-2xl font-extrabold font-serif text-plum-900 dark:text-white leading-tight">
            History Made This Day
          </h3>
        </div>
        <span className="text-[11px] font-bold text-coral-500 shrink-0 pb-1">
          Verified Sources
        </span>
      </div>

      {/* Events list */}
      <div className="divide-y divide-blush-200 dark:divide-plum-800">
        {discoveries.events.slice(0, 3).map((ev) => (
          <div key={ev.title} className="px-6 py-5 flex items-start gap-4">
            {/* Year accent */}
            <div className="shrink-0 w-14 text-right">
              <span className="text-sm font-extrabold font-mono text-coral-500">{ev.year}</span>
            </div>
            <div className="flex-1 min-w-0 space-y-0.5">
              <p className="text-sm font-bold text-plum-900 dark:text-white leading-snug">{ev.title}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{ev.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Famous birthdays */}
      <div className="px-6 py-5 border-t border-blush-200 dark:border-plum-800 bg-blush-50/40 dark:bg-plum-950/40 space-y-3">
        <p className="text-[11px] uppercase tracking-widest font-extrabold text-slate-400">
          Famous Birthdays on This Date
        </p>
        <div className="flex flex-wrap gap-2">
          {discoveries.famousBirthdays.map((p) => (
            <span
              key={p.name}
              className="text-xs px-3 py-1.5 rounded-xl font-bold bg-white dark:bg-plum-900 text-plum-900 dark:text-white border border-blush-200 dark:border-plum-800 shadow-sm"
            >
              {p.name} <span className="text-coral-500">b.{p.birthYear}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 py-4">
        <Link
          href="/on-this-date"
          className="inline-flex items-center gap-1 text-xs font-extrabold text-coral-500 hover:text-coral-600 transition-colors"
        >
          Explore More Dates <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

