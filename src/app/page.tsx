"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star, Truck } from "lucide-react";
import Button from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import { categories, menuItems } from "@/lib/data";
import MenuItemCard from "@/components/MenuItemCard";

export default function Home() {
  const FeaturedItems = menuItems.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-cover"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow mb-6">
            Delicious Food,{" "}
            <span className="text-yellow-300">Delivered Fast</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 opacity-90">
            Fresh meals from top restaurants, right at your doorstep.
          </p>
          <Link href="/menu" className="flex justify-center">
            <Button className="cursor-pointer bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 text-lg px-8 py-4 rounded-2xl shadow-lg transition-all flex items-center gap-2">
              <span>Order Now</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Truck className="h-8 w-8 text-orange-500" />,
              title: "Fast Delivery",
              desc: "Get your food delivered in 30 minutes or less.",
            },
            {
              icon: <Star className="h-8 w-8 text-orange-500" />,
              title: "Quality Food",
              desc: "Fresh ingredients and authentic flavors.",
            },
            {
              icon: <Clock className="h-8 w-8 text-orange-500" />,
              title: "24/7 Service",
              desc: "Order anytime, anywhere with ease.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="text-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Browse by Category
            </h2>
          </div>

          {/* Fixed 4 across screen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1, 5).map((ele) => (
              <CategoryCard key={ele.id} category={ele} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Items
            </h2>
            <p className="text-gray-600 text-lg">
              Our most popular dishes loved by foodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FeaturedItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/menu">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl shadow-md transition">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
