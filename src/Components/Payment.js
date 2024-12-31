import React, { useState, useEffect } from "react";
import axios from "axios";

const Payment = ({ cartItems }) => {
  const [amount, setAmount] = useState(0); // Store total amount
  const [paymentDetails, setPaymentDetails] = useState(null); // Store payment details

  // Calculate the total amount from the cart items
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Update the amount whenever cartItems changes
  useEffect(() => {
    setAmount(calculateTotal());
  }, [cartItems]);

  // Handle the checkout
  const handleCheckout = async () => {
    if (amount <= 0) {
      alert("Your cart is empty! Please add some items to proceed.");
      return;
    }

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    try {
      // Step 1: Create an order on the backend
      const { data } = await axios.post(`${backendURL}/create-order`, { amount });

      // Step 2: Define Razorpay options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY, // Razorpay API Key
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "Bookstore",
        description: "Book Purchase",
        order_id: data.orderId, // Order ID from backend
        handler: (response) => {
          // Step 3: Handle successful payment
          alert("Payment Successful");
          console.log("Payment Response:", response);
          setPaymentDetails(response); // Store payment details
        },
        prefill: {
          name: "Test User",
          email: "testuser@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Step 4: Open Razorpay payment gateway
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Failed:", error);
      alert("Payment Failed. Please try again.");
    }
  };

  return (
    <div>
      <h3>Total Amount: ₹{amount}</h3>
      <button onClick={handleCheckout}>Checkout</button>

      {/* Display Payment Details */}
      {paymentDetails && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h3>Payment Details</h3>
          <p><strong>Payment ID:</strong> {paymentDetails.razorpay_payment_id}</p>
          <p><strong>Order ID:</strong> {paymentDetails.razorpay_order_id}</p>
          <p><strong>Signature:</strong> {paymentDetails.razorpay_signature}</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
