import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Step 1: Get total amount (from cart OR product)
  const totalAmount = location.state?.total || 0;

  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPaid(true);
  };

  useEffect(() => {
    if (isPaid) {
      const timer = setTimeout(() => {
        navigate("/"); // redirect to home after 4 sec
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isPaid, navigate]);

  if (isPaid) {
    return (
      <div className="payment-success">
        <h2>✅ Payment Successful!</h2>
        <p>Thank you for your purchase ☕</p>
        <p>Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="payment-container payment">
      <h1>
        Secure <span>Payment</span>
      </h1>

      <form className="payment-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          maxLength="16"
          required
        />

        <div className="payment-row">
          <div className="expiry">
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" maxLength="5" required />
          </div>
          <div className="cvv">
            <label>CVV</label>
            <input type="password" placeholder="***" maxLength="3" required />
          </div>
        </div>

        <label>Total Amount (₹)</label>
        <input
          type="text"
          value={`₹${totalAmount}`}
          readOnly
          className="amount-field"
        />

        <button type="submit" className="pay-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
