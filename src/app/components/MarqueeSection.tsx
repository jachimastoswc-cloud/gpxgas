import React from 'react';

const items = [
  'Προπάνιο',
  'Υγραέριο θέρμανσης',
  'Υγραέριο κίνησης',
  'Πανελλαδική κάλυψη',
  'Δίκτυο δεξαμενισμών',
  'Φόρτωση από διυλιστήρια',
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-border py-4 bg-background"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {doubled?.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-sm font-600 text-muted/70 tracking-wide px-6" style={{ fontWeight: 600 }}>
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}