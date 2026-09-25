'use client';

import React, { useState } from 'react';

const faqs = [
  {
    q: 'Πώς γίνεται η παράδοση υγραερίου;',
    a: 'Η παράδοση γίνεται με βυτιοφόρο όχημα απευθείας στη δεξαμενή σας. Συνεργαζόμαστε με δίκτυο διανομέων σε όλη την Ελλάδα. Επικοινωνήστε μαζί μας για να ελέγξουμε τη διαθεσιμότητα στην περιοχή σας.',
  },
  {
    q: 'Ποιες ποσότητες μπορώ να παραγγείλω;',
    a: 'Οι ποσότητες εξαρτώνται από τη χωρητικότητα της δεξαμενής σας και τις ανάγκες σας. Επικοινωνήστε μαζί μας για να συζητήσουμε τις κατάλληλες ποσότητες για το σπίτι σας.',
  },
  {
    q: 'Ποιοι είναι οι τρόποι πληρωμής;',
    a: 'Επικοινωνήστε μαζί μας για να σας ενημερώσουμε για τις διαθέσιμες επιλογές πληρωμής.',
  },
  {
    q: 'Πόσο ασφαλές είναι το υγραέριο;',
    a: 'Το υγραέριο είναι ασφαλές εφόσον χρησιμοποιείται σύμφωνα με τους κανόνες ασφαλείας. Τηρούμε τις προβλεπόμενες διαδικασίες ασφαλείας σε κάθε στάδιο διακίνησης και παράδοσης. Συνιστούμε τακτικό έλεγχο των εγκαταστάσεών σας από εξειδικευμένο τεχνικό.',
  },
  {
    q: 'Καλύπτετε την περιοχή μου;',
    a: 'Το δίκτυο διανομής μας αναπτύσσεται διαρκώς. Επικοινωνήστε μαζί μας για να ελέγξουμε τη διαθεσιμότητα στην περιοχή σας.',
  },
];

export default function HouseholdsFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background border-b border-border" aria-label="Συχνές ερωτήσεις">
      <div className="max-w-site mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow mb-4" style={{ color: 'var(--accent-household)' }}>FAQ</p>
            <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
              Συχνές ερωτήσεις
            </h2>
          </div>

          <div className="border border-border divide-y divide-border">
            {faqs?.map((faq, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus-ring hover:bg-input transition-colors"
                  aria-expanded={open === idx}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="text-sm font-700 pr-4" style={{ fontWeight: 700 }}>{faq?.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`shrink-0 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-6 text-sm text-muted leading-relaxed">{faq?.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}