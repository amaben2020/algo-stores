import { useAppDispatch } from "app/hooks/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { updateCart } from "~/app/redux/features/cart/cart-slice";
import IProducts from "~/types/types";
type TCartItems = { cartItems: IProducts[] };

const Cart = ({ cartItems }: TCartItems) => {
  // TODO:click outside to close cart

  const [itemId, setItemId] = useState(null);
  const dispatch = useAppDispatch();
  const [itemQty, setItemQty] = useState(0);

  const router = useRouter();

  const handleCartQuantity = (e: any, id) => {
    setItemQty(e.target.value);
    setItemId(id);
  };

  const handleCheckoutCart = () => {
    dispatch(updateCart({ id: itemId, quantity: itemQty }));
  };

  return (
    <div className="absolute z-50 p-6 my-6 border rounded-lg shadow-lg none md:-ml-80 bg-gray-50 w-90 top-12 dark:text-black">
      {cartItems.map((elem: IProducts) => (
        <div className="flex py-3 my-6 align-middle border-b-2" key={elem.id}>
          <div>
            <Image
              alt={elem.title}
              src={elem.image}
              width={80}
              height={100}
              className="p-4 border-2"
            />
          </div>
          <div className="ml-6">
            <p className="break-words cursor-pointer text-md hover:text-indigo-600">
              {elem.title.substring(0, 20)}...
            </p>
            <p className="text-sm text-gray-400">{elem.category}</p>

            <select
              onChange={(e) => handleCartQuantity(e, elem.id)}
              className="w-20 h-10 border-2 border-gray-300"
            >
              {/* loop through instock items */}
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
            </select>
          </div>
        </div>
      ))}

      <div>
        <button
          onClick={() => {
            handleCheckoutCart();

            router.push("/cart");
          }}
          className="w-full py-4 border-2 hover:bg-indigo-600 hover:text-white"
        >
          <h2 className="text-lg"> Checkout </h2>
        </button>
      </div>
    </div>
  );
};

export default Cart;
