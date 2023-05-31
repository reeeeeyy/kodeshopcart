import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  useTitle("Cart");
  return (
    <div>
      <CartCard />
    </div>
  );
};
export default Cart;
