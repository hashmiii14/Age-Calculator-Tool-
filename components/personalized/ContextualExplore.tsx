'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Users, Calendar } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface ContextualExploreProps {
  profile: PersonalProfile;
}

const TOOLS = [
  {
    href: '/age-calculator',
    label: 'Age On Any Date',
    desc: 'How old were you or will you be on a specific date?',
    icon: Clock,
  },
  {
    href: '/age-comparison',
    label: 'Compare Ages',
    desc: 'Find the exact age difference between you and someone else.',
    icon: Users,
  },
  {
    href: '/date-difference',
    label: 'Date Difference',
    desc: 'Exact duration between any two calendar dates.',
    icon: Calendar,
  },
];

export default function ContextualExplore({ profile }: ContextualExploreProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-3">
        <h3 className="text-lg font-extrabold font-serif text-plum-900 dark:text-white">More Tools</h3>
        <span className="text-xs font-bold text-coral-500">Related to your date</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {TOOLS.map(({ href, label, desc, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-3 p-5 rounded-3xl bg-white dark:bg-plum-900 border-2 border-blush-200 dark:border-plum-800 shadow-cute hover:border-coral-400 transition-all cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-blush-100 dark:bg-plum-800 flex items-center justify-center text-coral-500 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-bold text-plum-900 dark:text-white leading-snug">{label}</p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{desc}</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-extrabold text-coral-500">
              <span>Open Tool</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

