import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import DateToolsGrid from '../../components/tools/DateToolsGrid';
import { Grid } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';

export const metadata: Metadata = {
  title: SEO_PAGES.dateTools.title,
  description: SEO_PAGES.dateTools.description,
  keywords: SEO_PAGES.dateTools.keywords,
  alternates: {
    canonical: SEO_PAGES.dateTools.canonical,
  },
};

export default function DateToolsHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-800 dark:text-slate-100">
      <Breadcrumbs items={[{ label: 'Date Tools Directory' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold uppercase tracking-wider">
          <Grid className="w-3.5 h-3.5 text-coral-500" />
          <span>Calculators Directory</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-plum-900 dark:text-white tracking-tight font-serif">
          Date & Birthday <span className="text-coral-500 font-serif">Tools Hub</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Explore our complete collection of 100% private, client-side date, age, birthday, and astrology tools.
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <DateToolsGrid />
      </section>
    </div>
  );
}
