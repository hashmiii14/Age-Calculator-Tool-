'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, Calculator, AlertCircle, RotateCcw } from 'lucide-react';
import RobustDateInput from '../ui/RobustDateInput';
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
    try {
      setHasCalculated(true);
      onCalculate(dob, targetDate);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'An error occurred during calculation.';
      setErrors({ dob: msg });
    }
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
    <div id="calculator-form" className="w-full bg-white dark:bg-purpleText-900 rounded-3xl sm:rounded-4xl p-5 sm:p-7 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute transition-all relative">
      {/* Header section */}
      <div className="flex items-center justify-between border-b border-pinkPastel-100 dark:border-purpleText-800 pb-3.5 mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold font-serif tracking-tight text-purpleText-900 dark:text-white">
            Age <span className="text-pinkPastel-500 font-serif">Calculator</span>
          </h2>
          <p className="text-xs sm:text-sm text-purpleText-600 dark:text-purpleText-400 mt-0.5 font-medium">
            Calculate exact age in years, months, and days
          </p>
        </div>

        <CuteCharacter variant="calendar" size={54} className="hidden sm:block" />
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Date of Birth Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="dob-picker"
              className="block text-xs font-black uppercase tracking-wider text-purpleText-900 dark:text-purpleText-100 flex items-center justify-between"
            >
              <span>DATE OF BIRTH</span>
              <span className="text-[11px] text-pinkPastel-500 font-extrabold">* Required</span>
            </label>

            <RobustDateInput
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
              <p className="text-xs font-bold text-pinkPastel-600 dark:text-pinkPastel-400 flex items-center space-x-1.5 mt-1 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-pinkPastel-500" />
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
          <div className="space-y-1.5">
            <label
              htmlFor="target-picker"
              className="block text-xs font-black uppercase tracking-wider text-purpleText-900 dark:text-purpleText-100 flex items-center justify-between"
            >
              <span>TODAY&apos;S DATE / AGE ON</span>
              <button
                type="button"
                onClick={handleUseTodayTarget}
                className="text-xs font-extrabold text-pinkPastel-500 hover:underline flex items-center space-x-1 focus:outline-none cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Use Today</span>
              </button>
            </label>

            <RobustDateInput
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
              <p className="text-xs font-bold text-pinkPastel-600 dark:text-pinkPastel-400 flex items-center space-x-1.5 mt-1 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-pinkPastel-500" />
                <span>{errors.targetDate}</span>
              </p>
            )}

            <p className="text-xs text-purpleText-600 dark:text-purpleText-400 mt-1 font-medium">
              Defaults to today. Choose any past or future date to calculate age on that day.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            className="btn-calculate w-full sm:flex-1 cursor-pointer"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate Age</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="btn-reset w-full sm:w-auto cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
}



