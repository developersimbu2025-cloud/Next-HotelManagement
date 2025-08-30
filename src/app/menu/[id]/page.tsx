"use client";
import { useParams } from "next/navigation";
import React from "react";
import { menuItems } from "@/lib/data";

const ProductPage = () => {
  const params = useParams();

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
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">{item.name}</div>
      </div>
    </div>
  );
};

export default ProductPage;
