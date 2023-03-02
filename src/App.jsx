import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./Navbar";
import Item from "./pages/Item";

export default function App() {
  return (
    <>
      <header>
        <div className="h-container">
          <Link to="/" className="logo">
            ecommerce
          </Link>
          <Navbar />
        </div>
      </header>
      <main>
        <div className="route-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:itemId" element={<Item />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
