import React from 'react';

const coverageItems = [
  {
    title: 'Θέρμανση επαγγελματικών χώρων',
    copy: 'Θέρμανση γραφείων, αποθηκών, βιομηχανικών χώρων και εμπορικών καταστημάτων.',
  },
  {
    title: 'Μαγειρική και εξοπλισμός εστίασης',
    copy: 'Προπάνιο για επαγγελματικές κουζίνες, εστιατόρια, catering και αρτοποιεία.',
  },
  {
    title: 'Παραγωγικές και βιομηχανικές διαδικασίες',
    copy: 'Τροφοδοσία βιομηχανικών καυστήρων, κλιβάνων και παραγωγικού εξοπλισμού.',
  },
  {
    title: 'Ζεστό νερό χρήσης',
    copy: 'Εφοδιασμός συστημάτων ζεστού νερού για επαγγελματικούς χώρους κάθε τύπου.',
  },
];

export default function BusinessCoverage() {
  return (
    <section className="py-20 bg-background border-b border-border" aria-label="Τι καλύπτουμε">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow text-accent mb-4">Εφαρμογές</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Τι καλύπτουμε
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {coverageItems?.map((item, idx) => (
            <div
              key={item?.title}
              className={`p-8 border-border ${
                idx % 2 === 0 ? 'md:border-r' : ''
              } ${idx < 2 ? 'border-b' : ''}`}
            >
              <div className="w-8 h-1 bg-accent mb-5" />
              <h3 className="text-base font-700 mb-3 tracking-tight" style={{ fontWeight: 700 }}>
                {item?.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{item?.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}