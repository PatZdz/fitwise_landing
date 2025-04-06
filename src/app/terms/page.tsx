"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const sections = [
  {
    title: "I. Postanowienia ogólne",
    content: [
      "1. Niniejszy regulamin (dalej: \"Regulamin\") określa zasady korzystania z aplikacji FitWise (dalej: \"Aplikacja\"), służącej do zarządzania obiektami sportowymi, udostępnianej przez FitWise Sp. z o.o. z siedzibą w [adres siedziby], NIP: [numer NIP], REGON: [numer REGON] (dalej: \"Usługodawca\").",
      "2. Kontakt z Usługodawcą jest możliwy pod adresem e-mail: [adres e-mail]."
    ]
  },
  {
    title: "II. Definicje",
    content: [
      "1. Aplikacja – oprogramowanie FitWise przeznaczone do zarządzania obiektami sportowymi, dostępne na urządzenia mobilne.",
      "2. Użytkownik – osoba fizyczna lub prawna korzystająca z Aplikacji.",
      "3. Usługi – funkcjonalności oferowane przez Aplikację, w tym rezerwacja i zarządzanie obiektami sportowymi."
    ]
  },
  {
    title: "III. Warunki korzystania z Aplikacji",
    content: [
      "1. Korzystanie z Aplikacji jest dobrowolne i wymaga akceptacji niniejszego Regulaminu.",
      "2. Użytkownik zobowiązuje się do korzystania z Aplikacji zgodnie z jej przeznaczeniem, obowiązującym prawem oraz postanowieniami Regulaminu.",
      "3. Użytkownik jest zobowiązany do podania prawdziwych i aktualnych danych podczas rejestracji oraz do ich aktualizacji w razie zmian."
    ]
  },
  {
    title: "IV. Rejestracja i konto Użytkownika",
    content: [
      "1. Aby korzystać z pełnej funkcjonalności Aplikacji, Użytkownik może być zobowiązany do założenia konta, podając wymagane dane.",
      "2. Użytkownik ponosi odpowiedzialność za bezpieczeństwo swojego konta, w tym za zachowanie poufności danych logowania."
    ]
  },
  {
    title: "V. Usługi świadczone przez Aplikację",
    content: [
      "1. Aplikacja umożliwia m.in.:",
      [
        "Rezerwację obiektów sportowych",
        "Zarządzanie rezerwacjami",
        "Przegląd dostępności obiektów"
      ],
      "2. Szczegółowy opis funkcjonalności Aplikacji jest dostępny w jej interfejsie."
    ]
  },
  {
    title: "VI. Opłaty",
    content: [
      "1. Korzystanie z Aplikacji może być bezpłatne lub płatne, w zależności od wybranych funkcji.",
      "2. Informacje o ewentualnych opłatach są dostępne w Aplikacji."
    ]
  },
  {
    title: "VII. Prawa i obowiązki Użytkownika",
    content: [
      "1. Użytkownik ma prawo do:",
      [
        "Korzystania z Aplikacji zgodnie z jej przeznaczeniem",
        "Zgłaszania uwag i sugestii dotyczących funkcjonowania Aplikacji"
      ],
      "2. Użytkownik zobowiązuje się do:",
      [
        "Niepodejmowania działań mogących zakłócić funkcjonowanie Aplikacji",
        "Przestrzegania praw autorskich i innych praw własności intelektualnej związanych z Aplikacją"
      ]
    ]
  },
  {
    title: "VIII. Prawa i obowiązki Usługodawcy",
    content: [
      "1. Usługodawca dołoży starań, aby Aplikacja działała poprawnie i była dostępna dla Użytkowników.",
      "2. Usługodawca zastrzega sobie prawo do:",
      [
        "Czasowego wyłączenia Aplikacji w celu jej konserwacji lub aktualizacji",
        "Wprowadzania zmian w funkcjonalnościach Aplikacji",
        "Zablokowania konta Użytkownika w przypadku naruszenia Regulaminu"
      ]
    ]
  },
  {
    title: "IX. Odpowiedzialność",
    content: [
      "1. Usługodawca nie ponosi odpowiedzialności za:",
      [
        "Szkody wynikłe z nieprawidłowego korzystania z Aplikacji przez Użytkownika",
        "Przerwy w działaniu Aplikacji niezależne od Usługodawcy"
      ],
      "2. Użytkownik ponosi odpowiedzialność za działania podjęte w ramach swojego konta w Aplikacji."
    ]
  },
  {
    title: "X. Reklamacje",
    content: [
      "1. Użytkownik ma prawo zgłaszać reklamacje dotyczące działania Aplikacji na adres e-mail: [adres e-mail].",
      "2. Reklamacje będą rozpatrywane w terminie 14 dni od ich otrzymania."
    ]
  },
  {
    title: "XI. Zmiany Regulaminu",
    content: [
      "1. Usługodawca zastrzega sobie prawo do wprowadzania zmian w Regulaminie.",
      "2. O zmianach Użytkownicy będą informowani poprzez Aplikację lub drogą e-mailową."
    ]
  },
  {
    title: "XII. Postanowienia końcowe",
    content: [
      "1. W sprawach nieuregulowanych w Regulaminie zastosowanie mają przepisy prawa polskiego.",
      "2. Wszelkie spory wynikłe z korzystania z Aplikacji będą rozstrzygane przez właściwe sądy powszechne."
    ]
  }
];

export default function Page() {
  // Usunięcie nieużywanych zmiennych
  return (
    <>
      <Navbar />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Regulamin korzystania z aplikacji FitWise</h1>

            {sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      {Array.isArray(item) ? (
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {item.map((bullet, bulletIdx) => (
                            <li key={bulletIdx} className="ml-4">{bullet}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-700">{item}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center text-gray-600 mt-16">
              Data ostatniej aktualizacji: 21.12.2024
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}