'use client';

import { useEffect } from 'react';

export default function ConsentedAnalytics() {
  useEffect(() => {
    const consent = localStorage.getItem('gpxgas_cookie_consent');
    if (consent === 'accepted') {
      loadAnalytics();
    }

    // Listen for consent changes dispatched by CookieBanner
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ consent: string }>).detail;
      if (detail?.consent === 'accepted') {
        loadAnalytics();
      }
    };
    window.addEventListener('gpxgas_consent_change', handler);
    return () => window.removeEventListener('gpxgas_consent_change', handler);
  }, []);

  return null;
}

function loadAnalytics() {
  // Avoid double-loading
  if (document.querySelector('script[data-rocket-analytics]')) return;

  const script = document.createElement('script');
  script.type = 'module';
  script.async = true;
  script.src =
    'https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fgpxgas4348back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20';
  script.setAttribute('data-rocket-analytics', 'true');
  document.head.appendChild(script);
}
