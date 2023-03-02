import { Link, useParams } from "react-router-dom";
import items from "../data/items";

export default function Item() {
  const { itemId } = useParams();
  const item = items.find((item) => item.id == itemId);
  const { name, image, description, price, rating } = item;

  return (
    <div className="item-detail">
      <img src={image} alt={name} />
      <div className="item-right">
        <span className="rating">{rating}</span>
        <h2 className="price">${price}</h2>
        <h3 className="item-name">{name}</h3>
        <p>{description}</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          maxime ipsam a quam iure atque, alias autem perspiciatis minima illo
          eum officia minus iusto voluptates, exercitationem, animi sequi
          molestiae ab?
        </p>
        <button className="atc-btn btn">Add to Cart</button>
        <Link to="/products">Back to Products</Link>
      </div>
    </div>
  );
}
