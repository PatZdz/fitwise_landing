"use client";
import { motion } from "framer-motion";

const Values = () => {
  const solutions = [
    {
      question: "Tracisz godziny na zarządzanie harmonogramem?",
      problem: "Chaos w harmonogramie to codzienność wielu firm",
      solution: "Inteligentny system rezerwacji",
      benefits: [
        "Automatyczna synchronizacja kalendarzy",
        "Zero podwójnych rezerwacji",
        "Optymalizacja grafiku pracowników"
      ],
      impact: "15 godzin więcej na rozwój biznesu - każdego tygodnia"
    },
    {
      question: "Gubisz się w danych swoich klientów?",
      problem: "Rozproszone informacje to przepis na katastrofę",
      solution: "Scentralizowana baza danych",
      benefits: [
        "Błyskawiczny dostęp do historii klienta",
        "Automatyczne aktualizacje profili",
        "Bezpieczne przechowywanie dokumentów"
      ],
      impact: "Wszystkie dane w jednym miejscu, dostępne od zaraz"
    },
    {
      question: "Czekasz tygodniami na płatności?",
      problem: "Opóźnione płatności hamują rozwój Twojej firmy",
      solution: "Automatyczny system rozliczeń",
      benefits: [
        "Natychmiastowe powiadomienia o płatnościach",
        "Przejrzyste raporty finansowe",
        "Automatyczne fakturowanie"
      ],
      impact: "Średni czas oczekiwania na płatność: 2 dni"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto space-y-32"
        >
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center mb-16">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  {item.question}
                </motion.h2>
                <div className="w-20 h-1 bg-primary mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-6 relative">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="group"
                >
                  <div className="bg-red-50 p-8 rounded-2xl h-full transform transition-transform group-hover:scale-[1.02]">
                    <div className="text-sm uppercase tracking-wider text-red-600 mb-4">Problem</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {item.problem}
                    </h3>
                    <div className="text-red-800 text-lg font-medium">
                      Czy to brzmi znajomo?
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-blue-50 p-8 rounded-2xl h-full transform transition-transform group-hover:scale-[1.02]">
                    <div className="text-sm uppercase tracking-wider text-primary mb-4">Rozwiązanie</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {item.solution}
                    </h3>
                    <ul className="space-y-4">
                      {item.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="mt-12 flex justify-center items-center"
              >
                <div className="flex items-center gap-4 bg-emerald-50 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-emerald-600 uppercase tracking-wider mb-1">
                      Potwierdzona skuteczność
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {item.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
