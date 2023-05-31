import "../styles/CartCard.css";
import Img1 from "../assets/1001.png";
import Img2 from "../assets/1002.png";

export const CartCard = () => {
  return (
    <div>
      <div className="cartCard">
        <div className="boxCart">
          <img src={Img1} alt="Product" className="" />
          <h5 className="productName">Sony Wh-Ch510 Bluetooth Wireless</h5>
        </div>
        <div className="">
          <p className="productPrice">$123</p>
        </div>
        <button>Remove to cart</button>
      </div>
      <div className="cartCard">
        <div className="boxCart">
          <img src={Img2} alt="Product" className="" />
          <h5 className="productName">boAt Rockerz 450</h5>
        </div>
        <div className="">
          <p className="productPrice">$123</p>
        </div>
        <button>Remove to cart</button>
      </div>
    </div>
  );
};
export default CartCard;
