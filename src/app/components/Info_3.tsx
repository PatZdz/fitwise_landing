"use client";
import React from "react";
import Image from "next/image";

export default function Info_3() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Lewa kolumna - obrazek */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <Image
            src="/info_3.jpg"
            alt="FitWise - zarządzanie klubem fitness"
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Prawa kolumna - tekst */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Zarządzaj wszystkim w jednym miejscu!</h2>
          <p className="text-gray-600 mb-6">
            Zapomnij o wielu aplikacjach i konieczności zatrudniania recepcji. Dzięki naszej aplikacji masz wszystko pod ręką – łatwo, szybko i w jednym miejscu.
          </p>
          <div className="text-center md:text-left">
            <a href="#" className="btn-cta">
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </div>
    </section>  );
}
