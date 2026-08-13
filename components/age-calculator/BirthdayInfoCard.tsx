import { Calendar, Compass, UserCheck, Sparkles } from 'lucide-react';
import { AgeResult } from '../../lib/age/types';

interface BirthdayInfoCardProps {
  result: AgeResult;
}

export default function BirthdayInfoCard({ result }: BirthdayInfoCardProps) {
  const infoItems = [
    {
      icon: Calendar,
      title: 'Date of Birth',
      value: result.formattedDOB,
      subtitle: `Born on a ${result.dobWeekday}`,
      color: 'text-blue-400 bg-blue-950/60 border-blue-900/50',
    },
    {
      icon: Sparkles,
      title: 'Next Birthday',
      value: result.nextBirthday.formattedDate,
      subtitle: `${result.nextBirthday.weekday} • ${result.nextBirthday.daysRemaining} days away`,
      color: 'text-amber-400 bg-amber-950/60 border-amber-900/50',
    },
    {
      icon: UserCheck,
      title: 'Turning Age',
      value: `${result.nextBirthday.turningAge} Years Old`,
      subtitle: `On next birthday`,
      color: 'text-purple-400 bg-purple-950/60 border-purple-900/50',
    },
    {
      icon: Compass,
      title: 'Zodiac Sign',
      value: result.zodiacSign,
      subtitle: result.isLeapYearDOB ? 'Leap Year Birth' : 'Standard Year Birth',
      color: 'text-emerald-400 bg-emerald-950/60 border-emerald-900/50',
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {infoItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-2xl transition-all hover:border-slate-700"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${item.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {item.title}
              </span>
            </div>
            <p className="text-base font-bold text-white leading-tight">
              {item.value}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}
