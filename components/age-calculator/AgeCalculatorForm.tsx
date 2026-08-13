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
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl text-white transition-colors relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight text-white">
            Age <span className="text-orange-400 font-serif">Calculator</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Enter your birth date and calculate target date below
          </p>
        </div>

        {/* Emblem */}
        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-950/60 border border-orange-900/50 text-orange-400 font-bold text-xs shadow-inner">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date of Birth Input */}
          <div className="space-y-2">
            <label
              htmlFor="dob-picker"
              className="block text-sm font-bold text-slate-200 flex items-center justify-between"
            >
              <span>Date of birth</span>
              <span className="text-xs text-rose-400 font-medium">* Required</span>
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
              <p className="text-xs font-semibold text-rose-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
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
              className="block text-sm font-bold text-slate-200 flex items-center justify-between"
            >
              <span>Today&apos;s Date / Age On</span>
              <button
                type="button"
                onClick={handleUseTodayTarget}
                className="text-xs font-bold text-orange-400 hover:underline flex items-center space-x-1 focus:outline-none"
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
              <p className="text-xs font-semibold text-rose-400 flex items-center space-x-1.5 mt-1.5 animate-fadeIn">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{errors.targetDate}</span>
              </p>
            )}

            <p className="text-xs text-slate-400 mt-2">
              Defaults to today. Pick any date to discover your past or future age.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
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
            className="w-full sm:w-auto py-4 px-8 rounded-2xl bg-slate-800 hover:bg-slate-700 text-orange-400 border border-slate-700 font-bold text-base transition-colors flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
}
