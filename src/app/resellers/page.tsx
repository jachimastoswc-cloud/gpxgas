import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ResellersHero from '@/app/resellers/components/ResellersHero';
import ResellersInfrastructure from '@/app/resellers/components/ResellersInfrastructure';
import ResellersTargets from '@/app/resellers/components/ResellersTargets';
import ResellersWholesale from '@/app/resellers/components/ResellersWholesale';
import ResellersProcess from '@/app/resellers/components/ResellersProcess';
import ResellersFormSection from '@/app/resellers/components/ResellersFormSection';
import CtaBand from '@/app/components/CtaBand';

export const metadata: Metadata = {
  title: 'Χονδρική Διάθεση Υγραερίου σε Μεταπωλητές | GPX GAS',
  description: 'Χονδρική προμήθεια υγραερίου για μεταπωλητές. Δίκτυο δεξαμενισμών, φόρτωση από διυλιστήρια, πανελλαδική κάλυψη.',
  alternates: { canonical: '/resellers' },
  openGraph: {
    title: 'Υγραέριο Χονδρική — Μεταπωλητές | GPX GAS',
    description: 'Χονδρική διάθεση υγραερίου με δίκτυο δεξαμενισμών και φόρτωση από διυλιστήρια.',
    url: '/resellers',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'GPX GAS — Χονδρική Διάθεση Υγραερίου' }],
  },
};

export default function ResellersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ResellersHero />
        <ResellersInfrastructure />
        <ResellersTargets />
        <ResellersWholesale />
        <ResellersProcess />
        <ResellersFormSection />
        <CtaBand />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}