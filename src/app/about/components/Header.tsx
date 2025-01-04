"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Dodany import

const Header = () => {
  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        {/* Left column background */}
        <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full bg-blue-50" />
        {/* Desktop image */}
        <div className="hidden lg:block absolute left-1/2 top-0 w-1/2 h-full">
          <Image
            src="/images/about.jpg"
            alt="Nowoczesna siłownia"
            layout="fill" // Użycie layout="fill" dla pełnego wypełnienia
            objectFit="cover" // Obiekt dopasowany do rozmiaru
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-[45%] pt-20 lg:pt-32 pb-16 lg:pb-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-primary font-semibold tracking-wider uppercase">Poznaj FitWise</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          >
            Transformujemy przyszłość fitness
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-12"
          >
            FitWise to nowoczesna platforma do zarządzania obiektami sportowymi. Naszym celem jest ułatwienie zarządzania siłowniami, klubami sportowymi i innymi obiektami poprzez innowacyjne rozwiązania technologiczne.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-6 justify-center lg:justify-start"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">3000zł</h3>
                <p className="text-gray-600">Miesięcznie więcej na </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">15 godzin</h3>
                <p className="text-gray-600">Więcej w ciągu tygodnia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;