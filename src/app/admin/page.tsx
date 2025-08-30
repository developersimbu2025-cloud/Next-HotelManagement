"use client";
import React, { useState } from "react";
import { menuItems as initialMenuItems } from "@/lib/data";
import { MenuItem } from "@/types";

const AdminPage = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage your menu items</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {menuItems.map((ele) => (
            <div className="border border-gray-300 p-5" key={ele.id}>
              {ele.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
