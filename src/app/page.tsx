"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}