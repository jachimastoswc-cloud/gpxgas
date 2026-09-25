'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

interface HeaderProps {
  accentColor?: string;
}

const navLinks = [
  { label: 'Αρχική', href: '/' },
  { label: 'Για Επιχειρήσεις', href: '/business', audience: true },
  { label: 'Για Κατοικίες', href: '/households', audience: true },
  { label: 'Για Μεταπωλητές', href: '/resellers', audience: true },
  { label: 'Προϊόντα', href: '/products' },
  { label: 'Η Εταιρεία', href: '/etaireia' },
  { label: 'Επικοινωνία', href: '/contact' },
];

export default function Header({ accentColor }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Utility Bar */}
      <div className="w-full bg-primary text-primary-foreground py-2 px-4 text-xs hidden md:block">
        <div className="max-w-site mx-auto flex items-center justify-between">
          <span className="font-medium tracking-wide opacity-70">Πανελλαδική κάλυψη</span>
          <div className="flex items-center gap-6">
            <a href="tel:+306947631338" className="hover:opacity-100 opacity-80 transition-opacity font-medium flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              694 763 1338
            </a>
            <a href="mailto:gpgas2026@gmail.com" className="hover:opacity-100 opacity-80 transition-opacity font-medium flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              gpgas2026@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-primary shadow-lg shadow-black/20'
            : 'bg-primary'
        }`}
        role="banner"
      >
        <div className="max-w-site mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 focus-ring" aria-label="GPX GAS - Αρχική">
            <AppLogo size={36} />
            <span className="font-bold text-lg tracking-tight text-primary-foreground hidden sm:block">
              GPX GAS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Κύρια πλοήγηση">
            {navLinks.map((link, i) => {
              const isAudienceGroup = link.audience;
              const prevIsAudience = i > 0 && navLinks[i - 1].audience;
              const nextIsAudience = i < navLinks.length - 1 && navLinks[i + 1].audience;
              const isFirstAudience = isAudienceGroup && !prevIsAudience;
              const isLastAudience = isAudienceGroup && !nextIsAudience;

              return (
                <React.Fragment key={link.href}>
                  {isFirstAudience && (
                    <span className="w-px h-4 bg-white/20 mx-1" aria-hidden="true" />
                  )}
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm transition-colors focus-ring ${
                      isAudienceGroup
                        ? 'text-white font-700 opacity-95 hover:opacity-100' :'text-white/70 font-500 hover:text-white'
                    }`}
                    style={isAudienceGroup ? { fontWeight: 700 } : { fontWeight: 500 }}
                  >
                    {link.label}
                  </Link>
                  {isLastAudience && (
                    <span className="w-px h-4 bg-white/20 mx-1" aria-hidden="true" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+306947631338"
              className="hidden md:flex items-center gap-2 text-sm font-700 text-white border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors focus-ring"
              style={{ fontWeight: 700 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Κλήση
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-white focus-ring"
              aria-label={menuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-primary border-t border-white/10"
            role="dialog"
            aria-modal="true"
            aria-label="Μενού πλοήγησης"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-3 text-sm border-b border-white/10 last:border-0 focus-ring transition-colors ${
                    link.audience
                      ? 'text-white font-700' :'text-white/70 font-500 hover:text-white'
                  }`}
                  style={link.audience ? { fontWeight: 700 } : { fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* Mobile utility */}
            <div className="px-4 pb-4 flex gap-3">
              <a href="tel:+306947631338" className="flex-1 btn-primary text-center justify-center text-sm">
                Κλήση
              </a>
              <a href="mailto:gpgas2026@gmail.com" className="flex-1 btn-outline text-center justify-center text-sm border-white/30">
                Email
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-primary border-t border-white/20 flex">
        <a
          href="tel:+306947631338"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white text-sm font-700 border-r border-white/20"
          style={{ fontWeight: 700 }}
          aria-label="Κλήση στο 694 763 1338"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Κλήση
        </a>
        <a
          href="mailto:gpgas2026@gmail.com"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white text-sm font-700"
          style={{ fontWeight: 700 }}
          aria-label="Email gpgas2026@gmail.com"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
          Email
        </a>
      </div>
    </>
  );
}