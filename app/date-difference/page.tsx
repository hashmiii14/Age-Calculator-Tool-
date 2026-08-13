import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import DateDifferenceCalculator from '../../components/age-calculator/DateDifferenceCalculator';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Date Difference Calculator – Duration Between Two Dates | AgePulse',
  description:
    'Calculate the exact duration between any start date and end date in years, months, days, total weeks, hours, and minutes. Free online date duration tool.',
  alternates: {
    canonical: '/date-difference',
  },
};

export default function DateDifferencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-200">
      <Breadcrumbs items={[{ label: 'Date Difference Calculator' }]} />

      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-900/60 text-orange-300 text-xs font-semibold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-orange-400" />
          <span>Duration Between Dates</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
          Date Difference <span className="text-orange-400 font-serif">Calculator</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
          Calculate the exact time span between any two dates in years, months, days, total weeks, and hours.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <DateDifferenceCalculator />
      </section>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto py-8 space-y-6 text-slate-300">
        <h2 className="text-2xl font-bold text-white">
          How to Calculate Date Differences
        </h2>
        <p className="leading-relaxed">
          Calculating the exact duration between two dates requires evaluating calendar months with varying day counts (28 to 31 days) and leap years. AgePulse subtracts the start date from the end date using strict chronological adjustments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="font-bold text-white mb-1">Common Applications</h3>
            <ul className="text-xs space-y-1.5 text-slate-400 list-disc list-inside">
              <li>Project milestones and deadline tracking</li>
              <li>Employment tenure and service duration</li>
              <li>Relationship anniversaries and event planning</li>
              <li>Age difference between two people</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="font-bold text-white mb-1">Calculation Method</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Computes calendar years, months, and days first, then translates total elapsed duration into total days, weeks, hours, minutes, and seconds.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
