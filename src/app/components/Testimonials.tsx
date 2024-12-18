"use client";
import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Lynette S.",
      role: "Manager Obiektu",
      avatar: "/images/avatar-lynette.jpg",
      text: "FitWise zrewolucjonizował zarządzanie naszym obiektem!",
    },
    {
      name: "Dariusz K.",
      role: "Operations Director",
      avatar: "/images/avatar-dariusz.jpg",
      text: "Niesamowite! Jak szybko możemy zarządzać naszym obiektem sportowym.",
    },
    {
      name: "Susanna P.",
      role: "Kierownik Recepcji",
      avatar: "/images/avatar-susanna.jpg",
      text: "Niezwykle łatwy w użyciu i efektywny.",
    },
    {
      name: "Gabriel M.",
      role: "Koordynator Sprzedaży",
      avatar: "/images/avatar-gabriel.jpg",
      text: "Nasi członkowie uwielbiają nowy system rezerwacji.",
    },
    {
      name: "Adam W.",
      role: "Trener Personalny",
      avatar: "/images/avatar-adam.jpg",
      text: "Integracja z systemem zajęła dosłownie kilka minut!",
    },
    {
      name: "Marzena R.",
      role: "Koordynator Siłowni",
      avatar: "/images/avatar-marzena.jpg",
      text: "Fantastyczny support i ciągłe aktualizacje.",
    },
    {
      name: "Krzysztof B.",
      role: "Specjalista ds. Sprzedaży",
      avatar: "/images/avatar-krzysztof.jpg",
      text: "Zdecydowanie usprawniło naszą pracę.",
    },
    {
      name: "Eliza T.",
      role: "Recepcjonistka",
      avatar: "/images/avatar-eliza.jpg",
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
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                    {item.avatar && (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover object-center"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{item.name}</p>
                    {item.role && (
                      <p className="text-sm text-gray-500">{item.role}</p>
                    )}
                    {/* 6 gwiazdek */}
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