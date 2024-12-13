import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
const features = [
  "Booking Management",
  "Membership Management",
  "Reporting & Analytics",
  "Customer Support",
  "Custom Integrations",
  "Automations",
  "User Accounts",
  "Storage",
  "API Access",
  "Mobile App",
  "Data Export",
  "Custom Branding",
]

type Plan = {
  name: string
  price: string
  featured?: boolean
  features: boolean[] // Tabela z true/false
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$29/month',
    features: [true, true, true, true, false, true, true, true, false, false, false, false]
  },
  {
    name: 'Pro',
    price: '$59/month',
    featured: true,
    features: [true, true, true, true, true, true, true, true, true, true, true, false]
  },
  {
    name: 'Enterprise',
    price: '$99/month',
    features: [true, true, true, true, true, true, true, true, true, true, true, true]
  },
]

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Compare plans
        </h2>

        <div className="overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4"></th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className={`p-4 text-center ${
                      plan.featured ? 'bg-blue-50 border-b-2 border-blue-400' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-xl font-semibold">{plan.name}</span>
                      <span className="text-lg text-gray-700">{plan.price}</span>
                      <button 
                        className={`mt-2 px-4 py-2 rounded-md ${
                          plan.featured
                            ? 'bg-blue-500 text-white hover:bg-blue-600'
                            : 'border border-blue-500 text-blue-500 hover:bg-blue-50'
                        }`}
                      >
                        {plan.featured ? `Start with ${plan.name}` : `Choose ${plan.name}`}
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIdx) => (
                <tr key={feature} className="border-b">
                  <td className="p-4 font-medium">{feature}</td>
                  {plans.map((plan, planIdx) => (
                    <td key={planIdx} className="p-4 text-center">
                      {plan.features[featureIdx] ? (
                        <CheckIcon className="inline-block w-5 h-5 text-green-500" />
                      ) : (
                        <span className="inline-block w-5 h-5 text-gray-300">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}