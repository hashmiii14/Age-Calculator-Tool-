'use client';

import Link from 'next/link';
import { Lock, EyeOff, HardDrive, Cookie, ArrowRight } from 'lucide-react';

export default function PrivacyPolicySection() {
  return (
    <section
      id="privacy-policy-section"
      className="rounded-3xl sm:rounded-4xl border-2 border-blush-200 dark:border-plum-800 bg-white dark:bg-plum-900 p-6 sm:p-8 lg:p-10 space-y-8 shadow-cute transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blush-200 dark:border-plum-800 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60">
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Guarantee</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif text-plum-900 dark:text-white">
            Privacy Policy Summary
          </h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl text-slate-600 dark:text-slate-300 font-medium">
            We believe your personal dates belong to you alone. Learn how AgePulse keeps your data protected with client-side computation.
          </p>
        </div>

        <Link
          href="/privacy-policy"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 hover:bg-coral-500 hover:text-white transition-all border border-blush-200 dark:border-plum-700 whitespace-nowrap self-start sm:self-auto cursor-pointer"
        >
          <span>Read Privacy Policy</span>
          <ArrowRight className="w-4 h-4 text-coral-500 group-hover:text-white" />
        </Link>
      </div>

      {/* Grid of 4 Policy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="p-5 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-500">
            <EyeOff className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-plum-900 dark:text-white">
            Zero Server Logs
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            Your birth date is never sent to backend servers or recorded in web server traffic logs.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-5 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 flex items-center justify-center text-blue-500">
            <HardDrive className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-plum-900 dark:text-white">
            Local Device Storage
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            Saved dates stay strictly within your browser&apos;s local storage and can be wiped instantly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-5 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-500">
            <Cookie className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-plum-900 dark:text-white">
            Ad Transparency
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            Third-party ads (like Google AdSense) use standard cookies without linking to your birth date inputs.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-5 rounded-2xl border-2 border-blush-100 dark:border-plum-800 bg-blush-50/50 dark:bg-plum-950/50 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 flex items-center justify-center text-amber-500">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold text-plum-900 dark:text-white">
            No Account Needed
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
            100% free access without registration, passwords, email signups, or tracking profiles.
          </p>
        </div>
      </div>
    </section>
  );
}

