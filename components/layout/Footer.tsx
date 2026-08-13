'use client';

import Link from 'next/link';
import { ShieldCheck, Lock, Trash2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClearLocalData = () => {
    try {
      localStorage.removeItem('agepulse_dob');
      localStorage.removeItem('agepulse_theme');
      window.location.href = '/';
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-zinc-800 bg-[#FAFAFA] dark:bg-[#121214] transition-colors py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-serif font-extrabold text-xs shadow-subtle">
                A
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white font-serif">
                Age<span className="text-coral-500">Pulse</span>
              </span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Personal date intelligence platform. Calculate your exact chronological age, next birthday, milestone dates, and date discoveries with client-side processing.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                <Lock className="w-3 h-3 text-emerald-500" />
                <span>Local Browser Calculations</span>
              </div>

              <button
                onClick={handleClearLocalData}
                type="button"
                className="inline-flex items-center space-x-1 text-[11px] font-bold text-slate-500 hover:text-coral-500 transition-colors bg-white dark:bg-zinc-900 px-2.5 py-1 rounded-full border border-slate-200 dark:border-zinc-800"
                title="Clear any saved birth date"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Saved Date</span>
              </button>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 font-sans">
              Calculators
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/age-calculator" className="hover:text-coral-500 transition-colors">
                  Exact Age Calculator
                </Link>
              </li>
              <li>
                <Link href="/birthday-countdown" className="hover:text-coral-500 transition-colors">
                  Birthday Countdown
                </Link>
              </li>
              <li>
                <Link href="/zodiac-sign" className="hover:text-coral-500 transition-colors">
                  Zodiac Sign Profile
                </Link>
              </li>
              <li>
                <Link href="/birth-date" className="hover:text-coral-500 transition-colors">
                  Birth Date Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* More Tools */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 font-sans">
              More Tools
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/date-difference" className="hover:text-coral-500 transition-colors">
                  Date Difference Tool
                </Link>
              </li>
              <li>
                <Link href="/age-comparison" className="hover:text-coral-500 transition-colors">
                  Age Comparison Tool
                </Link>
              </li>
              <li>
                <Link href="/on-this-date" className="hover:text-coral-500 transition-colors">
                  What Happened On This Date
                </Link>
              </li>
              <li>
                <Link href="/date-tools" className="hover:text-coral-500 transition-colors">
                  All Date Tools Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Information & Legal */}
          <div>
            <h3 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 font-sans">
              Legal & Privacy
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <li>
                <Link href="/about" className="hover:text-coral-500 transition-colors">
                  About AgePulse
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-coral-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-coral-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-coral-500 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer box */}
        <div className="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong>Astrology Disclaimer:</strong> Zodiac profiles and entertainment facts on AgePulse are provided strictly for general interest. They do not constitute psychological, medical, financial, or legal advice.
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {currentYear} AgePulse. All rights reserved.</p>
          <div className="flex items-center space-x-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-coral-500" />
            <span>Precise calendar arithmetic & browser-side privacy.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
