"use client";
import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Dlaczego warto wybrać FitWise?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Poznaj kluczowe funkcjonalności naszej aplikacji, które usprawnią zarządzanie obiektami sportowymi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div
            className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm"
            role="region"
            aria-labelledby="feature-1-title"
          >
            <h3
              id="feature-1-title"
              className="font-semibold text-xl mb-2"
            >
              Funkcja 1
            </h3>
            <p className="text-gray-600">
              Łatwe zarządzanie rezerwacjami i harmonogramami dla wszystkich obiektów sportowych.
            </p>
          </div>
          {/* Feature 2 */}
          <div
            className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm"
            role="region"
            aria-labelledby="feature-2-title"
          >
            <h3
              id="feature-2-title"
              className="font-semibold text-xl mb-2"
            >
              Funkcja 2
            </h3>
            <p className="text-gray-600">
              Bezproblemowe śledzenie i zarządzanie członkostwami.
            </p>
          </div>
          {/* Feature 3 */}
          <div
            className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm"
            role="region"
            aria-labelledby="feature-3-title"
          >
            <h3
              id="feature-3-title"
              className="font-semibold text-xl mb-2"
            >
              Funkcja 3
            </h3>
            <p className="text-gray-600">
              Generowanie szczegółowych raportów i analiz.
            </p>
          </div>
          {/* Feature 4 */}
          <div
            className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm"
            role="region"
            aria-labelledby="feature-4-title"
          >
            <h3
              id="feature-4-title"
              className="font-semibold text-xl mb-2"
            >
              Funkcja 4
            </h3>
            <p className="text-gray-600">
              Automatyzacja zadań związanych z zarządzaniem obiektami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}