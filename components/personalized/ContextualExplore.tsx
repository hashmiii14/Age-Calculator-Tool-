'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Users, Calendar, Sparkles } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface ContextualExploreProps {
  profile: PersonalProfile;
}

export default function ContextualExplore({ profile }: ContextualExploreProps) {
  const tools = [
    {
      title: 'Calculate Past or Future Age',
      description: `See how old you will be on a future date or were on a past milestone date.`,
      href: '/age-calculator',
      icon: Clock,
    },
    {
      title: 'Compare Ages With Someone',
      description: `Compare your birth date (${profile.formattedDOB}) with a friend, sibling, or partner.`,
      href: '/age-comparison',
      icon: Users,
    },
    {
      title: 'Calculate Date Duration',
      description: `Find the exact years, months, and days between two arbitrary dates.`,
      href: '/date-difference',
      icon: Calendar,
    },
  ];

  return (
    <div className="space-y-4 pt-2">
      <div className="flex items-center space-x-2">
        <Sparkles className="w-4 h-4 text-coral-500" />
        <h3 className="text-lg font-serif font-extrabold text-slate-900 dark:text-white">
          Contextual Tools For Your Date
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map((t) => {
          const Icon = t.icon;
          return (
            <Link
              key={t.href}
              href={t.href}
              className="group p-5 rounded-3xl bg-white dark:bg-[#1A1A1E] border border-slate-200 dark:border-zinc-800 shadow-subtle hover:border-coral-300 dark:hover:border-coral-700 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-zinc-800 text-coral-500 flex items-center justify-center font-bold">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-extrabold text-slate-900 dark:text-white text-base group-hover:text-coral-500 transition-colors">
                  {t.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="flex items-center space-x-1 text-xs font-extrabold text-coral-500 pt-2 border-t border-slate-100 dark:border-zinc-800/80">
                <span>Use with your date</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
