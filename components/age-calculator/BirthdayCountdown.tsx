'use client';

import { useEffect, useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NextBirthdayResult, UpcomingBirthday } from '../../lib/age/types';

interface BirthdayCountdownProps {
  nextBirthday: NextBirthdayResult;
  nextFiveBirthdays?: UpcomingBirthday[];
}

interface CountdownTime { days: number; hours: number; minutes: number; seconds: number; }

export default function BirthdayCountdown({ nextBirthday, nextFiveBirthdays }: BirthdayCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const fireConfetti = () => {
    try {
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.6 }, disableForReducedMotion: true });
    } catch (e) { console.error(e); }
  };

  useEffect(() => {
    if (nextBirthday.isToday) { fireConfetti(); return; }

    const update = () => {
      const now = new Date();
      const [y, m, d] = nextBirthday.dateStr.split('-').map(Number);
      const target = new Date(y, m - 1, d, 0, 0, 0);
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000)  / 60000),
        seconds: Math.floor((diff % 60000)    / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [nextBirthday]);

  const progress = Math.min(100, Math.max(0, ((365 - nextBirthday.daysRemaining) / 365) * 100));

  /* ── Today is birthday ── */
  if (nextBirthday.isToday) {
    return (
      <div className="rounded-2xl p-8 text-center space-y-4 animate-fade-up"
        style={{ background: 'linear-gradient(135deg, #E85D36 0%, #D04521 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="text-4xl">🎂</div>
        <div>
          <span style={{ color: 'rgba(255,255,255,0.7)' }} className="text-xs uppercase tracking-widest font-bold">Special Day</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif text-white mt-1">Happy Birthday! 🎉</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)' }} className="text-sm mt-2">
            Wishing you an awesome day as you turn <strong className="text-white text-xl">{nextBirthday.turningAge}</strong>!
          </p>
        </div>
        <button onClick={fireConfetti} type="button"
          className="px-6 py-2.5 rounded-full font-extrabold text-sm transition-colors"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
          Celebrate With Confetti 🎉
        </button>
      </div>
    );
  }

  return (
    <div id="birthday-countdown" className="rounded-2xl p-6 sm:p-8 space-y-6"
      style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#252A3D]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#E85D36' }}>
            <Gift className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="section-label">Your Next Birthday</span>
            <h3 style={{ color: '#F2F4FB' }} className="text-lg font-extrabold font-serif leading-tight">
              {nextBirthday.formattedDate} ({nextBirthday.weekday}) · Turning {nextBirthday.turningAge}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={fireConfetti} type="button"
            style={{ backgroundColor: '#1D2133', color: '#9AA3C4', borderColor: '#252A3D' }}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold border hover:text-white transition-colors">
            🎉 Confetti
          </button>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-extrabold"
            style={{ backgroundColor: 'rgba(232,93,54,0.1)', color: '#F87B4E', border: '1px solid rgba(232,93,54,0.2)' }}>
            <Sparkles className="w-3.5 h-3.5" />
            {nextBirthday.daysRemaining} Days Away
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-semibold" style={{ color: '#636B8A' }}>
          <span>Birthday Progress</span>
          <span>{progress.toFixed(1)}%</span>
        </div>
        <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: '#1D2133' }}>
          <div className="h-full rounded-full transition-all duration-700"
            style={{ width: `${progress}%`, backgroundColor: '#E85D36' }} />
        </div>
      </div>

      {/* Countdown Units */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        {[
          { label: 'Days',    value: timeLeft.days    },
          { label: 'Hours',   value: timeLeft.hours   },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-2xl p-3 sm:p-4"
            style={{ backgroundColor: '#1D2133', border: '1px solid #252A3D' }}>
            <span style={{ color: '#F2F4FB' }} className="block text-2xl sm:text-4xl font-extrabold font-mono tabular-nums tracking-tight">
              {value.toString().padStart(2, '0')}
            </span>
            <span style={{ color: '#E85D36' }} className="block text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Next 5 Birthdays */}
      {nextFiveBirthdays && nextFiveBirthdays.length > 0 && (
        <div className="pt-2 border-t border-[#252A3D] space-y-3">
          <p style={{ color: '#636B8A' }} className="text-[11px] font-extrabold uppercase tracking-wider">
            Next 5 Upcoming Birthdays
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs">
            {nextFiveBirthdays.map((b) => (
              <div key={b.year} className="p-3 rounded-xl"
                style={{ backgroundColor: '#1D2133', border: '1px solid #252A3D' }}>
                <span style={{ color: '#E85D36' }} className="font-extrabold block text-sm">{b.year}</span>
                <span style={{ color: '#F2F4FB' }} className="font-bold block mt-0.5">{b.weekday}</span>
                <span style={{ color: '#636B8A' }} className="text-[10px] block">Turning {b.turningAge}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
