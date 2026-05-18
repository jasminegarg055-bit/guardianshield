const adminModel= require('../model/adminModel')
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const loginController=async (req,res)=>{
    const{username,password} = req.body;
    if(!username || !password)
    {
        return res.status(400).json({message: "Password is required"});
    }

    //find the admin in MongoDB
    const user= await adminModel.findOne({username});

    if(!user)
    {
        return res.status(401).json({message: "Invalid username"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
    {
        return res.status(401).json({message: "Invalid password"});
    }

    const token= jwt.sign(
        {id: user._id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );

    res.json({
        message: "Login Successful",
        data: 
        {
            user: {id: user._id, username: user.username},
        },
        token,
    });
}

module.exports=loginController