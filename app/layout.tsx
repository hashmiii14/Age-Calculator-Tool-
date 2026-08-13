import type { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Age Calculator – Calculate Your Exact Age | AgePulse',
  description:
    'Calculate your exact age in years, months, days, weeks, hours, and seconds. Find your age on any date, birthday countdown, and age between two dates with AgePulse.',
  keywords: [
    'age calculator',
    'calculate age',
    'exact age calculator',
    'how old am I',
    'age in years months days',
    'age calculator by date of birth',
    'birthday countdown',
    'age between two dates',
  ],
  authors: [{ name: 'AgePulse' }],
  creator: 'AgePulse',
  publisher: 'AgePulse',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://agepulse.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Age Calculator – Calculate Your Exact Age | AgePulse',
    description:
      'Calculate your exact chronological age in years, months, days, and total hours lived. Fast, accurate, 100% private.',
    url: 'https://agepulse.vercel.app',
    siteName: 'AgePulse',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Age Calculator – Calculate Your Exact Age | AgePulse',
    description:
      'Calculate your exact age in years, months, days and total hours. 100% free & private client-side calculator.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AgePulse',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://agepulse.vercel.app',
    description: 'Free precision age calculator and date difference tool.',
  };

  const jsonLdWebApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AgePulse Age Calculator',
    operatingSystem: 'All',
    applicationCategory: 'UtilityApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
