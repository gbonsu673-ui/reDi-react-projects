function ProductCard({ name, price, description }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
      <p className="text-blue-600 font-semibold mt-2">${price}</p>
    </div>
  );
}

export default ProductCard;
