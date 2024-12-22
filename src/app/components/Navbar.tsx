"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            FitWise
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Strona główna
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              O nas
            </Link>
            <Link
              href="/features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Funkcje
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cennik
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isDrawerOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-8 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Strona główna
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              O nas
            </Link>
            <Link
              href="/features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Funkcje
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Cennik
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
