const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/authController");

const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {

  try {

    console.log(req.body);

    const { email, password } = req.body;

    const newUser = new User({
      email,
      password
    });

    const savedUser = await newUser.save();

    console.log(savedUser);

    res.json({
      message: "User Registered Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Register Error"
    });

  }

})

// LOGIN
router.post("/login", loginUser);

module.exports = router;
