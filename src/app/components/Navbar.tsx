"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
          className="md:hidden z-50"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? (
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

        {/* Drawer Menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } z-40`}
        >
          <div className="flex flex-col h-full pt-20 pb-6">
            <ul className="flex-1">
              <li><a href="#features" className="block px-6 py-3 hover:bg-gray-50">Funkcje</a></li>
              <li><a href="#pricing" className="block px-6 py-3 hover:bg-gray-50">Cena</a></li>
              <li><a href="#contact" className="block px-6 py-3 hover:bg-gray-50">Kontakt</a></li>
              <li><a href="#" className="block px-6 py-3 hover:bg-gray-50">Pobierz aplikację</a></li>
            </ul>
            <div className="px-6">
              <a href="#" className="block text-center btn-cta py-3">
                Wypróbuj za darmo
              </a>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}