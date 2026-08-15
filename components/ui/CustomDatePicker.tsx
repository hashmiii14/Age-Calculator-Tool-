'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';
import { parseISODate, formatISODate, getDaysInMonth, getTodayISODate } from '../../lib/age/dateUtils';

interface CustomDatePickerProps {
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

const QUICK_YEARS = [2026, 2020, 2010, 2000, 1995, 1990, 1985, 1980, 1975, 1970, 1960, 1950];

export default function CustomDatePicker({
  id,
  value,
  onChange,
  placeholder = 'DD - MM - YYYY (e.g. 15-08-2000)',
  error = false,
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const parsedValue = parseISODate(value);
  const [viewYear, setViewYear] = useState<number>(
    parsedValue ? parsedValue.year : new Date().getFullYear()
  );
  const [viewMonth, setViewMonth] = useState<number>(
    parsedValue ? parsedValue.month : new Date().getMonth() + 1
  );

  // Raw typed text state
  const [typedText, setTypedText] = useState<string>('');

  useEffect(() => {
    const parsed = parseISODate(value);
    if (parsed) {
      setViewYear(parsed.year);
      setViewMonth(parsed.month);
      setTypedText(`${parsed.day.toString().padStart(2, '0')} - ${parsed.month.toString().padStart(2, '0')} - ${parsed.year}`);
    } else if (!value) {
      setTypedText('');
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle direct manual typing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setTypedText(raw);

    const clean = raw.trim().replace(/[\/\.]/g, '-');
    
    // Check DD-MM-YYYY
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

    // Check YYYY-MM-DD
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

  const handleDaySelect = (day: number) => {
    const formatted = formatISODate({ year: viewYear, month: viewMonth, day });
    onChange(formatted);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    if (viewMonth === 1) {
      setViewMonth(12);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 12) {
      setViewMonth(1);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const daysInCurrentMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDayOfWeek = new Date(viewYear, viewMonth - 1, 1).getDay();

  const yearOptions: number[] = [];
  for (let y = 2035; y >= 1900; y--) {
    yearOptions.push(y);
  }

  return (
    <div className="relative w-full" ref={popoverRef}>
      {/* Input Field Surface (Allows Direct Manual Typing!) */}
      <div className="relative flex items-center">
        <input
          id={id}
          type="text"
          value={typedText}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl text-base font-bold transition-all focus:outline-none bg-white dark:bg-plum-900 text-plum-900 dark:text-white border-2 placeholder-slate-400 pr-12 ${
            error
              ? 'border-coral-500 ring-2 ring-coral-500/20'
              : 'border-blush-200 dark:border-plum-800 focus:border-coral-500'
          }`}
        />

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-2.5 p-2 rounded-xl text-coral-500 hover:bg-blush-100 dark:hover:bg-plum-800 transition-colors focus:outline-none cursor-pointer"
          aria-label="Open calendar picker"
          title="Open Calendar & Select Month/Year"
        >
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Backdrop & Calendar Popover Modal */}
      {isOpen && (
        <>
          {/* Backdrop on mobile */}
          <div
            className="fixed inset-0 bg-plum-950/40 backdrop-blur-xs z-40 sm:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Popover Card */}
          <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 sm:translate-y-0 z-50 w-[calc(100vw-2rem)] max-w-[340px] sm:w-[340px] mx-auto rounded-3xl p-4 sm:p-5 shadow-2xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 animate-fade-up">
            {/* Header Controls: Month & Year Dropdowns */}
            <div className="flex items-center justify-between gap-1.5 mb-3 pb-3 border-b border-blush-200 dark:border-plum-800">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-2 rounded-xl bg-blush-100 dark:bg-plum-800 text-slate-700 dark:text-slate-200 hover:bg-coral-500 hover:text-white transition-colors cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-1.5">
                {/* Month Dropdown */}
                <select
                  value={viewMonth}
                  onChange={(e) => setViewMonth(Number(e.target.value))}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-extrabold bg-blush-50 dark:bg-plum-950 text-plum-900 dark:text-white border border-blush-200 dark:border-plum-800 focus:outline-none cursor-pointer"
                >
                  {MONTH_NAMES.map((name, idx) => (
                    <option key={name} value={idx + 1}>
                      {name}
                    </option>
                  ))}
                </select>

                {/* Year Dropdown */}
                <select
                  value={viewYear}
                  onChange={(e) => setViewYear(Number(e.target.value))}
                  className="px-2.5 py-1.5 rounded-xl text-xs font-extrabold bg-blush-50 dark:bg-plum-950 text-plum-900 dark:text-white border border-blush-200 dark:border-plum-800 focus:outline-none cursor-pointer"
                >
                  {yearOptions.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={handleNextMonth}
                className="p-2 rounded-xl bg-blush-100 dark:bg-plum-800 text-slate-700 dark:text-slate-200 hover:bg-coral-500 hover:text-white transition-colors cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Year Jump */}
            <div className="mb-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider block mb-1 text-slate-400">
                Quick Year Jump
              </span>
              <div className="flex items-center gap-1 overflow-x-auto pb-1.5 custom-scrollbar">
                {QUICK_YEARS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setViewYear(y)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold whitespace-nowrap transition-colors cursor-pointer ${
                      viewYear === y
                        ? 'bg-coral-500 text-white'
                        : 'bg-blush-100 dark:bg-plum-800 text-slate-700 dark:text-slate-300 hover:bg-blush-200'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                <span key={d} className="text-[10px] font-black uppercase text-slate-400">
                  {d}
                </span>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                <span key={`empty-${idx}`} className="h-8 w-8 block" />
              ))}

              {Array.from({ length: daysInCurrentMonth }).map((_, idx) => {
                const day = idx + 1;
                const isSelected =
                  parsedValue &&
                  parsedValue.year === viewYear &&
                  parsedValue.month === viewMonth &&
                  parsedValue.day === day;

                const todayStr = getTodayISODate();
                const todayParsed = parseISODate(todayStr);
                const isToday =
                  todayParsed &&
                  todayParsed.year === viewYear &&
                  todayParsed.month === viewMonth &&
                  todayParsed.day === day;

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDaySelect(day)}
                    className={`h-8 w-full max-w-[34px] mx-auto rounded-xl text-xs font-black flex items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-coral-500 text-white shadow-cute'
                        : isToday
                        ? 'bg-blush-100 dark:bg-plum-800 text-coral-500 border border-coral-500 font-black'
                        : 'text-plum-900 dark:text-white hover:bg-blush-100 dark:hover:bg-plum-800'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            {/* Footer Actions */}
            <div className="mt-3 pt-2.5 border-t border-blush-200 dark:border-plum-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  const today = getTodayISODate();
                  onChange(today);
                  setIsOpen(false);
                }}
                className="text-xs font-black text-coral-500 hover:underline flex items-center space-x-1 cursor-pointer"
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Select Today ({getTodayISODate()})</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-plum-900 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
