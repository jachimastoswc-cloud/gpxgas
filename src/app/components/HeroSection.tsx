import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-label="Κεντρική ενότητα">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_442ac139f-1789724431125.png"
          alt="Βιομηχανικές εγκαταστάσεις υγραερίου — δεξαμενές προπανίου σε βιομηχανικό περιβάλλον"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        {/* Dark overlay — reduced for image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-site mx-auto px-4 w-full pb-0">
        <div className="max-w-3xl pt-40 pb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-3 py-1.5 mb-8">
            <span className="eyebrow text-white font-semibold">Προπάνιο · Υγραέριο θέρμανσης · Υγραέριο κίνησης</span>
          </div>

          {/* H1 */}
          <h1 className="text-hero-xl text-white mb-6 drop-shadow-lg">
            GPX GAS<br />
            Υγραέρια Ελλάδος
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-2xl font-semibold drop-shadow-md">
            Εμπορία και διανομή υγραερίου με έμφαση στο προπάνιο, σε επιχειρήσεις, κατοικίες και μεταπωλητές, με πανελλαδική κάλυψη.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-sm font-700" style={{ fontWeight: 700 }}>
              Ζητήστε προσφορά
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
            <Link href="/products" className="btn-outline text-sm font-600" style={{ fontWeight: 600 }}>
              Τα προϊόντα μας
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="border-t border-white/15 grid grid-cols-1 sm:grid-cols-3">
          <div className="stat-bar-item py-6 pr-8">
            <p className="text-2xl font-700 text-white mb-1" style={{ fontWeight: 700 }}>Προπάνιο</p>
            <p className="text-sm text-white/80">Κύριο προϊόν μας</p>
          </div>
          <div className="stat-bar-item py-6 px-8">
            <p className="text-2xl font-700 text-white mb-1" style={{ fontWeight: 700 }}>Πανελλαδική</p>
            <p className="text-sm text-white/80">Δίκτυο κάλυψης</p>
          </div>
          <div className="py-6 pl-8">
            <p className="text-2xl font-700 text-white mb-1" style={{ fontWeight: 700 }}>3 Κατηγορίες</p>
            <p className="text-sm text-white/80">Επιχειρήσεις · Κατοικίες · Μεταπωλητές</p>
          </div>
        </div>
      </div>
    </section>);

}