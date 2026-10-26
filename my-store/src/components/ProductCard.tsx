import { useState } from "react";
import { Link } from "react-router-dom";
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

function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
}: ProductCardProps) {
  // Adding a State
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <Link to={`${id}`}>
      <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform border-t-4 border-blue-500">
        {/* added category field to every product */}
        <p className="text-xs font-semibold uppercase tracking-wide text-white bg-blue-500 px-2 py-o.5 rounded">
          {category}
        </p>

        {/* Exercise 4: added image to each product*/}
        <div className="w-full">
          <img className="mx-auto mt-2" src={`${image}`} alt={`${title}`} />
        </div>

        {/* already existing product features */}
        <h3 className="text-lg font-bold text-gray-800 mt-1.5">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <p className="text-green-600 font-semibold mt-2">${price.toFixed(2)}</p>

        {/* Exercise 4: added add to cart button */}
        <button className="mt-1.5 px-2 py-1 text-white text-xs bg-blue-400 rounded uppercase hover:scale-95 transition-transform">
          Add to Cart
        </button>

        {/* Milestone 2: Add to favourites */}
        <button
          onClick={() => setIsFavourite(!isFavourite)}
          className="mt-1.5 px-2 py-1 text-white text-xs bg-blue-400 rounded uppercase hover:scale-95 transition-transform"
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;
