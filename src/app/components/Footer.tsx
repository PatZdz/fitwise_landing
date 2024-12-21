"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-3">Firma</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" aria-label="O nas">O nas</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Produkt</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" aria-label="Funkcje">Funkcje</a></li>
            <li><a href="#" aria-label="Cennik">Cennik</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Wsparcie</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" aria-label="Kontakt">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Prawo</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" aria-label="Polityka prywatności">Polityka prywatności</a></li>
            <li><a href="#" aria-label="Warunki korzystania">Warunki korzystania</a></li>
            <li><a href="#" aria-label="Polityka plików cookie">Polityka plików cookie</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} FitWise. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}