"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

interface NavbarProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isDrawerOpen, setIsDrawerOpen }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setShowNavbar(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
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
            <Link href="/">
              <Image
                src="/fitwise_logo.svg"
                alt="FitWise Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
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
              <Link href="/#features">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  Funkcje
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#pricing">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  Cena
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  O nas
                </span>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  Kontakt
                </span>
              </Link>
            </li>
          </ul>
          <div className="hidden xl:flex items-center gap-4">
            <a className="text-sm font-semibold" href="#">
              Zarejestruj się
            </a>
            <a className="btn-cta" href="https://app.fitwi.se">
              Zaloguj się
            </a>
          </div>
        </nav>
      </header>

      {isDrawerOpen && (
        <>
          <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-[100] flex flex-col
              transform transition-transform duration-300 ease-in-out xl:hidden
              ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
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
                    <Link href="/#features">
                      <span 
                        className="block py-3 text-center text-lg hover:bg-gray-50 w-full"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        Funkcje
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#pricing">
                      <span 
                        className="block py-3 text-center text-lg hover:bg-gray-50 w-full"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        Cena
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span 
                        className="block py-3 text-center text-lg hover:bg-gray-50 w-full"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        O nas
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact">
                      <span 
                        className="block py-3 text-center text-lg hover:bg-gray-50 w-full"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        Kontakt
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="px-6 pb-60 flex flex-col items-center">
                <a href="/#contact" className="block text-center py-3 font-semibold">
                  Zarejestruj się
                </a>
                <a href="https://app.fitwi.se" className="block text-center btn-cta py-3">
                  Zaloguj się
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
