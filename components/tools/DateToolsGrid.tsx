'use client';

import Link from 'next/link';
import {
  Clock,
  Calendar,
  Heart,
  Compass,
  Sparkles,
  Trophy,
  History,
  Users,
  Grid,
  ArrowRight
} from 'lucide-react';

export interface ToolItem {
  href: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export const DATE_TOOLS_LIST: ToolItem[] = [
  {
    href: "/age-calculator",
    title: "Exact Age Calculator",
    description: "Calculate years, months, days, total weeks, hours, and seconds with instant client-side precision.",
    iconName: "Clock",
    tag: "Core Utility"
  },
  {
    href: "/birthday-countdown",
    title: "Birthday Countdown",
    description: "Live ticking countdown timer to your next birthday with turning age, weekday, and celebration.",
    iconName: "Heart",
    tag: "Popular"
  },
  {
    href: "/zodiac-sign",
    title: "Western Zodiac Sign Calculator",
    description: "Discover your Western sun sign, element, modality, personality traits, and compatible signs.",
    iconName: "Compass",
    tag: "Astrology"
  },
  {
    href: "/birth-date",
    title: "Birth Date Discovery Profile",
    description: "Uncover your birthstone, birth flower, season profile, weekday lore, and calendar position.",
    iconName: "Sparkles",
    tag: "Discovery"
  },
  {
    href: "/age-milestones",
    title: "Age & Day Milestone Tracker",
    description: "Track your 1,000th, 5,000th, 10,000th day alive and landmark birthday ages.",
    iconName: "Trophy",
    tag: "Tracker"
  },
  {
    href: "/date-difference",
    title: "Date Difference Calculator",
    description: "Find the exact duration in years, months, days, and total hours between any two dates.",
    iconName: "Calendar",
    tag: "Calculator"
  },
  {
    href: "/on-this-date",
    title: "What Happened On This Date?",
    description: "Explore historical events, scientific breakthroughs, and famous birthdays recorded on any date.",
    iconName: "History",
    tag: "History"
  },
  {
    href: "/age-comparison",
    title: "Age Difference & Comparison",
    description: "Compare two dates of birth to calculate exact age difference, who is older, and days apart.",
    iconName: "Users",
    tag: "Comparison"
  }
];

export default function DateToolsGrid() {
  return (
    <div id="date-tools-hub" className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-xl bg-coral-500 text-white flex items-center justify-center font-bold text-xs">
          🛠️
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-plum-900 dark:text-white font-serif tracking-tight">
            Date & Birthday Tools Hub
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Free client-side date, age, birthday, and astrology tools
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DATE_TOOLS_LIST.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group p-5 rounded-3xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 shadow-sm hover:shadow-cute transition-all hover:-translate-y-1 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-2xl bg-blush-100 dark:bg-plum-800 text-coral-500 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blush-50 dark:bg-plum-950 text-[10px] font-extrabold text-coral-600 dark:text-coral-300 border border-blush-100 dark:border-plum-800">
                  {tool.tag}
                </span>
              </div>

              <h3 className="font-serif font-extrabold text-base text-plum-900 dark:text-white group-hover:text-coral-500 transition-colors">
                {tool.title}
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {tool.description}
              </p>
            </div>

            <div className="flex items-center space-x-1 text-xs font-extrabold text-coral-500 pt-2 border-t border-blush-100 dark:border-plum-800/60">
              <span>Open Tool</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
