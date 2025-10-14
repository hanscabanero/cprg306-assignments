"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json"; //Import the json file

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  //Copy data and store 
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      {/* Sorting Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Sorted List */}
      <ul className="bg-gray-100 p-4 rounded-lg">
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
