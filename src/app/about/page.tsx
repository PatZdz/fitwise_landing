'use client';
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Header from './components/Header';
import Mission from './components/Mission';
import Team from './components/Team';

export default function AboutPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main className="flex-grow">
        <Header />
        <Mission />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
