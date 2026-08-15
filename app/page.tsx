'use client';

import { useState, useEffect } from 'react';
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 animate-fade-up">
      {/* Hero Intro Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-blush-100 dark:bg-plum-900 text-coral-500 border border-blush-200 dark:border-plum-800">
          Free · 100% Private · Accurate
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-plum-900 dark:text-white tracking-tight leading-tight">
          Exact <span className="text-coral-500 italic">Age Calculator</span>
        </h1>
        <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          Find your exact age in years, months, and days. Calculate your age on any past or future date instantly.
        </p>
      </div>

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
      <div className="space-y-8 pt-4 border-t border-blush-200 dark:border-plum-800">
        <AboutUsSection />
        <PrivacyPolicySection />
        <ContactSection />
      </div>
    </div>
  );
}

