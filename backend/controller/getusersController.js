const UserModel = require('../model/userModel');

const getusersController = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json({
      success: true,
      users: users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
};

module.exports = getusersController;