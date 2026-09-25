import React from 'react';
import Link from 'next/link';

export default function CtaBand() {
  return (
    <section className="bg-primary py-20" aria-label="Επικοινωνήστε μαζί μας">
      <div className="max-w-site mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-700 text-white tracking-tight mb-4" style={{ fontWeight: 700 }}>
          Χρειάζεστε αξιόπιστη προμήθεια υγραερίου;
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Επικοινωνήστε μαζί μας για προσφορά προσαρμοσμένη στις ανάγκες σας.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary text-sm font-700" style={{ fontWeight: 700 }}>
            Ζητήστε προσφορά
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
          <a
            href="tel:+306947631338"
            className="btn-outline text-sm font-700"
            style={{ fontWeight: 700 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            694 763 1338
          </a>
        </div>
      </div>
    </section>
  );
}