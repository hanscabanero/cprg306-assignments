"use client";
import Item from "./item";
import { useState } from "react";

function SortButtons({ items }) {
  // Set the initial value of sortBy to name
  const [sortBy, setSortBy] = useState("name");

  
  const sortedItems = [...items].sort((itemA, itemB) => {
    if (sortBy === "name") {
      return itemA.name.localeCompare(itemB.name);
    } else if (sortBy === "category") {
      return itemA.category.localeCompare(itemB.category);
    }
  });

  return (
    <div>
      <button
        className={`m-2 p-2 rounded text-white ${
          sortBy === "name" ? "bg-blue-500" : "bg-gray-500"
        }`}
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </button>
      <button
        className={`m-2 p-2 rounded text-white ${
          sortBy === "category" ? "bg-blue-500" : "bg-gray-500"
        }`}
        onClick={() => setSortBy("category")}
      >
        Sort by Category
      </button>

      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default function ItemList({ items }) {
  return (
    <div className="bg-red text-2xl">
      <SortButtons items={items} />
    </div>
  );
}