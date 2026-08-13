import {
  parseISODate,
  getDaysInMonth,
  isLeapYear,
  formatDateLong,
  getDayOfWeek,
  getDifferenceInDays,
  getZodiacSign,
  toLocalDate,
  formatISODate,
} from './dateUtils';
import {
  ParsedDate,
  AgeResult,
  DateDifferenceResult,
  NextBirthdayResult,
  ValidationErrors,
} from './types';

/**
 * Validates Date of Birth and Target/Calculate Age On input strings.
 */
export function validateAgeInputs(
  dobStr: string,
  targetDateStr: string
): ValidationErrors {
  const errors: ValidationErrors = {};

  const dob = parseISODate(dobStr);
  if (!dob) {
    errors.dob = 'Please enter a valid date of birth (YYYY-MM-DD).';
    return errors;
  }

  const target = parseISODate(targetDateStr);
  if (!target) {
    errors.targetDate = 'Please enter a valid target date (YYYY-MM-DD).';
    return errors;
  }

  const dobDate = toLocalDate(dob);
  const targetDate = toLocalDate(target);

  if (targetDate.getTime() < dobDate.getTime()) {
    errors.targetDate = 'Target date must be on or after the date of birth.';
  }

  return errors;
}

/**
 * Calculates exact chronological age (Years, Months, Days) and total breakdown.
 */
export function calculateAge(
  dobStr: string,
  targetDateStr: string
): AgeResult {
  const errors = validateAgeInputs(dobStr, targetDateStr);
  if (errors.dob || errors.targetDate) {
    throw new Error(errors.dob || errors.targetDate);
  }

  const dob = parseISODate(dobStr)!;
  const target = parseISODate(targetDateStr)!;

  let years = target.year - dob.year;
  let months = target.month - dob.month;
  let days = target.day - dob.day;

  // Handle day overflow/underflow
  if (days < 0) {
    months -= 1;
    // Determine previous month relative to target
    let prevMonth = target.month - 1;
    let prevYear = target.year;
    if (prevMonth === 0) {
      prevMonth = 12;
      prevYear -= 1;
    }
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
    days += daysInPrevMonth;
  }

  // Handle month overflow/underflow
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Total metrics
  const totalDays = getDifferenceInDays(dob, target);
  const totalMonths = years * 12 + months;
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;
  const totalSeconds = totalMinutes * 60;

  const nextBirthday = calculateNextBirthday(dobStr, targetDateStr);

  return {
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    dobStr,
    targetDateStr,
    formattedDOB: formatDateLong(dobStr),
    formattedTargetDate: formatDateLong(targetDateStr),
    dobWeekday: getDayOfWeek(dobStr),
    targetWeekday: getDayOfWeek(targetDateStr),
    isLeapYearDOB: isLeapYear(dob.year),
    zodiacSign: getZodiacSign(dob.month, dob.day),
    nextBirthday,
  };
}

/**
 * Calculates duration/difference between two arbitrary dates.
 */
export function calculateDateDifference(
  startDateStr: string,
  endDateStr: string
): DateDifferenceResult {
  const errors = validateAgeInputs(startDateStr, endDateStr);
  if (errors.dob || errors.targetDate) {
    throw new Error(errors.dob || errors.targetDate);
  }

  const start = parseISODate(startDateStr)!;
  const end = parseISODate(endDateStr)!;

  let years = end.year - start.year;
  let months = end.month - start.month;
  let days = end.day - start.day;

  if (days < 0) {
    months -= 1;
    let prevMonth = end.month - 1;
    let prevYear = end.year;
    if (prevMonth === 0) {
      prevMonth = 12;
      prevYear -= 1;
    }
    days += getDaysInMonth(prevYear, prevMonth);
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = getDifferenceInDays(start, end);
  const totalMonths = years * 12 + months;
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;
  const totalSeconds = totalMinutes * 60;

  return {
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    startDateStr,
    endDateStr,
    formattedStartDate: formatDateLong(startDateStr),
    formattedEndDate: formatDateLong(endDateStr),
    startWeekday: getDayOfWeek(startDateStr),
    endWeekday: getDayOfWeek(endDateStr),
  };
}

/**
 * Calculates the next upcoming birthday relative to target/current date.
 * Handles Feb 29 birthdays in non-leap years by assigning them to March 1.
 */
export function calculateNextBirthday(
  dobStr: string,
  currentDateStr: string
): NextBirthdayResult {
  const dob = parseISODate(dobStr);
  const current = parseISODate(currentDateStr);

  if (!dob || !current) {
    throw new Error('Invalid dates provided for next birthday calculation.');
  }

  let nextYear = current.year;

  // Determine birthday month and day in target year
  const getBdayParsedDate = (y: number): ParsedDate => {
    if (dob.month === 2 && dob.day === 29 && !isLeapYear(y)) {
      // In non-leap year, Feb 29 birthday is celebrated on March 1
      return { year: y, month: 3, day: 1 };
    }
    return { year: y, month: dob.month, day: dob.day };
  };

  let bdayThisYear = getBdayParsedDate(nextYear);

  const currentDateObj = toLocalDate(current);
  const bdayThisYearDateObj = toLocalDate(bdayThisYear);

  if (bdayThisYearDateObj.getTime() < currentDateObj.getTime()) {
    nextYear += 1;
    bdayThisYear = getBdayParsedDate(nextYear);
  }

  const daysRemaining = getDifferenceInDays(current, bdayThisYear);
  const isToday = daysRemaining === 0;
  const turningAge = nextYear - dob.year;
  const dateStr = formatISODate(bdayThisYear);

  return {
    dateStr,
    formattedDate: formatDateLong(dateStr),
    weekday: getDayOfWeek(dateStr),
    turningAge,
    daysRemaining,
    isToday,
  };
}
