import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import AgeComparisonTool from '../../components/age-calculator/AgeComparisonTool';
import { Users } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';

export const metadata: Metadata = {
  title: SEO_PAGES.ageComparison.title,
  description: SEO_PAGES.ageComparison.description,
  keywords: SEO_PAGES.ageComparison.keywords,
  alternates: {
    canonical: SEO_PAGES.ageComparison.canonical,
  },
};

export default function AgeComparisonPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-800 dark:text-slate-100">
      <Breadcrumbs items={[{ label: 'Age Comparison Tool' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold uppercase tracking-wider">
          <Users className="w-3.5 h-3.5 text-coral-500" />
          <span>Compare Two Ages</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-plum-900 dark:text-white tracking-tight font-serif">
          Age Comparison & <span className="text-coral-500 font-serif">Difference Tool</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Compare two birth dates to see who is older, exact age gap in years, months, days, and total days apart.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <AgeComparisonTool />
      </section>
    </div>
  );
}
