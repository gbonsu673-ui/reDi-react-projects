import CartItem from "./CartItem";
import { cartItems } from "../data/cart";

function CartList() {
  return (
    <>
      {/* Display product items in shopping cart */}
      <p className="font-extrabold p-6">Shopping Cart 🛒</p>
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onSale={item.onSale}
          />
        ))}
      </div>
    </>
  );
}
export default CartList;
