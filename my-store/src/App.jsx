import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 89.99,
    description: "Lightweight and fast.",
  },
  {
    id: 2,
    name: "Yoga Mat",
    price: 24.99,
    description: "Non-slip, 6mm thick.",
  },
  {
    id: 3,
    name: "Water Bottle",
    price: 14.99,
    description: "Insulated, 750ml.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <main className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
