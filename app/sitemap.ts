import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agepulse.vercel.app';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    '',
    '/age-calculator',
    '/date-difference',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/age-calculator' || route === '/date-difference' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : route === '/age-calculator' || route === '/date-difference' ? 0.9 : 0.5,
  }));
}
