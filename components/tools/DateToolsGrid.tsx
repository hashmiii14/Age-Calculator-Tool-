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
  { href: '/birth-date',         title: 'Birth Date Profile',          icon: 'Sparkles', tag: 'Discovery'   },
  { href: '/age-milestones',     title: 'Day Milestone Tracker',       icon: 'Trophy',   tag: 'Tracker'     },
  { href: '/date-difference',    title: 'Date Difference',             icon: 'Calendar', tag: 'Calculator'  },
  { href: '/on-this-date',       title: 'On This Date',                icon: 'History',  tag: 'History'     },
  { href: '/age-comparison',     title: 'Age Comparison',              icon: 'Users',    tag: 'Comparison'  },
];

export default function DateToolsGrid() {
  return (
    <div className="space-y-5">

      <div className="flex items-baseline gap-3">
        <h2 style={{ color: '#F2F4FB' }} className="text-2xl font-extrabold font-serif">All Tools</h2>
        <span style={{ color: '#636B8A' }} className="text-sm">Free · Client-side · No account needed</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {TOOLS.map(({ href, title, icon, tag }) => {
          const Icon = ICON_MAP[icon] || Sparkles;
          return (
            <Link
              key={href}
              href={href}
              className="group flex flex-col gap-4 p-4 sm:p-5 rounded-xl transition-colors"
              style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,93,54,0.4)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#252A3D'; }}
            >
              {/* Top row: icon + tag */}
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1D2133' }}>
                  <Icon className="w-4 h-4" style={{ color: '#E85D36' }} />
                </div>
                <span style={{ color: '#636B8A' }} className="text-[10px] font-semibold">{tag}</span>
              </div>

              {/* Title */}
              <p style={{ color: '#F2F4FB' }} className="text-sm font-bold leading-snug group-hover:text-[#E85D36] transition-colors">
                {title}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-xs font-medium" style={{ color: '#636B8A' }}>
                Open <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
