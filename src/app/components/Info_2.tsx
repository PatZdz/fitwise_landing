"use client";
import React from "react";
import Image from "next/image";

export default function Info_2() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Lewa kolumna - tekst */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Intuicyjna obsługa i prostota!</h2>
          <p className="text-gray-600 mb-6">
            Nie marnuj czasu na problemy techniczne. Nasz system jest prosty w konfiguracji – wystarczy 15 minut, aby rozpocząć pracę i dodawać swoich klientów. Każda godzina spędzona na technicznych zawiłościach to stracony czas, a my eliminujemy to ryzyko. Postaw na prostotę i efektywność!
          </p>
          <div className="text-center md:text-left">
            <a href="#" className="btn-cta">
              Dowiedz się więcej
            </a>
          </div>
        </div>
        {/* Prawa kolumna - obrazek */}
        <div className="w-full md:w-1/2 md:ml-8">
          <Image
            src="/images/info_2.jpg"
            alt="FitWise - zarządzanie klubem fitness"
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
