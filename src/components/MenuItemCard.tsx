"use client";

import React from "react";
import { MenuItem } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, Leaf, Flame } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

type MenuItemCardProps = {
  item: MenuItem;
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
  };

  return (
    <Link href={`/menu/${item.id}`}>
      <div className="p-2 bg-gray-100 rounded-lg shadow-md">
        <div>
          <Image src={item.image} alt={item.name} className="object-cover" />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
              {item.name}
            </h3>
            <span className="text-lg font-bold text-orange-500">
              ${item.price.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {item.description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">{item.rating}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{item.preparationTime}</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MenuItemCard;
