"use client";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Info_1 from "./components/Info_1";
import Info_2 from "./components/Info_2";
import Info_3 from "./components/Info_3";
import Values from "./components/Values";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Navbar isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Hero />
      <Values />
      <Features />
      <Info_1 />
      <Info_2 />
      <Info_3 />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}