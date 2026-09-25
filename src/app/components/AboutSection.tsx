import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function AboutSection() {
  return (
    <section className="py-20 bg-background" aria-label="Σχετικά με την GPX GAS">
      <div className="max-w-site mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="eyebrow text-accent mb-4">Η GPX GAS</p>
            <h2 className="text-3xl md:text-4xl font-700 tracking-tight mb-6" style={{ fontWeight: 700 }}>
              Υγραέριο για κάθε ανάγκη,<br />σε όλη την Ελλάδα
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Η GPX GAS δραστηριοποιείται στην εμπορία και διανομή υγραερίου, με πανελλαδική κάλυψη. Εφοδιάζουμε επιχειρήσεις κάθε μεγέθους, αναπτύσσουμε διαρκώς το δίκτυο διανομής μας για την εξυπηρέτηση κατοικιών και διαθέτουμε υγραέριο χονδρικώς σε μεταπωλητές. Το προπάνιο αποτελεί τον πυρήνα της δραστηριότητάς μας.
            </p>
            <Link
              href="/etaireia"
              className="inline-flex items-center gap-2 text-sm font-700 text-accent hover:text-accent-hover transition-colors focus-ring"
              style={{ fontWeight: 700 }}>
              
              Γνωρίστε μας
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-80 lg:h-96 border border-border overflow-hidden">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1d502f31c-1773090206069.png"
              alt="Βιομηχανική δεξαμενή υγραερίου προπανίου — εξωτερική αποθήκευση σε βιομηχανικό χώρο"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            {/* Accent corner */}
            <div className="absolute top-0 left-0 w-12 h-1 bg-accent" />
          </div>
        </div>
      </div>
    </section>);

}