'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Users, Calendar } from 'lucide-react';
import { PersonalProfile } from '../../lib/age/types';

interface ContextualExploreProps {
  profile: PersonalProfile;
}

const tools = [
  {
    title: 'Calculate Age On Any Date',
    description: 'Find exactly how old you were or will be on any past or future date.',
    href: '/age-calculator',
    icon: Clock,
  },
  {
    title: 'Compare Ages',
    description: 'Calculate the exact age difference between two people.',
    href: '/age-comparison',
    icon: Users,
  },
  {
    title: 'Date Difference',
    description: 'Find the precise duration in years, months, and days between any two dates.',
    href: '/date-difference',
    icon: Calendar,
  },
];

export default function ContextualExplore({ profile }: ContextualExploreProps) {
  return (
    <div className="space-y-4">
      <div>
        <span className="section-label">Related Tools</span>
        <h3 style={{ color: '#F2F4FB' }} className="text-xl font-extrabold font-serif">
          Explore More With Your Date
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tools.map(({ title, description, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            style={{ backgroundColor: '#161A26', borderColor: '#252A3D' }}
            className="group rounded-2xl p-5 border flex flex-col justify-between gap-4 hover:border-[#E85D36] transition-colors"
          >
            <div className="space-y-2.5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#1D2133', color: '#E85D36' }}>
                <Icon className="w-4 h-4" />
              </div>
              <h4 style={{ color: '#F2F4FB' }} className="font-extrabold font-serif text-base leading-snug group-hover:text-[#E85D36] transition-colors">
                {title}
              </h4>
              <p style={{ color: '#636B8A' }} className="text-xs leading-relaxed">{description}</p>
            </div>

            <div className="flex items-center gap-1 text-xs font-bold pt-3 border-t border-[#252A3D]"
              style={{ color: '#E85D36' }}>
              Use with your date
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
