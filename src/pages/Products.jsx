import items from "../data/items.js";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <main>
      <div className="items-container">
        <ul className="items">
          {items.map((item) => (
            <li key={item.id} className="item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <span className="rating">{item.rating}</span>
                <h2 className="price">${item.price}</h2>
                <h3 className="item-name">{item.name}</h3>
                <p>{item.description}</p>
                <Link to={`/products/${item.id}`} className="view-btn btn">
                  View Item
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
