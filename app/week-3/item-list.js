import Item from "./item";
import {items} from "./items";

export default function ItemList() {
return (
    <ul className ="bg-grey">
    {items.map((item, index) => ( //chatgpt helped me with this part
        <Item key={index} {...item} />
    ))}
    </ul>
);
}
