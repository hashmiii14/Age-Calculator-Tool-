'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, Calculator, AlertCircle, RotateCcw, Sparkles } from 'lucide-react';
import CustomDatePicker from '../ui/CustomDatePicker';
import PresetButtons from '../ui/PresetButtons';
import { getTodayISODate } from '../../lib/age/dateUtils';
import { validateAgeInputs } from '../../lib/age/ageEngine';
import { ValidationErrors } from '../../lib/age/types';

interface AgeCalculatorFormProps {
  onCalculate: (dob: string, targetDate: string) => void;
  onReset: () => void;
  initialDOB?: string;
  initialTargetDate?: string;
}

export default function AgeCalculatorForm({
  onCalculate,
  onReset,
  initialDOB = '',
  initialTargetDate,
}: AgeCalculatorFormProps) {
  const [dob, setDob] = useState<string>(initialDOB);
  const [targetDate, setTargetDate] = useState<string>(
    initialTargetDate || getTodayISODate()
  );
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [hasCalculated, setHasCalculated] = useState(false);

  useEffect(() => {
    if (!targetDate) {
      setTargetDate(getTodayISODate());
    }
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAgeInputs(dob, targetDate);

    if (validationErrors.dob || validationErrors.targetDate) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setHasCalculated(true);
    onCalculate(dob, targetDate);
  };

  const handleReset = () => {
    setDob('');
    setTargetDate(getTodayISODate());
    setErrors({});
    setHasCalculated(false);
    onReset();
  };

  const handleUseTodayTarget = () => {
    setTargetDate(getTodayISODate());
    if (errors.targetDate) {
      setErrors((prev) => ({ ...prev, targetDate: undefined }));
    }
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-[#f3e5df] dark:border-slate-800 shadow-card dark:shadow-none transition-colors relative overflow-hidden">
      {/* Visual Header matching reference design image */}
      <div className="flex items-center justify-between border-b border-[#f5e9e3] dark:border-slate-800 pb-6 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-[#1c2438] dark:text-white">
            Age <span className="text-orange-600 dark:text-orange-400 font-serif">Calculator</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Enter your birth date and calculate target date below
          </p>
        </div>

        {/* Decorative Zodiac / Autumn Accent Emblem from reference image */}
        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100/70 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 font-bold text-xs shadow-inner">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date of Birth Input */}
          <div className="space-y-2">
            <label
              htmlFor="dob-picker"
              className="block text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between"
            >
              <span>Date of birth</span>
              <span className="text-xs text-rose-500 font-medium">* Required</span>
            </label>

            <CustomDatePicker
              id="dob-picker"
              value={dob}
              onChange={(val) => {
                setDob(val);
                if (errors.dob) setErrors((prev) => ({ ...prev, dob: undefined }));
              }}
              placeholder="DD - MM - YYYY"
              error={!!errors.dob}
            />

            {errors.dob && (
              <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.dob}</span>
              </p>
            )}

            <PresetButtons
              onSelectDOB={(presetDOB) => {
                setDob(presetDOB);
                if (errors.dob) setErrors((prev) => ({ ...prev, dob: undefined }));
              }}
            />
          </div>

          {/* Calculate Age On Input */}
          <div className="space-y-2">
            <label
              htmlFor="target-picker"
              className="block text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between"
            >
              <span>Today&apos;s Date / Age On</span>
              <button
                type="button"
                onClick={handleUseTodayTarget}
                className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center space-x-1 focus:outline-none"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Use Today</span>
              </button>
            </label>

            <CustomDatePicker
              id="target-picker"
              value={targetDate}
              onChange={(val) => {
                setTargetDate(val);
                if (errors.targetDate) setErrors((prev) => ({ ...prev, targetDate: undefined }));
              }}
              placeholder="DD - MM - YYYY"
              error={!!errors.targetDate}
            />

            {errors.targetDate && (
              <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.targetDate}</span>
              </p>
            )}

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Defaults to today. Pick any date to discover your past or future age.
            </p>
          </div>
        </div>

        {/* Buttons styled directly after reference design image */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-base shadow-lg shadow-orange-600/25 transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500 active:scale-[0.99]"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-[#ffeedd] dark:bg-slate-800 hover:bg-[#ffe2cc] dark:hover:bg-slate-700 text-orange-700 dark:text-orange-400 font-bold text-base transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
}
