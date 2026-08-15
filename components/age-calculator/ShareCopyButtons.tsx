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
      `Calculated with AGEpulse — https://www.agepulse.site`
    ].join('\n');
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
        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-pinkPastel-200 dark:border-purpleText-700 bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 hover:bg-pinkPastel-200 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-pinkPastel-400 cursor-pointer"
        aria-label="Copy result summary to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 text-pinkPastel-500" />
            <span>Copy Result</span>
          </>
        )}
      </button>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-pinkPastel-500 hover:bg-pinkPastel-600 text-white text-sm font-semibold transition-colors shadow-cute focus:outline-none focus:ring-2 focus:ring-pinkPastel-400 cursor-pointer"
        aria-label="Share age result"
      >
        <Share2 className="w-4 h-4" />
        <span>Share Result</span>
      </button>
    </div>
  );
}

