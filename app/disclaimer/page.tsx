import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Disclaimer | AgePulse',
  description: 'Legal disclaimer regarding age calculation accuracy and intended use.',
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 text-slate-200">
      <Breadcrumbs items={[{ label: 'Disclaimer' }]} />

      <h1 className="text-3xl font-extrabold text-white tracking-tight font-serif">
        Legal Disclaimer
      </h1>
      <p className="text-xs text-slate-400 font-mono">Last updated: August 13, 2026</p>

      <section className="space-y-4 text-sm leading-relaxed text-slate-300">
        <h2 className="text-xl font-bold text-white">1. Informational & Educational Purposes Only</h2>
        <p>
          The tools, calculations, and information provided by AgePulse are for general informational, personal, and educational purposes only. While we apply strict mathematical standards for Gregorian calendar arithmetic, calculations should not be treated as formal legal, medical, financial, or official government documentation.
        </p>

        <h2 className="text-xl font-bold text-white">2. Legal Age Determination</h2>
        <p>
          Specific legal jurisdictions may apply distinct rules regarding legal adulthood, retirement age, driving eligibility, or consent ages (e.g., whether age is reached at midnight on the birthday or the day prior). Always consult official legal authorities or government regulations for binding legal age determinations.
        </p>

        <h2 className="text-xl font-bold text-white">3. Time Zone & Daylight Saving Time</h2>
        <p>
          Calculations are performed using your local browser system clock and local date parameters starting at 00:00:00 local time. AgePulse does not adjust for historical daylight saving time shifts or microsecond leap adjustments.
        </p>
      </section>
    </div>
  );
}
