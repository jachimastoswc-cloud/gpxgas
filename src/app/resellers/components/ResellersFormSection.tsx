import React from 'react';
import LeadForm from '@/components/LeadForm';

export default function ResellersFormSection() {
  return (
    <section className="py-20 bg-background border-b border-border" aria-label="Φόρμα επικοινωνίας για μεταπωλητές">
      <div className="max-w-site mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="eyebrow mb-4" style={{ color: 'var(--accent-reseller)' }}>Επικοινωνία</p>
            <h2 className="text-3xl md:text-4xl font-700 tracking-tight mb-4" style={{ fontWeight: 700 }}>
              Ζητήστε τιμοκατάλογο χονδρικής
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Συμπληρώστε τη φόρμα με τα στοιχεία της εταιρείας σας. Θα επικοινωνήσουμε άμεσα για να συζητήσουμε τους όρους συνεργασίας.
            </p>
            <div className="border-l-2 pl-5" style={{ borderColor: 'var(--accent-reseller)' }}>
              <p className="text-sm text-muted leading-relaxed">
                Για άμεση επικοινωνία:<br />
                <a href="tel:+306947631338" className="text-foreground font-700 hover:text-accent transition-colors" style={{ fontWeight: 700 }}>
                  694 763 1338
                </a>
                <br />
                <a href="mailto:gpgas2026@gmail.com" className="text-foreground hover:text-accent transition-colors text-sm">
                  gpgas2026@gmail.com
                </a>
              </p>
            </div>
          </div>
          <LeadForm
            variant="reseller"
            title="Φόρμα Επικοινωνίας — Μεταπωλητές"
            subtitle="Συμπληρώστε τα στοιχεία σας για τιμοκατάλογο χονδρικής."
          />
        </div>
      </div>
    </section>
  );
}