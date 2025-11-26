"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  // currently signed-in Firebase user
  const [user, setUser] = useState(null);


  // Listen for Firebase auth state changes and update user.
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  // Load the current users items when user changes.
  useEffect(() => {
    const loadItems = async () => {
      if (!user?.uid) return;
      const loadedItems = await getItems(user.uid);
      setItems(loadedItems);
    };

    loadItems();
  }, [user]);

  // Add a new item for this user and update UI
  async function handleAddItem(newItem) {
    if (!user?.uid) return;
    const id = await addItem(user.uid, newItem);
    setItems([...items, { ...newItem, id }]);
  }

  function handleItemSelect(item) {
    let cleanedName = item.name
      .toLowerCase()
      .split(",")[0]
      .replace(
      //remove emojis, and commas
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="flex-1 max-w-xl">
          <NewItem onAddItem={handleAddItem} />
          {/* Pass item select function on item select */}
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div className="flex-1 max-w-xl">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
