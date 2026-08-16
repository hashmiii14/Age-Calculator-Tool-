'use client';

import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import AgeMilestoneTimeline from '../../components/age-calculator/AgeMilestoneTimeline';
import RobustDateInput from '../../components/ui/RobustDateInput';
import DateToolsGrid from '../../components/tools/DateToolsGrid';
import { Trophy, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';
import { calculateAge } from '../../lib/age/ageEngine';
import { getTodayISODate } from '../../lib/age/dateUtils';
import { AgeResult } from '../../lib/age/types';

export default function AgeMilestonesPage() {
  const [dob, setDob] = useState<string>('');
  const [result, setResult] = useState<AgeResult | null>(null);
  const [inputError, setInputError] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDOB = localStorage.getItem('agepulse_dob');
      if (savedDOB) {
        setDob(savedDOB);
        try {
          const res = calculateAge(savedDOB, getTodayISODate());
          setResult(res);
        } catch {
          localStorage.removeItem('agepulse_dob');
        }
      }
    }
  }, []);

  const handleCalculateMilestones = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!dob) {
      setInputError('Please select or enter your date of birth.');
      return;
    }

    try {
      const res = calculateAge(dob, getTodayISODate());
      setResult(res);
      setInputError('');
      if (typeof window !== 'undefined') {
        localStorage.setItem('agepulse_dob', dob);
      }
    } catch (err) {
      setInputError((err as Error).message || 'Invalid date of birth.');
    }
  };

  const handleResetDOB = () => {
    setDob('');
    setResult(null);
    setInputError('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('agepulse_dob');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-purpleText-900 dark:text-purpleText-100">
      <Breadcrumbs items={[{ label: 'Age & Life Milestones' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs font-extrabold uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5 text-pinkPastel-500" />
          <span>Lifetime Milestone Tracker</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-purpleText-900 dark:text-white tracking-tight font-serif">
          Life & Age <span className="text-pinkPastel-500 font-serif">Milestones Tracker</span>
        </h1>

        <p className="text-base sm:text-lg text-purpleText-600 dark:text-purpleText-300 max-w-xl mx-auto font-medium">
          Discover when you reach 1,000, 5,000, 10,000, or 20,000 days alive and track upcoming landmark birthday ages.
        </p>
      </section>

      {/* Input Form if no result available */}
      {!result ? (
        <section className="max-w-md mx-auto bg-white dark:bg-purpleText-900 rounded-3xl sm:rounded-4xl p-6 sm:p-8 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute space-y-4">
          <h2 className="text-xl font-black font-serif text-purpleText-900 dark:text-white text-center">
            Calculate Your Milestones
          </h2>
          <p className="text-xs text-purpleText-600 dark:text-purpleText-300 text-center font-medium">
            Enter your date of birth to reveal your personal lifetime milestones timeline.
          </p>

          <form onSubmit={handleCalculateMilestones} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-purpleText-900 dark:text-purpleText-100">
                Date of Birth
              </label>
              <RobustDateInput
                id="milestone-dob-input"
                value={dob}
                onChange={(val) => {
                  setDob(val);
                  if (inputError) setInputError('');
                }}
                placeholder="DD - MM - YYYY (e.g. 15-08-2000)"
                error={!!inputError}
              />
              {inputError && (
                <p className="text-xs font-bold text-pinkPastel-600 dark:text-pinkPastel-400 mt-1">
                  {inputError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn-calculate cursor-pointer flex items-center justify-center space-x-2 py-3.5"
            >
              <span>View Lifetime Milestones 🏆</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </section>
      ) : (
        <div className="space-y-6">
          {/* Change DOB bar */}
          <div className="max-w-4xl mx-auto flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-purpleText-900 border border-pinkPastel-200 dark:border-purpleText-800 shadow-sm">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-pinkPastel-500" />
              <span className="text-xs sm:text-sm font-extrabold text-purpleText-900 dark:text-white">
                Milestones for Born: {result.formattedDOB}
              </span>
            </div>

            <button
              type="button"
              onClick={handleResetDOB}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold text-pinkPastel-600 dark:text-pinkPastel-300 hover:bg-pinkPastel-100 dark:hover:bg-purpleText-800 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Change DOB</span>
            </button>
          </div>

          <section className="max-w-4xl mx-auto">
            <AgeMilestoneTimeline
              milestones={result.milestones}
              nextBigDay={result.nextBigDay}
              timeline={result.timeline}
              nextMajorMilestone={result.nextMajorMilestone}
            />
          </section>
        </div>
      )}

      {/* Secondary Tools */}
      <section className="pt-4 border-t border-pinkPastel-200 dark:border-purpleText-800">
        <DateToolsGrid />
      </section>
    </div>
  );
}
