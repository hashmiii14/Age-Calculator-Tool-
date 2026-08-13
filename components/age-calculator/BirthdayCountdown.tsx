'use client';

import { useEffect, useState } from 'react';
import { PartyPopper, Gift, Sparkles, Calendar, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NextBirthdayResult, UpcomingBirthday } from '../../lib/age/types';

interface BirthdayCountdownProps {
  nextBirthday: NextBirthdayResult;
  nextFiveBirthdays?: UpcomingBirthday[];
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function BirthdayCountdown({ nextBirthday, nextFiveBirthdays }: BirthdayCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        disableForReducedMotion: true,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (nextBirthday.isToday) {
      fireConfetti();
      return;
    }

    const updateCountdown = () => {
      const now = new Date();
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

  const daysPassedInYear = 365 - nextBirthday.daysRemaining;
  const progressPercent = Math.min(100, Math.max(0, (daysPassedInYear / 365) * 100));

  if (nextBirthday.isToday) {
    return (
      <div className="w-full bg-gradient-to-r from-coral-500 via-blush-500 to-purple-600 rounded-4xl p-6 sm:p-10 text-white shadow-cute flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-3xl shadow-inner">
          🎂
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-200 font-extrabold">
            Special Day Celebration
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 font-serif">
            Happy Birthday! 🎉
          </h2>
          <p className="text-white/90 text-sm sm:text-base mt-2 max-w-md font-medium">
            Wishing you an awesome day as you turn{' '}
            <span className="font-extrabold text-white text-xl">{nextBirthday.turningAge}</span>!
          </p>
        </div>
        <button
          onClick={fireConfetti}
          type="button"
          className="px-6 py-2.5 rounded-full bg-white text-coral-600 font-extrabold text-xs shadow-md hover:bg-blush-50"
        >
          Celebrate With Confetti 🎉
        </button>
      </div>
    );
  }

  return (
    <div id="birthday-countdown" className="w-full bg-white dark:bg-plum-900 rounded-4xl p-6 sm:p-8 border border-blush-200 dark:border-plum-800 shadow-cute text-plum-900 dark:text-white transition-colors space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-blush-100 dark:border-plum-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-coral-500 text-white flex items-center justify-center shadow-md">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-extrabold text-plum-900 dark:text-white">
              Next Birthday Dashboard
            </h3>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              {nextBirthday.formattedDate} ({nextBirthday.weekday}) • Turning {nextBirthday.turningAge} Years
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={fireConfetti}
            type="button"
            className="px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold hover:bg-blush-200"
          >
            🎉 Confetti Test
          </button>
          <div className="inline-flex items-center space-x-1 text-xs font-extrabold text-coral-600 dark:text-coral-300 bg-coral-50 dark:bg-plum-950 px-3.5 py-1.5 rounded-full border border-coral-200 dark:border-plum-800">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" />
            <span>{nextBirthday.daysRemaining} Days Away</span>
          </div>
        </div>
      </div>

      {/* Progress bar towards next birthday */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
          <span>Yearly Birthday Progress</span>
          <span>{progressPercent.toFixed(1)}% Completed</span>
        </div>
        <div className="w-full h-3 rounded-full bg-blush-100 dark:bg-plum-950 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-coral-500 to-blush-500 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Live Ticking Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((unit) => (
          <div
            key={unit.label}
            className="bg-blush-50 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 rounded-3xl p-3 sm:p-4 flex flex-col justify-center items-center"
          >
            <span className="text-2xl sm:text-4xl font-extrabold text-plum-900 dark:text-white font-mono tracking-tight">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-coral-500 uppercase tracking-wider mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Upcoming 5 Birthdays List */}
      {nextFiveBirthdays && nextFiveBirthdays.length > 0 && (
        <div className="pt-2">
          <span className="text-xs font-extrabold text-plum-900 dark:text-white uppercase tracking-wider block mb-3 font-sans">
            Next 5 Upcoming Birthdays
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
            {nextFiveBirthdays.map((b) => (
              <div key={b.year} className="p-3 rounded-2xl bg-blush-50/60 dark:bg-plum-950/40 border border-blush-100 dark:border-plum-800">
                <span className="font-extrabold text-coral-500 block">{b.year}</span>
                <span className="font-extrabold text-plum-900 dark:text-white block mt-0.5">{b.weekday}</span>
                <span className="text-[10px] text-slate-400 block">Turning {b.turningAge}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
