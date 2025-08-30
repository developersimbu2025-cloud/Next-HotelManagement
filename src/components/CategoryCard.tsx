import React from "react";
import { Category } from '@/types';
import Link from 'next/link';

type CategoryCardProps = {
  // later you can add props like title, image, etc.
  category:Category
};

const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
  return (
    <Link href={`/menu?category=${category.name.toLowerCase()}`}>
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-gray-600">{category.name}</p>
    </div>
    </Link>
  );
};

export default CategoryCard;
