import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Kodego Logo" />
        <span>KodeShop</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <p>Cart:2</p>
    </header>
  );
};
