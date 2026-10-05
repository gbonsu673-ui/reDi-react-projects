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
    <>
      <main>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </main>
    </>
  );
}

export default App;
