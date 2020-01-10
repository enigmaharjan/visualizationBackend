// server.js
// load the things we need
const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//to use the files inside the directory
app.use("/styles",express.static(__dirname + "/styles"));
app.use("/js",express.static(__dirname + "/js"));
app.use("/fonts",express.static(__dirname + "/fonts"));

// use res.render to load up an ejs view file
// login page 
app.get('/login', function(req, res) {
    res.render('pages/login');
});

// product page 
app.get('/product', function(req, res) {
    res.render('pages/product');
});

// signup page 
app.get('/signup', function(req, res) {
    res.render('pages/signup');
});

// forecasting page
app.get('/forecasting', function(req, res) {
    res.render('pages/forecasting');
});

// fee page
app.get('/customer', function(req, res) {
    res.render('pages/customer');
});

//index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(8080);
console.log('8080 is the magic port');