import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Trash } from "lucide-react";
import { useCart } from "../context/CartContext";
import { ProductCardProps } from "./ProductCard";

// Typescript annotation
export interface CartItemProps extends ProductCardProps {
  quantity: number;
}

// Typescript annotation
interface QuantityProps {
  quantity: number;
}

// Quantity Component
function Quantity({ quantity }: QuantityProps) {
  return (
    <div className="flex space-x-6 px-1.5 py-0.5 my-5 border rounded-2xl">
      <button>
        <Minus className=" text-gray-800  font-semibold" />
      </button>
      <span className="  text-gray-800  font-semibold">{quantity} </span>
      <button className="  text-gray-800  font-semibold">
        <Plus />
      </button>
    </div>
  );
}

// CartItem Component
function CartItem(cartItem: CartItemProps) {
  const { onRemoveItem, removeItemFromCart } = useCart();
  return (
    // Cart Item Card
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform mt-5">
      {/* Product Image  */}
      <div className="flex-1 h-40">
        <img
          className="h-full w-full object-contain"
          src={`${cartItem.image}`}
          alt={`${cartItem.title}`}
        />
      </div>

      <div className="flex-2">
        {/* Product Category & Price */}
        <div className="text-left p-5">
          <h3 className="text-lg text-black font-bold line-clamp-1">{`${cartItem.title}`}</h3>
          <p className="text-xs font-light py-2">{`${cartItem.category.toUpperCase()}`}</p>
          <p className="text-green-600 font-bold py-2">{`$${cartItem.price}`}</p>
        </div>

        {/* Quantity Increase or Decrease Button  */}
        <div className="text-left font-light flex space-x-5 px-4">
          <Quantity quantity={cartItem.quantity} />

          {/* Remove Button */}
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              if (
                window.confirm("Are you sure you want to delete this item?")
              ) {
                removeItemFromCart(cartItem.id);
                onRemoveItem(cartItem.id);
              }
            }}
          >
            <Trash className="text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
