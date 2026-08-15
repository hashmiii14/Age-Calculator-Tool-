'use client';

import { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Share2,
  Copy,
  Check,
  Heart,
  Clock,
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
  const [copied, setCopied] = useState(false);

  const getSummaryText = () => {
    return `Your Exact Age: ${result.years} Years, ${result.months} Months, ${result.days} Days\nBorn: ${result.formattedDOB} (${result.dobWeekday})\nTotal Days Lived: ${result.totalDays.toLocaleString()} Days\nCalculated with AgePulse — https://www.agepulse.site`;
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(getSummaryText());
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = getSummaryText();
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleShare = async () => {
    const text = getSummaryText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Exact Age Result — AgePulse',
          text,
          url: window.location.href,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          handleCopy();
        }
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div id="result-dashboard" className="space-y-6 animate-fade-up scroll-mt-20">
      
      {/* Primary Celebratory Result Card */}
      <div className="bg-white dark:bg-charcoal-900 rounded-3xl p-6 sm:p-8 border border-roseProduct-200 dark:border-charcoal-700 shadow-card text-center relative overflow-hidden flex flex-col items-center">
        
        {/* Subtle Tasteful Celebration Sparkle Badge */}
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-roseProduct-50 dark:bg-charcoal-800 text-roseProduct-600 dark:text-roseProduct-300 text-xs font-bold shadow-xs mb-3 border border-roseProduct-200 dark:border-charcoal-700">
          <Sparkles className="w-3.5 h-3.5 text-roseProduct-500 animate-sparkle" />
          <span>YOUR EXACT AGE 🎉</span>
        </div>

        {/* 3 Clean Stat Blocks Hierarchy */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-2xl my-3">
          {/* Years Block */}
          <div className="p-4 sm:p-5 rounded-2xl bg-roseProduct-50/70 dark:bg-charcoal-800/60 border border-roseProduct-200 dark:border-charcoal-700 text-center">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-roseProduct-500 font-sans block leading-none">
              {result.years}
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal-600 dark:text-charcoal-300 mt-2 block">
              Years
            </span>
          </div>

          {/* Months Block */}
          <div className="p-4 sm:p-5 rounded-2xl bg-roseProduct-50/70 dark:bg-charcoal-800/60 border border-roseProduct-200 dark:border-charcoal-700 text-center">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal-900 dark:text-white font-sans block leading-none">
              {result.months}
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal-600 dark:text-charcoal-300 mt-2 block">
              Months
            </span>
          </div>

          {/* Days Block */}
          <div className="p-4 sm:p-5 rounded-2xl bg-roseProduct-50/70 dark:bg-charcoal-800/60 border border-roseProduct-200 dark:border-charcoal-700 text-center">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-roseProduct-500 font-sans block leading-none">
              {result.days}
            </span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal-600 dark:text-charcoal-300 mt-2 block">
              Days
            </span>
          </div>
        </div>

        {/* Secondary Info Line */}
        <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 font-medium mt-1">
          Born on <strong className="text-charcoal-900 dark:text-white">{result.formattedDOB}</strong> ({result.dobWeekday}) · Calculated as of {result.formattedTargetDate}.
        </p>

        {/* Quick Action Buttons */}
        <div className="flex items-center justify-center space-x-3 mt-5">
          <button
            onClick={handleCopy}
            type="button"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-charcoal-200 text-xs font-bold hover:bg-charcoal-200 transition-all cursor-pointer border border-charcoal-200 dark:border-charcoal-700"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Result'}</span>
          </button>

          <button
            onClick={handleShare}
            type="button"
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-roseProduct-500 hover:bg-roseProduct-600 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Result</span>
          </button>
        </div>
      </div>

      {/* Secondary Lifetime Breakdown Cards Grid */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 font-sans px-1">
          Lifetime Statistics
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {/* Total Days */}
          <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-roseProduct-200 dark:border-charcoal-700 shadow-sm text-center">
            <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">Total Days</span>
            <span className="text-lg sm:text-2xl font-extrabold text-roseProduct-500 font-sans block truncate mt-0.5">
              {result.totalDays.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-charcoal-400 block mt-1">Days Alive</span>
          </div>

          {/* Total Weeks */}
          <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-roseProduct-200 dark:border-charcoal-700 shadow-sm text-center">
            <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">Total Weeks</span>
            <span className="text-lg sm:text-2xl font-extrabold text-charcoal-900 dark:text-white font-sans block truncate mt-0.5">
              {result.totalWeeks.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-charcoal-400 block mt-1">Weeks Alive</span>
          </div>

          {/* Total Months */}
          <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-roseProduct-200 dark:border-charcoal-700 shadow-sm text-center">
            <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">Total Months</span>
            <span className="text-lg sm:text-2xl font-extrabold text-roseProduct-500 font-sans block truncate mt-0.5">
              {result.totalMonths.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-charcoal-400 block mt-1">Months Alive</span>
          </div>

          {/* Total Hours */}
          <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-roseProduct-200 dark:border-charcoal-700 shadow-sm text-center">
            <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">Total Hours</span>
            <span className="text-lg sm:text-2xl font-extrabold text-charcoal-900 dark:text-white font-sans block truncate mt-0.5">
              {result.totalHours.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-charcoal-400 block mt-1">Hours Alive</span>
          </div>

          {/* Total Minutes */}
          <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-roseProduct-200 dark:border-charcoal-700 shadow-sm text-center">
            <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">Total Minutes</span>
            <span className="text-lg sm:text-2xl font-extrabold text-roseProduct-500 font-sans block truncate mt-0.5">
              {result.totalMinutes.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-charcoal-400 block mt-1">Minutes Alive</span>
          </div>

          {/* Zodiac Sign */}
          <div className="p-4 rounded-2xl bg-white dark:bg-charcoal-900 border border-roseProduct-200 dark:border-charcoal-700 shadow-sm text-center">
            <span className="text-[10px] font-bold text-charcoal-400 uppercase tracking-wider block">Zodiac Sign</span>
            <span className="text-base sm:text-xl font-extrabold text-charcoal-900 dark:text-white font-sans block truncate mt-0.5">
              {result.zodiacProfile.unicodeSymbol} {result.zodiacSign}
            </span>
            <span className="text-[10px] font-semibold text-roseProduct-500 block mt-1">{result.zodiacProfile.element} Sign</span>
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



