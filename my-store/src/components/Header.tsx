import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-blue-600 text-white">
      <div className="m-auto max-w-275 overflow-auto px-10 flex justify-between items-center">
        {/* E-Commerce Title. */}
        <h1 className="text-2xl font-bold text-white">
          <span className="text-blue-900">Blue</span>
          <span className="uppercase text-white">Kiosk</span>
        </h1>
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>

          {/* Cart Link */}
          <Link to="/cart" className="hover:cursor-pointer">
            <ShoppingCart className="h-8 w-8" />
            {cartCount > 0 ? (
              <span className="relative h-4 w-4 -top-10 -right-0.5 bg-red-500 text-white rounded-full text-xs px-1">
                {cartCount}
              </span>
            ) : (
              <span className="relative h-4 w-4 -top-10 -right-0.5 bg-gray-500 text-gray-700 rounded-full text-xs px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
