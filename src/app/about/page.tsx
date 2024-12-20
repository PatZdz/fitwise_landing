'use client';
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Mission from './components/Mission';
import Values from './components/Values';
import Team from './components/Team';

export default function AboutPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">O nas</h1>
            <p className="text-gray-700 text-xl text-center max-w-3xl mx-auto">
              FitWise to nowoczesna platforma do zarządzania obiektami sportowymi. Naszym celem jest ułatwienie zarządzania siłowniami, klubami sportowymi i innymi obiektami poprzez innowacyjne rozwiązania technologiczne.
            </p>
          </div>
        </div>
        <Values />
        <Mission />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
