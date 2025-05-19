const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  number: String,
  isAdmin: { type: Boolean, default: false },
  cart: [
    {
      id: String,
      name: String,
      price: Number,
      originalPrice: Number,
      quantity: Number,
      pieces: String,
      image: String
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
