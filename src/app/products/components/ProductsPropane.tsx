import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const uses = [
'Κεντρική θέρμανση κτιρίων και χώρων',
'Επαγγελματική μαγειρική και εξοπλισμός εστίασης',
'Βιομηχανικές και παραγωγικές διαδικασίες',
'Αγροτική και κτηνοτροφική χρήση',
'Ζεστό νερό χρήσης',
'Εφαρμογές χωρίς δίκτυο φυσικού αερίου'];


export default function ProductsPropane() {
  return (
    <section className="py-20 bg-background border-b border-border" id="propanio" aria-label="Προπάνιο">
      <div className="max-w-site mx-auto px-4">
        {/* Hero label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="eyebrow text-white bg-accent px-3 py-1.5">Κύριο προϊόν</span>
          <hr className="flex-1 border-t border-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-700 tracking-tight mb-6" style={{ fontWeight: 700 }}>
              Προπάνιο
            </h2>
            <p className="text-base text-muted leading-relaxed mb-6">
              Το προπάνιο αποτελεί τον πυρήνα της δραστηριότητάς μας. Είναι ένα καθαρό αέριο καύσιμο, κατάλληλο για ένα ευρύ φάσμα εφαρμογών — από οικιακή θέρμανση έως βιομηχανικές διεργασίες.
            </p>
            <p className="text-base text-muted leading-relaxed mb-8">
              Διατίθεται σε φιάλες και μέσω δεξαμενής. Ιδανικό για χώρους χωρίς πρόσβαση σε δίκτυο φυσικού αερίου, προσφέροντας αυτονομία και σταθερό εφοδιασμό.
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

            <Link href="/contact?variant=business" className="btn-primary text-sm font-700" style={{ fontWeight: 700 }}>
              Ζητήστε προσφορά
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="relative h-80 lg:h-full min-h-64 border border-border overflow-hidden">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1cc6fe877-1773090205226.png"
              alt="Φιάλες προπανίου — κυλινδρικές βιομηχανικές φιάλες αερίου σε γκρι και λευκό χρώμα"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute top-0 left-0 w-12 h-1 bg-accent" />
          </div>
        </div>
      </div>
    </section>);

}