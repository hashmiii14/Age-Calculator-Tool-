'use client';

import React, { useState } from 'react';
import { Calendar, ArrowRight, Clock, AlertCircle, RotateCcw, Copy, Check } from 'lucide-react';
import CustomDatePicker from '../ui/CustomDatePicker';
import { calculateDateDifference, validateAgeInputs } from '../../lib/age/ageEngine';
import { DateDifferenceResult, ValidationErrors } from '../../lib/age/types';
import { getTodayISODate } from '../../lib/age/dateUtils';

export default function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState<string>('2020-01-01');
  const [endDate, setEndDate] = useState<string>(getTodayISODate());
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [result, setResult] = useState<DateDifferenceResult | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validateAgeInputs(startDate, endDate);
    if (valErrors.dob || valErrors.targetDate) {
      setErrors({
        dob: valErrors.dob,
        targetDate: valErrors.targetDate ? 'End date must be on or after start date.' : undefined,
      });
      return;
    }

    setErrors({});
    try {
      const diffResult = calculateDateDifference(startDate, endDate);
      setResult(diffResult);
    } catch (err) {
      setErrors({ general: (err as Error).message });
    }
  };

  const handleReset = () => {
    setStartDate('2020-01-01');
    setEndDate(getTodayISODate());
    setErrors({});
    setResult(null);
  };

  const handleCopy = async () => {
    if (!result) return;
    const text = [
      `Date Difference Result:`,
      `Start Date: ${result.formattedStartDate} (${result.startWeekday})`,
      `End Date: ${result.formattedEndDate} (${result.endWeekday})`,
      `Duration: ${result.years} Years, ${result.months} Months, ${result.days} Days`,
      `Total Days: ${result.totalDays.toLocaleString()} days`,
      `Total Weeks: ${result.totalWeeks.toLocaleString()} weeks`,
      `Calculated with AgePulse: https://agepulse.vercel.app`
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Input Card */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white transition-colors">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Start Date */}
            <div className="space-y-2">
              <label
                htmlFor="start-date"
                className="block text-sm font-semibold text-slate-200 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>Start Date</span>
              </label>
              <CustomDatePicker
                id="start-date"
                value={startDate}
                onChange={(val) => {
                  setStartDate(val);
                  if (errors.dob) setErrors((prev) => ({ ...prev, dob: undefined }));
                }}
                error={!!errors.dob}
              />
              {errors.dob && (
                <p className="text-xs text-rose-400 flex items-center space-x-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.dob}</span>
                </p>
              )}
            </div>

            {/* End Date */}
            <div className="space-y-2">
              <label
                htmlFor="end-date"
                className="block text-sm font-semibold text-slate-200 flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>End Date</span>
              </label>
              <CustomDatePicker
                id="end-date"
                value={endDate}
                onChange={(val) => {
                  setEndDate(val);
                  if (errors.targetDate) setErrors((prev) => ({ ...prev, targetDate: undefined }));
                }}
                error={!!errors.targetDate}
              />
              {errors.targetDate && (
                <p className="text-xs text-rose-400 flex items-center space-x-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.targetDate}</span>
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base shadow-lg shadow-orange-600/25 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <Clock className="w-5 h-5" />
              <span>Calculate Duration</span>
            </button>

            {result && (
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto py-4 px-6 rounded-2xl border border-slate-700 text-orange-400 bg-slate-800 hover:bg-slate-700 font-semibold text-base flex items-center justify-center space-x-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Result Display */}
      {result && (
        <div className="w-full space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-br from-slate-900 to-orange-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6 border border-slate-800">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                  Duration Between Dates
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-serif mt-1">
                  {result.years} Years, {result.months} Months, {result.days} Days
                </h3>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>From: <strong>{result.formattedStartDate}</strong> ({result.startWeekday})</span>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-400 hidden sm:block" />
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <span>To: <strong>{result.formattedEndDate}</strong> ({result.endWeekday})</span>
              </div>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Total Months', val: `${result.totalMonths.toLocaleString()} months` },
              { label: 'Total Weeks', val: `${result.totalWeeks.toLocaleString()} weeks` },
              { label: 'Total Days', val: `${result.totalDays.toLocaleString()} days` },
              { label: 'Total Hours', val: `${result.totalHours.toLocaleString()} hours` },
              { label: 'Total Minutes', val: `${result.totalMinutes.toLocaleString()} minutes` },
              { label: 'Total Seconds', val: `${result.totalSeconds.toLocaleString()} seconds` },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-2xl text-white"
              >
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <p className="text-lg sm:text-xl font-bold text-white font-mono">
                  {item.val}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
