import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Πολιτική Cookies — GPX GAS',
  description: 'Πολιτική cookies του ιστότοπου GPX GAS.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 bg-background">
        <div className="max-w-site mx-auto px-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent mb-4">Νομικά</p>
            <h1 className="text-hero-xl mb-3">Πολιτική Cookies</h1>
            <p className="text-sm text-muted mb-8">Τελευταία ενημέρωση: 25/09/2026</p>

            <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-8">

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>1. Τι είναι τα Cookies</h2>
                <p>
                  Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε έναν ιστότοπο. Χρησιμοποιούνται για τη βελτίωση της εμπειρίας περιήγησής σας.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>2. Cookies που Χρησιμοποιούμε</h2>
                <p className="mb-4">Ο παρακάτω πίνακας περιγράφει τα cookies που χρησιμοποιεί ο ιστότοπος:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                      <tr className="bg-input">
                        <th className="text-left p-3 font-700 text-foreground border-b border-border" style={{ fontWeight: 700 }}>Όνομα</th>
                        <th className="text-left p-3 font-700 text-foreground border-b border-border" style={{ fontWeight: 700 }}>Σκοπός</th>
                        <th className="text-left p-3 font-700 text-foreground border-b border-border" style={{ fontWeight: 700 }}>Διάρκεια</th>
                        <th className="text-left p-3 font-700 text-foreground border-b border-border" style={{ fontWeight: 700 }}>Πάροχος</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-b border-border align-top"><code>gpxgas_cookie_consent</code></td>
                        <td className="p-3 border-b border-border align-top">Αποθήκευση της επιλογής σας για τα cookies</td>
                        <td className="p-3 border-b border-border align-top">6 μήνες</td>
                        <td className="p-3 border-b border-border align-top">GPX GAS (απαραίτητο)</td>
                      </tr>
                      <tr>
                        <td className="p-3 align-top"><code>rocket-web.js</code></td>
                        <td className="p-3 align-top">Μέτρηση επισκεψιμότητας ιστότοπου (analytics) μέσω της πλατφόρμας Rocket — φορτώνεται μόνο μετά από ρητή αποδοχή</td>
                        <td className="p-3 align-top">Διάρκεια συνεδρίας / session</td>
                        <td className="p-3 align-top">Rocket (appanalytics.rocket.new) — analytics τρίτου</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>3. Διαχείριση Cookies</h2>
                <p>
                  Μπορείτε να διαχειριστείτε ή να διαγράψετε τα cookies μέσω των ρυθμίσεων του προγράμματος περιήγησής σας. Σημειώστε ότι η απενεργοποίηση ορισμένων cookies ενδέχεται να επηρεάσει τη λειτουργικότητα του ιστότοπου.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>4. Ανάκληση συγκατάθεσης</h2>
                <p>
                  Μπορείτε να ανακαλέσετε ή να τροποποιήσετε τη συγκατάθεσή σας οποτεδήποτε, μέσω του συνδέσμου «Ρυθμίσεις cookies» στο κάτω μέρος κάθε σελίδας. Η άρνηση των μη απαραίτητων cookies δεν επηρεάζει τη λειτουργία του ιστότοπου.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>5. Υπεύθυνος Επεξεργασίας</h2>
                <p>
                  GPX GAS E.E. · ΓΕΜΗ 191744522000 · ΑΦΜ 803192989 · Σαλονικίου 8, Χαλκίδα 34132. Για κάθε ερώτημα σχετικά με τα cookies ή τα προσωπικά σας δεδομένα, επικοινωνήστε στο{' '}
                  <a href="mailto:gpgas2026@gmail.com" className="text-accent hover:underline">gpgas2026@gmail.com</a>.
                </p>
                <p className="mt-3">
                  Έχετε επίσης δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα ({' '}
                  <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.dpa.gr</a>).
                </p>
                <p className="mt-3">
                  Ανατρέξτε επίσης στην{' '}
                  <Link href="/politiki-aporritou" className="text-accent hover:underline">Πολιτική Απορρήτου</Link>.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}