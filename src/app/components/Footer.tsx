"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-3">Firma</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/about" aria-label="O nas">O nas</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Produkt</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/#features" aria-label="Funkcje">Funkcje</Link></li>
            <li><Link href="/#pricing" aria-label="Cennik">Cennik</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Wsparcie</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/#contact" aria-label="Kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Prawo</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link href="/privacy" aria-label="Polityka prywatności">Polityka prywatności</Link></li>
            <li><Link href="/terms" aria-label="Warunki korzystania">Warunki korzystania</Link></li>
            <li><Link href="/cookies" aria-label="Polityka plików cookie">Polityka plików cookie</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} FitWise. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
