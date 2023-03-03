import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./Navbar";
import Item from "./pages/Item";
import { useState } from "react";

export default function App() {
  const [cartNum, setCartNum] = useState(0);
  const [itemNum, setItemNum] = useState(1);
  const [cart, setCart] = useState([]);

  console.log(cart);

  function handleAdd() {
    setCartNum(+cartNum + +itemNum);
  }

  function handleOnChange(e) {
    setItemNum(e.target.value);
  }

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
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route
              path="/products/:itemId"
              element={
                <Item
                  itemNum={itemNum}
                  onChange={handleOnChange}
                  onClick={handleAdd}
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
