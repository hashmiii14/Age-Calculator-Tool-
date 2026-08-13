import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | AgePulse',
  description: 'Terms of Service for using AgePulse age calculator tools.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 text-slate-200">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

      <h1 className="text-3xl font-extrabold text-white tracking-tight font-serif">
        Terms of Service
      </h1>
      <p className="text-xs text-slate-400 font-mono">Last updated: August 13, 2026</p>

      <section className="space-y-4 text-sm leading-relaxed text-slate-300">
        <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
        <p>
          By accessing and using AgePulse (&quot;the Website&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the Website immediately.
        </p>

        <h2 className="text-xl font-bold text-white">2. Use of Services</h2>
        <p>
          AgePulse provides free online chronological age calculation and date difference tools for personal, educational, and informational purposes. You agree to use the Website in compliance with all applicable laws and regulations.
        </p>

        <h2 className="text-xl font-bold text-white">3. Intellectual Property</h2>
        <p>
          The custom code, user interface design, logo, branding, and written documentation on AgePulse are protected by copyright and intellectual property laws. You may not reproduce, clone, or redistribute the Website design without prior written consent.
        </p>

        <h2 className="text-xl font-bold text-white">4. Disclaimer of Warranties</h2>
        <p>
          The Website and its tools are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, express or implied.
        </p>

        <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
        <p>
          In no event shall AgePulse or its operators be liable for any indirect, incidental, or consequential damages resulting from your use of the Website.
        </p>
      </section>
    </div>
  );
}
