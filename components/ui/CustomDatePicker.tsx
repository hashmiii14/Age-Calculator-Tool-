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
  placeholder = 'Select date of birth',
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

  useEffect(() => {
    const parsed = parseISODate(value);
    if (parsed) {
      setViewYear(parsed.year);
      setViewMonth(parsed.month);
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

  const displayString = parsedValue
    ? `${parsedValue.day.toString().padStart(2, '0')} - ${parsedValue.month.toString().padStart(2, '0')} - ${parsedValue.year}`
    : '';

  return (
    <div className="relative w-full" ref={popoverRef}>
      {/* Input Field */}
      <div className="relative flex items-center">
        <input
          id={id}
          type="text"
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          value={displayString}
          placeholder={placeholder}
          className="w-full px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl text-base font-medium cursor-pointer transition-all focus:outline-none"
          style={{
            backgroundColor: '#1D2133',
            color: '#F2F4FB',
            borderColor: error ? '#ef4444' : '#252A3D',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
        />

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-3.5 sm:right-4 p-1.5 rounded-lg transition-colors focus:outline-none"
          style={{ color: '#E85D36' }}
          aria-label="Open calendar picker"
        >
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile-optimized Calendar Popover */}
      {isOpen && (
        <div
          className="absolute left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-0 top-full mt-2 z-50 w-[calc(100vw-2rem)] max-w-[340px] sm:w-[340px] rounded-2xl p-4 sm:p-5 shadow-2xl animate-fade-up"
          style={{
            backgroundColor: '#161A26',
            borderColor: '#252A3D',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
        >
          {/* Header Controls: Month & Year Pickers */}
          <div className="flex items-center justify-between gap-1.5 mb-3 pb-3 border-b" style={{ borderColor: '#252A3D' }}>
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1.5 rounded-lg transition-colors"
              style={{ backgroundColor: '#1D2133', color: '#9AA3C4' }}
              title="Previous Month"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-1.5">
              {/* Month Selector */}
              <select
                value={viewMonth}
                onChange={(e) => setViewMonth(Number(e.target.value))}
                className="px-2 py-1 rounded-lg text-xs font-bold focus:outline-none cursor-pointer"
                style={{ backgroundColor: '#1D2133', color: '#F2F4FB', borderColor: '#252A3D', borderWidth: '1px' }}
              >
                {MONTH_NAMES.map((name, idx) => (
                  <option key={name} value={idx + 1}>
                    {name}
                  </option>
                ))}
              </select>

              {/* Year Selector */}
              <select
                value={viewYear}
                onChange={(e) => setViewYear(Number(e.target.value))}
                className="px-2 py-1 rounded-lg text-xs font-bold focus:outline-none cursor-pointer"
                style={{ backgroundColor: '#1D2133', color: '#F2F4FB', borderColor: '#252A3D', borderWidth: '1px' }}
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
              className="p-1.5 rounded-lg transition-colors"
              style={{ backgroundColor: '#1D2133', color: '#9AA3C4' }}
              title="Next Month"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Year Jump */}
          <div className="mb-3">
            <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: '#636B8A' }}>
              Quick Year Jump
            </span>
            <div className="flex items-center gap-1 overflow-x-auto pb-1.5 custom-scrollbar">
              {QUICK_YEARS.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setViewYear(y)}
                  className="px-2 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors"
                  style={{
                    backgroundColor: viewYear === y ? '#E85D36' : '#1D2133',
                    color: viewYear === y ? '#fff' : '#9AA3C4',
                  }}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <span key={d} className="text-[10px] font-extrabold uppercase" style={{ color: '#636B8A' }}>
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
                  className="h-8 w-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all focus:outline-none"
                  style={{
                    backgroundColor: isSelected
                      ? '#E85D36'
                      : isToday
                      ? 'rgba(232,93,54,0.15)'
                      : 'transparent',
                    color: isSelected
                      ? '#ffffff'
                      : isToday
                      ? '#E85D36'
                      : '#F2F4FB',
                    border: isToday && !isSelected ? '1px solid #E85D36' : 'none',
                  }}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Footer Today Button */}
          <div className="mt-3 pt-2.5 border-t flex items-center justify-between" style={{ borderColor: '#252A3D' }}>
            <button
              type="button"
              onClick={() => {
                const today = getTodayISODate();
                onChange(today);
                setIsOpen(false);
              }}
              className="text-xs font-bold flex items-center space-x-1"
              style={{ color: '#E85D36' }}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Select Today ({getTodayISODate()})</span>
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md"
              style={{ color: '#636B8A' }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
