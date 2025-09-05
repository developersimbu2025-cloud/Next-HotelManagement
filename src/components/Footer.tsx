"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">FoodExpress</h3>
          <p className="text-gray-400 leading-relaxed">
            Delicious meals delivered fast to your doorstep. Fresh, hot, and
            made with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-white transition">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Customer Service
          </h4>
          <ul className="space-y-3">
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-400 mb-4">
            Subscribe for the latest offers & updates.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
