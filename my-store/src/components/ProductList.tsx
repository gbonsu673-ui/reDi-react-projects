import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products: ", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
              />
            );
          })
        )}
      </div>
    </main>
  );
}

export default ProductList;
