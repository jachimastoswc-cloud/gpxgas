import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function ProductsTeaserSection() {
  return (
    <section className="py-20 bg-input border-t border-border" aria-label="Τα προϊόντα μας">
      <div className="max-w-site mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow text-accent mb-3">Προϊόντα</p>
            <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
              Τι διαθέτουμε
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 text-sm font-700 text-accent hover:text-accent-hover transition-colors focus-ring"
            style={{ fontWeight: 700 }}>
            
            Όλα τα προϊόντα
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>

        {/* Asymmetric grid — propane larger */}
        {/* BENTO AUDIT: 3 cards
             Row 1: [col-1: Propane cs-2 rs-1] [col-3: Mix cs-1 rs-1]
             Row 2: [col-1: Autogas cs-3 rs-1]
             Placed 3/3 ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Propane — hero card */}
          <div className="md:col-span-2 border border-border bg-card group overflow-hidden flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_123aab65b-1767379281866.png"
                alt="Κυλινδρικές φιάλες προπανίου — βιομηχανικές φιάλες υγραερίου σε αποθηκευτικό χώρο"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw" />
              
              <div className="absolute inset-0 bg-primary/30" />
              <div className="absolute top-4 left-4">
                <span className="eyebrow text-white bg-accent px-3 py-1.5">Κύριο προϊόν</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-700 mb-2 tracking-tight" style={{ fontWeight: 700 }}>Προπάνιο</h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
                Το κύριο προϊόν μας. Κατάλληλο για θέρμανση, μαγειρική, βιομηχανικές εφαρμογές και αγροτική χρήση. Ιδανικό για χώρους χωρίς δίκτυο φυσικού αερίου.
              </p>
              <Link href="/products" className="inline-flex items-center gap-2 text-sm font-700 text-accent hover:text-accent-hover transition-colors focus-ring" style={{ fontWeight: 700 }}>
                Περισσότερα
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Mix */}
          <div className="border border-border bg-card group overflow-hidden flex flex-col">
            <div className="relative h-40 overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_40bfe0634-1789724431373.png"
                alt="Εγκαταστάσεις θέρμανσης — βιομηχανικός λέβητας με υγραέριο θέρμανσης"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              <div className="absolute inset-0 bg-primary/30" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-700 mb-2 tracking-tight" style={{ fontWeight: 700 }}>Μείγμα Προπανίου-Βουτανίου</h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-3">
                Για θέρμανση χώρων. Βελτιστοποιημένο μείγμα για αποδοτική καύση.
              </p>
              <Link href="/products" className="inline-flex items-center gap-2 text-xs font-700 text-accent hover:text-accent-hover transition-colors focus-ring" style={{ fontWeight: 700 }}>
                Περισσότερα
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Autogas */}
          <div className="md:col-span-3 border border-border bg-card group overflow-hidden flex flex-col md:flex-row">
            <div className="relative h-48 md:h-auto md:w-64 overflow-hidden shrink-0">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_107b11331-1784030037135.png"
                alt="Πρατήριο υγραερίου κίνησης — αντλία autogas για οχήματα σε βενζινάδικο"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 256px" />
              
              <div className="absolute inset-0 bg-primary/30" />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-lg font-700 mb-2 tracking-tight" style={{ fontWeight: 700 }}>Υγραέριο Κίνησης (Autogas)</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 max-w-xl">
                Μείγμα προπανίου-βουτανίου για οχήματα. Οικονομικότερη εναλλακτική στη βενζίνη και το diesel, κατάλληλο για πρατήρια και στόλους οχημάτων.
              </p>
              <Link href="/products" className="inline-flex items-center gap-2 text-sm font-700 text-accent hover:text-accent-hover transition-colors focus-ring" style={{ fontWeight: 700 }}>
                Περισσότερα
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <Link href="/products" className="btn-outline-dark w-full justify-center text-sm font-700" style={{ fontWeight: 700 }}>
            Όλα τα προϊόντα
          </Link>
        </div>
      </div>
    </section>);

}