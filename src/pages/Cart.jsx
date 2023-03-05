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
            <div className="cart-head">
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
                    <div>
                      <span>${cartItem.price}</span>
                    </div>
                    <div>
                      <span>{cartItem.value}</span>
                    </div>
                    <div>
                      <span>${cartItem.value * cartItem.price}</span>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          setCart(
                            cart.filter((item) => item.id != cartItem.id)
                          );
                          setCartNum(+cartNum - +cartItem.value);
                        }}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order">
            <h3>
              Subtotal: $<Total cart={cart} />
            </h3>
            <p>Shipping: Free Shipping</p>
            <h3>
              Total: $<Total cart={cart} />
            </h3>
          </div>
          <div>
            <button
              onClick={() => {
                alert("Order Placed");
                setCart([]);
                setCartNum(0);
              }}
              className="order-btn btn"
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function Total({ cart }) {
  return (
    <>
      {cart.reduce(function (total, cartItem) {
        return total + cartItem.value * cartItem.price;
      }, 0)}
    </>
  );
}
