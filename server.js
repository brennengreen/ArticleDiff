//'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const path = require("path");
var app = module.exports = express();

// Define a templating engine
app.set('view engine', 'pug')
// Define a views folder
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve static content
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.render("index", {title: "News Artical Bias Analysis"});
})

app.get('results', function(req, res) {
    res.render("results");
})

// If there's nothing else to do then render 404

app.listen(PORT);
console.log(`Listening on ${PORT}`);