export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    trait: 'Explorer' | 'Thinker' | 'Creator' | 'Planner' | 'Connector';
    iconName: string;
  }[];
}

export interface PersonalityArchetype {
  title: string;
  tagline: string;
  badge: string;
  iconName: string;
  bgGradient: string;
  textColor: string;
  description: string;
  superpower: string;
  idealHabitats: string[];
  funQuote: string;
}

export const PERSONALITY_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "When starting a new adventure or project, what is your natural style?",
    options: [
      { text: "Dive right in and explore as I go!", trait: "Explorer", iconName: "Compass" },
      { text: "Research and analyze all details carefully first.", trait: "Thinker", iconName: "Brain" },
      { text: "Brainstorm unique, imaginative ideas.", trait: "Creator", iconName: "Palette" },
      { text: "Build a structured timeline and plan.", trait: "Planner", iconName: "Calendar" },
      { text: "Gather awesome people to do it together!", trait: "Connector", iconName: "Users" }
    ]
  },
  {
    id: "q2",
    question: "How do you recharge your energy best after a long week?",
    options: [
      { text: "Trying a new place, food, or outdoor activity.", trait: "Explorer", iconName: "MapPin" },
      { text: "Reading, learning, or solving puzzles in quiet.", trait: "Thinker", iconName: "BookOpen" },
      { text: "Creating music, art, writing, or cooking.", trait: "Creator", iconName: "Sparkles" },
      { text: "Organizing my space and setting up my upcoming goals.", trait: "Planner", iconName: "CheckSquare" },
      { text: "Hosting friends or catching up with loved ones.", trait: "Connector", iconName: "Heart" }
    ]
  },
  {
    id: "q3",
    question: "What compliment makes you feel most recognized?",
    options: [
      { text: "You're so courageous and full of life!", trait: "Explorer", iconName: "Zap" },
      { text: "You have incredible insight and clarity.", trait: "Thinker", iconName: "Lightbulb" },
      { text: "Your creativity and original vision are inspiring.", trait: "Creator", iconName: "Wand2" },
      { text: "You're amazingly dependable and organized.", trait: "Planner", iconName: "Target" },
      { text: "You bring people together so warmly.", trait: "Connector", iconName: "Smile" }
    ]
  },
  {
    id: "q4",
    question: "When facing a surprise opportunity, what guides your choice?",
    options: [
      { text: "Spontaneity and curiosity for new experiences.", trait: "Explorer", iconName: "Compass" },
      { text: "Logical evaluation of pros, cons, and potential.", trait: "Thinker", iconName: "Scale" },
      { text: "Creative potential and expressing my authentic voice.", trait: "Creator", iconName: "Paintbrush" },
      { text: "How well it aligns with my long-term vision.", trait: "Planner", iconName: "TrendingUp" },
      { text: "How it impacts and connects with the people I care about.", trait: "Connector", iconName: "Users" }
    ]
  }
];

export const PERSONALITY_ARCHETYPES: Record<string, PersonalityArchetype> = {
  Explorer: {
    title: "The Radiant Explorer",
    tagline: "Driven by curiosity, freedom, and new horizons.",
    badge: "Adventure Archetype",
    iconName: "Compass",
    bgGradient: "from-coral-100 to-blush-100 dark:from-coral-950/50 dark:to-plum-900/70",
    textColor: "text-coral-600 dark:text-coral-400",
    description: "You thrive on discovery, spontaneous adventures, and bringing energetic enthusiasm to every path you take.",
    superpower: "Boundless curiosity & adaptability",
    idealHabitats: ["Road trips & new cities", "Hands-on creative experiments", "Dynamic environments"],
    funQuote: "Life is a journey of endless discovery—every date is a new chapter waiting to be written!"
  },
  Thinker: {
    title: "The Deep Thinker",
    tagline: "Guided by clarity, analytical insight, and quiet wisdom.",
    badge: "Intellect Archetype",
    iconName: "Brain",
    bgGradient: "from-purple-100 to-blush-100 dark:from-purple-950/50 dark:to-plum-900/70",
    textColor: "text-purple-600 dark:text-purple-400",
    description: "You have a natural gift for seeing underlying patterns, solving complex problems, and finding elegant clarity.",
    superpower: "Sharp analytical perspective & deep focus",
    idealHabitats: ["Cozy reading corners", "Puzzle & logic challenges", "Thoughtful deep conversations"],
    funQuote: "Knowledge is the real magic—understanding dates, numbers, and stories makes life fascinating!"
  },
  Creator: {
    title: "The Visionary Creator",
    tagline: "Powered by imagination, artistic flair, and original vision.",
    badge: "Artistic Archetype",
    iconName: "Palette",
    bgGradient: "from-pink-100 to-blush-100 dark:from-pink-950/50 dark:to-plum-900/70",
    textColor: "text-pink-600 dark:text-pink-400",
    description: "You see beauty where others see ordinary routines. You bring color, artistic passion, and original voice wherever you go.",
    superpower: "Boundless imagination & artistic expression",
    idealHabitats: ["Design studios & sketchbooks", "Music & aesthetic spaces", "Creative brainstorming"],
    funQuote: "You don't just calculate time—you turn every milestone into a work of art!"
  },
  Planner: {
    title: "The Master Planner",
    tagline: "Anchored by purpose, structured goals, and reliable vision.",
    badge: "Architect Archetype",
    iconName: "Calendar",
    bgGradient: "from-teal-100 to-blush-100 dark:from-teal-950/50 dark:to-plum-900/70",
    textColor: "text-teal-600 dark:text-teal-400",
    description: "You possess the strategic clarity to set meaningful goals, count down to milestones, and turn big dreams into reality step by step.",
    superpower: "Strategic focus & dependable execution",
    idealHabitats: ["Goal trackers & clean workspaces", "Milestone celebrations", "Structured master plans"],
    funQuote: "A milestone calculated is a dream brought one step closer to reality!"
  },
  Connector: {
    title: "The Heartfelt Connector",
    tagline: "Fueled by warmth, empathy, and bringing people together.",
    badge: "Community Archetype",
    iconName: "Heart",
    bgGradient: "from-amber-100 to-blush-100 dark:from-amber-950/50 dark:to-plum-900/70",
    textColor: "text-amber-600 dark:text-amber-400",
    description: "You carry a gift for remembering birthdays, celebrating others' wins, and creating warm spaces where everyone feels valued.",
    superpower: "Empathetic warmth & community joy",
    idealHabitats: ["Birthday countdown parties", "Heartfelt gatherings", "Shared story circles"],
    funQuote: "Dates and birthdays are best when shared—every milestone is a celebration of connection!"
  }
};
