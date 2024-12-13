import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-4">FitWise</h3>
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} FitWise. All rights reserved.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="#"><span className="cursor-pointer hover:underline">About</span></Link></li>
            <li><Link href="#"><span className="cursor-pointer hover:underline">Press</span></Link></li>
            <li><Link href="#"><span className="cursor-pointer hover:underline">Blog</span></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="#"><span className="cursor-pointer hover:underline">Contact</span></Link></li>
            <li><Link href="#"><span className="cursor-pointer hover:underline">Help Center</span></Link></li>
            <li><Link href="#"><span className="cursor-pointer hover:underline">API</span></Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-6 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600">
        <div className="flex space-x-4">
          <Link href="#"><span className="cursor-pointer hover:underline text-sm">Privacy Policy</span></Link>
          <Link href="#"><span className="cursor-pointer hover:underline text-sm">Terms of Service</span></Link>
          <Link href="#"><span className="cursor-pointer hover:underline text-sm">Cookie Policy</span></Link>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <Link href="#">
            <span className="cursor-pointer hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 12h4m-2 -2v4m8 -2a9 9 0 1 1 -18 0 9 9 0 0 1 18 0z"/>
              </svg>
            </span>
          </Link>
          <Link href="#">
            <span className="cursor-pointer hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path d="M18.36 5.64a9 9 0 1 1 -12.72 12.72 9 9 0 0 1 12.72 -12.72z"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}