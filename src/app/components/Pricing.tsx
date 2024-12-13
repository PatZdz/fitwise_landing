"use client";
import React from "react";

export default function Pricing() {
  // Zmieniamy strukturę, by była jak w Figma – kolumny: Basic, Pro, Enterprise
  // a w wierszach funkcjonalności.
  const pricingData = [
    {
      plan: "Basic",
      price: "29zł/miesiąc",
      cta: "Wybierz Basic",
      features: {
        "Zarządzanie rezerwacjami": true,
        "Zarządzanie członkostwami": true,
        "Raportowanie i analityka": true,
        "Obsługa klienta": true,
        "Własne integracje": false,
        "Automatyzacje": false,
        "Konta użytkowników": false,
        "Przestrzeń dyskowa": true,
        "Dostęp do API": false,
        "Aplikacja mobilna": false,
        "Eksport danych": false,
        "Własny branding": false,
      },
    },
    {
      plan: "Pro",
      price: "59zł/miesiąc",
      cta: "Wybierz Pro",
      features: {
        "Zarządzanie rezerwacjami": true,
        "Zarządzanie członkostwami": true,
        "Raportowanie i analityka": true,
        "Obsługa klienta": true,
        "Własne integracje": true,
        "Automatyzacje": true,
        "Konta użytkowników": true,
        "Przestrzeń dyskowa": true,
        "Dostęp do API": true,
        "Aplikacja mobilna": true,
        "Eksport danych": true,
        "Własny branding": false,
      },
    },
    {
      plan: "Enterprise",
      price: "99zł/miesiąc",
      cta: "Wybierz Enterprise",
      features: {
        "Zarządzanie rezerwacjami": true,
        "Zarządzanie członkostwami": true,
        "Raportowanie i analityka": true,
        "Obsługa klienta": true,
        "Własne integracje": true,
        "Automatyzacje": true,
        "Konta użytkowników": true,
        "Przestrzeń dyskowa": true,
        "Dostęp do API": true,
        "Aplikacja mobilna": true,
        "Eksport danych": true,
        "Własny branding": true,
      },
    },
  ];

  // Lista wszystkich funkcjonalności w odpowiedniej kolejności
  const allFeatures = Object.keys(pricingData[0].features);

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Porównaj plany</h2>
        <p className="text-center text-gray-600 mb-12">
          Wybierz plan dopasowany do Twoich potrzeb
        </p>

        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border-collapse">
            <thead>
              <tr className="bg-[#F7F8FA]">
                <th className="py-4 px-2 text-left"></th>
                {pricingData.map((col) => (
                  <th key={col.plan} className="py-4 px-2 text-center font-semibold">
                    <div className="mb-2 text-xl">{col.plan}</div>
                    <div className="text-2xl font-bold mb-2">{col.price}</div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                      {col.cta}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature) => (
                <tr key={feature} className="border-b last:border-none">
                  <td className="py-3 px-2 font-medium text-gray-700 text-left">
                    {feature}
                  </td>
                  {pricingData.map((col) => (
                    <td key={col.plan + feature} className="py-3 px-2 text-center">
                      {col.features[feature as keyof typeof col.features] ? "&check;" : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}