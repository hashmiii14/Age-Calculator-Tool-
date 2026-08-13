'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, RefreshCw, Calculator, AlertCircle, RotateCcw } from 'lucide-react';
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
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-card dark:shadow-none transition-colors">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date of Birth Input */}
          <div className="space-y-2">
            <label
              htmlFor="dob-input"
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Date of Birth</span>
              </span>
              <span className="text-xs text-rose-500 font-medium">* Required</span>
            </label>

            <div className="relative">
              <input
                id="dob-input"
                type="date"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                  if (errors.dob) setErrors((prev) => ({ ...prev, dob: undefined }));
                }}
                className={`w-full px-4 py-3.5 rounded-2xl border text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/80 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-slate-800 transition-all ${
                  errors.dob
                    ? 'border-rose-400 dark:border-rose-500/80 focus:ring-rose-500'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
                placeholder="YYYY-MM-DD"
                required
              />
            </div>

            {errors.dob && (
              <p className="text-xs font-medium text-rose-600 dark:text-rose-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.dob}</span>
              </p>
            )}

            <PresetButtons onSelectDOB={(presetDOB) => {
              setDob(presetDOB);
              if (errors.dob) setErrors((prev) => ({ ...prev, dob: undefined }));
            }} />
          </div>

          {/* Calculate Age On Input */}
          <div className="space-y-2">
            <label
              htmlFor="target-date-input"
              className="block text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>Calculate Age On</span>
              </span>
              <button
                type="button"
                onClick={handleUseTodayTarget}
                className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center space-x-1 focus:outline-none"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Use Today</span>
              </button>
            </label>

            <div className="relative">
              <input
                id="target-date-input"
                type="date"
                value={targetDate}
                onChange={(e) => {
                  setTargetDate(e.target.value);
                  if (errors.targetDate) setErrors((prev) => ({ ...prev, targetDate: undefined }));
                }}
                className={`w-full px-4 py-3.5 rounded-2xl border text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/80 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-slate-800 transition-all ${
                  errors.targetDate
                    ? 'border-rose-400 dark:border-rose-500/80 focus:ring-rose-500'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
                placeholder="YYYY-MM-DD"
                required
              />
            </div>

            {errors.targetDate && (
              <p className="text-xs font-medium text-rose-600 dark:text-rose-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.targetDate}</span>
              </p>
            )}

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Defaults to today. Change to calculate your age on any past or future date.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="submit"
            className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base shadow-lg shadow-brand-600/25 hover:shadow-brand-600/35 transition-all flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 active:scale-[0.99]"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate Age</span>
          </button>

          {hasCalculated && (
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold text-base transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
