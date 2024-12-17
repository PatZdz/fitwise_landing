"use client";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline"; // Zmieniono ikonę na outline

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 bg-white"
      role="region"
      aria-labelledby="pricing-section-title"
    >
      <div className="container mx-auto px-4">
        <h2
          id="pricing-section-title"
          className="text-3xl font-bold text-center mb-4"
        >
          Wybierz swój plan
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Niezależnie od wielkości Twojego obiektu sportowego, mamy plan
          dopasowany do Twoich potrzeb.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="flex flex-col bg-[#eaf1f7] rounded-lg shadow-sm">
            <div className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">Trener personalny</h3>
              <p className="text-4xl font-bold mb-4">149 zł / miesiąc</p>
              <p className="text-gray-600 mb-6">
                Podstawowy plan dla trenerów personalnych, którzy chcą zakończyć chaos i zwiększyć efektywność.
              </p>
              <button
                type="button"
                className="btn-cta w-full mb-6"
                aria-label="Wybierz Free plan"
              >
                Rozpocznij
              </button>
            </div>
            <div className="px-6 pb-6">
              <ul className="text-gray-600 space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Tworzenie zajęć, trenerów i klientów</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Kalendarz z podglądem rezerwacji</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Powiadomienia e-mail o zajęciach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Ograniczone statystyki i raporty</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col bg-[#eaf1f7] rounded-lg shadow-sm">
            <div className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">Obiekt sportowy</h3>
              <p className="text-4xl font-bold mb-4">249 zł / miesiąc</p>
              <p className="text-gray-600 mb-6">
                Dla obiektów sportowych, które potrzebują rozbudowanych
                narzędzi i automatyzacji w zarządzaniu.
              </p>
              <button
                type="button"
                className="btn-cta w-full mb-6"
                aria-label="Wybierz Pro plan"
              >
                Rozpocznij
              </button>
            </div>
            <div className="px-6 pb-6">
              <ul className="text-gray-600 space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Zaawansowany kalendarz i rezerwacje</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Moduł automatycznego rozliczania trenerów</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Generowanie raportów finansowych</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Wielopoziomowe uprawnienia dla pracowników</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Priorytetowe wsparcie techniczne</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col bg-[#eaf1f7] rounded-lg shadow-sm">
            <div className="p-6 text-center">
              <h3 className="font-semibold text-xl mb-2">Enterprise</h3>
              <p className="text-4xl font-bold mb-4">do ustalenia</p>
              <p className="text-gray-600 mb-6">
                Dla obiektów sportowych, które
                potrzebują spersonalizowanych rozwiązań i wsparcia.
              </p>
              <button
                type="button"
                className="btn-cta w-full mb-6"
                aria-label="Wybierz Premium plan"
              >
                Porozmawiajmy
              </button>
            </div>
            <div className="px-6 pb-6">
              <ul className="text-gray-600 space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Wszystkie funkcje z planu Pro</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Dedykowany manager konta</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Integracje z systemami CRM i ERP</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Personalizowany branding aplikacji</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Ekskluzywne raporty i analizy w czasie rzeczywistym</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}