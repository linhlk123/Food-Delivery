import React, { useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'
const PlaceOrder = () => {
  const { getTotalfromCart, cartItems } = React.useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  return (
    <div className="place-order">
      <div className="place-order-details">
        <form>
          <h2>Place Your Order</h2>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
          <label>Address</label>
          <input type="text" placeholder="Enter your address" required />
          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" required />
          <div className="payment-option">
            <input type="radio" 
                    name="radio" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
            <span>Credit / Debit Card</span>
          </div>
          <div className="payment-option">
            <input type="radio" 
                    name="radio" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
            <span>Paypal</span>
          </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
    <div className="place-order-details">
      <h2>Order Summary</h2>
      <div className="order-summary-item">
        <span>Total</span>
        <p>{getTotalfromCart().toFixed(2)}</p>
      </div>
    </div>
  </div>
  )
}

export default PlaceOrder
