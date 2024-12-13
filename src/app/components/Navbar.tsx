"use client";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full py-4 bg-white shadow-sm">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/fitwise_logo.svg" // Ścieżka do logo
            alt="FitWise Logo"
            width={120}
            height={40}
            priority
          />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#features">Funkcje</a></li>
          <li><a href="#pricing">Cena</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
        {/* CTA */}
        <div className="flex items-center gap-4">
          <a className="text-sm font-semibold" href="#">
            Pobierz aplikację
          </a>
          <a
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            href="#"
          >
            Wypróbuj za darmo
          </a>
        </div>
      </nav>
    </header>
  );
}