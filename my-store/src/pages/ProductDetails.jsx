import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Info } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section className="m-auto max-w-275 min-h-screen overflow-auto px-10">
      {/* Product Details Card */}
      <div className="flex items-center w-full p-8 space-x-4 mt-10 bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform">
        {/* Product Image */}
        <div className="flex-1 h-100">
          <img
            className="h-full w-full object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>

        {/* Product Description */}
        <div className="flex-1 flex flex-col space-y-3.5">
          <h3 className="text-left text-lg font-extrabold text-black">
            {product.title}
          </h3>
          <p className="text-left text-black">{product.description}</p>

          {/* Product Price, VAT Info & Add to Cart Button */}
          <div className="mt-4">
            <p className="text-xl text-left font-bold text-green-700">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-left font-medium text-black">
              Prices include VAT.
              <Info className="inline mr-1 align-super h-3 w-3 text-gray-500" />
            </p>
            {/* Add to cart button */}
            <button className="mt-5 p-2 w-full text-white text-xs bg-blue-400 rounded-2xl uppercase hover:scale-95 hover:cursor-pointer transition-transform">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
