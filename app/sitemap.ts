import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.agepulse.site';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    '',
    '/age-calculator',
    '/date-difference',
    '/birthday-countdown',
    '/zodiac-sign',
    '/birth-date',
    '/age-milestones',
    '/on-this-date',
    '/age-comparison',
    '/date-tools',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route.includes('calculator') || route.includes('birthday') ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/age-') || route === '/zodiac-sign' || route === '/birth-date' ? 0.9 : 0.6,
  }));
}
