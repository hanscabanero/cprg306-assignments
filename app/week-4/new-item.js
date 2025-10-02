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
    <div className="flex items-center justify-center gap-4 h-screen flex-col">
      <div className="bg-gray-200 p-10 rounded-xl">
          <button className="w-16 p-6 bg-blue-500 text-white text-2xl rounded-xl" onClick={decrementQuantity} disabled={quantity == 1}>
            -
          </button>
          <span className="font-mono m-10 text-5xl align-middle">{quantity}</span>
          <button className="p-6 bg-blue-500 text-white text-2xl rounded-xl" onClick={incrementQuantity} disabled={quantity == 20}>
            +
          </button>
      </div>
    </div>
  );
}
