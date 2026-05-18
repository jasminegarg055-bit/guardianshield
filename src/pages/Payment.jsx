import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate= useNavigate()

  const [type, setType] = useState("oneTime");
  const [amount, setAmount] = useState(0);
  const [citizenship, setCitizenship] = useState("");
  // const [paymentMethod, setPaymentMethod] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [paymentDetails, setPaymentDetails] = useState({
    upi: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    account: "",
    walletMobile: ""
  });

  const [errors, setErrors] = useState({});

  // 🌍 Currency Map
  const currencyMap = {
    India: { symbol: "₹", rate: 1 },
    USA: { symbol: "$", rate: 0.012 },
    UK: { symbol: "£", rate: 0.0095 },
    Canada: { symbol: "C$", rate: 0.016 },
    Australia: { symbol: "A$", rate: 0.018 },
    Japan: { symbol: "¥", rate: 1.8 },
    China: { symbol: "¥", rate: 0.085 },
    SouthKorea: { symbol: "₩", rate: 16 },
    Thailand: { symbol: "฿", rate: 0.42 },
    Germany: { symbol: "€", rate: 0.011 },
    France: { symbol: "€", rate: 0.011 },
    Russia: { symbol: "₽", rate: 1.1 },
    UAE: { symbol: "د.إ", rate: 0.044 }
  };

  const currency = currencyMap[citizenship] || { symbol: "₹", rate: 1 };
  const total = amount;

  const convertedTotal = (total * currency.rate).toFixed(2);

  const oneTimeAmounts = [100, 250, 500, 1000];
  const monthlyAmounts = [50, 100, 200, 500];
  const amounts = type === "oneTime" ? oneTimeAmounts : monthlyAmounts;

  // ✅ VALIDATION
  const validate = () => {
    let err = {};

    if (!user.name.trim()) err.name = "Name required";

    if (!user.email.trim()) err.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(user.email))
      err.email = "Invalid email";

    if (!user.phone.trim()) err.phone = "Phone required";
    else if (!/^[0-9]{10}$/.test(user.phone))
      err.phone = "Invalid phone";

    if (!amount || amount <= 0) err.amount = "Enter valid amount";
    if (!citizenship) err.country = "Select country";
    // if (!paymentMethod) err.paymentMethod = "Select payment";

    // // 🔥 PAYMENT VALIDATION
    // if (paymentMethod === "UPI" && !paymentDetails.upi)
    //   err.upi = "UPI ID required";

    // if (paymentMethod === "Card") {
    //   if (!paymentDetails.cardNumber) err.cardNumber = "Card required";
    //   if (!paymentDetails.expiry) err.expiry = "Expiry required";
    //   if (!paymentDetails.cvv) err.cvv = "CVV required";
    // }

    // if (paymentMethod === "NetBanking" && !paymentDetails.account)
    //   err.account = "Account required";

    // if (paymentMethod === "Wallet" && !paymentDetails.walletMobile)
    //   err.walletMobile = "Mobile required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // 🚀 HANDLE SUBMIT (API CONNECTED)
  const handleSubmit = async () => {

    if (!validate()) return;

    try {

      // 1️⃣ CREATE ORDER
      const orderRes = await fetch("http://localhost:5000/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount })
      });

      const orderData = await orderRes.json();

      // 2️⃣ SAVE DONATION
      const saveRes = await fetch("http://localhost:5000/api/save-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...user,
          type,
          amount: total,
          country: citizenship,
          // paymentMethod,
          orderId: orderData.id
        })
      });

      const saveData = await saveRes.json();

if (saveData.success) {

  const donationId = saveData.donation._id;

  const options = {
    key: 'rzp_test_99IwqPHWTFKkXS',
    amount: total * 100,
    currency: "INR",
    name: "The Guardian Shield",

    handler: async function (response) {

      try {
        const updateRes = await fetch(
          `http://localhost:5000/api/updatepayment/${donationId}`,
          {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              paymentId: response.razorpay_payment_id,
              status: 'success'
            })
          }
        );

        const updateData = await updateRes.json();

        if (updateData.success) {
          alert("🎉 Payment Successful!");

          // RESET
          setAmount(0);
          setCitizenship("");
          // setPaymentMethod("");
          setUser({ name: "", email: "", phone: "" });

          navigate('/donations'); // 👉 better redirect

        } else {
          alert("DB update failed ❌");
        }

      } catch (err) {
        console.log(err);
      }
    },

    prefill: {
      name: user.name,
      email: user.email,
      contact: user.phone
    }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
}else {
        alert("Error saving donation ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="payment-page container mt-4">
      <div className="row g-4">

        {/* LEFT */}
        <div className="col-12 col-lg-8">
          <div className="form-box">

            <h3 className="text-center mb-4 text-danger">
              Support Women Safety ❤️
            </h3>

            {/* TYPE */}
            <div className="btn-group w-100 mb-3">
              <button type="button"
                className={`btn ${type === "oneTime" ? "btn-danger" : "btn-outline-danger"}`}
                onClick={() => { setType("oneTime"); setAmount(0); }}>
                One Time
              </button>

              <button type="button"
                className={`btn ${type === "monthly" ? "btn-danger" : "btn-outline-danger"}`}
                onClick={() => { setType("monthly"); setAmount(0); }}>
                Monthly
              </button>
            </div>

            {/* AMOUNT */}
            <h5>Select Amount</h5>
            <div className="d-flex flex-wrap gap-2 mb-2">
              {amounts.map(val => (
                <button
                  type="button"
                  key={val}
                  className={`btn ${amount === val ? "btn-danger" : "btn-outline-secondary"}`}
                  onClick={() => setAmount(val)}>
                  ₹{val}
                </button>
              ))}
            </div>

            <input type="number" className="form-control mb-1"
              placeholder="Custom amount"
              value={amount || ""}
              onChange={(e) => setAmount(Number(e.target.value))} />
            {errors.amount && <small className="text-danger">{errors.amount}</small>}

            {/* COUNTRY */}
            <h5 className="mt-4">Select Citizenship</h5>
            <select className="form-select mb-3"
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="SouthKorea">South Korea</option>
              <option value="Thailand">Thailand</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Russia">Russia</option>
              <option value="UAE">UAE</option>
            </select>

            {/* USER */}
            <h5 className="mt-4">Your Details</h5>
            <input className="form-control mb-1" placeholder="Full Name"
              onChange={(e) => setUser({ ...user, name: e.target.value })} />
            {errors.name && <small className="text-danger">{errors.name}</small>}

            <input className="form-control mb-1" placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })} />
            {errors.email && <small className="text-danger">{errors.email}</small>}

            <input className="form-control mb-2" placeholder="Phone"
              onChange={(e) => setUser({ ...user, phone: e.target.value })} />
            {errors.phone && <small className="text-danger">{errors.phone}</small>}

            {/* PAYMENT
            <h5>Payment Method</h5>
            <div className="d-flex flex-wrap gap-2 mb-2">
              {["UPI", "Card", "NetBanking", "Wallet"].map(m => (
                <button
                  type="button"
                  key={m}
                  className={`btn ${paymentMethod === m ? "btn-dark" : "btn-outline-dark"}`}
                  onClick={() => setPaymentMethod(m)}>
                  {m}
                </button>
              ))}
            </div> */}

            {/* PAYMENT FIELDS
            {paymentMethod === "UPI" && (
              <>
                <input className="form-control mb-1" placeholder="Enter UPI ID"
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, upi: e.target.value })} />
                {errors.upi && <small className="text-danger">{errors.upi}</small>}
              </>
            )}

            {paymentMethod === "Card" && (
              <>
                <input className="form-control mb-1" placeholder="Card Number"
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} />
                {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}

                <input className="form-control mb-1" placeholder="MM/YY"
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })} />
                {errors.expiry && <small className="text-danger">{errors.expiry}</small>}

                <input className="form-control mb-2" placeholder="CVV"
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })} />
                {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
              </>
            )} */}

            <button
              type="button"
              className="btn btn-danger w-100 mt-3"
              onClick={handleSubmit}
            >
              Continue to Payment ❤️
            </button>

          </div>
        </div>

        {/* RIGHT */}
        <div className="col-12 col-lg-4">
          <div className="summary-box">

            <h5>Donation Summary</h5>
            <p><b>Type:</b> {type}</p>
            <p><b>Country:</b> {citizenship || "-"}</p>
            <p><b>Total:</b> {currency.symbol}{convertedTotal}</p>

          </div>
        </div>

      </div>
    </div>
  );
}