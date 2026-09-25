import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import HeroSection from '@/app/components/HeroSection';
import AudienceSelectorSection from '@/app/components/AudienceSelectorSection';
import MarqueeSection from '@/app/components/MarqueeSection';
import AboutSection from '@/app/components/AboutSection';
import ProductsTeaserSection from '@/app/components/ProductsTeaserSection';
import WhyUsSection from '@/app/components/WhyUsSection';
import CtaBand from '@/app/components/CtaBand';

export const metadata: Metadata = {
  title: 'GPX GAS — Εμπορία και Διανομή Υγραερίου σε Όλη την Ελλάδα',
  description: 'Εμπορία και διανομή προπανίου και υγραερίου για επιχειρήσεις, κατοικίες και μεταπωλητές. Πανελλαδική κάλυψη μέσω δικτύου δεξαμενισμών.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GPX GAS — Υγραέρια Ελλάδος',
    description: 'Προπάνιο, υγραέριο θέρμανσης και κίνησης. Πανελλαδική κάλυψη.',
    url: '/',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'GPX GAS — Υγραέρια Ελλάδος' }],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GPX GAS E.E.',
  alternateName: 'GPX GAS',
  url: 'https://gpxgas.gr',
  telephone: '+306947631338',
  email: 'gpgas2026@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Σαλονικίου 8',
    addressLocality: 'Χαλκίδα',
    postalCode: '34132',
    addressCountry: 'GR',
  },
  areaServed: 'GR',
  description: 'Εμπορία και διανομή υγραερίου με πανελλαδική κάλυψη.',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AudienceSelectorSection />
        <MarqueeSection />
        <AboutSection />
        <ProductsTeaserSection />
        <WhyUsSection />
        <CtaBand />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}