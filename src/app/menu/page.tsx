"use client";
import React, { useEffect, useState } from "react";
import { menuItems, categories } from "@/lib/data";
import MenuItemCard from "@/components/MenuItemCard";
import { useSearchParams } from "next/navigation";

const Menupage = () => {
  const searchParams = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [mounted, setMounted] = useState(false); // ✅ avoid hydration mismatch

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const categoryParam = searchParams?.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam.toLowerCase());
    }
  }, [searchParams, mounted]);

  useEffect(() => {
    let filtered = menuItems;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    setFilteredItems(filtered);
  }, [selectedCategory]);

  if (!mounted) {
    return null; // ✅ render nothing until client is mounted
  }

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Our Menu</h1>
          <p className="text-gray-600 mt-2">
            Choose a category to explore delicious items 🍴
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((ele) => (
            <button
              key={ele.id}
              className={`px-5 py-2 rounded-full font-medium transition cursor-pointer ${
                selectedCategory === ele.name.toLowerCase()
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 border hover:bg-orange-100"
              }`}
              onClick={() => setSelectedCategory(ele.name.toLowerCase())}
            >
              {ele.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl font-medium">No items found 😢</p>
            <p className="text-sm mt-2">Try selecting another category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menupage;
