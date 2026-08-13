import { describe, it, expect } from 'vitest';
import {
  calculateAge,
  calculateDateDifference,
  calculateNextBirthday,
  calculateMilestones,
  calculateAgeProgress,
  calculateNextMajorMilestone,
  calculateMilestoneTimeline,
  validateAgeInputs,
} from '../lib/age/ageEngine';
import { isLeapYear, getDaysInMonth } from '../lib/age/dateUtils';

describe('Age Engine - Core Calculations', () => {
  it('1. Normal age calculation: 2006-03-14 to 2025-06-07', () => {
    const res = calculateAge('2006-03-14', '2025-06-07');
    expect(res.years).toBe(19);
    expect(res.months).toBe(2);
    expect(res.days).toBe(24);
    expect(res.totalMonths).toBe(19 * 12 + 2);
  });

  it('2. Same date (DOB equals Target Date)', () => {
    const res = calculateAge('2020-05-15', '2020-05-15');
    expect(res.years).toBe(0);
    expect(res.months).toBe(0);
    expect(res.days).toBe(0);
    expect(res.totalDays).toBe(0);
  });

  it('3. One day before birthday: born 2000-05-15, target 2024-05-14', () => {
    const res = calculateAge('2000-05-15', '2024-05-14');
    expect(res.years).toBe(23);
    expect(res.months).toBe(11);
    expect(res.days).toBe(29); // April has 30 days, 30-15+14=29
  });

  it('4. One day after birthday: born 2000-05-15, target 2024-05-16', () => {
    const res = calculateAge('2000-05-15', '2024-05-16');
    expect(res.years).toBe(24);
    expect(res.months).toBe(0);
    expect(res.days).toBe(1);
  });

  it('5 & 6. Leap year rules verification', () => {
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2025)).toBe(false);
    expect(getDaysInMonth(2024, 2)).toBe(29);
    expect(getDaysInMonth(2025, 2)).toBe(28);
  });

  it('7. February 29 DOB in leap year vs non-leap year target', () => {
    const res1 = calculateAge('2000-02-29', '2001-02-28');
    expect(res1.years).toBe(0);
    expect(res1.months).toBe(11);
    expect(res1.days).toBe(30);

    const res2 = calculateAge('2000-02-29', '2001-03-01');
    expect(res2.years).toBe(1);
    expect(res2.months).toBe(0);
    expect(res2.days).toBe(0);

    const res3 = calculateAge('2000-02-29', '2004-02-29');
    expect(res3.years).toBe(4);
    expect(res3.months).toBe(0);
    expect(res3.days).toBe(0);
  });

  it('8. End-of-month edge cases', () => {
    const resJanFeb = calculateAge('2025-01-31', '2025-02-28');
    expect(resJanFeb.years).toBe(0);
    expect(resJanFeb.months).toBe(0);
    expect(resJanFeb.days).toBe(28);

    const resMayJune = calculateAge('2025-05-31', '2025-06-30');
    expect(resMayJune.years).toBe(0);
    expect(resMayJune.months).toBe(0);
    expect(resMayJune.days).toBe(30);
  });

  it('9 & 10. Month and Year Boundaries', () => {
    const resDecJan = calculateAge('2024-12-31', '2025-01-01');
    expect(resDecJan.years).toBe(0);
    expect(resDecJan.months).toBe(0);
    expect(resDecJan.days).toBe(1);
    expect(resDecJan.totalDays).toBe(1);
  });

  it('11. Validation: Future DOB relative to target date', () => {
    const errors = validateAgeInputs('2026-01-01', '2025-01-01');
    expect(errors.targetDate).toBe('Target date must be on or after the date of birth.');
  });

  it('12. Validation: Target date before DOB', () => {
    expect(() => calculateAge('2025-05-10', '2020-05-10')).toThrow();
  });

  it('13. Date Difference: Same start and end date', () => {
    const diff = calculateDateDifference('2023-08-01', '2023-08-01');
    expect(diff.totalDays).toBe(0);
    expect(diff.totalHours).toBe(0);
  });

  it('14. Very old dates (e.g., born 1900-01-01 to 2000-01-01)', () => {
    const resOld = calculateAge('1900-01-01', '2000-01-01');
    expect(resOld.years).toBe(100);
    expect(resOld.months).toBe(0);
    expect(resOld.days).toBe(0);
  });

  it('15. Recent DOB: born 2 days ago', () => {
    const resRecent = calculateAge('2025-01-01', '2025-01-03');
    expect(resRecent.years).toBe(0);
    expect(resRecent.months).toBe(0);
    expect(resRecent.days).toBe(2);
    expect(resRecent.totalDays).toBe(2);
    expect(resRecent.totalHours).toBe(48);
  });

  it('16 & 17. Next birthday calculations (Today & Upcoming)', () => {
    const bdayToday = calculateNextBirthday('2000-08-15', '2025-08-15');
    expect(bdayToday.isToday).toBe(true);
    expect(bdayToday.daysRemaining).toBe(0);
    expect(bdayToday.turningAge).toBe(25);

    const bdayUpcoming = calculateNextBirthday('2000-12-25', '2025-08-15');
    expect(bdayUpcoming.isToday).toBe(false);
    expect(bdayUpcoming.turningAge).toBe(25);
    expect(bdayUpcoming.dateStr).toBe('2025-12-25');
  });

  it('18. Next birthday for Feb 29 birth date in non-leap year', () => {
    const bdayFeb29In2025 = calculateNextBirthday('2000-02-29', '2025-01-01');
    expect(bdayFeb29In2025.dateStr).toBe('2025-03-01');
    expect(bdayFeb29In2025.turningAge).toBe(25);
  });

  it('19. Lifetime day milestone calculations', () => {
    const milestones = calculateMilestones('2000-01-01', '2025-01-01');
    expect(milestones.length).toBe(7);
    const m5k = milestones.find((m) => m.milestoneDays === 5000);
    expect(m5k).toBeDefined();
    expect(m5k?.isPassed).toBe(true);
  });

  it('20. Age progress and milestone timeline calculation', () => {
    const progress = calculateAgeProgress('2000-01-01', '2025-07-01');
    expect(progress.percentCompleted).toBeGreaterThan(0);
    expect(progress.percentCompleted).toBeLessThanOrEqual(100);

    const nextM = calculateNextMajorMilestone(25, '2000-01-01', '2025-07-01');
    expect(nextM.targetAge).toBe(30);
    expect(nextM.yearsRemaining).toBe(4);

    const timeline = calculateMilestoneTimeline(25, '2000-01-01');
    const node25 = timeline.find((t) => t.age === 25);
    expect(node25?.isReached).toBe(true);
    const node30 = timeline.find((t) => t.age === 30);
    expect(node30?.isNext).toBe(true);
  });
});
