
const Product = require("../Models/Product.js")

const createProduct = async(req,res)=>{
    const product = Product.create(req.body);
    res.status(201).json({"Product Created":  product})
}

const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
  };

  const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  };

  const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  };

module.exports = { createProduct,  getAllProducts, updateProduct , deleteProduct};
