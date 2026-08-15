'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, Calculator, AlertCircle, RotateCcw } from 'lucide-react';
import CustomDatePicker from '../ui/CustomDatePicker';
import PresetButtons from '../ui/PresetButtons';
import CuteCharacter from '../ui/CuteCharacter';
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
  const [, setHasCalculated] = useState(false);

  useEffect(() => {
    if (!targetDate) {
      setTargetDate(getTodayISODate());
    }
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dob) {
      setErrors({ dob: 'Please enter your date of birth.' });
      return;
    }

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
    <div id="calculator-form" className="w-full bg-white dark:bg-plum-900 rounded-3xl sm:rounded-4xl p-6 sm:p-8 border-2 border-blush-200/80 dark:border-plum-800 shadow-cute transition-all relative">
      {/* Top Header with Cute Mascot Emblem */}
      <div className="flex items-center justify-between border-b border-blush-200/80 dark:border-plum-800 pb-4 mb-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight text-plum-900 dark:text-white">
            Age <span className="text-coral-500 font-serif">Calculator</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Calculate your exact age in years, months, and days
          </p>
        </div>

        <CuteCharacter variant="calendar" size={64} className="hidden sm:block" />
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Date of Birth Field (Type directly OR click calendar icon for popover + month/year dropdowns) */}
          <div className="space-y-2">
            <label
              htmlFor="dob-picker"
              className="block text-xs font-extrabold uppercase tracking-wider text-plum-900 dark:text-slate-200 flex items-center justify-between"
            >
              <span>Date of birth</span>
              <span className="text-[11px] text-coral-500 font-bold">* Required</span>
            </label>

            <CustomDatePicker
              id="dob-picker"
              value={dob}
              onChange={(val) => {
                setDob(val);
                if (errors.dob) setErrors((prev) => ({ ...prev, dob: undefined }));
              }}
              placeholder="DD - MM - YYYY (e.g. 15-08-2000)"
              error={!!errors.dob}
            />

            {errors.dob && (
              <p className="text-xs font-bold text-coral-600 dark:text-coral-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-coral-500" />
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

          {/* Today's Date / Age On Field */}
          <div className="space-y-2">
            <label
              htmlFor="target-picker"
              className="block text-xs font-extrabold uppercase tracking-wider text-plum-900 dark:text-slate-200 flex items-center justify-between"
            >
              <span>Today&apos;s Date / Age On</span>
              <button
                type="button"
                onClick={handleUseTodayTarget}
                className="text-xs font-bold text-coral-500 hover:underline flex items-center space-x-1 focus:outline-none cursor-pointer"
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
              placeholder="DD - MM - YYYY (e.g. 15-08-2000)"
              error={!!errors.targetDate}
            />

            {errors.targetDate && (
              <p className="text-xs font-bold text-coral-600 dark:text-coral-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-coral-500" />
                <span>{errors.targetDate}</span>
              </p>
            )}

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Defaults to today. Choose any date to calculate age on that day.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-coral-500 hover:bg-coral-600 active:scale-[0.99] text-white font-extrabold text-base shadow-cute hover:shadow-cute-hover transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-coral-400 cursor-pointer"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate Age</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-blush-100 dark:bg-plum-800 hover:bg-blush-200 dark:hover:bg-plum-700 text-coral-600 dark:text-coral-300 font-extrabold text-base transition-all flex items-center justify-center space-x-2 focus:outline-none border border-blush-200 dark:border-plum-700 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
}


