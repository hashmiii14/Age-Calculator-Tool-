'use client';

import React, { useState, useEffect } from 'react';
import CustomDatePicker from './CustomDatePicker';
import { parseISODate, formatISODate, getDaysInMonth, isLeapYear } from '../../lib/age/dateUtils';
import { Calendar, ChevronDown, Edit3 } from 'lucide-react';

type InputMode = 'calendar' | 'dropdowns' | 'typing';

interface DateInputTripleMethodProps {
  id: string;
  value: string; // YYYY-MM-DD
  onChange: (val: string) => void;
  placeholder?: string;
  error?: boolean;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function DateInputTripleMethod({
  id,
  value,
  onChange,
  placeholder = 'DD - MM - YYYY',
  error = false,
}: DateInputTripleMethodProps) {
  const [mode, setMode] = useState<InputMode>('calendar');

  const parsed = parseISODate(value) || {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };

  // Typing mode internal state
  const [typedString, setTypedString] = useState<string>(
    value ? `${parsed.day.toString().padStart(2, '0')}-${parsed.month.toString().padStart(2, '0')}-${parsed.year}` : ''
  );

  useEffect(() => {
    const p = parseISODate(value);
    if (p) {
      setTypedString(`${p.day.toString().padStart(2, '0')}-${p.month.toString().padStart(2, '0')}-${p.year}`);
    } else if (!value) {
      setTypedString('');
    }
  }, [value]);

  // Handle dropdown changes
  const handleDropdownChange = (field: 'day' | 'month' | 'year', val: number) => {
    let y = parsed.year;
    let m = parsed.month;
    let d = parsed.day;

    if (field === 'year') y = val;
    if (field === 'month') m = val;
    if (field === 'day') d = val;

    // Validate max days in target month/year
    const maxDays = getDaysInMonth(y, m);
    if (d > maxDays) d = maxDays;

    onChange(formatISODate({ year: y, month: m, day: d }));
  };

  // Handle direct typing change
  const handleTypingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setTypedString(raw);

    // Try parsing DD-MM-YYYY or YYYY-MM-DD or DD/MM/YYYY
    const clean = raw.trim().replace(/\//g, '-');
    
    // Match DD-MM-YYYY
    const matchDMY = /^(\d{1,2})[-.](\d{1,2})[-.](\d{4})$/.exec(clean);
    if (matchDMY) {
      const day = parseInt(matchDMY[1], 10);
      const month = parseInt(matchDMY[2], 10);
      const year = parseInt(matchDMY[3], 10);
      if (month >= 1 && month <= 12 && year >= 1900 && year <= 2035) {
        const maxD = getDaysInMonth(year, month);
        if (day >= 1 && day <= maxD) {
          onChange(formatISODate({ year, month, day }));
          return;
        }
      }
    }

    // Match YYYY-MM-DD
    const matchYMD = /^(\d{4})[-.](\d{1,2})[-.](\d{1,2})$/.exec(clean);
    if (matchYMD) {
      const year = parseInt(matchYMD[1], 10);
      const month = parseInt(matchYMD[2], 10);
      const day = parseInt(matchYMD[3], 10);
      if (month >= 1 && month <= 12 && year >= 1900 && year <= 2035) {
        const maxD = getDaysInMonth(year, month);
        if (day >= 1 && day <= maxD) {
          onChange(formatISODate({ year, month, day }));
          return;
        }
      }
    }
  };

  // Generate Year options
  const years: number[] = [];
  for (let y = 2035; y >= 1900; y--) {
    years.push(y);
  }

  // Generate Day options based on selected year & month
  const maxDaysInMonth = getDaysInMonth(parsed.year, parsed.month);
  const days: number[] = [];
  for (let d = 1; d <= maxDaysInMonth; d++) {
    days.push(d);
  }

  return (
    <div className="w-full space-y-2.5">
      {/* Input Mode Selector Bar */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Input Method
        </span>

        <div className="inline-flex items-center p-1 rounded-xl bg-blush-100 dark:bg-plum-950 border border-blush-200 dark:border-plum-800 text-[11px] font-extrabold">
          <button
            type="button"
            onClick={() => setMode('calendar')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              mode === 'calendar'
                ? 'bg-coral-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-coral-500'
            }`}
            title="Visual Calendar Picker"
          >
            <Calendar className="w-3 h-3" />
            <span>Calendar</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('dropdowns')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              mode === 'dropdowns'
                ? 'bg-coral-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-coral-500'
            }`}
            title="Select Day, Month & Year"
          >
            <ChevronDown className="w-3 h-3" />
            <span>Dropdowns</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('typing')}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              mode === 'typing'
                ? 'bg-coral-500 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-coral-500'
            }`}
            title="Type Date Directly"
          >
            <Edit3 className="w-3 h-3" />
            <span>Type Date</span>
          </button>
        </div>
      </div>

      {/* MODE 1: VISUAL CALENDAR */}
      {mode === 'calendar' && (
        <CustomDatePicker
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
        />
      )}

      {/* MODE 2: MANUAL DROPDOWNS */}
      {mode === 'dropdowns' && (
        <div className="grid grid-cols-3 gap-2">
          {/* Day Selector */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Day</span>
            <select
              value={parsed.day}
              onChange={(e) => handleDropdownChange('day', Number(e.target.value))}
              className={`w-full px-3 py-3.5 rounded-2xl text-sm font-bold bg-white dark:bg-plum-900 text-plum-900 dark:text-white border-2 cursor-pointer focus:outline-none ${
                error
                  ? 'border-coral-500'
                  : 'border-blush-200 dark:border-plum-800 focus:border-coral-500'
              }`}
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>

          {/* Month Selector */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Month</span>
            <select
              value={parsed.month}
              onChange={(e) => handleDropdownChange('month', Number(e.target.value))}
              className={`w-full px-3 py-3.5 rounded-2xl text-sm font-bold bg-white dark:bg-plum-900 text-plum-900 dark:text-white border-2 cursor-pointer focus:outline-none ${
                error
                  ? 'border-coral-500'
                  : 'border-blush-200 dark:border-plum-800 focus:border-coral-500'
              }`}
            >
              {MONTH_NAMES.map((name, idx) => (
                <option key={name} value={idx + 1}>
                  {name.substring(0, 3)}
                </option>
              ))}
            </select>
          </div>

          {/* Year Selector */}
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Year</span>
            <select
              value={parsed.year}
              onChange={(e) => handleDropdownChange('year', Number(e.target.value))}
              className={`w-full px-3 py-3.5 rounded-2xl text-sm font-bold bg-white dark:bg-plum-900 text-plum-900 dark:text-white border-2 cursor-pointer focus:outline-none ${
                error
                  ? 'border-coral-500'
                  : 'border-blush-200 dark:border-plum-800 focus:border-coral-500'
              }`}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* MODE 3: DIRECT TYPING */}
      {mode === 'typing' && (
        <div className="relative flex items-center">
          <input
            id={id}
            type="text"
            value={typedString}
            onChange={handleTypingChange}
            placeholder="DD - MM - YYYY (e.g. 15-08-2000)"
            className={`w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl text-base font-medium transition-all focus:outline-none bg-white dark:bg-plum-900 text-plum-900 dark:text-white border-2 placeholder-slate-400 ${
              error
                ? 'border-coral-500 ring-2 ring-coral-500/20'
                : 'border-blush-200 dark:border-plum-800 focus:border-coral-500'
            }`}
          />
        </div>
      )}
    </div>
  );
}
