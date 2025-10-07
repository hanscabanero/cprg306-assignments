"use client";
import { useState } from "react";
import NewItem from "./new-item.js";

export default function Page() {
    // declare state variables for the form inputs
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault(); // Stop from reloading the page
        alert(`Name: ${name}
            \nQuantity: ${quantity}
            \nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <main>
            <form
                className="mx-auto my-4 gap-3 flex flex-col justify-center text-black bg-white w-100 p-4 border border-gray-300 rounded-lg shadow-2xl"
                // call submit handler function
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
                    // set the name state variable when the user types in the input field
                    onChange={e => setName(e.target.value)}
                />
                <div className="flex flex-row justify-between gap-4">
                    {/* quantity selector, pass quantity into new-item component*/}
                    <NewItem quantity={quantity} setQuantity={setQuantity} />
                    <select
                        className="p-2 border border-gray-300 rounded"
                        name="category"
                        id="category"
                        value={category}
                        // set the category state variable when the user selects a different option
                        onChange={e => setCategory(e.target.value)}
                    >
                        {/* provide values for user to choose and store them */}
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
                {/* submit button */}
                <button className="bg-blue-500 text-white p-3 rounded-lg" type="submit"> Add Item </button>
            </form>
        </main>
    );
}