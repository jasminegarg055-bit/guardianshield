const paymentModel = require("../model/paymentModel");

// CREATE ORDER (DEMO)
const createOrder = async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ message: "Amount required" });
  }

  res.status(200).json({
    id: "order_demo_123",
    amount: amount * 100,
    currency: "INR"
  });
};

// VERIFY PAYMENT (FAKE)
const verifyPayment = async (req, res) => {
  res.json({ success: true });
};

// SAVE DONATION
const saveDonation = async (req, res) => {
  try {
    const donation = new paymentModel({
      ...req.body,
      // userId: req.user?.id   // ✅ yaha lagta hai
    });

    await donation.save();

    res.json({
      success: true,
      message: "Donation saved successfully",
      donation
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving donation" });
  }
};

// GET ALL DONATIONS (ADMIN)
const getAllDonations = async (req, res) => {
  try {
    const donations = await paymentModel.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      donations
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching donations" });
  }
};

// total users & donation
const getStats = async (req, res) => {
  try {
    const donations = await paymentModel.find();

    const totalAmount = donations.reduce((sum, item) => sum + item.amount, 0);

    const uniqueUsers = new Set(donations.map(d => d.email));

    res.json({
      totalAmount,
      totalUsers: uniqueUsers.size
    });

  } catch (err) {
    res.status(500).json({ message: "Error fetching stats" });
  }
};

const updatepayment = async (req, res) => {
  const { orderId } = req.params;
  const { paymentId, status } = req.body;

  try {
    const updatedOrder = await paymentModel.findByIdAndUpdate(
      orderId,
      { paymentId, status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Donation not found" });
    }

    res.json({ success: true, updatedOrder });

  } catch (err) {
    res.status(500).json({ message: 'Failed to update payment', error: err });
  }
};


// ✅ EXPORT (IMPORTANT)
module.exports = {
  createOrder,
  verifyPayment,
  saveDonation,
  getAllDonations,
  getStats ,
  updatepayment
};