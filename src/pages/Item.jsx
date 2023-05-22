import { Link, useParams } from "react-router-dom";
import items from "../data/items";
import { useState } from "react";

export default function Item({ cart, setCart, cartNum, setCartNum }) {
  const [showCard, setShowCard] = useState(false);
  const [itemNum, setItemNum] = useState(1);
  const { itemId } = useParams();
  const item = items.find((item) => item.id == itemId);
  const { name, image, description, price, rating } = item;

  if (showCard) {
    setTimeout(() => {
      setShowCard(false);
    }, 600);
  }

  function handleChange(e) {
    const val = e.target.value;
    if (val == `` || val > 10 || val < 1) {
      e.target.style.borderColor = `red`;
    } else {
      e.target.style.borderColor = `royalblue`;
    }
    setItemNum(val);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.elements[0].value == "") {
      alert("Specify no. of item.");
      return;
    }
    for (let cartItem of cart) {
      if (cartItem.id == itemId) {
        alert("This product has already been added to the cart.");
        return;
      }
    }
    setShowCard(true);
    setCartNum(+cartNum + +itemNum);
    setCart((cartItem) => [
      ...cartItem,
      {
        ...item,
        value: itemNum,
      },
    ]);
  }

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
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="item-num" id="in-label">
            No. of item:
            <input
              type="number"
              name="item-num"
              id="item-num"
              min="1"
              max="10"
              value={itemNum}
              placeholder="itemNum"
              onChange={handleChange}
            />
          </label>
          <button className="atc-btn btn">Add to Cart</button>
        </form>
        <div className="item-btns">
          <Link to="/cart" className="view-btn btn">
            Go to Cart
          </Link>
          <Link to="/products" className="btp-btn btn">
            Back to Products
          </Link>
        </div>
      </div>
      {showCard ? (
        <div className="overlay">
          <div className="atc-popup">
            <h2>Product added to Cart!</h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
