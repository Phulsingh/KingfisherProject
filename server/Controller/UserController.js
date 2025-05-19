const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const User = require("../Models/User.js");


const generateToken = id => jwt.sign({ id }, process.env.JWT_SECRET_USER, { expiresIn: '7d' });

const Register = async (req, res) => {
  const { name, email, password, number, isAdmin } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User Already Exist" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, number,isAdmin });

    await newUser.save();
    res.status(201).json({ msg: "User Registered Successfully", newUser });
    res.json({ token: generateToken(user._id), user });

  

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_USER);

    res.status(200).json({ msg: "User Login Success", token, user });
  } catch (error) {
    res.status(500).json({ msg: "Error while login", error });
  }
};

const Logout = async (req, res) => {
  res.status(200).json({ msg: "Logout Successful" });
};

module.exports = { Register, Login, Logout };
