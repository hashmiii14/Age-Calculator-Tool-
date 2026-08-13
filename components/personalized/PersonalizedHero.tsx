'use client';

import { RotateCcw, Heart } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface PersonalizedHeroProps {
  profile: PersonalProfile;
  onClearDate: () => void;
}

export default function PersonalizedHero({ profile, onClearDate }: PersonalizedHeroProps) {
  return (
    <section className="animate-fade-up">
      <div className="rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6"
        style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

        {/* Top bar */}
        <div className="flex items-center justify-between pb-5 border-b border-[#252A3D] text-xs">
          <div className="flex items-center gap-2 font-extrabold uppercase tracking-widest" style={{ color: '#E85D36' }}>
            <span className="w-2 h-2 rounded-full animate-pulse-slow" style={{ backgroundColor: '#E85D36' }} />
            Your AgePulse
          </div>
          <button
            onClick={onClearDate}
            style={{ backgroundColor: '#1D2133', color: '#9AA3C4', borderColor: '#252A3D' }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold border hover:text-white hover:border-[#E85D36] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear My Date
          </button>
        </div>

        {/* Primary Age Display */}
        <div className="text-center space-y-3">
          <div style={{ color: '#F2F4FB' }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight">
            {profile.years}
            <span style={{ color: '#E85D36' }}> yrs</span>
            {' · '}
            {profile.months}
            <span style={{ color: '#E85D36' }}> mo</span>
            {' · '}
            {profile.days}
            <span style={{ color: '#E85D36' }}> d</span>
          </div>

          <p style={{ color: '#9AA3C4' }} className="text-sm sm:text-base font-semibold">
            Born {profile.dobWeekday}, {profile.formattedDOB}
          </p>

          {/* Birthday indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{ backgroundColor: 'rgba(232,93,54,0.1)', color: '#F87B4E', border: '1px solid rgba(232,93,54,0.2)' }}>
            <Heart className="w-4 h-4 fill-current" />
            {profile.nextBirthday.isToday
              ? `Happy Birthday! 🎉 Turning ${profile.nextBirthday.turningAge}`
              : `Next birthday in ${profile.nextBirthday.daysRemaining} days — Turning ${profile.nextBirthday.turningAge}`
            }
          </div>
        </div>

        {/* Secondary stats row */}
        <div className="pt-4 border-t border-[#252A3D] grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'Total Days',  value: profile.totalDays.toLocaleString()  },
            { label: 'Total Weeks', value: profile.totalWeeks.toLocaleString() },
            { label: 'Hours Lived', value: profile.totalHours.toLocaleString() },
          ].map(({ label, value }) => (
            <div key={label} className="space-y-1">
              <div style={{ color: '#F2F4FB' }} className="text-lg sm:text-xl font-extrabold font-serif">{value}</div>
              <div style={{ color: '#636B8A' }} className="text-[11px] font-semibold uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
