const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  
  // User Info
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  // Donation Info
  type: {
    type: String,
    enum: ["oneTime", "monthly"],
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  country: {
    type: String,
    required: true
  },

  paymentMethod: {
    type: String
  },

  // Payment Details (Razorpay)
  orderId: {
    type: String
  },

  paymentId: {
    type: String
  },

  signature: {
    type: String
  },

  // Status
  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending"
  },

  // Extra
  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Donation", donationSchema);