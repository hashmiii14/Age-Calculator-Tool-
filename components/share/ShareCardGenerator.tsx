'use client';

import { useState, useRef } from 'react';
import { Sparkles, Copy, Share2, Download, X, Check } from 'lucide-react';
import { AgeResult } from '../../lib/age/types';

interface ShareCardGeneratorProps {
  result: AgeResult;
  onClose: () => void;
}

export default function ShareCardGenerator({ result, onClose }: ShareCardGeneratorProps) {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const shareText = `✨ MY AGE PULSE DISCOVERY ✨
Born: ${result.formattedDOB} (${result.dobWeekday})
Exact Age: ${result.years} Years, ${result.months} Months, ${result.days} Days
Total Days Alive: ${result.totalDays.toLocaleString()} Days
Western Zodiac: ${result.zodiacProfile.unicodeSymbol} ${result.zodiacSign} (${result.zodiacProfile.element} Element)
Next Birthday: In ${result.nextBirthday.daysRemaining} Days (Turning ${result.nextBirthday.turningAge})
Next Milestone: ${result.nextBigDay ? result.nextBigDay.milestoneDays.toLocaleString() + 'th Day' : '10,000 Days'}

Discover your exact age & birthday story at AgePulse: https://www.agepulse.site`;

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My AgePulse Discovery',
          text: shareText,
          url: 'https://www.agepulse.site',
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      handleCopyText();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-plum-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-white dark:bg-plum-900 rounded-4xl p-6 border border-blush-200 dark:border-plum-800 shadow-2xl relative space-y-6">

        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-blush-100 dark:border-plum-800">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-coral-500" />
            <h3 className="font-serif font-extrabold text-lg text-plum-900 dark:text-white">
              Shareable Result Card
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-plum-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Share Card Preview */}
        <div
          ref={cardRef}
          className="p-6 rounded-3xl bg-gradient-to-b from-[#FFF0F4] to-[#FFE4E8] dark:from-[#2E1832] dark:to-[#1C121E] border-2 border-blush-300 dark:border-plum-700 text-center space-y-4 shadow-cute relative overflow-hidden"
        >
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-coral-500 text-white text-[10px] font-extrabold tracking-widest uppercase">
            <span>MY AGE PULSE</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">Born Date</span>
            <div className="text-lg font-extrabold text-plum-900 dark:text-white font-serif">
              {result.formattedDOB} ({result.dobWeekday})
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 dark:bg-plum-900/90 border border-blush-100 dark:border-plum-800 space-y-1">
            <span className="text-[10px] font-bold text-coral-500 uppercase tracking-widest block">Exact Age Today</span>
            <div className="text-2xl font-extrabold text-plum-900 dark:text-white font-serif">
              {result.years}y {result.months}m {result.days}d
            </div>
            <p className="text-xs font-extrabold text-coral-500">
              {result.totalDays.toLocaleString()} Days Alive
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white/70 dark:bg-plum-950/60 font-bold text-plum-900 dark:text-white">
              {result.zodiacProfile.unicodeSymbol} {result.zodiacSign}
            </div>
            <div className="p-2.5 rounded-xl bg-white/70 dark:bg-plum-950/60 font-bold text-coral-500">
              In {result.nextBirthday.daysRemaining} Days 🎂
            </div>
          </div>

          <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest pt-1">
            www.agepulse.site
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleCopyText}
            type="button"
            className="py-3 px-4 rounded-2xl bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 font-extrabold text-xs flex items-center justify-center space-x-1.5 hover:bg-blush-200"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={handleNativeShare}
            type="button"
            className="py-3 px-4 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-cute"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Result</span>
          </button>
        </div>
      </div>
    </div>
  );
}
