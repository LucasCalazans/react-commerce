const express = require('express');

const static = require('../static/products.json');
const products = express.Router();

// All products
products.get('/', (req, res) => {
    const code = !!products ? 200 : 404;
    const data = !!products
        ? products
        : {
              error: true,
              msg: 'Products not found.',
          };
    res.status(code).json(data);
});

// Product ID
products.get('/:id', (req, res) => {
    const product = static.find(product => product.id === Number(req.params.id));
    const code = !!product ? 200 : 404;
    const data = !!product
        ? product
        : {
              error: true,
              msg: `Product ${req.params.id} not found.`,
          };

    res.status(code).json(data);
});

module.exports = products;
