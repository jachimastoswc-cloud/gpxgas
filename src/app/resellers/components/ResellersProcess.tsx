import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Επικοινωνία και καταγραφή όγκων',
    copy: 'Επικοινωνείτε μαζί μας και καταγράφουμε τους εκτιμώμενους μηνιαίους όγκους και τις απαιτήσεις σας.',
  },
  {
    num: '02',
    title: 'Έλεγχος στοιχείων και αδειοδοτήσεων',
    copy: 'Διενεργούμε τον απαραίτητο έλεγχο νομιμότητας και αδειοδοτήσεων σύμφωνα με την κείμενη νομοθεσία.',
  },
  {
    num: '03',
    title: 'Συμφωνία όρων και τιμολόγησης',
    copy: 'Συμφωνούμε τους εμπορικούς όρους, την τιμολόγηση και τους τρόπους πληρωμής.',
  },
  {
    num: '04',
    title: 'Προγραμματισμός φορτώσεων',
    copy: 'Οργανώνουμε από κοινού το χρονοδιάγραμμα φορτώσεων για σταθερό εφοδιασμό.',
  },
];

export default function ResellersProcess() {
  return (
    <section className="py-20 bg-input border-b border-border" aria-label="Διαδικασία συνεργασίας">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow mb-4" style={{ color: 'var(--accent-reseller)' }}>Διαδικασία</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Διαδικασία συνεργασίας
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {steps?.map((step, idx) => (
            <div
              key={step?.num}
              className={`p-8 flex flex-col gap-4 border-b md:border-b-0 border-border ${idx < steps?.length - 1 ? 'lg:border-r' : ''} ${idx < 2 ? 'md:border-b lg:border-b-0' : ''} ${idx % 2 === 0 && idx < 2 ? 'md:border-r' : ''}`}
            >
              <span className="numbered-item-num" style={{ color: 'var(--accent-reseller)' }}>{step?.num}</span>
              <h3 className="text-base font-700 tracking-tight" style={{ fontWeight: 700 }}>{step?.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step?.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}