'use client';

import React, { useState } from 'react';
import { Users, ArrowRightLeft, RotateCcw, Sparkles } from 'lucide-react';
import CustomDatePicker from '../ui/CustomDatePicker';
import { calculateAgeComparison, validateAgeInputs } from '../../lib/age/ageEngine';
import { AgeComparisonResult, ValidationErrors } from '../../lib/age/types';
import { getTodayISODate } from '../../lib/age/dateUtils';

export default function AgeComparisonTool() {
  const [dobA, setDobA] = useState<string>('2000-05-15');
  const [dobB, setDobB] = useState<string>('2004-08-20');
  const [targetDate, setTargetDate] = useState<string>(getTodayISODate());
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [result, setResult] = useState<AgeComparisonResult | null>(null);

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    const valA = validateAgeInputs(dobA, targetDate);
    const valB = validateAgeInputs(dobB, targetDate);

    if (valA.dob || valA.targetDate || valB.dob || valB.targetDate) {
      setErrors({
        dob: valA.dob || valB.dob,
        targetDate: valA.targetDate || valB.targetDate,
      });
      return;
    }

    setErrors({});
    try {
      const compResult = calculateAgeComparison(dobA, dobB, targetDate);
      setResult(compResult);
    } catch (err) {
      setErrors({ general: (err as Error).message });
    }
  };

  const handleReset = () => {
    setDobA('2000-05-15');
    setDobB('2004-08-20');
    setTargetDate(getTodayISODate());
    setErrors({});
    setResult(null);
  };

  return (
    <div id="age-comparison-tool" className="w-full bg-white dark:bg-plum-900 rounded-4xl p-6 sm:p-8 border border-blush-200 dark:border-plum-800 shadow-cute text-plum-900 dark:text-white space-y-6">
      <div className="flex items-center space-x-3 border-b border-blush-100 dark:border-plum-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-coral-500 text-white flex items-center justify-center font-bold">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-extrabold text-plum-900 dark:text-white">
            Age Comparison Tool
          </h3>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
            Compare exact age difference, who is older, & total days apart
          </p>
        </div>
      </div>

      <form onSubmit={handleCompare} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Person A DOB */}
          <div className="space-y-2">
            <label htmlFor="dob-a" className="block text-xs font-extrabold uppercase tracking-wider text-plum-900 dark:text-slate-200">
              Person A Date of Birth
            </label>
            <CustomDatePicker
              id="dob-a"
              value={dobA}
              onChange={(val) => setDobA(val)}
              placeholder="DD - MM - YYYY"
              error={!!errors.dob}
            />
          </div>

          {/* Person B DOB */}
          <div className="space-y-2">
            <label htmlFor="dob-b" className="block text-xs font-extrabold uppercase tracking-wider text-plum-900 dark:text-slate-200">
              Person B Date of Birth
            </label>
            <CustomDatePicker
              id="dob-b"
              value={dobB}
              onChange={(val) => setDobB(val)}
              placeholder="DD - MM - YYYY"
              error={!!errors.dob}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 text-white font-extrabold text-base shadow-cute hover:shadow-cute-hover transition-all flex items-center justify-center space-x-2 focus:outline-none"
          >
            <ArrowRightLeft className="w-5 h-5" />
            <span>Compare Ages</span>
          </button>

          {result && (
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 font-extrabold text-base flex items-center justify-center space-x-2 border border-blush-200 dark:border-plum-700"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </form>

      {/* Comparison Results */}
      {result && (
        <div className="space-y-6 pt-4 border-t border-blush-100 dark:border-plum-800 animate-fadeIn">
          <div className="bg-gradient-to-br from-blush-50 to-coral-50 dark:from-plum-950 dark:to-plum-900 rounded-3xl p-6 border border-coral-200 dark:border-plum-800 text-center space-y-2 shadow-sm">
            <span className="text-xs font-extrabold text-coral-500 uppercase tracking-wider">
              Exact Age Difference
            </span>
            <h4 className="text-2xl sm:text-4xl font-extrabold text-plum-900 dark:text-white font-serif">
              {result.yearsDiff} Years, {result.monthsDiff} Months, {result.daysDiff} Days
            </h4>
            <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
              {result.olderPersonLabel} • Total difference of <strong>{result.totalDaysDiff.toLocaleString()} days</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blush-50/60 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 rounded-2xl p-4 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Person A Age
              </span>
              <p className="text-xl font-extrabold text-plum-900 dark:text-white font-mono">
                {result.personAYears}y {result.personAMonths}m {result.personADays}d
              </p>
            </div>

            <div className="bg-blush-50/60 dark:bg-plum-950/60 border border-blush-100 dark:border-plum-800 rounded-2xl p-4 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Person B Age
              </span>
              <p className="text-xl font-extrabold text-plum-900 dark:text-white font-mono">
                {result.personBYears}y {result.personBMonths}m {result.personBDays}d
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
