"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-gradient-to-b from-white via-[#F1F5FA] to-[#e3e4e6]
                 pt-32 pb-24 flex flex-col items-center text-center"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
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

      <div className="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-lg relative p-6 md:p-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 mb-8">
          <span className="text-xl font-bold text-gray-700">Wszystko w jednym miejscu</span>
          <button className="px-4 py-2 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition">
            Sprawdź demo FitWise
          </button>
        </div>
        <div className="w-full h-auto">
          <Image
            src="/dashboard.svg"
            alt="Zrzut ekranu z aplikacji FitWise"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
