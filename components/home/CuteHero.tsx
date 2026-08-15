'use client';

import React from 'react';
import { ShieldCheck, Calendar, Sparkles } from 'lucide-react';
import AgeCalculatorForm from '../age-calculator/AgeCalculatorForm';

interface ProductHeroProps {
  onCalculate: (dob: string, targetDate: string) => void;
  onReset: () => void;
  initialDOB?: string;
  initialTargetDate?: string;
}

export default function CuteHero({
  onCalculate,
  onReset,
  initialDOB = '',
  initialTargetDate,
}: ProductHeroProps) {
  return (
    <section className="relative pt-6 pb-8 sm:pt-10 sm:pb-12">
      {/* Soft Background Tint */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full pointer-events-none opacity-40 -z-10">
        <div className="absolute top-6 left-12 w-64 h-64 rounded-full bg-roseProduct-100/60 blur-3xl"></div>
        <div className="absolute bottom-4 right-16 w-80 h-80 rounded-full bg-roseProduct-200/40 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Copy & Trust Notes */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-roseProduct-50 dark:bg-charcoal-800 border border-roseProduct-200 dark:border-charcoal-700 text-roseProduct-600 dark:text-roseProduct-300 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-roseProduct-500" />
              <span>Age Calculator</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-charcoal-900 dark:text-white font-sans leading-[1.15]">
              Calculate Your <span className="text-roseProduct-500 font-serif italic">Exact Age</span>
            </h1>

            <p className="text-base sm:text-lg text-charcoal-600 dark:text-charcoal-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Find your exact age in years, months, and days — quickly and accurately.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-charcoal-500 dark:text-charcoal-400">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-roseProduct-500" />
                <span>Your date is used only to calculate your result.</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-roseProduct-500" />
                <span>Leap-year aware</span>
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: The Calculator Card as Visual Centerpiece */}
          <div className="lg:col-span-6">
            <AgeCalculatorForm
              onCalculate={onCalculate}
              onReset={onReset}
              initialDOB={initialDOB}
              initialTargetDate={initialTargetDate}
            />
          </div>

        </div>
      </div>
    </section>
  );
}


