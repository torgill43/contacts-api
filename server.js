const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/mongodb')
const nameRoute = require('./routes/nameRoute')

const port = process.env.Port || 8080;
const app = express();

app
    .use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    })    
    .use('/professional', nameRoute);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on port ${port}`);
    }
});