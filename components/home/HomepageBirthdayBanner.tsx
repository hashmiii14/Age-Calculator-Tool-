'use client';

import React from 'react';
import Link from 'next/link';
import { PartyPopper, ArrowRight, Gift, Sparkles } from 'lucide-react';
import CuteCharacter from '../ui/CuteCharacter';

export default function HomepageBirthdayBanner() {
  return (
    <section className="w-full py-2">
      <div className="rounded-3xl sm:rounded-4xl p-6 sm:p-10 bg-gradient-to-r from-pinkPastel-500 via-pinkPastel-600 to-rose-600 text-white shadow-cute border-2 border-pinkPastel-400 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left Content */}
        <div className="space-y-3 text-center sm:text-left z-10 max-w-xl">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Birthday Countdown</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-serif tracking-tight">
            🎂 One More Year. One More Story. ✨
          </h2>

          <p className="text-sm sm:text-base text-white/90 font-medium">
            See how many days, hours, and minutes are left until your next birthday.
          </p>

          <div className="pt-2">
            <Link
              href="/birthday-countdown"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-pinkPastel-600 hover:bg-pinkPastel-50 font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Gift className="w-4 h-4 text-pinkPastel-500" />
              <span>Check My Birthday Countdown →</span>
            </Link>
          </div>
        </div>

        {/* Right Mascot Artwork */}
        <div className="relative z-10 shrink-0">
          <CuteCharacter variant="celebrating" size={110} className="drop-shadow-lg animate-float" />
        </div>

      </div>
    </section>
  );
}
