import React from 'react';

const items = [
  {
    num: '01',
    title: 'Έμφαση στο προπάνιο',
    copy: 'Εξειδίκευση στο προϊόν που αποτελεί τον πυρήνα της δραστηριότητάς μας.',
  },
  {
    num: '02',
    title: 'Πανελλαδική κάλυψη',
    copy: 'Δίκτυο συνεργαζόμενων δεξαμενισμών σε όλη την Ελλάδα.',
  },
  {
    num: '03',
    title: 'Πρόσβαση στην πηγή',
    copy: 'Δυνατότητα φόρτωσης απευθείας από διυλιστήρια.',
  },
  {
    num: '04',
    title: 'Άμεση επικοινωνία',
    copy: 'Απευθείας γραμμή, χωρίς ενδιάμεσους.',
  },
  {
    num: '05',
    title: 'Ευελιξία ποσοτήτων',
    copy: 'Από την κατοικία έως τη χονδρική διάθεση.',
  },
  {
    num: '06',
    title: 'Ασφάλεια',
    copy: 'Τηρούμε τις προβλεπόμενες διαδικασίες ασφαλείας σε κάθε στάδιο διακίνησης.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-background border-t border-border" aria-label="Γιατί GPX GAS">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow text-accent mb-4">Τα πλεονεκτήματά μας</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Γιατί GPX GAS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
          {items?.map((item, idx) => {
            const isLastRow2 = idx >= 3;
            const isLastInRow = (idx % 3 === 2) || (idx === items?.length - 1);
            return (
              <div
                key={item?.num}
                className={`p-8 flex gap-5 border-b border-border ${
                  isLastInRow ? '' : 'md:border-r'
                } ${isLastRow2 ? 'border-b-0' : ''} ${
                  idx >= 3 && idx % 3 !== 2 ? 'md:border-r' : ''
                }`}
              >
                <span className="numbered-item-num shrink-0 mt-0.5">{item?.num}</span>
                <div>
                  <h3 className="text-base font-700 mb-2 tracking-tight" style={{ fontWeight: 700 }}>
                    {item?.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item?.copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}