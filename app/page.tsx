'use client';

import { useState, useEffect } from 'react';
import CuteHero from '../components/home/CuteHero';
import AgeCalculatorForm from '../components/age-calculator/AgeCalculatorForm';
import AgeResultDashboard from '../components/age-calculator/AgeResultDashboard';
import DateToolsGrid from '../components/tools/DateToolsGrid';
import FAQAccordion from '../components/content/FAQAccordion';
import AboutUsSection from '../components/content/AboutUsSection';
import PrivacyPolicySection from '../components/content/PrivacyPolicySection';
import ContactSection from '../components/content/ContactSection';
import { calculateAge } from '../lib/age/ageEngine';
import { getTodayISODate } from '../lib/age/dateUtils';
import { AgeResult } from '../lib/age/types';

export default function HomePage() {
  const [result, setResult] = useState<AgeResult | null>(null);
  const [initialDOB, setInitialDOB] = useState<string>('');

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
    try {
      const res = calculateAge(dob, targetDate);
      setResult(res);
      localStorage.setItem('agepulse_dob', dob);

      // Smooth scroll to result on mobile/tablet
      setTimeout(() => {
        const el = document.getElementById('result-dashboard');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (err) {
      console.error('Calculation error:', err);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('agepulse_dob');
    setResult(null);
    setInitialDOB('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8 animate-fade-up">
      {/* Hero Section with Cute Baby Cartoon Illustration */}
      <CuteHero />

      {/* CORE PRODUCT: Age Calculator Card */}
      <section aria-label="Age Calculator">
        <AgeCalculatorForm
          onCalculate={handleCalculate}
          onReset={handleReset}
          initialDOB={initialDOB}
        />
      </section>

      {/* Revealed Calculation Result */}
      {result && (
        <section aria-label="Calculation Result">
          <AgeResultDashboard result={result} />
        </section>
      )}

      {/* Secondary Tools */}
      <section aria-label="Related Date Tools">
        <DateToolsGrid />
      </section>

      {/* Concise FAQ Accordion */}
      <section aria-label="Frequently Asked Questions">
        <FAQAccordion />
      </section>

      {/* SEO & Informational Content */}
      <div className="space-y-8 pt-4 border-t border-pinkPastel-200 dark:border-purpleText-800">
        <AboutUsSection />
        <PrivacyPolicySection />
        <ContactSection />
      </div>
    </div>
  );
}



