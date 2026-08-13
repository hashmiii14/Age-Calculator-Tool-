'use client';

import Link from 'next/link';
import { Sparkles, ShieldCheck, Lock, Trash2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClearLocalData = () => {
    try {
      localStorage.removeItem('agepulse_theme');
      localStorage.removeItem('agepulse_gender_pref');
      localStorage.removeItem('agepulse_quiz_result');
      alert('Your local preferences have been cleared safely.');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <footer className="border-t border-blush-200 dark:border-plum-800 bg-[#FFF0F4] dark:bg-plum-950 transition-colors py-12 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-coral-500 to-blush-500 flex items-center justify-center text-white shadow-md shadow-coral-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-plum-900 dark:text-white font-serif">
                Age<span className="text-coral-500">Pulse</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Your personal date, age & birth-day discovery platform. Calculate your exact age, explore birthday countdowns, zodiac profiles, milestones, and fun birth date facts with 100% client-side privacy.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded-full">
                <Lock className="w-3 h-3" />
                <span>100% Client-Side Privacy</span>
              </div>

              <button
                onClick={handleClearLocalData}
                type="button"
                className="inline-flex items-center space-x-1 text-[11px] font-bold text-slate-500 hover:text-coral-500 transition-colors bg-white/80 dark:bg-plum-900/60 px-2.5 py-1 rounded-full border border-blush-200 dark:border-plum-800"
                title="Clear any saved local preferences"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Local Data</span>
              </button>
            </div>
          </div>

          {/* Quick Tools */}
          <div>
            <h3 className="text-xs font-extrabold text-plum-900 dark:text-white uppercase tracking-wider mb-3.5 font-sans">
              Discovery Tools
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
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
                  Zodiac & Astrology
                </Link>
              </li>
              <li>
                <Link href="/birth-date" className="hover:text-coral-500 transition-colors">
                  Birth Date Profile
                </Link>
              </li>
              <li>
                <Link href="/age-milestones" className="hover:text-coral-500 transition-colors">
                  Age & Day Milestones
                </Link>
              </li>
            </ul>
          </div>

          {/* More Calculators */}
          <div>
            <h3 className="text-xs font-extrabold text-plum-900 dark:text-white uppercase tracking-wider mb-3.5 font-sans">
              Calculators Hub
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
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
                  All 10+ Date Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="text-xs font-extrabold text-plum-900 dark:text-white uppercase tracking-wider mb-3.5 font-sans">
              Information & Legal
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
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

        {/* Astrology Disclaimer Box */}
        <div className="p-3.5 rounded-2xl bg-blush-100/70 dark:bg-plum-900/40 border border-blush-200/80 dark:border-plum-800/60 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong>Astrology & Entertainment Disclaimer:</strong> Astrology profiles, zodiac traits, and personality quiz archetypes on AgePulse are provided strictly for general interest and fun entertainment purposes. They do not constitute psychological, medical, financial, or legal advice.
        </div>

        {/* Bottom copyright line */}
        <div className="pt-4 border-t border-blush-200 dark:border-plum-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <p>© {currentYear} AgePulse. All rights reserved.</p>
          <div className="flex items-center space-x-1 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-coral-500" />
            <span>Client-side precision & mobile-first design.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
