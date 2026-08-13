'use client';

import { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
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
    <section id="dob-input-section" className="min-h-[82vh] flex flex-col items-center justify-center py-12 sm:py-20 relative overflow-hidden">

      {/* Ambient glow — subtle, not loud */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #E85D36 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-xl mx-auto space-y-10 text-center">

        {/* Top eyebrow — NOT a "badge", just small quiet text */}
        <p style={{ color: '#636B8A' }} className="text-xs tracking-[0.2em] uppercase font-semibold">
          Free · No account · Runs locally
        </p>

        {/* Headline — let the typography do the talking */}
        <div className="space-y-4">
          <h1
            className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.25rem] font-extrabold font-serif leading-[1.1] tracking-tight"
            style={{ color: '#F2F4FB' }}
          >
            How old are you,{' '}
            <em className="not-italic" style={{ color: '#E85D36' }}>exactly?</em>
          </h1>
          <p style={{ color: '#9AA3C4' }} className="text-base sm:text-lg leading-relaxed">
            Enter your date of birth. Get your precise age, next birthday, milestones, and more — instantly.
          </p>
        </div>

        {/* Primary Input — clean, no extra labels */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <CustomDatePicker
            id="hero-dob"
            value={dob}
            onChange={setDob}
            placeholder="Select your date of birth"
          />

          <button
            type="submit"
            disabled={!dob}
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-150"
            style={{
              backgroundColor: dob ? '#E85D36' : '#1D2133',
              color: dob ? '#fff' : '#636B8A',
              cursor: dob ? 'pointer' : 'default',
              border: dob ? 'none' : '1px solid #252A3D',
            }}
          >
            Calculate My Age
            <ArrowRight className="w-4 h-4" style={{ opacity: dob ? 1 : 0.4 }} />
          </button>
        </form>

        {/* Quick examples */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span style={{ color: '#636B8A' }} className="text-xs">Quick pick:</span>
          {EXAMPLES.map(({ label, date }) => (
            <button
              key={date}
              type="button"
              onClick={() => onCalculate(date)}
              className="px-3 py-1 rounded-lg text-xs font-semibold transition-colors"
              style={{
                backgroundColor: '#161A26',
                color: '#9AA3C4',
                border: '1px solid #252A3D',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.color = '#E85D36';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(232,93,54,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.color = '#9AA3C4';
                (e.currentTarget as HTMLButtonElement).style.borderColor = '#252A3D';
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Privacy — small, honest, not overdone */}
        <div className="flex items-center justify-center gap-1.5" style={{ color: '#636B8A' }}>
          <Lock className="w-3 h-3" />
          <span className="text-xs">Your date never leaves your browser.</span>
        </div>
      </div>
    </section>
  );
}
