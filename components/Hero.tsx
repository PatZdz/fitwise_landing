import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-10 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Manage Your Sports Facilities with Ease
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        FitWise to webowa aplikacja do zarządzania obiektami sportowymi, usprawniająca rezerwacje, członkostwa i nie tylko.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
        Continue
      </button>

      {/* Mockup karty FitWise */}
      <div className="mt-16 max-w-4xl mx-auto bg-white border border-gray-200 rounded-md p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-md h-40" />
          <div className="bg-gray-100 rounded-md h-40" />
          <div className="bg-gray-100 rounded-md h-40 col-span-2 md:col-span-2" />
        </div>
        <div className="text-right mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Try FitWise Today
          </button>
        </div>
      </div>
    </section>
  )
}