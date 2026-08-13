'use client';

import { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';
import { AgeResult } from '../../lib/age/types';

interface ShareCopyButtonsProps {
  result: AgeResult;
}

export default function ShareCopyButtons({ result }: ShareCopyButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getSummaryText = () => {
    return [
      ` Exact Age: ${result.years} Years, ${result.months} Months, ${result.days} Days`,
      ` Born: ${result.formattedDOB} (${result.dobWeekday})`,
      ` Age on ${result.formattedTargetDate}: ${result.years} yrs, ${result.months} mos, ${result.days} days`,
      ` Total Days: ${result.totalDays.toLocaleString()} days`,
      ` Next Birthday: ${result.nextBirthday.formattedDate} (${result.nextBirthday.daysRemaining} days remaining)`,
      ` Zodiac Sign: ${result.zodiacSign}`,
      `Calculated with AgePulse — Free Precision Age Calculator`
    ].join('\n');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy result:', err);
    }
  };

  const handleShare = async () => {
    const summary = getSummaryText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Age Calculation Result',
          text: summary,
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
    <div className="flex items-center space-x-3">
      <button
        onClick={handleCopy}
        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Copy result summary to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-slate-400" />
            <span>Copy Result</span>
          </>
        )}
      </button>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-orange-950/60 border border-orange-900/60 text-orange-300 hover:bg-orange-900/60 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Share age result"
      >
        <Share2 className="w-4 h-4" />
        <span>Share Result</span>
      </button>
    </div>
  );
}
