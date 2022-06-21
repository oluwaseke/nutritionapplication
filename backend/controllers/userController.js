const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !email || username || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check for existing email/username
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const usernameExists = await User.findOne({ username });
  if (usernameExists) {
    res.status(400);
    throw new Error("Username is taken");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user

  const user = await User.create({
    name,
    email,
    username,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check email
  const user = await User.findOne({ email });
  //check password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials, try again");
  }
});

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email, username } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
    username,
  });
});

//generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

module.exports = { registerUser, loginUser, getMe };
