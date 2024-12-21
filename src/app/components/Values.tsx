"use client";
import { motion } from "framer-motion";

interface Solution {
  id: number;
  question: string;
  problem: string;
  solution: string;
  benefits: string[];
  impact: string;
}

interface SolutionHeaderProps {
  question: string;
}

interface ProblemCardProps {
  problem: string;
}

interface SolutionCardProps {
  solution: string;
  benefits: string[];
}

interface ImpactCardProps {
  impact: string;
}

const solutionsData: Solution[] = [
  {
    id: 1,
    question: "Ile czasu poświęcasz na walkę z kalendarzem?",
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
    id: 2,
    question: "Czy informacje o klientach są rozproszone w różnych miejscach?",
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
    id: 3,
    question: "Męczą Cię niekończące się oczekiwania na płatności?",
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
const SolutionHeader = ({ question }: SolutionHeaderProps) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
    >
      {question}
    </motion.h2>
    <div className="w-16 h-0.5 bg-primary mx-auto" />
  </div>
);

const ProblemCard = ({ problem }: ProblemCardProps) => (
  <motion.div
    initial={{ x: -30, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    className="group"
  >
    <div className="bg-red-50 p-6 rounded-xl h-full transform transition-transform group-hover:scale-[1.02]">
      <div className="text-xs uppercase tracking-wider text-red-600 mb-3">Twój Problem</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{problem}</h3>
      <div className="text-base text-red-800 font-medium">Czy to brzmi znajomo?</div>
    </div>
  </motion.div>
);

const SolutionCard = ({ solution, benefits }: SolutionCardProps) => (
  <motion.div
    initial={{ x: 30, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    className="group"
  >
    <div className="bg-gradient-to-br from-primary/10 to-blue-50 p-6 rounded-xl h-full transform transition-transform group-hover:scale-[1.02]">
      <div className="text-xs uppercase tracking-wider text-primary mb-3">Nasze Rozwiązanie</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{solution}</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);
const ImpactCard = ({ impact }: ImpactCardProps) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    className="mt-8 flex justify-center items-center"
  >
    <div className="flex items-center gap-3 bg-emerald-50 rounded-xl p-4">
      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <div className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-0.5">
          Potwierdzona skuteczność
        </div>
        <div className="text-lg font-bold text-emerald-600">{impact}</div>
      </div>
    </div>
  </motion.div>
);

const Values = () => {
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
          {solutionsData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <SolutionHeader question={item.question} />
              
              <div className="grid md:grid-cols-2 gap-6 relative">
                <ProblemCard problem={item.problem} />
                <SolutionCard solution={item.solution} benefits={item.benefits} />
              </div>
              
              <ImpactCard impact={item.impact} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
