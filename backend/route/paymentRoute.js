const express = require('express');
const router = express.Router();

const {
  createOrder,
  verifyPayment,
  saveDonation,
  getAllDonations,
  getStats,updatepayment
} = require('../controller/paymentController');

// 👉 Create Razorpay Order
router.post('/create-order', createOrder);

// 👉 Verify Payment
router.post('/verify-payment', verifyPayment);

// 👉 Save Donation (optional but recommended)
router.post('/save-donation', saveDonation);

router.get('/donations', getAllDonations);
router.get("/stats", getStats);
router.put("/updatepayment/:orderId", updatepayment);

module.exports = router;