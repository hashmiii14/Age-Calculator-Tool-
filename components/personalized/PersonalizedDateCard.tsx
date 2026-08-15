'use client';

import { PersonalProfile } from '../../lib/age/types';

interface PersonalizedDateCardProps {
  profile: PersonalProfile;
}

export default function PersonalizedDateCard({ profile }: PersonalizedDateCardProps) {
  const d = profile.dateDetails;

  return (
    <div className="rounded-3xl sm:rounded-4xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 shadow-cute overflow-hidden transition-all">

      {/* Header row */}
      <div className="px-6 pt-6 pb-4 border-b border-blush-200 dark:border-plum-800">
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">Your Date</p>
        <h3 className="text-2xl font-extrabold font-serif text-plum-900 dark:text-white">
          {profile.formattedDOB}
        </h3>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6">
        {[
          { label: 'Day of Week',  value: profile.dobWeekday,  detail: d.weekdayLore       },
          { label: 'Season',       value: d.seasonNorthern,    detail: `${d.monthName}`     },
          { label: 'Birthstone',   value: d.birthstone,        detail: d.birthstoneColor    },
          { label: 'Birth Flower', value: d.birthFlower,       detail: d.birthFlowerMeaning },
        ].map(({ label, value, detail }) => (
          <div key={label} className="p-4 rounded-2xl bg-blush-50/60 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800/80 space-y-1">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-widest font-extrabold text-coral-500 truncate">
              {label}
            </p>
            <p className="text-sm sm:text-base font-extrabold font-serif text-plum-900 dark:text-white leading-snug truncate">
              {value}
            </p>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium leading-snug line-clamp-2">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

