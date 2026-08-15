'use client';

import { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Share2,
  Copy,
  Check,
} from 'lucide-react';
import { AgeResult } from '../../lib/age/types';
import BirthDateDiscoveryCard from '../discovery/BirthDateDiscoveryCard';
import ZodiacAstrologySection from '../astrology/ZodiacAstrologySection';
import BirthdayCountdown from './BirthdayCountdown';
import AgeMilestoneTimeline from './AgeMilestoneTimeline';
import ShareCardGenerator from '../share/ShareCardGenerator';
import CuteCharacter from '../ui/CuteCharacter';

interface AgeResultDashboardProps {
  result: AgeResult;
}

export default function AgeResultDashboard({ result }: AgeResultDashboardProps) {
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const getSummaryText = () => {
    return `Your Exact Age: ${result.years} Years, ${result.months} Months, ${result.days} Days\nBorn: ${result.formattedDOB} (${result.dobWeekday})\nTotal Days Lived: ${result.totalDays.toLocaleString()} Days\nCalculated with AGEpulse — https://www.agepulse.site`;
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
          title: 'My Exact Age Result — AGEpulse',
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
      {/* Top Banner & Quick Share / Copy Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-3xl bg-white dark:bg-purpleText-900 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-pinkPastel-500" />
          <span className="font-extrabold text-sm sm:text-base text-purpleText-900 dark:text-white font-serif">
            Your Exact Age Result
          </span>
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button
            onClick={handleCopy}
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs font-extrabold hover:bg-pinkPastel-200 transition-all cursor-pointer border border-pinkPastel-200 dark:border-purpleText-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Result'}</span>
          </button>

          <button
            onClick={handleShare}
            type="button"
            className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-2xl bg-pinkPastel-500 hover:bg-pinkPastel-600 text-white text-xs font-extrabold shadow-cute transition-all cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Result</span>
          </button>
        </div>
      </div>

      {/* Dominant Main Result Card */}
      <div className="bg-gradient-to-b from-white via-pinkPastel-50 to-pinkPastel-100 dark:from-purpleText-900 dark:to-purpleText-950 rounded-4xl p-6 sm:p-10 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute text-center relative overflow-hidden flex flex-col items-center">
        <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs sm:text-sm font-extrabold shadow-sm mb-3 max-w-full truncate border border-pinkPastel-200 dark:border-purpleText-700">
          <Calendar className="w-4 h-4 shrink-0 text-pinkPastel-500" />
          <span className="truncate">Born on {result.formattedDOB} ({result.dobWeekday})</span>
        </div>

        {/* Mascot */}
        <CuteCharacter variant="celebrating" size={88} className="my-1 drop-shadow-sm" />

        <span className="text-xs font-black uppercase tracking-widest text-purpleText-400 mt-2 block">
          Your Exact Age
        </span>

        {/* Primary Age Display */}
        <div className="flex flex-wrap items-baseline justify-center gap-x-3 sm:gap-x-5 gap-y-1 text-3xl sm:text-5xl lg:text-6xl font-black text-purpleText-900 dark:text-white font-serif tracking-tight my-2">
          <span>{result.years} <span className="text-pinkPastel-500 text-2xl sm:text-4xl font-extrabold">Years</span></span>
          <span>{result.months} <span className="text-pinkPastel-500 text-2xl sm:text-4xl font-extrabold">Months</span></span>
          <span>{result.days} <span className="text-pinkPastel-500 text-2xl sm:text-4xl font-extrabold">Days</span></span>
        </div>

        <p className="text-xs sm:text-sm text-purpleText-600 dark:text-purpleText-300 max-w-lg mx-auto font-medium mt-1">
          Calculated precisely as of {result.formattedTargetDate} ({result.targetWeekday}).
        </p>
      </div>

      {/* Secondary Lifetime Breakdown Cards */}
      <div className="space-y-3">
        <h3 className="text-xs font-black uppercase tracking-wider text-purpleText-400 font-sans px-1">
          Detailed Lifetime Breakdown
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {/* Total Days */}
          <div className="p-4 rounded-3xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-purpleText-400 uppercase tracking-widest block">Total Days</span>
            <span className="text-lg sm:text-2xl font-extrabold text-pinkPastel-500 font-serif block truncate mt-0.5">
              {result.totalDays.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-purpleText-400 block mt-1">Days Lived</span>
          </div>

          {/* Total Weeks */}
          <div className="p-4 rounded-3xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-purpleText-400 uppercase tracking-widest block">Total Weeks</span>
            <span className="text-lg sm:text-2xl font-extrabold text-purpleText-900 dark:text-white font-serif block truncate mt-0.5">
              {result.totalWeeks.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-purpleText-400 block mt-1">Weeks Lived</span>
          </div>

          {/* Total Months */}
          <div className="p-4 rounded-3xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-purpleText-400 uppercase tracking-widest block">Total Months</span>
            <span className="text-lg sm:text-2xl font-extrabold text-pinkPastel-500 font-serif block truncate mt-0.5">
              {result.totalMonths.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-purpleText-400 block mt-1">Months Lived</span>
          </div>

          {/* Total Hours */}
          <div className="p-4 rounded-3xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-purpleText-400 uppercase tracking-widest block">Total Hours</span>
            <span className="text-lg sm:text-2xl font-extrabold text-purpleText-900 dark:text-white font-serif block truncate mt-0.5">
              {result.totalHours.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-purpleText-400 block mt-1">Hours Lived</span>
          </div>

          {/* Total Minutes */}
          <div className="p-4 rounded-3xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-purpleText-400 uppercase tracking-widest block">Total Minutes</span>
            <span className="text-lg sm:text-2xl font-extrabold text-pinkPastel-500 font-serif block truncate mt-0.5">
              {result.totalMinutes.toLocaleString()}
            </span>
            <span className="text-[10px] font-bold text-purpleText-400 block mt-1">Minutes Lived</span>
          </div>

          {/* Zodiac Sign */}
          <div className="p-4 rounded-3xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm text-center">
            <span className="text-[10px] font-bold text-purpleText-400 uppercase tracking-widest block">Zodiac Sign</span>
            <span className="text-base sm:text-xl font-extrabold text-purpleText-900 dark:text-white font-serif block truncate mt-0.5">
              {result.zodiacProfile.unicodeSymbol} {result.zodiacSign}
            </span>
            <span className="text-[10px] font-bold text-pinkPastel-500 block mt-1">{result.zodiacProfile.element} Sign</span>
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


