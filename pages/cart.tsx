import ImageComponent from "@/components/elements/Image/ImageComponent";
import Layout from "@/components/layouts/Page";
import { useAppSelector } from "~/app/hooks/hooks";
import { RootState } from "~/app/redux/store/store";

const Cart = () => {
  const user = useAppSelector((state: RootState) => state.user.user);
  const cart = useAppSelector((state: RootState) => state.cart.items);

  // display cart items
  // update with the pre-built function
  //view total of all items (very simple)
  // remove from cart
  //Purchase with stripe
  // wEBHOOKS... GONNA BE INTERESTING
  return (
    <Layout>
      Cart
      <div className="py-6">
        {cart.map((cart) => (
          <div key={cart.id} className="flex py-4 my-6 border">
            <div className=" w-96">
              <ImageComponent
                title={cart.title}
                image={cart.image}
                height={300}
                width={200}
              />
            </div>

            {cart.title}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Cart;
