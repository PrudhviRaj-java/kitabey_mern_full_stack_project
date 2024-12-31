import React, { useContext, useEffect } from "react";
import { CartContext } from "../CartContext";
import axios from "axios";
import "./index.css";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal } = useContext(CartContext);

 
  const syncCartWithDatabase = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/cart/sync", { cartItems });
      console.log(response.data.message); 
    } catch (error) {
      console.error("Error syncing cart with database:", error);
    }
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      syncCartWithDatabase();
    }
  }, [cartItems]);

  
  const handleCheckout = async () => {
    const totalAmount = calculateTotal();
    if (totalAmount > 0) {
      try {
        
        const response = await axios.post("http://localhost:5000/api/payment/checkout", {
          amount: totalAmount,
        });

        console.log("Checkout response:", response.data); 

        // Step 2: Get order ID and Razorpay Key ID from backend response
        const { orderId, currency, razorpayKeyId } = response.data;

        // Step 3: Open Razorpay payment window
        openRazorpayPayment(orderId, razorpayKeyId, totalAmount, currency);
      } catch (error) {
        console.error("Error initiating checkout:", error);
        alert("There was an issue with the checkout. Please try again.");
      }
    } else {
      alert("Your cart is empty! Please add some items to proceed.");
    }
  };

  // Function to open Razorpay payment
  const openRazorpayPayment = (orderId, razorpayKeyId, totalAmount, currency) => {
    const options = {
      key: razorpayKeyId,
      amount: totalAmount * 100, // Amount in paise
      currency: currency,
      order_id: orderId,
      name: "E-commerce Books",
      description: "Order Payment",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // You can also send payment details to your backend for order confirmation
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  // Function to handle removing a book from cart
  const handleRemoveFromCart = async (id) => {
    removeFromCart(id);
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${id}`);
      console.log("Book removed from database");
    } catch (error) {
      console.error("Error removing book from database:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <p>Price: ₹{item.offerPrice}</p>
              <div className="cart-item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
            <div className="cart-item-actions">
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty!</p>
      )}
      <div className="cart-total">
        <h3>Total: ₹{calculateTotal()}</h3>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
