"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto py-4 sm:py-6">
        <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Szanujemy Twoją prywatność
            </h3>
            <p className="text-gray-600 text-sm">
              Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie. 
              Możesz zapoznać się z naszą{' '}
              <Link href="/cookies" className="text-primary hover:underline">
                Polityką Cookies
              </Link>
              {' '}oraz{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Polityką Prywatności
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={acceptEssential}
              className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Tylko niezbędne
            </button>
            <button
              onClick={acceptAll}
              className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              Akceptuję wszystkie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
