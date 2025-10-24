"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    // initialize an item object
    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      quantity: quantity,
      category: category,
    };

    // call the onAddItem prop with the new item
    if (onAddItem) {
      onAddItem(item);
    }

    // reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  function incrementQuantity(e) {
    e.preventDefault();
    setQuantity(quantity + 1);
  }

  function decrementQuantity(e) {
    e.preventDefault();
    setQuantity(quantity - 1);
  }

  return (
    <main>
      <form
        className="mx-auto my-4 gap-3 flex flex-col justify-center text-black bg-white w-100 p-4 border border-gray-300 rounded-lg shadow-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="mx-auto text-xl font-bolder mb-4">
          Week-5 Assignment
        </h1>

        <input
          placeholder="Item Name"
          className="p-2 border border-gray-300 rounded"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="align-middle flex flex-row items-center">
          <div className="rounded-xl border p-2 border-gray-300">
            <button
              className="px-4 py-2 bg-red-500 text-white text-2xl rounded-xl disabled:bg-gray-500"
              type="button"
              onClick={decrementQuantity}
              disabled={quantity == 1}
            >
              -
            </button>
            <span className="font-mono m-6 text-xl align-middle">
              {quantity}
            </span>
            <button
              className="px-4 py-2 bg-green-500 text-white text-2xl rounded-xl disabled:bg-gray-500"
              type="button"
              onClick={incrementQuantity}
              disabled={quantity == 20}
            >
              +
            </button>
          </div>
        </div>

        <select
          className="p-2 border border-gray-300 rounded"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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

        <button className="bg-blue-500 text-white p-3 rounded-lg" type="submit">
          Add Item
        </button>
      </form>
    </main>
  );
}