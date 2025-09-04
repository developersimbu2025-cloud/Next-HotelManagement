"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";

const CartPage = () => {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-6">
            Add some delicious items to get started
          </p>
          <Link href="/menu">
            <button className="bg-orange-500 hover:bg-orange-600">
              Browse Menu
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Cart</h1>
          <p className="text-gray-600">
            {state.itemCount} item(s) in your cart
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            {state.items.map((item, index) => (
              <div key={`${item.id}-${index}`}>
                <div className="flex items-center space-x-4 py-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-1">
                      {item.description}
                    </p>
                    {item.specialInstructions && (
                      <p className="text-sm text-orange-600 mt-1">
                        Note: {item.specialInstructions}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      className="border border-gray-300 rounded-md p-2"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-medium px-2">{item.quantity}</span>
                    <button
                      className="border border-gray-300 rounded-md p-2"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-gray-500 text-sm">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>

                  <button
                    className="border border-gray-300 rounded-md p-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {index < state.items.length - 1 && (
                  <div className="border-b border-gray-200" />
                )}
              </div>
            ))}
          </div>

          <div className="border-t bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <Link href="/menu">
                  <button className="border border-gray-300 rounded-md p-2">
                    Continue Shopping
                  </button>
                </Link>
                <button
                  className="border border-gray-300 rounded-md p-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-lg">
                <span>Subtotal:</span>
                <span className="font-semibold">${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee:</span>
                <span>$3.99</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax:</span>
                <span>${(state.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>
                  ${(state.total + 3.99 + state.total * 0.08).toFixed(2)}
                </span>
              </div>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
