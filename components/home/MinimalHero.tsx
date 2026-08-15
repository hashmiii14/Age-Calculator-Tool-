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
    <section id="dob-input-section" className="min-h-[70vh] flex flex-col items-center justify-center py-12 sm:py-16 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-xl mx-auto space-y-8 text-center">

        <span className="text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full bg-blush-100 dark:bg-plum-950 text-coral-500 border border-blush-200 dark:border-plum-800 inline-block">
          Free · 100% Private · Runs Locally
        </span>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black font-serif leading-tight text-plum-900 dark:text-white tracking-tight">
            How old are you,{' '}
            <em className="not-italic text-coral-500">exactly?</em>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            Enter your date of birth. Get your precise age, next birthday, milestones, and more — instantly.
          </p>
        </div>

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
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-extrabold text-base transition-all cursor-pointer ${
              dob
                ? 'bg-coral-500 hover:bg-coral-600 text-white shadow-cute'
                : 'bg-blush-100 dark:bg-plum-800 text-slate-400 border border-blush-200 dark:border-plum-800 cursor-not-allowed'
            }`}
          >
            <span>Calculate My Age</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-bold text-slate-400">Quick pick:</span>
          {EXAMPLES.map(({ label, date }) => (
            <button
              key={date}
              type="button"
              onClick={() => onCalculate(date)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-plum-900 text-coral-600 dark:text-coral-300 border border-blush-200 dark:border-plum-800 hover:border-coral-400 transition-all cursor-pointer shadow-sm"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400">
          <Lock className="w-3.5 h-3.5 text-coral-500" />
          <span className="text-xs font-bold">Your date never leaves your browser.</span>
        </div>
      </div>
    </section>
  );
}

