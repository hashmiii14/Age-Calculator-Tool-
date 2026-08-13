import { Calendar, PartyPopper } from 'lucide-react';
import { UpcomingBirthday } from '../../lib/age/types';

interface NextFiveBirthdaysProps {
  birthdays: UpcomingBirthday[];
}

export default function NextFiveBirthdays({ birthdays }: NextFiveBirthdaysProps) {
  if (!birthdays || birthdays.length === 0) return null;

  return (
    <div className="w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white space-y-6">
      <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
        <div className="w-10 h-10 rounded-2xl bg-orange-950/60 border border-orange-900/50 flex items-center justify-center text-orange-400">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Your Next 5 Birthdays
          </h3>
          <p className="text-xs text-slate-400">
            Upcoming calendar dates, weekdays, and turning ages for the next 5 years
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-120">
          <thead>
            <tr className="border-b border-slate-800 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <th className="py-3 px-4">Year</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Weekday</th>
              <th className="py-3 px-4 text-right">Turning Age</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm">
            {birthdays.map((bday, idx) => (
              <tr
                key={bday.year}
                className={`transition-colors ${
                  idx === 0
                    ? 'bg-orange-950/40 font-semibold text-orange-200'
                    : 'hover:bg-slate-800/40 text-slate-200'
                }`}
              >
                <td className="py-3.5 px-4 font-mono font-bold">{bday.year}</td>
                <td className="py-3.5 px-4 font-medium">{bday.formattedDate}</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300">
                    {bday.weekday}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right font-mono font-black text-orange-400">
                  {bday.turningAge} Yrs
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
