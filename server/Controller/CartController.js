const User  = require("../Models/User.js");
const Product = require('../Models/Product.js');

const getCart = async(req, res)=>{
    res.json(req.user.cart);
}


const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
  
    const { _id:id, quantity } = req.body;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const existingItem = user.cart.find(i => i.id === id);
    if (existingItem) {
      existingItem.quantity += quantity || 1;
    } else {
      user.cart.push({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity || 1
      });
    }

    await user.save();
    res.json(user.cart);
  } catch (err) {
    res.status(500).json({ message: "Error adding to cart", error: err.message });
  }
};




const removeFromCart = async (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemExists = req.user.cart.find(item => item.id === itemId);
    if (!itemExists) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
  
    req.user.cart = req.user.cart.filter(item => item.id !== itemId);
    await req.user.save();
    res.json({ message: "Item removed", cart: req.user.cart });
  };

module.exports = {getCart, addToCart, removeFromCart}