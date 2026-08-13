'use client';

import { useState } from 'react';
import { Sparkles, CalendarCheck, ShieldCheck } from 'lucide-react';
import AgeCalculatorForm from '../components/age-calculator/AgeCalculatorForm';
import AgeResultDashboard from '../components/age-calculator/AgeResultDashboard';
import AgeCalculatorGuide from '../components/content/AgeCalculatorGuide';
import FAQAccordion from '../components/content/FAQAccordion';
import AdSlot from '../components/ads/AdSlot';
import { calculateAge } from '../lib/age/ageEngine';
import { AgeResult } from '../lib/age/types';

export default function HomePage() {
  const [result, setResult] = useState<AgeResult | null>(null);

  const handleCalculate = (dob: string, targetDate: string) => {
    try {
      const calculated = calculateAge(dob, targetDate);
      setResult(calculated);
    } catch (err) {
      console.error('Calculation error:', err);
    }
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Hero Section styled matching reference design image */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-2">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-100/80 dark:bg-orange-950/60 border border-orange-200 dark:border-orange-900/60 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-orange-500" />
          <span>Free Precision Age Tool</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif text-[#1c2438] dark:text-white">
          Age <span className="text-orange-600 dark:text-orange-400 font-serif">Calculator</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Calculate your exact age in years, months, days, total weeks, hours, and seconds with instant client-side precision.
        </p>

        <div className="flex items-center justify-center space-x-4 text-xs font-semibold text-slate-600 dark:text-slate-400 pt-1">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Private</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <CalendarCheck className="w-4 h-4 text-orange-500" />
            <span>Leap Year Aware</span>
          </span>
        </div>
      </section>

      {/* Ad Slot Top */}
      <AdSlot slot="1000000001" label="Top Banner Advertisement" minHeight="90px" />

      {/* Main Interactive Calculator Area */}
      <section className="max-w-4xl mx-auto space-y-8">
        <AgeCalculatorForm onCalculate={handleCalculate} onReset={handleReset} />

        {/* Empty State vs Results Dashboard */}
        {!result ? (
          <div className="w-full bg-white/70 dark:bg-slate-900/50 rounded-3xl p-8 border border-dashed border-amber-200/80 dark:border-slate-800 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              Ready to Discover Your Exact Age
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Enter your Date of Birth above and click <strong>Calculate</strong> to view your detailed chronological breakdown, next birthday countdown, and lifetime day milestones.
            </p>
          </div>
        ) : (
          <AgeResultDashboard result={result} />
        )}
      </section>

      {/* Ad Slot In Content */}
      <AdSlot slot="1000000002" label="In-Content Advertisement" minHeight="250px" />

      {/* Educational Guide */}
      <AgeCalculatorGuide />

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Ad Slot Bottom */}
      <AdSlot slot="1000000003" label="Bottom Banner Advertisement" minHeight="90px" />
    </div>
  );
}
