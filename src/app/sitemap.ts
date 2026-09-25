import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://gpxgas.gr';

  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${base}/business`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/households`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/resellers`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${base}/products`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${base}/etaireia`, lastModified: new Date(), priority: 0.6, changeFrequency: 'yearly' },
    { url: `${base}/politiki-aporritou`, lastModified: new Date(), priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/oroi-chrisis`, lastModified: new Date(), priority: 0.3, changeFrequency: 'yearly' },
    { url: `${base}/cookies`, lastModified: new Date(), priority: 0.3, changeFrequency: 'yearly' },
  ];
}