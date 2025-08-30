import React from "react";
import { MenuItem } from "@/types";
import Link from "next/link";

type MenuItemCardProps = {
  item: MenuItem;
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <Link href={`/menu/${item.id}`}>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-gray-600">{item.name}</p>
        <p>{item.category}</p>
      </div>
    </Link>
  );
};

export default MenuItemCard;
