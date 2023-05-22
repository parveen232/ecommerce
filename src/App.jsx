import { Link, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./Navbar";
import Item from "./pages/Item";
import { useState } from "react";

export default function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <>
      <header>
        <div className="h-container">
          <Link to="/" className="logo">
            ecommerce
          </Link>
          <Navbar cartNum={cartNum} />
        </div>
      </header>
      <main>
        <div className="route-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  cartNum={cartNum}
                  setCartNum={setCartNum}
                />
              }
            />
            <Route
              path="/products/:itemId"
              element={
                <Item
                  cart={cart}
                  cartNum={cartNum}
                  setCartNum={setCartNum}
                  setCart={setCart}
                />
              }
            />
          </Routes>
        </div>
      </main>
    </>
  );
}
