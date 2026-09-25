'use client';

import React, { useState } from 'react';
import LeadForm from '@/components/LeadForm';

type Tab = 'business' | 'household' | 'reseller' | 'general';

const tabs: { id: Tab; label: string }[] = [
  { id: 'business', label: 'Επιχειρήσεις' },
  { id: 'household', label: 'Κατοικίες' },
  { id: 'reseller', label: 'Μεταπωλητές' },
  { id: 'general', label: 'Γενική Επικοινωνία' },
];

export default function ContactContent() {
  const [activeTab, setActiveTab] = useState<Tab>('business');

  return (
    <>
      {/* Page header */}
      <div className="bg-primary py-20 pt-12">
        <div className="max-w-site mx-auto px-4">
          <p className="eyebrow text-white/60 mb-4">Επικοινωνία</p>
          <h1 className="text-hero-xl text-white mb-4">
            Επικοινωνήστε μαζί μας
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Ζητήστε προσφορά ή θέστε οποιαδήποτε ερώτηση. Θα απαντήσουμε το συντομότερο δυνατό.
          </p>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="max-w-site mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-700 mb-8 tracking-tight" style={{ fontWeight: 700 }}>
                Στοιχεία επικοινωνίας
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="eyebrow text-muted mb-1">Τηλέφωνο</p>
                    <a href="tel:+306947631338" className="text-sm font-700 text-foreground hover:text-accent transition-colors focus-ring" style={{ fontWeight: 700 }}>
                      694 763 1338
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                  </div>
                  <div>
                    <p className="eyebrow text-muted mb-1">Email</p>
                    <a href="mailto:gpgas2026@gmail.com" className="text-sm font-600 text-foreground hover:text-accent transition-colors focus-ring" style={{ fontWeight: 600 }}>
                      gpgas2026@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div>
                    <p className="eyebrow text-muted mb-1">Κάλυψη</p>
                    <span className="text-sm font-600 text-foreground" style={{ fontWeight: 600 }}>Πανελλαδική</span>
                  </div>
                </div>
              </div>

              <hr className="section-divider my-8" />

              <div>
                <p className="eyebrow text-muted mb-3">Νομικά στοιχεία</p>
                <p className="text-xs text-muted leading-relaxed">
                  GPX GAS E.E.<br />
                  ΓΕΜΗ: 191744522000<br />
                  ΑΦΜ: 803192989<br />
                  Σαλονικίου 8, Χαλκίδα 34132
                </p>
              </div>
            </div>

            {/* Right: tabbed form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-700 mb-6 tracking-tight" style={{ fontWeight: 700 }}>
                Φόρμα επικοινωνίας
              </h2>

              {/* Tabs */}
              <div className="flex border border-border mb-6 overflow-x-auto" role="tablist" aria-label="Κατηγορία επικοινωνίας">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    aria-controls={`tabpanel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-4 py-3 text-xs font-700 whitespace-nowrap border-r border-border last:border-r-0 transition-colors focus-ring ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-muted hover:bg-input'
                    }`}
                    style={{ fontWeight: 700 }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form panel */}
              <div
                id={`tabpanel-${activeTab}`}
                role="tabpanel"
                aria-label={`Φόρμα για ${tabs.find((t) => t.id === activeTab)?.label}`}
              >
                <LeadForm
                  variant={activeTab}
                  subtitle="Συμπληρώστε τα παρακάτω στοιχεία."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}