"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Dodany import

const Mission = () => {
  const features = [
    {
      title: "Innowacyjne rozwiązania",
      description: "Wykorzystujemy najnowsze technologie, aby dostarczać zaawansowane narzędzia zarządzania",
      icon: "💡"
    },
    {
      title: "Rozwój społeczności",
      description: "Wspieramy budowanie aktywnych społeczności i promujemy zdrowy styl życia",
      icon: "🌟"
    },
    {
      title: "Efektywność biznesu",
      description: "Pomagamy zwiększać wydajność i optymalizować procesy w obiektach sportowych",
      icon: "📈"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Nasza misja
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Dostarczamy innowacyjne i intuicyjne rozwiązania technologiczne, które ułatwiają zarządzanie obiektami sportowymi, wspierają rozwój społeczności aktywnych fizycznie oraz zwiększają efektywność działania firm z branży fitness.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Naszym celem jest łączenie pasji do sportu z nowoczesnymi technologiami, aby pomagać naszym klientom osiągać sukces i inspirować ich użytkowników do zdrowego i aktywnego trybu życia.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {features.slice(0, 2).map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/mission.jpg"
                alt="FitWise - Innowacyjne rozwiązania dla branży fitness"
                layout="fill" // Użycie layout="fill" dla pełnego wypełnienia
                objectFit="cover" // Obiekt dopasowany do rozmiaru
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-primary/10 rounded-2xl"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">{features[2].icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary">{features[2].title}</h3>
                  <p className="text-gray-600">{features[2].description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;