import React from 'react';

const targets = [
  'Εταιρείες εμπορίας υγραερίου',
  'Πρατήρια υγραερίου κίνησης',
  'Διανομείς εμφιαλωμένου υγραερίου',
  'Τοπικοί έμποροι και συνεργάτες διανομής',
];

export default function ResellersTargets() {
  return (
    <section className="py-20 bg-input border-b border-border" aria-label="Σε ποιους απευθυνόμαστε">
      <div className="max-w-site mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="eyebrow mb-4" style={{ color: 'var(--accent-reseller)' }}>Κοινό</p>
            <h2 className="text-3xl md:text-4xl font-700 tracking-tight mb-6" style={{ fontWeight: 700 }}>
              Σε ποιους απευθυνόμαστε
            </h2>
            <p className="text-muted leading-relaxed">
              Συνεργαζόμαστε με επιχειρήσεις που δραστηριοποιούνται στη διανομή και εμπορία υγραερίου σε όλη την Ελλάδα.
            </p>
          </div>
          <div className="border border-border divide-y divide-border">
            {targets?.map((target) => (
              <div key={target} className="flex items-center gap-4 p-5">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--accent-reseller)' }} aria-hidden="true" />
                <span className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>{target}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}