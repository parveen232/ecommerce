import Items from "./Items";

export default function App() {
  return (
    <>
      <header>
        <div className="h-container">
          <span className="logo">ecommerce</span>
          <div className="navbar">
            <ul>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="./cart">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <Items />
      </main>
    </>
  );
}
