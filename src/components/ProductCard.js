import "../styles/ProductCard.css";
import Img1 from "../assets/1001.png";
import Img2 from "../assets//1002.png";
import Img3 from "../assets//1003.png";
import Img4 from "../assets//1004.png";
import Img5 from "../assets//1005.png";
import Img6 from "../assets//1006.png";

export const ProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: Img1,
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: Img2,
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: Img3,
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: Img4,
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: Img5,
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: Img6,
    },
  ];

  return (
    <div className="productContainer">
      {products.map((product) => (
        <div key={product.id} className="productCard">
          <a href="#">
            <img src={product.image} alt="" />
          </a>
          <div>
            <a href="#">
              <h5 className="name">{product.name}</h5>
            </a>
            <div className="action">
              <p>${product.price}</p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// <div className="productCard">
//   <a href="#">
//     <img className="" src={Logo} alt="" />
//   </a>
//   <div className="">
//     <a href="#">
//       <h5 className="name">Sony Wh-Ch510 Bluetooth Wireless</h5>
//     </a>
//     <div className="action">
//       <p>$149</p>
//       <button>Add to cart</button>
//     </div>
//   </div>
// </div>
