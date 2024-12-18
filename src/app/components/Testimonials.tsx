"use client";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lynette S.",
      role: "Manager Obiektu",
      avatar: "/images/testimonial_1.jpg",
      text: "FitWise zrewolucjonizował zarządzanie naszym obiektem!",
    },
    {
      name: "Dariusz K.",
      role: "Operations Director",
      avatar: "/images/testimonial_2.jpg",
      text: "Niesamowite! Jak szybko możemy zarządzać naszym obiektem sportowym.",
    },
    {
      name: "Susanna P.",
      role: "Kierownik Recepcji",
      avatar: "/images/testimonial_3.jpg",
      text: "Niezwykle łatwy w użyciu i efektywny.",
    },
    {
      name: "Gabriel M.",
      role: "Koordynator Sprzedaży",
      avatar: "/images/testimonial_4.jpg",
      text: "Nasi członkowie uwielbiają nowy system rezerwacji.",
    },
    {
      name: "Adam W.",
      role: "Trener Personalny",
      avatar: "/images/testimonial_5.jpg",
      text: "Integracja z systemem zajęła dosłownie kilka minut!",
    },
    {
      name: "Marzena R.",
      role: "Koordynator Siłowni",
      avatar: "/images/testimonial_6.jpg",
      text: "Fantastyczny support i ciągłe aktualizacje.",
    },
    {
      name: "Krzysztof B.",
      role: "Specjalista ds. Sprzedaży",
      avatar: "/images/testimonial_7.jpg",
      text: "Zdecydowanie usprawniło naszą pracę.",
    },
    {
      name: "Eliza T.",
      role: "Recepcjonistka",
      avatar: "/images/testimonial_8.jpg",
      text: "Klienci uwielbiają prostotę rezerwowania miejsc.",
    },
  ];

  // Zduplikowana tablica do stworzenia efektu ciągłego przewijania
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Co mówią nasi użytkownicy</h2>
        <p className="text-center text-gray-600 mb-12">
          Poznaj opinie zadowolonych klientów
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {doubledTestimonials.map((item, index) => (
              <div
                key={index}
                className="flex-none bg-white rounded-lg p-6 shadow w-64"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-900">{item.name}</p>
                    {item.role && (
                      <p className="text-sm text-gray-500">{item.role}</p>
                    )}
                    <div className="mt-1">
                      {Array(6)
                        .fill(null)
                        .map((_, i) => (
                          <span key={i} className="text-yellow-500 text-sm">★</span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}