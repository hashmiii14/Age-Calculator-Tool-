'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';
import { parseISODate, formatISODate, getDaysInMonth, getTodayISODate } from '../../lib/age/dateUtils';

interface CustomDatePickerProps {
  id: string;
  value: string; // YYYY-MM-DD
  onChange: (val: string) => void;
  placeholder?: string;
  label?: string;
  error?: boolean;
  required?: boolean;
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
  placeholder = 'DD - MM - YYYY',
  error = false,
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Parsed current selection or defaults to today
  const parsedValue = parseISODate(value);
  const [viewYear, setViewYear] = useState<number>(
    parsedValue ? parsedValue.year : new Date().getFullYear()
  );
  const [viewMonth, setViewMonth] = useState<number>(
    parsedValue ? parsedValue.month : new Date().getMonth() + 1
  );

  // Sync view when value changes
  useEffect(() => {
    const parsed = parseISODate(value);
    if (parsed) {
      setViewYear(parsed.year);
      setViewMonth(parsed.month);
    }
  }, [value]);

  // Click outside to close popover
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

  // Generate day grid for current viewMonth/viewYear
  const daysInCurrentMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDayOfWeek = new Date(viewYear, viewMonth - 1, 1).getDay(); // 0 = Sun

  // Generate Year Options from 1900 to 2040
  const yearOptions: number[] = [];
  for (let y = 2035; y >= 1900; y--) {
    yearOptions.push(y);
  }

  // Format date for display in input
  const displayString = parsedValue
    ? `${parsedValue.day.toString().padStart(2, '0')} - ${parsedValue.month.toString().padStart(2, '0')} - ${parsedValue.year}`
    : '';

  return (
    <div className="relative w-full" ref={popoverRef}>
      {/* Input Box Styled for Dark Mode */}
      <div className="relative flex items-center">
        <input
          id={id}
          type="text"
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          value={displayString}
          placeholder={placeholder}
          className={`w-full px-5 py-4 rounded-2xl border text-white bg-slate-900 text-base font-medium placeholder-slate-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
            error
              ? 'border-rose-500 focus:ring-rose-500'
              : 'border-slate-800 hover:border-orange-500/50'
          }`}
        />

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-4 p-2 text-slate-400 hover:text-orange-400 focus:outline-none"
          aria-label="Open calendar picker"
        >
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive Calendar Popover - Dark Mode Only */}
      {isOpen && (
        <div className="absolute left-0 sm:left-auto right-0 top-full mt-2 z-50 w-full sm:w-88 bg-slate-900 rounded-3xl p-5 border border-slate-800 shadow-2xl animate-fadeIn text-white">
          {/* Header Controls: Month & Year Pickers */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-300"
              title="Previous Month"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2">
              {/* Month Selector */}
              <select
                value={viewMonth}
                onChange={(e) => setViewMonth(Number(e.target.value))}
                className="px-2.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              >
                {MONTH_NAMES.map((name, idx) => (
                  <option key={name} value={idx + 1}>
                    {name}
                  </option>
                ))}
              </select>

              {/* Fast Year Selector Dropdown */}
              <select
                value={viewYear}
                onChange={(e) => setViewYear(Number(e.target.value))}
                className="px-2.5 py-1.5 rounded-xl border border-slate-700 bg-slate-800 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
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
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-300"
              title="Next Month"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Year Jump Bar */}
          <div className="mb-3">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Quick Year Jump
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 custom-scrollbar">
              {QUICK_YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setViewYear(y)}
                  className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    viewYear === y
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          {/* Weekday Names */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <span key={d} className="text-xs font-bold text-slate-400 uppercase">
                {d}
              </span>
            ))}
          </div>

          {/* Day Grid */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Empty slots for month start weekday offset */}
            {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
              <span key={`empty-${idx}`} className="h-9 w-9 block" />
            ))}

            {/* Calendar Days */}
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
                  className={`h-9 w-9 rounded-xl text-sm font-semibold flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-500/30 font-bold'
                      : isToday
                      ? 'bg-orange-950/60 text-orange-400 font-bold border border-orange-500'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Footer Today Button */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                const today = getTodayISODate();
                onChange(today);
                setIsOpen(false);
              }}
              className="text-xs font-bold text-orange-400 hover:underline flex items-center space-x-1"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Select Today ({getTodayISODate()})</span>
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
