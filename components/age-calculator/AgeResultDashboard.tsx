'use client';

import { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Share2,
  Clock,
  Heart,
  Compass,
  Trophy,
} from 'lucide-react';
import { AgeResult } from '../../lib/age/types';
import BirthDateDiscoveryCard from '../discovery/BirthDateDiscoveryCard';
import ZodiacAstrologySection from '../astrology/ZodiacAstrologySection';
import BirthdayCountdown from './BirthdayCountdown';
import AgeMilestoneTimeline from './AgeMilestoneTimeline';
import ShareCardGenerator from '../share/ShareCardGenerator';

interface AgeResultDashboardProps {
  result: AgeResult;
}

export default function AgeResultDashboard({ result }: AgeResultDashboardProps) {
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div id="result-dashboard" className="space-y-8 animate-fade-up scroll-mt-20">
      {/* Top Banner & Quick Share */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 rounded-3xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 shadow-cute">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-coral-500" />
          <span className="font-extrabold text-sm sm:text-base text-plum-900 dark:text-white font-serif">
            Your Exact Age Result
          </span>
        </div>

        <button
          onClick={() => setShowShareModal(true)}
          type="button"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white text-xs font-extrabold shadow-cute hover:shadow-cute-hover transition-all cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
          <span>Share & Copy Result</span>
        </button>
      </div>

      {/* Dominant Main Result Card */}
      <div className="bg-gradient-to-b from-[#FFF7F5] to-[#FFF0EC] dark:from-[#2C1933] dark:to-[#1F1224] rounded-4xl p-6 sm:p-10 border-2 border-coral-200/60 dark:border-plum-700 shadow-cute text-center relative overflow-hidden">
        <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs sm:text-sm font-extrabold shadow-sm mb-4 max-w-full truncate">
          <Calendar className="w-4 h-4 shrink-0 text-coral-500" />
          <span className="truncate">Born on {result.formattedDOB} ({result.dobWeekday})</span>
        </div>

        {/* Primary Age Banner */}
        <div className="flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-5 gap-y-2 text-3xl sm:text-5xl lg:text-6xl font-black text-plum-900 dark:text-white font-serif tracking-tight my-3">
          <span>{result.years} <span className="text-coral-500 text-2xl sm:text-4xl font-extrabold">Years</span></span>
          <span>{result.months} <span className="text-coral-500 text-2xl sm:text-4xl font-extrabold">Months</span></span>
          <span>{result.days} <span className="text-coral-500 text-2xl sm:text-4xl font-extrabold">Days</span></span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto font-medium mt-2">
          Calculated precisely as of {result.formattedTargetDate} ({result.targetWeekday}).
        </p>
      </div>

      {/* Compact Secondary Statistics Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sans px-1">
          Detailed Lifetime Breakdown
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {/* Total Days */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Days</span>
            <span className="text-lg sm:text-2xl font-extrabold text-coral-500 font-serif block truncate mt-0.5">
              {result.totalDays.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-slate-400 block mt-1">Days Lived</span>
          </div>

          {/* Total Weeks */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Weeks</span>
            <span className="text-lg sm:text-2xl font-extrabold text-plum-900 dark:text-white font-serif block truncate mt-0.5">
              {result.totalWeeks.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-slate-400 block mt-1">Weeks Lived</span>
          </div>

          {/* Total Months */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Months</span>
            <span className="text-lg sm:text-2xl font-extrabold text-coral-500 font-serif block truncate mt-0.5">
              {result.totalMonths.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-slate-400 block mt-1">Months Lived</span>
          </div>

          {/* Total Hours */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Hours</span>
            <span className="text-lg sm:text-2xl font-extrabold text-plum-900 dark:text-white font-serif block truncate mt-0.5">
              {result.totalHours.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-slate-400 block mt-1">Hours Lived</span>
          </div>

          {/* Total Minutes */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Minutes</span>
            <span className="text-lg sm:text-2xl font-extrabold text-coral-500 font-serif block truncate mt-0.5">
              {result.totalMinutes.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-slate-400 block mt-1">Minutes Lived</span>
          </div>

          {/* Zodiac Sign */}
          <div className="p-4 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Zodiac Sign</span>
            <span className="text-base sm:text-xl font-extrabold text-plum-900 dark:text-white font-serif block truncate mt-0.5">
              {result.zodiacProfile.unicodeSymbol} {result.zodiacSign}
            </span>
            <span className="text-[10px] font-bold text-coral-500 block mt-1">{result.zodiacProfile.element} Sign</span>
          </div>
        </div>
      </div>

      {/* Birthday Experience & Countdown */}
      <BirthdayCountdown nextBirthday={result.nextBirthday} nextFiveBirthdays={result.nextFiveBirthdays} />

      {/* Birth Date Discoveries */}
      <BirthDateDiscoveryCard result={result} />

      {/* Astrology & Personality Overview */}
      <ZodiacAstrologySection userZodiac={result.zodiacProfile} />

      {/* Lifetime Milestones Timeline */}
      <AgeMilestoneTimeline
        milestones={result.milestones}
        nextBigDay={result.nextBigDay}
        timeline={result.timeline}
        nextMajorMilestone={result.nextMajorMilestone}
      />

      {/* Share Card Modal */}
      {showShareModal && (
        <ShareCardGenerator result={result} onClose={() => setShowShareModal(false)} />
      )}
    </div>
  );
}

