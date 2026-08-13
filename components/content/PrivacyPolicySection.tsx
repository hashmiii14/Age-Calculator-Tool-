'use client';

import Link from 'next/link';
import { Lock, EyeOff, HardDrive, Cookie, ArrowRight } from 'lucide-react';

export default function PrivacyPolicySection() {
  return (
    <section
      id="privacy-policy-section"
      style={{ backgroundColor: '#161A26', borderColor: '#252A3D' }}
      className="rounded-3xl border p-6 sm:p-8 lg:p-10 space-y-8 shadow-2xl transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#252A3D] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60">
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Guarantee</span>
          </div>
          <h2 style={{ color: '#F2F4FB' }} className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif">
            Privacy Policy Summary
          </h2>
          <p style={{ color: '#9AA3C4' }} className="text-sm sm:text-base leading-relaxed max-w-2xl">
            We believe your personal dates belong to you alone. Learn how AgePulse keeps your data protected with client-side computation.
          </p>
        </div>

        <Link
          href="/privacy-policy"
          style={{ backgroundColor: '#1E2436', borderColor: '#252A3D', color: '#F2F4FB' }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold border hover:bg-[#252C42] hover:border-emerald-500/40 transition-colors whitespace-nowrap self-start sm:self-auto"
        >
          <span>Read Privacy Policy</span>
          <ArrowRight className="w-4 h-4 text-emerald-400" />
        </Link>
      </div>

      {/* Grid of 4 Policy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="p-5 rounded-2xl border space-y-3"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center text-emerald-400">
            <EyeOff className="w-4 h-4" />
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-sm font-bold">
            Zero Server Logs
          </h3>
          <p style={{ color: '#636B8A' }} className="text-xs leading-relaxed">
            Your birth date is never sent to backend servers or recorded in web server traffic logs.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="p-5 rounded-2xl border space-y-3"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-950/60 border border-blue-900/50 flex items-center justify-center text-blue-400">
            <HardDrive className="w-4 h-4" />
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-sm font-bold">
            Local Device Storage
          </h3>
          <p style={{ color: '#636B8A' }} className="text-xs leading-relaxed">
            Saved dates stay strictly within your browser&apos;s local storage and can be wiped instantly.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="p-5 rounded-2xl border space-y-3"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-900/50 flex items-center justify-center text-purple-400">
            <Cookie className="w-4 h-4" />
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-sm font-bold">
            Ad Transparency
          </h3>
          <p style={{ color: '#636B8A' }} className="text-xs leading-relaxed">
            Third-party ads (like Google AdSense) use standard cookies without linking to your birth date inputs.
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{ backgroundColor: '#0E1018', borderColor: '#252A3D' }}
          className="p-5 rounded-2xl border space-y-3"
        >
          <div className="w-9 h-9 rounded-xl bg-amber-950/60 border border-amber-900/50 flex items-center justify-center text-amber-400">
            <Lock className="w-4 h-4" />
          </div>
          <h3 style={{ color: '#F2F4FB' }} className="text-sm font-bold">
            No Account Needed
          </h3>
          <p style={{ color: '#636B8A' }} className="text-xs leading-relaxed">
            100% free access without registration, passwords, email signups, or tracking profiles.
          </p>
        </div>
      </div>
    </section>
  );
}
