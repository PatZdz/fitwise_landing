import React from 'react'

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border rounded-md p-6 bg-white shadow-sm">
            <p className="text-gray-600 mb-4">
              “FitWise has revolutionized our facility management!”
            </p>
            <h4 className="font-semibold">- Lynnette S.</h4>
          </div>
          <div className="border rounded-md p-6 bg-white shadow-sm">
            <p className="text-gray-600 mb-4">
              “Our gym’s now super-easy to run thanks to FitWise.”
            </p>
            <h4 className="font-semibold">- Darius K.</h4>
          </div>
          <div className="border rounded-md p-6 bg-white shadow-sm">
            <p className="text-gray-600 mb-4">
              “Incredibly easy to use and efficient.”
            </p>
            <h4 className="font-semibold">- Susanna P.</h4>
          </div>
          <div className="border rounded-md p-6 bg-white shadow-sm">
            <p className="text-gray-600 mb-4">
              “Our members love the new booking system!”
            </p>
            <h4 className="font-semibold">- Gabe L.</h4>
          </div>
        </div>
      </div>
    </section>
  )
}