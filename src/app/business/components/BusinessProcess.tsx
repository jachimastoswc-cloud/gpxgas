import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Καταγραφή αναγκών',
    copy: 'Συζητάμε τις ενεργειακές ανάγκες της επιχείρησής σας — τύπος χρήσης, εκτιμώμενες ποσότητες, συχνότητα εφοδιασμού.',
  },
  {
    num: '02',
    title: 'Προσφορά και συμφωνία όρων',
    copy: 'Σας αποστέλλουμε αναλυτική προσφορά με σαφή τιμολόγηση. Συζητάμε και συμφωνούμε τους όρους συνεργασίας.',
  },
  {
    num: '03',
    title: 'Προγραμματισμός παραδόσεων',
    copy: 'Καθορίζουμε από κοινού το χρονοδιάγραμμα παραδόσεων ώστε η επιχείρησή σας να μην αντιμετωπίζει ελλείψεις.',
  },
  {
    num: '04',
    title: 'Τακτικός εφοδιασμός και υποστήριξη',
    copy: 'Υλοποιούμε τις παραδόσεις σύμφωνα με τη συμφωνία και παραμένουμε διαθέσιμοι για οποιοδήποτε αίτημα.',
  },
];

export default function BusinessProcess() {
  return (
    <section className="py-20 bg-background border-b border-border" aria-label="Πώς συνεργαζόμαστε">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow text-accent mb-4">Διαδικασία</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Πώς συνεργαζόμαστε
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {steps?.map((step, idx) => (
            <div
              key={step?.num}
              className={`p-8 flex flex-col gap-4 border-b md:border-b-0 border-border ${
                idx < steps?.length - 1 ? 'md:border-r' : ''
              }`}
            >
              <span className="numbered-item-num">{step?.num}</span>
              <h3 className="text-base font-700 tracking-tight" style={{ fontWeight: 700 }}>{step?.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step?.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}