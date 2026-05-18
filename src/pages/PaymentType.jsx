import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function PaymentType() {
  const [paymentType, setPaymentType] = useState("");
  const detailsRef = useRef(null);

  const handleSelect = (type) => {
    setPaymentType(type);

    // Scroll down smoothly
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const handleContinue = () => {
    if (!paymentType) {
      alert("Please select a payment type");
    } else {
      alert("Proceeding with " + paymentType);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h4 className="mb-4 text-center">Select Payment Type</h4>

      {/* Options */}
      <div className="card p-3 mb-3">
        <div className="form-check">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            onChange={() => handleSelect("card")}
          />
          <label className="form-check-label">
            Credit / Debit Card
          </label>
        </div>
      </div>

      <div className="card p-3 mb-3">
        <div className="form-check">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            onChange={() => handleSelect("gpay")}
          />
          <label className="form-check-label">
            Google Pay
          </label>
        </div>
      </div>

      <div className="card p-3 mb-4">
        <div className="form-check">
          <input
            type="radio"
            name="payment"
            className="form-check-input"
            onChange={() => handleSelect("paypal")}
          />
          <label className="form-check-label">
            PayPal
          </label>
        </div>
      </div>

      {/* Dynamic Section */}
      <div ref={detailsRef}>
        {paymentType === "card" && (
          <div className="card p-3 mb-4">
            <h5>Card Details</h5>

            <input
              type="text"
              className="form-control mb-2"
              placeholder="Card Number"
            />

            <input
              type="text"
              className="form-control mb-2"
              placeholder="Card Holder Name"
            />

            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="MM/YY"
              />
              <input
                type="password"
                className="form-control"
                placeholder="CVV"
              />
            </div>
          </div>
        )}

        {paymentType === "gpay" && (
          <div className="card p-3 mb-4">
            <h5>Google Pay (UPI)</h5>

            <input
              type="text"
              className="form-control"
              placeholder="Enter UPI ID (example@upi)"
            />
          </div>
        )}

        {paymentType === "paypal" && (
          <div className="card p-3 mb-4">
            <h5>PayPal</h5>
            <p>After clicking continue, you will be redirected to PayPal.</p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between">
       <Link to="/Payment"> <button className="btn btn-secondary">
          Back
        </button></Link>

        <button className="btn btn-primary" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}