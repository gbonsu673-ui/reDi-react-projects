import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartList() {
  const { cart, onRemoveItem, addToCart } = useCart();

  // Display Message When Cart is Empty
  if (cart.length === 0) {
    return (
      <p>
        Your cart is empty 😔.
        <Link to="/products" className="underline">
          {" "}
          Browse products
        </Link>
      </p>
    );
  }

  return (
    <>
      {/* Display product items in shopping cart */}

      <div className="m-auto max-w-275 min-h-screen overflow-auto px-10 pb-5">
        <p className="font-extrabold text-left p-6">Shopping Cart 🛒</p>
        <div className="flex space-x-3">
          <div className="flex-2">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                quantity={item.quantity}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>

          <div className="flex-1 h-50 bg-white shadow-md rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-transform mt-5">
            {/* Rewards */}
            <div className="flex justify-between items-center bg-pink-200 mb-4 p-3">
              <p className="text-xs text-gray-600 font-semibold ml-1">
                Your Rewards:
              </p>
              <p className="py-0.5 px-1.5 bg-blue-400 rounded-2xl text-gray-700 font-semibold text-xs">
                <span className="uppercase">Free </span>delivery
              </p>
              <p className="py-0.5 px-1.5 uppercase bg-red-400 rounded-2xl text-gray-700 font-semibold text-xs ml-2.5">
                + 10% off
              </p>
            </div>

            <div className="px-3">
              {/* Subtotal */}
              <p className="text-left text-black text-sm font-semibold">
                Subtotal (9 items):{" "}
                <span className="text-black font-bold">$145.61</span>
              </p>

              {/* Proceed to Checkout Button */}
              <button className="py-1 px-3 my-4 bg-amber-400 text-sm font-medium text-black rounded-2xl w-full hover:cursor-pointer">
                Proceed to Checkout
              </button>

              {/* Continue Shopping Link */}
              <Link
                to="/products"
                className="text-xs text-blue-500 hover:underline"
              >
                Continue shopping on BlueKIOSK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartList;
