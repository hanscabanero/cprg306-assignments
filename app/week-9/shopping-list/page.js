"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth_context";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  const { user } = useUserAuth();

  if (!user) {
    return null;
  }

  function handleItemSelect(item) 
  {
    //remove emojis, and commas
    let cleanedName = item.name
      .toLowerCase()
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '') 
      .trim();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Shopping List + Meal Ideas</h1>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {/* Left side */}
        <div className="flex-1 max-w-xl">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right side */}
        <div className="flex-1 max-w-xl">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
