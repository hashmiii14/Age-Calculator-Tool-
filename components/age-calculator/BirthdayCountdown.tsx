'use client';

import { useEffect, useState } from 'react';
import { PartyPopper, Gift, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NextBirthdayResult } from '../../lib/age/types';

interface BirthdayCountdownProps {
  nextBirthday: NextBirthdayResult;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function BirthdayCountdown({ nextBirthday }: BirthdayCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (nextBirthday.isToday) {
      // Trigger subtle celebratory confetti on mount if today is birthday
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true,
        });
      } catch (e) {
        // ignore if confetti fails
      }
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
      // Next birthday date parsed safely
      const [y, m, d] = nextBirthday.dateStr.split('-').map(Number);
      const bdayDate = new Date(y, m - 1, d, 0, 0, 0);

      const diffMs = bdayDate.getTime() - now.getTime();

      if (diffMs <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [nextBirthday]);

  if (nextBirthday.isToday) {
    return (
      <div className="w-full bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-200 shadow-inner">
          <PartyPopper className="w-8 h-8 animate-bounce" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-200 font-bold">
            Special Day
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1">
            Happy Birthday! 🎉
          </h2>
          <p className="text-amber-100 text-sm sm:text-base mt-2 max-w-md">
            Wishing you a fantastic day as you turn{' '}
            <span className="font-extrabold text-white text-lg">{nextBirthday.turningAge}</span>!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-none transition-colors">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/60 flex items-center justify-center text-rose-600 dark:text-rose-400">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Next Birthday Countdown
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {nextBirthday.formattedDate} • Turning {nextBirthday.turningAge}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-3 py-1.5 rounded-xl">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{nextBirthday.daysRemaining} Days Away</span>
        </div>
      </div>

      {/* Ticking Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((unit) => (
          <div
            key={unit.label}
            className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-3 sm:p-4 flex flex-col justify-center items-center"
          >
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
