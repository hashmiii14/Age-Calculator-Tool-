'use client';

import { Calendar } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface PersonalizedDateCardProps {
  profile: PersonalProfile;
}

export default function PersonalizedDateCard({ profile }: PersonalizedDateCardProps) {
  const d = profile.dateDetails;

  const items = [
    { label: 'Day of Week',  value: profile.dobWeekday,   sub: d.weekdayLore          },
    { label: 'Month',        value: d.monthName,           sub: `${d.seasonNorthern} Season` },
    { label: 'Birthstone',   value: d.birthstone,          sub: d.birthstoneColor       },
    { label: 'Birth Flower', value: d.birthFlower,         sub: d.birthFlowerMeaning    },
  ];

  return (
    <div className="rounded-2xl p-6 space-y-4"
      style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#1D2133', color: '#E85D36' }}>
          <Calendar className="w-4 h-4" />
        </div>
        <div>
          <span className="section-label">Your Date Overview</span>
          <h3 style={{ color: '#F2F4FB' }} className="text-xl font-extrabold font-serif leading-tight">
            {profile.formattedDOB}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map(({ label, value, sub }) => (
          <div key={label} className="rounded-xl p-3.5 space-y-1"
            style={{ backgroundColor: '#1D2133', border: '1px solid #252A3D' }}>
            <p style={{ color: '#636B8A' }} className="text-[10px] font-bold uppercase tracking-wider">{label}</p>
            <p style={{ color: '#F2F4FB' }} className="font-extrabold text-sm leading-tight">{value}</p>
            <p style={{ color: '#636B8A' }} className="text-[11px] leading-snug line-clamp-2">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
