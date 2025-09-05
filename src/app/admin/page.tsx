"use client";
import React, { useState, useEffect } from "react";
import { menuItems as initialMenuItems } from "@/lib/data";
import { MenuItem } from "@/types";
import { Plus, Edit, Trash2, Save, X } from "lucide-react";
import Image from "next/image";

const AdminPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<MenuItem>>({
    name: "",
    description: "",
  });

  useEffect(() => {
    setIsClient(true);
    // ✅ Load menu items only on client to avoid hydration mismatch
    setMenuItems(initialMenuItems);
  }, []);

  const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  const resetForm = () => setFormData({ name: "", description: "" });

  // ✅ Edit existing item
  const handleEdit = (ele: MenuItem) => {
    setFormData({ name: ele.name, description: ele.description });
    setEditingItem(ele);
    setIsCreating(false);
  };

  // ✅ Save edited item
  const handleEditSave = () => {
    if (!editingItem) return;
    const updatedItems = menuItems.map((item) =>
      item.id === editingItem.id ? { ...item, ...formData } as MenuItem : item
    );
    setMenuItems(updatedItems);
    setEditingItem(null);
    resetForm();
  };

  // ✅ Start creating new item
  const handleCreate = () => {
    setIsCreating(true);
    setEditingItem(null);
    resetForm();
  };

  // ✅ Save new item
  const handleCreateSave = () => {
    const newItem: MenuItem = {
      id: generateId(),
      name: formData.name || "Untitled",
      description: formData.description || "",
      category: "General",
      price: 0,
      image: "/placeholder.jpg",
      rating: 0,
      preparationTime: "10 min",
      ingredients: [],
      isVegetarian: false,
      isSpicy: false,
    };

    setMenuItems((prev) => [...prev, newItem]);
    setIsCreating(false);
    resetForm();
  };

  const handleDelete = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  // 🚀 Prevent hydration mismatch: only render after client mount
  if (!isClient) return null;

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Admin Panel</h1>
          <p className="text-gray-600 mt-2">Manage your restaurant menu items</p>
        </div>

        {/* Add button */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={handleCreate}
            className="px-5 py-2.5 cursor-pointer rounded-xl bg-green-600 shadow-md hover:shadow-lg hover:bg-green-700 transition text-white font-medium flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add New Item
          </button>
        </div>

        {/* ✅ Form */}
        {(isCreating || editingItem) && (
          <div className="mb-8 p-6 rounded-xl shadow-lg bg-white border">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              {isCreating ? "Create New Item" : "Edit Item"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                isCreating ? handleCreateSave() : handleEditSave();
              }}
              className="space-y-4"
            >
              <input
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Item name"
                className="border px-4 py-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Item description"
                className="border px-4 py-2.5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center transition"
                >
                  <Save className="h-5 w-5 mr-2" /> Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingItem(null);
                    setIsCreating(false);
                    resetForm();
                  }}
                  className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 flex items-center transition"
                >
                  <X className="h-5 w-5 mr-2" /> Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ✅ Items list */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((ele) => (
            <div
              key={ele.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden border"
            >
              <div className="relative h-48">
                <Image
                  src={ele.image}
                  alt={ele.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 text-gray-900">
                  {ele.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {ele.description}
                </p>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(ele)}
                    className="px-4 py-2 cursor-pointer flex items-center border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ele.id)}
                    className="px-4 py-2 cursor-pointer flex items-center border text-red-500 text-sm font-medium border-red-200 hover:bg-red-50 rounded-lg transition"
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
