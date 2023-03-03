import { Link, NavLink } from "react-router-dom";

export default function Navbar({ cartNum }) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="./" as={NavLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="./about" as={NavLink}>
            About
          </Link>
        </li>
        <li>
          <Link to="./products" as={NavLink}>
            Products
          </Link>
        </li>
        <li>
          <Link to="./cart" as={NavLink} className="cart-btn">
            Cart
            <div className="cart-num">{cartNum}</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
