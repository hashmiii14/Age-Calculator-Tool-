'use client';

import { useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import CustomDatePicker from '../ui/CustomDatePicker';

interface MinimalHeroProps {
  onCalculate: (dob: string) => void;
}

export default function MinimalHero({ onCalculate }: MinimalHeroProps) {
  const [dob, setDob] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dob) onCalculate(dob);
  };

  const sampleDOBs = [
    { label: '14 March 2006', date: '2006-03-14' },
    { label: '12 Nov 1998', date: '1998-11-12' },
    { label: '22 July 1990', date: '1990-07-22' },
  ];

  return (
    <section className="py-12 sm:py-20 text-center max-w-2xl mx-auto space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-coral-50 dark:bg-coral-950/40 text-coral-600 dark:text-coral-400 text-xs font-bold border border-coral-200/60 dark:border-coral-900/60">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Personal Date Intelligence</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-serif leading-[1.15]">
          What does your date say about you?
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto font-normal leading-relaxed">
          Enter your date of birth to discover your exact age, upcoming birthday, milestones, and date story.
        </p>
      </div>

      {/* Dominant Primary Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div className="p-2 rounded-3xl bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-zinc-800 shadow-card space-y-3">
          <div className="px-2 pt-1 text-left">
            <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
              Enter Date of Birth
            </label>
          </div>

          <CustomDatePicker
            id="hero-dob-input"
            value={dob}
            onChange={(val) => setDob(val)}
            placeholder="DD - MM - YYYY"
          />

          <button
            type="submit"
            disabled={!dob}
            className="w-full py-3.5 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 disabled:opacity-40 text-white font-extrabold text-sm shadow-subtle transition-all flex items-center justify-center space-x-2"
          >
            <span>Discover My Age</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Example Quick Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        <span className="text-xs text-slate-400 font-medium">Or try an example:</span>
        {sampleDOBs.map((item) => (
          <button
            key={item.date}
            type="button"
            onClick={() => onCalculate(item.date)}
            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-coral-50 hover:text-coral-600 dark:hover:bg-zinc-700 text-xs font-bold transition-all border border-slate-200/80 dark:border-zinc-700"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Privacy guarantee text */}
      <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-400 pt-2">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Your date is processed locally in your browser.</span>
      </div>
    </section>
  );
}
