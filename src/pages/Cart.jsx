import { Link } from "react-router-dom";

export default function Cart({ cart, setCart, cartNum, setCartNum }) {
  return (
    <div className="cart">
      {cart.length == 0 ? (
        <div>
          <h1>Cart is Empty</h1>
          <Link to="/products" className="add-btn btn">
            Add
          </Link>
        </div>
      ) : (
        <>
          <h1>Your Cart</h1>
          <div className="cart-container">
            <div className="cart-table">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>
            <div>
              <ul className="cart-items">
                {cart.map((cartItem) => (
                  <li key={cartItem.id} className="cart-item">
                    <div className="cart-product">
                      <img
                        src={cartItem.image}
                        alt={cartItem.name}
                        className="cart-item-img"
                      />
                      <span>{cartItem.name}</span>
                    </div>
                    <span>${cartItem.price}</span>
                    <span>{cartItem.value}</span>
                    <span>${cartItem.value * cartItem.price}</span>
                    <button
                      onClick={() => {
                        setCart(
                          cart.filter((item) => item.id != cartItem.id)
                        )
                        setCartNum(+cartNum - +cartItem.value)
                      }}
                      className="remove-btn"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
