import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function ResellersHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden" aria-label="Χονδρική διάθεση υγραερίου σε μεταπωλητές">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_4fe1284c5-1789724431537.png"
          alt="Βιομηχανικές εγκαταστάσεις αποθήκευσης — δεξαμενές υγραερίου σε λιμενική εγκατάσταση"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/92" />
        {/* Reseller accent strip — amber */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--accent-reseller)' }} />
      </div>

      <div className="relative z-10 max-w-site mx-auto px-4 w-full pb-0">
        <div className="max-w-2xl pt-36 pb-16">
          <p className="eyebrow text-white/60 mb-4">Για Μεταπωλητές</p>
          <h1 className="text-hero-xl text-white mb-6">
            Χονδρική διάθεση υγραερίου σε μεταπωλητές
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-10 font-medium">
            Αξιοποιούμε το δίκτυο συνεργαζόμενων δεξαμενισμών μας και τη δυνατότητα φόρτωσης από διυλιστήρια, για σταθερή τροφοδοσία μεταπωλητών σε όλη την Ελλάδα.
          </p>
          <Link
            href="/contact?variant=reseller"
            className="btn-primary text-sm font-700"
            style={{ fontWeight: 700, backgroundColor: 'var(--accent-reseller)', borderColor: 'var(--accent-reseller)' }}>
            
            Ζητήστε τιμοκατάλογο χονδρικής
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>);

}