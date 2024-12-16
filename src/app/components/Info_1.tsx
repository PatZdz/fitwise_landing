"use client";
import React from "react";
import Image from "next/image";

export default function Info_1() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Lewa kolumna - obrazek */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <Image
            src="/info_1.jpg"
            alt="FitWise - zarządzanie klubem fitness"
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Prawa kolumna - tekst */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Oszczędzaj czas i zwiększaj zyski!</h2>
          <p className="text-gray-600 mb-6">
            Zaoszczędź nawet 5 godzin tygodniowo (ponad 20 godzin miesięcznie) dzięki automatyzacji rezerwacji, płatności i przypomnień. Wykorzystaj ten czas na prowadzenie dodatkowych zajęć lub rozwój biznesu. Jeśli godzina zajęć kosztuje 150 zł, możesz zyskać nawet 3000 zł miesięcznie. Efektywne zarządzanie to więcej czasu i wyższe dochody!
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
