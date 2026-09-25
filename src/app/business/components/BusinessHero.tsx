import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function BusinessHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden" aria-label="Υγραέριο για Επιχειρήσεις">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1a44f4ca3-1772103292622.png"
          alt="Επαγγελματική κουζίνα εστιατορίου με φλόγες — βιομηχανικός εξοπλισμός μαγειρικής που λειτουργεί με προπάνιο"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/65 to-primary/90" />
        {/* Business accent strip */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-business" />
      </div>

      <div className="relative z-10 max-w-site mx-auto px-4 w-full pb-0">
        <div className="max-w-2xl pt-36 pb-16">
          <p className="eyebrow text-white/60 mb-4">Για Επιχειρήσεις</p>
          <h1 className="text-hero-xl text-white mb-6">
            Υγραέριο για επιχειρήσεις
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-10 font-medium">
            Προμήθεια προπανίου και υγραερίου θέρμανσης για επιχειρήσεις κάθε μεγέθους, με συνέπεια στις παραδόσεις και σαφή τιμολόγηση.
          </p>
          <Link href="/contact?variant=business" className="btn-primary text-sm font-700" style={{ fontWeight: 700 }}>
            Ζητήστε προσφορά για την επιχείρησή σας
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>);

}