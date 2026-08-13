export interface ZodiacInfo {
  name: string;
  symbol: string;
  unicodeSymbol: string;
  dateRange: string;
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  modality: 'Cardinal' | 'Fixed' | 'Mutable';
  rulingPlanet: string;
  color: string;
  bgGradient: string;
  badgeBg: string;
  summary: string;
  strengths: string[];
  challenges: string[];
  funFacts: string[];
  compatibleSigns: string[];
  personalityThemes: string;
}

export const ZODIAC_SIGNS: Record<string, ZodiacInfo> = {
  Aries: {
    name: "Aries",
    symbol: "♈",
    unicodeSymbol: "♈",
    dateRange: "March 21 - April 19",
    startMonth: 3,
    startDay: 21,
    endMonth: 4,
    endDay: 19,
    element: "Fire",
    modality: "Cardinal",
    rulingPlanet: "Mars",
    color: "#E85D36",
    bgGradient: "from-coral-100 to-blush-100 dark:from-coral-950/40 dark:to-plum-900/60",
    badgeBg: "bg-coral-100 text-coral-700 dark:bg-coral-950/70 dark:text-coral-300",
    summary: "Bold, ambitious, and pioneering. Aries is known for bringing enthusiasm, energy, and courage to every endeavor.",
    strengths: ["Courageous & Confident", "Determined & Passionate", "Natural Leader", "Enthusiastic Pioneer"],
    challenges: ["Impatient at times", "Can act on impulse", "Prefers fast action over slow waiting"],
    funFacts: [
      "Aries is the first sign of the zodiac wheel, signifying new beginnings and spring renewal.",
      "Ruled by Mars, Aries is historically associated with action, vitality, and initiative."
    ],
    compatibleSigns: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    personalityThemes: "Dynamic, energetic, pioneering spirit who thrives when conquering new goals."
  },
  Taurus: {
    name: "Taurus",
    symbol: "♉",
    unicodeSymbol: "♉",
    dateRange: "April 20 - May 20",
    startMonth: 4,
    startDay: 20,
    endMonth: 5,
    endDay: 20,
    element: "Earth",
    modality: "Fixed",
    rulingPlanet: "Venus",
    color: "#2E7D32",
    bgGradient: "from-emerald-100 to-blush-100 dark:from-emerald-950/40 dark:to-plum-900/60",
    badgeBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300",
    summary: "Grounded, dependable, and appreciative of comfort and beauty. Taurus values loyalty, quality, and consistency.",
    strengths: ["Reliable & Patient", "Practical & Devoted", "Appreciates Craft & Beauty", "Strong-willed"],
    challenges: ["Resistant to sudden change", "Can be persistent to a fault", "Enjoys comfort routines deeply"],
    funFacts: [
      "Ruled by Venus, Taurus loves fine food, nature, sensory comfort, and cozy spaces.",
      "Taurus energy is known for steady focus and finishing projects others leave behind."
    ],
    compatibleSigns: ["Virgo", "Capricorn", "Cancer", "Pisces"],
    personalityThemes: "Grounded, patient builder who creates stability, beauty, and lasting quality."
  },
  Gemini: {
    name: "Gemini",
    symbol: "♊",
    unicodeSymbol: "♊",
    dateRange: "May 21 - June 20",
    startMonth: 5,
    startDay: 21,
    endMonth: 6,
    endDay: 20,
    element: "Air",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    color: "#F59E0B",
    bgGradient: "from-amber-100 to-blush-100 dark:from-amber-950/40 dark:to-plum-900/60",
    badgeBg: "bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-300",
    summary: "Curious, versatile, and expressive. Gemini loves learning new ideas, connecting people, and sharing stories.",
    strengths: ["Adaptable & Quick-witted", "Communicative & Social", "Intellectually Curious", "Versatile"],
    challenges: ["Distracted by too many ideas", "Restless under strict routine", "Prefers breadth over depth"],
    funFacts: [
      "Represented by the Twins, Gemini loves double perspectives, dual hobbies, and lively conversation.",
      "Gemini is ruled by Mercury, the planet of thought, communication, and swift mental agility."
    ],
    compatibleSigns: ["Libra", "Aquarius", "Aries", "Leo"],
    personalityThemes: "Sparkling communicator and lifelong learner driven by curiosity and social warmth."
  },
  Cancer: {
    name: "Cancer",
    symbol: "♋",
    unicodeSymbol: "♋",
    dateRange: "June 21 - July 22",
    startMonth: 6,
    startDay: 21,
    endMonth: 7,
    endDay: 22,
    element: "Water",
    modality: "Cardinal",
    rulingPlanet: "Moon",
    color: "#0284C7",
    bgGradient: "from-sky-100 to-blush-100 dark:from-sky-950/40 dark:to-plum-900/60",
    badgeBg: "bg-sky-100 text-sky-700 dark:bg-sky-950/70 dark:text-sky-300",
    summary: "Intuitive, nurturing, and deeply protective. Cancer values meaningful connections, home, and genuine empathy.",
    strengths: ["Empathetic & Caring", "Highly Intuitive", "Protective Friend", "Creative & Imaginative"],
    challenges: ["Sensitive to surroundings", "Holds onto sentimental memories", "Needs time to recharge"],
    funFacts: [
      "Ruled by the Moon, Cancer energy is deeply connected to natural cycles, moods, and memory.",
      "Cancer excels at creating warm, welcoming spaces where family and friends feel safe."
    ],
    compatibleSigns: ["Scorpio", "Pisces", "Taurus", "Virgo"],
    personalityThemes: "Empathetic protector with strong intuition, emotional depth, and devotion."
  },
  Leo: {
    name: "Leo",
    symbol: "♌",
    unicodeSymbol: "♌",
    dateRange: "July 23 - August 22",
    startMonth: 7,
    startDay: 23,
    endMonth: 8,
    endDay: 22,
    element: "Fire",
    modality: "Fixed",
    rulingPlanet: "Sun",
    color: "#EA580C",
    bgGradient: "from-orange-100 to-blush-100 dark:from-orange-950/40 dark:to-plum-900/60",
    badgeBg: "bg-orange-100 text-orange-700 dark:bg-orange-950/70 dark:text-orange-300",
    summary: "Warm-hearted, charismatic, and generous. Leo shines bright with creative flair, warmth, and joyful leadership.",
    strengths: ["Generous & Warm-hearted", "Charismatic Leader", "Creative & Expressive", "Loyal Friend"],
    challenges: ["Craves appreciation", "Sensitive to criticism", "Can be overly theatrical"],
    funFacts: [
      "Ruled by the Sun, Leo energy brings light, warmth, optimism, and celebration everywhere.",
      "Leo is famous for grand gestures, supporting loved ones fiercely, and artistic talent."
    ],
    compatibleSigns: ["Aries", "Sagittarius", "Gemini", "Libra"],
    personalityThemes: "Charismatic light-bringer who uplifts others with creativity, humor, and generosity."
  },
  Virgo: {
    name: "Virgo",
    symbol: "♍",
    unicodeSymbol: "♍",
    dateRange: "August 23 - September 22",
    startMonth: 8,
    startDay: 23,
    endMonth: 9,
    endDay: 22,
    element: "Earth",
    modality: "Mutable",
    rulingPlanet: "Mercury",
    color: "#059669",
    bgGradient: "from-teal-100 to-blush-100 dark:from-teal-950/40 dark:to-plum-900/60",
    badgeBg: "bg-teal-100 text-teal-700 dark:bg-teal-950/70 dark:text-teal-300",
    summary: "Analytical, helpful, and detail-oriented. Virgo thrives on solving problems, improving systems, and serving others.",
    strengths: ["Analytical & Precise", "Helpful & Reliable", "Practical Organizer", "Attentive Listener"],
    challenges: ["High internal standards", "Overthinks details", "Can worry unnecessarily"],
    funFacts: [
      "Virgo is associated with harvest time, practical wisdom, wellness, and useful solutions.",
      "Virgos often have an eye for subtle details that everyone else misses."
    ],
    compatibleSigns: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    personalityThemes: "Thoughtful organizer and problem solver who turns chaos into elegant clarity."
  },
  Libra: {
    name: "Libra",
    symbol: "♎",
    unicodeSymbol: "♎",
    dateRange: "September 23 - October 22",
    startMonth: 9,
    startDay: 23,
    endMonth: 10,
    endDay: 22,
    element: "Air",
    modality: "Cardinal",
    rulingPlanet: "Venus",
    color: "#D946EF",
    bgGradient: "from-fuchsia-100 to-blush-100 dark:from-fuchsia-950/40 dark:to-plum-900/60",
    badgeBg: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/70 dark:text-fuchsia-300",
    summary: "Harmonious, diplomatic, and artistic. Libra naturally seeks balance, fairness, beauty, and collaborative connection.",
    strengths: ["Diplomatic & Fair-minded", "Social & Charming", "Aesthetic Sense", "Peacemaker"],
    challenges: ["Weighing choices too long", "Avoids confrontation", "Desires universal approval"],
    funFacts: [
      "Libra is the only sign represented by an inanimate object—the Scales of balance.",
      "Ruled by Venus, Libra loves design, music, elegant style, and partnership harmony."
    ],
    compatibleSigns: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    personalityThemes: "Diplomatic ambassador of grace, balance, and aesthetic harmony."
  },
  Scorpio: {
    name: "Scorpio",
    symbol: "♏",
    unicodeSymbol: "♏",
    dateRange: "October 23 - November 21",
    startMonth: 10,
    startDay: 23,
    endMonth: 11,
    endDay: 21,
    element: "Water",
    modality: "Fixed",
    rulingPlanet: "Pluto & Mars",
    color: "#9333EA",
    bgGradient: "from-purple-100 to-blush-100 dark:from-purple-950/40 dark:to-plum-900/60",
    badgeBg: "bg-purple-100 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300",
    summary: "Passionate, perceptive, and focused. Scorpio possesses deep emotional intelligence, loyalty, and transformative strength.",
    strengths: ["Deeply Loyal & Fierce", "Perceptive & Intuitive", "Resilient Leader", "Passionate Focus"],
    challenges: ["Guarded until trust is earned", "Intense focus", "Remembers past hurts"],
    funFacts: [
      "Scorpio is known for extraordinary resilience and ability to rebuild stronger after challenges.",
      "Scorpio excels at reading underlying motivations and finding hidden truths."
    ],
    compatibleSigns: ["Cancer", "Pisces", "Virgo", "Capricorn"],
    personalityThemes: "Perceptive, passionate soul with profound intuition and unshakeable loyalty."
  },
  Sagittarius: {
    name: "Sagittarius",
    symbol: "♐",
    unicodeSymbol: "♐",
    dateRange: "November 22 - December 21",
    startMonth: 11,
    startDay: 22,
    endMonth: 12,
    endDay: 21,
    element: "Fire",
    modality: "Mutable",
    rulingPlanet: "Jupiter",
    color: "#2563EB",
    bgGradient: "from-blue-100 to-blush-100 dark:from-blue-950/40 dark:to-plum-900/60",
    badgeBg: "bg-blue-100 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300",
    summary: "Optimistic, adventurous, and philosophical. Sagittarius loves exploring new horizons, ideas, and freedom.",
    strengths: ["Optimistic & Honest", "Adventurous Spirit", "Philosophical Mind", "Fun-loving"],
    challenges: ["Can be blunt in conversation", "Restless with routine", "Over-promises in excitement"],
    funFacts: [
      "Ruled by Jupiter, the planet of expansion, Sagittarius is often blessed with humor and good luck.",
      "Represented by the Archer, Sagittarius aims high with grand ideas and enthusiasm."
    ],
    compatibleSigns: ["Aries", "Leo", "Libra", "Aquarius"],
    personalityThemes: "Free-spirited adventurer who sees life as an exciting journey of discovery."
  },
  Capricorn: {
    name: "Capricorn",
    symbol: "♑",
    unicodeSymbol: "♑",
    dateRange: "December 22 - January 19",
    startMonth: 12,
    startDay: 22,
    endMonth: 1,
    endDay: 19,
    element: "Earth",
    modality: "Cardinal",
    rulingPlanet: "Saturn",
    color: "#475569",
    bgGradient: "from-slate-200 to-blush-100 dark:from-slate-900/60 dark:to-plum-900/60",
    badgeBg: "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
    summary: "Disciplined, strategic, and ambitious. Capricorn steadily climbs to success through dedication and wisdom.",
    strengths: ["Disciplined & Ambitious", "Strategic & Practical", "Patient Master Builder", "Strong Integrity"],
    challenges: ["Expects perfection from self", "Can be serious", "Finds relaxation difficult"],
    funFacts: [
      "Capricorn is represented by the Sea-Goat, symbolizing mastery over both mountain land and emotional sea.",
      "Capricorns are famous for aging backwards—becoming happier and more playful as they mature."
    ],
    compatibleSigns: ["Taurus", "Virgo", "Scorpio", "Pisces"],
    personalityThemes: "Dedicated builder who combines ambition with wisdom to achieve lasting goals."
  },
  Aquarius: {
    name: "Aquarius",
    symbol: "♒",
    unicodeSymbol: "♒",
    dateRange: "January 20 - February 18",
    startMonth: 1,
    startDay: 20,
    endMonth: 2,
    endDay: 18,
    element: "Air",
    modality: "Fixed",
    rulingPlanet: "Uranus & Saturn",
    color: "#06B6D4",
    bgGradient: "from-cyan-100 to-blush-100 dark:from-cyan-950/40 dark:to-plum-900/60",
    badgeBg: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/70 dark:text-cyan-300",
    summary: "Innovative, visionary, and independent. Aquarius brings original thinking, humanistic values, and fresh ideas.",
    strengths: ["Original & Visionary", "Humanitarian Heart", "Independent Thinker", "Loyal Friend"],
    challenges: ["Independent to a fault", "Detached under emotional stress", "Unconventional routines"],
    funFacts: [
      "Despite the 'Aqua' name, Aquarius is an Air sign bringing ideas, invention, and intellectual waves.",
      "Aquarius is associated with futuristic technology, community empowerment, and original design."
    ],
    compatibleSigns: ["Gemini", "Libra", "Aries", "Sagittarius"],
    personalityThemes: "Visionary thinker who inspires progress and values authentic individuality."
  },
  Pisces: {
    name: "Pisces",
    symbol: "♓",
    unicodeSymbol: "♓",
    dateRange: "February 19 - March 20",
    startMonth: 2,
    startDay: 19,
    endMonth: 3,
    endDay: 20,
    element: "Water",
    modality: "Mutable",
    rulingPlanet: "Neptune & Jupiter",
    color: "#EC4899",
    bgGradient: "from-pink-100 to-blush-100 dark:from-pink-950/40 dark:to-plum-900/60",
    badgeBg: "bg-pink-100 text-pink-700 dark:bg-pink-950/70 dark:text-pink-300",
    summary: "Imaginative, empathetic, and soulful. Pisces is known for deep intuition, artistic talent, and compassion.",
    strengths: ["Creative & Artistic", "Compassionate & Gentle", "Intuitive Visionary", "Generous Soul"],
    challenges: ["Absorbs others' emotions", "Escapes into dreams", "Difficulty saying no"],
    funFacts: [
      "Pisces is the final sign of the zodiac, holding wisdom and empathy from all previous signs.",
      "Ruled by Neptune, Pisces excels in music, visual art, creative writing, and soulful empathy."
    ],
    compatibleSigns: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    personalityThemes: "Imaginative dreamer with infinite heart, artistic grace, and intuitive wisdom."
  }
};

export function getZodiacByDate(month: number, day: number): ZodiacInfo {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return ZODIAC_SIGNS.Aries;
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return ZODIAC_SIGNS.Taurus;
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return ZODIAC_SIGNS.Gemini;
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return ZODIAC_SIGNS.Cancer;
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return ZODIAC_SIGNS.Leo;
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return ZODIAC_SIGNS.Virgo;
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return ZODIAC_SIGNS.Libra;
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return ZODIAC_SIGNS.Scorpio;
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return ZODIAC_SIGNS.Sagittarius;
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return ZODIAC_SIGNS.Capricorn;
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return ZODIAC_SIGNS.Aquarius;
  return ZODIAC_SIGNS.Pisces;
}
