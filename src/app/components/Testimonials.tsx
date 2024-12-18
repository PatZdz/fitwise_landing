"use client";
import React from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: "t1",
      name: "Lynette S.",
      role: "Manager Obiektu",
      avatar: "/images/testimonial_1.jpg",
      text: "FitWise zrewolucjonizował zarządzanie naszym obiektem!",
    },
    {
      id: "t2",
      name: "Dariusz K.",
      role: "Operations Director",
      avatar: "/images/testimonial_2.jpg",
      text: "Niesamowite! Jak szybko możemy zarządzać naszym obiektem sportowym.",
    },
    {
      id: "t3",
      name: "Susanna P.",
      role: "Kierownik Recepcji",
      avatar: "/images/testimonial_3.jpg",
      text: "Niezwykle łatwy w użyciu i efektywny.",
    },
    {
      id: "t4",
      name: "Gabriel M.",
      role: "Koordynator Sprzedaży",
      avatar: "/images/testimonial_4.jpg",
      text: "Nasi członkowie uwielbiają nowy system rezerwacji.",
    },
  ];

  return (
    <section className="py-16 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Co mówią nasi użytkownicy
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Poznaj opinie zadowolonych klientów
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.id}_${index}`}
                className="flex-none bg-white rounded-lg p-6 shadow w-64"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex-shrink-0">
                    {item.avatar && (
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={48}
                        height={48}
                        priority
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
                          <span key={`star_${i}`} className="text-yellow-500 text-sm">
                            ★
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
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
