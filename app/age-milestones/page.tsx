import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import AgeMilestoneTimeline from '../../components/age-calculator/AgeMilestoneTimeline';
import { Trophy } from 'lucide-react';
import { SEO_PAGES } from '../../lib/data/seoData';
import { calculateAge } from '../../lib/age/ageEngine';
import { getTodayISODate } from '../../lib/age/dateUtils';

export const metadata: Metadata = {
  title: SEO_PAGES.ageMilestones.title,
  description: SEO_PAGES.ageMilestones.description,
  keywords: SEO_PAGES.ageMilestones.keywords,
  alternates: {
    canonical: SEO_PAGES.ageMilestones.canonical,
  },
};

export default function AgeMilestonesPage() {
  const sampleResult = calculateAge('2000-01-01', getTodayISODate());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 text-slate-800 dark:text-slate-100">
      <Breadcrumbs items={[{ label: 'Age & Life Milestones' }]} />

      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blush-100 dark:bg-plum-800 text-coral-600 dark:text-coral-300 text-xs font-extrabold uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5 text-coral-500" />
          <span>Lifetime Milestone Tracker</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-plum-900 dark:text-white tracking-tight font-serif">
          Life & Age <span className="text-coral-500 font-serif">Milestones Tracker</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-medium">
          Discover when you reach 1,000, 5,000, 10,000, or 20,000 days alive and track upcoming landmark birthday ages.
        </p>
      </section>

      <section className="max-w-4xl mx-auto">
        <AgeMilestoneTimeline
          milestones={sampleResult.milestones}
          nextBigDay={sampleResult.nextBigDay}
          timeline={sampleResult.timeline}
          nextMajorMilestone={sampleResult.nextMajorMilestone}
        />
      </section>
    </div>
  );
}
