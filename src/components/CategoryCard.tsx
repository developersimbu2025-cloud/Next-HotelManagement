"use client";


import React, { useState } from "react";
import { Category } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

type CategoryCardProps = {
  category: Category;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link href={`/menu?category=${category.name.toLowerCase()}`}>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-gray-600">{category.name}</p>
        <p>{category.description}</p>

        <div className="relative w-full ">
          {/* Skeleton */}
          {isLoading && (
            <div className="absolute inset-0 animate-pulse rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
          )}

          <Image
            src={category.image}
            alt={category.name}
           
            className={`rounded-md object-cover transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
