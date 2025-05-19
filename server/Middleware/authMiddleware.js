const jwt = require('jsonwebtoken');
const User = require("../Models/User.js")
const dotenv = require("dotenv");
dotenv.config();


const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
 
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_USER);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};

const adminOnly = (req, res, next) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Admin access only' });
  }
  next();
};

module.exports = { protect, adminOnly };
