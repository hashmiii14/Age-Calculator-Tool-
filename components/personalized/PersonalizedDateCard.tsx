'use client';

import { Calendar, Sun, Gem, Flower2 } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface PersonalizedDateCardProps {
  profile: PersonalProfile;
}

export default function PersonalizedDateCard({ profile }: PersonalizedDateCardProps) {
  const d = profile.dateDetails;

  return (
    <div className="p-6 rounded-3xl bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-zinc-800 shadow-subtle space-y-4">
      <div className="flex items-center space-x-2.5">
        <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-white flex items-center justify-center font-bold">
          <Calendar className="w-4 h-4 text-coral-500" />
        </div>
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
            Your Date Overview
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-serif">
            {profile.formattedDOB}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-0.5">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Day of Week</span>
          <span className="font-extrabold text-slate-900 dark:text-white text-sm">{profile.dobWeekday}</span>
          <span className="text-[10px] text-slate-500 block truncate">{d.weekdayLore}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-0.5">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Month & Season</span>
          <span className="font-extrabold text-slate-900 dark:text-white text-sm">{d.monthName}</span>
          <span className="text-[10px] text-slate-500 block">{d.seasonNorthern} Season</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-0.5">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Birthstone</span>
          <span className="font-extrabold text-coral-600 dark:text-coral-400 text-sm">{d.birthstone}</span>
          <span className="text-[10px] text-slate-500 block truncate">{d.birthstoneColor}</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-0.5">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Birth Flower</span>
          <span className="font-extrabold text-slate-900 dark:text-white text-sm truncate block">{d.birthFlower}</span>
          <span className="text-[10px] text-slate-500 block truncate">{d.birthFlowerMeaning}</span>
        </div>
      </div>
    </div>
  );
}
