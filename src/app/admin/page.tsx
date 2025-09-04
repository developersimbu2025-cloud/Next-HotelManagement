"use client";
import React, { useState } from "react";
import { menuItems as initialMenuItems } from "@/lib/data";
import { MenuItem } from "@/types";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import Image from "next/image";

const AdminPage = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h1>
          <p className="text-gray-600">Manage your menu items</p>
        </div>

        <div className="mb-6 flex">
          <button
            //onClick={handleCreate}
            className="px-4 py-2 cursor-pointer rounded   disabled:opacity-50 bg-green-500 flex items-center hover:bg-green-600 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Item
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {menuItems.map((ele) => (
            <div className="border border-gray-300 p-2" key={ele.id}>
              
              <div className="relative h-48">
                <Image
                  src={ele.image}
                  alt={ele.name}
                  fill
                  className="object-cover"
                />
              </div>


              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{ele.name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {ele.description}
                </p>
                <p className="text-orange-500 font-bold text-lg mb-2">
                  ${ele.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Category: {ele.category}
                </p>

                <div className="flex space-x-2">
                  <button
                   // onClick={() => handleEdit(item)}
                    className="px-4 py-2 cursor-pointer flex border border-gray-300 rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                  <button
                  //  onClick={() => handleDelete(item.id)}
                    className="px-4 py-2 cursor-pointer flex items-center border  text-red-500  text-sm font-medium border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
