import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import OnThisDateSection from '../../components/discovery/OnThisDateSection';
import { History } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';

export const metadata: Metadata = {
  title: SEO_PAGES.onThisDate.title,
  description: SEO_PAGES.onThisDate.description,
  keywords: SEO_PAGES.onThisDate.keywords,
  alternates: {
    canonical: SEO_PAGES.onThisDate.canonical,
  },
};

export default function OnThisDatePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-800 dark:text-slate-100">
      <Breadcrumbs items={[{ label: 'What Happened On This Date' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold uppercase tracking-wider">
          <History className="w-3.5 h-3.5 text-coral-500" />
          <span>Historical Date Explorer</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-plum-900 dark:text-white tracking-tight font-serif">
          What Happened On <span className="text-coral-500 font-serif">Your Birthday?</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Explore historical events, scientific breakthroughs, and famous birthdays recorded on any date.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <OnThisDateSection />
      </section>
    </div>
  );
}
