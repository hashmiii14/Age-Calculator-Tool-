'use client';

import React from 'react';
import { Calendar, Calculator, Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Enter your date of birth',
      description: 'Type your birth date or select it using the interactive calendar picker.',
      icon: Calendar,
    },
    {
      num: '02',
      title: 'Calculate your exact age',
      description: 'AgePulse processes exact calendar leap years and day counts in milliseconds.',
      icon: Calculator,
    },
    {
      num: '03',
      title: 'Explore your result',
      description: 'See your age breakdown in years, months, and days, total days lived, and next birthday.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white/60 dark:bg-charcoal-900/40 border-y border-blush-200/60 dark:border-charcoal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-roseProduct-500 font-sans">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal-900 dark:text-white tracking-tight font-sans">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 font-medium">
            Calculate your exact age in three effortless steps.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.num}
                className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 border border-roseProduct-200/80 dark:border-charcoal-700 shadow-sm relative group hover:border-roseProduct-400 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-roseProduct-50 dark:bg-charcoal-800 text-roseProduct-500 flex items-center justify-center font-bold">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-extrabold text-roseProduct-200 dark:text-charcoal-700 font-serif">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base font-bold text-charcoal-900 dark:text-white font-sans mb-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
