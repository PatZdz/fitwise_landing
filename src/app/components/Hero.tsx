"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
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
          Z łatwością zarządzaj rezerwacjami, członkostwami, raportami i automatyzacją.
        </p>
        
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
              Zapisz się na wishlistę
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

      <div className="bg-white w-full max-w-5xl mx-auto rounded-lg shadow-lg relative p-6 md:p-8 mt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-0 mb-8">
          <span className="text-2xl font-bold text-gray-700 text-center w-full">Wszystko w jednym miejscu</span>
        </div>
        <div className="w-full h-auto">
          <Image
            src="/dashboard.svg"
            alt="Zrzut ekranu z aplikacji FitWise"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
