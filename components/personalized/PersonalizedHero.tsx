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
    <section className="animate-fade-up relative overflow-hidden rounded-2xl" style={{ backgroundColor: '#0f1520' }}>

      {/* Decorative left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: 'linear-gradient(180deg, #E85D36 0%, rgba(232,93,54,0.1) 100%)' }} />

      <div className="px-6 sm:px-10 lg:px-14 py-10 sm:py-14">

        {/* Top utility bar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2" style={{ color: '#636B8A' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#22c55e' }} />
            <span className="text-xs tracking-widest uppercase font-semibold">Your AgePulse</span>
          </div>
          <button
            onClick={onClearDate}
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors px-3 py-1.5 rounded-lg"
            style={{ color: '#636B8A', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid #252A3D' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E85D36')}
            onMouseLeave={e => (e.currentTarget.style.color = '#636B8A')}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear
          </button>
        </div>

        {/* Born line — small, honest */}
        <p style={{ color: '#636B8A' }} className="text-sm font-semibold tracking-wide mb-3">
          Born {dobWeekday}, {formattedDOB}
        </p>

        {/* Giant Age Number — the star of the show */}
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-6">
          <span className="font-serif font-extrabold tracking-tight" style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', lineHeight: 1, color: '#F2F4FB' }}>
            {years}
          </span>
          <span className="text-xl sm:text-2xl font-semibold" style={{ color: '#636B8A' }}>years</span>

          <span className="font-serif font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1, color: '#E85D36' }}>
            {months}
          </span>
          <span className="text-lg font-semibold" style={{ color: '#636B8A' }}>months</span>

          <span className="font-serif font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1, color: '#E85D36' }}>
            {days}
          </span>
          <span className="text-lg font-semibold" style={{ color: '#636B8A' }}>days</span>
        </div>

        {/* Birthday indicator — one clean line */}
        {!nextBirthday.isToday && (
          <p style={{ color: '#9AA3C4' }} className="text-sm">
            Turning <strong style={{ color: '#F2F4FB' }}>{nextBirthday.turningAge}</strong> in{' '}
            <strong style={{ color: '#E85D36' }}>{nextBirthday.daysRemaining}</strong> days — {nextBirthday.formattedDate}
          </p>
        )}
        {nextBirthday.isToday && (
          <p style={{ color: '#E85D36' }} className="text-sm font-bold">🎉 Happy Birthday! You&apos;re turning {nextBirthday.turningAge} today!</p>
        )}

        {/* Subtle divider + secondary stats */}
        <div className="mt-8 pt-6 border-t border-[#1D2133] flex flex-wrap gap-8">
          {[
            { value: totalDays.toLocaleString(), label: 'days alive' },
            { value: totalWeeks.toLocaleString(), label: 'weeks' },
            { value: profile.totalHours.toLocaleString(), label: 'hours' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p style={{ color: '#F2F4FB' }} className="text-xl sm:text-2xl font-extrabold font-serif">{value}</p>
              <p style={{ color: '#636B8A' }} className="text-xs font-medium mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
