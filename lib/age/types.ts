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

export interface AgeProgress {
  lastBirthdayStr: string;
  nextBirthdayStr: string;
  percentCompleted: number; // e.g. 35.4
  daysElapsed: number;
  daysTotalInYear: number;
  daysRemaining: number;
}

export interface NextMajorMilestone {
  targetAge: number;
  formattedTargetDate: string;
  yearsRemaining: number;
  monthsRemaining: number;
  daysRemaining: number;
  totalDaysRemaining: number;
}

export interface AgeTimelineNode {
  age: number;
  label: string;
  isReached: boolean;
  isNext: boolean;
  formattedDate: string;
}

export interface QuickFact {
  id: string;
  title: string;
  value: string;
  subtitle: string;
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
  dayOfYear: number;
  nextBirthday: NextBirthdayResult;
  milestones: AgeMilestone[];
  progress: AgeProgress;
  nextMajorMilestone: NextMajorMilestone;
  timeline: AgeTimelineNode[];
  quickFacts: QuickFact[];
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
