"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-3 text-center">Shopping List</h1>
      <div className="max-w-xl mx-auto">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}