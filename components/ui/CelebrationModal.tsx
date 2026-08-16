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
        particleCount: 70,
        spread: 70,
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

    // Lock body scrolling while open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleScrollToBirthday = () => {
    onClose();
    if (onViewBirthday) {
      onViewBirthday();
    } else {
      const el = document.getElementById('birthday-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = '/birthday-countdown';
      }
    }
  };

  const handleScrollToMilestones = () => {
    onClose();
    if (onViewMilestones) {
      onViewMilestones();
    } else {
      const el = document.getElementById('milestones-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = '/age-milestones';
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-purpleText-950/70 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="celebration-modal-title"
    >
      {/* Outer Card with Viewport Safety */}
      <div className="relative w-full max-w-lg rounded-4xl bg-gradient-to-b from-white via-pinkPastel-50 to-pinkPastel-100 dark:from-purpleText-900 dark:to-purpleText-950 border-3 border-pinkPastel-300 dark:border-purpleText-700 shadow-cute p-6 sm:p-8 text-center space-y-5 animate-fade-up overflow-hidden max-h-[90dvh] overflow-y-auto">

        {/* Decorative Floating Hearts & Stars */}
        <div className="absolute top-3 left-4 text-pinkPastel-400 animate-float opacity-70 pointer-events-none">
          <Heart className="w-5 h-5 fill-pinkPastel-300" />
        </div>
        <div className="absolute bottom-4 right-4 text-pinkPastel-400 animate-float opacity-70 pointer-events-none" style={{ animationDelay: '1.5s' }}>
          <Sparkles className="w-6 h-6 text-pinkPastel-500" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-2xl bg-white/80 dark:bg-purpleText-800 text-purpleText-600 dark:text-purpleText-300 hover:text-pinkPastel-500 transition-colors focus:outline-none cursor-pointer border border-pinkPastel-200 dark:border-purpleText-700"
          aria-label="Close celebration popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Mascot Illustration */}
        <div className="flex justify-center pt-2">
          <CuteCharacter variant="celebrating" size={96} className="drop-shadow-md" />
        </div>

        {/* Heading & Quote */}
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
        <div className="py-3 px-4 rounded-3xl bg-white dark:bg-purpleText-900 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-sm inline-block max-w-full">
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
            className="w-full sm:w-auto px-4 py-3 rounded-2xl text-purpleText-500 dark:text-purpleText-400 hover:text-purpleText-900 dark:hover:text-white font-extrabold text-xs uppercase tracking-wider cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
