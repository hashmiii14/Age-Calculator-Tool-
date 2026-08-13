import { Metadata } from 'next';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | AgePulse',
  description: 'Understand how AgePulse protects your data privacy with 100% browser-based calculations.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 text-slate-800 dark:text-slate-200">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-xs text-slate-500 font-mono">Last updated: August 13, 2026</p>

      <section className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Client-Side Data Processing</h2>
        <p>
          At AgePulse, your privacy is our highest priority. All date calculations, including your Date of Birth and target date selections, are performed entirely within your web browser using JavaScript. Your birth date is <strong>never transmitted</strong> to our web servers, stored in remote databases, or logged in any server log files.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Local Storage</h2>
        <p>
          We use browser `localStorage` solely to remember your UI display preferences (such as your chosen Light or Dark theme mode). No personally identifiable information or dates of birth are stored in your local storage.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Third-Party Advertising & Cookies</h2>
        <p>
          AgePulse may display advertisements provided by third-party ad networks such as Google AdSense. Third-party vendors use cookies to serve ads based on your prior visits to our website or other websites on the internet.
        </p>
        <p>
          Google’s use of advertising cookies enables it and its partners to serve ads based on your visit to AgePulse and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google Ad Settings (www.google.com/settings/ads).
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Web Analytics</h2>
        <p>
          We may gather non-personally identifiable analytical data (such as page views, browser type, and country of origin) to improve website performance and user experience. Analytical events never include personal birth date values.
        </p>

        <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, please contact us at <strong>support@agepulse.com</strong>.
        </p>
      </section>
    </div>
  );
}
