const express = require("express");

const router = express.Router();

const Product = require("../models/product");




// GET PRODUCTS

router.get("/", async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});




// ADD PRODUCT

router.post("/", async (req, res) => {

  try {

    const product = new Product({

      name: req.body.name,

      price: req.body.price,

      category: req.body.category,

      image: req.body.image,

    });

    const savedProduct =
      await product.save();

    res.json(savedProduct);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});




// DELETE PRODUCT

router.delete("/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Product Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});




module.exports = router;
