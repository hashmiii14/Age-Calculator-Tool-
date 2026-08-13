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
        <h3 style={{ color: '#F2F4FB' }} className="text-lg font-extrabold font-serif">More Tools</h3>
        <span style={{ color: '#636B8A' }} className="text-xs font-medium">Related to your date</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {TOOLS.map(({ href, label, desc, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex flex-col gap-3 p-5 rounded-xl transition-colors"
            style={{ backgroundColor: '#161A26', border: '1px solid #252A3D' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,93,54,0.4)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = '#252A3D')}
          >
            <Icon className="w-5 h-5" style={{ color: '#E85D36' }} />
            <div className="flex-1 space-y-1">
              <p style={{ color: '#F2F4FB' }} className="text-sm font-bold leading-snug">{label}</p>
              <p style={{ color: '#636B8A' }} className="text-xs leading-relaxed">{desc}</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#E85D36' }}>
              Open <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
