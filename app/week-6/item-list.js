"use client";
import Item from "./item";
import items from "./items.json";
import { useState } from "react";

function SortButtons() {
    // Set the initial value of sortBy to name
    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...items].sort((itemA, itemB) => {
        // If sortBy is name, sort the items by their name property.
        if (sortBy === "name") {
            return itemA.name.localeCompare(itemB.name);
        // If sortBy is category, sort the items by their category property
        } else if (sortBy === "category") {
            return itemA.category.localeCompare(itemB.category);
        }
    });
    return (
        // Create two buttons that allow the user to change the value of sortBy to name or category.
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

export default function ItemList() {
    return (
        <div className="bg-red text-2xl">
            <SortButtons />
        </div>
    );
}