import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ContactContent from '@/app/contact/components/ContactContent';

export const metadata: Metadata = {
  title: 'Επικοινωνία — GPX GAS',
  description: 'Επικοινωνήστε με την GPX GAS για προσφορά υγραερίου. Τηλέφωνο: 694 763 1338. Πανελλαδική κάλυψη.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Επικοινωνία | GPX GAS',
    description: 'Ζητήστε προσφορά υγραερίου. Τηλέφωνο: 694 763 1338.',
    url: '/contact',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'GPX GAS — Επικοινωνία' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}