'use client';

import React, { useEffect } from 'react';
import { X, Trophy, PartyPopper, Heart, Sparkles, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import CuteCharacter from './CuteCharacter';

interface CelebrationModalProps {
  years: number;
  months: number;
  days: number;
  onClose: () => void;
  onViewBirthday?: () => void;
  onViewMilestones?: () => void;
}

export default function CelebrationModal({
  years,
  months,
  days,
  onClose,
  onViewBirthday,
  onViewMilestones,
}: CelebrationModalProps) {
  useEffect(() => {
    // Launch confetti on modal open
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 },
        disableForReducedMotion: true,
      });
    } catch (e) {
      console.error('Confetti launch error:', e);
    }

    // ESC key close support
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleScrollToBirthday = () => {
    onClose();
    if (onViewBirthday) {
      onViewBirthday();
    } else {
      setTimeout(() => {
        const el = document.getElementById('birthday-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = '/birthday-countdown';
        }
      }, 50);
    }
  };

  const handleScrollToMilestones = () => {
    onClose();
    if (onViewMilestones) {
      onViewMilestones();
    } else {
      setTimeout(() => {
        const el = document.getElementById('milestones-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = '/age-milestones';
        }
      }, 50);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebration-modal-title"
    >
      {/* Outer Card with High Contrast Solid Styling */}
      <div className="relative w-full max-w-lg rounded-3xl sm:rounded-4xl bg-white dark:bg-purpleText-900 border-4 border-pinkPastel-400 dark:border-purpleText-700 shadow-2xl p-6 sm:p-8 text-center space-y-5 overflow-hidden max-h-[85vh] overflow-y-auto text-purpleText-900 dark:text-white">

        {/* Decorative Floating Hearts & Stars */}
        <div className="absolute top-3 left-4 text-pinkPastel-400 opacity-70 pointer-events-none">
          <Heart className="w-5 h-5 fill-pinkPastel-300" />
        </div>
        <div className="absolute bottom-4 right-4 text-pinkPastel-400 opacity-70 pointer-events-none">
          <Sparkles className="w-6 h-6 text-pinkPastel-500" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-800 text-purpleText-800 dark:text-white hover:bg-pinkPastel-500 hover:text-white transition-colors focus:outline-none cursor-pointer border border-pinkPastel-300 dark:border-purpleText-700"
          aria-label="Close celebration popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mascot Illustration */}
        <div className="flex justify-center pt-2">
          <CuteCharacter variant="celebrating" size={96} className="drop-shadow-md" />
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs font-black uppercase tracking-wider">
            <PartyPopper className="w-3.5 h-3.5 text-pinkPastel-500" />
            <span>Age Calculated Successfully</span>
          </div>

          <h2
            id="celebration-modal-title"
            className="text-2xl sm:text-4xl font-black font-serif text-purpleText-900 dark:text-white leading-tight"
          >
            🎉 Yay! Your Age Is Calculated! 🎂
          </h2>

          <p className="text-xs sm:text-sm text-purpleText-600 dark:text-purpleText-300 font-medium italic max-w-sm mx-auto">
            &ldquo;Every year is a little story of its own. Keep making it count! ❤️&rdquo;
          </p>
        </div>

        {/* Compact Result Display Badge */}
        <div className="py-3 px-5 rounded-3xl bg-pinkPastel-50 dark:bg-purpleText-950 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-sm inline-block max-w-full">
          <span className="text-xl sm:text-3xl font-black font-serif text-purpleText-900 dark:text-white tracking-tight">
            {years} <span className="text-pinkPastel-500 text-base sm:text-xl font-bold">Years</span> • {months} <span className="text-pinkPastel-500 text-base sm:text-xl font-bold">Months</span> • {days} <span className="text-pinkPastel-500 text-base sm:text-xl font-bold">Days</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={handleScrollToBirthday}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-pinkPastel-500 hover:bg-pinkPastel-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-cute transition-all cursor-pointer"
          >
            <Gift className="w-4 h-4" />
            <span>View Birthday</span>
          </button>

          <button
            type="button"
            onClick={handleScrollToMilestones}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 hover:bg-pinkPastel-200 font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer border border-pinkPastel-200 dark:border-purpleText-700"
          >
            <Trophy className="w-4 h-4 text-pinkPastel-500" />
            <span>View Milestones</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-purpleText-100 dark:bg-purpleText-800 text-purpleText-900 dark:text-white hover:bg-pinkPastel-500 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
