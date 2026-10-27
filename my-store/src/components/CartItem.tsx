import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Trash } from "lucide-react";

// Typescript annotation
export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
}

// Quantity Component
function Quantity() {
  return (
    <div className="flex space-x-6 px-1.5 py-0.5 my-5 border rounded-2xl">
      <button>
        <Minus className=" text-gray-800  font-semibold" />
      </button>
      <span className="  text-gray-800  font-semibold"> 2 </span>
      <button className="  text-gray-800  font-semibold">
        <Plus />
      </button>
    </div>
  );
}

// CartItem Component
function CartItem({ name, price, quantity, category, image }: CartItemProps) {
  const lineTotal = price * quantity;
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg hover:shadow-xl hover:-translate-y-1 transition-transform mt-5">
      {/*  */}
      <div className="flex-1 h-40">
        <img
          className="h-full w-full object-contain"
          src={`${image}`}
          alt={`${name}`}
        />
      </div>

      {/*  */}
      <div className="flex-2">
        <div className="text-left p-5">
          <h3 className="text-lg text-black font-bold line-clamp-1">{`${name}`}</h3>
          <p>{`${category}`}</p>
          <p className="text-green-600 font-bold">{`$${price}`}</p>
        </div>

        {/*  */}
        <div className="text-left font-light flex space-x-5 px-4">
          <Quantity />

          {/*  */}
          <button>
            <Trash className="text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
