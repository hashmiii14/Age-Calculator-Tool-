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
import { getZodiacByDate } from '../data/zodiacData';
import { MONTH_DATA } from '../data/birthDateData';
import { getHistoryForDate } from '../data/historyData';
import {
  ParsedDate,
  AgeResult,
  DateDifferenceResult,
  NextBirthdayResult,
  UpcomingBirthday,
  ValidationErrors,
  AgeMilestone,
  NextBigDayMilestone,
  AgeProgress,
  NextMajorMilestone,
  AgeTimelineNode,
  QuickFact,
  AgeComparisonResult,
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
 * Calculates day of the year (1 - 366).
 */
export function getDayOfYear(dob: ParsedDate): number {
  let days = dob.day;
  for (let m = 1; m < dob.month; m++) {
    days += getDaysInMonth(dob.year, m);
  }
  return days;
}

/**
 * Calculates next 5 upcoming birthdays relative to target date.
 */
export function calculateNextFiveBirthdays(
  dobStr: string,
  targetDateStr: string
): UpcomingBirthday[] {
  const dob = parseISODate(dobStr);
  const target = parseISODate(targetDateStr);
  if (!dob || !target) return [];

  const results: UpcomingBirthday[] = [];
  let currentStartYear = target.year;

  const getBdayParsed = (y: number): ParsedDate => {
    if (dob.month === 2 && dob.day === 29 && !isLeapYear(y)) {
      return { year: y, month: 3, day: 1 };
    }
    return { year: y, month: dob.month, day: dob.day };
  };

  const bdayThisYear = getBdayParsed(currentStartYear);
  if (toLocalDate(bdayThisYear).getTime() < toLocalDate(target).getTime()) {
    currentStartYear += 1;
  }

  for (let i = 0; i < 5; i++) {
    const y = currentStartYear + i;
    const bdayParsed = getBdayParsed(y);
    const dateStr = formatISODate(bdayParsed);

    results.push({
      year: y,
      dateStr,
      formattedDate: formatDateLong(dateStr),
      weekday: getDayOfWeek(dateStr),
      turningAge: y - dob.year,
    });
  }

  return results;
}

/**
 * Finds the immediate next day milestone (e.g. 1k, 5k, 10k, 15k, 20k, 25k, 30k days).
 */
export function calculateNextBigDayMilestone(
  milestones: AgeMilestone[]
): NextBigDayMilestone | null {
  const upcoming = milestones.find((m) => !m.isPassed);
  if (!upcoming) return null;

  return {
    milestoneDays: upcoming.milestoneDays,
    targetDateStr: upcoming.targetDateStr,
    formattedTargetDate: upcoming.formattedTargetDate,
    daysRemaining: upcoming.daysRemaining,
  };
}

/**
 * Calculates exact age progression percentage between last birthday and next birthday.
 */
export function calculateAgeProgress(
  dobStr: string,
  targetDateStr: string
): AgeProgress {
  const dob = parseISODate(dobStr)!;
  const target = parseISODate(targetDateStr)!;

  let lastBdayYear = target.year;
  const getBdayDate = (y: number): ParsedDate => {
    if (dob.month === 2 && dob.day === 29 && !isLeapYear(y)) {
      return { year: y, month: 3, day: 1 };
    }
    return { year: y, month: dob.month, day: dob.day };
  };

  let lastBday = getBdayDate(lastBdayYear);
  if (toLocalDate(lastBday).getTime() > toLocalDate(target).getTime()) {
    lastBdayYear -= 1;
    lastBday = getBdayDate(lastBdayYear);
  }

  const nextBdayYear = lastBdayYear + 1;
  const nextBday = getBdayDate(nextBdayYear);

  const daysElapsed = getDifferenceInDays(lastBday, target);
  const daysTotalInYear = getDifferenceInDays(lastBday, nextBday);
  const daysRemaining = daysTotalInYear - daysElapsed;

  const percentCompleted = Math.min(
    100,
    Math.max(0, Number(((daysElapsed / daysTotalInYear) * 100).toFixed(1)))
  );

  return {
    lastBirthdayStr: formatISODate(lastBday),
    nextBirthdayStr: formatISODate(nextBday),
    percentCompleted,
    daysElapsed,
    daysTotalInYear,
    daysRemaining,
  };
}

/**
 * Calculates next major milestone age (e.g., 18, 21, 25, 30, 40, 50, 60, 75, 100).
 */
export function calculateNextMajorMilestone(
  currentYears: number,
  dobStr: string,
  targetDateStr: string
): NextMajorMilestone {
  const milestoneAges = [1, 5, 10, 18, 21, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];
  const targetAge = milestoneAges.find((a) => a > currentYears) || (Math.floor(currentYears / 10) + 1) * 10;

  const dob = parseISODate(dobStr)!;
  const target = parseISODate(targetDateStr)!;

  let mYear = dob.year + targetAge;
  let mMonth = dob.month;
  let mDay = dob.day;

  if (mMonth === 2 && mDay === 29 && !isLeapYear(mYear)) {
    mMonth = 3;
    mDay = 1;
  }

  const milestoneParsed: ParsedDate = { year: mYear, month: mMonth, day: mDay };
  const formattedTargetDate = formatDateLong(formatISODate(milestoneParsed));

  let yearsRem = milestoneParsed.year - target.year;
  let monthsRem = milestoneParsed.month - target.month;
  let daysRem = milestoneParsed.day - target.day;

  if (daysRem < 0) {
    monthsRem -= 1;
    let pM = target.month - 1;
    let pY = target.year;
    if (pM === 0) {
      pM = 12;
      pY -= 1;
    }
    daysRem += getDaysInMonth(pY, pM);
  }

  if (monthsRem < 0) {
    yearsRem -= 1;
    monthsRem += 12;
  }

  const totalDaysRemaining = getDifferenceInDays(target, milestoneParsed);

  return {
    targetAge,
    formattedTargetDate,
    yearsRemaining: Math.max(0, yearsRem),
    monthsRemaining: Math.max(0, monthsRem),
    daysRemaining: Math.max(0, daysRem),
    totalDaysRemaining: Math.max(0, totalDaysRemaining),
  };
}

/**
 * Generates neutral age milestone timeline nodes (0, 10, 18, 21, 25, 30, 40, 50, 75, 100).
 */
export function calculateMilestoneTimeline(
  currentYears: number,
  dobStr: string
): AgeTimelineNode[] {
  const dob = parseISODate(dobStr)!;
  const milestoneAges = [1, 5, 10, 13, 16, 18, 21, 25, 30, 40, 50, 60, 70, 80];

  const nextAge = milestoneAges.find((a) => a > currentYears) || 80;

  return milestoneAges.map((age) => {
    let mYear = dob.year + age;
    let mMonth = dob.month;
    let mDay = dob.day;
    if (mMonth === 2 && mDay === 29 && !isLeapYear(mYear)) {
      mMonth = 3;
      mDay = 1;
    }

    const dateStr = formatISODate({ year: mYear, month: mMonth, day: mDay });

    return {
      age,
      label: `${age} Years`,
      isReached: age <= currentYears,
      isNext: age === nextAge,
      formattedDate: formatDateLong(dateStr),
    };
  });
}

/**
 * Calculates lifetime day milestones (1k, 5k, 10k, 20k, 30k, 40k, 50k days lived).
 */
export function calculateMilestones(
  dobStr: string,
  targetDateStr: string
): AgeMilestone[] {
  const dob = parseISODate(dobStr);
  const target = parseISODate(targetDateStr);
  if (!dob || !target) return [];

  const dobDate = toLocalDate(dob);
  const targetDate = toLocalDate(target);

  const targets = [1000, 5000, 10000, 20000, 30000, 40000, 50000];

  return targets.map((mDays) => {
    const mDate = new Date(dobDate.getTime() + mDays * 24 * 60 * 60 * 1000);
    const y = mDate.getFullYear();
    const m = (mDate.getMonth() + 1).toString().padStart(2, '0');
    const d = mDate.getDate().toString().padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;

    const diffDays = Math.round((mDate.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24));
    const isPassed = diffDays <= 0;

    return {
      milestoneDays: mDays,
      targetDateStr: dateStr,
      formattedTargetDate: formatDateLong(dateStr),
      daysRemaining: isPassed ? 0 : diffDays,
      isPassed,
    };
  });
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

  const dayOfYear = getDayOfYear(dob);
  const nextBirthday = calculateNextBirthday(dobStr, targetDateStr);
  const nextFiveBirthdays = calculateNextFiveBirthdays(dobStr, targetDateStr);
  const milestones = calculateMilestones(dobStr, targetDateStr);
  const nextBigDay = calculateNextBigDayMilestone(milestones);
  const progress = calculateAgeProgress(dobStr, targetDateStr);
  const nextMajorMilestone = calculateNextMajorMilestone(years, dobStr, targetDateStr);
  const timeline = calculateMilestoneTimeline(years, dobStr);

  const dobWeekday = getDayOfWeek(dobStr);

  const quickFacts: QuickFact[] = [
    {
      id: 'born-day',
      title: 'Day of Birth',
      value: `Born on a ${dobWeekday}`,
      subtitle: `Calendar day ${dayOfYear} of ${dob.year}`,
    },
    {
      id: 'weeks-lived',
      title: 'Total Weeks Lived',
      value: `${totalWeeks.toLocaleString()} Weeks`,
      subtitle: `Plus ${(totalDays % 7)} additional days`,
    },
    {
      id: 'next-bday-rem',
      title: 'Next Birthday Countdown',
      value: `${nextBirthday.daysRemaining} Days Away`,
      subtitle: `Turning ${nextBirthday.turningAge} on ${nextBirthday.formattedDate}`,
    },
    {
      id: 'next-milestone-fact',
      title: 'Next Age Milestone',
      value: `${nextMajorMilestone.targetAge} Years Old`,
      subtitle: `${nextMajorMilestone.yearsRemaining}y ${nextMajorMilestone.monthsRemaining}m ${nextMajorMilestone.daysRemaining}d remaining`,
    },
  ];

  if (nextBigDay) {
    quickFacts.push({
      id: 'next-big-day-fact',
      title: `Next Big Day (${nextBigDay.milestoneDays.toLocaleString()}th Day)`,
      value: nextBigDay.formattedTargetDate,
      subtitle: `In ${nextBigDay.daysRemaining.toLocaleString()} days`,
    });
  }

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
    dobWeekday,
    targetWeekday: getDayOfWeek(targetDateStr),
    isLeapYearDOB: isLeapYear(dob.year),
    zodiacSign: getZodiacSign(dob.month, dob.day),
    zodiacProfile: getZodiacByDate(dob.month, dob.day),
    monthDetails: MONTH_DATA[dob.month] || MONTH_DATA[1],
    historyRecord: getHistoryForDate(dob.month, dob.day),
    dayOfYear,
    nextBirthday,
    nextFiveBirthdays,
    milestones,
    nextBigDay,
    progress,
    nextMajorMilestone,
    timeline,
    quickFacts,
  };
}

/**
 * Calculates duration/difference between Person A and Person B.
 */
export function calculateAgeComparison(
  dobAStr: string,
  dobBStr: string,
  targetDateStr: string
): AgeComparisonResult {
  const ageA = calculateAge(dobAStr, targetDateStr);
  const ageB = calculateAge(dobBStr, targetDateStr);

  const dobADate = toLocalDate(parseISODate(dobAStr)!);
  const dobBDate = toLocalDate(parseISODate(dobBStr)!);

  const earlierStr = dobADate.getTime() <= dobBDate.getTime() ? dobAStr : dobBStr;
  const laterStr = dobADate.getTime() <= dobBDate.getTime() ? dobBStr : dobAStr;

  const diff = calculateDateDifference(earlierStr, laterStr);

  const olderPersonLabel = ageA.totalDays > ageB.totalDays ? 'Person A is older' : ageB.totalDays > ageA.totalDays ? 'Person B is older' : 'Both are the exact same age';

  return {
    personAYears: ageA.years,
    personAMonths: ageA.months,
    personADays: ageA.days,
    personBYears: ageB.years,
    personBMonths: ageB.months,
    personBDays: ageB.days,
    yearsDiff: diff.years,
    monthsDiff: diff.months,
    daysDiff: diff.days,
    totalDaysDiff: diff.totalDays,
    olderPersonLabel,
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

  const getBdayParsedDate = (y: number): ParsedDate => {
    if (dob.month === 2 && dob.day === 29 && !isLeapYear(y)) {
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
