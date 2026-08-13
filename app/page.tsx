'use client';

import { useState, useEffect } from 'react';
import MinimalHero from '../components/home/MinimalHero';
import PersonalizedHero from '../components/personalized/PersonalizedHero';
import SingleMilestoneCard from '../components/personalized/SingleMilestoneCard';
import PersonalizedDateCard from '../components/personalized/PersonalizedDateCard';
import DateDiscoveriesCard from '../components/personalized/DateDiscoveriesCard';
import CompactZodiacCard from '../components/personalized/CompactZodiacCard';
import ContextualExplore from '../components/personalized/ContextualExplore';
import BirthdayCountdown from '../components/age-calculator/BirthdayCountdown';
import FAQAccordion from '../components/content/FAQAccordion';
import DateToolsGrid from '../components/tools/DateToolsGrid';
import { createPersonalProfile } from '../lib/age/profileEngine';
import { PersonalProfile } from '../lib/age/types';

export default function HomePage() {
  const [dob, setDob] = useState<string>('');
  const [profile, setProfile] = useState<PersonalProfile | null>(null);

  useEffect(() => {
    const savedDOB = localStorage.getItem('agepulse_dob');
    if (savedDOB) {
      try {
        const p = createPersonalProfile(savedDOB);
        setDob(savedDOB);
        setProfile(p);
      } catch (err) {
        console.error('Error loading saved DOB:', err);
      }
    }
  }, []);

  const handleCalculate = (enteredDOB: string) => {
    try {
      const p = createPersonalProfile(enteredDOB);
      setDob(enteredDOB);
      setProfile(p);
      localStorage.setItem('agepulse_dob', enteredDOB);
    } catch (err) {
      console.error('Calculation error:', err);
    }
  };

  const handleClearDate = () => {
    localStorage.removeItem('agepulse_dob');
    setDob('');
    setProfile(null);
  };

  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 text-slate-800 dark:text-slate-100">
      
      {/* STATE A — DISCOVERY (BEFORE DOB) */}
      {!profile ? (
        <div className="space-y-16 animate-fadeIn">
          {/* Dominant Minimal Hero */}
          <MinimalHero onCalculate={handleCalculate} />

          {/* Clean Quick Tools Hub */}
          <section className="max-w-4xl mx-auto space-y-4">
            <div className="text-center space-y-1">
              <h2 className="text-xl font-serif font-extrabold text-slate-900 dark:text-white">
                Date & Age Calculators
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Independent client-side utilities for quick calculations
              </p>
            </div>
            <DateToolsGrid />
          </section>

          {/* Clean FAQ */}
          <section className="max-w-3xl mx-auto">
            <FAQAccordion />
          </section>
        </div>
      ) : (
        /* STATE B — PERSONALIZED DASHBOARD (AFTER DOB) */
        <div className="space-y-8 animate-fadeIn">
          {/* Personalized Hero Header */}
          <PersonalizedHero profile={profile} onClearDate={handleClearDate} />

          {/* Single Next Milestone */}
          <SingleMilestoneCard milestone={profile.nextSingleMilestone} />

          {/* Birthday Countdown */}
          <BirthdayCountdown
            nextBirthday={profile.nextBirthday}
            nextFiveBirthdays={profile.nextFiveBirthdays}
          />

          {/* Your Date Overview */}
          <PersonalizedDateCard profile={profile} />

          {/* Date Discoveries */}
          <DateDiscoveriesCard discoveries={profile.dateDiscoveries} />

          {/* Compact Zodiac */}
          <CompactZodiacCard zodiac={profile.zodiac} />

          {/* Contextual Explore */}
          <ContextualExplore profile={profile} />
        </div>
      )}

    </div>
  );
}
