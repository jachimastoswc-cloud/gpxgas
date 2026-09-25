import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HouseholdsHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden" aria-label="Υγραέριο θέρμανσης για κατοικίες">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_4ae5eb903-1789724432380.png"
          alt="Ζεστό σαλόνι κατοικίας το χειμώνα — ζεστό οικιακό περιβάλλον με θέρμανση από υγραέριο"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/60 to-primary/90" />
        {/* Household accent strip — slightly warmer orange */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--accent-household)' }} />
      </div>

      <div className="relative z-10 max-w-site mx-auto px-4 w-full pb-0">
        <div className="max-w-2xl pt-36 pb-16">
          <p className="eyebrow text-white/60 mb-4">Για Κατοικίες</p>
          <h1 className="text-hero-xl text-white mb-6">
            Υγραέριο θέρμανσης για το σπίτι
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-10 font-medium">
            Προγραμματισμένες και έκτακτες παραδόσεις υγραερίου θέρμανσης μέσω του αναπτυσσόμενου δικτύου διανομής μας.
          </p>
          <Link href="/contact?variant=household" className="btn-primary text-sm font-700" style={{ fontWeight: 700, backgroundColor: 'var(--accent-household)', borderColor: 'var(--accent-household)' }}>
            Ζητήστε προσφορά για το σπίτι σας
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>);

}