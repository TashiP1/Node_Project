const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res) => {
      console.log(adminData.product);
      res.render('shop', { pageTitle: "Shop", products: adminData.product });
})

module.exports = router;