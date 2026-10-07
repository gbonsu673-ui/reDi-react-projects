import ProductCard from "./ProductCard";
import { ProductCardProps } from "./ProductCard";

interface MainProps {
  products: ProductCardProps[];
}

function Main({ products }: MainProps) {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Main;
