'use client';

import { History, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { DateHistoryRecord } from '../../lib/data/historyData';

interface DateDiscoveriesCardProps {
  discoveries: DateHistoryRecord;
}

export default function DateDiscoveriesCard({ discoveries }: DateDiscoveriesCardProps) {
  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-zinc-800 shadow-subtle space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-zinc-800 text-coral-500 flex items-center justify-center font-bold">
            <History className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
              Factual Date Discoveries
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-serif">
              Recorded On Your Date
            </h3>
          </div>
        </div>

        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
          Verified Historical Data
        </span>
      </div>

      {/* Historical Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        {discoveries.events.slice(0, 2).map((ev) => (
          <div
            key={ev.title}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-coral-600 dark:text-coral-400 font-mono">
                Year {ev.year}
              </span>
              <span className="text-[10px] font-bold text-slate-400 bg-white dark:bg-zinc-800 px-2 py-0.5 rounded-md">
                {ev.category}
              </span>
            </div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
              {ev.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
              {ev.description}
            </p>
          </div>
        ))}
      </div>

      {/* Famous Birthdays */}
      <div className="pt-2 border-t border-slate-100 dark:border-zinc-800/80 text-xs">
        <span className="font-extrabold text-slate-900 dark:text-white uppercase tracking-wider block mb-2 font-sans text-[11px]">
          Famous Birthdays On This Date
        </span>
        <div className="flex flex-wrap gap-2">
          {discoveries.famousBirthdays.map((p) => (
            <div
              key={p.name}
              className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 text-slate-700 dark:text-slate-300 font-semibold"
            >
              <span className="font-extrabold text-slate-900 dark:text-white">{p.name}</span>{' '}
              <span className="text-slate-400">({p.birthYear})</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-1">
        <Link
          href="/on-this-date"
          className="inline-flex items-center space-x-1 text-xs font-extrabold text-coral-500 hover:underline"
        >
          <span>Explore date history & events</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
