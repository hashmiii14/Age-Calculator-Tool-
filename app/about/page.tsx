import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { ShieldCheck, Zap, Heart, Calendar, Lock, Sparkles } from 'lucide-react';
import CuteCharacter from '../../components/ui/CuteCharacter';

export const metadata: Metadata = {
  title: 'About AgePulse – Precision Age & Birthday Tools',
  description:
    'Learn about AgePulse, our mission for high-accuracy chronological calculations, human-centric design, and 100% browser-side privacy standards.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-purpleText-900 dark:text-purpleText-100">
      <Breadcrumbs items={[{ label: 'About AgePulse' }]} />

      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs font-extrabold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-pinkPastel-500 fill-pinkPastel-500" />
          <span>Human-Centric & Privacy-First</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-purpleText-900 dark:text-white tracking-tight font-serif">
          About <span className="text-pinkPastel-500 font-serif italic">AgePulse</span>
        </h1>

        <p className="text-base sm:text-lg text-purpleText-600 dark:text-purpleText-300 font-medium leading-relaxed">
          AgePulse was built to make age calculation, birthday tracking, and milestone discovery simple, accurate, beautiful, and completely private.
        </p>
      </section>

      {/* Main Card with Illustration */}
      <div className="bg-white dark:bg-purpleText-900 rounded-3xl sm:rounded-4xl p-6 sm:p-10 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute flex flex-col sm:flex-row items-center gap-6">
        <div className="shrink-0">
          <CuteCharacter variant="calendar" size={110} className="drop-shadow-md" />
        </div>

        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-black font-serif text-purpleText-900 dark:text-white">
            Why We Created AgePulse
          </h2>
          <p className="text-xs sm:text-sm text-purpleText-600 dark:text-purpleText-300 leading-relaxed font-medium">
            Many online age calculators are cluttered with intrusive ads, inaccurate leap-year math, or outdated designs. We created AgePulse to deliver a clean, friendly, consumer-grade experience with strong pink aesthetic touches and precise calendar algorithms.
          </p>
        </div>
      </div>

      {/* Feature Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-white dark:bg-purpleText-900 p-6 rounded-3xl border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-800 flex items-center justify-center text-pinkPastel-500">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-serif text-purpleText-900 dark:text-white">Calendar Precision & Speed</h3>
          <p className="text-xs sm:text-sm text-purpleText-600 dark:text-purpleText-300 leading-relaxed font-medium">
            Engineered with deterministic date arithmetic that correctly handles leap years, February 29 births, and variable month lengths without timezone shifts.
          </p>
        </div>

        <div className="bg-white dark:bg-purpleText-900 p-6 rounded-3xl border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-800 flex items-center justify-center text-pinkPastel-500">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-serif text-purpleText-900 dark:text-white">100% Browser-Side Privacy</h3>
          <p className="text-xs sm:text-sm text-purpleText-600 dark:text-purpleText-300 leading-relaxed font-medium">
            Your birth date is processed entirely within your web browser. We do not store your DOB on remote servers or track individual date inputs.
          </p>
        </div>
      </div>

      {/* Principles */}
      <section className="bg-white dark:bg-purpleText-900 p-6 sm:p-8 rounded-3xl sm:rounded-4xl border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute space-y-4">
        <h2 className="text-xl sm:text-2xl font-black font-serif text-purpleText-900 dark:text-white">
          Our Guiding Commitments
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-purpleText-700 dark:text-purpleText-300 font-medium">
          <li className="flex items-start space-x-2">
            <Sparkles className="w-4 h-4 text-pinkPastel-500 shrink-0 mt-0.5" />
            <span><strong>100% Free Access:</strong> All calculators and date tools are free and accessible to everyone.</span>
          </li>
          <li className="flex items-start space-x-2">
            <Lock className="w-4 h-4 text-pinkPastel-500 shrink-0 mt-0.5" />
            <span><strong>Privacy Protection:</strong> Zero transmission or logging of date inputs.</span>
          </li>
          <li className="flex items-start space-x-2">
            <Calendar className="w-4 h-4 text-pinkPastel-500 shrink-0 mt-0.5" />
            <span><strong>Mobile & Accessibility:</strong> Optimized for smooth touch interaction, keyboard navigation, and fast loading.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
