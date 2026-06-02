const express = require("express");
const router = express.Router();

const User = require("../models/User");



// REGISTER USER

router.post("/register", async (req, res) => {

  try {

    const newUser = new User(req.body);

    await newUser.save();

    res.json({
      message: "User Registered Successfully"
    });

  }

  catch (error) {

    res.status(500).json({
      message: "Registration Failed"
    });

  }

});




// LOGIN USER

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {

    return res.status(400).json({
      message: "User Not Found"
    });

  }

  if (user.password !== password) {

    return res.status(400).json({
      message: "Wrong Password"
    });

  }

  res.json({
    message: "Login Success",
    user
  });

});



module.exports = router;
