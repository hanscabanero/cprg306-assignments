import Item from "./item";
import {items} from "./items";


export default function ItemList() {
    return (
        <div>
            <ul>
                {/* map function serves as loop based of position in array */}
                {items.map((item, index) => ( 
                    <Item key={index} {...item} /> //spread operator
                ))}
            </ul>
        </div>
    );
}
