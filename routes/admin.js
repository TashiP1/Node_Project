const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const products = [];
const router = express.Router();

router.get('/add-products', (req, res) => {
  res.render('add-product', { pageTitle: "Add Product" });
});

router.post('/add-products', (req, res) => {
  const { title, cost, desc } = req.body;
  products.push({ title, cost, desc });
  
  res.redirect('/');
});

exports.routes = router;
exports.product = products;
