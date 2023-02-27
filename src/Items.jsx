import { itemData } from "./data";

export default function Items() {
  return (
    <section>
      <div className="items-container">
        <ul className="items">
          {itemData.map((item) => (
            <li key={item.id} className="item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <span className="rating">{item.rating}</span>
                <h2 className="price">{item.price}</h2>
                <h3 className="item-name">{item.name}</h3>
                <p>{item.description}</p>
                <button className="atc-btn">Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
