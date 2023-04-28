const express = require('express');
const mongodb = require('./db/mongodb');

const port = process.env.Port || 8080;
const app = express();

app
    .use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    })    
    .use('/professional', require('./routes/nameRoute'))
    .use('/contacts', require('./routes/contactsRoute'))

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on port ${port}`);
    }
});