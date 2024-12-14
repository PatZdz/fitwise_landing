"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 bg-white shadow-sm relative">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/fitwise_logo.svg"
            alt="FitWise Logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Menu hamburger dla mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#features">Funkcje</a></li>
          <li><a href="#pricing">Cena</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a className="text-sm font-semibold" href="#">
            Pobierz aplikację
          </a>
          <a
            className="btn-cta"
            href="#"
          >
            Wypróbuj za darmo
          </a>
        </div>

        {/* Menu mobilne */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <ul className="flex flex-col py-4">
              <li><a href="#features" className="block px-4 py-2">Funkcje</a></li>
              <li><a href="#pricing" className="block px-4 py-2">Cena</a></li>
              <li><a href="#contact" className="block px-4 py-2">Kontakt</a></li>
              <li><a href="#" className="block px-4 py-2">Pobierz aplikację</a></li>
              <li>
                <a href="#" className="block mx-4 my-2 text-center btn-cta">
                  Wypróbuj za darmo
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}