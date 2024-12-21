"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const sections = [
  {
    title: "I. Postanowienia ogólne",
    content: [
      "1. Administratorem danych osobowych jest FitWise Sp. z o.o. z siedzibą w [adres siedziby], NIP: [numer NIP], REGON: [numer REGON]. Kontakt z administratorem jest możliwy pod adresem e-mail: [adres e-mail].",
      "2. Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych użytkowników aplikacji FitWise służącej do zarządzania obiektami sportowymi (dalej: \"Aplikacja\")."
    ]
  },
  {
    title: "II. Zakres zbieranych danych",
    content: [
      "1. W ramach korzystania z Aplikacji mogą być zbierane następujące dane osobowe:",
      [
        "Imię i nazwisko",
        "Adres e-mail",
        "Numer telefonu",
        "Dane dotyczące korzystania z obiektów sportowych",
        "Informacje techniczne dotyczące urządzenia i połączenia internetowego"
      ]
    ]
  },
  {
    title: "III. Cele i podstawy prawne przetwarzania danych",
    content: [
      "1. Dane osobowe są przetwarzane w celu:",
      [
        "Świadczenia usług oferowanych przez Aplikację",
        "Umożliwienia rezerwacji i zarządzania obiektami sportowymi",
        "Komunikacji z użytkownikami",
        "Realizacji obowiązków prawnych ciążących na Administratorze",
        "Analiz i statystyk mających na celu ulepszanie Aplikacji"
      ],
      "2. Podstawą prawną przetwarzania danych jest:",
      [
        "Niezbędność do wykonania umowy o świadczenie usług (art. 6 ust. 1 lit. b RODO)",
        "Obowiązek prawny (art. 6 ust. 1 lit. c RODO)",
        "Prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO)"
      ]
    ]
  },
  {
    title: "IV. Odbiorcy danych",
    content: [
      "1. Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem w zakresie niezbędnym do realizacji usług, takim jak:",
      [
        "Dostawcy usług IT",
        "Operatorzy płatności",
        "Podmioty obsługujące rezerwacje"
      ],
      "2. Dane mogą być również udostępniane organom publicznym w przypadkach przewidzianych przez prawo."
    ]
  },
  {
    title: "V. Przekazywanie danych do państw trzecich",
    content: [
      "1. Dane osobowe nie są przekazywane poza Europejski Obszar Gospodarczy (EOG)."
    ]
  },
  {
    title: "VI. Okres przechowywania danych",
    content: [
      "1. Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, a po ich zakończeniu przez okres wymagany przepisami prawa lub dla zabezpieczenia ewentualnych roszczeń."
    ]
  },
  {
    title: "VII. Prawa osób, których dane dotyczą",
    content: [
      "1. Użytkownikom przysługują następujące prawa:",
      [
        "Prawo dostępu do danych",
        "Prawo do sprostowania danych",
        "Prawo do usunięcia danych",
        "Prawo do ograniczenia przetwarzania",
        "Prawo do przenoszenia danych",
        "Prawo do wniesienia sprzeciwu",
        "Prawo do cofnięcia zgody w dowolnym momencie",
        "Prawo do wniesienia skargi do organu nadzorczego"
      ]
    ]
  },
  {
    title: "VIII. Pliki cookies i technologie śledzące",
    content: [
      "1. Aplikacja może wykorzystywać pliki cookies oraz inne technologie śledzące w celu zapewnienia jej prawidłowego działania oraz analizy statystyk.",
      "2. Użytkownik może zarządzać ustawieniami plików cookies za pośrednictwem ustawień swojej przeglądarki internetowej."
    ]
  },
  {
    title: "IX. Zautomatyzowane podejmowanie decyzji i profilowanie",
    content: [
      "1. Dane osobowe nie są wykorzystywane do zautomatyzowanego podejmowania decyzji, w tym profilowania."
    ]
  },
  {
    title: "X. Zmiany w Polityce Prywatności",
    content: [
      "1. Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności.",
      "2. O wszelkich zmianach użytkownicy będą informowani poprzez Aplikację lub drogą e-mailową."
    ]
  },
  {
    title: "XI. Kontakt",
    content: [
      "1. W razie pytań dotyczących niniejszej Polityki Prywatności prosimy o kontakt pod adresem e-mail: [adres e-mail]."
    ]
  }
];

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Polityka Prywatności FitWise</h1>

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