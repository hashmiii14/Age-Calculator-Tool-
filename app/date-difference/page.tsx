import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import DateDifferenceCalculator from '../../components/age-calculator/DateDifferenceCalculator';
import { Clock, Sparkles } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';

export const metadata: Metadata = {
  title: SEO_PAGES.dateDifference.title,
  description: SEO_PAGES.dateDifference.description,
  keywords: SEO_PAGES.dateDifference.keywords,
  alternates: {
    canonical: SEO_PAGES.dateDifference.canonical,
  },
};

export default function DateDifferencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-800 dark:text-slate-100">
      <Breadcrumbs items={[{ label: 'Date Difference Calculator' }]} />

      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-coral-500" />
          <span>Duration Between Dates</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-plum-900 dark:text-white tracking-tight font-serif">
          Date Difference <span className="text-coral-500 font-serif">Calculator</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Calculate the exact duration between any two dates in years, months, days, total weeks, and hours.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <DateDifferenceCalculator />
      </section>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto py-8 space-y-6 text-slate-600 dark:text-slate-300">
        <h2 className="text-2xl font-extrabold text-plum-900 dark:text-white font-serif">
          How to Calculate Date Differences
        </h2>
        <p className="leading-relaxed text-sm">
          Calculating the exact duration between two dates requires evaluating calendar months with varying day counts (28 to 31 days) and leap years. AgePulse subtracts the start date from the end date using strict chronological adjustments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-plum-900 p-5 rounded-3xl border border-blush-200 dark:border-plum-800 shadow-sm space-y-2">
            <h3 className="font-extrabold text-plum-900 dark:text-white font-serif">Common Applications</h3>
            <ul className="text-xs space-y-1.5 text-slate-500 dark:text-slate-400 list-disc list-inside">
              <li>Project milestones and deadline tracking</li>
              <li>Employment tenure and service duration</li>
              <li>Relationship anniversaries and event planning</li>
              <li>Age difference between two people</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-plum-900 p-5 rounded-3xl border border-blush-200 dark:border-plum-800 shadow-sm space-y-2">
            <h3 className="font-extrabold text-plum-900 dark:text-white font-serif">Calculation Method</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Computes calendar years, months, and days first, then translates total elapsed duration into total days, weeks, hours, minutes, and seconds.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
