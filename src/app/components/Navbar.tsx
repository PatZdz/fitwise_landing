"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
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



  return (
    <>
      <header
        className={`fixed w-full py-4 bg-white shadow-sm transition-transform duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="vectors/fitwise_logo.svg"
                alt="FitWise Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
          <Link
            href="/#"
            className="xl:hidden z-50 btn-cta py-2 px-4 text-sm"
            onClick={(e) => {
              e.preventDefault();
              const heroSection = document.querySelector('section');
              heroSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Zapisz się
          </Link>
          {/* Usunięto menu nawigacyjne */}
          <div className="hidden xl:flex items-center gap-4">
            <Link href="/" className="btn-cta">
              Zapisz się
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
