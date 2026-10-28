import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Trash } from "lucide-react";
import { useCart } from "../context/CartContext";
import { ProductCardProps } from "./ProductCard";

// Typescript annotation
export interface CartItemProps extends ProductCardProps {
  quantity: number;
}

// CartItem Component
function CartItem(cartItem: CartItemProps) {
  const { onRemoveItem, removeItemFromCart, addToCart } = useCart();
  return (
    // Cart Item Card
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform my-5">
      {/* Product Image  */}
      <div className="flex-1 h-40 px-3">
        <img
          className="h-full object-contain"
          src={`${cartItem.image}`}
          alt={`${cartItem.title}`}
        />
      </div>

      <div className="flex-2">
        {/* Product Category & Price */}
        <div className="text-left p-5">
          <h3 className="text-lg text-black font-semibold line-clamp-1">{`${cartItem.title}`}</h3>
          <p className="text-xs font-light py-1">{`${cartItem.category.toUpperCase()}`}</p>
          <p className="text-green-600 font-bold pb-1">{`$${cartItem.price}`}</p>

          {/* Quantity Increase or Decrease Button  */}
          <div className="text-left font-light flex space-x-5 my-3 ">
            <div className="flex space-x-6 px-1.5 py-0.5 border rounded-2xl">
              {/* Increase Item Quantity */}
              <button onClick={() => onRemoveItem(cartItem.id)}>
                <Minus className="text-gray-600 h-4 w-4 hover:scale-95 hover:cursor-pointer transition-transform" />
              </button>
              <span className="  text-gray-600">{cartItem.quantity} </span>

              {/* Decrease Item Quantity */}
              <button onClick={() => addToCart(cartItem)}>
                <Plus className="h-4 w-4 text-gray-600 hover:scale-95 hover:cursor-pointer transition-transform" />
              </button>
            </div>

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
    </div>
  );
}
export default CartItem;
