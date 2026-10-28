import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { ProductCardProps } from "../components/ProductCard";

function ProductList() {
  // States
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  // Holds The Error Message to Show The User
  const [error, setError] = useState<string | null>(null);

  // Input From Search Box
  const [searchTerm, setSearchTerm] = useState("");

  // Selected Category ("" = All Categories)
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) throw new Error("Failed to load products");
        const data: ProductCardProps[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Sorry something went wrong 😑💔 ",
        );
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Fallback UI When Products Are Being Fetched
  if (isLoading)
    return (
      <div className="m-auto max-w-275 min-h-screen overflow-auto p-6 px-10">
        <div
          className=" inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!">
            Loading...
          </span>
        </div>
      </div>
    );

  // Fallback UI When Error Occurs While Fetching Products
  if (error)
    return (
      <div className="m-auto max-w-275 min-h-screen overflow-auto px-10">
        <p className="p-6 text-center text-red-600">{error}</p>
      </div>
    );

  // Build The Dropdown Options From The Data
  const categories = [...new Set(products.map((product) => product.category))];

  // Derived Filtered Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Matching Searched Products with a Chosen Category From Categories Dropdown
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="m-auto max-w-275 min-h-screen overflow-auto px-10 bg-gray-100">
      <h2 className="product-list-header text-left">Our Products</h2>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="flex-1 p-2 border rounded"
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          className="p-2 border rounded"
        >
          <option className="text-sm" value="">
            ALL CATEGORIES
          </option>
          {categories.map((category) => (
            <option className="text-sm" key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* {Product Listings} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-5">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full">
            {" "}
            No products match your search.
          </p>
        ) : (
          filteredProducts.map((product) => {
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
