"use client";
import React from "react";
import HeroMock from "./HeroMock";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-white via-[#F1F5FA] to-[#F7F8FA] 
                 pt-16 pb-24 flex flex-col items-center text-center"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Zarządzaj swoimi obiektami <br className="hidden md:block" />
          sportowymi z łatwością
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          FitWise to nowoczesna aplikacja SaaS do zarządzania obiektami sportowymi.
          Z łatwością zarządzaj rezerwacjami, członkostwami, raportami i automatyzacją.
        </p>
        <button
          className="px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition"
          aria-label="Przejdź dalej"
        >
          Kontynuuj
        </button>
      </div>

      {/* Makieta / mock kontenera aplikacji, umieszczona niżej */}
      <div className="container mx-auto px-4 mt-16">
        <HeroMock />
      </div>
    </section>
  );
}