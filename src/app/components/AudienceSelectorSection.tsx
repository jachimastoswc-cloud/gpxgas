import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const cards = [
{
  href: '/business',
  label: 'Για Επιχειρήσεις',
  copy: 'Προμήθεια υγραερίου για θέρμανση, μαγειρική και παραγωγικές διαδικασίες, σε ποσότητες που ταιριάζουν στη λειτουργία σας.',
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1db1e23-1764754650454.png",
  imgAlt: 'Εμπορική κουζίνα εστιατορίου — επαγγελματικός εξοπλισμός μαγειρικής που λειτουργεί με υγραέριο',
  accentClass: 'bg-accent-business'
},
{
  href: '/households',
  label: 'Για Κατοικίες',
  copy: 'Υγραέριο θέρμανσης για το σπίτι, με προγραμματισμένες παραδόσεις μέσω του δικτύου διανομής μας.',
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_4104380cf-1789724432173.png",
  imgAlt: 'Ζεστό οικιακό περιβάλλον — σαλόνι σπιτιού με θέρμανση από υγραέριο',
  accentClass: 'bg-accent-household'
},
{
  href: '/resellers',
  label: 'Για Μεταπωλητές',
  copy: 'Χονδρική διάθεση υγραερίου, με αξιοποίηση του δικτύου συνεργαζόμενων δεξαμενισμών και δυνατότητα φόρτωσης από διυλιστήρια.',
  imgSrc: "https://img.rocket.new/generatedImages/rocket_gen_img_46a05e979-1789724431284.png",
  imgAlt: 'Βιομηχανικές δεξαμενές αποθήκευσης υγραερίου — εγκαταστάσεις δεξαμενισμού',
  accentClass: 'bg-accent-reseller'
}];


export default function AudienceSelectorSection() {
  return (
    <section
      className="relative z-10 -mt-1 bg-background"
      aria-label="Επιλέξτε κατηγορία πελάτη">
      
      <div className="max-w-site mx-auto px-4">
        {/* Intro */}
        <div className="pt-16 pb-8 text-center">
          <p className="eyebrow text-muted mb-3">Ποιος είσαστε;</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Βρείτε τη σωστή σελίδα για εσάς
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border mb-16">
          {cards?.map((card, idx) =>
          <Link
            key={card?.href}
            href={card?.href}
            className={`audience-card-link group flex flex-col ${idx < cards?.length - 1 ? 'md:border-r border-b md:border-b-0 border-border' : ''}`}
            aria-label={`${card?.label} — Μετάβαση στη σελίδα`}>
            
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={card?.imgSrc}
                alt={card?.imgAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
                {/* Accent bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${card?.accentClass}`} />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-700 mb-3 tracking-tight" style={{ fontWeight: 700 }}>
                  {card?.label}
                </h3>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{card?.copy}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-600 group-hover:gap-3 transition-all" style={{ fontWeight: 600 }}>
                  <span>Μάθετε περισσότερα</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}