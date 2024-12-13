import React from 'react'

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose FitWise?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="rounded-md shadow-sm p-6 bg-gray-50 text-center">
            <h3 className="text-xl font-semibold mb-2">Booking Management</h3>
            <p className="text-gray-600 mb-4">
              Easily manage bookings and schedules.
            </p>
            <div className="h-24 bg-gray-100 rounded-md"/>
          </div>

          {/* Feature 2 */}
          <div className="rounded-md shadow-sm p-6 bg-gray-50 text-center">
            <h3 className="text-xl font-semibold mb-2">Membership Management</h3>
            <p className="text-gray-600 mb-4">
              Track and manage memberships effortlessly.
            </p>
            <div className="h-24 bg-gray-100 rounded-md"/>
          </div>

          {/* Feature 3 */}
          <div className="rounded-md shadow-sm p-6 bg-gray-50 text-center">
            <h3 className="text-xl font-semibold mb-2">Reporting</h3>
            <p className="text-gray-600 mb-4">
              Generate detailed reports and analytics.
            </p>
            <div className="h-24 bg-gray-100 rounded-md"/>
          </div>

          {/* Feature 4 */}
          <div className="rounded-md shadow-sm p-6 bg-gray-50 text-center">
            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate your facility management tasks.
            </p>
            <div className="h-24 bg-gray-100 rounded-md"/>
          </div>
        </div>
      </div>
    </section>
  )
}