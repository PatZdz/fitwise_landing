"use client";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lynette S.",
      text: "FitWise zrewolucjonizował zarządzanie naszym obiektem!",
    },
    {
      name: "Dariusz K.",
      text: "Niesamowite! Jak szybko możemy zarządzać naszym obiektem sportowym.",
    },
    {
      name: "Susanna P.",
      text: "Niezwykle łatwy w użyciu i efektywny.",
    },
    {
      name: "Gabriel M.",
      text: "Nasi członkowie uwielbiają nowy system rezerwacji.",
    },
  ];

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Co mówią nasi użytkownicy</h2>
        <p className="text-center text-gray-600 mb-12">
          Poznaj opinie zadowolonych klientów
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow text-center">
              <p className="text-gray-700 mb-4 italic">
                &quot;{item.text}&quot;
              </p>
              <p className="text-gray-600 font-bold">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}