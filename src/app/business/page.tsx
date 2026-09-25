import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import BusinessHero from '@/app/business/components/BusinessHero';
import BusinessCoverage from '@/app/business/components/BusinessCoverage';
import BusinessSectors from '@/app/business/components/BusinessSectors';
import BusinessProcess from '@/app/business/components/BusinessProcess';
import BusinessFormSection from '@/app/business/components/BusinessFormSection';
import CtaBand from '@/app/components/CtaBand';

export const metadata: Metadata = {
  title: 'Υγραέριο για Επιχειρήσεις — Προπάνιο και Θέρμανση | GPX GAS',
  description: 'Προμήθεια προπανίου και υγραερίου θέρμανσης για επιχειρήσεις κάθε μεγέθους. Εστίαση, βιομηχανία, αγροτικές μονάδες. Πανελλαδική κάλυψη.',
  alternates: { canonical: '/business' },
  openGraph: {
    title: 'Υγραέριο για Επιχειρήσεις | GPX GAS',
    description: 'Προπάνιο και υγραέριο για επαγγελματική χρήση. Πανελλαδική κάλυψη.',
    url: '/business',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'GPX GAS — Υγραέριο για Επιχειρήσεις' }],
  },
};

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <BusinessHero />
        <BusinessCoverage />
        <BusinessSectors />
        <BusinessProcess />
        <BusinessFormSection />
        <CtaBand />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}