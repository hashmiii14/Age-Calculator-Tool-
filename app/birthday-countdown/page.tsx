import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import BirthdayCountdown from '../../components/age-calculator/BirthdayCountdown';
import DateToolsGrid from '../../components/tools/DateToolsGrid';
import { Heart, Gift } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';

export const metadata: Metadata = {
  title: SEO_PAGES.birthdayCountdown.title,
  description: SEO_PAGES.birthdayCountdown.description,
  keywords: SEO_PAGES.birthdayCountdown.keywords,
  alternates: {
    canonical: SEO_PAGES.birthdayCountdown.canonical,
  },
};

export default function BirthdayCountdownPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-purpleText-900 dark:text-purpleText-100">
      <Breadcrumbs items={[{ label: 'Birthday Countdown' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-pinkPastel-100 dark:bg-purpleText-800 text-pinkPastel-600 dark:text-pinkPastel-300 text-xs font-extrabold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-pinkPastel-500 fill-pinkPastel-500" />
          <span>Live Birthday Countdown</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-purpleText-900 dark:text-white tracking-tight font-serif">
          Birthday Countdown & <span className="text-pinkPastel-500 font-serif">Dashboard</span>
        </h1>

        <p className="text-base sm:text-lg text-purpleText-600 dark:text-purpleText-300 max-w-xl mx-auto font-medium">
          Track the live ticking countdown to your next birthday with turning age, day of the week, and confetti celebration.
        </p>
      </section>

      {/* Main Birthday Countdown Component (loads DOB from localStorage/input) */}
      <section className="max-w-4xl mx-auto">
        <BirthdayCountdown />
      </section>

      {/* Secondary Tools */}
      <section className="pt-4 border-t border-pinkPastel-200 dark:border-purpleText-800">
        <DateToolsGrid />
      </section>
    </div>
  );
}
