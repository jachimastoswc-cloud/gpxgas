import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import AppImage from '@/components/ui/AppImage';
import CtaBand from '@/app/components/CtaBand';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Η Εταιρεία — GPX GAS',
  description: 'Γνωρίστε την GPX GAS. Εμπορία και διανομή υγραερίου με πανελλαδική κάλυψη.',
  alternates: { canonical: '/etaireia' }
};

export default function EtaireiaPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <div className="bg-primary py-20 pt-12">
          <div className="max-w-site mx-auto px-4">
            <p className="eyebrow text-white/60 mb-4">Η Εταιρεία</p>
            <h1 className="text-hero-xl text-white mb-4">Η GPX GAS</h1>
            <p className="text-white/70 text-lg max-w-xl">
              Εμπορία και διανομή υγραερίου με πανελλαδική κάλυψη.
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="py-20 bg-background border-b border-border">
          <div className="max-w-site mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <p className="eyebrow text-accent mb-4">Ποιοι είμαστε</p>
                <h2 className="text-3xl md:text-4xl font-700 tracking-tight mb-6" style={{ fontWeight: 700 }}>
                  Υγραέριο για κάθε ανάγκη, σε όλη την Ελλάδα
                </h2>
                <p className="text-base text-muted leading-relaxed mb-6">
                  Η GPX GAS δραστηριοποιείται στην εμπορία και διανομή υγραερίου, με πανελλαδική κάλυψη. Εφοδιάζουμε επιχειρήσεις κάθε μεγέθους, αναπτύσσουμε διαρκώς το δίκτυο διανομής μας για την εξυπηρέτηση κατοικιών και διαθέτουμε υγραέριο χονδρικώς σε μεταπωλητές. Το προπάνιο αποτελεί τον πυρήνα της δραστηριότητάς μας.
                </p>
                <p className="text-base text-muted leading-relaxed mb-8">
                  Το βασικό μας πλεονέκτημα είναι το δίκτυο συνεργαζόμενων δεξαμενισμών σε όλη την Ελλάδα, σε συνδυασμό με τη δυνατότητα φόρτωσης απευθείας από διυλιστήρια. Αυτό μας επιτρέπει να εξυπηρετούμε πελάτες σε κάθε γωνιά της χώρας, χωρίς να απαιτείται ιδιόκτητη υποδομή σε κάθε περιοχή.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="border border-border p-5">
                    <p className="eyebrow text-accent mb-2">Νομική μορφή</p>
                    <p className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>Εταιρεία Ε.Ε.</p>
                  </div>
                  <div className="border border-border p-5">
                    <p className="eyebrow text-accent mb-2">Κάλυψη</p>
                    <p className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>Πανελλαδική</p>
                  </div>
                  <div className="border border-border p-5">
                    <p className="eyebrow text-accent mb-2">ΓΕΜΗ</p>
                    <p className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>191744522000</p>
                  </div>
                  <div className="border border-border p-5">
                    <p className="eyebrow text-accent mb-2">ΑΦΜ</p>
                    <p className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>803192989</p>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary text-sm font-700" style={{ fontWeight: 700 }}>
                  Επικοινωνήστε μαζί μας
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              </div>

              <div className="relative h-80 lg:h-full min-h-72 border border-border overflow-hidden">
                <AppImage
                  src="https://images.unsplash.com/photo-1675583097478-fc4d6c436890"
                  alt="Δεξαμενή υγραερίου — βιομηχανική εγκατάσταση αποθήκευσης προπανίου σε εξωτερικό χώρο"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
                <div className="absolute top-0 left-0 w-12 h-1 bg-accent" />
              </div>
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <CookieBanner />
    </>);

}