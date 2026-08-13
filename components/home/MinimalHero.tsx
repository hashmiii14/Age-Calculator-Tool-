'use client';

import { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import CustomDatePicker from '../ui/CustomDatePicker';

interface MinimalHeroProps {
  onCalculate: (dob: string) => void;
}

const EXAMPLES = [
  { label: '14 Mar 2006', date: '2006-03-14' },
  { label: '12 Nov 1998', date: '1998-11-12' },
  { label: '29 Feb 2000', date: '2000-02-29' },
];

export default function MinimalHero({ onCalculate }: MinimalHeroProps) {
  const [dob, setDob] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dob) onCalculate(dob);
  };

  return (
    <section id="dob-input-section" className="py-14 sm:py-20 max-w-2xl mx-auto animate-fade-up">
      <div className="space-y-8 text-center">

        {/* Overline badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ backgroundColor: 'rgba(232,93,54,0.1)', color: '#F87B4E', border: '1px solid rgba(232,93,54,0.2)' }}>
          Free Personal Date Intelligence
        </div>

        {/* Headline */}
        <h1 style={{ color: '#F2F4FB' }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-[1.15]">
          What does your{' '}
          <span style={{ color: '#E85D36' }}>date</span>{' '}
          say about you?
        </h1>

        <p style={{ color: '#9AA3C4' }} className="text-base sm:text-lg leading-relaxed max-w-md mx-auto">
          Enter your date of birth to calculate your exact age, upcoming birthday, milestones, and date story.
        </p>

        {/* Input Card */}
        <form onSubmit={handleSubmit}>
          <div className="rounded-2xl p-2 space-y-2"
            style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}>
            <p style={{ color: '#636B8A' }} className="text-[11px] font-bold uppercase tracking-widest px-2 pt-1 text-left">
              Date of Birth
            </p>
            <CustomDatePicker
              id="hero-dob"
              value={dob}
              onChange={setDob}
              placeholder="DD – MM – YYYY"
            />
            <button
              type="submit"
              disabled={!dob}
              className="w-full py-3.5 px-6 rounded-xl text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all"
              style={{ backgroundColor: dob ? '#E85D36' : '#2A3050', cursor: dob ? 'pointer' : 'not-allowed' }}
            >
              Discover My Age
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Example pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <span style={{ color: '#636B8A' }} className="text-xs">Try an example:</span>
          {EXAMPLES.map(({ label, date }) => (
            <button
              key={date}
              type="button"
              onClick={() => onCalculate(date)}
              style={{ backgroundColor: '#1D2133', color: '#9AA3C4', borderColor: '#252A3D' }}
              className="px-3 py-1.5 rounded-full text-xs font-bold border hover:border-[#E85D36] hover:text-[#E85D36] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Privacy note */}
        <div className="flex items-center justify-center gap-1.5 text-xs" style={{ color: '#636B8A' }}>
          <ShieldCheck className="w-4 h-4" style={{ color: '#22c55e' }} />
          Your date is calculated locally in your browser — never sent to any server.
        </div>
      </div>
    </section>
  );
}
