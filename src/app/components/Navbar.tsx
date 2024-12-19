"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavbarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && !isDrawerOpen) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isDrawerOpen) {
      setShowNavbar(true);
    }
  }, [isDrawerOpen]);

  return (
    <>
      <header
        className={`fixed w-full py-4 bg-white shadow-sm transition-transform duration-300 z-50 ${
          showNavbar || isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/fitwise_logo.svg"
              alt="FitWise Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          <button
            className="xl:hidden z-50"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? (
              <XMarkIcon className="h-6 w-6 transition-opacity duration-300" />
            ) : (
              <Bars3Icon className="h-6 w-6 transition-opacity duration-300" />
            )}
          </button>

          <ul className="hidden xl:flex gap-8 font-medium absolute left-1/2 -translate-x-1/2">
            <li>
              <a href="#features" className="hover:text-primary transition-colors">
                Funkcje
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-primary transition-colors">
                Cena
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">
                O nas
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-primary transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">
                Kontakt
              </a>
            </li>
          </ul>

          <div className="hidden xl:flex items-center gap-4">
            <a className="text-sm font-semibold" href="#">
              Pobierz aplikację
            </a>
            <a className="btn-cta" href="#">
              Wypróbuj za darmo
            </a>
          </div>
        </nav>
      </header>

      {isDrawerOpen && (
        <>
          <div
            className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-[100] flex flex-col
              transform transition-transform duration-300 ease-in-out xl:hidden
              ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <button
              className="absolute top-4 right-4 z-[110]"
              onClick={() => setIsDrawerOpen(false)}
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>

            <div className="mt-16 flex-1 flex flex-col justify-between">
              <div className="px-6">
                <ul>
                  <li>
                    <a
                      href="#features"
                      className="block py-3 text-center text-lg hover:bg-gray-50"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Funkcje
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="block py-3 text-center text-lg hover:bg-gray-50"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Cena
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block py-3 text-center text-lg hover:bg-gray-50"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      O nas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="block py-3 text-center text-lg hover:bg-gray-50"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block py-3 text-center text-lg hover:bg-gray-50"
                      onClick={() => setIsDrawerOpen(false)}
                    >
                      Kontakt
                    </a>
                  </li>
                </ul>
              </div>

              <div className="px-6 pb-60 flex flex-col items-center">
                <a href="#" className="block text-center py-3 font-semibold">
                  Pobierz aplikację
                </a>
                <a href="#" className="block text-center btn-cta py-3">
                  Wypróbuj za darmo
                </a>
              </div>
            </div>
          </div>

          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[90] xl:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
        </>
      )}
    </>
  );
}
