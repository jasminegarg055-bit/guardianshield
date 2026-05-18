const userModel = require('../model/userModel')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const usersigninController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔹 check fields
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
    if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

    // 🔹 find user by email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    // 🔐 compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // 🔐 generate token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ response
    res.json({
      message: "Login Successful",
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      },
      token,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = usersigninController;