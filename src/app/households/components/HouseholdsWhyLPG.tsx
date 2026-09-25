import React from 'react';

const benefits = [
  {
    title: 'Άμεση απόδοση θερμότητας',
    copy: 'Το υγραέριο παρέχει άμεσα αποτέλεσμα θέρμανσης, χωρίς αναμονή. Ιδανικό για γρήγορη ζέστανση χώρων.',
  },
  {
    title: 'Χρήση για θέρμανση, μαγείρεμα και ζεστό νερό',
    copy: 'Μια πηγή ενέργειας για όλες τις οικιακές ανάγκες — κεντρική θέρμανση, εστία κουζίνας, θερμοσίφωνας.',
  },
  {
    title: 'Σταθερός εφοδιασμός χωρίς εξάρτηση από δίκτυο πόλης',
    copy: 'Κατάλληλο για κατοικίες που δεν έχουν πρόσβαση σε δίκτυο φυσικού αερίου. Αυτόνομος εφοδιασμός μέσω δεξαμενής.',
  },
];

export default function HouseholdsWhyLPG() {
  return (
    <section className="py-20 bg-background border-b border-border" aria-label="Γιατί υγραέριο στο σπίτι">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow mb-4" style={{ color: 'var(--accent-household)' }}>Πλεονεκτήματα</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Γιατί υγραέριο στο σπίτι
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {benefits?.map((item, idx) => (
            <div
              key={item?.title}
              className={`p-8 border-b md:border-b-0 border-border ${idx < benefits?.length - 1 ? 'md:border-r' : ''}`}
            >
              <div className="w-8 h-1 mb-5" style={{ backgroundColor: 'var(--accent-household)' }} />
              <h3 className="text-base font-700 mb-3 tracking-tight" style={{ fontWeight: 700 }}>{item?.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item?.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}