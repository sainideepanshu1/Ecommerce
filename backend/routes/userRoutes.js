const express = require("express");
const router = express.Router();
const User = require("./../Model/UserSchema");

router.post("/signup", async (req, res) => {
  const { email } = req.body;
  const alreadyExists = await User.findOne({ email });

  if (alreadyExists) {
    return res.status(400).json({
      success: false,
      message: "Email already Exists",
    });
  }
  const cart = {};
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
  }
});
