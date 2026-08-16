'use client';

import { useState, useEffect } from 'react';
import CuteHero from '../components/home/CuteHero';
import AgeCalculatorForm from '../components/age-calculator/AgeCalculatorForm';
import AgeResultDashboard from '../components/age-calculator/AgeResultDashboard';
import HomepageBirthdayBanner from '../components/home/HomepageBirthdayBanner';
import DaysLivedSection from '../components/home/DaysLivedSection';
import BirthdayCountdown from '../components/age-calculator/BirthdayCountdown';
import AgeMilestoneTimeline from '../components/age-calculator/AgeMilestoneTimeline';
import CelebrationModal from '../components/ui/CelebrationModal';
import DateToolsGrid from '../components/tools/DateToolsGrid';
import AboutUsSection from '../components/content/AboutUsSection';
import PrivacyPolicySection from '../components/content/PrivacyPolicySection';
import ContactSection from '../components/content/ContactSection';
import { calculateAge } from '../lib/age/ageEngine';
import { getTodayISODate } from '../lib/age/dateUtils';
import { AgeResult } from '../lib/age/types';

export default function HomePage() {
  const [result, setResult] = useState<AgeResult | null>(null);
  const [initialDOB, setInitialDOB] = useState<string>('');
  const [showCelebrationModal, setShowCelebrationModal] = useState<boolean>(false);

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
      // 1. Calculate real age result
      const res = calculateAge(dob, targetDate);
      
      // 2. Immediately render result on page
      setResult(res);
      localStorage.setItem('agepulse_dob', dob);

      // 3. Smooth scroll to result on page
      setTimeout(() => {
        const el = document.getElementById('result-dashboard');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);

      // 4. Open celebration popup after result is rendered
      setTimeout(() => {
        setShowCelebrationModal(true);
      }, 400);
    } catch (err) {
      console.error('Calculation error:', err);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('agepulse_dob');
    setResult(null);
    setInitialDOB('');
    setShowCelebrationModal(false);
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

        {/* Revealed Calculation Result Dashboard (Rendered immediately on page) */}
        {result && (
          <div id="result-dashboard" className="space-y-6 pt-2">
            <AgeResultDashboard result={result} />
            <DaysLivedSection result={result} />
          </div>
        )}
      </section>

      {/* Interactive Celebration Modal Overlay (Triggers after result renders) */}
      {showCelebrationModal && result && (
        <CelebrationModal
          years={result.years}
          months={result.months}
          days={result.days}
          onClose={() => setShowCelebrationModal(false)}
        />
      )}

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
