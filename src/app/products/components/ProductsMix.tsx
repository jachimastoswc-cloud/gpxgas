import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const uses = [
'Κεντρική θέρμανση κατοικιών',
'Θέρμανση επαγγελματικών χώρων',
'Θερμοσίφωνες και λέβητες',
'Χώρους χωρίς δίκτυο φυσικού αερίου'];


export default function ProductsMix() {
  return (
    <section className="py-20 bg-input border-b border-border" id="meigma" aria-label="Μείγμα Προπανίου-Βουτανίου για Θέρμανση">
      <div className="max-w-site mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative h-72 lg:h-full min-h-64 border border-border overflow-hidden order-2 lg:order-1">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_4f8e6fe7d-1789724432094.png"
              alt="Βιομηχανικός λέβητας θέρμανσης — εγκαταστάσεις κεντρικής θέρμανσης με υγραέριο"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute top-0 left-0 w-12 h-1 bg-accent" />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-700 tracking-tight mb-6" style={{ fontWeight: 700 }}>
              Μείγμα Προπανίου-Βουτανίου<br />για Θέρμανση
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Βελτιστοποιημένο μείγμα προπανίου και βουτανίου, σχεδιασμένο για αποδοτική καύση σε εφαρμογές θέρμανσης. Κατάλληλο για κεντρική θέρμανση κατοικιών και επαγγελματικών χώρων.
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

            <Link href="/contact?variant=household" className="btn-primary text-sm font-700" style={{ fontWeight: 700 }}>
              Ζητήστε προσφορά
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>);

}