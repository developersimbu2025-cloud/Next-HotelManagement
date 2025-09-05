"use client";

import React, { useState } from "react";
import { Category } from "@/types";
import Link from "next/link";
import Image from "next/image";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/menu?category=${category.name.toLowerCase()}`}>
      <div className="group relative overflow-hidden rounded-xl  transition">
        {/* Image container */}
        <div className="relative w-full aspect-[4/3]">
          {/* Skeleton Loader */}
          {isLoading && (
            <div className="absolute inset-0 animate-pulse rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
          )}

          <Image
            src={category.image}
            alt={category.name}
            fill
            className={`rounded-xl object-cover transition-transform duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            } group-hover:scale-110`}
            onLoadingComplete={() => setIsLoading(false)}
          />

          {/* Overlay with category name */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="text-white text-xl font-semibold tracking-wide">
              {category.name}
            </h3>
          </div>
        </div>

 
      </div>
    </Link>
  );
};

export default CategoryCard;
