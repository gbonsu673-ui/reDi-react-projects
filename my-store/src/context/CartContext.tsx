import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CartItemProps } from "../components/CartItem";
import { ProductCardProps } from "../components/ProductCard";

// Typescript Annotation for CardContext values
interface CardContextValue {
  cart: CartItemProps[];
  addToCart: (product: ProductCardProps) => void;
  onRemoveItem: (productId: number) => void;
  removeItemFromCart: (productId: number) => void;
  removeAllItemsInCart: () => void;
}

// Initialize Context
export const CartContext = createContext<undefined | CardContextValue>(
  undefined,
);

// Setting Up Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItemProps[]>([]);

  // Gives Some Information Whenever the Cart Changes
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  // Add to Cart Functionality
  const addToCart = (product: ProductCardProps) => {
    setCart((previousCart) =>
      previousCart.some((item) => item.id === product.id)
        ? previousCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...previousCart, { ...product, quantity: 1 }],
    );
  };

  // Remove from Cart Functionality
  // Decreases Item Quantity by 1 Upon Removal.
  // Item Disappears When Quantity Reaches 0
  const onRemoveItem = (productId: number) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  // Remove Cart Item Object From Cart
  const removeItemFromCart = (productId: number) => {
    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId ? { ...item, quantity: 0 } : item,
      ),
    );
  };

  // Remove All Items From Cart
  const removeAllItemsInCart = () => {
    setCart([]);
  };

  //  Provide Context Values for Consumer Components
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        onRemoveItem,
        removeItemFromCart,
        removeAllItemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
