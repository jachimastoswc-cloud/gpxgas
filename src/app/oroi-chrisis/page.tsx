import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Όροι Χρήσης — GPX GAS',
  description: 'Όροι χρήσης του ιστότοπου GPX GAS.',
  alternates: { canonical: '/oroi-chrisis' },
};

export default function OroiChrisisPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 bg-background">
        <div className="max-w-site mx-auto px-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent mb-4">Νομικά</p>
            <h1 className="text-hero-xl mb-3">Όροι Χρήσης</h1>
            <p className="text-sm text-muted mb-8">Τελευταία ενημέρωση: 25/09/2026</p>

            <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-8">

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>1. Αποδοχή Όρων</h2>
                <p>
                  Η χρήση του παρόντος ιστότοπου (gpxgas.gr) συνεπάγεται την ανεπιφύλακτη αποδοχή των παρόντων όρων χρήσης. Εάν δεν συμφωνείτε με τους όρους αυτούς, παρακαλούμε να μην χρησιμοποιείτε τον ιστότοπο.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>2. Παρεχόμενες Πληροφορίες</h2>
                <p>
                  Οι πληροφορίες που παρέχονται στον παρόντα ιστότοπο έχουν αμιγώς ενημερωτικό χαρακτήρα. Η GPX GAS καταβάλλει κάθε δυνατή προσπάθεια για την ακρίβεια και επικαιρότητα των πληροφοριών, ωστόσο δεν εγγυάται την πληρότητά τους.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>3. Πνευματική Ιδιοκτησία</h2>
                <p>
                  Το σύνολο του περιεχομένου του ιστότοπου (κείμενα, εικόνες, λογότυπα, σχεδιασμός) αποτελεί πνευματική ιδιοκτησία της GPX GAS ή τρίτων από τους οποίους η GPX GAS έχει λάβει τη σχετική άδεια. Απαγορεύεται η αναπαραγωγή χωρίς ρητή γραπτή άδεια.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>4. Περιορισμός Ευθύνης</h2>
                <p>
                  Η GPX GAS δεν φέρει ευθύνη για τυχόν ζημίες που προκύπτουν από τη χρήση ή την αδυναμία χρήσης του ιστότοπου ή των πληροφοριών που περιέχονται σε αυτόν.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>5. Προστασία Δεδομένων</h2>
                <p>
                  Για πληροφορίες σχετικά με την επεξεργασία των προσωπικών σας δεδομένων, ανατρέξτε στην{' '}
                  <Link href="/politiki-aporritou" className="text-accent hover:underline">Πολιτική Απορρήτου</Link>.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>6. Εφαρμοστέο Δίκαιο</h2>
                <p>
                  Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Για οποιαδήποτε διαφορά αρμόδια είναι τα αρμόδια δικαστήρια σύμφωνα με την κείμενη νομοθεσία.
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>7. Επικοινωνία</h2>
                <p>
                  Για οποιοδήποτε ερώτημα σχετικά με τους παρόντες όρους:{' '}
                  <a href="mailto:gpgas2026@gmail.com" className="text-accent hover:underline">gpgas2026@gmail.com</a>
                </p>
              </section>

              <hr className="section-divider" />

              <section>
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>8. Υπεύθυνος Επεξεργασίας</h2>
                <p>
                  GPX GAS E.E. · ΓΕΜΗ 191744522000 · ΑΦΜ 803192989 · Σαλονικίου 8, Χαλκίδα 34132. Για κάθε ερώτημα σχετικά με τα cookies ή τα προσωπικά σας δεδομένα, επικοινωνήστε στο{' '}
                  <a href="mailto:gpgas2026@gmail.com" className="text-accent hover:underline">gpgas2026@gmail.com</a>.
                </p>
                <p className="mt-3">
                  Έχετε επίσης δικαίωμα υποβολής καταγγελίας στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα ({' '}
                  <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.dpa.gr</a>).
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