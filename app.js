const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const exp = require('constants');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use((req, res) => {
      res.status(404).render('404', {pageTitle: "Page Not Found"});
})

app.listen(3000);