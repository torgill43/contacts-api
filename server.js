const express = require('express');
const app = express();

const port = 8081;

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(port, function () {
    console.log(`Listening on localhost:${port}`);
})