"use client";
import {useState} from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
    // declare state variables for the form inputs
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");


    function handleSubmit(e) {
        e.preventDefault(); // Stop from reloading the page
        // initialize an item object
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
        setName("");
        setQuantity(1);
        setCategory("produce");

      }
    function incrementQuantity(e) 
    {
      e.preventDefault();
      setQuantity(quantity + 1);
    }
    function decrementQuantity(e)
    {
      e.preventDefault();
      setQuantity(quantity - 1);
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
                  <div className="align-middle flex flex-row items-center">
                    <div className="rounded-xl border p-2 border-gray-300">
                        <button className="px-4 py-2 bg-red-500 text-white text-2xl rounded-xl disabled:bg-gray-500 " type="button" onClick={decrementQuantity} disabled={quantity == 1}>
                          -
                        </button>
                        <span className="font-mono m-6 text-xl align-middle">{quantity}</span>
                        <button className="px-4 py-2 bg-green-500 text-white text-2xl rounded-xl disabled:bg-gray-500" type="button" onClick={incrementQuantity} disabled={quantity == 20}>
                          +
                        </button>
                    </div>
                  </div>
                    
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
                {/* submit button */}
                <button className="bg-blue-500 text-white p-3 rounded-lg" type="submit"> Add Item </button>
            </form>
        </main>
    );
}
