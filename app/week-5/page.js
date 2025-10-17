"use client";
import { useState } from "react";
import NewItem from "./new-item.js";

export default function Page() {
<<<<<<< HEAD
       const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
=======
    // declare state variables for the form inputs
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);


    function handleSubmit(e) {
        e.preventDefault(); // Stop from reloading the page
        // initialize an item objec
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };
        // console log item
        console.log("Item:", item);
        // send alert with item details
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        // reset form fields
>>>>>>> c3b17279d92991ab86d5a26528b55e78ab63049e
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
<<<<<<< HEAD
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
=======
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
                    // Create an input field of type text.
                    type="text"
                    name="name"
                    id="name"
                    // The value of the input field should be tied to the name state variable, meaning that it displays the current value of name.
                    value={name}
                    // Use the setName function in an onChange event handler to update the state of name as the user types into the field.
                    onChange={e => setName(e.target.value)}
                    // Add required attribute to the input field to ensure that the user cannot submit the form without providing a name.   
                    required
                />
                <div className="flex flex-row justify-between gap-4">
                    {/* quantity selector, pass quantity into new-item component*/}
                    <NewItem quantity={quantity} setQuantity={setQuantity} />
                    {/* • Create a select element for the category. */}
                    <select
                        className="p-2 border border-gray-300 rounded"
                        name="category"
                        id="category"
                        // The value of the select element should be tied to the category state variable
                        value={category}
                        // Use the setCategory function in an onChange event handler to update the state of category when the user selects a different option.
                        onChange={e => setCategory(e.target.value)}
                    >
                        {/* Create various option elements within the select for each possible category ("Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"). Each option should have a value that matches the category it represents. */}
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
>>>>>>> c3b17279d92991ab86d5a26528b55e78ab63049e
            </form>
        </main>
    );
}