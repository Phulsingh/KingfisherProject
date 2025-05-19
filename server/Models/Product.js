const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  originalPrice: Number,
  pieces: String,
  image: String,
  discount: Number,
  category: {
    type: String,
    enum: ['Vegetable', 'Fruit', 'Non-Veg', 'Sub-Product', 'Explor-category','Best-Seller', 'Hot-product', 'Oil-Masala' ], // restrict to these categories
    required: true
  },
});

module.exports = mongoose.model('Product', productSchema);
