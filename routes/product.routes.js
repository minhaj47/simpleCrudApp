const express = require('express');
const Product = require('../models/product.model');
const {
    getAllProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct,
} = require('../controller/product.controller');

const router = express.Router();

// get all product
router.get('/', getAllProducts);

// get a product
router.get('/:id', getProduct);

// post a product
router.post('/', postProduct);

// update a product
router.put('/:id', updateProduct);

// delete a product
router.delete('/:id', deleteProduct);

module.exports = router;
