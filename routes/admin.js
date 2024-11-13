const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-products', (req, res) => {
      res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/add-products', (req, res) => {
      console.log(req.body);
      res.redirect('/');
})

module.exports = router;