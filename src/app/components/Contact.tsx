"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Skontaktuj się z nami</h2>
        <p className="text-center text-gray-600 mb-8">
          Masz pytania? Wypełnij formularz, a my się z Tobą skontaktujemy.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Nazwa obiektu
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Numer telefonu
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn-cta px-6 py-3">
              Skontaktuj się z nami
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
