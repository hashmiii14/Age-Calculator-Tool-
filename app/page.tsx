'use client';

import { useState } from 'react';
import CuteHero from '../components/home/CuteHero';
import HowItWorksSection from '../components/home/HowItWorksSection';
import WhyAgePulseSection from '../components/home/WhyAgePulseSection';
import AgeResultDashboard from '../components/age-calculator/AgeResultDashboard';
import DateToolsGrid from '../components/tools/DateToolsGrid';
import AboutUsSection from '../components/content/AboutUsSection';
import PrivacyPolicySection from '../components/content/PrivacyPolicySection';
import ContactSection from '../components/content/ContactSection';
import { calculateAge } from '../lib/age/ageEngine';
import { AgeResult } from '../lib/age/types';

export default function HomePage() {
  const [calculationResult, setCalculationResult] = useState<AgeResult | null>(null);

  const handleCalculate = (dob: string, targetDate: string) => {
    try {
      const res = calculateAge(dob, targetDate);
      setCalculationResult(res);

      setTimeout(() => {
        const resultElement = document.getElementById('result-dashboard');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } catch (e) {
      console.error('Calculation error:', e);
    }
  };

  const handleReset = () => {
    setCalculationResult(null);
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* 1. Hero Composition with Age Calculator as Right Column Centerpiece */}
      <CuteHero
        onCalculate={handleCalculate}
        onReset={handleReset}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Ad Banner Placeholder */}
        <div className="ad-slot hidden sm:flex items-center justify-center text-xs font-semibold text-roseProduct-400">
          <span>Ad Advertisement Space</span>
        </div>

        {/* 2. Revealed Result Dashboard (When Calculated) */}
        {calculationResult && (
          <AgeResultDashboard result={calculationResult} />
        )}
      </div>

      {/* 3. How It Works Section */}
      <HowItWorksSection />

      {/* 4. Why AgePulse Section */}
      <WhyAgePulseSection />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 5. Date Tools Navigation Grid */}
        <DateToolsGrid />
        <AboutUsSection />
        <PrivacyPolicySection />
        <ContactSection />
      </div>
    </div>
  );
}



