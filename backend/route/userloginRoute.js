// const express = require('express')
// const router= express.Router()

// const usersignupController= require('../controller/usersignupController')
// const usersigninController= require('../controller/usersigninController')
// const getusersController = require('../controller/getusersController');

// router.post('/user/signup', usersignupController)
// router.post('/user/signin', usersigninController)
// router.get('/users', getusersController);
// router.put('/user/update', (req, res) => {
//     const { username, email } = req.body;
  
//     const updatedUser = {
//       username,
//       email,
//       isVolunteer: true,
      
//     };
  
//     res.json(updatedUser);
//   });


// module.exports=router

const express = require('express')

const router = express.Router()

const bcrypt = require('bcryptjs')

const usersignupController = require('../controller/usersignupController')

const usersigninController = require('../controller/usersigninController')

const getusersController = require('../controller/getusersController')

// USER MODEL
const User = require('../model/userModel')


// SIGNUP
router.post('/user/signup', usersignupController)


// SIGNIN
router.post('/user/signin', usersigninController)


// GET USERS
router.get('/users', getusersController)


// UPDATE PROFILE
router.put('/user/update', async (req, res) => {

    try {

        const { username, email } = req.body;

        const updatedUser = {
            username,
            email,
            isVolunteer: true
        };

        res.json(updatedUser);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

})


// CHANGE PASSWORD
router.put('/user/change-password', async (req, res) => {

    try {

        const { email, oldPassword, newPassword } = req.body;

        // FIND USER
        const user = await User.findOne({ email });

        // USER NOT FOUND
        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        // CHECK OLD PASSWORD
        const isMatch = await bcrypt.compare(
            oldPassword,
            user.password
        );

        // WRONG PASSWORD
        if (!isMatch) {

            return res.status(400).json({
                message: "Old password incorrect"
            });

        }

        // HASH NEW PASSWORD
        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        );

        // SAVE NEW PASSWORD
        user.password = hashedPassword;

        await user.save();

        res.status(200).json({
            message: "Password Updated Successfully"
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }

})


module.exports = router