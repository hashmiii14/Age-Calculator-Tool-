'use client';

import { AgeResult } from '../../lib/age/types';
import ShareCopyButtons from './ShareCopyButtons';
import BirthdayCountdown from './BirthdayCountdown';
import BirthdayInfoCard from './BirthdayInfoCard';
import NextFiveBirthdays from './NextFiveBirthdays';
import NextBigDayCard from './NextBigDayCard';
import AgeAtAGlance from './AgeAtAGlance';
import AgeInDifferentUnits from './AgeInDifferentUnits';
import AgeProgressVisualizer from './AgeProgressVisualizer';
import AgeMilestoneTimeline from './AgeMilestoneTimeline';
import QuickAgeFacts from './QuickAgeFacts';
import CalculationExplainedVisual from '../content/CalculationExplainedVisual';
import { Calendar, Sparkles } from 'lucide-react';

interface AgeResultDashboardProps {
  result: AgeResult;
}

export default function AgeResultDashboard({ result }: AgeResultDashboardProps) {
  return (
    <section className="w-full space-y-8 animate-fadeIn" aria-live="polite">
      {/* 1. Primary Hero Result Card */}
      <div className="w-full bg-gradient-to-br from-orange-600 via-orange-700 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute right-20 -top-10 w-40 h-40 rounded-full bg-orange-400/10 blur-xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6">
            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-orange-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Exact Age Result</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-white font-serif">
                You are
              </h2>
            </div>
            <ShareCopyButtons result={result} />
          </div>

          {/* Large Hero Text */}
          <div className="py-2">
            <p className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-sans">
              {result.years} <span className="text-orange-200 font-bold text-2xl sm:text-4xl">Years</span>,{' '}
              {result.months} <span className="text-orange-200 font-bold text-2xl sm:text-4xl">Months</span>,{' '}
              {result.days} <span className="text-orange-200 font-bold text-2xl sm:text-4xl">Days</span>
            </p>
            <p className="text-sm text-orange-100/90 mt-3 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-orange-300" />
              <span>
                Born {result.formattedDOB} ({result.dobWeekday}) • Age on {result.formattedTargetDate}
              </span>
            </p>
          </div>

          {/* Age Breakdown Cards */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xs font-bold text-orange-200 uppercase tracking-wider block mb-1">
                Years
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {result.years}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xs font-bold text-orange-200 uppercase tracking-wider block mb-1">
                Months
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {result.months}
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center">
              <span className="text-xs font-bold text-orange-200 uppercase tracking-wider block mb-1">
                Days
              </span>
              <span className="text-2xl sm:text-4xl font-extrabold text-white font-mono">
                {result.days}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Signature Feature: Next Big Day Card */}
      <NextBigDayCard nextBigDay={result.nextBigDay} />

      {/* 3. Your Age at a Glance */}
      <AgeAtAGlance result={result} />

      {/* 4. Your Current Year Progress */}
      <AgeProgressVisualizer progress={result.progress} currentYears={result.years} />

      {/* 5. Signature Feature: Your Next 5 Birthdays */}
      <NextFiveBirthdays birthdays={result.nextFiveBirthdays} />

      {/* 6. Birthday Details & Countdown */}
      <BirthdayInfoCard result={result} />
      <div id="birthday-countdown">
        <BirthdayCountdown nextBirthday={result.nextBirthday} />
      </div>

      {/* 7. Next Age Milestone & Visual Timeline */}
      <AgeMilestoneTimeline
        currentYears={result.years}
        nextMajorMilestone={result.nextMajorMilestone}
        timeline={result.timeline}
      />

      {/* 8. Quick Age Facts */}
      <QuickAgeFacts facts={result.quickFacts} />

      {/* 9. Age in Different Units */}
      <AgeInDifferentUnits result={result} />

      {/* 10. Calculation Explained Visual */}
      <CalculationExplainedVisual />
    </section>
  );
}
