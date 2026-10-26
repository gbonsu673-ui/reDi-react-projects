// Typescript annotation
export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  onSale?: boolean;
}

// On-Sale Component
function OnSaleBadge() {
  return (
    <span className="font-bold text-sm text-red-600 ml-3 px-3 py-1 bg-red-100 uppercase rounded">
      Sale
    </span>
  );
}

// CartItem Component
function CartItem({ name, price, quantity, onSale }: CartItemProps) {
  const lineTotal = price * quantity;
  return (
    <div className="flex items-center justify-between py-3 px-6 border-b border-gray-200">
      {/* Flex Item: 1 - a div containing name of cart item*/}
      <div>
        <p>
          {name}
          {/* Conditional Rendering: Had help from Arian */}
          {onSale && <OnSaleBadge />}
        </p>
      </div>

      {/* Flex Item: 2 - a div containing quantity and line total of cart item */}
      <div className="flex justify-between gap-4">
        <p>Qty: {quantity}</p>
        <p className="font-bold">${lineTotal.toFixed(2)}</p>
      </div>
    </div>
  );
}
export default CartItem;
