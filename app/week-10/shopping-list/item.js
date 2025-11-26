export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="bg-slate-800 text-white p-4 mb-7 rounded-lg shadow-md cursor-pointer hover:bg-slate-700 transition"
      onClick={() => onSelect && onSelect(name)}
    >
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-sm text-gray-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
