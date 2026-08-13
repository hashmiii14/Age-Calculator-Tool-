import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | AgePulse',
  description: 'Read the terms of service for using the AgePulse web application.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 text-slate-800 dark:text-slate-200">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Terms of Service
      </h1>
      <p className="text-xs text-slate-500 font-mono">Last updated: August 13, 2026</p>

      <section className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Agreement to Terms</h2>
        <p>
          By accessing and using AgePulse (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Acceptable Use</h2>
        <p>
          AgePulse provides free online age and date calculation tools for personal and informational use. You agree not to misuse the website, attempt to compromise site security, or deploy automated bots that disrupt service availability for others.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Intellectual Property</h2>
        <p>
          All source code, branding, logo designs, educational text, and component layouts are the property of AgePulse. You may not clone, scrape, or reproduce the website branding without prior written consent.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Changes to Service</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any portion of the Website at any time without prior notice.
        </p>
      </section>
    </div>
  );
}
