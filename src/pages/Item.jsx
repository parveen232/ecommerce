import { Link, useParams } from "react-router-dom";
import items from "../data/items";

export default function Item({
  itemNum,
  onChange,
  onClick,
  setCart,
  showCard,
}) {
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart((cartItem) => [
              ...cartItem,
              {
                ...item,
                value: itemNum,
              },
            ]);
          }}
        >
          <label htmlFor="item-num" id="in-label">
            No. of item:
            <input
              type="number"
              name="item-num"
              id="item-num"
              min="0"
              max="10"
              value={itemNum}
              placeholder="itemNum"
              onChange={onChange}
            />
          </label>
          <button className="atc-btn btn" onClick={onClick}>
            Add to Cart
          </button>
        </form>
        <div className="item-btns">
          <Link to="/cart" className="view-btn btn">
            View Cart
          </Link>
          <Link to="/products" className="btp-btn btn">
            Back to Products
          </Link>
        </div>
      </div>
      {showCard ? (
        <div class="overlay">
          <div class="atc-popup">
            <h2>Product added to Cart!</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
