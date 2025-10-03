import NewItem from "./new-item.js";

export default function Page()
{
    return (
        <main>
            <form className="mx-auto my-4 gap-3 flex flex-col justify-center text-black bg-white w-100 p-4 border border-gray-300 rounded-lg shadow-2xl">
                <h1 className="mx-auto text-xl font-bolder mb-4">
                    Week-5 Assignment
                </h1>
                <input placeholder="Item Name" className="p-2 border border-gray-300 rounded" type="text" name="name" id="name" />
                <div className="flex flex-row justify-between gap-4">
                    <NewItem/>
                    <select className="p-2 border border-gray-300 rounded" name="category" id="category">
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
                <button className="bg-blue-500 text-white p-3 rounded-lg" type="submit"> Add Item </button>
            </form>
        </main>
    );
 
}