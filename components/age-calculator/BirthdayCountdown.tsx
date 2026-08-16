'use client';

import React, { useEffect, useState } from 'react';
import { Gift, PartyPopper, RefreshCw, Calendar, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { NextBirthdayResult, UpcomingBirthday } from '../../lib/age/types';
import { calculateNextBirthday, calculateNextFiveBirthdays, calculateAge } from '../../lib/age/ageEngine';
import { getTodayISODate } from '../../lib/age/dateUtils';
import RobustDateInput from '../ui/RobustDateInput';

interface BirthdayCountdownProps {
  initialDOB?: string;
  nextBirthday?: NextBirthdayResult;
  nextFiveBirthdays?: UpcomingBirthday[];
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function BirthdayCountdown({
  initialDOB: propDOB,
  nextBirthday: propNextBirthday,
  nextFiveBirthdays: propNextFiveBirthdays,
}: BirthdayCountdownProps) {
  const [dob, setDob] = useState<string>('');
  const [activeNextBirthday, setActiveNextBirthday] = useState<NextBirthdayResult | null>(propNextBirthday || null);
  const [activeNextFiveBirthdays, setActiveNextFiveBirthdays] = useState<UpcomingBirthday[]>(propNextFiveBirthdays || []);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [inputError, setInputError] = useState<string>('');

  // Synchronize DOB from prop or localStorage on mount
  useEffect(() => {
    let savedDOB = propDOB;
    if (!savedDOB && typeof window !== 'undefined') {
      savedDOB = localStorage.getItem('agepulse_dob') || '';
    }

    if (savedDOB) {
      setDob(savedDOB);
      try {
        const todayStr = getTodayISODate();
        const nb = calculateNextBirthday(savedDOB, todayStr);
        const n5 = calculateNextFiveBirthdays(savedDOB, todayStr);
        setActiveNextBirthday(nb);
        setActiveNextFiveBirthdays(n5);
      } catch (err) {
        console.error(err);
      }
    }
  }, [propDOB]);

  const fireConfetti = () => {
    try {
      confetti({ particleCount: 90, spread: 85, origin: { y: 0.6 }, disableForReducedMotion: true });
    } catch (e) {
      console.error(e);
    }
  };

  // Timer loop for active birthday countdown
  useEffect(() => {
    if (!activeNextBirthday) return;

    if (activeNextBirthday.isToday) {
      fireConfetti();
      return;
    }

    const update = () => {
      const now = new Date();
      const [y, m, d] = activeNextBirthday.dateStr.split('-').map(Number);
      const diff = new Date(y, m - 1, d).getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    update();
    const timerId = setInterval(update, 1000);
    return () => clearInterval(timerId);
  }, [activeNextBirthday]);

  const handleCalculateFromInput = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!dob) {
      setInputError('Please select or enter your date of birth.');
      return;
    }

    try {
      const todayStr = getTodayISODate();
      const nb = calculateNextBirthday(dob, todayStr);
      const n5 = calculateNextFiveBirthdays(dob, todayStr);
      setActiveNextBirthday(nb);
      setActiveNextFiveBirthdays(n5);
      setInputError('');
      if (typeof window !== 'undefined') {
        localStorage.setItem('agepulse_dob', dob);
      }
    } catch (err) {
      setInputError((err as Error).message || 'Invalid date of birth entered.');
    }
  };

  const handleResetDOB = () => {
    setDob('');
    setActiveNextBirthday(null);
    setActiveNextFiveBirthdays([]);
    setInputError('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('agepulse_dob');
    }
  };

  // Initial Empty State: Prompt user for DOB
  if (!activeNextBirthday) {
    return (
      <div id="birthday-countdown" className="rounded-3xl sm:rounded-4xl bg-white dark:bg-purpleText-900 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute p-6 sm:p-10 space-y-6 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs font-black uppercase tracking-wider">
          <Gift className="w-4 h-4 text-pinkPastel-500" />
          <span>Live Birthday Countdown</span>
        </div>

        <div className="space-y-2 max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-purpleText-900 dark:text-white">
            🎂 Birthday Countdown
          </h2>
          <p className="text-sm sm:text-base text-purpleText-600 dark:text-purpleText-300 font-medium">
            Enter your date of birth to see your next birthday countdown in days, hours, minutes, and seconds.
          </p>
        </div>

        <form onSubmit={handleCalculateFromInput} className="max-w-md mx-auto space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="block text-xs font-black uppercase tracking-wider text-purpleText-900 dark:text-purpleText-100">
              Select Your Date of Birth
            </label>
            <RobustDateInput
              id="countdown-dob-input"
              value={dob}
              onChange={(val) => {
                setDob(val);
                if (inputError) setInputError('');
              }}
              placeholder="DD - MM - YYYY (e.g. 15-08-2000)"
              error={!!inputError}
            />
            {inputError && (
              <p className="text-xs font-bold text-pinkPastel-600 dark:text-pinkPastel-400 mt-1">
                {inputError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full btn-calculate cursor-pointer flex items-center justify-center space-x-2 py-3.5"
          >
            <span>Start Countdown 🎉</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  // Active State: Today is Birthday
  if (activeNextBirthday.isToday) {
    return (
      <div id="birthday-countdown" className="rounded-3xl sm:rounded-4xl p-8 sm:p-10 text-center space-y-5 animate-fade-up bg-gradient-to-br from-pinkPastel-500 to-pinkPastel-600 text-white shadow-cute border-2 border-pinkPastel-400">
        <div className="text-6xl animate-bounce">🎂</div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest font-extrabold text-white/90">Today is your birthday!</p>
          <h2 className="text-3xl sm:text-5xl font-black font-serif">🎉 Happy Birthday! 🎉</h2>
          <p className="text-base sm:text-lg text-white/90 font-medium">
            You&apos;re turning <span className="font-black text-white text-2xl sm:text-3xl">{activeNextBirthday.turningAge}</span> today!
          </p>
        </div>
        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={fireConfetti}
            type="button"
            className="px-6 py-3 rounded-2xl font-extrabold text-sm bg-white/20 hover:bg-white/30 text-white border border-white/40 transition-all cursor-pointer shadow-sm"
          >
            Celebrate Again 🎉
          </button>
          <button
            onClick={handleResetDOB}
            type="button"
            className="px-4 py-3 rounded-2xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            Change Date
          </button>
        </div>
      </div>
    );
  }

  const progress = Math.min(100, Math.max(0, ((365 - activeNextBirthday.daysRemaining) / 365) * 100));

  // Active State: Countdown Ticking
  return (
    <div id="birthday-countdown" className="rounded-3xl sm:rounded-4xl bg-white dark:bg-purpleText-900 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute overflow-hidden transition-all">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-pinkPastel-200 dark:border-purpleText-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-purpleText-400 mb-0.5">Upcoming Next Birthday</p>
          <h3 className="text-xl sm:text-2xl font-extrabold font-serif text-purpleText-900 dark:text-white leading-tight">
            {activeNextBirthday.formattedDate}
            <span className="text-sm font-bold text-pinkPastel-500 ml-2">
              ({activeNextBirthday.weekday}) • Turning {activeNextBirthday.turningAge}
            </span>
          </h3>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={fireConfetti}
            type="button"
            className="text-xs font-extrabold px-3.5 py-2 rounded-xl bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 hover:bg-pinkPastel-500 hover:text-white transition-all cursor-pointer border border-pinkPastel-200 dark:border-purpleText-700"
          >
            🎉 Celebrate
          </button>
          <button
            onClick={handleResetDOB}
            type="button"
            className="text-xs font-bold px-3 py-2 rounded-xl text-purpleText-500 hover:text-pinkPastel-500 transition-colors cursor-pointer"
          >
            Change DOB
          </button>
        </div>
      </div>

      {/* Countdown Grid */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Sec', value: timeLeft.seconds },
        ].map(({ label, value }) => (
          <div key={label} className="p-3 sm:p-4 rounded-2xl bg-pinkPastel-50/70 dark:bg-purpleText-950/60 border border-pinkPastel-200 dark:border-purpleText-800/80">
            <p className="text-2xl sm:text-4xl font-extrabold font-mono tabular-nums tracking-tight text-purpleText-900 dark:text-white">
              {pad(value)}
            </p>
            <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-pinkPastel-500 mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Year Progress Bar */}
      <div className="px-4 sm:px-6 pb-6 space-y-1.5">
        <div className="flex justify-between text-xs font-bold text-purpleText-600 dark:text-purpleText-300">
          <span>Year Progress to Next Birthday</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full h-2.5 rounded-full overflow-hidden bg-pinkPastel-100 dark:bg-purpleText-950 border border-pinkPastel-200 dark:border-purpleText-800">
          <div className="h-full rounded-full bg-pinkPastel-500 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Next 5 Birthdays */}
      {activeNextFiveBirthdays.length > 0 && (
        <div className="border-t border-pinkPastel-200 dark:border-purpleText-800 px-4 sm:px-6 py-5 space-y-3 bg-pinkPastel-50/40 dark:bg-purpleText-950/40">
          <p className="text-[11px] uppercase tracking-widest font-extrabold text-purpleText-400">Next 5 Birthdays</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center">
            {activeNextFiveBirthdays.map((b) => (
              <div
                key={b.year}
                className="rounded-2xl py-2.5 px-2 bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm"
              >
                <span className="font-extrabold text-sm text-pinkPastel-500 block">{b.year}</span>
                <span className="text-[11px] font-bold text-purpleText-900 dark:text-white block mt-0.5">{b.weekday.slice(0, 3)}</span>
                <span className="text-[10px] font-bold text-purpleText-400 block">Turning {b.turningAge}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
