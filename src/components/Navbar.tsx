"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Utensils, User, Settings } from "lucide-react";

const Navbar = () => {
  const { state } = useCart();
  const pathname = usePathname();
  const linkClasses = (href: string) =>
    `transition-colors ${
      pathname === href
        ? "text-orange-500 font-semibold"
        : "text-gray-600 hover:text-orange-500"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">FoodHub</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
            <Link href="/menu" className={linkClasses("/menu")}>
              Menu
            </Link>
            <Link href="/admin" className={linkClasses("/admin")}>
              Admin
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />

               {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.itemCount}
                </span>
              )}
            </Link>
            <div className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
              <User className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
