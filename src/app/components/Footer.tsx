"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto pb-4">
          <h3 className="font-bold mb-3 text-center">Polityki</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="text-center"><a href="/privacy" aria-label="Polityka prywatności">Polityka prywatności</a></li>
            <li className="text-center"><a href="/terms" aria-label="Warunki korzystania">Warunki korzystania</a></li>
            <li className="text-center"><a href="/cookies" aria-label="Polityka plików cookie">Polityka plików cookie</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-12 md:mt-8 pt-8 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} FitWise. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}