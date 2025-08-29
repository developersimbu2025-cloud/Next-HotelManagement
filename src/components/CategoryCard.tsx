import React from "react";

type CategoryCardProps = {
  // later you can add props like title, image, etc.
};

const CategoryCard: React.FC<CategoryCardProps> = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <p className="text-gray-600">Category Card</p>
    </div>
  );
};

export default CategoryCard;
