'use client';

import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

function CookieSettingsButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('gpxgas_open_cookie_settings'));
  };
  return (
    <button
      onClick={handleClick}
      className="text-xs text-white/40 hover:text-white/70 transition-colors focus-ring cursor-pointer bg-transparent border-0 p-0"
    >
      Ρυθμίσεις cookies
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8" role="contentinfo">
      <div className="max-w-site mx-auto px-4">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={36} />
              <span className="font-bold text-lg tracking-tight text-primary-foreground">GPX GAS</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Εμπορία και διανομή υγραερίου με έμφαση στο προπάνιο, με πανελλαδική κάλυψη.
            </p>
          </div>

          {/* Πελάτες */}
          <div>
            <h3 className="eyebrow text-white/40 mb-4">Πελάτες</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/business" className="text-sm text-white/70 hover:text-white transition-colors focus-ring">
                  Για Επιχειρήσεις
                </Link>
              </li>
              <li>
                <Link href="/households" className="text-sm text-white/70 hover:text-white transition-colors focus-ring">
                  Για Κατοικίες
                </Link>
              </li>
              <li>
                <Link href="/resellers" className="text-sm text-white/70 hover:text-white transition-colors focus-ring">
                  Για Μεταπωλητές
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="eyebrow text-white/40 mb-4">Σύνδεσμοι</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/products" className="text-sm text-white/70 hover:text-white transition-colors focus-ring">
                  Προϊόντα
                </Link>
              </li>
              <li>
                <Link href="/etaireia" className="text-sm text-white/70 hover:text-white transition-colors focus-ring">
                  Η Εταιρεία
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors focus-ring">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-white/40 mb-4">Επικοινωνία</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+306947631338" className="text-sm text-white/70 hover:text-white transition-colors focus-ring flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  694 763 1338
                </a>
              </li>
              <li>
                <a href="mailto:gpgas2026@gmail.com" className="text-sm text-white/70 hover:text-white transition-colors focus-ring flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                  gpgas2026@gmail.com
                </a>
              </li>
              <li>
                <span className="text-sm text-white/50">Πανελλαδική κάλυψη</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal line */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-white/40 leading-relaxed">
            GPX GAS E.E. · ΓΕΜΗ 191744522000 · ΑΦΜ 803192989 · Έδρα: Σαλονικίου 8, Χαλκίδα 34132
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            © 2026 GPX GAS. Όλα τα δικαιώματα διατηρούνται.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/politiki-aporritou" className="text-xs text-white/40 hover:text-white/70 transition-colors focus-ring">
              Πολιτική Απορρήτου
            </Link>
            <Link href="/oroi-chrisis" className="text-xs text-white/40 hover:text-white/70 transition-colors focus-ring">
              Όροι Χρήσης
            </Link>
            <Link href="/cookies" className="text-xs text-white/40 hover:text-white/70 transition-colors focus-ring">
              Cookies
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}