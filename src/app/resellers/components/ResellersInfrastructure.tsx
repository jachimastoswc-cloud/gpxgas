import React from 'react';

const cards = [
  {
    title: 'Δίκτυο συνεργαζόμενων δεξαμενισμών',
    copy: 'Συνεργασίες με δεξαμενισμούς σε όλη την Ελλάδα, για παραλαβή και φόρτωση κοντά στην έδρα σας.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    title: 'Φόρτωση από διυλιστήρια',
    copy: 'Δυνατότητα φόρτωσης απευθείας από διυλιστήρια, με ό,τι αυτό σημαίνει για τη συνέπεια του εφοδιασμού.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
  },
  {
    title: 'Πανελλαδική κάλυψη',
    copy: 'Εξυπηρέτηση ανεξαρτήτως περιοχής, μέσω του δικτύου συνεργατών μας.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
];

export default function ResellersInfrastructure() {
  return (
    <section className="py-20 bg-background border-b border-border" aria-label="Η υποδομή μας">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow mb-4" style={{ color: 'var(--accent-reseller)' }}>Υποδομή</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Η υποδομή μας
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {cards?.map((card, idx) => (
            <div
              key={card?.title}
              className={`p-8 flex flex-col gap-5 border-b md:border-b-0 border-border ${idx < cards?.length - 1 ? 'md:border-r' : ''}`}
            >
              <div className="text-foreground opacity-60">{card?.icon}</div>
              <div>
                <h3 className="text-base font-700 mb-3 tracking-tight" style={{ fontWeight: 700 }}>{card?.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{card?.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}