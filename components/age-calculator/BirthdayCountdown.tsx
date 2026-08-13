'use client';

import { useEffect, useState } from 'react';
import { Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NextBirthdayResult, UpcomingBirthday } from '../../lib/age/types';

interface BirthdayCountdownProps {
  nextBirthday: NextBirthdayResult;
  nextFiveBirthdays?: UpcomingBirthday[];
}

interface CountdownTime { days: number; hours: number; minutes: number; seconds: number; }

function pad(n: number) { return n.toString().padStart(2, '0'); }

export default function BirthdayCountdown({ nextBirthday, nextFiveBirthdays }: BirthdayCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const fireConfetti = () => {
    try { confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 }, disableForReducedMotion: true }); }
    catch (e) { console.error(e); }
  };

  useEffect(() => {
    if (nextBirthday.isToday) { fireConfetti(); return; }
    const update = () => {
      const now = new Date();
      const [y, m, d] = nextBirthday.dateStr.split('-').map(Number);
      const diff = new Date(y, m - 1, d).getTime() - now.getTime();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [nextBirthday]);

  const progress = Math.min(100, Math.max(0, ((365 - nextBirthday.daysRemaining) / 365) * 100));

  if (nextBirthday.isToday) {
    return (
      <div className="rounded-2xl p-10 text-center space-y-5 animate-fade-up"
        style={{ background: 'linear-gradient(135deg, #E85D36 0%, #b84520 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="text-5xl">🎂</div>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.65)' }} className="text-xs uppercase tracking-widest font-semibold mb-2">Today is your birthday</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-serif text-white">Happy Birthday!</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)' }} className="text-base mt-2">
            You&apos;re turning <span className="font-extrabold text-white text-xl">{nextBirthday.turningAge}</span> today 🎉
          </p>
        </div>
        <button onClick={fireConfetti} type="button"
          className="px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors"
          style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
          Launch confetti
        </button>
      </div>
    );
  }

  return (
    <div id="birthday-countdown" className="rounded-2xl" style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      {/* Header */}
      <div className="px-6 pt-6 pb-5 border-b border-[#1D2133] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p style={{ color: '#636B8A' }} className="text-xs font-semibold uppercase tracking-widest mb-1">Upcoming Birthday</p>
          <h3 style={{ color: '#F2F4FB' }} className="text-xl font-extrabold font-serif leading-tight">
            {nextBirthday.formattedDate}
            <span style={{ color: '#636B8A' }} className="text-sm font-medium ml-2">
              ({nextBirthday.weekday}) · Turning {nextBirthday.turningAge}
            </span>
          </h3>
        </div>
        <button onClick={fireConfetti} type="button"
          className="text-xs font-semibold px-3 py-1.5 rounded-lg shrink-0 transition-colors"
          style={{ backgroundColor: '#1D2133', color: '#9AA3C4', border: '1px solid #252A3D' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F2F4FB')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9AA3C4')}>
          🎉 Confetti
        </button>
      </div>

      {/* Countdown numbers — the main event */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-4 gap-1.5 sm:gap-5 text-center">
        {[
          { label: 'Days',    value: timeLeft.days    },
          { label: 'Hours',   value: timeLeft.hours   },
          { label: 'Min',     value: timeLeft.minutes },
          { label: 'Sec',     value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="space-y-1">
            <p className="text-2xl sm:text-5xl font-extrabold font-mono tabular-nums tracking-tight"
              style={{ color: '#F2F4FB' }}>
              {pad(value)}
            </p>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#636B8A' }}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="px-4 sm:px-6 pb-5 space-y-1.5">
        <div className="flex justify-between text-xs font-medium" style={{ color: '#636B8A' }}>
          <span>Year progress</span><span>{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: '#1D2133' }}>
          <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: '#E85D36', transition: 'width 0.5s ease' }} />
        </div>
      </div>

      {/* Next 5 Birthdays */}
      {nextFiveBirthdays && nextFiveBirthdays.length > 0 && (
        <div className="border-t border-[#1D2133] px-4 sm:px-6 py-5 space-y-3">
          <p style={{ color: '#636B8A' }} className="text-[11px] uppercase tracking-widest font-semibold">Next 5 birthdays</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            {nextFiveBirthdays.map((b) => (
              <div key={b.year} className="rounded-xl py-2.5 sm:py-3 px-2 sm:px-1"
                style={{ backgroundColor: '#1D2133', border: '1px solid #252A3D' }}>
                <span style={{ color: '#E85D36' }} className="font-extrabold text-sm block">{b.year}</span>
                <span style={{ color: '#9AA3C4' }} className="text-[11px] sm:text-[10px] block mt-0.5">{b.weekday.slice(0,3)}</span>
                <span style={{ color: '#636B8A' }} className="text-[11px] sm:text-[10px] block">Age {b.turningAge}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
