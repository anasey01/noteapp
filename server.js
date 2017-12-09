const express = require('express');

var app       = express();
var port      = 8000;


app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.listen(port, () => {
    console.log("Server is now listening at port " + port);
});