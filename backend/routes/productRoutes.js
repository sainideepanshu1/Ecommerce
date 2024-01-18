const express = require("express");
const router = express.Router();
const Product = require("./../Model/ProductSchema");

router.post("/add", async (req, res) => {
  try {
    let products = await Product.find();
    let id;

    if (products.length > 0) {
      let last_product = products.slice(-1)[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    console.log(product);

    await product.save();
    console.log("Product saved successfully.");

    res.json({
      success: true,
      name: product.name,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

router.post("/remove", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Remove");
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
