"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Product</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Guides</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center mt-8 text-sm text-gray-500">
        © {new Date().getFullYear()} FitWise. All rights reserved.
      </div>
    </footer>
  );
}