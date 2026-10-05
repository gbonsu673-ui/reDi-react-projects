function ProductCard({ name, price, description }) {
  return (
    <div className="text-4xl font-bold text-blue-500">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
