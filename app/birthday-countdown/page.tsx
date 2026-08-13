import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import BirthdayCountdown from '../../components/age-calculator/BirthdayCountdown';
import { Heart } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';
import { calculateNextBirthday } from '../../lib/age/ageEngine';
import { getTodayISODate } from '../../lib/age/dateUtils';

export const metadata: Metadata = {
  title: SEO_PAGES.birthdayCountdown.title,
  description: SEO_PAGES.birthdayCountdown.description,
  keywords: SEO_PAGES.birthdayCountdown.keywords,
  alternates: {
    canonical: SEO_PAGES.birthdayCountdown.canonical,
  },
};

export default function BirthdayCountdownPage() {
  const sampleNextBirthday = calculateNextBirthday('2000-08-15', getTodayISODate());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-800 dark:text-slate-100">
      <Breadcrumbs items={[{ label: 'Birthday Countdown' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-coral-500 fill-coral-500" />
          <span>Live Birthday Countdown</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-plum-900 dark:text-white tracking-tight font-serif">
          Birthday Countdown & <span className="text-coral-500 font-serif">Dashboard</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Track the live ticking countdown to your next birthday with turning age, day of the week, and confetti celebration.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <BirthdayCountdown nextBirthday={sampleNextBirthday} />
      </section>
    </div>
  );
}
