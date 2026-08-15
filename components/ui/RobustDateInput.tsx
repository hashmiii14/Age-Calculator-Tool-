'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, Clock, SlidersHorizontal } from 'lucide-react';
import {
  parseISODate,
  parseAnyDateString,
  formatISODate,
  getDaysInMonth,
  getTodayISODate,
} from '../../lib/age/dateUtils';

interface RobustDateInputProps {
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

export default function RobustDateInput({
  id,
  value,
  onChange,
  placeholder = 'DD - MM - YYYY (e.g. 15-08-2000)',
  error = false,
}: RobustDateInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showManualDropdowns, setShowManualDropdowns] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number; width: number }>({ top: 0, left: 0, width: 340 });

  const parsedValue = parseISODate(value);
  const [viewYear, setViewYear] = useState<number>(
    parsedValue ? parsedValue.year : new Date().getFullYear()
  );
  const [viewMonth, setViewMonth] = useState<number>(
    parsedValue ? parsedValue.month : new Date().getMonth() + 1
  );

  const [typedText, setTypedText] = useState<string>('');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Synchronize internal text state when external value changes
  useEffect(() => {
    const parsed = parseISODate(value);
    if (parsed) {
      setViewYear(parsed.year);
      setViewMonth(parsed.month);

      // Only format text if typedText does not already parse to this date
      const currentTypedParsed = parseAnyDateString(typedText);
      if (
        !currentTypedParsed ||
        currentTypedParsed.year !== parsed.year ||
        currentTypedParsed.month !== parsed.month ||
        currentTypedParsed.day !== parsed.day
      ) {
        setTypedText(`${parsed.day.toString().padStart(2, '0')} - ${parsed.month.toString().padStart(2, '0')} - ${parsed.year}`);
      }
    } else if (!value) {
      setTypedText('');
    }
  }, [value]);

  // Recalculate popover position relative to input container for desktop
  const updatePosition = () => {
    if (inputContainerRef.current) {
      const rect = inputContainerRef.current.getBoundingClientRect();
      const popoverWidth = 340;
      let leftPos = rect.left;
      
      // Keep within right viewport boundary
      if (leftPos + popoverWidth > window.innerWidth - 16) {
        leftPos = window.innerWidth - popoverWidth - 16;
      }
      if (leftPos < 16) leftPos = 16;

      setPopoverPos({
        top: rect.bottom + 8,
        left: leftPos,
        width: popoverWidth,
      });
    }
  };

  const handleToggleCalendar = () => {
    updatePosition();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', updatePosition);
      window.addEventListener('scroll', updatePosition, true);
    }
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Direct manual text typing handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setTypedText(raw);

    const parsed = parseAnyDateString(raw);
    if (parsed) {
      const iso = formatISODate(parsed);
      setViewYear(parsed.year);
      setViewMonth(parsed.month);
      onChange(iso);
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

  // Dropdown manual changes
  const handleManualChange = (field: 'day' | 'month' | 'year', val: number) => {
    const currentY = parsedValue ? parsedValue.year : new Date().getFullYear();
    const currentM = parsedValue ? parsedValue.month : new Date().getMonth() + 1;
    const currentD = parsedValue ? parsedValue.day : new Date().getDate();

    let y = currentY;
    let m = currentM;
    let d = currentD;

    if (field === 'year') y = val;
    if (field === 'month') m = val;
    if (field === 'day') d = val;

    const maxD = getDaysInMonth(y, m);
    if (d > maxD) d = maxD;

    onChange(formatISODate({ year: y, month: m, day: d }));
  };

  const daysInCurrentMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDayOfWeek = new Date(viewYear, viewMonth - 1, 1).getDay();

  const yearOptions: number[] = [];
  for (let y = 2035; y >= 1900; y--) {
    yearOptions.push(y);
  }

  const currentYear = parsedValue ? parsedValue.year : new Date().getFullYear();
  const currentMonth = parsedValue ? parsedValue.month : new Date().getMonth() + 1;
  const currentDay = parsedValue ? parsedValue.day : new Date().getDate();
  const daysInMonthForDropdown = getDaysInMonth(currentYear, currentMonth);

  const renderCalendarContent = () => (
    <>
      {/* Header Controls: Month & Year Selectors */}
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
    </>
  );

  return (
    <div className="w-full space-y-2" ref={inputContainerRef}>
      {/* Primary Input Bar */}
      <div className="relative flex items-center">
        <input
          id={id}
          type="text"
          value={typedText}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-2xl text-base font-bold transition-all focus:outline-none bg-white dark:bg-plum-900 text-plum-900 dark:text-white border-2 placeholder-slate-400 pr-24 ${
            error
              ? 'border-coral-500 ring-2 ring-coral-500/20'
              : 'border-blush-200 dark:border-plum-800 focus:border-coral-500'
          }`}
        />

        <div className="absolute right-2 flex items-center space-x-1">
          {/* Toggle Manual Day/Month/Year Dropdowns */}
          <button
            type="button"
            onClick={() => setShowManualDropdowns(!showManualDropdowns)}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              showManualDropdowns
                ? 'bg-coral-500 text-white'
                : 'text-slate-400 hover:text-coral-500 hover:bg-blush-100 dark:hover:bg-plum-800'
            }`}
            title="Toggle Manual Day/Month/Year Selects"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          {/* Open Visual Calendar Modal/Popover */}
          <button
            type="button"
            onClick={handleToggleCalendar}
            className="p-2 rounded-xl text-coral-500 hover:bg-blush-100 dark:hover:bg-plum-800 transition-colors cursor-pointer"
            title="Open Calendar Picker"
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Optional Manual Day / Month / Year Dropdown Menus */}
      {showManualDropdowns && (
        <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-blush-50 dark:bg-plum-950 border border-blush-200 dark:border-plum-800 animate-fade-up">
          <div>
            <label className="text-[10px] font-extrabold uppercase text-slate-400 block mb-1">Day</label>
            <select
              value={currentDay}
              onChange={(e) => handleManualChange('day', Number(e.target.value))}
              className="w-full px-2 py-2 rounded-xl text-xs font-extrabold bg-white dark:bg-plum-900 text-plum-900 dark:text-white border border-blush-200 dark:border-plum-800 focus:outline-none cursor-pointer"
            >
              {Array.from({ length: daysInMonthForDropdown }).map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {(i + 1).toString().padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-extrabold uppercase text-slate-400 block mb-1">Month</label>
            <select
              value={currentMonth}
              onChange={(e) => handleManualChange('month', Number(e.target.value))}
              className="w-full px-2 py-2 rounded-xl text-xs font-extrabold bg-white dark:bg-plum-900 text-plum-900 dark:text-white border border-blush-200 dark:border-plum-800 focus:outline-none cursor-pointer"
            >
              {MONTH_NAMES.map((name, i) => (
                <option key={name} value={i + 1}>
                  {name.substring(0, 3)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-extrabold uppercase text-slate-400 block mb-1">Year</label>
            <select
              value={currentYear}
              onChange={(e) => handleManualChange('year', Number(e.target.value))}
              className="w-full px-2 py-2 rounded-xl text-xs font-extrabold bg-white dark:bg-plum-900 text-plum-900 dark:text-white border border-blush-200 dark:border-plum-800 focus:outline-none cursor-pointer"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* PORTAL-RENDERED CALENDAR MODAL / POPOVER */}
      {isOpen && mounted && createPortal(
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-plum-950/40 backdrop-blur-xs z-[9998]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Modal Container (< 640px) */}
          <div className="sm:hidden fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
            <div className="w-full max-w-[340px] rounded-3xl p-4 shadow-2xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 animate-fade-up pointer-events-auto">
              {renderCalendarContent()}
            </div>
          </div>

          {/* Desktop Anchored Popover (>= 640px) */}
          <div
            className="hidden sm:block fixed z-[9999] w-[340px] rounded-3xl p-5 shadow-2xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 animate-fade-up"
            style={{
              top: `${popoverPos.top}px`,
              left: `${popoverPos.left}px`,
            }}
          >
            {renderCalendarContent()}
          </div>
        </>,
        document.body
      )}
    </div>
  );
}
