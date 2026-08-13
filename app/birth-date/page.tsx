import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import BirthDateDiscoveryCard from '../../components/discovery/BirthDateDiscoveryCard';
import { Sparkles } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';
import { calculateAge } from '../../lib/age/ageEngine';
import { getTodayISODate } from '../../lib/age/dateUtils';

export const metadata: Metadata = {
  title: SEO_PAGES.birthDate.title,
  description: SEO_PAGES.birthDate.description,
  keywords: SEO_PAGES.birthDate.keywords,
  alternates: {
    canonical: SEO_PAGES.birthDate.canonical,
  },
};

export default function BirthDateDiscoveryPage() {
  const sampleResult = calculateAge('2000-03-14', getTodayISODate());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-800 dark:text-slate-100">
      <Breadcrumbs items={[{ label: 'Birth Date Profile' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-coral-500" />
          <span>Birth Date Discovery</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-plum-900 dark:text-white tracking-tight font-serif">
          Your Birth Date <span className="text-coral-500 font-serif">Discovery Profile</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Uncover your birth date story: birthstone, birth flower, season profile, day of the week lore, and calendar position.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <BirthDateDiscoveryCard result={sampleResult} />
      </section>
    </div>
  );
}
