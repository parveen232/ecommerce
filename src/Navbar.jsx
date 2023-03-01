import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="./" as={NavLink}>Home</Link>
        </li>
        <li>
          <Link to="./about" as={NavLink}>About</Link>
        </li>
        <li>
          <Link to="./products" as={NavLink}>Products</Link>
        </li>
        <li>
          <Link to="./cart" as={NavLink}>Cart</Link>
        </li>
      </ul>
    </div>
  );
}
