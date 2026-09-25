import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import ProductsHero from '@/app/products/components/ProductsHero';
import ProductsPropane from '@/app/products/components/ProductsPropane';
import ProductsMix from '@/app/products/components/ProductsMix';
import ProductsAutogas from '@/app/products/components/ProductsAutogas';
import CtaBand from '@/app/components/CtaBand';

export const metadata: Metadata = {
  title: 'Προϊόντα Υγραερίου — Προπάνιο, Θέρμανση, Autogas | GPX GAS',
  description: 'Προπάνιο, μείγμα προπανίου-βουτανίου για θέρμανση και υγραέριο κίνησης. Πανελλαδική διανομή από την GPX GAS.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Προϊόντα Υγραερίου | GPX GAS',
    description: 'Προπάνιο, υγραέριο θέρμανσης και κίνησης. Πανελλαδική κάλυψη.',
    url: '/products',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630, alt: 'GPX GAS — Προϊόντα Υγραερίου' }],
  },
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ProductsHero />
        <ProductsPropane />
        <ProductsMix />
        <ProductsAutogas />
        <CtaBand />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}