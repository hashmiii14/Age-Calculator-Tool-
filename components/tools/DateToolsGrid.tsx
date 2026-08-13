'use client';

import Link from 'next/link';
import { Clock, Calendar, Heart, Compass, Sparkles, Trophy, History, Users, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Clock, Calendar, Heart, Compass, Sparkles, Trophy, History, Users,
};

const TOOLS = [
  { href: '/age-calculator',     title: 'Exact Age Calculator',        description: 'Years, months, days, total weeks, hours, and seconds.',          icon: 'Clock',    tag: 'Core Tool'    },
  { href: '/birthday-countdown', title: 'Birthday Countdown',           description: 'Live countdown to your next birthday with turning age.',          icon: 'Heart',    tag: 'Popular'      },
  { href: '/zodiac-sign',        title: 'Western Zodiac Sign',          description: 'Sun sign, element, modality, traits, and compatible signs.',      icon: 'Compass',  tag: 'Astrology'    },
  { href: '/birth-date',         title: 'Birth Date Profile',           description: 'Birthstone, birth flower, season, weekday lore.',                 icon: 'Sparkles', tag: 'Discovery'    },
  { href: '/age-milestones',     title: 'Age & Day Milestone Tracker',  description: '1,000th, 5,000th, 10,000th day alive and landmark ages.',         icon: 'Trophy',   tag: 'Tracker'      },
  { href: '/date-difference',    title: 'Date Difference Calculator',   description: 'Exact duration in years, months, days between any two dates.',    icon: 'Calendar', tag: 'Calculator'   },
  { href: '/on-this-date',       title: 'On This Date',                 description: 'Historical events and famous birthdays for any date.',            icon: 'History',  tag: 'History'      },
  { href: '/age-comparison',     title: 'Age Comparison',               description: 'Compare two birth dates — exact age gap and who is older.',       icon: 'Users',    tag: 'Comparison'   },
];

export default function DateToolsGrid() {
  return (
    <div className="space-y-5">
      <div>
        <span className="section-label">Date & Age Calculators</span>
        <h2 style={{ color: '#F2F4FB' }} className="text-2xl sm:text-3xl font-extrabold font-serif tracking-tight">
          All Tools
        </h2>
        <p style={{ color: '#636B8A' }} className="text-sm mt-1">Free, client-side date, age, birthday, and astrology calculators.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOOLS.map(({ href, title, description, icon, tag }) => {
          const Icon = ICON_MAP[icon] || Sparkles;
          return (
            <Link
              key={href}
              href={href}
              style={{ backgroundColor: '#161A26', borderColor: '#252A3D' }}
              className="group rounded-2xl p-5 border flex flex-col justify-between gap-4 hover:border-[#E85D36] transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#1D2133', color: '#E85D36' }}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(232,93,54,0.08)', color: '#F87B4E', border: '1px solid rgba(232,93,54,0.15)' }}>
                    {tag}
                  </span>
                </div>

                <h3 style={{ color: '#F2F4FB' }} className="font-extrabold font-serif text-sm leading-snug group-hover:text-[#E85D36] transition-colors">
                  {title}
                </h3>

                <p style={{ color: '#636B8A' }} className="text-xs leading-relaxed line-clamp-2">{description}</p>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold pt-3 border-t border-[#252A3D]"
                style={{ color: '#E85D36' }}>
                Open Tool
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
