'use client';

import { AgeResult } from '../../lib/age/types';
import ShareCopyButtons from './ShareCopyButtons';
import BirthdayCountdown from './BirthdayCountdown';
import BirthdayInfoCard from './BirthdayInfoCard';
import { Calendar, Clock, Sparkles, Layers, Info } from 'lucide-react';

interface AgeResultDashboardProps {
  result: AgeResult;
}

export default function AgeResultDashboard({ result }: AgeResultDashboardProps) {
  return (
    <section className="w-full space-y-8 animate-fadeIn" aria-live="polite">
      {/* Primary Hero Result Card */}
      <div className="w-full bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Background decorative SVG subtle shapes */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute right-20 -top-10 w-40 h-40 rounded-full bg-brand-400/10 blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Exact Age Result</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-white">
                You are
              </h2>
            </div>
            <ShareCopyButtons result={result} />
          </div>

          {/* Large Hero Text */}
          <div className="py-2">
            <p className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-sans">
              {result.years} <span className="text-brand-200 font-bold text-2xl sm:text-4xl">Years</span>,{' '}
              {result.months} <span className="text-brand-200 font-bold text-2xl sm:text-4xl">Months</span>,{' '}
              {result.days} <span className="text-brand-200 font-bold text-2xl sm:text-4xl">Days</span>
            </p>
            <p className="text-sm text-brand-100/90 mt-3 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-brand-300" />
              <span>
                Born {result.formattedDOB} • Calculated for {result.formattedTargetDate}
              </span>
            </p>
          </div>

          {/* Age Breakdown Visual Cards (Years | Months | Days) */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xs font-semibold text-brand-200 uppercase tracking-wider block mb-1">
                Years
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {result.years}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xs font-semibold text-brand-200 uppercase tracking-wider block mb-1">
                Months
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {result.months}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xs font-semibold text-brand-200 uppercase tracking-wider block mb-1">
                Days
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {result.days}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Birthday Info Card & Countdown */}
      <BirthdayInfoCard result={result} />
      <div id="birthday-countdown">
        <BirthdayCountdown nextBirthday={result.nextBirthday} />
      </div>

      {/* Total Units Detailed Metrics Grid */}
      <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-none transition-colors">
        <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Total Age Breakdown
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Alternative units representation of total elapsed lifetime duration
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Total Months',
              value: `${result.totalMonths.toLocaleString()} months`,
              subtext: `${result.years} years + ${result.months} months`,
            },
            {
              title: 'Total Weeks',
              value: `${result.totalWeeks.toLocaleString()} weeks`,
              subtext: `${(result.totalDays % 7)} days remaining`,
            },
            {
              title: 'Total Days',
              value: `${result.totalDays.toLocaleString()} days`,
              subtext: 'Complete 24-hour days lived',
            },
            {
              title: 'Total Hours',
              value: `${result.totalHours.toLocaleString()} hours`,
              subtext: 'Date-duration calculation (midnight 00:00)',
            },
            {
              title: 'Total Minutes',
              value: `${result.totalMinutes.toLocaleString()} minutes`,
              subtext: 'Date-duration calculation',
            },
            {
              title: 'Total Seconds',
              value: `${result.totalSeconds.toLocaleString()} seconds`,
              subtext: 'Date-duration calculation',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl p-5"
            >
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                {item.title}
              </span>
              <p className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                {item.value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center space-x-1">
                <Clock className="w-3 h-3 text-slate-400 flex-shrink-0" />
                <span>{item.subtext}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-start space-x-2 text-xs text-slate-500 dark:text-slate-400">
          <Info className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Note on Time Precision:</strong> Hours, minutes, and seconds are calculated using standard calendar date boundaries starting at 00:00:00 local time on your birth date to 00:00:00 on the target date.
          </p>
        </div>
      </div>
    </section>
  );
}
