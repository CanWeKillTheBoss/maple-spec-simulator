const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', function(req, res, next) {
    res.send('hello');
});

app.listen(PORT);