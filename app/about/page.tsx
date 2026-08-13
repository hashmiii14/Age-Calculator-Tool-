import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { ShieldCheck, Zap } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-200">
      <Breadcrumbs items={[{ label: 'About AgePulse' }]} />

      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
          About AgePulse
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed">
          AgePulse was created to provide a fast, beautiful, mathematically accurate, and privacy-first age calculation experience without bloated ads or deceptive templates.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-3 shadow-2xl">
          <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Precision & Speed</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Engineered with pure ECMAScript deterministic date arithmetic that accounts for leap years, February 29 birthdays, and month lengths.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-3 shadow-2xl">
          <div className="w-10 h-10 rounded-2xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Strict Client-Side Privacy</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your birth date is personal information. We calculate everything inside your browser and never transmit your DOB to any remote server.
          </p>
        </div>
      </div>

      <section className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-4 shadow-2xl">
        <h2 className="text-xl font-bold text-white">Our Commitments</h2>
        <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
          <li>100% Free accessibility for all users worldwide</li>
          <li>Zero layout shifts or deceptive ad placements</li>
          <li>Full keyboard navigation and screen-reader accessibility</li>
          <li>Continuous performance optimization for fast loading on modern mobile networks</li>
        </ul>
      </section>
    </div>
  );
}
