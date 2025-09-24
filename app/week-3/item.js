export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-white rounded-2xl p-6 mb-2 flex flex-col shadow-lg">
            <span className="font-bold text-xl">{name}</span>
            <span className="text-black">Buy {quantity} in {category}</span>
        </li>
    );
}
