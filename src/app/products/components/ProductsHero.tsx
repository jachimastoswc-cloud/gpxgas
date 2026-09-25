import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ProductsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-end overflow-hidden" aria-label="Προϊόντα GPX GAS">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1595876981333-bc61d66c24b1"
          alt="Βιομηχανικές εγκαταστάσεις υγραερίου — σφαιρικές δεξαμενές αποθήκευσης προπανίου σε βιομηχανικό χώρο"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/65 to-primary/90" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
      </div>
      <div className="relative z-10 max-w-site mx-auto px-4 w-full">
        <div className="max-w-2xl pt-36 pb-16">
          <p className="eyebrow text-white/60 mb-4">Προϊόντα</p>
          <h1 className="text-hero-xl text-white mb-4">
            Τα προϊόντα μας
          </h1>
          <p className="text-lg text-white/80 leading-relaxed font-medium">
            Προπάνιο, μείγμα προπανίου-βουτανίου για θέρμανση και υγραέριο κίνησης. Πανελλαδική διανομή.
          </p>
        </div>
      </div>
    </section>);

}