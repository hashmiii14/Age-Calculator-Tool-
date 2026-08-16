'use client';

import React from 'react';
import { Heart, Clock, Calendar, Info } from 'lucide-react';
import { AgeResult } from '../../lib/age/types';

interface DaysLivedSectionProps {
  result: AgeResult;
}

export default function DaysLivedSection({ result }: DaysLivedSectionProps) {
  return (
    <section className="w-full bg-white dark:bg-purpleText-900 rounded-3xl sm:rounded-4xl p-6 sm:p-8 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left border-b border-pinkPastel-100 dark:border-purpleText-800 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-800 flex items-center justify-center text-pinkPastel-500">
            <Heart className="w-5 h-5 fill-pinkPastel-500" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-purpleText-900 dark:text-white">
              You&apos;ve Been Here For… ❤️
            </h2>
            <p className="text-xs text-purpleText-600 dark:text-purpleText-400 font-medium">
              Your exact time alive on Earth since {result.formattedDOB}
            </p>
          </div>
        </div>

        <div className="inline-flex items-center space-x-1 text-[11px] font-bold text-purpleText-500 bg-pinkPastel-50 dark:bg-purpleText-950 px-3 py-1.5 rounded-full border border-pinkPastel-200 dark:border-purpleText-800">
          <Info className="w-3.5 h-3.5 text-pinkPastel-500 flex-shrink-0" />
          <span>Calendar arithmetic without birth time</span>
        </div>
      </div>

      {/* Main Big Days Card */}
      <div className="bg-gradient-to-r from-pinkPastel-50 to-pinkPastel-100 dark:from-purpleText-950 dark:to-purpleText-900 rounded-3xl p-6 text-center border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm space-y-1">
        <span className="text-xs font-black uppercase tracking-widest text-purpleText-400 block">
          Total Days Alive
        </span>
        <div className="text-4xl sm:text-6xl font-black font-serif text-pinkPastel-500 tracking-tight">
          {result.totalDays.toLocaleString()} <span className="text-2xl sm:text-4xl font-extrabold text-purpleText-900 dark:text-white">Days</span>
        </div>
        <p className="text-xs text-purpleText-600 dark:text-purpleText-300 font-medium">
          Born on a <span className="font-extrabold text-pinkPastel-500">{result.dobWeekday}</span> (Day {result.dayOfYear} of year)
        </p>
      </div>

      {/* Supporting breakdown grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="p-4 rounded-2xl bg-pinkPastel-50/70 dark:bg-purpleText-950/60 border border-pinkPastel-100 dark:border-purpleText-800/80">
          <span className="text-[10px] font-black uppercase tracking-widest text-purpleText-400 block">Months</span>
          <span className="text-xl sm:text-2xl font-extrabold font-serif text-purpleText-900 dark:text-white block mt-0.5">
            {result.totalMonths.toLocaleString()}
          </span>
          <span className="text-[10px] font-bold text-pinkPastel-500 block mt-0.5">Total Months</span>
        </div>

        <div className="p-4 rounded-2xl bg-pinkPastel-50/70 dark:bg-purpleText-950/60 border border-pinkPastel-100 dark:border-purpleText-800/80">
          <span className="text-[10px] font-black uppercase tracking-widest text-purpleText-400 block">Weeks</span>
          <span className="text-xl sm:text-2xl font-extrabold font-serif text-purpleText-900 dark:text-white block mt-0.5">
            {result.totalWeeks.toLocaleString()}
          </span>
          <span className="text-[10px] font-bold text-pinkPastel-500 block mt-0.5">Total Weeks</span>
        </div>

        <div className="p-4 rounded-2xl bg-pinkPastel-50/70 dark:bg-purpleText-950/60 border border-pinkPastel-100 dark:border-purpleText-800/80">
          <span className="text-[10px] font-black uppercase tracking-widest text-purpleText-400 block">Hours</span>
          <span className="text-xl sm:text-2xl font-extrabold font-serif text-purpleText-900 dark:text-white block mt-0.5">
            {result.totalHours.toLocaleString()}
          </span>
          <span className="text-[10px] font-bold text-purpleText-400 block mt-0.5">Estimated Hours</span>
        </div>

        <div className="p-4 rounded-2xl bg-pinkPastel-50/70 dark:bg-purpleText-950/60 border border-pinkPastel-100 dark:border-purpleText-800/80">
          <span className="text-[10px] font-black uppercase tracking-widest text-purpleText-400 block">Minutes</span>
          <span className="text-xl sm:text-2xl font-extrabold font-serif text-purpleText-900 dark:text-white block mt-0.5">
            {result.totalMinutes.toLocaleString()}
          </span>
          <span className="text-[10px] font-bold text-purpleText-400 block mt-0.5">Estimated Minutes</span>
        </div>
      </div>
    </section>
  );
}
