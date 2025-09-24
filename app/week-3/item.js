import React from "react";

function Item({ name, quantity, category }) {
    return (
        <li className="bg-white shadow rounded p-4 mb-2 flex flex-col">
            <span className="font-bold text-lg">{name}</span>
            <span className="text-black">Quantity: {quantity}</span>
            <span className="text-black">Category: {category}</span>
        </li>
    );
}

export default Item;