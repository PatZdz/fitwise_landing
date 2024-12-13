"use client";
import React from "react";

export default function HeroMock() {
  return (
    <div className="bg-white w-full max-w-4xl mx-auto rounded-lg shadow-lg relative p-6 md:p-8">
      {/* Góra karty: logo FitWise z lewej, przycisk "Sprawdź demo FitWise" z prawej */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xl font-bold text-gray-700">FitWise</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition">
          Sprawdź demo FitWise
        </button>
      </div>
      {/* Prostokąty-szumy */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 h-24 rounded-md" aria-hidden="true"></div>
        <div className="bg-gray-100 h-24 rounded-md" aria-hidden="true"></div>
        <div className="bg-gray-100 h-24 rounded-md col-span-2" aria-hidden="true"></div>
      </div>
    </div>
  );
}