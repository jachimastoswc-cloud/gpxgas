import React from 'react';

const sectors = [
  'Εστιατόρια και catering',
  'Ξενοδοχεία και τουριστικά καταλύματα',
  'Αρτοποιεία και ζαχαροπλαστεία',
  'Βιομηχανίες και βιοτεχνίες',
  'Αγροτικές και κτηνοτροφικές μονάδες',
  'Εργοστάσια τροφίμων',
  'Κολυμβητήρια και αθλητικές εγκαταστάσεις',
  'Εμπορικές επιχειρήσεις',
];

export default function BusinessSectors() {
  return (
    <section className="py-20 bg-input border-b border-border" aria-label="Κλάδοι που εξυπηρετούμε">
      <div className="max-w-site mx-auto px-4">
        <div className="mb-10">
          <p className="eyebrow text-accent mb-4">Κλάδοι</p>
          <h2 className="text-3xl md:text-4xl font-700 tracking-tight" style={{ fontWeight: 700 }}>
            Κλάδοι που εξυπηρετούμε
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {sectors?.map((sector, idx) => (
            <div
              key={sector}
              className={`p-6 flex items-center gap-3 border-b border-border ${
                idx % 4 !== 3 ? 'sm:border-r' : ''
              } ${idx >= sectors?.length - 4 ? 'lg:border-b-0' : ''} ${
                idx >= sectors?.length - 2 ? 'sm:border-b-0' : ''
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <span className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}