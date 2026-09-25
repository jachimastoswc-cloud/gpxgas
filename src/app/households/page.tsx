import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import HouseholdsHero from '@/app/households/components/HouseholdsHero';
import HouseholdsWhyLPG from '@/app/households/components/HouseholdsWhyLPG';
import HouseholdsDelivery from '@/app/households/components/HouseholdsDelivery';
import HouseholdsFAQ from '@/app/households/components/HouseholdsFAQ';
import HouseholdsFormSection from '@/app/households/components/HouseholdsFormSection';
import CtaBand from '@/app/components/CtaBand';

export const metadata: Metadata = {
  title: 'Υγραέριο Θέρμανσης για το Σπίτι — Κατοικίες | GPX GAS',
  description: 'Υγραέριο θέρμανσης για κατοικίες. Προγραμματισμένες και έκτακτες παραδόσεις, πανελλαδική κάλυψη μέσω δικτύου διανομής.',
  alternates: { canonical: '/households' },
  openGraph: {
    title: 'Υγραέριο για Κατοικίες | GPX GAS',
    description: 'Υγραέριο θέρμανσης για το σπίτι. Πανελλαδική κάλυψη.',
    url: '/households',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'GPX GAS — Υγραέριο για Κατοικίες' }],
  },
};

export default function HouseholdsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HouseholdsHero />
        <HouseholdsWhyLPG />
        <HouseholdsDelivery />
        <HouseholdsFAQ />
        <HouseholdsFormSection />
        <CtaBand />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}