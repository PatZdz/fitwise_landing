"use client";
import React from "react";
import HeroMock from "./HeroMock"; // Wykorzystamy HeroMock jako część wizualną

export default function InfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Lewa kolumna - obrazek */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <HeroMock />
        </div>
        {/* Prawa kolumna - tekst */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Dlaczego warto wybrać FitWise?</h2>
          <p className="text-gray-600 mb-6">
            FitWise to nowoczesne rozwiązanie do zarządzania Twoim klubem fitness. Usprawnia rezerwacje, zarządza członkostwami i dostarcza wartościowe analizy. Dołącz do grona zadowolonych klientów już dziś!
          </p>
          <a href="#" className="btn-cta">
            Dowiedz się więcej
          </a>
        </div>
      </div>
    </section>
  );
}
