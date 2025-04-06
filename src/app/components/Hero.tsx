"use client";
import React, { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBlur = (fieldName: string) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    validateField(fieldName);
  };

  const validateField = (fieldName: string) => {
    const element = document.getElementById(fieldName) as HTMLInputElement;
    if (!element) return;

    if (!element.checkValidity()) {
      setErrors((prev) => ({ ...prev, [fieldName]: "To pole jest wymagane" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Tworzenie URL do formularza Google Forms z parametrem email
      const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeL_I99JdC8iVoGIdW8HlRFHFZk9_Ru9Ac1YU7xBwMIs-ezDA/formResponse";
      const formData = new FormData();
      formData.append("entry.879525959", email);
      
      // Wysyłanie danych do Google Forms
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Forms wymaga no-cors
        body: formData
      });
      
      setEmail("");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error("Błąd podczas zapisywania:", error);
    }
  };

  const labelClasses = (fieldName: string) => `
    text-sm text-gray-600
    ${touched[fieldName] && errors[fieldName] ? "text-red-500" : ""}
  `;

  return (
    <section
      className="relative w-full bg-gradient-to-b from-blue-50 via-white to-blue-50
                 pt-32 pb-24 flex flex-col items-center text-center"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          Zarządzaj swoimi obiektami <br className="hidden md:block" />
          sportowymi z łatwością
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          FitWise to nowoczesna aplikacja SaaS do zarządzania obiektami sportowymi.
        </p>

        {showSuccess && (
          <div className="mb-8 bg-green-100 border border-green-400 text-green-700 px-8 py-3 rounded-md shadow-lg animate-fade-in max-w-xl mx-auto">
            <p className="flex items-center justify-center gap-2 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Super! Zapisałeś się na wishlistę!
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Wpisz swój adres email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary/90 transition whitespace-nowrap"
            >
              Zapisz się na waitlistę
            </button>
          </div>

          <div className="flex items-start justify-center gap-2">
            <input
              type="checkbox"
              id="contactConsent"
              name="contactConsent"
              required
              onBlur={() => handleBlur("contactConsent")}
              className="mt-1"
            />
            <label htmlFor="contactConsent" className={labelClasses("contactConsent")}>
              Wyrażam zgodę na otrzymywanie informacji o FitWise i ofertach specjalnych *
            </label>
          </div>
        </form>
      </div>


    </section>
  );
}
