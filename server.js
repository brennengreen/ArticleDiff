//'use strict';
const express = require('express');
const PORT = process.env.PORT || 5000;
const path = require("path");
var app = module.exports = express();

// Define a templating engine
app.set('view engine', 'pug')
// Define a views folder
app.set('views', path.join(__dirname, 'views'))

// Serve static content
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT);
app.get('/', (req, res) => {
    res.status(200).render("index", {title: "News Artical Bias Analysis"})
});



// If there's nothing else to do then render 404


console.log(`Listening on ${PORT}`);