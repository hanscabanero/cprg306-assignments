"use client";

// Import the NewItem and ItemList components.
import ItemList from "./item-list";
import NewItem from "./new-item";

// Import items.json as itemsData.
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {


  // Initialize a state variable (e.g., items) with the data from items.json.
  const [items, setItems] = useState(itemsData);

  const itemsFromJSON = items.map((item, index) => ({
  ...item,
  id: crypto.randomUUID() || index.toString(),  // generate a random id from MDN DOcs
}));

  console.log(itemsFromJSON);

  // Create an event handler function (e.g., handleAddItem) that adds a new item to items.
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-3 text-center">Shopping List</h1>
      <div className="max-w-xl mx-auto">
        {/* In your render function, display both the NewItem and ItemList components.
            Pass the handleAddItem event handler to the NewItem component as a prop called onAddItem.
          Pass the items state to the ItemList component as a prop */}
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
