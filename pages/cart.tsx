import ImageComponent from "@/components/elements/Image/ImageComponent";
import Layout from "@/components/layouts/Page";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks/hooks";
import { updateCart } from "~/app/redux/features/cart/cart-slice";
import { RootState } from "~/app/redux/store/store";

const Cart = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const cart = useAppSelector((state: RootState) => state.cart.items);

  const [quantity, setQuantity] = useState<number>(0);

  // display cart items
  // update with the pre-built function
  //view total of all items (very simple)
  // remove from cart
  //Purchase with stripe
  // wEBHOOKS... GONNA BE INTERESTING

  const handleUpdateCart = (itemId: number) => {
    dispatch(
      updateCart({
        id: itemId,
        quantity,
        category: "",
        description: "",
        image: "",
        price: 0,
        title: "",
      }),
    );
    setQuantity(1);
  };

  const dispatch = useAppDispatch();

  //TODO: increment total based on quantity

  return (
    <Layout>
      <h1>Welcome to your cart, {user.name}</h1>

      <div className="py-6">
        {cart.map((cart) => (
          <div key={cart.id} className="flex py-4 my-6 border">
            <div className="p-3 w-96">
              <ImageComponent
                title={cart.title}
                image={cart.image}
                height={100}
                width={200}
              />
            </div>

            <div className="flex flex-col mx-10 space-y-5">
              <h2>{cart.title}</h2>
              <h3>$ {cart.price}</h3>
              <div>
                <p>
                  Quantity : {cart.quantity ?? 1}{" "}
                  {quantity >= 1 && (
                    <span className="font-bold text-green-900">{quantity}</span>
                  )}
                </p>

                <div className="my-6">
                  <button
                    className="px-6 py-3 font-bold border rounded-lg hover:text-white hover:bg-indigo-600"
                    onClick={() => setQuantity((p) => p + 1)}
                  >
                    +
                  </button>
                  <button
                    disabled={quantity < 1}
                    className="px-6 py-3 font-bold border rounded-lg hover:text-white hover:bg-indigo-600 disabled:bg-gray-300"
                    onClick={() =>
                      setQuantity((p) => {
                        if (!p) return 0;
                        return p - 1;
                      })
                    }
                  >
                    -
                  </button>

                  <div>
                    <button
                      className="px-6 py-3 my-4 text-white bg-indigo-600"
                      onClick={() => handleUpdateCart(Number(cart.id))}
                    >
                      Update Quantity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div>
          Total : ${" "}
          {Number(
            cart
              .reduce((acc, cv) => {
                const itemPrice = cv.price * Number(cv.quantity);
                acc += itemPrice;
                return acc;
              }, 0)
              .toFixed(2),
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
