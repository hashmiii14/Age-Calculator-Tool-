'use client';

import { PersonalProfile } from '../../lib/age/types';

interface PersonalizedDateCardProps {
  profile: PersonalProfile;
}

export default function PersonalizedDateCard({ profile }: PersonalizedDateCardProps) {
  const d = profile.dateDetails;

  return (
    <div className="rounded-2xl" style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      {/* Header row */}
      <div className="px-6 pt-6 pb-5 border-b border-[#1D2133]">
        <p style={{ color: '#636B8A' }} className="text-xs font-semibold uppercase tracking-widest mb-1">Your Date</p>
        <h3 style={{ color: '#F2F4FB' }} className="text-2xl font-extrabold font-serif">
          {profile.formattedDOB}
        </h3>
      </div>

      {/* Stats row — clean responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 p-4 sm:p-5">
        {[
          { label: 'Day of Week',  value: profile.dobWeekday,  detail: d.weekdayLore       },
          { label: 'Season',       value: d.seasonNorthern,    detail: `${d.monthName}`     },
          { label: 'Birthstone',   value: d.birthstone,        detail: d.birthstoneColor    },
          { label: 'Birth Flower', value: d.birthFlower,       detail: d.birthFlowerMeaning },
        ].map(({ label, value, detail }) => (
          <div key={label} className="px-2.5 sm:px-4 py-2 space-y-0.5 border-l border-[#1D2133] first:border-l-0 sm:border-l sm:first:border-l-0">
            <p style={{ color: '#636B8A' }} className="text-[10px] sm:text-[11px] uppercase tracking-widest font-semibold truncate">
              {label}
            </p>
            <p style={{ color: '#F2F4FB' }} className="text-sm sm:text-base font-extrabold font-serif leading-snug truncate">
              {value}
            </p>
            <p style={{ color: '#9AA3C4' }} className="text-[11px] sm:text-xs leading-snug line-clamp-2">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
