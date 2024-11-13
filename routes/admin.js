const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const products = [];
const router = express.Router();

router.get('/add-products', (req, res) => {
      res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/add-products', (req, res) => {
      products.push({title: req.body.title});
      res.redirect('/');
})

exports.routes = router;
exports.product = products;