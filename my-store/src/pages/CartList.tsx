import CartItem from "../components/CartItem";
import { cartItems } from "../data/cart";

function CartList() {
  return (
    <>
      {/* Display product items in shopping cart */}

      <div className="m-auto max-w-275 min-h-screen overflow-auto px-10">
        <p className="font-extrabold text-left p-6">Shopping Cart 🛒</p>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            quantity={item.quantity}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}
export default CartList;
