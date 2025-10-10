"use client";
import { useState } from "react";
import NewItem from "./new-item.js";

export default function Page() {
       const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col gap-5"
            >
                <h1 className="text-2xl font-semibold text-center text-gray-800">
                    🛒 Week 5 Assignment
                </h1>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                        Item Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter item name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <NewItem quantity={quantity} setQuantity={setQuantity} />

                    <div className="flex flex-col flex-1">
                        <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen-foods">Frozen Foods</option>
                            <option value="canned-goods">Canned Goods</option>
                            <option value="dry-goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                >
                    Add Item
                </button>
            </form>
        </main>
    );
}