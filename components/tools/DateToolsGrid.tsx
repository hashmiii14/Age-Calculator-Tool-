'use client';

import Link from 'next/link';
import { LucideProps, Clock, Calendar, Heart, Compass, Sparkles, Trophy, History, Users, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Clock, Calendar, Heart, Compass, Sparkles, Trophy, History, Users,
};

const TOOLS = [
  { href: '/age-calculator',     title: 'Exact Age Calculator',       icon: 'Clock',    tag: 'Core'        },
  { href: '/birthday-countdown', title: 'Birthday Countdown',          icon: 'Heart',    tag: 'Popular'     },
  { href: '/zodiac-sign',        title: 'Zodiac Sign Profile',         icon: 'Compass',  tag: 'Astrology'   },
  { href: '/age-comparison',     title: 'Age Comparison',              icon: 'Users',    tag: 'Comparison'  },
  { href: '/date-difference',    title: 'Date Difference',             icon: 'Calendar', tag: 'Calculator'  },
  { href: '/age-milestones',     title: 'Day Milestone Tracker',       icon: 'Trophy',   tag: 'Tracker'     },
];

export default function DateToolsGrid() {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl sm:text-2xl font-extrabold font-serif text-plum-900 dark:text-white">
          Related Tools
        </h2>
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Free & Private</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {TOOLS.map(({ href, title, icon, tag }) => {
          const Icon = ICON_MAP[icon] || Sparkles;
          return (
            <Link
              key={href}
              href={href}
              className="group flex flex-col justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-plum-900 border border-blush-200 dark:border-plum-800 hover:border-coral-400 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-blush-100 dark:bg-plum-800 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-coral-500" />
                </div>
                <span className="text-[10px] font-extrabold text-coral-500 uppercase tracking-wider bg-blush-50 dark:bg-plum-950 px-2 py-0.5 rounded-md border border-blush-200 dark:border-plum-800">{tag}</span>
              </div>

              <p className="text-xs sm:text-sm font-bold text-plum-900 dark:text-white group-hover:text-coral-500 transition-colors">
                {title}
              </p>

              <div className="flex items-center gap-1 text-xs font-bold text-coral-500">
                <span>Try Tool</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

