'use strict';
const express = require('express');
const PORT = 80 || process.env.PORT;
const app = express();

app.listen(PORT);
app.get('/', (req, res) => {
    res.send("Hello World");
});

console.log(`Listening on ${PORT}`);