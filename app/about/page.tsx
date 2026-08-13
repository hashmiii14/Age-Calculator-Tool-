import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { Calendar, ShieldCheck, Zap, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us – Precision Age & Date Tools | AgePulse',
  description:
    'Learn about AgePulse, our mission for high-accuracy chronological calculations, and our 100% browser-based privacy standards.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: 'About AgePulse' }]} />

      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          About AgePulse
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          AgePulse was created to provide a fast, beautiful, mathematically accurate, and privacy-first age calculation experience without bloated ads or deceptive templates.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-brand-50 dark:bg-brand-950/60 flex items-center justify-center text-brand-600 dark:text-brand-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Precision & Speed</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Engineered with pure ECMAScript deterministic date arithmetic that accounts for leap years, February 29 birthdays, and month lengths.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Strict Client-Side Privacy</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Your birth date is personal information. We calculate everything inside your browser and never transmit your DOB to any remote server.
          </p>
        </div>
      </div>

      <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Our Commitments</h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 list-disc list-inside">
          <li>100% Free accessibility for all users worldwide</li>
          <li>Zero layout shifts or deceptive ad placements</li>
          <li>Full keyboard navigation and screen-reader accessibility</li>
          <li>Continuous performance optimization for fast loading on modern mobile networks</li>
        </ul>
      </section>
    </div>
  );
}
