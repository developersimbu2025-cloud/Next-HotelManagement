"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { menuItems } from "@/lib/data";
import { Star, Clock, Leaf, Flame, Minus, Plus, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
const ProductPage = () => {
  const params = useParams();
   const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const item = menuItems.find((item) => item.id === params?.id);
  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Item not found
          </h1>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/menu">
          <button className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-96 md:h-[500px] rounded-lg ">
            <Image src={item.image} alt={item.name} className="object-cover" />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {item.name}
              </h1>
              <p className="text-gray-600 text-lg mb-4">{item.description}</p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{item.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="h-5 w-5" />
                  <span>{item.preparationTime}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600">{item.category}</span>
              </div>

              <div className="text-3xl font-bold text-orange-500 mb-6">
                ${item.price.toFixed(2)}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button onClick={decreaseQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-medium px-4">{quantity}</span>
                <button onClick={increaseQuantity}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-orange-500">
                  ${(item.price * quantity).toFixed(2)}
                </span>
              </div>
              <button
                 onClick={handleAddToCart}
                className="cursor-pointer w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
