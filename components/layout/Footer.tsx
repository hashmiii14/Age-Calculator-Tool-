'use client';

import Link from 'next/link';
import { ShieldCheck, Trash2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleClearData = () => {
    try {
      localStorage.removeItem('agepulse_dob');
      window.location.href = '/';
    } catch (e) { console.error(e); }
  };

  return (
    <footer className="border-t border-blush-200 dark:border-plum-800 bg-white/60 dark:bg-plum-950/80 mt-auto transition-colors">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-blush-200 dark:border-plum-800">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="font-extrabold text-xl tracking-tight font-sans uppercase text-plum-900 dark:text-white">
                AGE<span className="text-coral-500 font-serif lowercase italic text-2xl font-bold ml-0.5">pulse</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-600 dark:text-slate-300 font-medium">
              Simple, clean, precision age calculator tool. Calculate exact age in years, months, and days instantly in your browser.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-blush-100 dark:bg-plum-900 text-slate-700 dark:text-slate-300 border border-blush-200 dark:border-plum-800">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
                100% Client-side & Private
              </div>
              <button
                onClick={handleClearData}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-blush-100 dark:bg-plum-900 text-slate-600 dark:text-slate-400 border border-blush-200 dark:border-plum-800 hover:text-coral-500 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                Clear Saved Data
              </button>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider mb-4 font-sans text-plum-900 dark:text-white">
              Calculators
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
              {[
                ['/age-calculator',      'Exact Age Calculator'],
                ['/birthday-countdown',  'Birthday Countdown'],
                ['/zodiac-sign',         'Zodiac Sign Profile'],
                ['/birth-date',          'Birth Date Profile'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-coral-500 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Tools */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider mb-4 font-sans text-plum-900 dark:text-white">
              More Tools
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
              {[
                ['/date-difference',  'Date Difference'],
                ['/age-comparison',   'Age Comparison'],
                ['/on-this-date',     'On This Date'],
                ['/date-tools',       'All Date Tools'],
                ['/age-milestones',   'Age Milestones'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-coral-500 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider mb-4 font-sans text-plum-900 dark:text-white">
              Legal & About
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600 dark:text-slate-400">
              {[
                ['/about',          'About AgePulse'],
                ['/privacy-policy', 'Privacy Policy'],
                ['/terms',          'Terms of Service'],
                ['/disclaimer',     'Disclaimer'],
                ['/contact',        'Contact Us'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-coral-500 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="pt-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>© {year} AgePulse. All rights reserved.</span>
            <span>Precise calendar arithmetic · Client-side privacy · Free & simple</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

