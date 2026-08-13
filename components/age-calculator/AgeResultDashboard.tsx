'use client';

import { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Heart,
  Clock,
  Compass,
  Trophy,
  Share2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { AgeResult, DashboardMode } from '../../lib/age/types';
import BirthDateDiscoveryCard from '../discovery/BirthDateDiscoveryCard';
import ZodiacAstrologySection from '../astrology/ZodiacAstrologySection';
import BirthdayCountdown from './BirthdayCountdown';
import AgeMilestoneTimeline from './AgeMilestoneTimeline';
import ShareCardGenerator from '../share/ShareCardGenerator';

interface AgeResultDashboardProps {
  result: AgeResult;
}

export default function AgeResultDashboard({ result }: AgeResultDashboardProps) {
  const [mode, setMode] = useState<DashboardMode>('detailed');
  const [showShareModal, setShowShareModal] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dashboard Mode Switcher & Top Action Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-3xl bg-white/90 dark:bg-plum-900/90 border border-blush-200 dark:border-plum-800 shadow-sm">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-coral-500 animate-sparkle" />
          <span className="font-extrabold text-xs sm:text-sm text-plum-900 dark:text-white font-serif">
            Your Personal AgePulse Dashboard
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
          {/* Mode Switcher Buttons */}
          <div className="flex items-center p-1 rounded-2xl bg-blush-100 dark:bg-plum-950 border border-blush-200 dark:border-plum-800 text-[11px] sm:text-xs font-bold">
            {(['simple', 'detailed', 'fun'] as DashboardMode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`px-2.5 sm:px-3 py-1 rounded-xl capitalize transition-all ${
                  mode === m
                    ? 'bg-coral-500 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-plum-900 dark:hover:text-white'
                }`}
              >
                {m} mode
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowShareModal(true)}
            type="button"
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-gradient-to-r from-coral-500 to-blush-500 text-white text-[11px] sm:text-xs font-extrabold shadow-cute hover:shadow-cute-hover transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Result</span>
          </button>
        </div>
      </div>

      {/* MODE 1: SIMPLE MODE CARDS */}
      {mode === 'simple' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-100 dark:border-plum-800 shadow-sm text-center space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Exact Age</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif">
              {result.years}y {result.months}m {result.days}d
            </div>
            <p className="text-xs text-coral-500 font-bold">{result.formattedDOB}</p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-100 dark:border-plum-800 shadow-sm text-center space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Days Alive</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-coral-500 font-serif">
              {result.totalDays.toLocaleString()}
            </div>
            <p className="text-xs text-slate-400">Total days lived</p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-plum-900 border border-blush-100 dark:border-plum-800 shadow-sm text-center space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next Birthday</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif">
              In {result.nextBirthday.daysRemaining} Days
            </div>
            <p className="text-xs text-coral-500 font-bold">Turning {result.nextBirthday.turningAge} years</p>
          </div>
        </div>
      )}

      {/* MODE 2: DETAILED MODE & FUN MODE METRIC CARDS */}
      {(mode === 'detailed' || mode === 'fun') && (
        <div className="space-y-8">
          {/* Main Hero Result Card */}
          <div className="bg-gradient-to-b from-[#FFF5F8] to-[#FFEBF0] dark:from-[#2A182E] dark:to-[#1E1122] rounded-4xl p-5 sm:p-8 border-2 border-blush-200/80 dark:border-plum-800 shadow-cute text-center relative overflow-hidden">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-[11px] sm:text-xs font-extrabold mb-3 max-w-full truncate">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Born on {result.formattedDOB} ({result.dobWeekday})</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight my-2">
              <span>{result.years} <span className="text-coral-500 text-xl sm:text-3xl lg:text-4xl">Years</span></span>
              <span>{result.months} <span className="text-coral-500 text-xl sm:text-3xl lg:text-4xl">Months</span></span>
              <span>{result.days} <span className="text-coral-500 text-xl sm:text-3xl lg:text-4xl">Days</span></span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto font-medium">
              Calculated precisely as of {result.formattedTargetDate} ({result.targetWeekday}).
            </p>

            {mode === 'fun' && (
              <div className="mt-4 p-3 rounded-2xl bg-white/80 dark:bg-plum-900/80 text-xs font-bold text-coral-600 dark:text-coral-300 inline-block animate-bounce-cute">
                🎉 Fun Fact: You have experienced approximately {Math.floor(result.totalDays * 12.5).toLocaleString()} heartbeats of laughter and rest!
              </div>
            )}
          </div>

          {/* Metric Grid Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-3.5 sm:p-5 rounded-3xl bg-white dark:bg-plum-900 border border-blush-100 dark:border-plum-800 shadow-sm text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Days Alive</span>
              <span className="text-xl sm:text-3xl font-extrabold text-coral-500 font-serif block truncate">
                {result.totalDays.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-slate-400 block mt-1">Total Days</span>
            </div>

            <div className="p-3.5 sm:p-5 rounded-3xl bg-white dark:bg-plum-900 border border-blush-100 dark:border-plum-800 shadow-sm text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Weeks</span>
              <span className="text-xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif block truncate">
                {result.totalWeeks.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-slate-400 block mt-1">Weeks Lived</span>
            </div>

            <div className="p-3.5 sm:p-5 rounded-3xl bg-white dark:bg-plum-900 border border-blush-100 dark:border-plum-800 shadow-sm text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Hours</span>
              <span className="text-xl sm:text-3xl font-extrabold text-coral-500 font-serif block truncate">
                {result.totalHours.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-slate-400 block mt-1">Approx Hours</span>
            </div>

            <div className="p-3.5 sm:p-5 rounded-3xl bg-white dark:bg-plum-900 border border-blush-100 dark:border-plum-800 shadow-sm text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Zodiac Sign</span>
              <span className="text-lg sm:text-2xl font-extrabold text-plum-900 dark:text-white font-serif block truncate">
                {result.zodiacProfile.unicodeSymbol} {result.zodiacSign}
              </span>
              <span className="text-[10px] font-bold text-coral-500 block mt-1">{result.zodiacProfile.element} Sign</span>
            </div>
          </div>
        </div>
      )}

      {/* SECTION: BIRTHDAY EXPERIENCE & COUNTDOWN */}
      <BirthdayCountdown nextBirthday={result.nextBirthday} nextFiveBirthdays={result.nextFiveBirthdays} />

      {/* SECTION: YOUR BIRTH DATE DISCOVERY */}
      <BirthDateDiscoveryCard result={result} />

      {/* SECTION: ASTROLOGY DISCOVERY */}
      <ZodiacAstrologySection userZodiac={result.zodiacProfile} />

      {/* SECTION: MILESTONES TIMELINE */}
      <AgeMilestoneTimeline
        milestones={result.milestones}
        nextBigDay={result.nextBigDay}
        timeline={result.timeline}
        nextMajorMilestone={result.nextMajorMilestone}
      />

      {/* Share Card Generator Modal Trigger */}
      {showShareModal && (
        <ShareCardGenerator result={result} onClose={() => setShowShareModal(false)} />
      )}
    </div>
  );
}
