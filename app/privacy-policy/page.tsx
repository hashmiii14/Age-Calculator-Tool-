import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | AgePulse',
  description: 'Understand how AgePulse protects your data privacy with browser-based calculations and transparent policies.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 text-purpleText-900 dark:text-purpleText-100">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="space-y-2 border-b border-pinkPastel-200 dark:border-purpleText-800 pb-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purpleText-900 dark:text-white tracking-tight font-serif">
          Privacy Policy
        </h1>
        <p className="text-xs text-purpleText-500 font-mono">Last updated: August 16, 2026</p>
      </div>

      <div className="bg-white dark:bg-purpleText-900 rounded-3xl p-6 sm:p-8 border-2 border-pinkPastel-200 dark:border-purpleText-800 shadow-cute space-y-6 text-sm leading-relaxed text-purpleText-700 dark:text-purpleText-300">
        <section className="space-y-2">
          <h2 className="text-xl font-black font-serif text-purpleText-900 dark:text-white">1. Client-Side Date Calculations</h2>
          <p>
            At AgePulse, date calculations (including Date of Birth and target calculation dates) are computed directly inside your web browser using client-side JavaScript. Your Date of Birth inputs are not transmitted to or stored in any remote AgePulse database.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-black font-serif text-purpleText-900 dark:text-white">2. Local Storage Usage</h2>
          <p>
            To provide a smooth user experience, AgePulse may save your entered Date of Birth locally in your browser&apos;s <code className="bg-pinkPastel-100 dark:bg-purpleText-800 px-1.5 py-0.5 rounded text-pinkPastel-600 dark:text-pinkPastel-300 font-mono text-xs">localStorage</code> so that your countdowns and milestones remain available when you return. You can clear this saved data anytime using the &ldquo;Clear Saved Data&rdquo; button in the site footer.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-black font-serif text-purpleText-900 dark:text-white">3. Third-Party Advertising & Cookies</h2>
          <p>
            AgePulse may integrate advertising networks such as Google AdSense to support free access to our tools. Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites on the Internet.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to AgePulse and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-pinkPastel-500 font-bold hover:underline">Google Ad Settings</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-black font-serif text-purpleText-900 dark:text-white">4. Hosting & Analytics</h2>
          <p>
            Like most websites, our hosting provider, content delivery networks (CDNs), and standard analytics tools automatically process standard web logs (such as IP address, browser user-agent, referring URL, and page request timestamps) for security, performance diagnostics, and traffic measurement. These standard technical logs do not contain your entered birth date values.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-black font-serif text-purpleText-900 dark:text-white">5. Contact Information</h2>
          <p>
            If you have questions or feedback regarding this Privacy Policy or data privacy on AgePulse, please contact us by email at{' '}
            <a href="mailto:mdhashmi955@gmail.com" className="text-pinkPastel-500 font-bold hover:underline">
              mdhashmi955@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
