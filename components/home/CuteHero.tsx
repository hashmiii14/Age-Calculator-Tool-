'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Heart, ShieldCheck, Calendar, ArrowRight, Compass } from 'lucide-react';

export default function CuteHero() {
  const [secondsCount, setSecondsCount] = useState(652391200);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
      {/* Background cute organic floating graphics */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 dark:opacity-25 -z-10">
        <div className="absolute top-8 left-6 w-32 h-32 rounded-full bg-blush-300 blur-3xl animate-float"></div>
        <div className="absolute bottom-4 right-10 w-44 h-44 rounded-full bg-coral-300 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-pink-200 blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Copy & Hero CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blush-100 dark:bg-plum-900 border border-blush-200 dark:border-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-coral-500 animate-sparkle" />
              <span>Your Personal Date & Birth Discovery Platform</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-plum-900 dark:text-white font-serif leading-[1.15]">
              More Than Your Age.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral-500 via-blush-500 to-coral-600 font-serif">
                Discover Your Date.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Calculate your exact age, explore your birthday dashboard, discover milestones, learn your zodiac profile, and uncover fascinating facts about your birth date.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#calculator-form"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-coral-500 to-blush-500 hover:from-coral-600 hover:to-blush-600 text-white font-extrabold text-sm shadow-cute hover:shadow-cute-hover transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Discover My Age</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/birthday-countdown"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-plum-900 text-coral-600 dark:text-coral-300 hover:bg-blush-50 dark:hover:bg-plum-800 font-extrabold text-sm border border-blush-200 dark:border-plum-800 shadow-sm transition-all"
              >
                <Heart className="w-4 h-4 text-coral-500" />
                <span>Explore My Birthday</span>
              </Link>
            </div>

            {/* Privacy Badges */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-xs font-bold text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Private Client Calculations</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-coral-500" />
                <span>Leap Year & Feb 29 Aware</span>
              </span>
            </div>
          </div>

          {/* Right Column: Animated Date/Age Visualization Card (Matching Reference Image) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-b from-[#FFF5F8] to-[#FFEBF0] dark:from-[#2A182E] dark:to-[#1E1122] rounded-[2.5rem] p-6 sm:p-7 border-2 border-blush-200/80 dark:border-plum-800 shadow-cute relative overflow-hidden group">

              {/* Decorative Autumn Leaf / Sparkle Floating Accents */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-100 dark:bg-coral-950/40 rounded-full blur-xl"></div>
              <div className="absolute top-3 right-4 text-coral-400 opacity-60 text-2xl select-none animate-float">🍂</div>
              <div className="absolute top-12 left-4 text-blush-400 opacity-60 text-xl select-none animate-sparkle">✨</div>

              {/* Top Card Banner Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blush-200/60 dark:border-plum-800/60">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    🎂
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-plum-900 dark:text-white uppercase tracking-wider block font-sans">
                      Sample Discovery Card
                    </span>
                    <span className="text-[10px] font-bold text-coral-600 dark:text-coral-400">
                      Born: 14 March 2006
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-blush-100 dark:bg-plum-800 text-[10px] font-extrabold text-coral-600 dark:text-coral-300">
                  Pisces ♓
                </div>
              </div>

              {/* Central Character & Question Mark Illustration Aesthetic */}
              <div className="my-5 bg-white/90 dark:bg-plum-900/80 rounded-3xl p-5 border border-blush-100 dark:border-plum-800 shadow-sm relative">
                <div className="text-center space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Age Today</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
                    20 Years, 4 Months, 30 Days
                  </div>
                </div>

                {/* Animated Dynamic Ticker Row */}
                <div className="grid grid-cols-2 gap-2.5 mt-4 pt-3 border-t border-blush-100 dark:border-plum-800 text-center">
                  <div className="p-2.5 rounded-2xl bg-blush-50 dark:bg-plum-950/60">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Days Lived</span>
                    <span className="text-sm font-extrabold text-coral-600 dark:text-coral-400">7,458 Days</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-blush-50 dark:bg-plum-950/60">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase">Weeks Lived</span>
                    <span className="text-sm font-extrabold text-coral-600 dark:text-coral-400">1,065 Weeks</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-blush-50 dark:bg-plum-950/60 col-span-2 flex items-center justify-between px-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Live Seconds</span>
                    <span className="text-xs font-mono font-extrabold text-plum-900 dark:text-white">
                      {secondsCount.toLocaleString()}s
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Row: Next Birthday & Milestone Preview */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-white/70 dark:bg-plum-900/60 border border-blush-100 dark:border-plum-800">
                  <div className="flex items-center space-x-1 text-coral-500 font-bold mb-0.5">
                    <Heart className="w-3.5 h-3.5 fill-coral-500" />
                    <span>Next Birthday</span>
                  </div>
                  <p className="font-extrabold text-plum-900 dark:text-white">In 127 Days</p>
                  <p className="text-[10px] text-slate-400">Turning 21 Years</p>
                </div>

                <div className="p-3 rounded-2xl bg-white/70 dark:bg-plum-900/60 border border-blush-100 dark:border-plum-800">
                  <div className="flex items-center space-x-1 text-coral-500 font-bold mb-0.5">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Next Milestone</span>
                  </div>
                  <p className="font-extrabold text-plum-900 dark:text-white">10,000th Day</p>
                  <p className="text-[10px] text-slate-400">2,542 Days Away</p>
                </div>
              </div>

              {/* Floating Zodiac Wheel Aesthetic Graphic (Matching Reference Image) */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full border-4 border-dashed border-coral-400/40 opacity-70 animate-spin-slow pointer-events-none flex items-center justify-center text-coral-400 text-xs font-bold">
                ♈ ♉ ♊ ♋ ♌ ♍
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
