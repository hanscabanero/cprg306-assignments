"use client";
import {useState} from "react";

export default function NewItem() 
{
  const [quantity, setQuantity] = useState(1);


    function incrementQuantity() 
    {
        setQuantity(quantity + 1);
    }
    function decrementQuantity()
    {
        setQuantity(quantity - 1);
    }

  return (
    <div className="align-middle flex flex-row items-center">
      <div className="rounded-xl border p-2 border-gray-300">
          <button className="px-4 py-2 bg-red-500 text-white text-2xl rounded-xl" type="button" onClick={decrementQuantity} disabled={quantity == 1}>
            -
          </button>
          <span className="font-mono m-6 text-xl align-middle">{quantity}</span>
          <button className="px-4 py-2 bg-green-500 text-white text-2xl rounded-xl" type="button" onClick={incrementQuantity} disabled={quantity == 20}>
            +
          </button>
      </div>
    </div>
  );
}
