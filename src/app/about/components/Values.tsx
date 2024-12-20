const Values = () => {
    const values = [
      {
        title: "Innowacja",
        description: "Stale poszukujemy nowych rozwiązań, aby zapewnić naszym klientom najnowocześniejsze narzędzia do zarządzania obiektami sportowymi.",
        icon: "🚀"
      },
      {
        title: "Jakość",
        description: "Dbamy o najwyższą jakość naszych usług i produktów, aby sprostać oczekiwaniom naszych użytkowników.",
        icon: "⭐"
      },
      {
        title: "Współpraca",
        description: "Wierzymy w siłę zespołowej pracy i współpracy z naszymi klientami, partnerami oraz społecznością sportową.",
        icon: "🤝"
      }
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Nasze wartości</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-primary">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Values;
  