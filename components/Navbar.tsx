import React from 'react'
import Link from 'next/link'

export const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
      <div className="text-xl font-bold">
        <Link href="/">
          <span className="cursor-pointer">FitWise</span>
        </Link>
      </div>
      <nav className="space-x-6 hidden md:block">
        <Link href="#features">
          <span className="cursor-pointer hover:text-blue-600 transition-colors">
            Features
          </span>
        </Link>
        <Link href="#pricing">
          <span className="cursor-pointer hover:text-blue-600 transition-colors">
            Pricing
          </span>
        </Link>
        <Link href="#contact">
          <span className="cursor-pointer hover:text-blue-600 transition-colors">
            Contact
          </span>
        </Link>
      </nav>
      <div className="space-x-4">
        <button className="hidden sm:inline-block px-4 py-2 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors">
          Download app
        </button>
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          Try it free
        </button>
      </div>
    </header>
  )
}