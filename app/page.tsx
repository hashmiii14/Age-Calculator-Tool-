'use client';

import { useState } from 'react';
import { Sparkles, CalendarCheck, ShieldCheck } from 'lucide-react';
import AgeCalculatorForm from '../components/age-calculator/AgeCalculatorForm';
import AgeResultDashboard from '../components/age-calculator/AgeResultDashboard';
import AgeComparisonTool from '../components/age-calculator/AgeComparisonTool';
import AgeCalculatorGuide from '../components/content/AgeCalculatorGuide';
import FAQAccordion from '../components/content/FAQAccordion';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 text-slate-200">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-2">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-orange-950/60 border border-orange-900/60 text-orange-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          <span>Personal Age & Birthday Dashboard</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-serif text-white">
          Age <span className="text-orange-400 font-serif">Calculator</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Calculate your exact age in years, months, days, total weeks, hours, and seconds with instant client-side precision.
        </p>

        <div className="flex items-center justify-center space-x-4 text-xs font-semibold text-slate-400 pt-1">
          <span className="flex items-center space-x-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Private</span>
          </span>
          <span>•</span>
          <span className="flex items-center space-x-1">
            <CalendarCheck className="w-4 h-4 text-orange-400" />
            <span>Leap Year Aware</span>
          </span>
        </div>
      </section>

      {/* Main Interactive Calculator Area */}
      <section className="max-w-4xl mx-auto space-y-8">
        <AgeCalculatorForm onCalculate={handleCalculate} onReset={handleReset} />

        {/* Post-Calculation Personal Age Dashboard Reveal */}
        {!result ? (
          <div className="w-full bg-slate-900/60 rounded-3xl p-8 border border-dashed border-slate-800 text-center space-y-3 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-orange-950/60 border border-orange-900/50 text-orange-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Ready to Discover Your Personal Age Dashboard
            </h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              Enter your Date of Birth above and click <strong>Calculate</strong> to reveal your exact age, next 5 birthdays, next big day milestone, timeline, and dynamic insights.
            </p>
          </div>
        ) : (
          <AgeResultDashboard result={result} />
        )}
      </section>

      {/* Secondary Tool: Age Comparison */}
      <section className="max-w-4xl mx-auto pt-6">
        <AgeComparisonTool />
      </section>

      {/* Educational Guide */}
      <AgeCalculatorGuide />

      {/* FAQ Section */}
      <FAQAccordion />
    </div>
  );
}
