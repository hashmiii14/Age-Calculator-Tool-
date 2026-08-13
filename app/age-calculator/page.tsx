import { Metadata } from 'next';
import HomePage from '../page';
import { SEO_PAGES } from '../../lib/data/seoData';

export const metadata: Metadata = {
  title: SEO_PAGES.ageCalculator.title,
  description: SEO_PAGES.ageCalculator.description,
  keywords: SEO_PAGES.ageCalculator.keywords,
  alternates: {
    canonical: SEO_PAGES.ageCalculator.canonical,
  },
};

export default function AgeCalculatorPage() {
  return <HomePage />;
}
