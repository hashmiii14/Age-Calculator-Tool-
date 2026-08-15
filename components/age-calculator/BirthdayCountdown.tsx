'use client';

import { useEffect, useState } from 'react';
import { Gift, PartyPopper } from 'lucide-react';
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
      <div className="rounded-3xl sm:rounded-4xl p-8 sm:p-10 text-center space-y-4 animate-fade-up bg-gradient-to-br from-coral-500 to-coral-600 text-white shadow-cute border-2 border-coral-400">
        <div className="text-5xl">🎂</div>
        <div>
          <p className="text-xs uppercase tracking-widest font-extrabold text-white/80 mb-1">Today is your birthday</p>
          <h2 className="text-3xl sm:text-5xl font-black font-serif">Happy Birthday!</h2>
          <p className="text-sm sm:text-base mt-2 text-white/90 font-medium">
            You&apos;re turning <span className="font-black text-white text-xl">{nextBirthday.turningAge}</span> today 🎉
          </p>
        </div>
        <button
          onClick={fireConfetti}
          type="button"
          className="px-6 py-3 rounded-2xl font-extrabold text-sm bg-white/20 hover:bg-white/30 text-white border border-white/30 transition-all cursor-pointer"
        >
          Launch Confetti 🎉
        </button>
      </div>
    );
  }

  return (
    <div id="birthday-countdown" className="rounded-3xl sm:rounded-4xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 shadow-cute overflow-hidden transition-all">

      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-blush-200 dark:border-plum-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-0.5">Upcoming Birthday</p>
          <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-plum-900 dark:text-white leading-tight">
            {nextBirthday.formattedDate}
            <span className="text-sm font-bold text-coral-500 ml-2">
              ({nextBirthday.weekday}) · Turning {nextBirthday.turningAge}
            </span>
          </h3>
        </div>

        <button
          onClick={fireConfetti}
          type="button"
          className="text-xs font-extrabold px-4 py-2 rounded-xl bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 hover:bg-coral-500 hover:text-white transition-all cursor-pointer border border-blush-200 dark:border-plum-700"
        >
          🎉 Celebrate
        </button>
      </div>

      {/* Countdown numbers */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {[
          { label: 'Days',    value: timeLeft.days    },
          { label: 'Hours',   value: timeLeft.hours   },
          { label: 'Min',     value: timeLeft.minutes },
          { label: 'Sec',     value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="p-3 sm:p-4 rounded-2xl bg-blush-50/70 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800/80">
            <p className="text-2xl sm:text-4xl font-extrabold font-mono tabular-nums tracking-tight text-plum-900 dark:text-white">
              {pad(value)}
            </p>
            <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-coral-500 mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="px-4 sm:px-6 pb-6 space-y-1.5">
        <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
          <span>Year Progress to Birthday</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full h-2.5 rounded-full overflow-hidden bg-blush-100 dark:bg-plum-950 border border-blush-200 dark:border-plum-800">
          <div className="h-full rounded-full bg-coral-500 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Next 5 Birthdays */}
      {nextFiveBirthdays && nextFiveBirthdays.length > 0 && (
        <div className="border-t border-blush-200 dark:border-plum-800 px-4 sm:px-6 py-5 space-y-3 bg-blush-50/40 dark:bg-plum-950/40">
          <p className="text-[11px] uppercase tracking-widest font-extrabold text-slate-400">Next 5 Birthdays</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            {nextFiveBirthdays.map((b) => (
              <div
                key={b.year}
                className="rounded-2xl py-2.5 px-2 bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm"
              >
                <span className="font-extrabold text-sm text-coral-500 block">{b.year}</span>
                <span className="text-[11px] font-bold text-plum-900 dark:text-white block mt-0.5">{b.weekday.slice(0,3)}</span>
                <span className="text-[10px] font-bold text-slate-400 block">Turning {b.turningAge}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

