import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalfromCart } =
    React.useContext(StoreContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // xóa /cart thay đổi thành /placeorder
    navigate("/placeorder");
  }

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index} className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                <p onClick={() => removeFromCart(item._id)} className="cross">
                  x
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalfromCart().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>{(getTotalfromCart() + 2).toFixed(2)}</b>
            </div>
            <button onClick={handleSubmit}>Proceed to Checkout</button>
          </div>
          <div className="cart-promocode">
            <div><h3>Have a promocode?</h3>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Enter your code here"/>
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
