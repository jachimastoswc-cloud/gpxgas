import React from 'react';

const items = [
  {
    num: '01',
    title: 'Σταθερή τροφοδοσία, ιδίως σε περιόδους αιχμής',
    copy: 'Η πρόσβασή μας σε δεξαμενισμούς και διυλιστήρια εξασφαλίζει συνέπεια εφοδιασμού ακόμα και σε περιόδους υψηλής ζήτησης.',
  },
  {
    num: '02',
    title: 'Ευελιξία στον τόπο φόρτωσης',
    copy: 'Δυνατότητα επιλογής τόπου φόρτωσης ανάλογα με την έδρα και τις λειτουργικές ανάγκες σας.',
  },
  {
    num: '03',
    title: 'Διαφανής τιμολόγηση ανά φορτίο',
    copy: 'Σαφής τιμολόγηση χωρίς κρυφές χρεώσεις. Γνωρίζετε εκ των προτέρων το κόστος κάθε φορτίου.',
  },
  {
    num: '04',
    title: 'Απευθείας επικοινωνία με τον υπεύθυνο εμπορίας',
    copy: 'Χωρίς ενδιάμεσους. Άμεση πρόσβαση στον αρμόδιο για γρήγορη απόκριση στα αιτήματά σας.',
  },
];

export default function ResellersWholesale() {
  return (
    <section className="py-20 bg-background border-b border-border" aria-label="Τι προσφέρουμε στη χονδρική">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-12">
          <p className="eyebrow mb-4" style={{ color: 'var(--accent-reseller)' }}>Χονδρική</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Τι προσφέρουμε στη χονδρική
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
          {items?.map((item, idx) => (
            <div
              key={item?.num}
              className={`p-8 flex gap-5 border-b border-border ${
                idx % 2 === 0 ? 'md:border-r' : ''
              } ${idx >= items?.length - 2 ? 'md:border-b-0' : ''} ${
                idx === items?.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <span className="numbered-item-num shrink-0 mt-0.5" style={{ color: 'var(--accent-reseller)' }}>{item?.num}</span>
              <div>
                <h3 className="text-base font-700 mb-2 tracking-tight" style={{ fontWeight: 700 }}>{item?.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item?.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}