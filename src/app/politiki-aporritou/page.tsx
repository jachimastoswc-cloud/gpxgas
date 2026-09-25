import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Πολιτική Απορρήτου — GPX GAS',
  description: 'Πολιτική απορρήτου της GPX GAS E.E. Πληροφορίες για τα δεδομένα που συλλέγουμε και τα δικαιώματά σας.',
  alternates: { canonical: '/politiki-aporritou' },
};

export default function PolitikiAporritouPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-16 bg-background">
        <div className="max-w-site mx-auto px-4">
          <div className="max-w-3xl">
            <p className="eyebrow text-accent mb-4">Νομικά</p>
            <h1 className="text-hero-xl mb-3">Πολιτική Απορρήτου</h1>
            <p className="text-sm text-muted mb-8">Τελευταία ενημέρωση: 25/09/2026</p>

            <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-8">

              <section aria-label="Υπεύθυνος επεξεργασίας">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>1. Υπεύθυνος Επεξεργασίας</h2>
                <p>
                  Υπεύθυνος επεξεργασίας των προσωπικών σας δεδομένων είναι η εταιρεία <strong>GPX GAS E.E.</strong> (εφεξής «GPX GAS»), με ΓΕΜΗ 191744522000, ΑΦΜ 803192989, έδρα Σαλονικίου 8, Χαλκίδα 34132.
                </p>
                <p className="mt-2">
                  Για κάθε θέμα σχετικό με τα προσωπικά σας δεδομένα, μπορείτε να επικοινωνήσετε μαζί μας στο email:{' '}
                  <a href="mailto:gpgas2026@gmail.com" className="text-accent hover:underline">gpgas2026@gmail.com</a>.
                </p>
              </section>

              <hr className="section-divider" />

              <section aria-label="Δεδομένα που συλλέγουμε">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>2. Δεδομένα που Συλλέγουμε</h2>
                <p>Μέσω των φορμών επικοινωνίας του ιστότοπου, συλλέγουμε τα ακόλουθα δεδομένα:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  <li><strong>Κοινά πεδία (όλες οι φόρμες):</strong> Ονοματεπώνυμο, τηλέφωνο, email, μήνυμα.</li>
                  <li><strong>Φόρμα Επιχειρήσεων:</strong> Επωνυμία επιχείρησης, κλάδος, προϊόν ενδιαφέροντος, εκτιμώμενη μηνιαία κατανάλωση, περιοχή εγκατάστασης.</li>
                  <li><strong>Φόρμα Κατοικιών:</strong> Περιοχή, ύπαρξη δεξαμενής, τύπος χρήσης.</li>
                  <li><strong>Φόρμα Μεταπωλητών:</strong> Επωνυμία εταιρείας, ΑΦΜ, δραστηριότητα, εκτιμώμενος μηνιαίος όγκος, προτιμώμενος τόπος φόρτωσης.</li>
                </ul>
                <p className="mt-3">
                  Εάν αποδεχτείτε τα analytics cookies, ο ιστότοπος χρησιμοποιεί το εργαλείο rocket-web.js (appanalytics.rocket.new) για μέτρηση επισκεψιμότητας. Δεν συλλέγονται δεδομένα αναλυτικών χωρίς τη ρητή συγκατάθεσή σας.
                </p>
              </section>

              <hr className="section-divider" />

              <section aria-label="Σκοπός και νομική βάση">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>3. Σκοπός Επεξεργασίας και Νομική Βάση</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Απάντηση σε αίτημά σας:</strong> Νομική βάση — συγκατάθεση (άρθρο 6 παρ. 1 στοιχ. α ΓΚΠΔ) και προσυμβατικά μέτρα (άρθρο 6 παρ. 1 στοιχ. β ΓΚΠΔ).</li>
                  <li><strong>Αποστολή εμπορικής προσφοράς:</strong> Νομική βάση — προσυμβατικά μέτρα κατόπιν αιτήματός σας.</li>
                  <li><strong>Analytics (εφόσον έχετε δώσει συγκατάθεση):</strong> Νομική βάση — συγκατάθεση (άρθρο 6 παρ. 1 στοιχ. α ΓΚΠΔ).</li>
                </ul>
              </section>

              <hr className="section-divider" />

              <section aria-label="Χρόνος διατήρησης">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>4. Χρόνος Διατήρησης Δεδομένων</h2>
                <p>
                  Τα δεδομένα σας διατηρούνται για το χρονικό διάστημα που είναι απαραίτητο για την εξυπηρέτηση του αιτήματός σας ή για όσο χρόνο απαιτεί η σύμβαση και η κείμενη νομοθεσία.
                </p>
              </section>

              <hr className="section-divider" />

              <section aria-label="Δικαιώματα">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>5. Τα Δικαιώματά σας</h2>
                <p>Σύμφωνα με τον ΓΚΠΔ, έχετε τα ακόλουθα δικαιώματα:</p>
                <ul className="list-disc pl-5 mt-3 space-y-1">
                  <li><strong>Πρόσβαση:</strong> Δικαίωμα να γνωρίζετε ποια δεδομένα σας επεξεργαζόμαστε.</li>
                  <li><strong>Διόρθωση:</strong> Δικαίωμα διόρθωσης ανακριβών δεδομένων.</li>
                  <li><strong>Διαγραφή:</strong> Δικαίωμα διαγραφής («δικαίωμα στη λήθη»).</li>
                  <li><strong>Περιορισμός:</strong> Δικαίωμα περιορισμού της επεξεργασίας.</li>
                  <li><strong>Εναντίωση:</strong> Δικαίωμα εναντίωσης στην επεξεργασία.</li>
                  <li><strong>Φορητότητα:</strong> Δικαίωμα λήψης των δεδομένων σας σε δομημένη μορφή.</li>
                </ul>
                <p className="mt-3">
                  Για άσκηση των δικαιωμάτων σας, επικοινωνήστε στο:{' '}
                  <a href="mailto:gpgas2026@gmail.com" className="text-accent hover:underline">gpgas2026@gmail.com</a>.
                </p>
                <p className="mt-2">
                  Έχετε επίσης το δικαίωμα υποβολής καταγγελίας στην <strong>Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (ΑΠΔΠΧ)</strong> ({' '}
                  <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.dpa.gr</a>).
                </p>
              </section>

              <hr className="section-divider" />

              <section aria-label="Cookies">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>6. Cookies</h2>
                <p>
                  Για πληροφορίες σχετικά με τη χρήση cookies, ανατρέξτε στην{' '}
                  <Link href="/cookies" className="text-accent hover:underline">Πολιτική Cookies</Link>.
                </p>
              </section>

              <hr className="section-divider" />

              <section aria-label="Τροποποιήσεις">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>7. Τροποποιήσεις</h2>
                <p>
                  Η παρούσα πολιτική ενδέχεται να τροποποιείται. Η τελευταία ενημέρωση πραγματοποιήθηκε στις 25/09/2026.
                </p>
              </section>

              <hr className="section-divider" />

              <section aria-label="Υπεύθυνος Επεξεργασίας — στοιχεία">
                <h2 className="text-xl font-700 text-foreground mb-3" style={{ fontWeight: 700 }}>8. Υπεύθυνος Επεξεργασίας — Στοιχεία Επικοινωνίας</h2>
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