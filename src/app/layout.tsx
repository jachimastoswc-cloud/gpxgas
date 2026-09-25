import React from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';
import ConsentedAnalytics from '@/components/ConsentedAnalytics';

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'GPX GAS — Εμπορία και Διανομή Υγραερίου σε Όλη την Ελλάδα',
  description: 'Εμπορία και διανομή προπανίου και υγραερίου για επιχειρήσεις, κατοικίες και μεταπωλητές. Πανελλαδική κάλυψη μέσω δικτύου δεξαμενισμών.',
  openGraph: {
    title: 'GPX GAS — Υγραέρια Ελλάδος',
    description: 'Προπάνιο και υγραέριο με πανελλαδική κάλυψη.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className={dmSans.variable}>
      <body className={dmSans.className}>
        {children}
        <ConsentedAnalytics />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fgpxgas4348back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.3" /></body>
    </html>
  );
}