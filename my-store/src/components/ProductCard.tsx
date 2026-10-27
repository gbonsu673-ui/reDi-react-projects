import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import ProductDetails from "../pages/ProductDetails";

// typescript implementaton
export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string; // category annotation
  image: string; // image annotation
}

// Product Card Component
function ProductCard(product: ProductCardProps) {
  // Adding a State
  const [isFavourite, setIsFavourite] = useState(false);

  const { cart, addToCart } = useCart();

  return (
    <div className="p-4 flex flex-col justify-center space-y-1.5 items-center bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform ">
      {/* Product Category & Add to Favourite Button */}
      <div className="flex w-full justify-between">
        {/* Category */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 py-0.5 rounded">
            {product.category}
          </p>
        </div>

        {/* Add to Button */}
        <div>
          <button
            onClick={() => setIsFavourite(!isFavourite)}
            className=" text-white text-2xl hover:scale-95 hover:cursor-pointer transition-transform"
          >
            {isFavourite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>

      {/* Product Image */}
      <Link to={`${product.id}`}>
        <div className="h-60">
          <img
            className="h-full object-contain mx-auto mt-2"
            src={`${product.image}`}
            alt={`${product.title}`}
          />
        </div>
      </Link>

      {/* Product Title */}
      <div className="mt-2">
        <h3 className="text-lg font-bold line-clamp-1 text-gray-800 mt-1.5">
          {product.title}
        </h3>
      </div>

      {/* Product Description & Price */}
      <div>
        <p className="text-gray-500 text-left line-clamp-2 text-sm mt-1">
          {product.description}
        </p>
      </div>

      {/* Product Price & Add to Cart Button*/}
      <div className="flex w-full justify-between m-2.5">
        {/* Product Price */}
        <p className="text-green-600 font-medium py-2 mt-1.5">
          ${product.price.toFixed(2)}
        </p>

        {/* Add to cart button */}
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="mt-1.5 p-2 h-8 w-8 text-white text-xl bg-blue-400 rounded-full uppercase hover:scale-95 hover:cursor-pointer transition-transform"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
