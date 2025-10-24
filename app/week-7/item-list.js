// Use the useState hook to create a state variable sortBy and its setter function setSortBy. This will be used to determine the sorting preference of the user.
"use client";
import { items } from "../week-3/items";
import Item from "./item";
import { useState } from "react";
    
function SortButtons({ items }) {

    // Set the initial value of sortBy to "name", indicating that the list should initially be sorted by name.
    const [sortBy, setSortBy] = useState("name");

    // Use JavaScript's sort function to sort the items array based on the sortBy state variable.
    const sortedItems = [...items].sort((itemA, itemB) => {
        // If sortBy is "name", sort the items by their name property.
        if (sortBy === "name") {
            return itemA.name.localeCompare(itemB.name);
        // If sortBy is "category", sort the items by their category property
        } else if (sortBy === "category") {
            return itemA.category.localeCompare(itemB.category);
        }
        return 0;
    });

    return (
        // Create two buttons that allow the user to change the value of sortBy to "name" or "category". These buttons should change the sorting of the items when clicked.
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
            {/* Use the map function to create a new Item component for each item in the items array.
            Don't forget to provide a unique key prop for each Item (you can use the item's id for this
            purpose). */}
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
            <SortButtons items={items}/>
        </div>
    );
}