import ItemList from './item-list';

export default function Page() {
    return (
        <main className="max-w-xl mx-auto p-10 bg-white">
            <h1 className="text-5xl font-bold mb-6 text-center">Shopping List</h1>
            <ItemList />
        </main>
    );
}