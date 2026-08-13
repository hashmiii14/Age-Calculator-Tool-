'use client';

import { Calendar, RotateCcw, Heart, Clock } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface PersonalizedHeroProps {
  profile: PersonalProfile;
  onClearDate: () => void;
}

export default function PersonalizedHero({ profile, onClearDate }: PersonalizedHeroProps) {
  return (
    <section className="py-8 sm:py-12 animate-fadeIn max-w-content mx-auto">
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-zinc-800 shadow-card text-center space-y-6 relative overflow-hidden">

        {/* Top bar with clear action */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-zinc-800 text-xs">
          <div className="flex items-center space-x-2 font-extrabold uppercase tracking-wider text-coral-500 font-sans">
            <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse"></span>
            <span>Your Personal AgePulse</span>
          </div>

          <button
            onClick={onClearDate}
            type="button"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear My Date</span>
          </button>
        </div>

        {/* Primary Hero Exact Age */}
        <div className="space-y-2">
          <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white font-serif tracking-tight">
            {profile.years} <span className="text-coral-500 font-serif">Years</span> · {profile.months} <span className="text-coral-500 font-serif">Months</span> · {profile.days} <span className="text-coral-500 font-serif">Days</span>
          </div>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 dark:text-slate-300">
            Born {profile.dobWeekday}, {profile.formattedDOB}
          </p>
        </div>

        {/* Live Subtitle Indicator */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-coral-50 dark:bg-coral-950/40 text-coral-600 dark:text-coral-400 text-xs font-extrabold border border-coral-200/60 dark:border-coral-900/60">
          <Heart className="w-4 h-4 fill-coral-500 text-coral-500" />
          <span>
            {profile.nextBirthday.isToday
              ? "Happy Birthday! 🎉 Turning " + profile.nextBirthday.turningAge
              : `Your next birthday is in ${profile.nextBirthday.daysRemaining} days (Turning ${profile.nextBirthday.turningAge})`}
          </span>
        </div>

        {/* Secondary Metrics - Quiet and Uncluttered */}
        <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <span>{profile.totalDays.toLocaleString()} Total Days Alive</span>
          <span>•</span>
          <span>{profile.totalWeeks.toLocaleString()} Total Weeks</span>
          <span>•</span>
          <span>{profile.totalHours.toLocaleString()} Hours Lived</span>
        </div>

      </div>
    </section>
  );
}
