'use client';

import React, { useState, useEffect } from 'react';
import { RefreshCw, ArrowRight, AlertCircle, RotateCcw } from 'lucide-react';
import RobustDateInput from '../ui/RobustDateInput';
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
    onCalculate(dob, targetDate);
  };

  const handleReset = () => {
    setDob('');
    setTargetDate(getTodayISODate());
    setErrors({});
    onReset();
  };

  const handleUseTodayTarget = () => {
    setTargetDate(getTodayISODate());
    if (errors.targetDate) {
      setErrors((prev) => ({ ...prev, targetDate: undefined }));
    }
  };

  return (
    <div id="calculator-form" className="w-full bg-white dark:bg-charcoal-900 rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-roseProduct-200 dark:border-charcoal-700 shadow-card transition-all relative">
      
      {/* Form Header */}
      <div className="border-b border-blush-200 dark:border-charcoal-800 pb-3 mb-5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-roseProduct-500 font-sans">
          AGE CALCULATOR
        </h2>
        <p className="text-sm font-semibold text-charcoal-900 dark:text-white mt-0.5">
          Enter your birth date to calculate exact age
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="space-y-4">
          
          {/* Date of Birth Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="dob-picker"
              className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 dark:text-charcoal-200 flex items-center justify-between"
            >
              <span>Date of Birth</span>
              <span className="text-[11px] text-roseProduct-500 font-semibold">* Required</span>
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
              <p className="text-xs font-semibold text-roseProduct-600 dark:text-roseProduct-400 flex items-center space-x-1.5 mt-1 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-roseProduct-500" />
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
          <div className="space-y-1.5 pt-1">
            <label
              htmlFor="target-picker"
              className="block text-xs font-bold uppercase tracking-wider text-charcoal-800 dark:text-charcoal-200 flex items-center justify-between"
            >
              <span>Today&apos;s Date / Age On</span>
              <button
                type="button"
                onClick={handleUseTodayTarget}
                className="text-xs font-semibold text-roseProduct-500 hover:underline flex items-center space-x-1 focus:outline-none cursor-pointer"
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
              <p className="text-xs font-semibold text-roseProduct-600 dark:text-roseProduct-400 flex items-center space-x-1.5 mt-1 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-roseProduct-500" />
                <span>{errors.targetDate}</span>
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="btn-calculate flex-1 cursor-pointer"
          >
            <span>Calculate Age</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="btn-reset cursor-pointer"
            title="Reset form"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
}




