const User = require("../models/User");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });

    // Check user exists
    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    // Create token
    const token = jwt.sign(
      { id: user._id },
      "secretkey"
    );

    res.json({
      message: "Login Success",
      token
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

};

module.exports = {
  loginUser
};
