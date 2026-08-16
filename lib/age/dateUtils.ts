import { ParsedDate } from './types';

/**
 * Checks if a given year is a Gregorian leap year.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Returns the number of days in a specific month of a specific year.
 * @param year Full year (e.g. 2024)
 * @param month 1-indexed month (1 = Jan, 12 = Dec)
 */
export function getDaysInMonth(year: number, month: number): number {
  if (month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}`);
  }
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  }
  return 31;
}

/**
 * Safely parses a YYYY-MM-DD ISO date string without UTC timezone shifts.
 */
export function parseISODate(dateStr: string): ParsedDate | null {
  if (!dateStr || typeof dateStr !== 'string') return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr.trim());
  if (!match) return null;

  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);

  if (month < 1 || month > 12) return null;
  if (day < 1 || day > getDaysInMonth(year, month)) return null;

  return { year, month, day };
}

/**
 * Flexible date parser supporting DD-MM-YYYY, DD/MM/YYYY, DD.MM.YYYY, YYYY-MM-DD, YYYY/MM/DD, 8-digit compact strings, and spaces around delimiters.
 */
export function parseAnyDateString(dateStr: string): ParsedDate | null {
  if (!dateStr || typeof dateStr !== 'string') return null;

  // Fast path YYYY-MM-DD
  const isoParsed = parseISODate(dateStr);
  if (isoParsed) return isoParsed;

  const clean = dateStr.trim().replace(/\s*[\/\.\-\s]\s*/g, '-');
  if (!clean) return null;

  // Try YYYY-MM-DD or YYYY-M-D
  const matchYMD = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(clean);
  if (matchYMD) {
    const year = parseInt(matchYMD[1], 10);
    const month = parseInt(matchYMD[2], 10);
    const day = parseInt(matchYMD[3], 10);
    if (month >= 1 && month <= 12 && year >= 1800 && year <= 2100) {
      if (day >= 1 && day <= getDaysInMonth(year, month)) {
        return { year, month, day };
      }
    }
  }

  // Try DD-MM-YYYY or D-M-YYYY
  const matchDMY = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(clean);
  if (matchDMY) {
    const day = parseInt(matchDMY[1], 10);
    const month = parseInt(matchDMY[2], 10);
    const year = parseInt(matchDMY[3], 10);
    if (month >= 1 && month <= 12 && year >= 1800 && year <= 2100) {
      if (day >= 1 && day <= getDaysInMonth(year, month)) {
        return { year, month, day };
      }
    }
  }

  // Try 8-digit compact DDMMYYYY (e.g. 14032006)
  const matchCompact = /^(\d{2})(\d{2})(\d{4})$/.exec(clean);
  if (matchCompact) {
    const day = parseInt(matchCompact[1], 10);
    const month = parseInt(matchCompact[2], 10);
    const year = parseInt(matchCompact[3], 10);
    if (month >= 1 && month <= 12 && year >= 1800 && year <= 2100) {
      if (day >= 1 && day <= getDaysInMonth(year, month)) {
        return { year, month, day };
      }
    }
  }

  return null;
}

/**
 * Formats a ParsedDate into YYYY-MM-DD string format.
 */
export function formatISODate(date: ParsedDate): string {
  const y = date.year.toString().padStart(4, '0');
  const m = date.month.toString().padStart(2, '0');
  const d = date.day.toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Converts a ParsedDate into a JavaScript local Date object (at midnight 00:00:00).
 */
export function toLocalDate(date: ParsedDate): Date {
  return new Date(date.year, date.month - 1, date.day);
}

/**
 * Returns today's date formatted as YYYY-MM-DD in the user's local timezone.
 */
export function getTodayISODate(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = (now.getMonth() + 1).toString().padStart(2, '0');
  const d = now.getDate().toString().padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Returns a human-readable date format, e.g. "Tuesday, March 14, 2006".
 */
export function formatDateLong(dateStr: string): string {
  const parsed = parseAnyDateString(dateStr);
  if (!parsed) return dateStr;
  const dt = toLocalDate(parsed);
  return dt.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Returns the weekday name for a date string, e.g. "Tuesday".
 */
export function getDayOfWeek(dateStr: string): string {
  const parsed = parseAnyDateString(dateStr);
  if (!parsed) return '';
  const dt = toLocalDate(parsed);
  return dt.toLocaleDateString('en-US', { weekday: 'long' });
}

/**
 * Calculates absolute difference in whole calendar days between two ParsedDates.
 */
export function getDifferenceInDays(start: ParsedDate, end: ParsedDate): number {
  const startDate = toLocalDate(start);
  const endDate = toLocalDate(end);
  const diffTime = endDate.getTime() - startDate.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Calculates Western Zodiac sign based on birth month and day.
 */
export function getZodiacSign(month: number, day: number): string {
  const days = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
  const signs = [
    'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
    'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'
  ];
  return day < days[month - 1] ? signs[month - 1] : signs[month];
}
