'use client';

import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import CuteHero from '../components/home/CuteHero';
import DiscoverMeWizard from '../components/home/DiscoverMeWizard';
import AgeCalculatorForm from '../components/age-calculator/AgeCalculatorForm';
import AgeResultDashboard from '../components/age-calculator/AgeResultDashboard';
import AgeComparisonTool from '../components/age-calculator/AgeComparisonTool';
import ZodiacAstrologySection from '../components/astrology/ZodiacAstrologySection';
import PersonalityQuizSection from '../components/personality/PersonalityQuizSection';
import OnThisDateSection from '../components/discovery/OnThisDateSection';
import EngagementHub from '../components/engagement/EngagementHub';
import DateToolsGrid from '../components/tools/DateToolsGrid';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 text-slate-800 dark:text-slate-100">
      {/* Hero Section */}
      <CuteHero />

      {/* Interactive Discover Me Wizard */}
      <DiscoverMeWizard />

      {/* Main Interactive Calculator Form & Results */}
      <section className="max-w-4xl mx-auto space-y-8">
        <AgeCalculatorForm onCalculate={handleCalculate} onReset={handleReset} />

        {/* Post-Calculation Result Dashboard */}
        {!result ? (
          <div className="w-full bg-white/80 dark:bg-plum-900/60 rounded-4xl p-8 sm:p-10 border border-dashed border-blush-300 dark:border-plum-800 text-center space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 dark:bg-plum-800 text-coral-500 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6 animate-sparkle" />
            </div>
            <h3 className="text-xl font-extrabold text-plum-900 dark:text-white font-serif">
              Ready to Discover Your Personal Age Dashboard
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Enter your Date of Birth above and click <strong>Calculate</strong> to reveal your exact age, next 5 birthdays, zodiac astrology profile, milestones, and birth date story.
            </p>
          </div>
        ) : (
          <AgeResultDashboard result={result} />
        )}
      </section>

      {/* Birthday Personality Quiz Section */}
      <section className="max-w-4xl mx-auto">
        <PersonalityQuizSection />
      </section>

      {/* Western Zodiac Astrology Section */}
      <section className="max-w-4xl mx-auto">
        <ZodiacAstrologySection />
      </section>

      {/* What Happened On Your Birthday Section */}
      <section className="max-w-4xl mx-auto">
        <OnThisDateSection />
      </section>

      {/* Age Comparison Tool */}
      <section className="max-w-4xl mx-auto">
        <AgeComparisonTool />
      </section>

      {/* Engagement & Facts Hub */}
      <section className="max-w-4xl mx-auto">
        <EngagementHub />
      </section>

      {/* Date Tools Hub Directory */}
      <section className="max-w-5xl mx-auto">
        <DateToolsGrid />
      </section>

      {/* Educational Guide */}
      <section className="max-w-4xl mx-auto">
        <AgeCalculatorGuide />
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-4xl mx-auto">
        <FAQAccordion />
      </section>
    </div>
  );
}
