'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function setCookieConsent(value: 'accepted' | 'rejected') {
  // 6-month expiry
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 6);
  document.cookie = `gpxgas_cookie_consent=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  // Also keep localStorage in sync for ConsentedAnalytics
  localStorage.setItem('gpxgas_cookie_consent', value);
}

function getCookieConsent(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|;\s*)gpxgas_cookie_consent=([^;]+)/);
  return match ? match[1] : null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) setVisible(true);

    // Allow re-opening the banner from the footer "Ρυθμίσεις cookies" link
    const handleReopen = () => {
      setShowSettings(false);
      setVisible(true);
    };
    window.addEventListener('gpxgas_open_cookie_settings', handleReopen);
    return () => window.removeEventListener('gpxgas_open_cookie_settings', handleReopen);
  }, []);

  const accept = () => {
    setCookieConsent('accepted');
    window.dispatchEvent(new CustomEvent('gpxgas_consent_change', { detail: { consent: 'accepted' } }));
    setVisible(false);
  };

  const reject = () => {
    setCookieConsent('rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="true"
      aria-label="Συγκατάθεση cookies"
    >
      <div className="max-w-site mx-auto px-4 py-4">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-sm text-white/80 flex-1 leading-relaxed">
              Χρησιμοποιούμε cookies για τη βασική λειτουργία του ιστότοπου. Δεν φορτώνουμε analytics ή cookies τρίτων χωρίς τη συγκατάθεσή σας.{' '}
              <Link href="/cookies" className="underline hover:text-white focus-ring">
                Πολιτική Cookies
              </Link>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="text-xs text-white/60 hover:text-white underline focus-ring"
              >
                Ρυθμίσεις
              </button>
              <button
                onClick={reject}
                className="text-xs font-700 text-white border border-white/60 px-4 py-2 hover:bg-white/10 transition-colors focus-ring"
                style={{ fontWeight: 700 }}
              >
                Απόρριψη
              </button>
              <button
                onClick={accept}
                className="text-xs font-700 bg-accent text-white px-4 py-2 hover:bg-accent-hover transition-colors focus-ring"
                style={{ fontWeight: 700 }}
              >
                Αποδοχή
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-sm text-white/80 font-600" style={{ fontWeight: 600 }}>Ρυθμίσεις Cookies</p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 text-sm text-white/80">
                <input type="checkbox" checked disabled className="w-4 h-4 accent-accent" aria-label="Απαραίτητα cookies (πάντα ενεργά)" />
                <span>Απαραίτητα cookies (πάντα ενεργά)</span>
              </label>
              <label className="flex items-center gap-3 text-sm text-white/80">
                <input type="checkbox" id="analytics-consent-checkbox" className="w-4 h-4" aria-label="Analytics cookies (rocket-web.js)" />
                <span>Analytics cookies (rocket-web.js — μετρήσεις επισκεψιμότητας)</span>
              </label>
            </div>
            <div className="flex gap-3">
              <button
                onClick={reject}
                className="text-xs font-700 text-white border border-white/60 px-4 py-2 hover:bg-white/10 transition-colors focus-ring"
                style={{ fontWeight: 700 }}
              >
                Απόρριψη όλων
              </button>
              <button
                onClick={() => {
                  const cb = document.getElementById('analytics-consent-checkbox') as HTMLInputElement | null;
                  if (cb?.checked) {
                    accept();
                  } else {
                    reject();
                  }
                }}
                className="text-xs font-700 bg-accent text-white px-4 py-2 hover:bg-accent-hover transition-colors focus-ring"
                style={{ fontWeight: 700 }}
              >
                Αποθήκευση επιλογών
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}