import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartList() {
  const { cart, onRemoveItem, addToCart, removeAllItemsInCart } = useCart();

  // Compute Total Cost of Items in Cart
  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Compute Total Number of Items in Cart
  const allItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Display Message When Cart is Empty
  if (cart.length === 0) {
    return (
      <main className="m-auto max-w-275 min-h-screen overflow-auto px-10 bg-gray-100">
        <div className="mt-8">
          <p className="text-sm text-black"> Sorry. Your cart is empty 😔💔</p>
          <p>
            <Link
              to="/products"
              className="text-sm  text-blue-500 hover:underline"
            >
              Click here to explore more products...
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Display product items in shopping cart */}

      <div className="m-auto max-w-275 min-h-screen overflow-auto px-10 pb-5">
        <p className="font-extrabold text-lg text-left pt-4">
          Blue Kiosk Basket ({allItemsInCart} items)
        </p>
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

            {/* Clear Cart Button */}
            <div className="text-left">
              <button
                onClick={() => {
                  if (
                    window.confirm("Are you sure you want to clear this cart?")
                  ) {
                    removeAllItemsInCart();
                  }
                }}
                className="py-0.5 px-4 my-4 bg-red-400 text-xs font-medium text-white uppercase rounded-2xl hover:cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="flex-1 h-50 bg-white shadow-md rounded-3xl hover:shadow-xl mt-5">
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
                Subtotal ({`${allItemsInCart}`} items):
                <span className="text-black font-bold">
                  {" "}
                  ${totalCost.toFixed(2)}
                </span>
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
