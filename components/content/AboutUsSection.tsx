'use client';

import Link from 'next/link';
import { Info, Zap, ShieldCheck, Calendar, ArrowRight } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section
      id="about-us-section"
      style={{ backgroundColor: '#161A26', borderColor: '#252A3D' }}
      className="rounded-3xl border p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xl transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#252A3D] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#E85D36] bg-[#E85D36]/10 border border-[#E85D36]/20">
            <Info className="w-3.5 h-3.5" />
            <span>About Us</span>
          </div>
          <h2 style={{ color: '#F2F4FB' }} className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif">
            About AgePulse
          </h2>
          <p style={{ color: '#9AA3C4' }} className="text-sm sm:text-base leading-relaxed max-w-2xl">
            AgePulse is a modern, high-precision date intelligence platform built to deliver exact chronological calculations, life milestone tracking, and birthday analytics with absolute privacy.
          </p>
        </div>

        <Link
          href="/about"
          style={{ backgroundColor: '#E85D36', color: '#fff' }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold shadow hover:bg-[#D04521] transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <span>Full About Page</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="p-5 sm:p-6 rounded-2xl border space-y-3 hover:border-[#E85D36]/40 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-base font-bold">
            Mathematical Precision
          </h3>
          <p style={{ color: '#636B8A' }} className="text-xs sm:text-sm leading-relaxed">
            Engineered with pure JavaScript calendar arithmetic that accounts for leap years, February 29th births, and exact day/month lengths.
          </p>
        </div>

        {/* Pillar 2 */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="p-5 sm:p-6 rounded-2xl border space-y-3 hover:border-emerald-500/40 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-base font-bold">
            Privacy First Architecture
          </h3>
          <p style={{ color: '#636B8A' }} className="text-xs sm:text-sm leading-relaxed">
            Your birth date is sensitive personal data. All calculations run strictly inside your local browser. Zero DOB data is transmitted to servers.
          </p>
        </div>

        {/* Pillar 3 */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="p-5 sm:p-6 rounded-2xl border space-y-3 hover:border-indigo-500/40 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-900/50 flex items-center justify-center text-indigo-400">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-base font-bold">
            All-In-One Date Tools
          </h3>
          <p style={{ color: '#636B8A' }} className="text-xs sm:text-sm leading-relaxed">
            Explore exact age in years, months, days, total hours, next birthday countdowns, zodiac profiles, and comparative date differences.
          </p>
        </div>
      </div>
    </section>
  );
}
