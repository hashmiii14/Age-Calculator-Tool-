import { Metadata } from 'next';
import HomePage from '../page';

export const metadata: Metadata = {
  title: 'Age Calculator by Date of Birth – Free Exact Age Tool | AgePulse',
  description:
    'Calculate your exact age from date of birth in years, months, days, total weeks, and hours. Fast, accurate, and completely private.',
  alternates: {
    canonical: '/age-calculator',
  },
};

export default function AgeCalculatorPage() {
  return <HomePage />;
}
