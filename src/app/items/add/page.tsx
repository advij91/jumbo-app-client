"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { uploadMenuItem } from "../../../../services/menuItemService";

const AddMenuItemPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ingrediants: "",
    category: "",
    labels: "",
    price: 0,
    file: null as File | null,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.file) {
      alert("Please upload an image.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("ingrediants", formData.ingrediants);
    data.append("category", formData.category);
    data.append("price", formData.price.toString());
    data.append("labels", formData.labels);
    data.append("file", formData.file);

    try {
      const newItem = await uploadMenuItem(data);
      console.log("Item uploaded successfully:", newItem);
      alert("Item uploaded successfully!");
      router.push("/items");
    } catch (error) {
      console.error("Error uploading item:", error);
      alert("Failed to upload item.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Add New Menu Item</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Ingredients</label>
          <input
            type="text"
            name="ingrediants"
            value={formData.ingrediants}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Select a category</option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="desert">Desert</option>
            <option value="sides">Sides</option>
            <option value="chinese">Chinese</option>
            <option value="shakes">Shakes</option>
            <option value="juices">Juices</option>
            <option value="noodles">Noodles</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Labels</label>
          <input
            type="text"
            name="labels"
            value={formData.labels}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Image</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Upload Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuItemPage;