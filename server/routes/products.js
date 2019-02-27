const express = require('express');

const static = require('../static/products.json');
const products = express.Router();

// All products
products.get('/:page/:limit', (req, res) => {
    const page = !!req.params.page ? req.params.page : 1;
    const limit = !!req.params.limit ? req.params.limit : 20;

    const code = !!static ? 200 : 404;
    const data = !!static
        ? static.slice(page, limit)
        : {
              error: true,
              msg: 'Products not found.',
          };
    res.status(code).json(data);
});

// Product ID
products.get('/:id', (req, res) => {
    const product = static.find(product => product.id === Number(req.params.id));
    const code = !!static ? 200 : 404;
    const data = !!static
        ? product
        : {
              error: true,
              msg: `Product ${req.params.id} not found.`,
          };

    res.status(code).json(data);
});

module.exports = products;
