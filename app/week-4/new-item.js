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
    <div className="flex items-center gap-4">
      <button onClick={decrementQuantity} disabled={quantity == 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity} disabled={quantity == 20}>
        +
      </button>
    </div>
  );
}
