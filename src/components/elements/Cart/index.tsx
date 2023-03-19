import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "~/app/hooks/hooks";
import {
  deleteItemFromCart,
  updateCart,
} from "~/app/redux/features/cart/cart-slice";
import IProducts from "~/types/types";
type TCartItems = { cartItems: IProducts[] };

const Cart = ({ cartItems }: TCartItems) => {
  // TODO:click outside to close cart

  const [itemId, setItemId] = useState<number | undefined>();
  const dispatch = useAppDispatch();
  const [itemQty, setItemQty] = useState(0);

  const router = useRouter();

  const handleCartQuantity = (
    e: ChangeEvent<HTMLSelectElement>,
    id: number,
  ) => {
    setItemQty(Number(e.target.value));
    setItemId(Number(id));
  };

  const handleCheckoutCart = () => {
    dispatch(
      updateCart({
        id: Number(itemId),
        quantity: itemQty,
        category: "",
        description: "",
        image: "",
        price: 0,
        title: "",
      }),
    );
  };

  const handleDeleteCartItem = (id: number) => {
    dispatch(
      deleteItemFromCart({
        id,
        category: "",
        description: "",
        image: "",
        price: 0,
        title: "",
        quantity: 0,
      }),
    );
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
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3"> 3</option>
              <option value="4"> 4</option>
              <option value="5"> 5</option>
            </select>
            <button
              className="ml-6"
              onClick={() => handleDeleteCartItem(Number(elem.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="red"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
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
