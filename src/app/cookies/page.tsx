"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const sections = [
  {
    title: "I. Definicje",
    content: [
      "1. Pliki cookies – małe pliki tekstowe przechowywane na urządzeniu końcowym Użytkownika, wykorzystywane w celu ułatwienia korzystania z Aplikacji oraz zbierania informacji o aktywności Użytkownika.",
      "2. Aplikacja – aplikacja mobilna FitWise służąca do zarządzania obiektami sportowymi.",
      "3. Użytkownik – osoba korzystająca z Aplikacji."
    ]
  },
  {
    title: "II. Wykorzystanie plików cookies",
    content: [
      "1. Aplikacja wykorzystuje pliki cookies w następujących celach:",
      ["Niezbędne: umożliwiają prawidłowe funkcjonowanie Aplikacji, np. utrzymanie sesji Użytkownika.",
       "Funkcjonalne: zapamiętują preferencje Użytkownika, co ułatwia korzystanie z Aplikacji.",
       "Analityczne: zbierają anonimowe dane statystyczne dotyczące sposobu korzystania z Aplikacji, co pomaga w jej ulepszaniu."]
    ]
  },
  {
    title: "III. Rodzaje plików cookies",
    content: [
      "1. Sesyjne: przechowywane tymczasowo na urządzeniu Użytkownika do momentu zamknięcia Aplikacji.",
      "2. Stałe: pozostają na urządzeniu Użytkownika przez określony czas lub do momentu ich usunięcia."
    ]
  },
  {
    title: "IV. Zarządzanie plikami cookies",
    content: [
      "1. Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w ustawieniach swojego urządzenia lub Aplikacji.",
      "2. Ograniczenie stosowania plików cookies może wpłynąć na funkcjonalność Aplikacji."
    ]
  },
  {
    title: "V. Zmiany w Polityce Cookies",
    content: [
      "1. FitWise zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies.",
      "2. O wszelkich zmianach Użytkownicy będą informowani poprzez Aplikację lub drogą e-mailową."
    ]
  },
  {
    title: "VI. Kontakt",
    content: [
      "1. W razie pytań dotyczących niniejszej Polityki Cookies prosimy o kontakt pod adresem e-mail: [adres e-mail]."
    ]
  }
];

export default function Page() {
  return (
    <>
      <Navbar isDrawerOpen={false} setIsDrawerOpen={function (isOpen: boolean): void {
              throw new Error("Function not implemented.");
          } } />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Polityka Cookies FitWise</h1>

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
