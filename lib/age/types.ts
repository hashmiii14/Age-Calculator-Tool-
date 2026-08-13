export interface ParsedDate {
  year: number;
  month: number; // 1-indexed (1 = Jan, 12 = Dec)
  day: number;
}

export interface NextBirthdayResult {
  dateStr: string; // YYYY-MM-DD
  formattedDate: string;
  weekday: string;
  turningAge: number;
  daysRemaining: number;
  isToday: boolean;
}

export interface AgeMilestone {
  milestoneDays: number;
  targetDateStr: string; // YYYY-MM-DD
  formattedTargetDate: string;
  daysRemaining: number;
  isPassed: boolean;
}

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  dobStr: string;
  targetDateStr: string;
  formattedDOB: string;
  formattedTargetDate: string;
  dobWeekday: string;
  targetWeekday: string;
  isLeapYearDOB: boolean;
  zodiacSign: string;
  nextBirthday: NextBirthdayResult;
  milestones: AgeMilestone[];
}

export interface DateDifferenceResult {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  totalWeeks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  startDateStr: string;
  endDateStr: string;
  formattedStartDate: string;
  formattedEndDate: string;
  startWeekday: string;
  endWeekday: string;
}

export interface ValidationErrors {
  dob?: string;
  targetDate?: string;
  general?: string;
}
