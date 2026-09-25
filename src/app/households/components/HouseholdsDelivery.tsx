import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Επικοινωνία και εκτίμηση αναγκών',
    copy: 'Μας καλείτε ή συμπληρώνετε τη φόρμα. Συζητάμε τις ανάγκες σας — τύπος χρήσης, μέγεθος δεξαμενής, εκτιμώμενη κατανάλωση.',
  },
  {
    num: '02',
    title: 'Προγραμματισμός παράδοσης',
    copy: 'Συμφωνούμε ημερομηνία και ώρα παράδοσης που σας εξυπηρετεί. Φροντίζουμε ώστε να είστε ενημερωμένοι.',
  },
  {
    num: '03',
    title: 'Ανεφοδιασμός δεξαμενής',
    copy: 'Η παράδοση γίνεται με ασφάλεια και σύμφωνα με τις προβλεπόμενες διαδικασίες. Μπορείτε να ζητήσετε και έκτακτες παραδόσεις.',
  },
];

export default function HouseholdsDelivery() {
  return (
    <section className="py-20 bg-input border-b border-border" aria-label="Πώς γίνεται η παράδοση">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow mb-4" style={{ color: 'var(--accent-household)' }}>Διαδικασία</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Πώς γίνεται η παράδοση
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {steps?.map((step, idx) => (
            <div
              key={step?.num}
              className={`p-8 flex flex-col gap-4 border-b md:border-b-0 border-border ${idx < steps?.length - 1 ? 'md:border-r' : ''}`}
            >
              <span className="numbered-item-num" style={{ color: 'var(--accent-household)' }}>{step?.num}</span>
              <h3 className="text-base font-700 tracking-tight" style={{ fontWeight: 700 }}>{step?.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step?.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}