"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
