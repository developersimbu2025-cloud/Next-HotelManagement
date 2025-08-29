import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star, Truck } from "lucide-react";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" min-h-screen ">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Delicious Food, Delivered Fast
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Order from the best restaurants in your area
            </p>
            <Link href="/menu">
              <div className="flex justify-center">
                <Button className="cursor-pointer flex items-center bg-white text-orange-500 hover:bg-gray-100 text-lg px-8 py-3">
                  <span>Order Now</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your food delivered in 30 minutes or less
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-gray-600">
                Fresh ingredients and authentic flavors
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Order anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 text-lg">
              Discover your favorite cuisine
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            Category
          </div>
        </div>
      </section>
    </div>
  );
}
