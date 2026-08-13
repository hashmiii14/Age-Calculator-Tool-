import {
  parseISODate,
  formatDateLong,
  getDayOfWeek,
  getDifferenceInDays,
  formatISODate,
  getTodayISODate,
} from './dateUtils';
import { calculateAge, calculateNextBirthday, calculateNextFiveBirthdays, getDayOfYear } from './ageEngine';
import { getZodiacByDate } from '../data/zodiacData';
import { MONTH_DATA, WEEKDAY_LORE } from '../data/birthDateData';
import { getHistoryForDate } from '../data/historyData';
import { PersonalProfile, SingleMilestone } from './types';

export function getSingleNextMilestone(dobStr: string, targetDateStr: string): SingleMilestone {
  const ageRes = calculateAge(dobStr, targetDateStr);
  const totalDays = ageRes.totalDays;

  // Numeric day targets
  const numericTargets = [1000, 2000, 5000, 7000, 10000, 15000, 20000, 25000, 30000];
  const nextNumeric = numericTargets.find((n) => n > totalDays);

  // Landmark age targets
  const ageTargets = [18, 21, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];
  const nextAgeTarget = ageTargets.find((a) => a > ageRes.years) || (Math.floor(ageRes.years / 10) + 1) * 10;

  const dob = parseISODate(dobStr)!;
  const target = parseISODate(targetDateStr)!;

  // Calculate next age target date
  const mYear = dob.year + nextAgeTarget;
  let mMonth = dob.month;
  let mDay = dob.day;
  if (mMonth === 2 && mDay === 29) {
    // Feb 29 check
    mMonth = 3;
    mDay = 1;
  }
  const ageTargetDateStr = formatISODate({ year: mYear, month: mMonth, day: mDay });
  const ageDaysRemaining = getDifferenceInDays(target, { year: mYear, month: mMonth, day: mDay });

  // Calculate next numeric days target date
  let numericDaysRemaining = 99999;
  let numericDateStr = '';
  if (nextNumeric) {
    const dobDate = new Date(dob.year, dob.month - 1, dob.day);
    const mDate = new Date(dobDate.getTime() + nextNumeric * 24 * 60 * 60 * 1000);
    numericDateStr = `${mDate.getFullYear()}-${(mDate.getMonth() + 1).toString().padStart(2, '0')}-${mDate.getDate().toString().padStart(2, '0')}`;
    numericDaysRemaining = Math.max(0, Math.round((mDate.getTime() - new Date(target.year, target.month - 1, target.day).getTime()) / (1000 * 60 * 60 * 24)));
  }

  // Choose the closer milestone
  if (nextNumeric && numericDaysRemaining <= ageDaysRemaining) {
    return {
      title: `${nextNumeric.toLocaleString()} Days Alive`,
      subtitle: `Your next major lifetime days benchmark`,
      targetDateFormatted: formatDateLong(numericDateStr),
      targetDateStr: numericDateStr,
      daysRemaining: numericDaysRemaining,
      badgeLabel: `${nextNumeric.toLocaleString()} Days`,
      type: 'numeric_days',
    };
  }

  return {
    title: `${nextAgeTarget}th Birthday`,
    subtitle: `Your next landmark age milestone`,
    targetDateFormatted: formatDateLong(ageTargetDateStr),
    targetDateStr: ageTargetDateStr,
    daysRemaining: ageDaysRemaining,
    badgeLabel: `${nextAgeTarget} Years`,
    type: 'landmark_age',
  };
}

export function createPersonalProfile(dobStr: string, targetDateStr?: string): PersonalProfile {
  const targetStr = targetDateStr || getTodayISODate();
  const ageResult = calculateAge(dobStr, targetStr);
  const dob = parseISODate(dobStr)!;

  const monthInfo = MONTH_DATA[dob.month] || MONTH_DATA[1];
  const weekdayLore = WEEKDAY_LORE[ageResult.dobWeekday] || WEEKDAY_LORE.Sunday;
  const nextSingleMilestone = getSingleNextMilestone(dobStr, targetStr);
  const zodiac = getZodiacByDate(dob.month, dob.day);
  const historyRecord = getHistoryForDate(dob.month, dob.day);

  return {
    dobStr,
    formattedDOB: ageResult.formattedDOB,
    dobWeekday: ageResult.dobWeekday,
    dayOfYear: ageResult.dayOfYear,
    targetDateStr: targetStr,
    formattedTargetDate: ageResult.formattedTargetDate,

    years: ageResult.years,
    months: ageResult.months,
    days: ageResult.days,
    totalDays: ageResult.totalDays,
    totalWeeks: ageResult.totalWeeks,
    totalHours: ageResult.totalHours,
    totalMinutes: ageResult.totalMinutes,
    totalSeconds: ageResult.totalSeconds,

    nextBirthday: ageResult.nextBirthday,
    nextFiveBirthdays: ageResult.nextFiveBirthdays,
    nextSingleMilestone,

    dateDetails: {
      birthstone: monthInfo.birthstone.stone,
      birthstoneColor: monthInfo.birthstone.color,
      birthstoneSymbolism: monthInfo.birthstone.symbolism,
      birthFlower: monthInfo.birthFlower.flower,
      birthFlowerMeaning: monthInfo.birthFlower.meaning,
      seasonNorthern: monthInfo.seasonNorthern,
      seasonSouthern: monthInfo.seasonSouthern,
      monthName: monthInfo.name,
      monthFunFact: monthInfo.funFact,
      weekdayLore: weekdayLore.description,
    },

    dateDiscoveries: historyRecord,
    zodiac,
  };
}
