export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  h1: string;
  subheading: string;
}

export const BASE_URL = "https://www.agepulse.site";

export const SEO_PAGES: Record<string, PageSeoConfig> = {
  home: {
    title: "AgePulse | Personal Date, Age & Birthday Discovery Platform",
    description: "Calculate your exact age in years, months, days, total weeks, hours, and seconds. Discover your birthday dashboard, zodiac astrology profile, birthstone, and milestones.",
    keywords: ["age calculator", "birthday countdown", "exact age", "zodiac profile", "birth date discovery", "date difference", "age milestones"],
    canonical: `${BASE_URL}/`,
    h1: "More Than Your Age. Discover Your Date.",
    subheading: "Calculate your exact age, explore your birthday dashboard, discover milestones, learn your zodiac profile, and uncover fascinating birth date facts."
  },
  ageCalculator: {
    title: "Exact Age Calculator - Calculate Years, Months, Days & Hours | AgePulse",
    description: "Calculate your exact chronological age instantly with 100% client-side privacy. View age in years, months, days, total weeks, hours, and seconds.",
    keywords: ["exact age calculator", "calculate age online", "how old am i", "age in days", "age in hours"],
    canonical: `${BASE_URL}/age-calculator`,
    h1: "Exact Age Calculator",
    subheading: "Precise, leap-year aware chronological age calculator with instant breakdown into years, months, days, total weeks, and seconds."
  },
  dateDifference: {
    title: "Date Difference Calculator - Days & Months Between Dates | AgePulse",
    description: "Calculate the exact duration, years, months, weeks, and total days between any two dates. Perfect for event planning and project timelines.",
    keywords: ["date difference calculator", "days between two dates", "duration calculator", "months between dates"],
    canonical: `${BASE_URL}/date-difference`,
    h1: "Date Difference Calculator",
    subheading: "Find the exact difference in years, months, days, and total hours between any two start and end dates."
  },
  birthdayCountdown: {
    title: "Birthday Countdown & Next Birthday Calculator | AgePulse",
    description: "Live countdown timer to your next birthday with turning age, day of the week, celebratory confetti, and next 5 upcoming birthdays list.",
    keywords: ["birthday countdown", "days until birthday", "next birthday calculator", "birthday weekday"],
    canonical: `${BASE_URL}/birthday-countdown`,
    h1: "Birthday Dashboard & Live Countdown",
    subheading: "Track the live ticking countdown to your next birthday and explore your turning age and upcoming birthday days."
  },
  zodiacSign: {
    title: "Western Zodiac Sign & Astrology Discovery Profile | AgePulse",
    description: "Find your Western zodiac sun sign, element, modality, ruling planet, personality themes, strengths, and compatible signs based on your birth date.",
    keywords: ["zodiac sign calculator", "what is my zodiac sign", "western astrology profile", "zodiac element", "zodiac personality"],
    canonical: `${BASE_URL}/zodiac-sign`,
    h1: "Western Zodiac & Astrology Discovery",
    subheading: "Discover your Western sun sign profile, element, ruling planet, strengths, and fun personality traits."
  },
  birthDate: {
    title: "Your Birth Date Profile - Birthstone, Flower & Weekday Lore | AgePulse",
    description: "Explore everything about your birth date: day of the week, season, birthstone, birth flower, calendar position, and fun month facts.",
    keywords: ["birth date discovery", "what day of week was i born", "my birthstone", "my birth flower", "birth date facts"],
    canonical: `${BASE_URL}/birth-date`,
    h1: "Your Birth Date Discovery",
    subheading: "Uncover your birth date story: birthstone, birth flower, season profile, day of the week lore, and calendar position."
  },
  ageMilestones: {
    title: "Life & Age Milestone Tracker - 10,000 Days & Birthday Goals | AgePulse",
    description: "Track your upcoming lifetime day milestones (1,000, 5,000, 10,000, 20,000 days) and landmark birthday ages (18th, 21st, 30th, 50th).",
    keywords: ["10000 days alive", "age milestones", "lifetime days milestone", "landmark birthday tracker"],
    canonical: `${BASE_URL}/age-milestones`,
    h1: "Life & Lifetime Days Milestone Tracker",
    subheading: "Discover when you reach 1,000, 5,000, 10,000, or 20,000 days alive and track upcoming landmark birthday ages."
  },
  onThisDate: {
    title: "What Happened On Your Birthday? Historical Events & Famous Birthdays | AgePulse",
    description: "Search any calendar date to discover historical events, scientific discoveries, cultural moments, and famous people born on that date.",
    keywords: ["what happened on my birthday", "this day in history", "famous birthdays", "historical date facts"],
    canonical: `${BASE_URL}/on-this-date`,
    h1: "What Happened On Your Birthday?",
    subheading: "Explore historical events, scientific breakthroughs, and famous birthdays recorded on your exact date."
  },
  ageComparison: {
    title: "Age Difference & Comparison Calculator | AgePulse",
    description: "Compare two dates of birth to calculate exact age difference in years, months, days, total weeks, and hours with neutral, friendly wording.",
    keywords: ["age comparison calculator", "who is older", "age difference in days", "compare two ages"],
    canonical: `${BASE_URL}/age-comparison`,
    h1: "Age Comparison & Difference Tool",
    subheading: "Compare two birth dates to see who is older, exact age gap in years, months, days, and total days apart."
  },
  dateTools: {
    title: "All Date & Age Calculator Tools Hub | AgePulse",
    description: "Free client-side date tools: Age calculator, date difference, birthday countdown, zodiac sign, age comparison, day of week, and milestones.",
    keywords: ["date tools", "free age calculators", "online calendar tools", "birthday tools"],
    canonical: `${BASE_URL}/date-tools`,
    h1: "Date & Birthday Tools Hub",
    subheading: "Explore our collection of 100% private, client-side date, age, birthday, and astrology tools."
  }
};
