'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type FormVariant = 'business' | 'household' | 'reseller' | 'general';

interface LeadFormProps {
  variant: FormVariant;
  title?: string;
  subtitle?: string;
}

interface FormErrors {
  [key: string]: string;
}

const klados_options = [
  'Εστιατόρια / Catering',
  'Ξενοδοχεία / Τουριστικά καταλύματα',
  'Αρτοποιεία / Ζαχαροπλαστεία',
  'Βιομηχανία / Βιοτεχνία',
  'Αγροτικές / Κτηνοτροφικές μονάδες',
  'Εργοστάσια τροφίμων',
  'Κολυμβητήρια / Αθλητικές εγκαταστάσεις',
  'Εμπορικές επιχειρήσεις',
  'Άλλο',
];

const proion_options = [
  'Προπάνιο',
  'Υγραέριο θέρμανσης',
  'Υγραέριο κίνησης',
  'Άλλο',
];

const drastiriotita_options = [
  'Εμπορία υγραερίου',
  'Πρατήριο υγραερίου κίνησης',
  'Διανομή εμφιαλωμένου',
  'Άλλο',
];

export default function LeadForm({ variant, title, subtitle }: LeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consentError, setConsentError] = useState('');

  const set = (key: string, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => { const n = { ...prev }; delete n[key]; return n; });
  };

  const validate = () => {
    const errs: FormErrors = {};
    if (!values.name?.trim()) errs.name = 'Το ονοματεπώνυμο είναι υποχρεωτικό.';
    if (!values.phone?.trim()) errs.phone = 'Το τηλέφωνο είναι υποχρεωτικό.';
    if (!values.email?.trim()) errs.email = 'Το email είναι υποχρεωτικό.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = 'Μη έγκυρη διεύθυνση email.';
    if (!values.message?.trim()) errs.message = 'Το μήνυμα είναι υποχρεωτικό.';
    if (variant === 'business') {
      if (!values.company?.trim()) errs.company = 'Η επωνυμία είναι υποχρεωτική.';
    }
    if (variant === 'household') {
      if (!values.area?.trim()) errs.area = 'Η περιοχή είναι υποχρεωτική.';
    }
    if (variant === 'reseller') {
      if (!values.company?.trim()) errs.company = 'Η επωνυμία εταιρείας είναι υποχρεωτική.';
      if (!values.afm?.trim()) errs.afm = 'Ο ΑΦΜ είναι υποχρεωτικός.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (!consent) {
      setConsentError('Απαιτείται η συγκατάθεσή σας για να συνεχίσετε.');
    } else {
      setConsentError('');
    }
    if (Object.keys(errs).length === 0 && consent) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border p-8 text-center" role="alert" aria-live="polite">
        <div className="w-12 h-12 bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 className="text-xl font-700 mb-2" style={{ fontWeight: 700 }}>Το αίτημά σας ελήφθη!</h3>
        <p className="text-muted text-sm leading-relaxed">
          Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό στο τηλέφωνο ή email που δηλώσατε.
        </p>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `form-input ${errors[field] ? 'border-red-500' : ''}`;

  return (
    <div className="bg-card border border-border p-6 md:p-8">
      {title && <h3 className="text-xl font-700 mb-1" style={{ fontWeight: 700 }}>{title}</h3>}
      {subtitle && <p className="text-muted text-sm mb-6">{subtitle}</p>}

      <form onSubmit={handleSubmit} noValidate aria-label="Φόρμα επικοινωνίας">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Common fields */}
          <div className="md:col-span-2">
            <label htmlFor="name" className="form-label">Ονοματεπώνυμο *</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={inputClass('name')}
              value={values.name || ''}
              onChange={(e) => set('name', e.target.value)}
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <p id="name-error" className="form-error" role="alert">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="form-label">Τηλέφωνο *</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass('phone')}
              value={values.phone || ''}
              onChange={(e) => set('phone', e.target.value)}
              aria-required="true"
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <p id="phone-error" className="form-error" role="alert">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={inputClass('email')}
              value={values.email || ''}
              onChange={(e) => set('email', e.target.value)}
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <p id="email-error" className="form-error" role="alert">{errors.email}</p>}
          </div>

          {/* Business variant */}
          {(variant === 'business') && (
            <>
              <div className="md:col-span-2">
                <label htmlFor="company" className="form-label">Επωνυμία Επιχείρησης *</label>
                <input
                  id="company"
                  type="text"
                  className={inputClass('company')}
                  value={values.company || ''}
                  onChange={(e) => set('company', e.target.value)}
                  aria-required="true"
                  aria-describedby={errors.company ? 'company-error' : undefined}
                />
                {errors.company && <p id="company-error" className="form-error" role="alert">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor="klados" className="form-label">Κλάδος</label>
                <select
                  id="klados"
                  className="form-input"
                  value={values.klados || ''}
                  onChange={(e) => set('klados', e.target.value)}
                >
                  <option value="">Επιλέξτε κλάδο</option>
                  {klados_options.map((k) => <option key={k} value={k}>{k}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="proion" className="form-label">Προϊόν Ενδιαφέροντος</label>
                <select
                  id="proion"
                  className="form-input"
                  value={values.proion || ''}
                  onChange={(e) => set('proion', e.target.value)}
                >
                  <option value="">Επιλέξτε προϊόν</option>
                  {proion_options.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="katanalosi" className="form-label">Εκτιμώμενη Μηνιαία Κατανάλωση</label>
                <input
                  id="katanalosi"
                  type="text"
                  placeholder="π.χ. 500 kg/μήνα"
                  className="form-input"
                  value={values.katanalosi || ''}
                  onChange={(e) => set('katanalosi', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="periochi_bus" className="form-label">Περιοχή Εγκατάστασης</label>
                <input
                  id="periochi_bus"
                  type="text"
                  className="form-input"
                  value={values.periochi_bus || ''}
                  onChange={(e) => set('periochi_bus', e.target.value)}
                />
              </div>
            </>
          )}

          {/* Household variant */}
          {variant === 'household' && (
            <>
              <div>
                <label htmlFor="area" className="form-label">Περιοχή *</label>
                <input
                  id="area"
                  type="text"
                  className={inputClass('area')}
                  value={values.area || ''}
                  onChange={(e) => set('area', e.target.value)}
                  aria-required="true"
                  aria-describedby={errors.area ? 'area-error' : undefined}
                />
                {errors.area && <p id="area-error" className="form-error" role="alert">{errors.area}</p>}
              </div>
              <div>
                <label htmlFor="dexameni" className="form-label">Υπάρχουσα Δεξαμενή</label>
                <select
                  id="dexameni"
                  className="form-input"
                  value={values.dexameni || ''}
                  onChange={(e) => set('dexameni', e.target.value)}
                >
                  <option value="">Επιλέξτε</option>
                  <option value="Ναι">Ναι</option>
                  <option value="Όχι">Όχι</option>
                  <option value="Δεν γνωρίζω">Δεν γνωρίζω</option>
                </select>
              </div>
              <div>
                <label htmlFor="chrisi" className="form-label">Χρήση</label>
                <select
                  id="chrisi"
                  className="form-input"
                  value={values.chrisi || ''}
                  onChange={(e) => set('chrisi', e.target.value)}
                >
                  <option value="">Επιλέξτε</option>
                  <option value="Θέρμανση">Θέρμανση</option>
                  <option value="Μαγείρεμα">Μαγείρεμα</option>
                  <option value="Και τα δύο">Και τα δύο</option>
                </select>
              </div>
            </>
          )}

          {/* Reseller variant */}
          {variant === 'reseller' && (
            <>
              <div className="md:col-span-2">
                <label htmlFor="company_res" className="form-label">Επωνυμία Εταιρείας *</label>
                <input
                  id="company_res"
                  type="text"
                  className={inputClass('company')}
                  value={values.company || ''}
                  onChange={(e) => set('company', e.target.value)}
                  aria-required="true"
                  aria-describedby={errors.company ? 'company-res-error' : undefined}
                />
                {errors.company && <p id="company-res-error" className="form-error" role="alert">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor="afm" className="form-label">ΑΦΜ *</label>
                <input
                  id="afm"
                  type="text"
                  className={inputClass('afm')}
                  value={values.afm || ''}
                  onChange={(e) => set('afm', e.target.value)}
                  aria-required="true"
                  aria-describedby={errors.afm ? 'afm-error' : undefined}
                />
                {errors.afm && <p id="afm-error" className="form-error" role="alert">{errors.afm}</p>}
              </div>
              <div>
                <label htmlFor="drastiriotita" className="form-label">Δραστηριότητα</label>
                <select
                  id="drastiriotita"
                  className="form-input"
                  value={values.drastiriotita || ''}
                  onChange={(e) => set('drastiriotita', e.target.value)}
                >
                  <option value="">Επιλέξτε</option>
                  {drastiriotita_options.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="ogkos" className="form-label">Εκτιμώμενος Μηνιαίος Όγκος</label>
                <input
                  id="ogkos"
                  type="text"
                  placeholder="π.χ. 20 τόνοι/μήνα"
                  className="form-input"
                  value={values.ogkos || ''}
                  onChange={(e) => set('ogkos', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="topos" className="form-label">Προτιμώμενος Τόπος Φόρτωσης</label>
                <input
                  id="topos"
                  type="text"
                  placeholder="π.χ. Αθήνα, Θεσσαλονίκη"
                  className="form-input"
                  value={values.topos || ''}
                  onChange={(e) => set('topos', e.target.value)}
                />
              </div>
            </>
          )}

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="form-label">Μήνυμα *</label>
            <textarea
              id="message"
              rows={4}
              className={inputClass('message')}
              value={values.message || ''}
              onChange={(e) => set('message', e.target.value)}
              aria-required="true"
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <p id="message-error" className="form-error" role="alert">{errors.message}</p>}
          </div>

          {/* Consent */}
          <div className="md:col-span-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (e.target.checked) setConsentError('');
                }}
                className="mt-0.5 w-4 h-4 shrink-0 accent-accent"
                aria-required="true"
                aria-describedby={consentError ? 'consent-error' : undefined}
              />
              <span className="text-sm text-muted leading-relaxed">
                Συναινώ στην επεξεργασία των στοιχείων μου για την απάντηση στο αίτημά μου, σύμφωνα με την{' '}
                <Link href="/politiki-aporritou" className="text-accent hover:underline focus-ring">
                  Πολιτική Απορρήτου
                </Link>
                .
              </span>
            </label>
            {consentError && <p id="consent-error" className="form-error" role="alert">{consentError}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="btn-primary mt-6 w-full justify-center text-sm font-700"
          style={{ fontWeight: 700 }}
        >
          Αποστολή αιτήματος
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </form>
    </div>
  );
}