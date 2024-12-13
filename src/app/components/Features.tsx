"use client";
import React from "react";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose FitWise?</h2>
        <p className="text-center text-gray-600 mb-12">
          Poznaj kluczowe funkcjonalności naszej aplikacji, które usprawnią zarządzanie obiektami sportowymi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Feature 1</h3>
            <p className="text-gray-600">
              Easily manage bookings and schedules for all sports facilities.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Feature 2</h3>
            <p className="text-gray-600">
              Track and manage memberships effortlessly.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Feature 3</h3>
            <p className="text-gray-600">
              Generate detailed reports and analytics.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="bg-[#F7F8FA] rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Feature 4</h3>
            <p className="text-gray-600">
              Automate your facility management tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}