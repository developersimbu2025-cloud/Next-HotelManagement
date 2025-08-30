"use client";
import React, { useEffect, useState } from "react";
import { menuItems, categories } from "@/lib/data";
import MenuItemCard from "@/components/MenuItemCard";
import Button from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const Menupage = () => {
  const searchParams = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const categoryParam = searchParams?.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = menuItems;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    setFilteredItems(filtered);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Menu</h1>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((ele) => (
            <button
              key={ele.id}
              className="bg-orange-500 rounded-md px-4 py-2  text-white cursor-pointer"
              onClick={() => setSelectedCategory(ele.name.toLowerCase())}
            >
              {ele.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menupage;
