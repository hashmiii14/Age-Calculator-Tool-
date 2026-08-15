'use client';

import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Smartphone } from 'lucide-react';

export default function WhyAgePulseSection() {
  const features = [
    {
      title: 'Precise calculations',
      description: 'Built around proper Gregorian calendar date arithmetic, leap year logic, and timezone-neutral calculations.',
      icon: CheckCircle2,
    },
    {
      title: 'Simple to use',
      description: 'Clean date input fields with interactive calendar selection and instant keyboard shortcuts.',
      icon: Zap,
    },
    {
      title: 'Private by design',
      description: 'Calculations run directly inside your web browser. No personal dates are stored or transmitted.',
      icon: ShieldCheck,
    },
    {
      title: 'Works everywhere',
      description: 'Optimized touch interface designed specifically for mobile, tablet, and desktop viewports.',
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-roseProduct-500 font-sans">
            Built for Speed & Privacy
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-charcoal-900 dark:text-white tracking-tight font-sans">
            Why AgePulse
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 dark:text-charcoal-300 font-medium">
            Designed to deliver precision date intelligence with modern product standard.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-charcoal-900 rounded-2xl p-6 border border-roseProduct-200/80 dark:border-charcoal-700 shadow-sm space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-roseProduct-50 dark:bg-charcoal-800 text-roseProduct-500 flex items-center justify-center">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-charcoal-900 dark:text-white font-sans">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
