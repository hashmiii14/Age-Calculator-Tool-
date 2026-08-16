'use client';

import { useState, useEffect } from 'react';
import CuteHero from '../components/home/CuteHero';
import AgeCalculatorForm from '../components/age-calculator/AgeCalculatorForm';
import AgeResultDashboard from '../components/age-calculator/AgeResultDashboard';
import HomepageBirthdayBanner from '../components/home/HomepageBirthdayBanner';
import DaysLivedSection from '../components/home/DaysLivedSection';
import BirthdayCountdown from '../components/age-calculator/BirthdayCountdown';
import AgeMilestoneTimeline from '../components/age-calculator/AgeMilestoneTimeline';
import DateToolsGrid from '../components/tools/DateToolsGrid';
import AboutUsSection from '../components/content/AboutUsSection';
import PrivacyPolicySection from '../components/content/PrivacyPolicySection';
import ContactSection from '../components/content/ContactSection';
import { calculateAge, validateAgeInputs } from '../lib/age/ageEngine';
import { getTodayISODate } from '../lib/age/dateUtils';
import { AgeResult } from '../lib/age/types';

export default function HomePage() {
  const [result, setResult] = useState<AgeResult | null>(null);
  const [initialDOB, setInitialDOB] = useState<string>('');
  const [calcError, setCalcError] = useState<string | null>(null);

  // Load saved DOB on initial mount
  useEffect(() => {
    const savedDOB = localStorage.getItem('agepulse_dob');
    if (savedDOB) {
      try {
        setInitialDOB(savedDOB);
        const res = calculateAge(savedDOB, getTodayISODate());
        setResult(res);
      } catch {
        localStorage.removeItem('agepulse_dob');
      }
    }
  }, []);

  const handleCalculate = (dob: string, targetDate: string) => {
    setCalcError(null);

    try {
      // 1. Validate DOB and target date
      const validationErrors = validateAgeInputs(dob, targetDate);
      if (validationErrors.dob || validationErrors.targetDate) {
        setCalcError(validationErrors.dob || validationErrors.targetDate || 'Invalid input dates.');
        return;
      }

      // 2. Calculate real age result synchronously
      const res = calculateAge(dob, targetDate);
      
      // 3. Immediately render result on page
      setResult(res);

      if (typeof window !== 'undefined') {
        localStorage.setItem('agepulse_dob', res.dobStr || dob);

        // Smooth scroll down to result section
        setTimeout(() => {
          const el = document.getElementById('result-dashboard');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      }
    } catch (err) {
      console.error('Calculation error caught in HomePage:', err);
      setCalcError(err instanceof Error ? err.message : 'Age calculation failed. Please check your dates.');
    }
  };

  const handleReset = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('agepulse_dob');
    }
    setResult(null);
    setInitialDOB('');
    setCalcError(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-10 sm:space-y-12 animate-fade-up">

      {/* 1. CALCULATOR SECTION */}
      <section id="calculator-section" aria-label="Age Calculator" className="space-y-6">
        <CuteHero />
        
        <AgeCalculatorForm
          onCalculate={handleCalculate}
          onReset={handleReset}
          initialDOB={initialDOB}
        />

        {/* Calculation error display if any occurs */}
        {calcError && (
          <div className="p-4 rounded-2xl bg-pinkPastel-100 dark:bg-purpleText-900 border-2 border-pinkPastel-400 text-pinkPastel-600 dark:text-pinkPastel-300 font-extrabold text-xs text-center shadow-sm">
            ⚠️ {calcError}
          </div>
        )}

        {/* Revealed Calculation Result Dashboard (Rendered immediately on page) */}
        {result && (
          <div id="result-dashboard" className="space-y-6 pt-2">
            <AgeResultDashboard result={result} />
            <DaysLivedSection result={result} />
          </div>
        )}
      </section>

      {/* 2. BIRTHDAY SECTION */}
      <section id="birthday-section" aria-label="Birthday Countdown" className="space-y-6 scroll-mt-24">
        <HomepageBirthdayBanner />
        <BirthdayCountdown
          initialDOB={result?.dobStr || initialDOB}
          nextBirthday={result?.nextBirthday}
          nextFiveBirthdays={result?.nextFiveBirthdays}
        />
      </section>

      {/* 3. MILESTONE SECTION */}
      <section id="milestones-section" aria-label="Lifetime Milestones" className="space-y-6 scroll-mt-24">
        {result && (
          <AgeMilestoneTimeline
            milestones={result.milestones}
            nextBigDay={result.nextBigDay}
            timeline={result.timeline}
            nextMajorMilestone={result.nextMajorMilestone}
          />
        )}
      </section>

      {/* 4. MORE TOOLS SECTION */}
      <section id="more-tools-section" aria-label="More Date Tools" className="space-y-4 scroll-mt-24">
        <DateToolsGrid />
      </section>

      {/* 5. PRIVACY POLICY SECTION */}
      <section id="privacy-section" aria-label="Privacy Policy" className="scroll-mt-24">
        <PrivacyPolicySection />
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact-section" aria-label="Contact Us" className="scroll-mt-24">
        <ContactSection />
      </section>

      {/* 7. ABOUT SECTION */}
      <section id="about-section" aria-label="About AgePulse" className="scroll-mt-24">
        <AboutUsSection />
      </section>

    </div>
  );
}
