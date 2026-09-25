import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const uses = [
'Πρατήρια υγραερίου κίνησης',
'Στόλοι οχημάτων (ταξί, logistics, εταιρικά)',
'Ιδιωτικά οχήματα με σύστημα LPG',
'Εναλλακτική καύσιμη ύλη για μείωση κόστους'];


export default function ProductsAutogas() {
  return (
    <section className="py-20 bg-background border-b border-border" id="autogas" aria-label="Υγραέριο Κίνησης Autogas">
      <div className="max-w-site mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-700 tracking-tight mb-6" style={{ fontWeight: 700 }}>
              Υγραέριο Κίνησης (Autogas)
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Μείγμα προπανίου-βουτανίου για χρήση σε οχήματα. Αποτελεί οικονομικότερη εναλλακτική στη βενζίνη και το diesel, με χαμηλότερο κόστος ανά χιλιόμετρο και μειωμένες εκπομπές ρύπων.
            </p>
            <p className="text-base text-muted leading-relaxed mb-8">
              Διατίθεται σε χονδρική σε πρατήρια υγραερίου κίνησης και εταιρείες που διαχειρίζονται στόλους οχημάτων.
            </p>

            <h3 className="text-sm font-700 mb-4 tracking-tight uppercase" style={{ fontWeight: 700 }}>
              Εφαρμογές
            </h3>
            <ul className="flex flex-col gap-2 mb-8">
              {uses?.map((use) =>
              <li key={use} className="flex items-center gap-3 text-sm text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  {use}
                </li>
              )}
            </ul>

            <Link href="/contact?variant=reseller" className="btn-primary text-sm font-700" style={{ fontWeight: 700 }}>
              Ζητήστε τιμοκατάλογο
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="relative h-72 lg:h-full min-h-64 border border-border overflow-hidden">
            <AppImage
              src="https://images.unsplash.com/photo-1629241290025-6bb716261f5f"
              alt="Αντλία autogas σε πρατήριο — βρύση υγραερίου κίνησης LPG σε βενζινάδικο"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute top-0 left-0 w-12 h-1 bg-accent" />
          </div>
        </div>
      </div>
    </section>);

}