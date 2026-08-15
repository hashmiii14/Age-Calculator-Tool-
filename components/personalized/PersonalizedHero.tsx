'use client';

import { RotateCcw } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface PersonalizedHeroProps {
  profile: PersonalProfile;
  onClearDate: () => void;
}

export default function PersonalizedHero({ profile, onClearDate }: PersonalizedHeroProps) {
  const { years, months, days, dobWeekday, formattedDOB, totalDays, totalWeeks, nextBirthday } = profile;

  return (
    <section className="animate-fade-up relative overflow-hidden rounded-3xl sm:rounded-4xl bg-gradient-to-b from-[#FFF7F5] to-[#FFF0EC] dark:from-[#2C1933] dark:to-[#1F1224] border-2 border-coral-200/60 dark:border-plum-700 shadow-cute p-6 sm:p-10 text-plum-900 dark:text-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-coral-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs tracking-widest uppercase font-extrabold">Your AgePulse</span>
        </div>
        <button
          onClick={onClearDate}
          className="flex items-center gap-1.5 text-xs font-extrabold px-3 py-1.5 rounded-xl bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 hover:bg-coral-500 hover:text-white transition-all border border-blush-200 dark:border-plum-700 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Date
        </button>
      </div>

      <p className="text-sm font-extrabold tracking-wide text-slate-500 dark:text-slate-400 mb-2">
        Born {dobWeekday}, {formattedDOB}
      </p>

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-6">
        <span className="font-serif font-black tracking-tight text-4xl sm:text-6xl text-plum-900 dark:text-white">
          {years}
        </span>
        <span className="text-xl sm:text-2xl font-extrabold text-coral-500">years</span>

        <span className="font-serif font-black tracking-tight text-3xl sm:text-5xl text-plum-900 dark:text-white">
          {months}
        </span>
        <span className="text-lg font-extrabold text-coral-500">months</span>

        <span className="font-serif font-black tracking-tight text-3xl sm:text-5xl text-plum-900 dark:text-white">
          {days}
        </span>
        <span className="text-lg font-extrabold text-coral-500">days</span>
      </div>

      {!nextBirthday.isToday && (
        <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
          Turning <strong className="font-extrabold text-plum-900 dark:text-white">{nextBirthday.turningAge}</strong> in{' '}
          <strong className="text-coral-500 font-extrabold">{nextBirthday.daysRemaining}</strong> days — {nextBirthday.formattedDate}
        </p>
      )}
      {nextBirthday.isToday && (
        <p className="text-sm font-extrabold text-coral-500">🎉 Happy Birthday! You&apos;re turning {nextBirthday.turningAge} today!</p>
      )}

      <div className="mt-8 pt-6 border-t border-blush-200 dark:border-plum-800 flex flex-wrap gap-4 sm:gap-8">
        {[
          { value: totalDays.toLocaleString(), label: 'Days Alive' },
          { value: totalWeeks.toLocaleString(), label: 'Weeks' },
          { value: profile.totalHours.toLocaleString(), label: 'Hours' },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="text-xl sm:text-2xl font-black font-serif text-coral-500">{value}</p>
            <p className="text-xs font-bold text-slate-400 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

