'use client';

import Link from 'next/link';
import { Info, Zap, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section
      id="about-us-section"
      className="rounded-3xl sm:rounded-4xl border-2 border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 p-6 sm:p-8 lg:p-10 space-y-8 shadow-cute transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blush-200 dark:border-plum-800 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-coral-500 bg-blush-100 dark:bg-plum-950 border border-blush-200 dark:border-plum-800">
            <Info className="w-3.5 h-3.5" />
            <span>About Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-plum-900 dark:text-white">
            About AgePulse
          </h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl text-slate-600 dark:text-slate-300 font-medium">
            AgePulse is a simple, high-precision age calculator tool built to deliver exact chronological calculations, life milestone tracking, and birthday analytics with absolute privacy.
          </p>
        </div>

        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold bg-coral-500 hover:bg-coral-600 text-white shadow-cute transition-all whitespace-nowrap self-start sm:self-auto"
        >
          <span>Full About Page</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-3 hover:border-coral-300 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-coral-100 dark:bg-plum-800 flex items-center justify-center text-coral-500">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-plum-900 dark:text-white">
            Mathematical Precision
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            Engineered with pure calendar arithmetic that accounts for leap years, February 29th births, and exact day/month lengths.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-3 hover:border-emerald-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-500">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-plum-900 dark:text-white">
            Privacy First Architecture
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            Your birth date is sensitive personal data. All calculations run strictly inside your local browser. Zero DOB data is sent to servers.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="p-5 sm:p-6 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-3 hover:border-indigo-400 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-500">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-plum-900 dark:text-white">
            All-In-One Date Tools
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            Explore exact age in years, months, days, total hours, next birthday countdowns, zodiac profiles, and comparative date differences.
          </p>
        </div>
      </div>
    </section>
  );
}

