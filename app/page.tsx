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
import AboutUsSection from '../components/content/AboutUsSection';
import PrivacyPolicySection from '../components/content/PrivacyPolicySection';
import ContactSection from '../components/content/ContactSection';
import { createPersonalProfile } from '../lib/age/profileEngine';
import { PersonalProfile } from '../lib/age/types';

/* ---- AdSense slot placeholder ---- */
function AdSlot({ className = '' }: { className?: string }) {
  return (
    <div
      className={`ad-slot rounded-xl flex items-center justify-center ${className}`}
      style={{ backgroundColor: '#161A26', border: '1px dashed #252A3D', minHeight: 90 }}
      aria-hidden="true"
    >
      <span style={{ color: '#636B8A' }} className="text-xs font-medium select-none">
        Advertisement
      </span>
    </div>
  );
}

export default function HomePage() {
  const [profile, setProfile] = useState<PersonalProfile | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('agepulse_dob');
    if (saved) {
      try {
        setProfile(createPersonalProfile(saved));
      } catch {
        localStorage.removeItem('agepulse_dob');
      }
    }
  }, []);

  const handleCalculate = (dob: string) => {
    try {
      setError('');
      const p = createPersonalProfile(dob);
      setProfile(p);
      localStorage.setItem('agepulse_dob', dob);
    } catch {
      setError('Could not calculate age. Please check your date and try again.');
    }
  };

  const handleClearDate = () => {
    localStorage.removeItem('agepulse_dob');
    setProfile(null);
    setError('');
  };

  return (
    <div className="max-w-[1140px] mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6">

      {/* ━━━━━ STATE A — DISCOVERY ━━━━━ */}
      {!profile ? (
        <div className="space-y-12 animate-fade-up">

          {/* Dominant Hero */}
          <MinimalHero onCalculate={handleCalculate} />
          {error && (
            <p style={{ color: '#f87171', backgroundColor: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.2)' }}
              className="text-sm rounded-xl border px-4 py-3 text-center">{error}</p>
          )}

          {/* AdSense — after hero */}
          <AdSlot />

          {/* Tools Grid */}
          <DateToolsGrid />

          {/* AdSense — mid-content */}
          <AdSlot />

          {/* About Us Section */}
          <AboutUsSection />

          {/* Privacy Policy Section */}
          <PrivacyPolicySection />

          {/* Contact Section (gmail mdhashmi955@gmail.com) */}
          <ContactSection />

          {/* FAQ */}
          <FAQAccordion />

          {/* AdSense — before footer */}
          <AdSlot />
        </div>

      ) : (
        /* ━━━━━ STATE B — PERSONALIZED ━━━━━ */
        <div className="space-y-6 animate-fade-up">

          {/* 1. Personalized Hero */}
          <PersonalizedHero profile={profile} onClearDate={handleClearDate} />

          {/* 2. Next Milestone */}
          <SingleMilestoneCard milestone={profile.nextSingleMilestone} />

          {/* 3. Birthday Countdown */}
          <BirthdayCountdown
            nextBirthday={profile.nextBirthday}
            nextFiveBirthdays={profile.nextFiveBirthdays}
          />

          {/* AdSense — between content sections */}
          <AdSlot />

          {/* 4. Your Date */}
          <PersonalizedDateCard profile={profile} />

          {/* 5. Date Discoveries */}
          <DateDiscoveriesCard discoveries={profile.dateDiscoveries} />

          {/* AdSense — mid page */}
          <AdSlot />

          {/* 6. Zodiac */}
          <CompactZodiacCard zodiac={profile.zodiac} />

          {/* 7. Contextual Tools */}
          <ContextualExplore profile={profile} />

          {/* AdSense — before About/Privacy/Contact */}
          <AdSlot />

          {/* About Us Section */}
          <AboutUsSection />

          {/* Privacy Policy Section */}
          <PrivacyPolicySection />

          {/* Contact Section (gmail mdhashmi955@gmail.com) */}
          <ContactSection />

          {/* FAQ */}
          <div className="pt-4">
            <FAQAccordion />
          </div>

          {/* AdSense — bottom */}
          <AdSlot />
        </div>
      )}
    </div>
  );
}
