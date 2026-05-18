const userModel= require('../model/userModel')
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const usersignupController=async (req,res)=>{
    try
    {
    const{username,email,password} = req.body;
    if (!username) {
        return res.status(400).json({ message: "Name is required" });
      }
      
     if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
    if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

     // 🔹 Name validation
     if (username.length < 3) {
        return res.status(400).json({ message: "Name must be at least 3 characters" });
      }
  
      // 🔹 Email validation (regex)
      const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailpattern.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
  

     const passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
       if (!passwordpattern.test(password)) {
        return res.status(400).json({
            message: "Password must include uppercase, lowercase, number, special character, atleast 6 character"
        });
        }

     //  Check existing user
     const existingUser = await userModel.findOne({ email });
     if (existingUser) {
       return res.status(400).json({ message: "User already exists" });
     }


     // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 create user
    const users = new userModel({
      username,
      email,
      password: hashedPassword
    });

    await users.save();

    // ✅ response (NO TOKEN HERE)
    res.json({
      message: "Signup Successful"
    });

  } 
  catch (err)
   {
    res.status(500).json({ error: err.message });
  }
};

module.exports = usersignupController;