'use client';

import React, { useState } from 'react';
import { Users, Calendar, Clock, ArrowRightLeft, RotateCcw } from 'lucide-react';
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
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Compare Two Ages
          </h3>
          <p className="text-xs text-slate-400">
            Compare the exact age difference between siblings, friends, or family members
          </p>
        </div>
      </div>

      <form onSubmit={handleCompare} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Person A DOB */}
          <div className="space-y-2">
            <label htmlFor="dob-a" className="block text-sm font-bold text-slate-200">
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
            <label htmlFor="dob-b" className="block text-sm font-bold text-slate-200">
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
            className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-base shadow-lg shadow-orange-600/25 transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <ArrowRightLeft className="w-5 h-5" />
            <span>Compare Ages</span>
          </button>

          {result && (
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 font-bold text-base flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </form>

      {/* Comparison Results */}
      {result && (
        <div className="space-y-6 pt-4 border-t border-slate-800 animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-800 to-orange-950/60 rounded-2xl p-6 border border-slate-700 text-center space-y-2">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
              Exact Age Difference
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              {result.yearsDiff} Years, {result.monthsDiff} Months, {result.daysDiff} Days
            </h4>
            <p className="text-xs text-slate-300">
              {result.olderPersonLabel} • Total difference of <strong>{result.totalDaysDiff.toLocaleString()} days</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                Person A Age
              </span>
              <p className="text-xl font-extrabold text-white font-mono">
                {result.personAYears}y {result.personAMonths}m {result.personADays}d
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 text-center">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                Person B Age
              </span>
              <p className="text-xl font-extrabold text-white font-mono">
                {result.personBYears}y {result.personBMonths}m {result.personBDays}d
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
